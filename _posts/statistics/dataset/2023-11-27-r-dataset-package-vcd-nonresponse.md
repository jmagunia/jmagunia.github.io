---
title: R Dataset / Package vcd / NonResponse
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">NonResponse</span> data set which pertains to Non-Response Survey Data. The <span class="mono">NonResponse</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">NonResponse</span> data set in R by issuing the following command at the console <span class="mono">data("NonResponse")</span>. This will load the data into a variable called <span class="mono">NonResponse</span>. If R says the <span class="mono">NonResponse</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-64082.csv">NonResponse R data set</a></span>. The size of this file is about 365 bytes.</p><h2>Non-Response Survey Data</h2>
<h3>Description</h3>
<p>Data about non-response for a Danish survey in 1965.</p>
<h3>Usage</h3>
<pre>
data("NonResponse")
</pre>
<h3>Format</h3>
<p>A data frame with 12 observations and 4 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>residence</dt>
<dd>
<p>factor indicating whether residence was in Copenhagen, in a city outside Copenhagen or at the countryside (Copenhagen, City, Country).</p>
</dd>
<dt>response</dt>
<dd>
<p>factor indicating whether a response was given (yes, no).</p>
</dd>
<dt>gender</dt>
<dd>
<p>factor indicating gender (male, female).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, Table 5.17.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
data("NonResponse")
structable(~ ., data = NonResponse)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-64082.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-64082.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-nonresponse.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-64082.json';</script>