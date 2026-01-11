---
title: R Dataset / Package vcd / RepVict
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">RepVict</span> data set which pertains to Repeat Victimization Data. The <span class="mono">RepVict</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">RepVict</span> data set in R by issuing the following command at the console <span class="mono">data("RepVict")</span>. This will load the data into a variable called <span class="mono">RepVict</span>. If R says the <span class="mono">RepVict</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22731.csv">RepVict R data set</a></span>. The size of this file is about 439 bytes.</p><h2>Repeat Victimization Data</h2>
<h3>Description</h3>
<p>Data from Reiss (1980) given by Fienberg (1980) about instances of repeat victimization for households in the U.S. National Crime Survey.</p>
<h3>Usage</h3>
<pre>
data("RepVict")
</pre>
<h3>Format</h3>
<p>A 2-dimensional array resulting from cross-tabulating victimization. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">First Victimization</td>
<td style="text-align: left;">Rape, Assault, Robbery, Pickpocket, Personal Larceny,</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Burglary, Household Larceny, Auto Theft</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Second Victimization</td>
<td style="text-align: left;">Rape, Assault, Robbery, Pickpocket, Personal Larceny,</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">Burglary, Household Larceny, Auto Theft</td>
</tr>
</table>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data, page 113.</p>
<h3>References</h3>
<p>S. E. Fienberg (1980), <em>The Analysis of Cross-Classified Categorical Data</em>, MIT Press, Cambridge, 2nd edition.</p>
<p>A. J. J. Reiss (1980), Victim proneness by type of crime in repeat victimization. In S. E. Fienberg &amp; A. J. J. Reiss (eds.), <em>Indicators of Crime and Criminal Justice</em>. U.S. Government Printing Office, Washington, DC.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("RepVict")mosaic(RepVict[-c(4,7),-c(4,7)], gp = shading_max,
 main = "Repeat Victimization Data")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22731.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22731.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-repvict.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22731.json';</script>