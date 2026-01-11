---
title: USJudgeRatings
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Lawyers' Ratings of State Judges in the US Superior Court</h2>
<p>Lawyers' ratings of state judges in the US Superior Court.</p>
<h3>Usage</h3>
<pre>USJudgeRatings</pre>
<h3>Format</h3>
<p>A data frame containing 43 observations on 12 numeric variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">CONT</td>
<td style="text-align: left;">Number of contacts of lawyer with judge.</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">INTG</td>
<td style="text-align: left;">Judicial integrity.</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">DMNR</td>
<td style="text-align: left;">Demeanor.</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">DILG</td>
<td style="text-align: left;">Diligence.</td>
</tr>
<tr>
<td style="text-align: right;">[,5]</td>
<td style="text-align: left;">CFMG</td>
<td style="text-align: left;">Case flow managing.</td>
</tr>
<tr>
<td style="text-align: right;">[,6]</td>
<td style="text-align: left;">DECI</td>
<td style="text-align: left;">Prompt decisions.</td>
</tr>
<tr>
<td style="text-align: right;">[,7]</td>
<td style="text-align: left;">PREP</td>
<td style="text-align: left;">Preparation for trial.</td>
</tr>
<tr>
<td style="text-align: right;">[,8]</td>
<td style="text-align: left;">FAMI</td>
<td style="text-align: left;">Familiarity with law.</td>
</tr>
<tr>
<td style="text-align: right;">[,9]</td>
<td style="text-align: left;">ORAL</td>
<td style="text-align: left;">Sound oral rulings.</td>
</tr>
<tr>
<td style="text-align: right;">[,10]</td>
<td style="text-align: left;">WRIT</td>
<td style="text-align: left;">Sound written rulings.</td>
</tr>
<tr>
<td style="text-align: right;">[,11]</td>
<td style="text-align: left;">PHYS</td>
<td style="text-align: left;">Physical ability.</td>
</tr>
<tr>
<td style="text-align: right;">[,12]</td>
<td style="text-align: left;">RTEN</td>
<td style="text-align: left;">Worthy of retention.</td>
</tr>
</table>
<h3>Source</h3>
<p>New Haven Register, 14 January, 1977 (from John Hartigan).</p>
<h3>Examples</h3>
<pre>
require(graphics)
pairs(USJudgeRatings, main = "USJudgeRatings data")
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67084.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67084.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/usjudgeratings.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67084.json';</script>