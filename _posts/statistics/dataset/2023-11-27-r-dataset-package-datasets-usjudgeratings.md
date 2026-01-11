---
title: R Dataset / Package datasets / USJudgeRatings
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USJudgeRatings</span> data set which pertains to Lawyers' Ratings of State Judges in the US Superior Court. The <span class="mono">USJudgeRatings</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">USJudgeRatings</span> data set in R by issuing the following command at the console <span class="mono">data("USJudgeRatings")</span>. This will load the data into a variable called <span class="mono">USJudgeRatings</span>. If R says the <span class="mono">USJudgeRatings</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29460.csv">USJudgeRatings R data set</a></span>. The size of this file is about 2,611 bytes.</p><h2>Lawyers' Ratings of State Judges in the US Superior Court</h2>
<h3>Description</h3>
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
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29460.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29460.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-usjudgeratings.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29460.json';</script>