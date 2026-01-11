---
title: Formaldehyde
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Determination of Formaldehyde</h2>
<p>These data are from a chemical experiment to prepare a standard curve for the determination of formaldehyde by the addition of chromatropic acid and concentrated sulphuric acid and the reading of the resulting purple color on a spectrophotometer.</p>
<h3>Usage</h3>
<pre>Formaldehyde</pre>
<h3>Format</h3>
<p>A data frame with 6 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">carb</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Carbohydrate (ml)</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">optden</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Optical Density</td>
</tr>
</table>
<h3>Source</h3>
<p>Bennett, N. A. and N. L. Franklin (1954) <em>Statistical Analysis in Chemistry and the Chemical Industry</em>. New York: Wiley.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis.</em> New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
plot(optden ~ carb, data = Formaldehyde,
 xlab = "Carbohydrate (ml)", ylab = "Optical Density",
 main = "Formaldehyde data", col = 4, las = 1)
abline(fm1 &lt;- lm(optden ~ carb, data = Formaldehyde))
summary(fm1)
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0))
plot(fm1)
par(opar)
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34296.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34296.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/formaldehyde.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34296.json';</script>