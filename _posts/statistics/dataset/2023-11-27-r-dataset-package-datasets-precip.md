---
title: R Dataset / Package datasets / precip
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">precip</span> data set which pertains to Annual Precipitation in US Cities. The <span class="mono">precip</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">precip</span> data set in R by issuing the following command at the console <span class="mono">data("precip")</span>. This will load the data into a variable called <span class="mono">precip</span>. If R says the <span class="mono">precip</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-95057.csv">precip R data set</a></span>. The size of this file is about 328 bytes.</p><h2>Annual Precipitation in US Cities</h2>
<h3>Description</h3>
<p>The average amount of precipitation (rainfall) in inches for each of 70 United States (and Puerto Rico) cities.</p>
<h3>Usage</h3>
<pre>precip</pre>
<h3>Format</h3>
<p>A named vector of length 70.</p>
<h3>Note</h3>
<p>The dataset version up to Nov.16, 2016 had a typo in <code>"Cincinnati"</code>'s name. The examples show how to recreate that version.</p>
<h3>Source</h3>
<p>Statistical Abstracts of the United States, 1975.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
dotchart(precip[order(precip)], main = "precip data")
title(sub = "Average annual precipitation (in.)")## Old ("wrong") version of dataset (just name change):
precip.O &lt;- local({
 p &lt;- precip; names(p)[names(p) == "Cincinnati"] &lt;- "Cincinati" ; p })
stopifnot(all(precip == precip.O),
match("Cincinnati", names(precip)) == 46,
identical(names(precip)[-46], names(precip.O)[-46]))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-95057.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-95057.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-precip.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-95057.json';</script>