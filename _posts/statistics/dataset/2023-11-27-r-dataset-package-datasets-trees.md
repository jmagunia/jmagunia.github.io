---
title: R Dataset / Package datasets / trees
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">trees</span> data set which pertains to Girth, Height and Volume for Black Cherry Trees. The <span class="mono">trees</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">trees</span> data set in R by issuing the following command at the console <span class="mono">data("trees")</span>. This will load the data into a variable called <span class="mono">trees</span>. If R says the <span class="mono">trees</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14921.csv">trees R data set</a></span>. The size of this file is about 406 bytes.</p><h2>Girth, Height and Volume for Black Cherry Trees</h2>
<h3>Description</h3>
<p>This data set provides measurements of the girth, height and volume of timber in 31 felled black cherry trees. Note that girth is the diameter of the tree (in inches) measured at 4 ft 6 in above the ground.</p>
<h3>Usage</h3>
<pre>trees</pre>
<h3>Format</h3>
<p>A data frame with 31 observations on 3 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>[,1]</code></td>
<td style="text-align: left;"><code>Girth</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Tree diameter in inches</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,2]</code></td>
<td style="text-align: left;"><code>Height</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Height in ft</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,3]</code></td>
<td style="text-align: left;"><code>Volume</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Volume of timber in cubic ft</td>
</tr>
</table>
<h3>Source</h3>
<p>Ryan, T. A., Joiner, B. L. and Ryan, B. F. (1976) <em>The Minitab Student Handbook</em>. Duxbury Press.</p>
<h3>References</h3>
<p>Atkinson, A. C. (1985) <em>Plots, Transformations and Regression</em>. Oxford University Press.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
pairs(trees, panel = panel.smooth, main = "trees data")
plot(Volume ~ Girth, data = trees, log = "xy")
coplot(log(Volume) ~ log(Girth) | Height, data = trees,
 panel = panel.smooth)
summary(fm1 &lt;- lm(log(Volume) ~ log(Girth), data = trees))
summary(fm2 &lt;- update(fm1, ~ . + log(Height), data = trees))
step(fm2)
## i.e., Volume ~= c * Height * Girth^2seems reasonable
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14921.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14921.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-trees.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14921.json';</script>