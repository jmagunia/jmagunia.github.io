---
title: R Dataset / Package KMsurv / alloauto
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">alloauto</span> data set which pertains to data from Section 1.9. The <span class="mono">alloauto</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">alloauto</span> data set in R by issuing the following command at the console <span class="mono">data("alloauto")</span>. This will load the data into a variable called <span class="mono">alloauto</span>. If R says the <span class="mono">alloauto</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-73286.csv">alloauto R data set</a></span>. The size of this file is about 1,074 bytes.</p><h2>data from Section 1.9</h2>
<h3>Description</h3>
<p>The <code>alloauto</code> data frame has 90 rows and 5 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>time</dt>
<dd>
<p>Time to death or relapse, months</p>
</dd>
<dt>type</dt>
<dd>
<p>Type of transplant (1=allogeneic, 2=autologous)</p>
</dd>
<dt>delta</dt>
<dd>
<p>Leukemia-free survival indicator (0=alive without relapse, 1=dead or relapse)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer. Kardaun Stat. Nederlandica 37 (1983), 103-126.</p>
<h3>Examples</h3>
<pre>
data(alloauto)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-73286.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-73286.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-alloauto.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-73286.json';</script>