---
title: LifeCycleSavings
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Intercountry Life-Cycle Savings Data</h2>
<p>Data on the savings ratio 1960–1970.</p>
<h3>Usage</h3>
<pre>LifeCycleSavings</pre>
<h3>Format</h3>
<p>A data frame with 50 observations on 5 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">sr</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">aggregate personal savings</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">pop15</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">% of population under 15</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">pop75</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">% of population over 75</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">dpi</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">real per-capita disposable income</td>
</tr>
<tr>
<td style="text-align: right;">[,5]</td>
<td style="text-align: left;">ddpi</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">% growth rate of dpi</td>
</tr>
</table>
<h3>Details</h3>
<p>Under the life-cycle savings hypothesis as developed by Franco Modigliani, the savings ratio (aggregate personal saving divided by disposable income) is explained by per-capita disposable income, the percentage rate of change in per-capita disposable income, and two demographic variables: the percentage of population less than 15 years old and the percentage of the population over 75 years old. The data are averaged over the decade 1960–1970 to remove the business cycle or other short-term fluctuations.</p>
<h3>Source</h3>
<p>The data were obtained from Belsley, Kuh and Welsch (1980). They in turn obtained the data from Sterling (1977).</p>
<h3>References</h3>
<p>Sterling, Arnie (1977) Unpublished BS Thesis. Massachusetts Institute of Technology.</p>
<p>Belsley, D. A., Kuh. E. and Welsch, R. E. (1980) <em>Regression Diagnostics</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
pairs(LifeCycleSavings, panel = panel.smooth,
main = "LifeCycleSavings data")
fm1 &lt;- lm(sr ~ pop15 + pop75 + dpi + ddpi, data = LifeCycleSavings)
summary(fm1)
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28937.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28937.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/lifecyclesavings.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28937.json';</script>