---
title: R Dataset / Package mosaicData / Births78
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Births78</span> data set which pertains to US Births in 1978. The <span class="mono">Births78</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Births78</span> data set in R by issuing the following command at the console <span class="mono">data("Births78")</span>. This will load the data into a variable called <span class="mono">Births78</span>. If R says the <span class="mono">Births78</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-36350.csv">Births78 R data set</a></span>. The size of this file is about 9,633 bytes.</p><h2>US Births in 1978</h2>
<h3>Description</h3>
<p>A day by day record of the number of births in the United States in 1978.</p>
<h3>Usage</h3>
<pre>
data(Births78)
</pre>
<h3>Format</h3>
<p>A data frame with 365 observations on the following variables.</p>
<ul>
<li>
<p><code>date</code> date in 1978</p>
</li>
<li>
<p><code>births</code> number of US births</p>
</li>
<li>
<p><code>dayofyear</code> sequential number of days from 1 to 365</p>
</li>
<li>
<p><code>wday</code> day of week as an ordered factor</p>
</li>
</ul>
<h3>Examples</h3>
<pre>
data(Births78)
if (require(lattice)) {
xyplot(births ~ date, Births78)
xyplot(births ~ date, Births78, groups = wday)
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-36350.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-36350.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-births78.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-36350.json';</script>