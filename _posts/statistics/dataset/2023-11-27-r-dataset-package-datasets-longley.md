---
title: R Dataset / Package datasets / longley
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">longley</span> data set which pertains to Longley's Economic Regression Data. The <span class="mono">longley</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">longley</span> data set in R by issuing the following command at the console <span class="mono">data("longley")</span>. This will load the data into a variable called <span class="mono">longley</span>. If R says the <span class="mono">longley</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70074.csv">longley R data set</a></span>. The size of this file is about 792 bytes.</p><h2>Longley's Economic Regression Data</h2>
<h3>Description</h3>
<p>A macroeconomic data set which provides a well-known example for a highly collinear regression.</p>
<h3>Usage</h3>
<pre>longley</pre>
<h3>Format</h3>
<p>A data frame with 7 economical variables, observed yearly from 1947 to 1962 (<i>n=16</i>).</p>
<dl>
<dt><code>GNP.deflator</code></dt>
<dd>
<p>GNP implicit price deflator (<i>1954=100</i>)</p>
</dd>
<dt><code>GNP</code></dt>
<dd>
<p>Gross National Product.</p>
</dd>
<dt><code>Unemployed</code></dt>
<dd>
<p>number of unemployed.</p>
</dd>
<dt><code>Armed.Forces</code></dt>
<dd>
<p>number of people in the armed forces.</p>
</dd>
<dt><code>Population</code></dt>
<dd>
<p>‘noninstitutionalized’ population <i>≥</i> 14 years of age.</p>
</dd>
<dt><code>Year</code></dt>
<dd>
<p>the year (time).</p>
</dd>
<dt><code>Employed</code></dt>
<dd>
<p>number of people employed.</p>
</dd>
</dl>
<p>The regression <code>lm(Employed ~ .)</code> is known to be highly collinear.</p>
<h3>Source</h3>
<p>J. W. Longley (1967) An appraisal of least-squares programs from the point of view of the user. <em>Journal of the American Statistical Association</em> <b>62</b>, 819–841.</p>
<h3>References</h3>
<p>Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) <em>The New S Language</em>. Wadsworth &amp; Brooks/Cole.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
## give the data set in the form it is used in S-PLUS:
longley.x &lt;- data.matrix(longley[, 1:6])
longley.y &lt;- longley[, "Employed"]
pairs(longley, main = "longley data")
summary(fm1 &lt;- lm(Employed ~ ., data = longley))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
mar = c(4.1, 4.1, 2.1, 1.1))
plot(fm1)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70074.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70074.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-longley.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70074.json';</script>