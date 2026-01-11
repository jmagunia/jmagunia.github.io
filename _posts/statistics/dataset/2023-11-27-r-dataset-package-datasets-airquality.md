---
title: R Dataset / Package datasets / airquality
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">airquality</span> data set which pertains to New York Air Quality Measurements. The <span class="mono">airquality</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">airquality</span> data set in R by issuing the following command at the console <span class="mono">data("airquality")</span>. This will load the data into a variable called <span class="mono">airquality</span>. If R says the <span class="mono">airquality</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66056.csv">airquality R data set</a></span>. The size of this file is about 2,902 bytes.</p><h2>New York Air Quality Measurements</h2>
<h3>Description</h3>
<p>Daily air quality measurements in New York, May to September 1973.</p>
<h3>Usage</h3>
<pre>airquality</pre>
<h3>Format</h3>
<p>A data frame with 154 observations on 6 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>[,1]</code></td>
<td style="text-align: left;"><code>Ozone</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Ozone (ppb)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,2]</code></td>
<td style="text-align: left;"><code>Solar.R</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Solar R (lang)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,3]</code></td>
<td style="text-align: left;"><code>Wind</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Wind (mph)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,4]</code></td>
<td style="text-align: left;"><code>Temp</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Temperature (degrees F)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,5]</code></td>
<td style="text-align: left;"><code>Month</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Month (1--12)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,6]</code></td>
<td style="text-align: left;"><code>Day</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Day of month (1--31)</td>
</tr>
</table>
<h3>Details</h3>
<p>Daily readings of the following air quality values for May 1, 1973 (a Tuesday) to September 30, 1973.</p>
<ul>
<li>
<p><code>Ozone</code>: Mean ozone in parts per billion from 1300 to 1500 hours at Roosevelt Island</p>
</li>
<li>
<p><code>Solar.R</code>: Solar radiation in Langleys in the frequency band 4000–7700 Angstroms from 0800 to 1200 hours at Central Park</p>
</li>
<li>
<p><code>Wind</code>: Average wind speed in miles per hour at 0700 and 1000 hours at LaGuardia Airport</p>
</li>
<li>
<p><code>Temp</code>: Maximum daily temperature in degrees Fahrenheit at La Guardia Airport.</p>
</li>
</ul>
<h3>Source</h3>
<p>The data were obtained from the New York State Department of Conservation (ozone data) and the National Weather Service (meteorological data).</p>
<h3>References</h3>
<p>Chambers, J. M., Cleveland, W. S., Kleiner, B. and Tukey, P. A. (1983) <em>Graphical Methods for Data Analysis</em>. Belmont, CA: Wadsworth.</p>
<h3>Examples</h3>
<pre>
require(graphics)
pairs(airquality, panel = panel.smooth, main = "airquality data")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66056.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66056.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-airquality.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66056.json';</script>