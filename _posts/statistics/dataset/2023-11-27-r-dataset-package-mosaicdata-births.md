---
title: R Dataset / Package mosaicData / Births
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Births</span> data set which pertains to US Births. The <span class="mono">Births</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Births</span> data set in R by issuing the following command at the console <span class="mono">data("Births")</span>. This will load the data into a variable called <span class="mono">Births</span>. If R says the <span class="mono">Births</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-25015.csv">Births R data set</a></span>. The size of this file is about 281,279 bytes.</p><h2>US Births</h2>
<h3>Description</h3>
<p>Number of births each day from 1968 to 1988</p>
<h3>Usage</h3>
<pre>
data(Births)
</pre>
<h3>Format</h3>
<p>A data.frame with 7305 observations on the following 8 variables.</p>
<p>itemcodedate [Date] itemcodebirths number of births on <code>date</code> [integer] itemcodewday day of week [ordered factor] itemcodeyear year [integer] itemcodemonth month [integer] itemcodeday day of month [integer] itemcodeday_of_year day of year [integer] itemcodeday_of_week day of week [integer]</p>
<h3>Details</h3>
<p>The number of births in <code>Births78</code> is slightly lower than the number of births in this data set for the year 1978. See the examples.</p>
<h3>Source</h3>
<p>Data source: National Vital Statistics System natality data, as provided by Google BigQuery and exported to csv Robert Kern (<a href="http://www.mechanicalkern.com/static/birthdates-1968-1988.csv">http://www.mechanicalkern.com/static/birthdates-1968-1988.csv</a>)</p>
<h3>Examples</h3>
<pre>
data(Births)
if(require(ggplot2)) {
ggplot(data = Births, aes(x = date, y = births, colour = wday)) +
stat_smooth(se = FALSE, alpha = 0.8, geom = "line")
ggplot(data = Births, aes(x = day_of_year, y = births, colour = wday)) +
geom_point(size = 0.4, alpha = 0.5) +
stat_smooth(se = FALSE, geom = "line", alpha = 0.6, size = 1.5)
if (require(dplyr)) {
ggplot(
 data =bind_cols(Births %&gt;% filter(year == 1978), 
 Births78 %&gt;% rename(births78 = births)),
 aes(x = births - births78)
 ) +
 geom_histogram(binwidth = 1)
}
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-25015.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-25015.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-births.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-25015.json';</script>