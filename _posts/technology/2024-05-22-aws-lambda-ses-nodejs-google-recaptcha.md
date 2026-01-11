---
title: Creating an  AWS Lambda App That Sends an SES Email Upon Successful Google Recaptcha in NodeJS v20
author: jmagunia
layout: page
permalink: /technology/:slug.html
---
Node 16 was no longer going to be supported so I wanted to update my AWS Lambda app that validates Google Recaptcha via REST to the latest version (NodeJS v20). You may have to change some of the things around below, but it is working for me (proof is this websites Contact form; feel free to say Hello if this worked for you). I also posted the solution on StackOverflow:

[https://stackoverflow.com/questions/78520621/how-to-send-an-aws-ses-email-in-lambda-with-aws-sdk-v3-using-the-latest-version](https://stackoverflow.com/questions/78520621/how-to-send-an-aws-ses-email-in-lambda-with-aws-sdk-v3-using-the-latest-version)

You will want to add your own Recaptcha secret and also adjust the AWS Region. The event variables must also be customized based on the REST values sent via your AWS API Gateway (not covered here.) This took me awhile to wrap my horns around. I'm not a Node person by default so I had to learn many of the paradigms mentioned below like the `HttpRequest` syntax. The good thing about the following code is you don't need to create any AWS Layers (zip files of packaged NodeJS files). The `aws-sdk` comes for free with Lambda.

{% highlight javascript %}
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
export const reCaptchaSecret = "ADDSECRET";
const REGION = "us-east-1";
const sesClient = new SESClient({ region: REGION });
export { sesClient };

export const handler = async (event, context, callback) => {
  // Grab the following variable from the User facing form.
  console.log(event.gRecapResp);
  const apiUrl = new URL('https://www.google.com/recaptcha/api/siteverify?secret=' + reCaptchaSecret + '&response=' + event.gRecapResp);
  const request = new HttpRequest({
    hostname: apiUrl.hostname.toString(),
    protocol: apiUrl.protocol,
    path: apiUrl.pathname +  apiUrl.search.toString(),
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "host": apiUrl.hostname.toString(),
    },
  });
  const client = new NodeHttpHandler();
  const { response } = await client.handle(new HttpRequest(request));
  console.log(response.statusCode + ' ' + response.body.statusMessage);
  var responseBody = '';
  await new Promise(() => {
    response.body.on('data', (chunk) => {
      responseBody += chunk;
    });
    response.body.on('end', () => {
      console.log('responseBody' + JSON.parse(responseBody).success);
      if (JSON.parse(responseBody).success) {
        const command = new SendEmailCommand({
          Destination: {
            ToAddresses: [
              'test@example.org'
            ]
          },
          Message: {
            Body: {
              Text: {
                Data: 'Name: ' + event.name + '\n\nEmail: ' + event.mail + '\n\nMessage: ' + event.message,
                Charset: 'UTF-8'
              }
            },
            Subject: {
              Data: event.referrer + ' Website Referral: ' + event.name,
              Charset: 'UTF-8'
            }
          },
          Source: 'test@example.com'
        });
        try {
          return sesClient.send(command);
        }
        catch (error) {
          callback('MailNotSent');
        }
        finally {
          callback(null, 'MailSent');
        }
      } else {
        callback('MailNotSent');
      }
    });
  }).catch((error) => {
    callback('MailNotSent');
  });

};
{% endhighlight %}

