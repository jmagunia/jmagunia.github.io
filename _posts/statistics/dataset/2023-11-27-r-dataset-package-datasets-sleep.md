---
title: R Dataset / Package datasets / sleep
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sleep</span> data set which pertains to Student's Sleep Data. The <span class="mono">sleep</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">sleep</span> data set in R by issuing the following command at the console <span class="mono">data("sleep")</span>. This will load the data into a variable called <span class="mono">sleep</span>. If R says the <span class="mono">sleep</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97715.csv">sleep R data set</a></span>. The size of this file is about 264 bytes.</p><h2>Student's Sleep Data</h2>
<h3>Description</h3>
<p>Data which show the effect of two soporific drugs (increase in hours of sleep compared to control) on 10 patients.</p>
<h3>Usage</h3>
<pre>sleep</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on 3 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[, 1]</td>
<td style="text-align: left;">extra</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">increase in hours of sleep</td>
</tr>
<tr>
<td style="text-align: right;">[, 2]</td>
<td style="text-align: left;">group</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">drug given</td>
</tr>
<tr>
<td style="text-align: right;">[, 3]</td>
<td style="text-align: left;">ID</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">patient ID</td>
</tr>
</table>
<h3>Details</h3>
<p>The <code>group</code> variable name may be misleading about the data: They represent measurements on 10 persons, not in groups.</p>
<h3>Source</h3>
<p>Cushny, A. R. and Peebles, A. R. (1905) The action of optical isomers: II hyoscines. <em>The Journal of Physiology</em> <b>32</b>, 501–510.</p>
<p>Student (1908) The probable error of the mean. <em>Biometrika</em>, <b>6</b>, 20.</p>
<h3>References</h3>
<p>Scheffé, Henry (1959) <em>The Analysis of Variance</em>. New York, NY: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats)
## Student's paired t-test
with(sleep,
 t.test(extra[group == 1],
extra[group == 2], paired = TRUE))## The sleep *prolongations*
sleep1 &lt;- with(sleep, extra[group == 2] - extra[group == 1])
summary(sleep1)
stripchart(sleep1, method = "stack", xlab = "hours",
 main = "Sleep prolongation (n = 10)")
boxplot(sleep1, horizontal = TRUE, add = TRUE,
at = .6, pars = list(boxwex = 0.5, staplewex = 0.25))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97715.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97715.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-sleep.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97715.json';</script>