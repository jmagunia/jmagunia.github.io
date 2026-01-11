---
title: R Dataset / Package DAAG / hotspots2006
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hotspots2006</span> data set which pertains to Hawaian island chain hotspot Argon-Argon ages. The <span class="mono">hotspots2006</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">hotspots2006</span> data set in R by issuing the following command at the console <span class="mono">data("hotspots2006")</span>. This will load the data into a variable called <span class="mono">hotspots2006</span>. If R says the <span class="mono">hotspots2006</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-99035.csv">hotspots2006 R data set</a></span>. The size of this file is about 378 bytes.</p><h2>Hawaian island chain hotspot Argon-Argon ages</h2>
<h3>Description</h3>
<p>Ar-Ar Ages (millions of years) and distances (km) from Kilauea along the trend of the chain of Hawaian volcanic islands and other seamounts that are believed to have been created by a moving "hot spot".</p>
<h3>Usage</h3>
<pre>data(hotspots2006)</pre>
<h3>Format</h3>
<p>A data frame with 10 observations on the following 6 variables.</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>Ar-Ar age</p>
</dd>
<dt><code>CI95lim</code></dt>
<dd>
<p>Measurement error; 95% CI</p>
</dd>
<dt><code>geoErr</code></dt>
<dd>
<p>Geological Uncertainty</p>
</dd>
<dt><code>totplus</code></dt>
<dd>
<p>Total uncertainty (+)</p>
</dd>
<dt><code>totminus</code></dt>
<dd>
<p>Total uncertainty (-)</p>
</dd>
<dt><code>distance</code></dt>
<dd>
<p>Distance in kilometers</p>
</dd>
</dl>
<h3>Details</h3>
<p>Note that measurement error is small relative to geological uncertainty. Geological uncertainty arises because lavas are likely to have erupted, over a period of up to 2 million years, somewhat after passage over the hot spot's centre. Dredging or drilling will in general have accessed larvas from the younger half of this interval. Hence the asymmetry in the geological uncertainty.</p>
<h3>Source</h3>
<p>Warren D. Sharp and David A. Clague, 50-Ma initiation of Hawaiian-Emperor bend records major change in Pacific Plate motion. Science 313: 1281-1284 (2006).</p>
<h3>Examples</h3>
<pre>
data(hotspots2006)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-99035.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-99035.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-hotspots2006.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-99035.json';</script>