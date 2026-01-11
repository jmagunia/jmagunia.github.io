---
title: R Dataset / Package MASS / beav1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">beav1</span> data set which pertains to Body Temperature Series of Beaver 1. The <span class="mono">beav1</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">beav1</span> data set in R by issuing the following command at the console <span class="mono">data("beav1")</span>. This will load the data into a variable called <span class="mono">beav1</span>. If R says the <span class="mono">beav1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15351.csv">beav1 R data set</a></span>. The size of this file is about 1,909 bytes.</p><h2>Body Temperature Series of Beaver 1</h2>
<h3>Description</h3>
<p>Reynolds (1994) describes a small part of a study of the long-term temperature dynamics of beaver <em>Castor canadensis</em> in north-central Wisconsin. Body temperature was measured by telemetry every 10 minutes for four females, but data from a one period of less than a day for each of two animals is used there.</p>
<h3>Usage</h3>
<pre>
beav1
</pre>
<h3>Format</h3>
<p>The <code>beav1</code> data frame has 114 rows and 4 columns. This data frame contains the following columns:</p>
<dl>
<dt><code>day</code></dt>
<dd>
<p>Day of observation (in days since the beginning of 1990), December 12–13.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>Time of observation, in the form <code>0330</code> for 3.30am.</p>
</dd>
<dt><code>temp</code></dt>
<dd>
<p>Measured body temperature in degrees Celsius.</p>
</dd>
<dt><code>activ</code></dt>
<dd>
<p>Indicator of activity outside the retreat.</p>
</dd>
</dl>
<h3>Note</h3>
<p>The observation at 22:20 is missing.</p>
<h3>Source</h3>
<p>P. S. Reynolds (1994) Time-series analyses of beaver body temperatures. Chapter 11 of Lange, N., Ryan, L., Billard, L., Brillinger, D., Conquest, L. and Greenhouse, J. eds (1994) <em>Case Studies in Biometry.</em> New York: John Wiley and Sons.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>See Also</h3>
<p><code>beav2</code></p>
<h3>Examples</h3>
<pre>
beav1 &lt;- within(beav1,
 hours &lt;- 24*(day-346) + trunc(time/100) + (time%%100)/60)
plot(beav1$hours, beav1$temp, type="l", xlab="time",
 ylab="temperature", main="Beaver 1")
usr &lt;- par("usr"); usr[3:4] &lt;- c(-0.2, 8); par(usr=usr)
lines(beav1$hours, beav1$activ, type="s", lty=2)
temp &lt;- ts(c(beav1$temp[1:82], NA, beav1$temp[83:114]),
 start = 9.5, frequency = 6)
activ &lt;- ts(c(beav1$activ[1:82], NA, beav1$activ[83:114]),
start = 9.5, frequency = 6)acf(temp[1:53])
acf(temp[1:53], type = "partial")
ar(temp[1:53])
act &lt;- c(rep(0, 10), activ)
X &lt;- cbind(1, act = act[11:125], act1 = act[10:124],
act2 = act[9:123], act3 = act[8:122])
alpha &lt;- 0.80
stemp &lt;- as.vector(temp - alpha*lag(temp, -1))
sX &lt;- X[-1, ] - alpha * X[-115,]
beav1.ls &lt;- lm(stemp ~ -1 + sX, na.action = na.omit)
summary(beav1.ls, cor = FALSE)
rm(temp, activ)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15351.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15351.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-beav1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15351.json';</script>