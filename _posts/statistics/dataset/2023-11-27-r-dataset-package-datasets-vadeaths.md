---
title: R Dataset / Package datasets / VADeaths
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">VADeaths</span> data set which pertains to Death Rates in Virginia (1940). The <span class="mono">VADeaths</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">VADeaths</span> data set in R by issuing the following command at the console <span class="mono">data("VADeaths")</span>. This will load the data into a variable called <span class="mono">VADeaths</span>. If R says the <span class="mono">VADeaths</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-79676.csv">VADeaths R data set</a></span>. The size of this file is about 176 bytes.</p><h2>Death Rates in Virginia (1940)</h2>
<h3>Description</h3>
<p>Death rates per 1000 in Virginia in 1940.</p>
<h3>Usage</h3>
<pre>VADeaths</pre>
<h3>Format</h3>
<p>A matrix with 5 rows and 4 columns.</p>
<h3>Details</h3>
<p>The death rates are measured per 1000 population per year. They are cross-classified by age group (rows) and population group (columns). The age groups are: 50–54, 55–59, 60–64, 65–69, 70–74 and the population groups are Rural/Male, Rural/Female, Urban/Male and Urban/Female.</p>
<p>This provides a rather nice 3-way analysis of variance example.</p>
<h3>Source</h3>
<p>Molyneaux, L., Gilliam, S. K., and Florant, L. C.(1947) Differences in Virginia death rates by color, sex, age, and rural or urban residence. <em>American Sociological Review</em>, <b>12</b>, 525–535.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
n &lt;- length(dr &lt;- c(VADeaths))
nam &lt;- names(VADeaths)
d.VAD &lt;- data.frame(
 Drate = dr,
 age = rep(ordered(rownames(VADeaths)), length.out = n),
 gender = gl(2, 5, n, labels = c("M", "F")),
 site =gl(2, 10, labels = c("rural", "urban")))
coplot(Drate ~ as.numeric(age) | gender * site, data = d.VAD,
 panel = panel.smooth, xlab = "VADeaths data - Given: gender")
summary(aov.VAD &lt;- aov(Drate ~ .^2, data = d.VAD))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0))
plot(aov.VAD)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-79676.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-79676.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-vadeaths.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-79676.json';</script>