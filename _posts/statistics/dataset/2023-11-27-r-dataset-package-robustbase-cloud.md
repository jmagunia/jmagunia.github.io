---
title: R Dataset / Package robustbase / cloud
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cloud</span> data set which pertains to Cloud point of a Liquid. The <span class="mono">cloud</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">cloud</span> data set in R by issuing the following command at the console <span class="mono">data("cloud")</span>. This will load the data into a variable called <span class="mono">cloud</span>. If R says the <span class="mono">cloud</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50014.csv">cloud R data set</a></span>. The size of this file is about 156 bytes.</p><h2>Cloud point of a Liquid</h2>
<h3>Description</h3>
<p>This data set contains the measurements concerning the cloud point of a Liquid, from Draper and Smith (1969). The cloud point is a measure of the degree of crystallization in a stock.</p>
<h3>Usage</h3>
<pre>data(cloud)</pre>
<h3>Format</h3>
<p>A data frame with 19 observations on the following 2 variables.</p>
<dl>
<dt><code>Percentage</code></dt>
<dd>
<p>Percentage of I-8</p>
</dd>
<dt><code>CloudPoint</code></dt>
<dd>
<p>Cloud point</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.96, table 10.</p>
<h3>Examples</h3>
<pre>
data(cloud)
summary(lm.cloud &lt;- lm(CloudPoint ~., data=cloud))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50014.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50014.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-cloud.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50014.json';</script>