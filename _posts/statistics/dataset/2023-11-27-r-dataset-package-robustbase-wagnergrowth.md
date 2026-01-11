---
title: R Dataset / Package robustbase / wagnerGrowth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">wagnerGrowth</span> data set which pertains to Wagner's Hannover Employment Growth Data. The <span class="mono">wagnerGrowth</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">wagnerGrowth</span> data set in R by issuing the following command at the console <span class="mono">data("wagnerGrowth")</span>. This will load the data into a variable called <span class="mono">wagnerGrowth</span>. If R says the <span class="mono">wagnerGrowth</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-95527.csv">wagnerGrowth R data set</a></span>. The size of this file is about 2,284 bytes.</p><h2>Wagner's Hannover Employment Growth Data</h2>
<h3>Description</h3>
<p>Wagner (1994) investigates the rate of employment growth (<code>y</code>) as function of percentage of people engaged in <b>p</b>roducation <b>a</b>ctivities (<code>PA</code>) and <b>h</b>igher <b>s</b>ervices (<code>HS</code>) and of the <b>g</b>rowth of these percentages (<code>GPA</code>, <code>GHS</code>) during three time periods in 21 geographical regions of the greater Hannover area.</p>
<h3>Usage</h3>
<pre>data(wagnerGrowth)</pre>
<h3>Format</h3>
<p>A data frame with <i>21 * 3 = 63</i> observations (one per <code>Region x Period</code>) on the following 7 variables.</p>
<dl>
<dt><code>Region</code></dt>
<dd>
<p>a <code>factor</code> with 21 levels, denoting the corresponding region in Hannover (conceptually a “block factor”).</p>
</dd>
<dt><code>PA</code></dt>
<dd>
<p>numeric: percent of people involved in production activities.</p>
</dd>
<dt><code>GPA</code></dt>
<dd>
<p><b>g</b>rowth of <code>PA</code>.</p>
</dd>
<dt><code>HS</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>GHS</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Period</code></dt>
<dd>
<p>a <code>factor</code> with levels <code>1:3</code>, denoting the time period, 1 = 1979-1982, 2 = 1983-1988, 3 = 1989-1992.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Hubert, M. and Rousseeuw, P. J. (1997). Robust regression with both continuous and binary regressors, <em>Journal of Statistical Planning and Inference</em> <b>57</b>, 153–163.</p>
<h3>References</h3>
<p>Wagner J. (1994). Regionale Beschäftigungsdynamik und höherwertige Produktionsdienste: Ergebnisse für den Grossraum Hannover (1979-1992). <em>Raumforschung und Raumordnung</em> <b>52</b>, 146–150.</p>
<h3>Examples</h3>
<pre>
data(wagnerGrowth)
## maybe
str(wagnerGrowth)
require(lattice)
(xyplot(y ~ Period | Region, data = wagnerGrowth,
 main = "wagnerGrowth: 21 regions @ Hannover"))(dotplot(y ~ reorder(Region,y,median), data = wagnerGrowth,
 main = "wagnerGrowth",
 xlab = "Region [ordered bymedian(y | Region) ]"))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-95527.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-95527.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-wagnergrowth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-95527.json';</script>