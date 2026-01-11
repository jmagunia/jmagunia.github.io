---
title: R Dataset / Package KMsurv / kidtran
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kidtran</span> data set which pertains to data from Section 1.7. The <span class="mono">kidtran</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">kidtran</span> data set in R by issuing the following command at the console <span class="mono">data("kidtran")</span>. This will load the data into a variable called <span class="mono">kidtran</span>. If R says the <span class="mono">kidtran</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-61787.csv">kidtran R data set</a></span>. The size of this file is about 15,010 bytes.</p><h2>data from Section 1.7</h2>
<h3>Description</h3>
<p>The <code>kidtran</code> data frame has 863 rows and 6 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>obs</dt>
<dd>
<p>Observation number</p>
</dd>
<dt>time</dt>
<dd>
<p>Time to death or on-study time</p>
</dd>
<dt>delta</dt>
<dd>
<p>Death indicator (0=alive, 1=dead)</p>
</dd>
<dt>gender</dt>
<dd>
<p>1=male, 2=female</p>
</dd>
<dt>race</dt>
<dd>
<p>1=white, 2=black</p>
</dd>
<dt>age</dt>
<dd>
<p>Age in years</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer.</p>
<h3>Examples</h3>
<pre>
data(kidtran)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-61787.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-61787.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-kidtran.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-61787.json';</script>