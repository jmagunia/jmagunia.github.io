---
title: R Dataset / Package vcd / WeldonDice
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">WeldonDice</span> data set which pertains to Weldon's Dice Data. The <span class="mono">WeldonDice</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">WeldonDice</span> data set in R by issuing the following command at the console <span class="mono">data("WeldonDice")</span>. This will load the data into a variable called <span class="mono">WeldonDice</span>. If R says the <span class="mono">WeldonDice</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50076.csv">WeldonDice R data set</a></span>. The size of this file is about 108 bytes.</p><h2>Weldon's Dice Data</h2>
<h3>Description</h3>
<p>Data from Pearson (1900) about the frequency of 5s and 6s in throws of 12 dice. Weldon tossed the dice 26,306 times and reported his results in a letter to Francis Galton on 1894-02-02.</p>
<h3>Usage</h3>
<pre>
data("WeldonDice")
</pre>
<h3>Format</h3>
<p>A 1-way table giving the frequency of a 5 or a 6 in 26,306 throws of 12 dice where 10 indicates ‘10 or more’ 5s or 6s. The variable and its levels are</p>
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
<td style="text-align: left;">n56</td>
<td style="text-align: left;">0, 1, ..., 10</td>
</tr>
</table>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data, pages 20–21.</p>
<h3>References</h3>
<p>K. Pearson (1900), On the criterion that a given system of deviations from the probable in the case of a correlated system of variables is such that it can be reasonably supposed to have arisen by random sampling, <em>Philosophical Magazine</em>, <b>50</b> (5th series), 157–175.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("WeldonDice")
gf &lt;- goodfit(WeldonDice, type = "binomial")
summary(gf)
plot(gf)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50076.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50076.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-weldondice.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50076.json';</script>