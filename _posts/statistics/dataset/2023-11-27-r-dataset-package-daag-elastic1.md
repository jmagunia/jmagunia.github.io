---
title: R Dataset / Package DAAG / elastic1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">elastic1</span> data set which pertains to Elastic Band Data Replicated. The <span class="mono">elastic1</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">elastic1</span> data set in R by issuing the following command at the console <span class="mono">data("elastic1")</span>. This will load the data into a variable called <span class="mono">elastic1</span>. If R says the <span class="mono">elastic1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27228.csv">elastic1 R data set</a></span>. The size of this file is about 70 bytes.</p><h2>Elastic Band Data Replicated</h2>
<h3>Description</h3>
<p>The <code>elastic1</code> data frame has 7 rows and 2 columns giving, for each amount by which an elastic band is stretched over the end of a ruler, the distance that the band traveled when released.</p>
<h3>Usage</h3>
<pre>elastic1</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>stretch</dt>
<dd>
<p>the amount by which the elastic band was stretched</p>
</dd>
<dt>distance</dt>
<dd>
<p>the distance traveled</p>
</dd>
</dl>
<h3>Source</h3>
<p>J. H. Maindonald</p>
<h3>Examples</h3>
<pre>
plot(elastic1)print("Inline Functions - Example 12.2.2")
sapply(elastic1, mean)
pause()sapply(elastic1, function(x)mean(x))
pause()sapply(elastic1, function(x)sum(log(x)))
pause()print("Data Output - Example 12.3.2")
write.table(elastic1, file="bandsframe.txt")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27228.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27228.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-elastic1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27228.json';</script>