---
title: R Dataset / Package KMsurv / bnct
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bnct</span> data set which pertains to data from Exercise 7.7, p223. The <span class="mono">bnct</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">bnct</span> data set in R by issuing the following command at the console <span class="mono">data("bnct")</span>. This will load the data into a variable called <span class="mono">bnct</span>. If R says the <span class="mono">bnct</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-77514.csv">bnct R data set</a></span>. The size of this file is about 231 bytes.</p><h2>data from Exercise 7.7, p223</h2>
<h3>Description</h3>
<p>The <code>bnct</code> data frame has 34 rows and 3 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>trt</dt>
<dd>
<p>Treatment (1=untreated, 2=radiated, 3=radiated + BPA)</p>
</dd>
<dt>time</dt>
<dd>
<p>Death time or on-study time, days</p>
</dd>
<dt>death</dt>
<dd>
<p>Death indicator (1=dead, 0=alive)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer.</p>
<h3>Examples</h3>
<pre>
data(bnct)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-77514.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-77514.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-bnct.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-77514.json';</script>