---
title: R Dataset / Package DAAG / modelcars
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">modelcars</span> data set which pertains to Model Car Data. The <span class="mono">modelcars</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">modelcars</span> data set in R by issuing the following command at the console <span class="mono">data("modelcars")</span>. This will load the data into a variable called <span class="mono">modelcars</span>. If R says the <span class="mono">modelcars</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90585.csv">modelcars R data set</a></span>. The size of this file is about 143 bytes.</p><h2>Model Car Data</h2>
<h3>Description</h3>
<p>The <code>modelcars</code> data frame has 12 rows and 2 columns. The data are for an experiment in which a model car was released three times at each of four different distances up a 20 degree ramp. The experimenter recorded distances traveled from the bottom of the ramp across a concrete floor.</p>
<h3>Usage</h3>
<pre>modelcars</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>distance.traveled</dt>
<dd>
<p>a numeric vector consisting of the lengths traveled (in cm)</p>
</dd>
<dt>starting.point</dt>
<dd>
<p>a numeric vector consisting of the distance of the starting point from the top of the ramp (in cm)</p>
</dd>
</dl>
<h3>Source</h3>
<p>W.J. Braun</p>
<h3>Examples</h3>
<pre>
plot(modelcars)
modelcars.lm &lt;- lm(distance.traveled ~ starting.point, data=modelcars)
aov(modelcars.lm)
pause()print("Response Curves - Example 4.6")
attach(modelcars)
stripchart(distance.traveled ~ starting.point, vertical=TRUE, pch=15,
 xlab = "Distance up ramp", ylab="Distance traveled")
detach(modelcars)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90585.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90585.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-modelcars.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90585.json';</script>