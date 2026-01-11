---
title: R Dataset / Package multgee / housing
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">housing</span> data set which pertains to Homeless Data. The <span class="mono">housing</span> data set is found in the <span class="mono">multgee</span> R package. You can load the <span class="mono">housing</span> data set in R by issuing the following command at the console <span class="mono">data("housing")</span>. This will load the data into a variable called <span class="mono">housing</span>. If R says the <span class="mono">housing</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("multgee")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68079.csv">housing R data set</a></span>. The size of this file is about 14,953 bytes.</p><h2>Homeless Data</h2>
<h3>Description</h3>
<p>Housing status for 362 severely mentally ill homeless subjects measured at baseline and at three follow-up times.</p>
<h3>Usage</h3>
<pre>data(housing)</pre>
<h3>Format</h3>
<p>A data frame with 1448 observations on the following 4 variables:</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>Subject identifier variable.</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>Housing status response, coded as (1) for street living, (2) for community living and (3) for independent housing.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>Time recorded in months.</p>
</dd>
<dt><code>sec</code></dt>
<dd>
<p>Section 8 rent certificate indicator.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Hulrburt M.S., Wood, P.A. and Hough, R.L. (1996) Providing independent housing for the homeless mentally ill: a novel approach to evaluating longitudinal housing patterns. <em>Journal of Community Psychology</em>, <b>24</b>, 291–310.</p>
<h3>Examples</h3>
<pre>
data(housing)
str(housing)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68079.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68079.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-multgee-housing.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68079.json';</script>