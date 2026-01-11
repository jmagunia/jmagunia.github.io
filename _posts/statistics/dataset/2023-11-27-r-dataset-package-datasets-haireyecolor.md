---
title: R Dataset / Package datasets / HairEyeColor
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">HairEyeColor</span> data set which pertains to Hair and Eye Color of Statistics Students. The <span class="mono">HairEyeColor</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">HairEyeColor</span> data set in R by issuing the following command at the console <span class="mono">data("HairEyeColor")</span>. This will load the data into a variable called <span class="mono">HairEyeColor</span>. If R says the <span class="mono">HairEyeColor</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-26840.csv">HairEyeColor R data set</a></span>. The size of this file is about 851 bytes.</p><h2>Hair and Eye Color of Statistics Students</h2>
<h3>Description</h3>
<p>Distribution of hair and eye color and sex in 592 statistics students.</p>
<h3>Usage</h3>
<pre>HairEyeColor</pre>
<h3>Format</h3>
<p>A 3-dimensional array resulting from cross-tabulating 592 observations on 3 variables. The variables and their levels are as follows:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">No</td>
<td style="text-align: left;">Name</td>
<td style="text-align: left;">Levels</td>
</tr>
<tr>
<td style="text-align: right;">1</td>
<td style="text-align: left;">Hair</td>
<td style="text-align: left;">Black, Brown, Red, Blond</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Eye</td>
<td style="text-align: left;">Brown, Blue, Hazel, Green</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">Sex</td>
<td style="text-align: left;">Male, Female</td>
</tr>
</table>
<h3>Details</h3>
<p>The Hair <i>x</i> Eye table comes rom a survey of students at the University of Delaware reported by Snee (1974). The split by <code>Sex</code> was added by Friendly (1992a) for didactic purposes.</p>
<p>This data set is useful for illustrating various techniques for the analysis of contingency tables, such as the standard chi-squared test or, more generally, log-linear modelling, and graphical methods such as mosaic plots, sieve diagrams or association plots.</p>
<h3>Source</h3>
<p><a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/haireye.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/haireye.sas</a></p>
<p>Snee (1974) gives the two-way table aggregated over <code>Sex</code>. The <code>Sex</code> split of the ‘Brown hair, Brown eye’ cell was changed to agree with that used by Friendly (2000).</p>
<h3>References</h3>
<p>Snee, R. D. (1974) Graphical display of two-way contingency tables. <em>The American Statistician</em>, <b>28</b>, 9–12.</p>
<p>Friendly, M. (1992a) Graphical methods for categorical data. <em>SAS User Group International Conference Proceedings</em>, <b>17</b>, 190–200. <a href="http://www.math.yorku.ca/SCS/sugi/sugi17-paper.html">http://www.math.yorku.ca/SCS/sugi/sugi17-paper.html</a></p>
<p>Friendly, M. (1992b) Mosaic displays for loglinear models. <em>Proceedings of the Statistical Graphics Section</em>, American Statistical Association, pp. 61–68. <a href="http://www.math.yorku.ca/SCS/Papers/asa92.html">http://www.math.yorku.ca/SCS/Papers/asa92.html</a></p>
<p>Friendly, M. (2000) <em>Visualizing Categorical Data.</em> SAS Institute, ISBN 1-58025-660-0.</p>
<h3>See Also</h3>
<p><code>chisq.test</code>, <code>loglin</code>, <code>mosaicplot</code></p>
<h3>Examples</h3>
<pre>
require(graphics)
## Full mosaic
mosaicplot(HairEyeColor)
## Aggregate over sex (as in Snee's original data)
x &lt;- apply(HairEyeColor, c(1, 2), sum)
x
mosaicplot(x, main = "Relation between hair and eye color")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-26840.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-26840.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-haireyecolor.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-26840.json';</script>