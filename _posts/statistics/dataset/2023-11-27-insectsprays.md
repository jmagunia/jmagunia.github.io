---
title: InsectSprays
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Effectiveness of Insect Sprays</h2>
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
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-41513.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-41513.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/insectsprays.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-41513.json';</script>