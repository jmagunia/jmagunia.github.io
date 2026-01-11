---
title: R Dataset / Package HSAUR / pistonrings
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">pistonrings</span> data set which pertains to Piston Rings Failures . The <span class="mono">pistonrings</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">pistonrings</span> data set in R by issuing the following command at the console <span class="mono">data("pistonrings")</span>. This will load the data into a variable called <span class="mono">pistonrings</span>. If R says the <span class="mono">pistonrings</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45421.csv">pistonrings R data set</a></span>. The size of this file is about 70 bytes.</p><h2>Piston Rings Failures</h2>
<h3>Description</h3>
<p>Number of failures of piston rings in three legs of four steam-driven compressors.</p>
<h3>Usage</h3>
<pre>data("pistonrings")</pre>
<h3>Format</h3>
<p>A two-way classification, see <code>table</code>.</p>
<h3>Details</h3>
<p>The data are given in form of a <code>table</code>. The table gives the number of piston-ring failures in each of three legs of four steam-driven compressors located in the same building. The compressors have identical design and are oriented in the same way. The question of interest is whether the two classification variables (compressor and leg) are independent.</p>
<h3>Source</h3>
<p>S. J. Haberman (1973), The analysis of residuals in cross-classificed tables. <em>Biometrics</em> <b>29</b>, 205–220.</p>
<h3>Examples</h3>
<pre>

data("pistonrings", package = "HSAUR")
mosaicplot(pistonrings)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45421.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45421.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-pistonrings.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45421.json';</script>