---
title: R Dataset / Package mosaicData / Riders
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Riders</span> data set which pertains to Volume of Users of a Massachusetts Rail Trail. The <span class="mono">Riders</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Riders</span> data set in R by issuing the following command at the console <span class="mono">data("Riders")</span>. This will load the data into a variable called <span class="mono">Riders</span>. If R says the <span class="mono">Riders</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50936.csv">Riders R data set</a></span>. The size of this file is about 5,095 bytes.</p><h2>Volume of Users of a Massachusetts Rail Trail</h2>
<h3>Description</h3>
<p>The Pioneer Valley Planning Commission (PVPC) collected data north of Chestnut Street in Florence, MA for ninety days from April 5, 2005 to November 15, 2005. Data collectors set up a laser sensor, with breaks in the laser beam recording when a rail-trail user passed the data collection station.</p>
<h3>Usage</h3>
<pre>
data(Riders)
</pre>
<h3>Format</h3>
<p>A data frame with 90 observations on the following 12 variables.</p>
<dl>
<dt><code>date</code></dt>
<dd>
<p>date of data collection (POSIXct)</p>
</dd>
<dt><code>day</code></dt>
<dd>
<p>a factor with levels <code>Monday</code>, <code>Tuesday</code>, <code>Wednesday</code>, <code>Thursday</code>, <code>Friday</code>, <code>Saturday</code>, and <code>Sunday</code>.</p>
</dd>
<dt><code>highT</code></dt>
<dd>
<p>high temperature for the day (in degrees Fahrenheit)</p>
</dd>
<dt><code>lowT</code></dt>
<dd>
<p>low temperature for the day (in degrees Fahrenheit)</p>
</dd>
<dt><code>hi</code></dt>
<dd>
<p>shorter name for <code>highT</code></p>
</dd>
<dt><code>lo</code></dt>
<dd>
<p>shorter name for <code>lowT</code></p>
</dd>
<dt><code>precip</code></dt>
<dd>
<p>inches of precipitation</p>
</dd>
<dt><code>clouds</code></dt>
<dd>
<p>measure of cloud cover (in oktas)</p>
</dd>
<dt><code>riders</code></dt>
<dd>
<p>estimated number of trail crossings that day (number of breaks recorded)</p>
</dd>
<dt><code>ct</code></dt>
<dd>
<p>shorter name for <code>riders</code></p>
</dd>
<dt><code>weekday</code></dt>
<dd>
<p>type of day: a factor with levels <code>N</code> (weekend or holiday) <code>Y</code> (non-holiday weekday)</p>
</dd>
<dt><code>wday</code></dt>
<dd>
<p>shorter name for <code>weekday</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>There is a potential for error when two users trigger the infrared beam at exactly the same time since the counter would only logs one of the crossings. The collectors left the motion detector out during the winter, but because the counter drops data when the temperature falls below 14 degrees Fahrenheit, there are no data for the coldest winter months.</p>
<h3>Source</h3>
<p>Pioneer Valley Planning Commission, <a href="http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts">http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts</a></p>
<h3>References</h3>
<p>"Rail trails and property values: Is there an association?", Nicholas J. Horton and Ella Hartenian (Journal of Statistics Education, 2015), <a href="http://www.amstat.org/publications/jse/v23n2/horton.pdf">http://www.amstat.org/publications/jse/v23n2/horton.pdf</a></p>
<h3>Examples</h3>
<pre>
data(Riders)
str(Riders)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50936.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50936.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-riders.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50936.json';</script>