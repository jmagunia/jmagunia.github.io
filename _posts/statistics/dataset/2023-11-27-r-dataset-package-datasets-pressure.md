---
title: R Dataset / Package datasets / pressure
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">pressure</span> data set which pertains to Vapor Pressure of Mercury as a Function of Temperature. The <span class="mono">pressure</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">pressure</span> data set in R by issuing the following command at the console <span class="mono">data("pressure")</span>. This will load the data into a variable called <span class="mono">pressure</span>. If R says the <span class="mono">pressure</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47267.csv">pressure R data set</a></span>. The size of this file is about 183 bytes.</p><h2>Vapor Pressure of Mercury as a Function of Temperature</h2>
<h3>Description</h3>
<p>Data on the relation between temperature in degrees Celsius and vapor pressure of mercury in millimeters (of mercury).</p>
<h3>Usage</h3>
<pre>pressure</pre>
<h3>Format</h3>
<p>A data frame with 19 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[, 1]</td>
<td style="text-align: left;">temperature</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">temperature (deg C)</td>
</tr>
<tr>
<td style="text-align: right;">[, 2]</td>
<td style="text-align: left;">pressure</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">pressure (mm)</td>
</tr>
</table>
<h3>Source</h3>
<p>Weast, R. C., ed. (1973) <em>Handbook of Chemistry and Physics</em>. CRC Press.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(pressure, xlab = "Temperature (deg C)",
 ylab = "Pressure (mm of Hg)",
 main = "pressure data: Vapor Pressure of Mercury")
plot(pressure, xlab = "Temperature (deg C)",log = "y",
 ylab = "Pressure (mm of Hg)",
 main = "pressure data: Vapor Pressure of Mercury")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47267.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47267.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-pressure.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47267.json';</script>