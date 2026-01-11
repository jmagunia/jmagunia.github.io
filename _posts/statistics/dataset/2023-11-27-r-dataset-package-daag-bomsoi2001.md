---
title: R Dataset / Package DAAG / bomsoi2001
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bomsoi2001</span> data set which pertains to Southern Oscillation Index Data. The <span class="mono">bomsoi2001</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">bomsoi2001</span> data set in R by issuing the following command at the console <span class="mono">data("bomsoi2001")</span>. This will load the data into a variable called <span class="mono">bomsoi2001</span>. If R says the <span class="mono">bomsoi2001</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70231.csv">bomsoi2001 R data set</a></span>. The size of this file is about 8,046 bytes.</p><h2>Southern Oscillation Index Data</h2>
<h3>Description</h3>
<p>The Southern Oscillation Index (SOI) is the difference in barometric pressure at sea level between Tahiti and Darwin. Annual SOI and Australian rainfall data, for the years 1900-2001, are given. Australia's annual mean rainfall is an area-weighted average of the total annual precipitation at approximately 370 rainfall stations around the country.</p>
<h3>Usage</h3>
<pre>bomsoi2001</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Year</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Jan</dt>
<dd>
<p>average January SOI values for each year</p>
</dd>
<dt>Feb</dt>
<dd>
<p>average February SOI values for each year</p>
</dd>
<dt>Mar</dt>
<dd>
<p>average March SOI values for each year</p>
</dd>
<dt>Apr</dt>
<dd>
<p>average April SOI values for each year</p>
</dd>
<dt>May</dt>
<dd>
<p>average May SOI values for each year</p>
</dd>
<dt>Jun</dt>
<dd>
<p>average June SOI values for each year</p>
</dd>
<dt>Jul</dt>
<dd>
<p>average July SOI values for each year</p>
</dd>
<dt>Aug</dt>
<dd>
<p>average August SOI values for each year</p>
</dd>
<dt>Sep</dt>
<dd>
<p>average September SOI values for each year</p>
</dd>
<dt>Oct</dt>
<dd>
<p>average October SOI values for each year</p>
</dd>
<dt>Nov</dt>
<dd>
<p>average November SOI values for each year</p>
</dd>
<dt>Dec</dt>
<dd>
<p>average December SOI values for each year</p>
</dd>
<dt>SOI</dt>
<dd>
<p>a numeric vector consisting of average annual SOI values</p>
</dd>
<dt>avrain</dt>
<dd>
<p>a numeric vector consisting of a weighted average annual rainfall at a large number of Australian sites</p>
</dd>
</dl>
<h3>Source</h3>
<p>Australian Bureau of Meteorology web pages:</p>
<p><a href="http://www.bom.gov.au/climate/change/rain02.txt">http://www.bom.gov.au/climate/change/rain02.txt</a> and <a href="http://www.bom.gov.au/climate/current/soihtm1.shtml">http://www.bom.gov.au/climate/current/soihtm1.shtml</a></p>
<h3>References</h3>
<p>Nicholls, N., Lavery, B., Frederiksen, C.\ and Drosdowsky, W. 1996. Recent apparent changes in relationships between the El Nino – southern oscillation and Australian rainfall and temperature. Geophysical Research Letters 23: 3357-3360.</p>
<h3>See Also</h3>
<p><code>bomsoi</code></p>
<h3>Examples</h3>
<pre> 
bomsoi &lt;- bomsoi2001
plot(ts(bomsoi[, 15:14], start=1900),
 panel=function(y,...)panel.smooth(1900:2001, y,...))
pause()# Check for skewness by comparing the normal probability plots for 
# different a, e.g.
par(mfrow = c(2,3))
for (a in c(50, 100, 150, 200, 250, 300))
qqnorm(log(bomsoi[, "avrain"] - a))
# a = 250 leads to a nearly linear plotpause()par(mfrow = c(1,1))
plot(bomsoi$SOI, log(bomsoi$avrain - 250), xlab = "SOI",
 ylab = "log(avrain = 250)")
