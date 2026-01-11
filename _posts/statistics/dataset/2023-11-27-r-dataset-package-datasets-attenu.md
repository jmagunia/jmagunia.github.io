---
title: R Dataset / Package datasets / attenu
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">attenu</span> data set which pertains to The Joyner–Boore Attenuation Data. The <span class="mono">attenu</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">attenu</span> data set in R by issuing the following command at the console <span class="mono">data("attenu")</span>. This will load the data into a variable called <span class="mono">attenu</span>. If R says the <span class="mono">attenu</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-49247.csv">attenu R data set</a></span>. The size of this file is about 4,110 bytes.</p><h2>The Joyner–Boore Attenuation Data</h2>
<h3>Description</h3>
<p>This data gives peak accelerations measured at various observation stations for 23 earthquakes in California. The data have been used by various workers to estimate the attenuating affect of distance on ground acceleration.</p>
<h3>Usage</h3>
<pre>attenu</pre>
<h3>Format</h3>
<p>A data frame with 182 observations on 5 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">event</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Event Number</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">mag</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Moment Magnitude</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">station</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">Station Number</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;">dist</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Station-hypocenter distance (km)</td>
</tr>
<tr>
<td style="text-align: right;">[,5]</td>
<td style="text-align: left;">accel</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Peak acceleration (g)</td>
</tr>
</table>
<h3>Source</h3>
<p>Joyner, W.B., D.M. Boore and R.D. Porcella (1981). Peak horizontal acceleration and velocity from strong-motion records including records from the 1979 Imperial Valley, California earthquake. USGS Open File report 81-365. Menlo Park, Ca.</p>
<h3>References</h3>
<p>Boore, D. M. and Joyner, W.B.(1982) The empirical prediction of ground motion, <em>Bull. Seism. Soc. Am.</em>, <b>72</b>, S269–S268.</p>
<p>Bolt, B. A. and Abrahamson, N. A. (1982) New attenuation relations for peak and expected accelerations of strong ground motion, <em>Bull. Seism. Soc. Am.</em>, <b>72</b>, 2307–2321.</p>
<p>Bolt B. A. and Abrahamson, N. A. (1983) Reply to W. B. Joyner &amp; D. M. Boore's “Comments on: New attenuation relations for peak and expected accelerations for peak and expected accelerations of strong ground motion”, <em>Bull. Seism. Soc. Am.</em>, <b>73</b>, 1481–1483.</p>
<p>Brillinger, D. R. and Preisler, H. K. (1984) An exploratory analysis of the Joyner-Boore attenuation data, <em>Bull. Seism. Soc. Am.</em>, <b>74</b>, 1441–1449.</p>
<p>Brillinger, D. R. and Preisler, H. K. (1984) <em>Further analysis of the Joyner-Boore attenuation data</em>. Manuscript.</p>
<h3>Examples</h3>
<pre>
require(graphics)
## check the data class of the variables
sapply(attenu, data.class)
summary(attenu)
pairs(attenu, main = "attenu data")
coplot(accel ~ dist | as.factor(event), data = attenu, show.given = FALSE)
coplot(log(accel) ~ log(dist) | as.factor(event),
 data = attenu, panel = panel.smooth, show.given = FALSE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-49247.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-49247.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-attenu.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-49247.json';</script>