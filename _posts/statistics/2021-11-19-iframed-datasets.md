---
title: Using iframes From This Site to Embed Datasets on Webpages
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /iframed-datasets.html
---
Picostat was a web application I created with Drupal 7/8/9. It had support for embedding datasets in webpages after they have been imported. I no longer maintain that project, but I transferred over the iframe functionality to `jmagunia.com`. You can see the code in a sample dataset page like the <a href="https://jmagunia.com/dataset/r-dataset-package-zelig-kmenta">kmenta</a> dataset. On that page you will find the iframe HTML code like this:

{% highlight xml %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-kmenta.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}

Sharing the dataset with this method allows users to have an Excel-like view of the data table. Here is a screenshot of the `kmenta` dataset page:

<img src="/assets/images/kmenta_dataset.png" alt="Kmenta dataset on jmagunia.com" style="width:100%; height: auto; border:1px solid #ccc;"/>

If you copy the iframe code to your website, the embedded dataset would appear like this in webpages as displayed here:

<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-kmenta.html" width="100%" height="100%" style="border:0px"></iframe>

You can do this for any of the <a href="/datasets.html">datasets</a> found on this site.
