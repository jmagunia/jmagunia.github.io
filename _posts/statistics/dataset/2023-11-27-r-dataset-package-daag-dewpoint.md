---
title: R Dataset / Package DAAG / dewpoint
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">dewpoint</span> data set which pertains to Dewpoint Data. The <span class="mono">dewpoint</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">dewpoint</span> data set in R by issuing the following command at the console <span class="mono">data("dewpoint")</span>. This will load the data into a variable called <span class="mono">dewpoint</span>. If R says the <span class="mono">dewpoint</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-91216.csv">dewpoint R data set</a></span>. The size of this file is about 647 bytes.</p><h2>Dewpoint Data</h2>
<h3>Description</h3>
<p>The <code>dewpoint</code> data frame has 72 rows and 3 columns. Monthly data were obtained for a number of sites (in Australia) and a number of months.</p>
<h3>Usage</h3>
<pre>dewpoint</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>maxtemp</dt>
<dd>
<p>monthly minimum temperatures</p>
</dd>
<dt>mintemp</dt>
<dd>
<p>monthly maximum temperatures</p>
</dd>
<dt>dewpt</dt>
<dd>
<p>monthly average dewpoint for each combination of minimum and maximum temperature readings (formerly dewpoint)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Dr Edward Linacre, visiting fellow in the Australian National University Department of Geography.</p>
<h3>Examples</h3>
<pre>
print("Additive Model - Example 7.5")
require(splines)
attach(dewpoint) 
ds.lm &lt;- lm(dewpt ~ bs(maxtemp,5) + bs(mintemp,5), data=dewpoint)
ds.fit &lt;-predict(ds.lm, type="terms", se=TRUE)
oldpar &lt;- par(mfrow=c(1,2))
plot(maxtemp, ds.fit$fit[,1], xlab="Maximum temperature",
 ylab="Change from dewpoint mean",type="n")
lines(maxtemp,ds.fit$fit[,1])
lines(maxtemp,ds.fit$fit[,1]-2*ds.fit$se[,1],lty=2)
lines(maxtemp,ds.fit$fit[,1]+2*ds.fit$se[,1],lty=2)
plot(mintemp,ds.fit$fit[,2],xlab="Minimum temperature",
 ylab="Change from dewpoint mean",type="n")
ord&lt;-order(mintemp)
lines(mintemp[ord],ds.fit$fit[ord,2])
lines(mintemp[ord],ds.fit$fit[ord,2]-2*ds.fit$se[ord,2],lty=2)
lines(mintemp[ord],ds.fit$fit[ord,2]+2*ds.fit$se[ord,2],lty=2)
detach(dewpoint)
par(oldpar)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-91216.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-91216.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-dewpoint.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-91216.json';</script>