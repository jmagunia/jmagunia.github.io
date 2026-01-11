---
title: R Dataset / Package datasets / nottem
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nottem</span> data set which pertains to Average Monthly Temperatures at Nottingham, 1920–1939. The <span class="mono">nottem</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">nottem</span> data set in R by issuing the following command at the console <span class="mono">data("nottem")</span>. This will load the data into a variable called <span class="mono">nottem</span>. If R says the <span class="mono">nottem</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-25427.csv">nottem R data set</a></span>. The size of this file is about 4,450 bytes.</p><h2>Average Monthly Temperatures at Nottingham, 1920–1939</h2>
<h3>Description</h3>
<p>A time series object containing average air temperatures at Nottingham Castle in degrees Fahrenheit for 20 years.</p>
<h3>Usage</h3>
<pre>nottem</pre>
<h3>Source</h3>
<p>Anderson, O. D. (1976) <em>Time Series Analysis and Forecasting: The Box-Jenkins approach.</em> Butterworths. Series R.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
nott &lt;- window(nottem, end = c(1936,12))
fit &lt;- arima(nott, order = c(1,0,0), list(order = c(2,1,0), period = 12))
nott.fore &lt;- predict(fit, n.ahead = 36)
ts.plot(nott, nott.fore$pred, nott.fore$pred+2*nott.fore$se,
nott.fore$pred-2*nott.fore$se, gpars = list(col = c(1,1,4,4)))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-25427.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-25427.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-nottem.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-25427.json';</script>