---
title: R Dataset / Package vcd / Butterfly
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Butterfly</span> data set which pertains to Butterfly Species in Malaya. The <span class="mono">Butterfly</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Butterfly</span> data set in R by issuing the following command at the console <span class="mono">data("Butterfly")</span>. This will load the data into a variable called <span class="mono">Butterfly</span>. If R says the <span class="mono">Butterfly</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68907.csv">Butterfly R data set</a></span>. The size of this file is about 193 bytes.</p><h2>Butterfly Species in Malaya</h2>
<h3>Description</h3>
<p>Data from Fisher et al. (1943) giving the number of tokens found for each of 501 species of butterflies collected in Malaya.</p>
<h3>Usage</h3>
<pre>
data("Butterfly")
</pre>
<h3>Format</h3>
<p>A 1-way table giving the number of tokens for 501 species of butterflies. The variable and its levels are</p>
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
<td style="text-align: left;">nTokens</td>
<td style="text-align: left;">0, 1, ..., 24</td>
</tr>
</table>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data, pages 21–22.</p>
<h3>References</h3>
<p>R. A. Fisher, A. S. Corbet, C. B. Williams (1943), The relation between the number of species and the number of individuals, <em>Journal of Animal Ecology</em>, <b>12</b>, 42–58.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Butterfly")
Ord_plot(Butterfly)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68907.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68907.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-butterfly.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68907.json';</script>