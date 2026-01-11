---
title: R Dataset / Package datasets / chickwts
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">chickwts</span> data set which pertains to Chicken Weights by Feed Type. The <span class="mono">chickwts</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">chickwts</span> data set in R by issuing the following command at the console <span class="mono">data("chickwts")</span>. This will load the data into a variable called <span class="mono">chickwts</span>. If R says the <span class="mono">chickwts</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57787.csv">chickwts R data set</a></span>. The size of this file is about 1,053 bytes.</p><h2>Chicken Weights by Feed Type</h2>
<h3>Description</h3>
<p>An experiment was conducted to measure and compare the effectiveness of various feed supplements on the growth rate of chickens.</p>
<h3>Usage</h3>
<pre>chickwts</pre>
<h3>Format</h3>
<p>A data frame with 71 observations on the following 2 variables.</p>
<dl>
<dt><code>weight</code></dt>
<dd>
<p>a numeric variable giving the chick weight.</p>
</dd>
<dt><code>feed</code></dt>
<dd>
<p>a factor giving the feed type.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Newly hatched chicks were randomly allocated into six groups, and each group was given a different feed supplement. Their weights in grams after six weeks are given along with feed types.</p>
<h3>Source</h3>
<p>Anonymous (1948) <em>Biometrika</em>, <b>35</b>, 214.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
boxplot(weight ~ feed, data = chickwts, col = "lightgray",
varwidth = TRUE, notch = TRUE, main = "chickwt data",
ylab = "Weight at six weeks (gm)")
anova(fm1 &lt;- lm(weight ~ feed, data = chickwts))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
mar = c(4.1, 4.1, 2.1, 1.1))
plot(fm1)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57787.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57787.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-chickwts.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57787.json';</script>