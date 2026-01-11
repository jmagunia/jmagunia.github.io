---
title: R Dataset / Package datasets / sunspot.year
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sunspot.year</span> data set which pertains to Yearly Sunspot Data, 1700–1988. The <span class="mono">sunspot.year</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">sunspot.year</span> data set in R by issuing the following command at the console <span class="mono">data("sunspot.year")</span>. This will load the data into a variable called <span class="mono">sunspot.year</span>. If R says the <span class="mono">sunspot.year</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29113.csv">sunspot.year R data set</a></span>. The size of this file is about 2,746 bytes.</p><h2>Yearly Sunspot Data, 1700–1988</h2>
<h3>Description</h3>
<p>Yearly numbers of sunspots from 1700 to 1988 (rounded to one digit).</p>
<p>Note that monthly numbers are available as <code>sunspot.month</code>, though starting slightly later.</p>
<h3>Usage</h3>
<pre>
sunspot.year
</pre>
<h3>Format</h3>
<p>The univariate time series <code>sunspot.year</code> contains 289 observations, and is of class <code>"ts"</code>.</p>
<h3>Source</h3>
<p>H. Tong (1996) <em>Non-Linear Time Series</em>. Clarendon Press, Oxford, p. 471.</p>
<h3>See Also</h3>
<p>For <em>monthly</em> sunspot numbers, see <code>sunspot.month</code> and <code>sunspots</code>.</p>
<p>Regularly updated yearly sunspot numbers are available from WDC-SILSO, Royal Observatory of Belgium, at <a href="http://www.sidc.be/silso/datafiles">http://www.sidc.be/silso/datafiles</a></p>
<h3>Examples</h3>
<pre>
utils::str(sm &lt;- sunspots)# the monthly version we keep unchanged
utils::str(sy &lt;- sunspot.year)
## The common time interval
(t1 &lt;- c(max(start(sm), start(sy)), 1)) # Jan 1749
(t2 &lt;- c(min(end(sm)[1],end(sy)[1]), 12)) # Dec 1983
s.m &lt;- window(sm, start=t1, end=t2)
s.y &lt;- window(sy, start=t1, end=t2[1]) # {irrelevant warning}
stopifnot(length(s.y) * 12 == length(s.m),
## The yearly series *is* close to the averages of the monthly one:
all.equal(s.y, aggregate(s.m, FUN = mean), tol = 0.0020))
## NOTE: Strangely, correctly weighting the number of days per month
## (using 28.25 for February) is *not* closer than the simple mean:
ndays &lt;- c(31, 28.25, rep(c(31,30, 31,30, 31), 2))
all.equal(s.y, aggregate(s.m, FUN = mean)) # 0.0013
all.equal(s.y, aggregate(s.m, FUN = weighted.mean, w = ndays)) # 0.0017
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29113.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29113.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-sunspotyear.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29113.json';</script>