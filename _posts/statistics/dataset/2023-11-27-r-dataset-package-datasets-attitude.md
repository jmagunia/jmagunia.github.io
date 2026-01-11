---
title: R Dataset / Package datasets / attitude
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">attitude</span> data set which pertains to The Chatterjee–Price Attitude Data. The <span class="mono">attitude</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">attitude</span> data set in R by issuing the following command at the console <span class="mono">data("attitude")</span>. This will load the data into a variable called <span class="mono">attitude</span>. If R says the <span class="mono">attitude</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81450.csv">attitude R data set</a></span>. The size of this file is about 706 bytes.</p><h2>The Chatterjee–Price Attitude Data</h2>
<h3>Description</h3>
<p>From a survey of the clerical employees of a large financial organization, the data are aggregated from the questionnaires of the approximately 35 employees for each of 30 (randomly selected) departments. The numbers give the percent proportion of favourable responses to seven questions in each department.</p>
<h3>Usage</h3>
<pre>attitude</pre>
<h3>Format</h3>
<p>A data frame with 30 observations on 7 variables. The first column are the short names from the reference, the second one the variable names in the data frame:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">Y</td>
<td style="text-align: left;">rating</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Overall rating</td>
</tr>
<tr>
<td style="text-align: right;">X[1]</td>
<td style="text-align: left;">complaints</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Handling of employee complaints</td>
</tr>
<tr>
<td style="text-align: right;">X[2]</td>
<td style="text-align: left;">privileges</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Does not allow special privileges</td>
</tr>
<tr>
<td style="text-align: right;">X[3]</td>
<td style="text-align: left;">learning</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Opportunity to learn</td>
</tr>
<tr>
<td style="text-align: right;">X[4]</td>
<td style="text-align: left;">raises</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Raises based on performance</td>
</tr>
<tr>
<td style="text-align: right;">X[5]</td>
<td style="text-align: left;">critical</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Too critical</td>
</tr>
<tr>
<td style="text-align: right;">X[6]</td>
<td style="text-align: left;">advancel</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Advancement</td>
</tr>
</table>
<h3>Source</h3>
<p>Chatterjee, S. and Price, B. (1977) <em>Regression Analysis by Example</em>. New York: Wiley. (Section 3.7, p.68ff of 2nd ed.(1991).)</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
pairs(attitude, main = "attitude data")
summary(attitude)
summary(fm1 &lt;- lm(rating ~ ., data = attitude))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
mar = c(4.1, 4.1, 2.1, 1.1))
plot(fm1)
summary(fm2 &lt;- lm(rating ~ complaints, data = attitude))
plot(fm2)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81450.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81450.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-attitude.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81450.json';</script>