---
title: R Dataset / Package datasets / anscombe
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">anscombe</span> data set which pertains to Anscombe's Quartet of ‘Identical’ Simple Linear Regressions. The <span class="mono">anscombe</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">anscombe</span> data set in R by issuing the following command at the console <span class="mono">data("anscombe")</span>. This will load the data into a variable called <span class="mono">anscombe</span>. If R says the <span class="mono">anscombe</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84646.csv">anscombe R data set</a></span>. The size of this file is about 364 bytes.</p><h2>Anscombe's Quartet of ‘Identical’ Simple Linear Regressions</h2>
<h3>Description</h3>
<p>Four <i>x</i>-<i>y</i> datasets which have the same traditional statistical properties (mean, variance, correlation, regression line, etc.), yet are quite different.</p>
<h3>Usage</h3>
<pre>anscombe</pre>
<h3>Format</h3>
<p>A data frame with 11 observations on 8 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">x1 == x2 == x3</td>
<td style="text-align: left;">the integers 4:14, specially arranged</td>
</tr>
<tr>
<td style="text-align: right;">x4</td>
<td style="text-align: left;">values 8 and 19</td>
</tr>
<tr>
<td style="text-align: right;">y1, y2, y3, y4</td>
<td style="text-align: left;">numbers in (3, 12.5) with mean 7.5 and sdev 2.03</td>
</tr>
</table>
<h3>Source</h3>
<p>Tufte, Edward R. (1989) <em>The Visual Display of Quantitative Information</em>, 13–14. Graphics Press.</p>
<h3>References</h3>
<p>Anscombe, Francis J. (1973) Graphs in statistical analysis. <em>American Statistician</em>, <b>27</b>, 17–21.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
summary(anscombe)##-- now some "magic" to do the 4 regressions in a loop:
ff &lt;- y ~ x
mods &lt;- setNames(as.list(1:4), paste0("lm", 1:4))
for(i in 1:4) {
ff[2:3] &lt;- lapply(paste0(c("y","x"), i), as.name)
## or ff[[2]] &lt;- as.name(paste0("y", i))
##ff[[3]] &lt;- as.name(paste0("x", i))
mods[[i]] &lt;- lmi &lt;- lm(ff, data = anscombe)
print(anova(lmi))
}## See how close they are (numerically!)
sapply(mods, coef)
lapply(mods, function(fm) coef(summary(fm)))## Now, do what you should have done in the first place: PLOTS
op &lt;- par(mfrow = c(2, 2), mar = 0.1+c(4,4,1,1), oma =c(0, 0, 2, 0))
for(i in 1:4) {
ff[2:3] &lt;- lapply(paste0(c("y","x"), i), as.name)
plot(ff, data = anscombe, col = "red", pch = 21, bg = "orange", cex = 1.2,
 xlim = c(3, 19), ylim = c(3, 13))
abline(mods[[i]], col = "blue")
}
mtext("Anscombe's 4 Regression data sets", outer = TRUE, cex = 1.5)
par(op)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84646.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84646.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-anscombe.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84646.json';</script>