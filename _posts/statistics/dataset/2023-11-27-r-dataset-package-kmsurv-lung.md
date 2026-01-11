---
title: R Dataset / Package KMsurv / lung
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">lung</span> data set which pertains to data from Exercise 4.4, p120. The <span class="mono">lung</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">lung</span> data set in R by issuing the following command at the console <span class="mono">data("lung")</span>. This will load the data into a variable called <span class="mono">lung</span>. If R says the <span class="mono">lung</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44830.csv">lung R data set</a></span>. The size of this file is about 6,593 bytes.</p><h2>data from Exercise 4.4, p120</h2>
<h3>Description</h3>
<p>The <code>lung</code> data frame has 25 rows and 4 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>time</dt>
<dd>
<p>Days to death</p>
</dd>
<dt>death</dt>
<dd>
<p>Death indicator (1=dead), complete follow-up on all patients</p>
</dd>
<dt>time2</dt>
<dd>
<p>Days to 3/31/80 or death (interim analysis)</p>
</dd>
<dt>death2</dt>
<dd>
<p>Death indicator as of 3/31/80 (1=dead, 0=alive)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer.</p>
<h3>Examples</h3>
<pre>
data(lung)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44830.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44830.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-lung.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44830.json';</script>