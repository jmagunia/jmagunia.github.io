---
title: R Dataset / Package datasets / USArrests
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USArrests</span> data set which pertains to Violent Crime Rates by US State. The <span class="mono">USArrests</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">USArrests</span> data set in R by issuing the following command at the console <span class="mono">data("USArrests")</span>. This will load the data into a variable called <span class="mono">USArrests</span>. If R says the <span class="mono">USArrests</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90380.csv">USArrests R data set</a></span>. The size of this file is about 1,284 bytes.</p><h2>Violent Crime Rates by US State</h2>
<h3>Description</h3>
<p>This data set contains statistics, in arrests per 100,000 residents for assault, murder, and rape in each of the 50 US states in 1973. Also given is the percent of the population living in urban areas.</p>
<h3>Usage</h3>
<pre>USArrests</pre>
<h3>Format</h3>
<p>A data frame with 50 observations on 4 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">Murder</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Murder arrests (per 100,000)</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">Assault</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Assault arrests (per 100,000)</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">UrbanPop</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Percent urban population</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">Rape</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Rape arrests (per 100,000)</td>
</tr>
</table>
<h3>Source</h3>
<p>World Almanac and Book of facts 1975. (Crime rates).</p>
<p>Statistical Abstracts of the United States 1975. (Urban rates).</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>See Also</h3>
<p>The <code>state</code> data sets.</p>
<h3>Examples</h3>
<pre>
require(graphics)
pairs(USArrests, panel = panel.smooth, main = "USArrests data")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90380.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90380.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-usarrests.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90380.json';</script>