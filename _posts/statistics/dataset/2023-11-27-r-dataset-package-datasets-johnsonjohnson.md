---
title: R Dataset / Package datasets / JohnsonJohnson
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">JohnsonJohnson</span> data set which pertains to Quarterly Earnings per Johnson &amp; Johnson Share. The <span class="mono">JohnsonJohnson</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">JohnsonJohnson</span> data set in R by issuing the following command at the console <span class="mono">data("JohnsonJohnson")</span>. This will load the data into a variable called <span class="mono">JohnsonJohnson</span>. If R says the <span class="mono">JohnsonJohnson</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-35863.csv">JohnsonJohnson R data set</a></span>. The size of this file is about 1,027 bytes.</p><h2>Quarterly Earnings per Johnson &amp; Johnson Share</h2>
<h3>Description</h3>
<p>Quarterly earnings (dollars) per Johnson &amp; Johnson share 1960–80.</p>
<h3>Usage</h3>
<pre>JohnsonJohnson</pre>
<h3>Format</h3>
<p>A quarterly time series</p>
<h3>Source</h3>
<p>Shumway, R. H. and Stoffer, D. S. (2000) <em>Time Series Analysis and its Applications</em>. Second Edition. Springer. Example 1.1.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
JJ &lt;- log10(JohnsonJohnson)
plot(JJ)
## This example gives a possible-non-convergence warning on some
## platforms, but does seem to converge on x86 Linux and Windows.
(fit &lt;- StructTS(JJ, type = "BSM"))
tsdiag(fit)
sm &lt;- tsSmooth(fit)
plot(cbind(JJ, sm[, 1], sm[, 3]-0.5), plot.type = "single",
 col = c("black", "green", "blue"))
abline(h = -0.5, col = "grey60")monthplot(fit)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-35863.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-35863.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-johnsonjohnson.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-35863.json';</script>