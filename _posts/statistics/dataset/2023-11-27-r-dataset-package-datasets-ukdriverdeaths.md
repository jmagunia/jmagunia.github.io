---
title: R Dataset / Package datasets / UKDriverDeaths
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UKDriverDeaths</span> data set which pertains to Road Casualties in Great Britain 1969–84. The <span class="mono">UKDriverDeaths</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">UKDriverDeaths</span> data set in R by issuing the following command at the console <span class="mono">data("UKDriverDeaths")</span>. This will load the data into a variable called <span class="mono">UKDriverDeaths</span>. If R says the <span class="mono">UKDriverDeaths</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16110.csv">UKDriverDeaths R data set</a></span>. The size of this file is about 3,608 bytes.</p><h2>Road Casualties in Great Britain 1969–84</h2>
<h3>Description</h3>
<p><code>UKDriverDeaths</code> is a time series giving the monthly totals of car drivers in Great Britain killed or seriously injured Jan 1969 to Dec 1984. Compulsory wearing of seat belts was introduced on 31 Jan 1983.</p>
<p><code>Seatbelts</code> is more information on the same problem.</p>
<h3>Usage</h3>
<pre>
UKDriverDeaths
Seatbelts
</pre>
<h3>Format</h3>
<p><code>Seatbelts</code> is a multiple time series, with columns</p>
<dl>
<dt><code>DriversKilled</code></dt>
<dd>
<p>car drivers killed.</p>
</dd>
<dt><code>drivers</code></dt>
<dd>
<p>same as <code>UKDriverDeaths</code>.</p>
</dd>
<dt><code>front</code></dt>
<dd>
<p>front-seat passengers killed or seriously injured.</p>
</dd>
<dt><code>rear</code></dt>
<dd>
<p>rear-seat passengers killed or seriously injured.</p>
</dd>
<dt><code>kms</code></dt>
<dd>
<p>distance driven.</p>
</dd>
<dt><code>PetrolPrice</code></dt>
<dd>
<p>petrol price.</p>
</dd>
<dt><code>VanKilled</code></dt>
<dd>
<p>number of van (‘light goods vehicle’) drivers.</p>
</dd>
<dt><code>law</code></dt>
<dd>
<p>0/1: was the law in effect that month?</p>
</dd>
</dl>
<h3>Source</h3>
<p>Harvey, A.C. (1989) <em>Forecasting, Structural Time Series Models and the Kalman Filter.</em> Cambridge University Press, pp. 519–523.</p>
<p>Durbin, J. and Koopman, S. J. (2001) <em>Time Series Analysis by State Space Methods.</em> Oxford University Press. <a href="http://www.ssfpack.com/dkbook/">http://www.ssfpack.com/dkbook/</a></p>
<h3>References</h3>
<p>Harvey, A. C. and Durbin, J. (1986) The effects of seat belt legislation on British road casualties: A case study in structural time series modelling. <em>Journal of the Royal Statistical Society</em> series B, <b>149</b>, 187–227.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
## work with pre-seatbelt period to identify a model, use logs
work &lt;- window(log10(UKDriverDeaths), end = 1982+11/12)
par(mfrow = c(3, 1))
plot(work); acf(work); pacf(work)
par(mfrow = c(1, 1))
(fit &lt;- arima(work, c(1, 0, 0), seasonal = list(order = c(1, 0, 0))))
z &lt;- predict(fit, n.ahead = 24)
ts.plot(log10(UKDriverDeaths), z$pred, z$pred+2*z$se, z$pred-2*z$se,
lty = c(1, 3, 2, 2), col = c("black", "red", "blue", "blue"))## now see the effect of the explanatory variables
X &lt;- Seatbelts[, c("kms", "PetrolPrice", "law")]
X[, 1] &lt;- log10(X[, 1]) - 4
arima(log10(Seatbelts[, "drivers"]), c(1, 0, 0),
seasonal = list(order = c(1, 0, 0)), xreg = X)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16110.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16110.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-ukdriverdeaths.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16110.json';</script>