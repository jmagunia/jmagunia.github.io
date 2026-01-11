---
title: R Dataset / Package datasets / freeny
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">freeny</span> data set which pertains to Freeny's Revenue Data. The <span class="mono">freeny</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">freeny</span> data set in R by issuing the following command at the console <span class="mono">data("freeny")</span>. This will load the data into a variable called <span class="mono">freeny</span>. If R says the <span class="mono">freeny</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-33527.csv">freeny R data set</a></span>. The size of this file is about 1,614 bytes.</p><h2>Freeny's Revenue Data</h2>
<h3>Description</h3>
<p>Freeny's data on quarterly revenue and explanatory variables.</p>
<h3>Usage</h3>
<pre>
freeny
freeny.x
freeny.y
</pre>
<h3>Format</h3>
<p>There are three ‘freeny’ data sets.</p>
<p><code>freeny.y</code> is a time series with 39 observations on quarterly revenue from (1962,2Q) to (1971,4Q).</p>
<p><code>freeny.x</code> is a matrix of explanatory variables. The columns are <code>freeny.y</code> lagged 1 quarter, price index, income level, and market potential.</p>
<p>Finally, <code>freeny</code> is a data frame with variables <code>y</code>, <code>lag.quarterly.revenue</code>, <code>price.index</code>, <code>income.level</code>, and <code>market.potential</code> obtained from the above two data objects.</p>
<h3>Source</h3>
<p>A. E. Freeny (1977) <em>A Portable Linear Regression Package with Test Programs</em>. Bell Laboratories memorandum.</p>
<h3>References</h3>
<p>Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) <em>The New S Language</em>. Wadsworth &amp; Brooks/Cole.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
summary(freeny)
pairs(freeny, main = "freeny data")
# gives warning: freeny$y has class "ts"summary(fm1 &lt;- lm(y ~ ., data = freeny))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
mar = c(4.1, 4.1, 2.1, 1.1))
plot(fm1)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-33527.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-33527.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-freeny.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-33527.json';</script>