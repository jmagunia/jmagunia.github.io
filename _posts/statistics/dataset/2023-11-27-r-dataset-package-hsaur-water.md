---
title: R Dataset / Package HSAUR / water
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">water</span> data set which pertains to Mortality and Water Hardness . The <span class="mono">water</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">water</span> data set in R by issuing the following command at the console <span class="mono">data("water")</span>. This will load the data into a variable called <span class="mono">water</span>. If R says the <span class="mono">water</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10755.csv">water R data set</a></span>. The size of this file is about 1,701 bytes.</p><h2>Mortality and Water Hardness</h2>
<h3>Description</h3>
<p>The mortality and drinking water hardness for 61 cities in England and Wales.</p>
<h3>Usage</h3>
<pre>data("water")</pre>
<h3>Format</h3>
<p>A data frame with 61 observations on the following 4 variables.</p>
<dl>
<dt>location</dt>
<dd>
<p>a factor with levels <code>North</code> and <code>South</code> indicating whether the town is as north as Derby.</p>
</dd>
<dt>town</dt>
<dd>
<p>the name of the town.</p>
</dd>
<dt>mortality</dt>
<dd>
<p>averaged annual mortality per 100.000 male inhabitants.</p>
</dd>
<dt>hardness</dt>
<dd>
<p>calcium concentration (in parts per million).</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data were collected in an investigation of environmental causes of disease. They show the annual mortality per 100,000 for males, averaged over the years 1958-1964, and the calcium concentration (in parts per million) in the drinking water for 61 large towns in England and Wales. The higher the calcium concentration, the harder the water. Towns at least as far north as Derby are identified in the table. Here there are several questions that might be of interest including, are mortality and water hardness related, and do either or both variables differ between northern and southern towns?</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("water", package = "HSAUR")
plot(mortality ~ hardness, data = water, 
 col = as.numeric(water$location))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10755.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10755.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-water.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10755.json';</script>