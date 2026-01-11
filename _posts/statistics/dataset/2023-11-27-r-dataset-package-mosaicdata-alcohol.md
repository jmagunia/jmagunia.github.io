---
title: R Dataset / Package mosaicData / Alcohol
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Alcohol</span> data set which pertains to Alcohol Consumption per Capita. The <span class="mono">Alcohol</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Alcohol</span> data set in R by issuing the following command at the console <span class="mono">data("Alcohol")</span>. This will load the data into a variable called <span class="mono">Alcohol</span>. If R says the <span class="mono">Alcohol</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62117.csv">Alcohol R data set</a></span>. The size of this file is about 10,871 bytes.</p><h2>Alcohol Consumption per Capita</h2>
<h3>Description</h3>
<p>These data provide per capita alcohol consumption values for many countries in 2005 and 2008. There are also a few countries for which there are data in other years.</p>
<h3>Usage</h3>
<pre>
data(Alcohol)
</pre>
<h3>Format</h3>
<p>A data frame with 411 observations on the following variables.</p>
<ul>
<li>
<p><code>country</code> country name</p>
</li>
<li>
<p><code>year</code> year</p>
</li>
<li>
<p><code>alcohol</code> per capita alcohol consumption</p>
</li>
</ul>
<h3>Source</h3>
<p>Gapminder (<a href="http://www.gapminder.org/">http://www.gapminder.org/</a>)</p>
<h3>References</h3>
<p><a href="http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts">http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts</a></p>
<h3>Examples</h3>
<pre>
data(Alcohol)
# There are only a few observations in years other than 2005 and 2008
subset(Alcohol, ! year %in% c(2005,2008))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62117.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62117.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-alcohol.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62117.json';</script>