---
title: R Dataset / Package vcd / SexualFun
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">SexualFun</span> data set which pertains to Sex is Fun. The <span class="mono">SexualFun</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">SexualFun</span> data set in R by issuing the following command at the console <span class="mono">data("SexualFun")</span>. This will load the data into a variable called <span class="mono">SexualFun</span>. If R says the <span class="mono">SexualFun</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60908.csv">SexualFun R data set</a></span>. The size of this file is about 131 bytes.</p><h2>Sex is Fun</h2>
<h3>Description</h3>
<p>Data from Hout et al. (1987) given by Agresti (1990) summarizing the responses of married couples to the questionnaire item: Sex is fun for me and my partner: (a) never or occasionally, (b) fairly often, (c) very often, (d) almost always.</p>
<h3>Usage</h3>
<pre>
data("SexualFun")
</pre>
<h3>Format</h3>
<p>A 2-dimensional array resulting from cross-tabulating the ratings of 91 married couples. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">Husband</td>
<td style="text-align: left;">Never Fun, Fairly Often, Very Often, Always Fun</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Wife</td>
<td style="text-align: left;">Never Fun, Fairly Often, Very Often, Always Fun</td>
</tr>
</table>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data, page 91.</p>
<h3>References</h3>
<p>A. Agresti (1990), <em>Categorical Data Analysis</em>. Wiley-Interscience, New York.</p>
<p>M. Hout, O. D. Duncan, M. E. Sobel (1987), Association and heterogeneity: Structural models of similarities and differences, <em>Sociological Methodology</em>, <b>17</b>, 145-184.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("SexualFun")## Kappa statistics
Kappa(SexualFun)## Agreement Chart
agreementplot(t(SexualFun), weights = 1)
## Partial Agreement Chart and B-Statistics
agreementplot(t(SexualFun),
xlab = "Husband's Rating",
ylab = "Wife's Rating",
main = "Husband's and Wife's Sexual Fun")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60908.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60908.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-sexualfun.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60908.json';</script>