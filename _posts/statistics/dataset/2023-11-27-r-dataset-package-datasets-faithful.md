---
title: R Dataset / Package datasets / faithful
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">faithful</span> data set which pertains to Old Faithful Geyser Data. The <span class="mono">faithful</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">faithful</span> data set in R by issuing the following command at the console <span class="mono">data("faithful")</span>. This will load the data into a variable called <span class="mono">faithful</span>. If R says the <span class="mono">faithful</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-32741.csv">faithful R data set</a></span>. The size of this file is about 2,275 bytes.</p><h2>Old Faithful Geyser Data</h2>
<h3>Description</h3>
<p>Waiting time between eruptions and the duration of the eruption for the Old Faithful geyser in Yellowstone National Park, Wyoming, USA.</p>
<h3>Usage</h3>
<pre>faithful</pre>
<h3>Format</h3>
<p>A data frame with 272 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">eruptions</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Eruption time in mins</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">waiting</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Waiting time to next eruption (in mins)</td>
</tr>
</table>
<h3>Details</h3>
<p>A closer look at <code>faithful$eruptions</code> reveals that these are heavily rounded times originally in seconds, where multiples of 5 are more frequent than expected under non-human measurement. For a better version of the eruption times, see the example below.</p>
<p>There are many versions of this dataset around: Azzalini and Bowman (1990) use a more complete version.</p>
<h3>Source</h3>
<p>W. Härdle.</p>
<h3>References</h3>
<p>Härdle, W. (1991) <em>Smoothing Techniques with Implementation in S</em>. New York: Springer.</p>
<p>Azzalini, A. and Bowman, A. W. (1990). A look at some data on the Old Faithful geyser. <em>Applied Statistics</em> <b>39</b>, 357–365.</p>
<h3>See Also</h3>
<p><code>geyser</code> in package <a href="https://CRAN.R-project.org/package=MASS"><span class="pkg">MASS</span></a> for the Azzalini–Bowman version.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
f.tit &lt;-"faithful data: Eruptions of Old Faithful"ne60 &lt;- round(e60 &lt;- 60 * faithful$eruptions)
all.equal(e60, ne60) # relative diff. ~ 1/10000
table(zapsmall(abs(e60 - ne60))) # 0, 0.02 or 0.04
faithful$better.eruptions &lt;- ne60 / 60
te &lt;- table(ne60)
te[te &gt;= 4]# (too) many multiples of 5 !
plot(names(te), te, type = "h", main = f.tit, xlab = "Eruption time (sec)")plot(faithful[, -3], main = f.tit,
 xlab = "Eruption time (min)",
 ylab = "Waiting time to next eruption (min)")
lines(lowess(faithful$eruptions, faithful$waiting, f = 2/3, iter = 3),
col = "red")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-32741.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-32741.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-faithful.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-32741.json';</script>