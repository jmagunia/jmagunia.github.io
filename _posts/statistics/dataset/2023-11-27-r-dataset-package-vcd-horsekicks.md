---
title: R Dataset / Package vcd / HorseKicks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">HorseKicks</span> data set which pertains to Death by Horse Kicks. The <span class="mono">HorseKicks</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">HorseKicks</span> data set in R by issuing the following command at the console <span class="mono">data("HorseKicks")</span>. This will load the data into a variable called <span class="mono">HorseKicks</span>. If R says the <span class="mono">HorseKicks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-43595.csv">HorseKicks R data set</a></span>. The size of this file is about 51 bytes.</p><h2>Death by Horse Kicks</h2>
<h3>Description</h3>
<p>Data from von Bortkiewicz (1898), given by Andrews \&amp; Herzberg (1985), on number of deaths by horse or mule kicks in 10 (of 14 reported) corps of the Prussian army. 4 corps were not considered by Fisher (1925) as they had a different organization. This data set is a popular subset of the <code>VonBort</code> data.</p>
<h3>Usage</h3>
<pre>
data("HorseKicks")
</pre>
<h3>Format</h3>
<p>A 1-way table giving the number of deaths in 200 corps-years. The variable and its levels are</p>
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
<td style="text-align: left;">nDeaths</td>
<td style="text-align: left;">0, 1, ..., 4</td>
</tr>
</table>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data, page 18.</p>
<h3>References</h3>
<p>D. F. Andrews &amp; A. M. Herzberg (1985), <em>Data: A Collection of Problems from Many Fields for the Student and Research Worker</em>. Springer-Verlag, New York, NY.</p>
<p>R. A. Fisher (1925), <em>Statistical Methods for Research Workers</em>. Oliver \&amp; Boyd, London.</p>
<p>L. von Bortkiewicz (1898), <em>Das Gesetz der kleinen Zahlen</em>. Teubner, Leipzig.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>See Also</h3>
<p><code>VonBort</code></p>
<h3>Examples</h3>
<pre>
data("HorseKicks")
gf &lt;- goodfit(HorseKicks)
summary(gf)
plot(gf)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-43595.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-43595.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-horsekicks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-43595.json';</script>