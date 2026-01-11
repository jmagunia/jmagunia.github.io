---
title: R Dataset / Package DAAG / possumsites
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">possumsites</span> data set which pertains to Possum Sites. The <span class="mono">possumsites</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">possumsites</span> data set in R by issuing the following command at the console <span class="mono">data("possumsites")</span>. This will load the data into a variable called <span class="mono">possumsites</span>. If R says the <span class="mono">possumsites</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45373.csv">possumsites R data set</a></span>. The size of this file is about 348 bytes.</p><h2>Possum Sites</h2>
<h3>Description</h3>
<p>The <code>possumsites</code> data frame consists of Longitudes, Latitudes, and altitudes for the seven sites from Southern Victoria to central Queensland where the <code>possum</code> observations were made.</p>
<h3>Usage</h3>
<pre>possumsites</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Longitude</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Latitude</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>altitude</dt>
<dd>
<p>in meters</p>
</dd>
</dl>
<h3>Source</h3>
<p>Lindenmayer, D. B., Viggers, K. L., Cunningham, R. B., and Donnelly, C. F. 1995. Morphological variation among columns of the mountain brushtail possum, Trichosurus caninus Ogilby (Phalangeridae: Marsupiala). Australian Journal of Zoology 43: 449-458.</p>
<h3>Examples</h3>
<pre>
require(oz)
oz(sections=c(3:5, 11:16))
attach(possumsites)
points(Longitude, Latitude, pch=16, col=2)
chw &lt;- par()$cxy[1]
chh &lt;- par()$cxy[2]
posval &lt;- c(2,4,2,2,4,2,2)
text(Longitude+(3-posval)*chw/4, Latitude, row.names(possumsites), pos=posval)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45373.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45373.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-possumsites.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45373.json';</script>