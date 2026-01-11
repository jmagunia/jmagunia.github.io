---
title: R Dataset / Package DAAG / progression
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">progression</span> data set which pertains to Progression of Record times for track races, 1912 - 2008. The <span class="mono">progression</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">progression</span> data set in R by issuing the following command at the console <span class="mono">data("progression")</span>. This will load the data into a variable called <span class="mono">progression</span>. If R says the <span class="mono">progression</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-89251.csv">progression R data set</a></span>. The size of this file is about 7,054 bytes.</p><h2>Progression of Record times for track races, 1912 - 2008</h2>
<h3>Description</h3>
<p>Progression in world record times for track and road races.</p>
<h3>Usage</h3>
<pre>data(progression)</pre>
<h3>Format</h3>
<p>A data frame with 227 observations on the following 4 columns.</p>
<dl>
<dt><code>year</code></dt>
<dd>
<p>Year that time was first recorded</p>
</dd>
<dt><code>Distance</code></dt>
<dd>
<p>distance in kilometers</p>
</dd>
<dt><code>Time</code></dt>
<dd>
<p>time in minutes</p>
</dd>
<dt><code>race</code></dt>
<dd>
<p>character; descriptor for event (100m, mile, ...)</p>
</dd>
</dl>
<h3>Details</h3>
<p>Record times for men's track events, from 1912 onwards. The series starts with times that were recognized as record times in 1912, where available.</p>
<h3>Source</h3>
<p>Links to sources for the data are at</p>
<p><a href="http://en.wikipedia.org/wiki/Athletics_world_record">http://en.wikipedia.org/wiki/Athletics_world_record</a></p>
<h3>Examples</h3>
<pre>
data(progression)
plot(log(Time) ~ log(Distance), data=progression)
xyplot(log(Time) ~ log(Distance), data=progression, type=c("p","r"))
xyplot(log(Time) ~ log(Distance), data=progression,
 type=c("p","smooth"))
res &lt;- resid(lm(log(Time) ~ log(Distance), data=progression))
plot(res ~ log(Distance), data=progression,
 ylab="Residuals from regression line on log scales")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-89251.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-89251.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-progression.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-89251.json';</script>