---
title: R Dataset / Package multgee / arthritis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">arthritis</span> data set which pertains to Rheumatoid Arthritis Clinical Trial. The <span class="mono">arthritis</span> data set is found in the <span class="mono">multgee</span> R package. You can load the <span class="mono">arthritis</span> data set in R by issuing the following command at the console <span class="mono">data("arthritis")</span>. This will load the data into a variable called <span class="mono">arthritis</span>. If R says the <span class="mono">arthritis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("multgee")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38817.csv">arthritis R data set</a></span>. The size of this file is about 15,141 bytes.</p><h2>Rheumatoid Arthritis Clinical Trial</h2>
<h3>Description</h3>
<p>Rheumatoid self-assessment scores for 302 patients, measured on a five-level ordinal response scale at three follow-up times.</p>
<h3>Usage</h3>
<pre>data(arthritis)</pre>
<h3>Format</h3>
<p>A data frame with 906 observations on the following 7 variables:</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>Patient identifier variable.</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>Self-assessment score of rheumatoid arthritis measured on a five-level ordinal response scale.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>Coded as (1) for female and (2) for male.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>Recorded at the baseline.</p>
</dd>
<dt><code>trt</code></dt>
<dd>
<p>Treatment group variable, coded as (1) for the placebo group and (2) for the drug group.</p>
</dd>
<dt><code>baseline</code></dt>
<dd>
<p>Self-assessment score of rheumatoid arthritis at the baseline.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>Follow-up time recorded in months.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Lipsitz, S.R. and Kim, K. and Zhao, L. (1994) Analysis of repeated categorical data using generalized estimating equations. <em>Statistics in Medicine</em>, <b>13</b>, 1149–1163.</p>
<h3>Examples</h3>
<pre>
data(arthritis)
str(arthritis)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38817.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38817.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-multgee-arthritis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38817.json';</script>