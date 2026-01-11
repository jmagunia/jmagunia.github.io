---
title: R Dataset / Package datasets / esoph
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">esoph</span> data set which pertains to Smoking, Alcohol and (O)esophageal Cancer. The <span class="mono">esoph</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">esoph</span> data set in R by issuing the following command at the console <span class="mono">data("esoph")</span>. This will load the data into a variable called <span class="mono">esoph</span>. If R says the <span class="mono">esoph</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-87569.csv">esoph R data set</a></span>. The size of this file is about 2,645 bytes.</p><h2>Smoking, Alcohol and (O)esophageal Cancer</h2>
<h3>Description</h3>
<p>Data from a case-control study of (o)esophageal cancer in Ille-et-Vilaine, France.</p>
<h3>Usage</h3>
<pre>esoph</pre>
<h3>Format</h3>
<p>A data frame with records for 88 age/alcohol/tobacco combinations.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">"agegp"</td>
<td style="text-align: left;">Age group</td>
<td style="text-align: left;">1 25--34 years</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 35--44</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">3 45--54</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">4 55--64</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">5 65--74</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">6 75+</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">"alcgp"</td>
<td style="text-align: left;">Alcohol consumption</td>
<td style="text-align: left;">1 0--39 gm/day</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 40--79</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">3 80--119</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">4 120+</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">"tobgp"</td>
<td style="text-align: left;">Tobacco consumption</td>
<td style="text-align: left;">1 0-- 9 gm/day</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 10--19</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">3 20--29</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">4 30+</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">"ncases"</td>
<td style="text-align: left;">Number of cases</td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: right;">[,5]</td>
<td style="text-align: left;">"ncontrols"</td>
<td style="text-align: left;">Number of controls</td>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Author(s)</h3>
<p>Thomas Lumley</p>
<h3>Source</h3>
<p>Breslow, N. E. and Day, N. E. (1980) <em>Statistical Methods in Cancer Research. Volume 1: The Analysis of Case-Control Studies.</em> IARC Lyon / Oxford University Press.</p>
<h3>Examples</h3>
<pre>
require(stats)
require(graphics) # for mosaicplot
summary(esoph)
## effects of alcohol, tobacco and interaction, age-adjusted
model1 &lt;- glm(cbind(ncases, ncontrols) ~ agegp + tobgp * alcgp,
data = esoph, family = binomial())
anova(model1)
## Try a linear effect of alcohol and tobacco
model2 &lt;- glm(cbind(ncases, ncontrols) ~ agegp + unclass(tobgp)
 + unclass(alcgp),
data = esoph, family = binomial())
summary(model2)
## Re-arrange data for a mosaic plot
ttt &lt;- table(esoph$agegp, esoph$alcgp, esoph$tobgp)
o &lt;- with(esoph, order(tobgp, alcgp, agegp))
ttt[ttt == 1] &lt;- esoph$ncases[o]
tt1 &lt;- table(esoph$agegp, esoph$alcgp, esoph$tobgp)
tt1[tt1 == 1] &lt;- esoph$ncontrols[o]
tt &lt;- array(c(ttt, tt1), c(dim(ttt),2),
c(dimnames(ttt), list(c("Cancer", "control"))))
mosaicplot(tt, main = "esoph data set", color = TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-87569.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-87569.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-esoph.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-87569.json';</script>