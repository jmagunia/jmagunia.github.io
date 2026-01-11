---
title: R Dataset / Package DAAG / droughts
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">droughts</span> data set which pertains to Periods Between Rain Events. The <span class="mono">droughts</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">droughts</span> data set in R by issuing the following command at the console <span class="mono">data("droughts")</span>. This will load the data into a variable called <span class="mono">droughts</span>. If R says the <span class="mono">droughts</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-56422.csv">droughts R data set</a></span>. The size of this file is about 24,411 bytes.</p><h2>Periods Between Rain Events</h2>
<h3>Description</h3>
<p>Data collected at Winnipeg International Airport (Canada) on periods (in days) between rain events.</p>
<h3>Usage</h3>
<pre>droughts</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>length</dt>
<dd>
<p>the length of time from the completion of the last rain event to the beginning of the next rain event.</p>
</dd>
<dt>year</dt>
<dd>
<p>the calendar year.</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
boxplot(length ~ year, data=droughts)
boxplot(log(length) ~ year, data=droughts)
hist(droughts$length, main="Winnipeg Droughts", xlab="length (in days)")
hist(log(droughts$length), main="Winnipeg Droughts", xlab="length (in days, log scale)")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-56422.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-56422.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-droughts.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-56422.json';</script>