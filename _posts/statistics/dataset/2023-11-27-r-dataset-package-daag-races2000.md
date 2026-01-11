---
title: R Dataset / Package DAAG / races2000
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">races2000</span> data set which pertains to Scottish Hill Races Data - 2000. The <span class="mono">races2000</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">races2000</span> data set in R by issuing the following command at the console <span class="mono">data("races2000")</span>. This will load the data into a variable called <span class="mono">races2000</span>. If R says the <span class="mono">races2000</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-79585.csv">races2000 R data set</a></span>. The size of this file is about 4,669 bytes.</p><h2>Scottish Hill Races Data - 2000</h2>
<h3>Description</h3>
<p>The record times in 2000 for 77 Scottish long distance races. We believe the data are, for the most part, trustworthy. However, the <code>dist</code> variable for Caerketton (record 58) seems to have been variously recorded as 1.5 mi and 2.5 mi.</p>
<h3>Usage</h3>
<pre>races2000</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>dist</dt>
<dd>
<p>distance, in miles (on the map)</p>
</dd>
<dt>climb</dt>
<dd>
<p>total height gained during the route, in feet</p>
</dd>
<dt>time</dt>
<dd>
<p>record time in hours</p>
</dd>
<dt>timef</dt>
<dd>
<p>record time in hours for females</p>
</dd>
<dt>type</dt>
<dd>
<p>a factor, with levels indicating type of race, i.e. hill, marathon, relay, uphill or other</p>
</dd>
</dl>
<h3>Source</h3>
<p>The Scottish Running Resource, <a href="http://www.hillrunning.co.uk">http://www.hillrunning.co.uk</a></p>
<h3>Examples</h3>
<pre>
pairs(races2000[,-5])
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-79585.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-79585.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-races2000.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-79585.json';</script>