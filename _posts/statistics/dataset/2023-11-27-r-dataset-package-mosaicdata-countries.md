---
title: R Dataset / Package mosaicData / Countries
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Countries</span> data set which pertains to Countries. The <span class="mono">Countries</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Countries</span> data set in R by issuing the following command at the console <span class="mono">data("Countries")</span>. This will load the data into a variable called <span class="mono">Countries</span>. If R says the <span class="mono">Countries</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-56725.csv">Countries R data set</a></span>. The size of this file is about 9,181 bytes.</p><h2>Countries</h2>
<h3>Description</h3>
<p>A data frame containing country names as used by GapMinder and the <code>maps</code> package to facilitate converstion between the two.</p>
<h3>Usage</h3>
<pre>
data(Countries)
</pre>
<h3>Format</h3>
<p>A data frame with 258 observations on the following variables.</p>
<ul>
<li>
<p><code>worldmap</code> region name <a href="http://mappinghacks.com/">http://mappinghacks.com/</a> data sets</p>
</li>
<li>
<p><code>gapminder</code> country name in GapMinder data sets</p>
</li>
<li>
<p><code>maps</code> region name in <code>maps</code> data sets</p>
</li>
</ul>
<h3>Details</h3>
<p>The "countries" in the <code>maps</code> data include several other geographic regions (bodies of water, islands belonging to other countries, Hawaii, etc.) that are not countries. Furthermore, the <code>maps</code> countries do not include many of the countries that have been created since ca. 2000. The mapping is therefore many-to-many, and also includes some NAs when there is no appropriate mapping. Bodies of water in the <code>maps</code> data, for example, are not assigned a country in the GapMinder.</p>
<h3>Examples</h3>
<pre>
data(Countries)
subset(Countries, maps=="Yugoslavia")# Where has Yugoslavia gone?
subset(Countries, is.na(gapminder))# Things from maps with no GapMinder equivalent
subset(Countries, is.na(maps)) # Things from GapMinder with no maps equivalent
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-56725.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-56725.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-countries.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-56725.json';</script>