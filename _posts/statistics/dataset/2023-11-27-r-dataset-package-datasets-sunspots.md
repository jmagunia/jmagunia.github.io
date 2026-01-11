---
title: R Dataset / Package datasets / sunspots
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sunspots</span> data set which pertains to Monthly Sunspot Numbers, 1749–1983. The <span class="mono">sunspots</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">sunspots</span> data set in R by issuing the following command at the console <span class="mono">data("sunspots")</span>. This will load the data into a variable called <span class="mono">sunspots</span>. If R says the <span class="mono">sunspots</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-61024.csv">sunspots R data set</a></span>. The size of this file is about 60,582 bytes.</p><h2>Monthly Sunspot Numbers, 1749–1983</h2>
<h3>Description</h3>
<p>Monthly mean relative sunspot numbers from 1749 to 1983. Collected at Swiss Federal Observatory, Zurich until 1960, then Tokyo Astronomical Observatory.</p>
<h3>Usage</h3>
<pre>sunspots</pre>
<h3>Format</h3>
<p>A time series of monthly data from 1749 to 1983.</p>
<h3>Source</h3>
<p>Andrews, D. F. and Herzberg, A. M. (1985) <em>Data: A Collection of Problems from Many Fields for the Student and Research Worker</em>. New York: Springer-Verlag.</p>
<h3>See Also</h3>
<p><code>sunspot.month</code> has a longer (and a bit different) series, <code>sunspot.year</code> is a much shorter one. See there for getting more current sunspot numbers.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(sunspots, main = "sunspots data", xlab = "Year",
 ylab = "Monthly sunspot numbers")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-61024.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-61024.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-sunspots.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-61024.json';</script>