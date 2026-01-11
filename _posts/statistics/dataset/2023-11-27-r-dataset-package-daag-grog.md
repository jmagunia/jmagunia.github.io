---
title: R Dataset / Package DAAG / grog
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">grog</span> data set which pertains to Alcohol consumption in Australia and New Zealand. The <span class="mono">grog</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">grog</span> data set in R by issuing the following command at the console <span class="mono">data("grog")</span>. This will load the data into a variable called <span class="mono">grog</span>. If R says the <span class="mono">grog</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75748.csv">grog R data set</a></span>. The size of this file is about 944 bytes.</p><h2>Alcohol consumption in Australia and New Zealand</h2>
<h3>Description</h3>
<p>Data are annual apparent alcohol consumption in Australia and New Zealand, in liters of pure alcohol content per annum, separately for beer, wine, and spirits (including spirit-based products).</p>
<h3>Usage</h3>
<pre>data(grog)</pre>
<h3>Format</h3>
<p>A data frame with 18 observations on the following 5 variables.</p>
<dl>
<dt><code>Beer</code></dt>
<dd>
<p>liters per annum</p>
</dd>
<dt><code>Wine</code></dt>
<dd>
<p>liters per annum</p>
</dd>
<dt><code>Spirit</code></dt>
<dd>
<p>liters per annum</p>
</dd>
<dt><code>Country</code></dt>
<dd>
<p>a factor with levels <code>Australia</code> <code>NewZealand</code></p>
</dd>
<dt><code>Year</code></dt>
<dd>
<p>Year ending in June of the given year</p>
</dd>
</dl>
<h3>Details</h3>
<p>Data are total available pure alcohol content, for the three categories, divided by numbers of persons aged 15 years or more. The source data for New Zealand included quarterly figures from December 1997, and annual data to December for all years. The annual New Zealand figure to June 1998 required an estimate for September 1997 that was obtained by extrapolating back the third quarter trend line from later years.</p>
<h3>Source</h3>
<p>Australian data are from <a href="http://www.abs.gov.au">http://www.abs.gov.au</a>. For New Zealand data, go to <a href="http://www.stats.govt.nz/infoshare/">http://www.stats.govt.nz/infoshare/</a> Click on 'Industry sectors' and then on 'Alcohol Available for Consumption - ALC'.</p>
<h3>Examples</h3>
<pre>
data(grog)
library(lattice)
xyplot(Beer+Wine+Spirit ~ Year | Country, data=grog)
xyplot(Beer+Wine+Spirit ~ Year, groups=Country, data=grog, outer=TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75748.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75748.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-grog.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75748.json';</script>