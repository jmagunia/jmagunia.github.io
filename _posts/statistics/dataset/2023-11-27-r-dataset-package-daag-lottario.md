---
title: R Dataset / Package DAAG / Lottario
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Lottario</span> data set which pertains to Ontario Lottery Data. The <span class="mono">Lottario</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">Lottario</span> data set in R by issuing the following command at the console <span class="mono">data("Lottario")</span>. This will load the data into a variable called <span class="mono">Lottario</span>. If R says the <span class="mono">Lottario</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76819.csv">Lottario R data set</a></span>. The size of this file is about 246 bytes.</p><h2>Ontario Lottery Data</h2>
<h3>Description</h3>
<p>The data frame <code>Lottario</code> is a summary of 122 weekly draws of an Ontario lottery, beginning in November, 1978. Each draw consists of 7 numbered balls, drawn without replacement from an urn consisting of balls numbered from 1 through 39.</p>
<h3>Usage</h3>
<pre>Lottario</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Number</dt>
<dd>
<p>the integers from 1 to 39, representing the numbered balls</p>
</dd>
<dt>Frequency</dt>
<dd>
<p>the number of occurrences of each numbered ball</p>
</dd>
</dl>
<h3>Source</h3>
<p>The Ontario Lottery Corporation</p>
<h3>References</h3>
<p>Bellhouse, D.R. (1982). Fair is fair: new rules for Canadian lotteries. Canadian Public Policy - Analyse de Politiques 8: 311-320.</p>
<h3>Examples</h3>
<pre> 
order(Lottario$Frequency)[33:39]# the 7 most frequently chosen numbers
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76819.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76819.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-lottario.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76819.json';</script>