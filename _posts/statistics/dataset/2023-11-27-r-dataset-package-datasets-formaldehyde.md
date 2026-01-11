---
title: R Dataset / Package datasets / Formaldehyde
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Formaldehyde</span> data set which pertains to Determination of Formaldehyde. The <span class="mono">Formaldehyde</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">Formaldehyde</span> data set in R by issuing the following command at the console <span class="mono">data("Formaldehyde")</span>. This will load the data into a variable called <span class="mono">Formaldehyde</span>. If R says the <span class="mono">Formaldehyde</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-91017.csv">Formaldehyde R data set</a></span>. The size of this file is about 76 bytes.</p><h2>Determination of Formaldehyde</h2>
<h3>Description</h3>
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
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-91017.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-91017.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-formaldehyde.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-91017.json';</script>