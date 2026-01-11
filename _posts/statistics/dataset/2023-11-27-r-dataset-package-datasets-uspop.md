---
title: R Dataset / Package datasets / uspop
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">uspop</span> data set which pertains to Populations Recorded by the US Census. The <span class="mono">uspop</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">uspop</span> data set in R by issuing the following command at the console <span class="mono">data("uspop")</span>. This will load the data into a variable called <span class="mono">uspop</span>. If R says the <span class="mono">uspop</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22454.csv">uspop R data set</a></span>. The size of this file is about 207 bytes.</p><h2>Populations Recorded by the US Census</h2>
<h3>Description</h3>
<p>This data set gives the population of the United States (in millions) as recorded by the decennial census for the period 1790–1970.</p>
<h3>Usage</h3>
<pre>uspop</pre>
<h3>Format</h3>
<p>A time series of 19 values.</p>
<h3>Source</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(uspop, log = "y", main = "uspop data", xlab = "Year",
 ylab = "U.S. Population (millions)")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22454.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22454.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-uspop.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22454.json';</script>