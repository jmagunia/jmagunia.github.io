---
title: R Dataset / Package datasets / volcano
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">volcano</span> data set which pertains to Topographic Information on Auckland's Maunga Whau Volcano. The <span class="mono">volcano</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">volcano</span> data set in R by issuing the following command at the console <span class="mono">data("volcano")</span>. This will load the data into a variable called <span class="mono">volcano</span>. If R says the <span class="mono">volcano</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-46531.csv">volcano R data set</a></span>. The size of this file is about 21,167 bytes.</p><h2>Topographic Information on Auckland's Maunga Whau Volcano</h2>
<h3>Description</h3>
<p>Maunga Whau (Mt Eden) is one of about 50 volcanos in the Auckland volcanic field. This data set gives topographic information for Maunga Whau on a 10m by 10m grid.</p>
<h3>Usage</h3>
<pre>volcano</pre>
<h3>Format</h3>
<p>A matrix with 87 rows and 61 columns, rows corresponding to grid lines running east to west and columns to grid lines running south to north.</p>
<h3>Source</h3>
<p>Digitized from a topographic map by Ross Ihaka. These data should not be regarded as accurate.</p>
<h3>See Also</h3>
<p><code>filled.contour</code> for a nice plot.</p>
<h3>Examples</h3>
<pre>
require(grDevices); require(graphics)
filled.contour(volcano, color.palette = terrain.colors, asp = 1)
title(main = "volcano data: filled contour map")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-46531.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-46531.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-volcano.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-46531.json';</script>