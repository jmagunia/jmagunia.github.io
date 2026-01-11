---
title: R Dataset / Package DAAG / elastic2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">elastic2</span> data set which pertains to Elastic Band Data Replicated Again. The <span class="mono">elastic2</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">elastic2</span> data set in R by issuing the following command at the console <span class="mono">data("elastic2")</span>. This will load the data into a variable called <span class="mono">elastic2</span>. If R says the <span class="mono">elastic2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-58337.csv">elastic2 R data set</a></span>. The size of this file is about 83 bytes.</p><h2>Elastic Band Data Replicated Again</h2>
<h3>Description</h3>
<p>The <code>elastic2</code> data frame has 9 rows and 2 columns giving, for each amount by which an elastic band is stretched over the end of a ruler, the distance that the band traveled when released.</p>
<h3>Usage</h3>
<pre>elastic2</pre>
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
plot(elastic2)
pause()print("Chapter 5 Exercise")yrange &lt;- range(c(elastic1$distance, elastic2$distance))
xrange &lt;- range(c(elastic1$stretch, elastic2$stretch))
plot(distance ~ stretch, data = elastic1, pch = 16, ylim = yrange, xlim = 
xrange)
points(distance ~ stretch, data = elastic2, pch = 15, col = 2)
legend(xrange[1], yrange[2], legend = c("Data set 1", "Data set 2"), pch = 
c(16, 15), col = c(1, 2))elastic1.lm &lt;- lm(distance ~ stretch, data = elastic1)
elastic2.lm &lt;- lm(distance ~ stretch, data = elastic2)
abline(elastic1.lm)
abline(elastic2.lm, col = 2)
summary(elastic1.lm)
summary(elastic2.lm)
pause()predict(elastic1.lm, se.fit=TRUE)
predict(elastic2.lm, se.fit=TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-58337.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-58337.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-elastic2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-58337.json';</script>