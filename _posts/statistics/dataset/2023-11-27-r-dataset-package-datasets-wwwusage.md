---
title: R Dataset / Package datasets / WWWusage
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">WWWusage</span> data set which pertains to Internet Usage per Minute. The <span class="mono">WWWusage</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">WWWusage</span> data set in R by issuing the following command at the console <span class="mono">data("WWWusage")</span>. This will load the data into a variable called <span class="mono">WWWusage</span>. If R says the <span class="mono">WWWusage</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-41371.csv">WWWusage R data set</a></span>. The size of this file is about 683 bytes.</p><h2>Internet Usage per Minute</h2>
<h3>Description</h3>
<p>A time series of the numbers of users connected to the Internet through a server every minute.</p>
<h3>Usage</h3>
<pre>WWWusage</pre>
<h3>Format</h3>
<p>A time series of length 100.</p>
<h3>Source</h3>
<p>Durbin, J. and Koopman, S. J. (2001) <em>Time Series Analysis by State Space Methods.</em> Oxford University Press. <a href="http://www.ssfpack.com/dkbook/">http://www.ssfpack.com/dkbook/</a></p>
<h3>References</h3>
<p>Makridakis, S., Wheelwright, S. C. and Hyndman, R. J. (1998) <em>Forecasting: Methods and Applications.</em> Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
work &lt;- diff(WWWusage)
par(mfrow = c(2, 1)); plot(WWWusage); plot(work)
## Not run: 
require(stats)
aics &lt;- matrix(, 6, 6, dimnames = list(p = 0:5, q = 0:5))
for(q in 1:5) aics[1, 1+q] &lt;- arima(WWWusage, c(0, 1, q),
optim.control = list(maxit = 500))$aic
for(p in 1:5)
 for(q in 0:5) aics[1+p, 1+q] &lt;- arima(WWWusage, c(p, 1, q),
 optim.control = list(maxit = 500))$aic
round(aics - min(aics, na.rm = TRUE), 2)## End(Not run)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-41371.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-41371.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-wwwusage.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-41371.json';</script>