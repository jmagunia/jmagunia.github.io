---
title: R Dataset / Package mosaicData / RailTrail
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">RailTrail</span> data set which pertains to Volume of Users of a Rail Trail. The <span class="mono">RailTrail</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">RailTrail</span> data set in R by issuing the following command at the console <span class="mono">data("RailTrail")</span>. This will load the data into a variable called <span class="mono">RailTrail</span>. If R says the <span class="mono">RailTrail</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-89963.csv">RailTrail R data set</a></span>. The size of this file is about 4,032 bytes.</p><h2>Volume of Users of a Rail Trail</h2>
<h3>Description</h3>
<p>The Pioneer Valley Planning Commission (PVPC) collected data north of Chestnut Street in Florence, MA for ninety days from April 5, 2005 to November 15, 2005. Data collectors set up a laser sensor, with breaks in the laser beam recording when a rail-trail user passed the data collection station.</p>
<h3>Usage</h3>
<pre>
data(RailTrail)
</pre>
<h3>Format</h3>
<p>A data frame with 90 observations on the following variables.</p>
<ul>
<li>
<p><code>hightemp</code> daily high temperature (in degrees Fahrenheit)</p>
</li>
<li>
<p><code>lowtemp</code> daily low temperature (in degrees Fahrenheit)</p>
</li>
<li>
<p><code>avgtemp</code> average of daily low and daily high temperature (in degrees Fahrenheit)</p>
</li>
<li>
<p><code>spring</code> indicator of whether the season was Spring</p>
</li>
<li>
<p><code>summer</code> indicator of whether the season was Summer</p>
</li>
<li>
<p><code>fall</code> indicator of whether the season was Fall</p>
</li>
<li>
<p><code>cloudcover</code> measure of cloud cover (in oktas)</p>
</li>
<li>
<p><code>precip</code> measure of precipitation (in inches)</p>
</li>
<li>
<p><code>volume</code> estimated number of trail users that day (number of breaks recorded)</p>
</li>
<li>
<p><code>weekday</code> indicator of whether the day was a non-holiday weekday</p>
</li>
</ul>
<h3>Details</h3>
<p>There is a potential for error when two users trigger the infrared beam at exactly the same time since the counter would only logs one of the crossings. The collectors left the motion detector out during the winter, but because the counter drops data when the temperature falls below 14 degrees Fahrenheit, there is no data for the cold winter months.</p>
<h3>Source</h3>
<p>Pioneer Valley Planning Commission</p>
<h3>References</h3>
<p><a href="http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts">http://www.fvgreenway.org/pdfs/Northampton-Bikepath-Volume-Counts</a></p>
<h3>Examples</h3>
<pre>
data(RailTrail)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-89963.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-89963.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-railtrail.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-89963.json';</script>