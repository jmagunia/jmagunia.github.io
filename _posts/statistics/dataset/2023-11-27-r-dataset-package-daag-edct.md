---
title: R Dataset / Package DAAG / edcT
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">edcT</span> data set which pertains to EPICA Dome C Ice Core 800KYr Temperature Estimates. The <span class="mono">edcT</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">edcT</span> data set in R by issuing the following command at the console <span class="mono">data("edcT")</span>. This will load the data into a variable called <span class="mono">edcT</span>. If R says the <span class="mono">edcT</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15619.csv">edcT R data set</a></span>. The size of this file is about 197,585 bytes.</p><h2>EPICA Dome C Ice Core 800KYr Temperature Estimates</h2>
<h3>Description</h3>
<p>Temperature record, using Deuterium as a proxy, from the EPICA (European Project for Ice Coring in Antarctica) Dome C ice core covering 0 to 800 kyr BP.</p>
<h3>Usage</h3>
<pre>data(edcT)</pre>
<h3>Format</h3>
<p>A data frame with 5788 observations on the following 5 variables.</p>
<dl>
<dt><code>Bag</code></dt>
<dd>
<p>Bag number</p>
</dd>
<dt><code>ztop</code></dt>
<dd>
<p>Top depth (m)</p>
</dd>
<dt><code>Age</code></dt>
<dd>
<p>Years before 1950</p>
</dd>
<dt><code>Deuterium</code></dt>
<dd>
<p>Deuterium dD data</p>
</dd>
<dt><code>dT</code></dt>
<dd>
<p>Temperature difference from the average of the last 1000 years ~ -54.5degC</p>
</dd>
</dl>
<h3>Details</h3>
<p>Temperature was estimated from the deuterium data, after making various corrections.</p>
<h3>Source</h3>
<p><a href="http://www.ncdc.noaa.gov/paleo/icecore/antarctica/domec/domec_epica_data.html">http://www.ncdc.noaa.gov/paleo/icecore/antarctica/domec/domec_epica_data.html</a></p>
<h3>References</h3>
<p>Jouzel, J., et al. 2007. EPICA Dome C Ice Core 800KYr Deuterium Data and Temperature Estimates. IGBP PAGES/World Data Center for Paleoclimatology Data Contribution Series \# 2007-091. NOAA/NCDC Paleoclimatology Program, Boulder CO, USA.</p>
<p>Jouzel, J., et al. 2007. Orbital and Millennial Antarctic Climate Variability over the Past 800,000 Years. Science, Vol. 317, No. 5839, pp.793-797, 10 August 2007.</p>
<h3>Examples</h3>
<pre> data(edcT) </pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15619.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15619.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-edct.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15619.json';</script>