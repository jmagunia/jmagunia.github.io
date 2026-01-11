---
title: R Dataset / Package HistData / OldMaps
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">OldMaps</span> data set which pertains to Latitudes and Longitudes of 39 Points in 11 Old Maps. The <span class="mono">OldMaps</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">OldMaps</span> data set in R by issuing the following command at the console <span class="mono">data("OldMaps")</span>. This will load the data into a variable called <span class="mono">OldMaps</span>. If R says the <span class="mono">OldMaps</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28753.csv">OldMaps R data set</a></span>. The size of this file is about 14,701 bytes.</p><h2>Latitudes and Longitudes of 39 Points in 11 Old Maps</h2>
<h3>Description</h3>
<p>The data set is concerned with the problem of aligning the coordinates of points read from old maps (1688 - 1818) of the Great Lakes area. 39 easily identifiable points were selected in the Great Lakes area, and their (lat, long) coordinates were recorded using a grid overlaid on each of 11 old maps, and using linear interpolation.</p>
<p>It was conjectured that maps might be systematically in error in five key ways: (a) constant error in latitude; (b)constant error in longitude; (c) proportional error in latitude; (d)proportional error in longitude; (e) angular error from a non-zero difference between true North and the map's North.</p>
<p>One challenge from these data is to produce useful analyses and graphical displays that relate to these characteristics or to other aspects of the data.</p>
<h3>Usage</h3>
<pre>data(OldMaps)</pre>
<h3>Format</h3>
<p>A data frame with 468 observations on the following 6 variables, giving the latitude and longitude of 39 points recorded from 12 sources (Actual + 11 maps).</p>
<dl>
<dt><code>point</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>col</code></dt>
<dd>
<p>Column in the table a numeric vector</p>
</dd>
<dt><code>name</code></dt>
<dd>
<p>Name of the map maker, using <code>Actual</code> for the true coordinates of the points. A factor with levels <code>Actual</code> <code>Arrowsmith</code> <code>Belin</code> <code>Cary</code> <code>Coronelli</code> <code>D'Anville} \code{Del'Isle</code> <code>Lattre</code> <code>Melish</code> <code>Mitchell</code> <code>Popple</code></p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>Year of the map</p>
</dd>
<dt><code>lat</code></dt>
<dd>
<p>Latitude</p>
</dd>
<dt><code>long</code></dt>
<dd>
<p>Longitude</p>
</dd>
</dl>
<h3>Details</h3>
<p>Some of the latitude and longitude values are inexplicably negative. It is probable that this is an error in type settting, because the table footnote says "* denotes that interpolation accuracy is not good," yet no "*"s appear in the body of the table.</p>
<h3>Source</h3>
<p>Andrews, D. F., and Herzberg, A. M. (1985). <em>Data: A Collection of Problems from Many fields for the Student and Research Worker</em>. New York: Springer, Table 10.1. The data were obtained from <a href="http://www.stat.duke.edu/courses/Spring01/sta114/data/Andrews/T10.1">http://www.stat.duke.edu/courses/Spring01/sta114/data/Andrews/T10.1</a>.</p>
<h3>Examples</h3>
<pre>
data(OldMaps)
## maybe str(OldMaps) ; plot(OldMaps) ...with(OldMaps, plot(abs(long),abs(lat), pch=col, col=colors()[point]))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28753.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28753.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-oldmaps.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28753.json';</script>