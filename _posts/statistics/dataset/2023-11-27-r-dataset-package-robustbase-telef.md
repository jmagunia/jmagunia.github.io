---
title: R Dataset / Package robustbase / telef
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">telef</span> data set which pertains to Number of International Calls from Belgium. The <span class="mono">telef</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">telef</span> data set in R by issuing the following command at the console <span class="mono">data("telef")</span>. This will load the data into a variable called <span class="mono">telef</span>. If R says the <span class="mono">telef</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-48460.csv">telef R data set</a></span>. The size of this file is about 202 bytes.</p><h2>Number of International Calls from Belgium</h2>
<h3>Description</h3>
<p>Number of international calls from Belgium, taken from the Belgian Statistical Survey, published by the Ministry of Economy.</p>
<h3>Usage</h3>
<pre>data(telef)</pre>
<h3>Format</h3>
<p>A data frame with 24 observations on the following 2 variables.</p>
<dl>
<dt><code>Calls</code></dt>
<dd>
<p>Number of Calls (in tens of millions)</p>
</dd>
<dt><code>Year</code></dt>
<dd>
<p>Year (1950 - 1973)</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, page 26, table 2.</p>
<h3>Examples</h3>
<pre>
data(telef)
summary(lm.telef &lt;- lm(Year~., data=telef))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-48460.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-48460.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-telef.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-48460.json';</script>