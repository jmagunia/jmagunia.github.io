---
title: R Dataset / Package datasets / Nile
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Nile</span> data set which pertains to Flow of the River Nile. The <span class="mono">Nile</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">Nile</span> data set in R by issuing the following command at the console <span class="mono">data("Nile")</span>. This will load the data into a variable called <span class="mono">Nile</span>. If R says the <span class="mono">Nile</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85141.csv">Nile R data set</a></span>. The size of this file is about 944 bytes.</p><h2>Flow of the River Nile</h2>
<h3>Description</h3>
<p>Measurements of the annual flow of the river Nile at Aswan (formerly <code>Assuan</code>), 1871–1970, in <i>10^8 m^3</i>, “with apparent changepoint near 1898” (Cobb(1978), Table 1, p.249).</p>
<h3>Usage</h3>
<pre>Nile</pre>
<h3>Format</h3>
<p>A time series of length 100.</p>
<h3>Source</h3>
<p>Durbin, J. and Koopman, S. J. (2001) <em>Time Series Analysis by State Space Methods.</em> Oxford University Press. <a href="http://www.ssfpack.com/DKbook.html">http://www.ssfpack.com/DKbook.html</a></p>
<h3>References</h3>
<p>Balke, N. S. (1993) Detecting level shifts in time series. <em>Journal of Business and Economic Statistics</em> <b>11</b>, 81–92.</p>
<p>Cobb, G. W. (1978) The problem of the Nile: conditional solution to a change-point problem. <em>Biometrika</em> <b>65</b>, 243–51.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
par(mfrow = c(2, 2))
plot(Nile)
acf(Nile)
pacf(Nile)
ar(Nile) # selects order 2
cpgram(ar(Nile)$resid)
par(mfrow = c(1, 1))
arima(Nile, c(2, 0, 0))## Now consider missing values, following Durbin &amp; Koopman
NileNA &lt;- Nile
NileNA[c(21:40, 61:80)] &lt;- NA
arima(NileNA, c(2, 0, 0))
plot(NileNA)
pred &lt;-
 predict(arima(window(NileNA, 1871, 1890), c(2, 0, 0)), n.ahead = 20)
lines(pred$pred, lty = 3, col = "red")
lines(pred$pred + 2*pred$se, lty = 2, col = "blue")
lines(pred$pred - 2*pred$se, lty = 2, col = "blue")
pred &lt;-
 predict(arima(window(NileNA, 1871, 1930), c(2, 0, 0)), n.ahead = 20)
lines(pred$pred, lty = 3, col = "red")
lines(pred$pred + 2*pred$se, lty = 2, col = "blue")
lines(pred$pred - 2*pred$se, lty = 2, col = "blue")## Structural time series models
par(mfrow = c(3, 1))
plot(Nile)
## local level model
(fit &lt;- StructTS(Nile, type = "level"))
lines(fitted(fit), lty = 2)# contemporaneous smoothing
lines(tsSmooth(fit), lty = 2, col = 4) # fixed-interval smoothing
plot(residuals(fit)); abline(h = 0, lty = 3)
## local trend model
(fit2 &lt;- StructTS(Nile, type = "trend")) ## constant trend fitted
pred &lt;- predict(fit, n.ahead = 30)
## with 50% confidence interval
ts.plot(Nile, pred$pred,
pred$pred + 0.67*pred$se, pred$pred -0.67*pred$se)## Now consider missing values
plot(NileNA)
(fit3 &lt;- StructTS(NileNA, type = "level"))
lines(fitted(fit3), lty = 2)
lines(tsSmooth(fit3), lty = 3)
plot(residuals(fit3)); abline(h = 0, lty = 3)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85141.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85141.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-nile.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85141.json';</script>