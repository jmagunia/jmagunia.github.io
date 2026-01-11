---
title: R Dataset / Package datasets / airmiles
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">airmiles</span> data set which pertains to Passenger Miles on Commercial US Airlines, 1937–1960. The <span class="mono">airmiles</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">airmiles</span> data set in R by issuing the following command at the console <span class="mono">data("airmiles")</span>. This will load the data into a variable called <span class="mono">airmiles</span>. If R says the <span class="mono">airmiles</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-39365.csv">airmiles R data set</a></span>. The size of this file is about 265 bytes.</p><h2>Passenger Miles on Commercial US Airlines, 1937–1960</h2>
<h3>Description</h3>
<p>The revenue passenger miles flown by commercial airlines in the United States for each year from 1937 to 1960.</p>
<h3>Usage</h3>
<pre>airmiles</pre>
<h3>Format</h3>
<p>A time series of 24 observations; yearly, 1937–1960.</p>
<h3>Source</h3>
<p>F.A.A. Statistical Handbook of Aviation.</p>
<h3>References</h3>
<p>Brown, R. G. (1963) <em>Smoothing, Forecasting and Prediction of Discrete Time Series</em>. Prentice-Hall.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(airmiles, main = "airmiles data",
 xlab = "Passenger-miles flown by U.S. commercial airlines", col = 4)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-39365.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-39365.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-airmiles.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-39365.json';</script>