lines(lowess(bomsoi$SOI)$y, lowess(log(bomsoi$avrain - 250))$y, lwd=2)
# NB: separate lowess fits against time
lines(lowess(bomsoi$SOI, log(bomsoi$avrain - 250)))
pause()xbomsoi &lt;-
with(bomsoi, data.frame(SOI=SOI, cuberootRain=avrain^0.33))
xbomsoi$trendSOI &lt;- lowess(xbomsoi$SOI)$y
xbomsoi$trendRain &lt;- lowess(xbomsoi$cuberootRain)$y
rainpos &lt;- pretty(bomsoi$avrain, 5)
with(xbomsoi,
 {plot(cuberootRain ~ SOI, xlab = "SOI",
 ylab = "Rainfall (cube root scale)", yaxt="n")
 axis(2, at = rainpos^0.33, labels=paste(rainpos))
## Relative changes in the two trend curves
 lines(lowess(cuberootRain ~ SOI))
 lines(lowess(trendRain ~ trendSOI), lwd=2)
})
pause()xbomsoi$detrendRain &lt;-
with(xbomsoi, cuberootRain - trendRain + mean(trendRain))
xbomsoi$detrendSOI &lt;-
with(xbomsoi, SOI - trendSOI + mean(trendSOI))
oldpar &lt;- par(mfrow=c(1,2), pty="s")
plot(cuberootRain ~ SOI, data = xbomsoi,
 ylab = "Rainfall (cube root scale)", yaxt="n")
axis(2, at = rainpos^0.33, labels=paste(rainpos))
with(xbomsoi, lines(lowess(cuberootRain ~ SOI)))
plot(detrendRain ~ detrendSOI, data = xbomsoi,
xlab="Detrended SOI", ylab = "Detrended rainfall", yaxt="n")
axis(2, at = rainpos^0.33, labels=paste(rainpos))
with(xbomsoi, lines(lowess(detrendRain ~ detrendSOI)))
pause()par(oldpar)
attach(xbomsoi)
xbomsoi.ma0 &lt;- arima(detrendRain, xreg=detrendSOI, order=c(0,0,0))
# ordinary regression modelxbomsoi.ma12 &lt;- arima(detrendRain, xreg=detrendSOI,
order=c(0,0,12))
# regression with MA(12) errors -- all 12 MA parameters are estimated
xbomsoi.ma12
pause()xbomsoi.ma12s &lt;- arima(detrendRain, xreg=detrendSOI,
seasonal=list(order=c(0,0,1), period=12))
# regression with seasonal MA(1) (lag 12) errors -- only 1 MA parameter
# is estimated
xbomsoi.ma12s
pause()xbomsoi.maSel &lt;- arima(x = detrendRain, order = c(0, 0, 12),
xreg = detrendSOI, fixed = c(0, 0, 0,
NA, rep(0, 4), NA, 0, NA, NA, NA, NA),
transform.pars=FALSE)
# error term is MA(12) with fixed 0's at lags 1, 2, 3, 5, 6, 7, 8, 10
# NA's are used to designate coefficients that still need to be estimated
# transform.pars is set to FALSE, so that MA coefficients are not
# transformed (see help(arima))detach(xbomsoi)
pause()Box.test(resid(lm(detrendRain ~ detrendSOI, data = xbomsoi)),
type="Ljung-Box", lag=20)pause()attach(xbomsoi)
 xbomsoi2.maSel &lt;- arima(x = detrendRain, order = c(0, 0, 12),
 xreg = poly(detrendSOI,2), fixed = c(0,
 0, 0, NA, rep(0, 4), NA, 0, rep(NA,5)),
 transform.pars=FALSE)
 xbomsoi2.maSel
qqnorm(resid(xbomsoi.maSel, type="normalized"))
detach(xbomsoi)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70231.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70231.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-bomsoi2001.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70231.json';</script>