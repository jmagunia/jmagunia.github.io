---
title: R Dataset / Package DAAG / worldRecords
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">worldRecords</span> data set which pertains to Record times for track and road races, at August 9th 2006. The <span class="mono">worldRecords</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">worldRecords</span> data set in R by issuing the following command at the console <span class="mono">data("worldRecords")</span>. This will load the data into a variable called <span class="mono">worldRecords</span>. If R says the <span class="mono">worldRecords</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85852.csv">worldRecords R data set</a></span>. The size of this file is about 1,934 bytes.</p><h2>Record times for track and road races, at August 9th 2006</h2>
<h3>Description</h3>
<p>Record times for track and road races, at August 9th 2006</p>
<h3>Usage</h3>
<pre>data(worldRecords)</pre>
<h3>Format</h3>
<p>A data frame with 40 observations on the following 9 variables.</p>
<dl>
<dt><code>Distance</code></dt>
<dd>
<p>distance in kilometers</p>
</dd>
<dt><code>roadORtrack</code></dt>
<dd>
<p>a factor with levels <code>road</code> <code>track</code></p>
</dd>
<dt><code>Place</code></dt>
<dd>
<p>place; a character vector</p>
</dd>
<dt><code>Time</code></dt>
<dd>
<p>time in minutes</p>
</dd>
<dt><code>Date</code></dt>
<dd>
<p>a Date</p>
</dd>
</dl>
<h3>Details</h3>
<p>For further details, and some additional details, see the web site that is the source of the data.</p>
<h3>Source</h3>
<p><a href="http://www.gbrathletics.com/wrec.htm">http://www.gbrathletics.com/wrec.htm</a></p>
<h3>Examples</h3>
<pre>
data(worldRecords)
xyplot(log(Time) ~ log(Distance), groups=roadORtrack, data=worldRecords)
xyplot(log(Time) ~ log(Distance), groups=roadORtrack, data=worldRecords,
 type=c("p","r"))
xyplot(log(Time) ~ log(Distance), groups=roadORtrack, data=worldRecords,
 type=c("p","smooth"))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85852.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85852.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-worldrecords.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85852.json';</script>