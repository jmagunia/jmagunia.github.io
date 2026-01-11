---
title: R Dataset / Package vcd / UKSoccer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UKSoccer</span> data set which pertains to UK Soccer Scores. The <span class="mono">UKSoccer</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">UKSoccer</span> data set in R by issuing the following command at the console <span class="mono">data("UKSoccer")</span>. This will load the data into a variable called <span class="mono">UKSoccer</span>. If R says the <span class="mono">UKSoccer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-21744.csv">UKSoccer R data set</a></span>. The size of this file is about 84 bytes.</p><h2>UK Soccer Scores</h2>
<h3>Description</h3>
<p>Data from Lee (1997), on the goals scored by Home and Away teams in the Premier Football League, 1995/6 season.</p>
<h3>Usage</h3>
<pre>
data("UKSoccer")
</pre>
<h3>Format</h3>
<p>A 2-dimensional array resulting from cross-tabulating the number of goals scored in 380 games. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">Home</td>
<td style="text-align: left;">0, 1, ..., 4</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Away</td>
<td style="text-align: left;">0, 1, ..., 4</td>
</tr>
</table>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data, page 27.</p>
<h3>References</h3>
<p>A. J. Lee (1997), Modelling scores in the Premier League: Is Manchester United really the best?, <em>Chance</em>, <b>10</b>(1), 15–19.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>See Also</h3>
<p><code>Bundesliga</code></p>
<h3>Examples</h3>
<pre>
data("UKSoccer")
mosaic(UKSoccer, gp = shading_max, main = "UK Soccer Scores")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-21744.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-21744.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-uksoccer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-21744.json';</script>