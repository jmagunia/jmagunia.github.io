---
title: R Dataset / Package DAAG / elasticband
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">elasticband</span> data set which pertains to Elastic Band Data. The <span class="mono">elasticband</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">elasticband</span> data set in R by issuing the following command at the console <span class="mono">data("elasticband")</span>. This will load the data into a variable called <span class="mono">elasticband</span>. If R says the <span class="mono">elasticband</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-93772.csv">elasticband R data set</a></span>. The size of this file is about 70 bytes.</p><h2>Elastic Band Data</h2>
<h3>Description</h3>
<p>The <code>elasticband</code> data frame has 7 rows and 2 columns giving, for each amount by which an elastic band is stretched over the end of a ruler, the distance that the band traveled when released.</p>
<h3>Usage</h3>
<pre>elasticband</pre>
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
print("Example 1.8.1")attach(elasticband) # R now knows where to find stretch and distance
plot(stretch, distance) # Alternative: plot(distance ~ stretch)
detach(elasticband)
pause()print("Output of Data Frames - Example 12.3.2")write(t(elasticband),file="bands.txt",ncol=2)sink("bands2.txt")
elasticband # NB: No output on screen
sink()print("Lists - Example 12.7")elastic.lm &lt;- lm(distance ~ stretch, data=elasticband)
 names(elastic.lm)
 elastic.lm$coefficients
elastic.lm[["coefficients"]]
pause()elastic.lm[[1]]
pause()elastic.lm[1]
pause()options(digits=3)
elastic.lm$residuals 
pause()elastic.lm$call
pause() mode(elastic.lm$call)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-93772.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-93772.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-elasticband.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-93772.json';</script>