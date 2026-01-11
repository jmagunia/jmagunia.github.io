---
title: R Dataset / Package cluster / agriculture
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">agriculture</span> data set which pertains to European Union Agricultural Workforces. The <span class="mono">agriculture</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">agriculture</span> data set in R by issuing the following command at the console <span class="mono">data("agriculture")</span>. This will load the data into a variable called <span class="mono">agriculture</span>. If R says the <span class="mono">agriculture</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11897.csv">agriculture R data set</a></span>. The size of this file is about 140 bytes.</p><h2>European Union Agricultural Workforces</h2>
<h3>Description</h3>
<p>Gross National Product (GNP) per capita and percentage of the population working in agriculture for each country belonging to the European Union in 1993.</p>
<h3>Usage</h3>
<pre>data(agriculture)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on 2 variables:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[ , 1]</td>
<td style="text-align: left;"><code>x</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">per capita GNP</td>
</tr>
<tr>
<td style="text-align: right;">[ , 2]</td>
<td style="text-align: left;"><code>y</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">percentage in agriculture</td>
</tr>
</table>
<p>The row names of the data frame indicate the countries.</p>
<h3>Details</h3>
<p>The data seem to show two clusters, the “more agricultural” one consisting of Greece, Portugal, Spain, and Ireland.</p>
<h3>Source</h3>
<p>Eurostat (European Statistical Agency, 1994): <em>Cijfers en feiten: Een statistisch portret van de Europese Unie</em>.</p>
<h3>References</h3>
<p>see those in <code>agnes</code>.</p>
<h3>See Also</h3>
<p><code>agnes</code>, <code>daisy</code>, <code>diana</code>.</p>
<h3>Examples</h3>
<pre>
data(agriculture)## Compute the dissimilarities using Euclidean metric and without
## standardization
daisy(agriculture, metric = "euclidean", stand = FALSE)## 2nd plot is similar to Figure 3 in Struyf et al (1996)
plot(pam(agriculture, 2))## Plot similar to Figure 7 in Struyf et al (1996)
## Not run: plot(agnes(agriculture), ask = TRUE)
## Plot similar to Figure 8 in Struyf et al (1996)
## Not run: plot(diana(agriculture), ask = TRUE)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11897.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11897.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-agriculture.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11897.json';</script>