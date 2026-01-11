---
title: R Dataset / Package datasets / PlantGrowth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PlantGrowth</span> data set which pertains to Results from an Experiment on Plant Growth. The <span class="mono">PlantGrowth</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">PlantGrowth</span> data set in R by issuing the following command at the console <span class="mono">data("PlantGrowth")</span>. This will load the data into a variable called <span class="mono">PlantGrowth</span>. If R says the <span class="mono">PlantGrowth</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70955.csv">PlantGrowth R data set</a></span>. The size of this file is about 374 bytes.</p><h2>Results from an Experiment on Plant Growth</h2>
<h3>Description</h3>
<p>Results from an experiment to compare yields (as measured by dried weight of plants) obtained under a control and two different treatment conditions.</p>
<h3>Usage</h3>
<pre>PlantGrowth</pre>
<h3>Format</h3>
<p>A data frame of 30 cases on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[, 1]</td>
<td style="text-align: left;">weight</td>
<td style="text-align: left;">numeric</td>
</tr>
<tr>
<td style="text-align: right;">[, 2]</td>
<td style="text-align: left;">group</td>
<td style="text-align: left;">factor</td>
</tr>
</table>
<p>The levels of <code>group</code> are ‘ctrl’, ‘trt1’, and ‘trt2’.</p>
<h3>Source</h3>
<p>Dobson, A. J. (1983) <em>An Introduction to Statistical Modelling</em>. London: Chapman and Hall.</p>
<h3>Examples</h3>
<pre>
## One factor ANOVA example from Dobson's book, cf. Table 7.4:
require(stats); require(graphics)
boxplot(weight ~ group, data = PlantGrowth, main = "PlantGrowth data",
ylab = "Dried weight of plants", col = "lightgray",
notch = TRUE, varwidth = TRUE)
anova(lm(weight ~ group, data = PlantGrowth))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70955.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70955.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-plantgrowth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70955.json';</script>