---
title: R Dataset / Package Stat2Data / FlightResponse
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">FlightResponse</span> data set which pertains to FlightResponse. The <span class="mono">FlightResponse</span> data set is found in the <span class="mono">Stat2Data</span> R package. You can load the <span class="mono">FlightResponse</span> data set in R by issuing the following command at the console <span class="mono">data("FlightResponse")</span>. This will load the data into a variable called <span class="mono">FlightResponse</span>. If R says the <span class="mono">FlightResponse</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Stat2Data")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-17317.csv">FlightResponse R data set</a></span>. The size of this file is about 14,709 bytes.</p><h2>FlightResponse</h2>
<h3>Description</h3>
<p>Flight Response of Pacific Brant</p>
<h3>Format</h3>
<p>A dataset with 464 observations on the following 7 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>FlockID</code></td>
<td style="text-align: left;">Flock ID</td>
</tr>
<tr>
<td style="text-align: right;"><code>Altitude</code></td>
<td style="text-align: left;">Altitude of the overflight by the helicopter (in 100m)</td>
</tr>
<tr>
<td style="text-align: right;"><code>Lateral</code></td>
<td style="text-align: left;">Lateral distance (in 100m) between the aircraft and flock</td>
</tr>
<tr>
<td style="text-align: right;"><code>Flight</code></td>
<td style="text-align: left;"><code>1</code>=more than 10% of flock flies away or <code>0</code>=otherwise</td>
</tr>
<tr>
<td style="text-align: right;"><code>AltLat</code></td>
<td style="text-align: left;">Product of Altitude x Lateral</td>
</tr>
<tr>
<td style="text-align: right;"><code>AltCat</code></td>
<td style="text-align: left;">Altitude categories: <code>low</code>=under 3, <code>mid</code>=3 to 6, <code>high</code>=over 6</td>
</tr>
<tr>
<td style="text-align: right;"><code>LatCat</code></td>
<td style="text-align: left;">Lateral categories: <code>1</code>under 10 to <code>4</code>=over 30</td>
</tr>
</table>
<h3>Details</h3>
<p>A 1994 study collected data on the effects of air traffic on the behavior of the Pacific Brant (a small migratory goose). The data represent the flight response to helicopter "overflights" to see what the relationship between the proximity of a flight, both lateral and altitudinal, would be to the propensity of the Brant to flee the area. For this experiment, air traffic was restricted to helicopters because previous study had ascertained that helicopters created more radical flight response than other aircraft. The data are in FlightResponse. Each case represents a flock of Brant that has been observed during one overflight in the study. Flocks were determined observationally as contiguous collections of Brants, flock sizes varying from 10 to 30,000 birds.</p>
<h3>Source</h3>
<p>Data come from the book Statistical Case Studies: A Collaboration Between Academe and Industry, Roxy Peck, Larry D. Haugh, and Arnold Goodman, editors; SIAM and ASA, 1998.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-17317.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-17317.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-stat2data-flightresponse.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-17317.json';</script>