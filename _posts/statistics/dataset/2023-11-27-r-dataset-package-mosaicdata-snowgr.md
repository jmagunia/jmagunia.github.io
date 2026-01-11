---
title: R Dataset / Package mosaicData / SnowGR
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">SnowGR</span> data set which pertains to Snowfall data for Grand Rapids, MI. The <span class="mono">SnowGR</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">SnowGR</span> data set in R by issuing the following command at the console <span class="mono">data("SnowGR")</span>. This will load the data into a variable called <span class="mono">SnowGR</span>. If R says the <span class="mono">SnowGR</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24277.csv">SnowGR R data set</a></span>. The size of this file is about 6,249 bytes.</p><h2>Snowfall data for Grand Rapids, MI</h2>
<h3>Description</h3>
<p>Official snowfall data by month and season for Grand Rapids, MI, going back to 1893.</p>
<h3>Usage</h3>
<pre>
data(SnowGR)
</pre>
<h3>Format</h3>
<p>A data frame with 119 observations of the following variables.</p>
<ul>
<li>
<p><code>SeasonStart</code> Year in which season started (July is start of season)</p>
</li>
<li>
<p><code>SeasonEnd</code> Year in which season ended (June is end of season)</p>
</li>
<li>
<p><code>Jul</code> Inches of snow in July</p>
</li>
<li>
<p><code>Aug</code> Inches of snow in August</p>
</li>
<li>
<p><code>Sep</code> Inches of snow in September</p>
</li>
<li>
<p><code>Oct</code> Inches of snow in October</p>
</li>
<li>
<p><code>Nov</code> Inches of snow in November</p>
</li>
<li>
<p><code>Dec</code> Inches of snow in December</p>
</li>
<li>
<p><code>Jan</code> Inches of snow in January</p>
</li>
<li>
<p><code>Feb</code> Inches of snow in February</p>
</li>
<li>
<p><code>Mar</code> Inches of snow in March</p>
</li>
<li>
<p><code>Apr</code> Inches of snow in April</p>
</li>
<li>
<p><code>May</code> Inches of snow in May</p>
</li>
<li>
<p><code>Jun</code> Inches of snow in June</p>
</li>
<li>
<p><code>Total</code> Inches of snow for entire season (July-June)</p>
</li>
</ul>
<h3>Source</h3>
<p>These data were compiled by Laura Kapitula from data available at <a href="http://www.crh.noaa.gov/grr/climate/data/grr/snowfall/">http://www.crh.noaa.gov/grr/climate/data/grr/snowfall/</a>.</p>
<h3>Examples</h3>
<pre>
data(SnowGR)
if (require(mosaic)) {
favstats(SnowGR$Total)
histogram(~Total, data=SnowGR)
xyplot(Total ~ SeasonStart, SnowGR, type=c('p','smooth'))
}
if (require(reshape2)) {
Snow2 &lt;- melt(SnowGR, id=1:2)
names(Snow2)[3:4] &lt;- c('Time','Snow')
bwplot(Snow ~ Time, Snow2)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24277.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24277.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-snowgr.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24277.json';</script>