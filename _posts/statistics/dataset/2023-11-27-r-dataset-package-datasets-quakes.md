---
title: R Dataset / Package datasets / quakes
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">quakes</span> data set which pertains to Locations of Earthquakes off Fiji. The <span class="mono">quakes</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">quakes</span> data set in R by issuing the following command at the console <span class="mono">data("quakes")</span>. This will load the data into a variable called <span class="mono">quakes</span>. If R says the <span class="mono">quakes</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45892.csv">quakes R data set</a></span>. The size of this file is about 24,064 bytes.</p><h2>Locations of Earthquakes off Fiji</h2>
<h3>Description</h3>
<p>The data set give the locations of 1000 seismic events of MB &gt; 4.0. The events occurred in a cube near Fiji since 1964.</p>
<h3>Usage</h3>
<pre>quakes</pre>
<h3>Format</h3>
<p>A data frame with 1000 observations on 5 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">lat</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Latitude of event</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">long</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Longitude</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">depth</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Depth (km)</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">mag</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Richter Magnitude</td>
</tr>
<tr>
<td style="text-align: right;">[,5]</td>
<td style="text-align: left;">stations</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Number of stations reporting</td>
</tr>
</table>
<h3>Details</h3>
<p>There are two clear planes of seismic activity. One is a major plate junction; the other is the Tonga trench off New Zealand. These data constitute a subsample from a larger dataset of containing 5000 observations.</p>
<h3>Source</h3>
<p>This is one of the Harvard PRIM-H project data sets. They in turn obtained it from Dr. John Woodhouse, Dept. of Geophysics, Harvard University.</p>
<h3>Examples</h3>
<pre>
require(graphics)
pairs(quakes, main = "Fiji Earthquakes, N = 1000", cex.main = 1.2, pch = ".")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45892.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45892.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-quakes.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45892.json';</script>