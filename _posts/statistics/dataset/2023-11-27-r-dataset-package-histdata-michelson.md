---
title: R Dataset / Package HistData / Michelson
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Michelson</span> data set which pertains to Michelson's Determinations of the Velocity of Light. The <span class="mono">Michelson</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Michelson</span> data set in R by issuing the following command at the console <span class="mono">data("Michelson")</span>. This will load the data into a variable called <span class="mono">Michelson</span>. If R says the <span class="mono">Michelson</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72512.csv">Michelson R data set</a></span>. The size of this file is about 415 bytes.</p><h2>Michelson's Determinations of the Velocity of Light</h2>
<h3>Description</h3>
<p>The data frame <code>Michelson</code> gives Albert Michelson's measurements of the velocity of light in air, made from June 5 to July 2, 1879, reported in Michelson (1882). The given values + 299,000 are Michelson's measurements in km/sec. The number of cases is 100 and the "true" value on this scale is 734.5.</p>
<p>Stigler (1977) used these data to illustrate properties of robust estimators with real, historical data. For this purpose, he divided the 100 measurements into 5 sets of 20 each. These are contained in <code>MichelsonSets</code>.</p>
<h3>Usage</h3>
<pre>
data(Michelson)
data(MichelsonSets)
</pre>
<h3>Format</h3>
<p><code>Michelson</code>: A data frame with 100 observations on the following variable, given in time order of data collection</p>
<dl>
<dt><code>velocity</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<p><code>MichelsonSets</code>: A 20 x 5 matrix, with format int [1:20, 1:5] 850 850 1000 810 960 800 830 830 880 720 ... - attr(*, "dimnames")=List of 2 ..$ : NULL ..$ : chr [1:5] "ds12" "ds13" "ds14" "ds15" ...</p>
<h3>Details</h3>
<p>The "true" value is taken to be 734.5, arrived at by taking the "true" speed of light in a vacuum to be 299,792.5 km/sec, and adjusting for the velocity in air.</p>
<p>The data values are recorded in order, and so may also be taken as a time series.</p>
<h3>Source</h3>
<p>Kyle Siegrist, "Virtual Laboratories in Probability and Statistics", <a href="http://www.math.uah.edu/stat/data/Michelson.html">http://www.math.uah.edu/stat/data/Michelson.html</a></p>
<p>Stephen M. Stigler (1977), "Do robust estimators work with <em>real</em> data?", <em>Annals of Statistics</em>, 5, 1055-1098</p>
<h3>References</h3>
<p>Michelson, A. A. (1882). "Experimental determination of the velocity of light made at the United States Naval Academy, Anapolis". <em>Astronomical Papers</em>, 1,109-145, U. S. Nautical Almanac Office.</p>
<h3>See Also</h3>
<p><code>morley</code> for these data in another format</p>
<h3>Examples</h3>
<pre>
data(Michelson)# density plot (default bandwidth &amp; 0.6 * bw)
plot(density(Michelson$velocity), xlab="Speed of light - 299000 (km/s)",
main="Density plots of Michelson data")
lines(density(Michelson$velocity, adjust=0.6), lty=2)
rug(jitter(Michelson$velocity))
abline(v=mean(Michelson$velocity), col="blue")
abline(v=734.5, col="red", lwd=2)
text(mean(Michelson$velocity), .004, "mean", srt=90, pos=2)
text(734.5, .004, "true", srt=90, pos=2)# index / time series plot
plot(Michelson$velocity, type="b")
abline(h=734.5, col="red", lwd=2)
lines(lowess(Michelson$velocity), col="blue", lwd=2)# examine lag=1 differences
plot(diff(Michelson$velocity), type="b")
lines(lowess(diff(Michelson$velocity)), col="blue", lwd=2)# examine different data sets
boxplot(MichelsonSets, ylab="Velocity of light - 299000 (km/s)", xlab="Data set")
abline(h=734.5, col="red", lwd=2)# means and trimmed means
(mn &lt;-apply(MichelsonSets, 2, mean))
(tm &lt;- apply(MichelsonSets, 2, mean, trim=.1))
points(1:5, mn)
points(1:5+.05, tm, pch=16, col="blue")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72512.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72512.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-michelson.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72512.json';</script>