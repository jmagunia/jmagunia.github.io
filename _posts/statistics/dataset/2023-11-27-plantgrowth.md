---
title: PlantGrowth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Results from an Experiment on Plant Growth</h2>
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
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16019.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16019.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/plantgrowth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16019.json';</script>