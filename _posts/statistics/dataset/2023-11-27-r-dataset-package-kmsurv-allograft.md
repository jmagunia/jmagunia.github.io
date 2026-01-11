---
title: R Dataset / Package KMsurv / allograft
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">allograft</span> data set which pertains to data from Exercise 13.1, p418. The <span class="mono">allograft</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">allograft</span> data set in R by issuing the following command at the console <span class="mono">data("allograft")</span>. This will load the data into a variable called <span class="mono">allograft</span>. If R says the <span class="mono">allograft</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11747.csv">allograft R data set</a></span>. The size of this file is about 355 bytes.</p><h2>data from Exercise 13.1, p418</h2>
<h3>Description</h3>
<p>The <code>allograft</code> data frame has 34 rows and 4 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>patient</dt>
<dd>
<p>Patient</p>
</dd>
<dt>time</dt>
<dd>
<p>Time to graft rejection, days</p>
</dd>
<dt>rejection</dt>
<dd>
<p>Indicator of graft rejection (1=yes, 0=no)</p>
</dd>
<dt>match</dt>
<dd>
<p>Good HLA skin match (1=yes, 0=no)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer. Batchelor and Hackett Lancet 2 (1970): 581-583.</p>
<h3>Examples</h3>
<pre>
data(allograft)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11747.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11747.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-allograft.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11747.json';</script>