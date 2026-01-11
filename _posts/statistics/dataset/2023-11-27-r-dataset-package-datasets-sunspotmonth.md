---
title: R Dataset / Package datasets / sunspot.month
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sunspot.month</span> data set which pertains to Monthly Sunspot Data, from 1749 to "Present". The <span class="mono">sunspot.month</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">sunspot.month</span> data set in R by issuing the following command at the console <span class="mono">data("sunspot.month")</span>. This will load the data into a variable called <span class="mono">sunspot.month</span>. If R says the <span class="mono">sunspot.month</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69094.csv">sunspot.month R data set</a></span>. The size of this file is about 58,132 bytes.</p><h2>Monthly Sunspot Data, from 1749 to "Present"</h2>
<h3>Description</h3>
<p>Monthly numbers of sunspots, as from the World Data Center, aka SIDC. This is the version of the data that will occasionally be updated when new counts become available.</p>
<h3>Usage</h3>
<pre>
sunspot.month
</pre>
<h3>Format</h3>
<p>The univariate time series <code>sunspot.year</code> and <code>sunspot.month</code> contain 289 and 2988 observations, respectively. The objects are of class <code>"ts"</code>.</p>
<h3>Author(s)</h3>
<p>R</p>
<h3>Source</h3>
<p>WDC-SILSO, Solar Influences Data Analysis Center (SIDC), Royal Observatory of Belgium, Av. Circulaire, 3, B-1180 BRUSSELS Currently at <a href="http://www.sidc.be/silso/datafiles">http://www.sidc.be/silso/datafiles</a></p>
<h3>See Also</h3>
<p><code>sunspot.month</code> is a longer version of <code>sunspots</code>; the latter runs until 1983 and is kept fixed (for reproducibility as example dataset).</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
## Compare the monthly series
plot (sunspot.month,
main="sunspot.month &amp; sunspots [package'datasets']", col=2)
lines(sunspots) # -&gt; faint differences where they overlap## Now look at the difference :
all(tsp(sunspots) [c(1,3)] ==
tsp(sunspot.month)[c(1,3)]) ## Start &amp; Periodicity are the same
n1 &lt;- length(sunspots)
table(eq &lt;- sunspots == sunspot.month[1:n1]) #&gt;132are different !
i &lt;- which(!eq)
rug(time(eq)[i])
s1 &lt;- sunspots[i] ; s2 &lt;- sunspot.month[i]
cbind(i = i, time = time(sunspots)[i], sunspots = s1, ss.month = s2,
perc.diff = round(100*2*abs(s1-s2)/(s1+s2), 1))## How to recreate the "old" sunspot.month (R &lt;= 3.0.3):
.sunspot.diff &lt;- cbind(
i = c(1202L, 1256L, 1258L, 1301L, 1407L, 1429L, 1452L, 1455L,
1663L, 2151L, 2329L, 2498L, 2594L, 2694L, 2819L),
res10 = c(1L, 1L, 1L, -1L, -1L, -1L, 1L, -1L,
1L, 1L, 1L, 1L, 1L, 20L, 1L))
ssm0 &lt;- sunspot.month[1:2988]
with(as.data.frame(.sunspot.diff), ssm0[i] &lt;&lt;- ssm0[i] - res10/10)
sunspot.month.0 &lt;- ts(ssm0, start = 1749, frequency = 12)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69094.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69094.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-sunspotmonth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69094.json';</script>