---
title: R Dataset / Package datasets / InsectSprays
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">InsectSprays</span> data set which pertains to Effectiveness of Insect Sprays. The <span class="mono">InsectSprays</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">InsectSprays</span> data set in R by issuing the following command at the console <span class="mono">data("InsectSprays")</span>. This will load the data into a variable called <span class="mono">InsectSprays</span>. If R says the <span class="mono">InsectSprays</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-18087.csv">InsectSprays R data set</a></span>. The size of this file is about 482 bytes.</p><h2>Effectiveness of Insect Sprays</h2>
<h3>Description</h3>
<p>The counts of insects in agricultural experimental units treated with different insecticides.</p>
<h3>Usage</h3>
<pre>InsectSprays</pre>
<h3>Format</h3>
<p>A data frame with 72 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">count</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Insect count</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">spray</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">The type of spray</td>
</tr>
</table>
<h3>Source</h3>
<p>Beall, G., (1942) The Transformation of data from entomological field experiments, <em>Biometrika</em>, <b>29</b>, 243–262.</p>
<h3>References</h3>
<p>McNeil, D. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
boxplot(count ~ spray, data = InsectSprays,
xlab = "Type of spray", ylab = "Insect count",
main = "InsectSprays data", varwidth = TRUE, col = "lightgray")
fm1 &lt;- aov(count ~ spray, data = InsectSprays)
summary(fm1)
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0))
plot(fm1)
fm2 &lt;- aov(sqrt(count) ~ spray, data = InsectSprays)
summary(fm2)
plot(fm2)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-18087.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-18087.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-insectsprays.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-18087.json';</script>