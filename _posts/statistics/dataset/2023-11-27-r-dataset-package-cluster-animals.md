---
title: R Dataset / Package cluster / animals
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">animals</span> data set which pertains to Attributes of Animals. The <span class="mono">animals</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">animals</span> data set in R by issuing the following command at the console <span class="mono">data("animals")</span>. This will load the data into a variable called <span class="mono">animals</span>. If R says the <span class="mono">animals</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65725.csv">animals R data set</a></span>. The size of this file is about 361 bytes.</p><h2>Attributes of Animals</h2>
<h3>Description</h3>
<p>This data set considers 6 binary attributes for 20 animals.</p>
<h3>Usage</h3>
<pre>data(animals)</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on 6 variables:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[ , 1]</td>
<td style="text-align: left;">war</td>
<td style="text-align: left;">warm-blooded</td>
</tr>
<tr>
<td style="text-align: right;">[ , 2]</td>
<td style="text-align: left;">fly</td>
<td style="text-align: left;">can fly</td>
</tr>
<tr>
<td style="text-align: right;">[ , 3]</td>
<td style="text-align: left;">ver</td>
<td style="text-align: left;">vertebrate</td>
</tr>
<tr>
<td style="text-align: right;">[ , 4]</td>
<td style="text-align: left;">end</td>
<td style="text-align: left;">endangered</td>
</tr>
<tr>
<td style="text-align: right;">[ , 5]</td>
<td style="text-align: left;">gro</td>
<td style="text-align: left;">live in groups</td>
</tr>
<tr>
<td style="text-align: right;">[ , 6]</td>
<td style="text-align: left;">hai</td>
<td style="text-align: left;">have hair</td>
</tr>
</table>
<p>All variables are encoded as 1 = ‘no’, 2 = ‘yes’.</p>
<h3>Details</h3>
<p>This dataset is useful for illustrating monothetic (only a single variable is used for each split) hierarchical clustering.</p>
<h3>Source</h3>
<p>Leonard Kaufman and Peter J. Rousseeuw (1990): <em>Finding Groups in Data</em> (pp 297ff). New York: Wiley.</p>
<h3>References</h3>
<p>see Struyf, Hubert &amp; Rousseeuw (1996), in <code>agnes</code>.</p>
<h3>Examples</h3>
<pre>
data(animals)
apply(animals,2, table) # simple overviewma &lt;- mona(animals)
ma
## Plot similar to Figure 10 in Struyf et al (1996)
plot(ma)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65725.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65725.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-animals.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65725.json';</script>