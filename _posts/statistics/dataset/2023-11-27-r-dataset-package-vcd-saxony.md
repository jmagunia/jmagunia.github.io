---
title: R Dataset / Package vcd / Saxony
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Saxony</span> data set which pertains to Families in Saxony. The <span class="mono">Saxony</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Saxony</span> data set in R by issuing the following command at the console <span class="mono">data("Saxony")</span>. This will load the data into a variable called <span class="mono">Saxony</span>. If R says the <span class="mono">Saxony</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-71157.csv">Saxony R data set</a></span>. The size of this file is about 120 bytes.</p><h2>Families in Saxony</h2>
<h3>Description</h3>
<p>Data from Geissler, cited in Sokal &amp; Rohlf (1969) and Lindsey (1995) on gender distributions in families in Saxony in the 19th century.</p>
<h3>Usage</h3>
<pre>
data("Saxony")
</pre>
<h3>Format</h3>
<p>A 1-way table giving the number of male children in 6115 families of size 12. The variable and its levels are</p>
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
<td style="text-align: left;">nMales</td>
<td style="text-align: left;">0, 1, ..., 12</td>
</tr>
</table>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data, pages 40–42.</p>
<h3>References</h3>
<p>J. K. Lindsey (1995), <em>Analysis of Frequency and Count Data</em>. Oxford University Press, Oxford, UK.</p>
<p>R. R. Sokal &amp; F. J. Rohlf (1969), <em>Biometry. The Principles and Practice of Statistics</em>. W. H. Freeman, San Francisco, CA.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Saxony")
gf &lt;- goodfit(Saxony, type = "binomial")
summary(gf)
plot(gf)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-71157.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-71157.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-saxony.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-71157.json';</script>