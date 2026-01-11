---
title: R Dataset / Package Stat2Data / CloudSeeding
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CloudSeeding</span> data set which pertains to Cloud Seeding. The <span class="mono">CloudSeeding</span> data set is found in the <span class="mono">Stat2Data</span> R package. You can load the <span class="mono">CloudSeeding</span> data set in R by issuing the following command at the console <span class="mono">data("CloudSeeding")</span>. This will load the data into a variable called <span class="mono">CloudSeeding</span>. If R says the <span class="mono">CloudSeeding</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Stat2Data")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47323.csv">CloudSeeding R data set</a></span>. The size of this file is about 1,083 bytes.</p><h2>Cloud Seeding</h2>
<h3>Description</h3>
<p>Rainfall amounts from a cloud seeding experiment (winter only)</p>
<h3>Format</h3>
<p>A dataset with 28 observations on the following 7 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>Seeded</code></td>
<td style="text-align: left;">Treatment coded as <code>S</code>=seded or <code>U</code>=unseeded</td>
</tr>
<tr>
<td style="text-align: right;"><code>Season</code></td>
<td style="text-align: left;">All in <code>Winter</code></td>
</tr>
<tr>
<td style="text-align: right;"><code>TE</code></td>
<td style="text-align: left;">Rainfall in East (treatment)</td>
</tr>
<tr>
<td style="text-align: right;"><code>TW</code></td>
<td style="text-align: left;">Rainfall in West (treatment</td>
</tr>
<tr>
<td style="text-align: right;"><code>NC</code></td>
<td style="text-align: left;">Rainfall in North (control)</td>
</tr>
<tr>
<td style="text-align: right;"><code>SC</code></td>
<td style="text-align: left;">Rainfall in South (control)</td>
</tr>
<tr>
<td style="text-align: right;"><code>NWC</code></td>
<td style="text-align: left;">Rainfall in Northwest (control)</td>
</tr>
</table>
<h3>Details</h3>
<p>Researchers were interested in whether seeded clouds would produce more rainfall. An experiment was conducted in Tasmania between 1964 and 1971 and rainfall amounts were measured in inches per rainfall period. The researchers measured the amount of rainfall in two target areas: East (TE) and West (TW). They also measured the amount of rainfall in three control locations. Clouds were coded as being either seeded (treatment) or unseeded (control). This is a subset (only Winter months) of the larger CloudSeeding2 dataset. All rainfall amounts are in inches.</p>
<h3>Source</h3>
<p>Data were accessed from the website <a href="http://www.statsci.org/data/oz/cloudtas.html">www.statsci.org/data/oz/cloudtas.html</a>. This is the web home of the Australasian Data and Story Library (OzDASL).</p>
<h3>References</h3>
<p>A.J. Miller, D.E. Shaw, L.G. Veitch, and E.J. Smith, (1979) "Analyzing the results of a cloud-seeding experiment in Tasmania" in Communications in Statistics: Theory and Methods, A8 (10), pp. 1017-1047.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47323.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47323.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-stat2data-cloudseeding.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47323.json';</script>