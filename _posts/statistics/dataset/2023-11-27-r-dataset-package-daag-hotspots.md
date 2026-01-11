---
title: R Dataset / Package DAAG / hotspots
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hotspots</span> data set which pertains to Hawaian island chain hotspot Potassium-Argon ages. The <span class="mono">hotspots</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">hotspots</span> data set in R by issuing the following command at the console <span class="mono">data("hotspots")</span>. This will load the data into a variable called <span class="mono">hotspots</span>. If R says the <span class="mono">hotspots</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10350.csv">hotspots R data set</a></span>. The size of this file is about 1,285 bytes.</p><h2>Hawaian island chain hotspot Potassium-Argon ages</h2>
<h3>Description</h3>
<p>K-Ar Ages (millions of years) and distances (km) from Kilauea along the trend of the chain of Hawaian volcanic islands and other seamounts that are believed to have been created by a moving "hot spot". The age of Kilauea is given as 0-0.4 Ma.</p>
<h3>Usage</h3>
<pre>data(hotspots)</pre>
<h3>Format</h3>
<p>A data frame with 36 observations on the following 6 variables.</p>
<dl>
<dt><code>ID</code></dt>
<dd>
<p>Volcano identifier</p>
</dd>
<dt><code>name</code></dt>
<dd>
<p>Name</p>
</dd>
<dt><code>distance</code></dt>
<dd>
<p>Distance in kilometers</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>K-Ar age in millions of years</p>
</dd>
<dt><code>error</code></dt>
<dd>
<p>Standard error of estimate?</p>
</dd>
<dt><code>source</code></dt>
<dd>
<p>Data source; see information on web site below.</p>
</dd>
</dl>
<h3>Details</h3>
<p>For details of the way that errors werre calculated, refer to the original papers. See also the comments under <code>hotspots2006</code>. In general, errors do not account for geological uncertainty.</p>
<h3>Source</h3>
<p><a href="http://www.soest.hawaii.edu/GG/HCV/haw_formation.html">http://www.soest.hawaii.edu/GG/HCV/haw_formation.html</a></p>
<h3>Examples</h3>
<pre>
data(hotspots)
plot(age ~ distance, data=hotspots)
abline(lm(age ~ distance, data=hotspots))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10350.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10350.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-hotspots.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10350.json';</script>