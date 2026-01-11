---
title: R Dataset / Package robustbase / lactic
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">lactic</span> data set which pertains to Lactic Acid Concentration Measurement Data. The <span class="mono">lactic</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">lactic</span> data set in R by issuing the following command at the console <span class="mono">data("lactic")</span>. This will load the data into a variable called <span class="mono">lactic</span>. If R says the <span class="mono">lactic</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70109.csv">lactic R data set</a></span>. The size of this file is about 140 bytes.</p><h2>Lactic Acid Concentration Measurement Data</h2>
<h3>Description</h3>
<p>Data on the Calibration of an Instrument that Measures Lactic Acid Concentration in Blood, from Afifi and Azen (1979) - comparing the true concentration X with the measured value Y.</p>
<h3>Usage</h3>
<pre>data(lactic)</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on the following 2 variables.</p>
<dl>
<dt><code>X</code></dt>
<dd>
<p>True Concentration</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Instrument</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.62, table 10.</p>
<h3>Examples</h3>
<pre>
data(lactic)
summary(lm.lactic &lt;- lm(Y ~., data=lactic))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70109.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70109.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-lactic.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70109.json';</script>