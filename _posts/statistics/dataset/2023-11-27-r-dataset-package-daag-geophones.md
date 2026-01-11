---
title: R Dataset / Package DAAG / geophones
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">geophones</span> data set which pertains to Seismic Timing Data. The <span class="mono">geophones</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">geophones</span> data set in R by issuing the following command at the console <span class="mono">data("geophones")</span>. This will load the data into a variable called <span class="mono">geophones</span>. If R says the <span class="mono">geophones</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52229.csv">geophones R data set</a></span>. The size of this file is about 530 bytes.</p><h2>Seismic Timing Data</h2>
<h3>Description</h3>
<p>The <code>geophones</code> data frame has 56 rows and 2 columns. Thickness of a layer of Alberta substratum as measured by a line of geophones.</p>
<h3>Usage</h3>
<pre>geophones</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>distance</dt>
<dd>
<p>location of geophone.</p>
</dd>
<dt>thickness</dt>
<dd>
<p>time for signal to pass through substratum.</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
plot(geophones)
lines(lowess(geophones, f=.25))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52229.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52229.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-geophones.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52229.json';</script>