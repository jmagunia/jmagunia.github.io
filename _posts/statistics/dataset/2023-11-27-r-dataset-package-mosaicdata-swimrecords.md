---
title: R Dataset / Package mosaicData / SwimRecords
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">SwimRecords</span> data set which pertains to 100 m Swimming World Records. The <span class="mono">SwimRecords</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">SwimRecords</span> data set in R by issuing the following command at the console <span class="mono">data("SwimRecords")</span>. This will load the data into a variable called <span class="mono">SwimRecords</span>. If R says the <span class="mono">SwimRecords</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15742.csv">SwimRecords R data set</a></span>. The size of this file is about 898 bytes.</p><h2>100 m Swimming World Records</h2>
<h3>Description</h3>
<p>World records for men and women over time from 1905 through 2004.</p>
<h3>Usage</h3>
<pre>
data(SwimRecords)
</pre>
<h3>Format</h3>
<p>A data frame with 62 observations of the following variables.</p>
<ul>
<li>
<p><code>time</code> time (in seconds) of the world record</p>
</li>
<li>
<p><code>year</code> Year in which the record was set</p>
</li>
<li>
<p><code>sex</code> a factor with levels <code>M</code> and <code>F</code></p>
</li>
</ul>
<h3>Examples</h3>
<pre>
data(SwimRecords)
if (require(lattice)) {
xyplot(time~year, data=SwimRecords, groups=sex)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15742.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15742.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-swimrecords.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15742.json';</script>