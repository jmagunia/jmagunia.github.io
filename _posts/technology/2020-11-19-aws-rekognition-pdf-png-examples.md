---
title: Using AWS Rekognition To Turn Images and PDFs Into Human Readable Text
author: jmagunia
layout: page
permalink: /technology/:slug.html
redirect_from: /aws-rekognition-pdf-png-examples.html
---

I wanted to turn a PDF into text I could copy and paste so I turned to AWS Rekognition. The console only accepted files that were 5 MB. Mine was 13 MB so I had to use the console with asynchronous methods.

I found an example on the AWS Blog that mentioned how to to do it. You can find the full blog post at <a href="https://aws.amazon.com/blogs/machine-learning/automatically-extract-text-and-structured-data-from-documents-with-amazon-textract">AWS Rekognition Blog post</a>. I am going to re-use two snippets from there and explain what they do. The first document I wanted to convert was a screenshot of a book page I took. The following is not text but an image of text that we are going to convert to text that can be copied and pasted with the mouse.

<img src="/assets/images/screenshot.png" alt="Bhagavad Gita text">


The contents of rekog.py:
{% highlight python %}
import boto3

# CHANGE THESE
s3BucketName = "picostat.com"
documentName = "bg.pdf"

# Amazon Textract client
textract = boto3.client('textract')

# Call Amazon Textract
response = textract.detect_document_text(
    Document={
        'S3Object': {
            'Bucket': s3BucketName,
            'Name': documentName
        }
    })

# print(response)

# Print detected text
for item in response["Blocks"]:
    if item["BlockType"] == "LINE":
        print (item["Text"])
{% endhighlight %}

All you have to do to adapt it for your case is upload your image to an S3 bucket. In my case that was "picostat.com" which is listed in the code above. You then change the name of the image to whatever your filename is then run it with this command:

{% highlight console %}
python3 rekog.py > bg.txt
{% endhighlight %}

The greater than tells Python to put the transcribed text in the file called `bg.txt`.

If you get an error message that `boto` is not installed you can install it on a Mac with this command:

{% highlight console %}
pip3 install boto3 --user
{% endhighlight %}

To convert a large PDF (larged than 5 MB) you will need an asynchronous script:

Contents of rekog2.py
{% highlight python %}
import boto3
import time

def startJob(s3BucketName, objectName):
    response = None
    client = boto3.client('textract')
    response = client.start_document_text_detection(
    DocumentLocation={
        'S3Object': {
            'Bucket': s3BucketName,
            'Name': objectName
        }
    })

    return response["JobId"]

def isJobComplete(jobId):
    # For production use cases, use SNS based notification
    # Details at: https://docs.aws.amazon.com/textract/latest/dg/api-async.html
    time.sleep(30)
    client = boto3.client('textract')
    response = client.get_document_text_detection(JobId=jobId)
    status = response["JobStatus"]
    print("Job status: {}".format(status))

    while(status == "IN_PROGRESS"):
        time.sleep(5)
        response = client.get_document_text_detection(JobId=jobId)
        status = response["JobStatus"]
        print("Job status: {}".format(status))

    return status

def getJobResults(jobId):

    pages = []

    client = boto3.client('textract')
    response = client.get_document_text_detection(JobId=jobId)

    pages.append(response)
    print("Resultset page recieved: {}".format(len(pages)))
    nextToken = None
    if('NextToken' in response):
        nextToken = response['NextToken']

    while(nextToken):

        response = client.get_document_text_detection(JobId=jobId, NextToken=nextToken)

        pages.append(response)
        print("Resultset page recieved: {}".format(len(pages)))
        nextToken = None
        if('NextToken' in response):
            nextToken = response['NextToken']

    return pages

# CHANGE THESE
s3BucketName = "picostat.com"
documentName = "bg.pdf"

jobId = startJob(s3BucketName, documentName)
print("Started job with id: {}".format(jobId))
if(isJobComplete(jobId)):
    response = getJobResults(jobId)

#print(response)

# Print detected text
for resultPage in response:
    for item in resultPage["Blocks"]:
        if item["BlockType"] == "LINE":
            print (item["Text"])
{% endhighlight %}
Once again, all you need to do is change the document name and the bucket name and then run this command.

{% highlight console %}
python3 rekog2.py > bg.txt
{% endhighlight %}

If you're not sure how to upload a document to S3 you can do it with this command if you have AWS CLI installed:

{% highlight console %}
aws s3 cp bg.pdf s3://picostat.com
{% endhighlight %}

Or you can go to the AWS Console to use the graphical user interface uploaded in the S3 section.
