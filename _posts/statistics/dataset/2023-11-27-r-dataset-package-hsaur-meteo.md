---
title: R Dataset / Package HSAUR / meteo
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">meteo</span> data set which pertains to Meteorological Measurements for 11 Years . The <span class="mono">meteo</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">meteo</span> data set in R by issuing the following command at the console <span class="mono">data("meteo")</span>. This will load the data into a variable called <span class="mono">meteo</span>. If R says the <span class="mono">meteo</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-78548.csv">meteo R data set</a></span>. The size of this file is about 446 bytes.</p><h2>Meteorological Measurements for 11 Years</h2>
<h3>Description</h3>
<p>Several meteorological measurements for a period between 1920 and 1931.</p>
<h3>Usage</h3>
<pre>data("meteo")</pre>
<h3>Format</h3>
<p>A data frame with 11 observations on the following 6 variables.</p>
<dl>
<dt><code>year</code></dt>
<dd>
<p>the years.</p>
</dd>
<dt><code>rainNovDec</code></dt>
<dd>
<p>rainfall in November and December (mm).</p>
</dd>
<dt><code>temp</code></dt>
<dd>
<p>average July temperature.</p>
</dd>
<dt><code>rainJuly</code></dt>
<dd>
<p>rainfall in July (mm).</p>
</dd>
<dt><code>radiation</code></dt>
<dd>
<p>radiation in July (millilitres of alcohol).</p>
</dd>
<dt><code>yield</code></dt>
<dd>
<p>average harvest yield (quintals per hectare).</p>
</dd>
</dl>
<h3>Details</h3>
<p>Carry out a principal components analysis of both the covariance matrix and the correlation matrix of the data and compare the results. Which set of components leads to the most meaningful interpretation?</p>
<h3>Source</h3>
<p>B. S. Everitt and G. Dunn (2001), <em>Applied Multivariate Data Analysis</em>, 2nd edition, Arnold, London.</p>
<h3>Examples</h3>
<pre>data("meteo", package = "HSAUR")
meteo</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-78548.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-78548.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-meteo.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-78548.json';</script>