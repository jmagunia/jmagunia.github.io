---
title: R Dataset / Package survival / rats
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rats</span> data set which pertains to Rat treatment data from Mantel et al. The <span class="mono">rats</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">rats</span> data set in R by issuing the following command at the console <span class="mono">data("rats")</span>. This will load the data into a variable called <span class="mono">rats</span>. If R says the <span class="mono">rats</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65633.csv">rats R data set</a></span>. The size of this file is about 4,355 bytes.</p><h2>Rat treatment data from Mantel et al</h2>
<h3>Description</h3>
<p>Rat treatment data from Mantel et al. Three rats were chosen from each of 100 litters, one of which was treated with a drug, and then all followed for tumor incidence.</p>
<h3>Usage</h3>
<pre>rats</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">litter:</td>
<td style="text-align: left;">litter number from 1 to 100</td>
</tr>
<tr>
<td style="text-align: left;">rx:</td>
<td style="text-align: left;">treatment,(1=drug, 0=control)</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">time to tumor or last follow-up</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">event status, 1=tumor and 0=censored</td>
</tr>
<tr>
<td style="text-align: left;">sex:</td>
<td style="text-align: left;">male or female</td>
</tr>
</table>
<h3>Note</h3>
<p>Since only 2/150 of the male rats have a tumor, most analyses use only females (odd numbered litters), e.g. Lee et al.</p>
<h3>Source</h3>
<p>N. Mantel, N. R. Bohidar and J. L. Ciminera. Mantel-Haenszel analyses of litter-matched time to response data, with modifications for recovery of interlitter information. Cancer Research, 37:3863-3868, 1977.</p>
<h3>References</h3>
<p>E. W. Lee, L. J. Wei, and D. Amato, Cox-type regression analysis for large number of small groups of correlated failure time observations, in "Survival Analysis, State of the Art", Kluwer, 1992.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65633.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65633.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-rats.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65633.json';</script>