---
title: USArrests
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Violent Crime Rates by US State</h2>
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
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66986.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66986.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/usarrests.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66986.json';</script>