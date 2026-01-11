---
title: R Dataset / Package HistData / Bowley
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Bowley</span> data set which pertains to Bowley's data on values of British and Irish trade, 1855-1899. The <span class="mono">Bowley</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Bowley</span> data set in R by issuing the following command at the console <span class="mono">data("Bowley")</span>. This will load the data into a variable called <span class="mono">Bowley</span>. If R says the <span class="mono">Bowley</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34313.csv">Bowley R data set</a></span>. The size of this file is about 497 bytes.</p><h2>Bowley's data on values of British and Irish trade, 1855-1899</h2>
<h3>Description</h3>
<p>In one of the first statistical textbooks, Arthur Bowley (1901) used these data to illustrate an arithmetic and graphical analysis of time-series data using the total value of British and Irish exports from 1855-1899. He presented a line graph of the time-series data, supplemented by overlaid line graphs of 3-, 5- and 10-year moving averages. His goal was to show that while the initial series showed wide variability, moving averages made the series progressively smoother.</p>
<h3>Usage</h3>
<pre>data(Bowley)</pre>
<h3>Format</h3>
<p>A data frame with 45 observations on the following 2 variables.</p>
<dl>
<dt><code>Year</code></dt>
<dd>
<p>Year, from 1855-1899</p>
</dd>
<dt><code>Value</code></dt>
<dd>
<p>total value of British and Irish exports (millions of Pounds)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Bowley, A. L. (1901). <em>Elements of Statistics</em>. London: P. S. King and Son, p. 151-154.</p>
<p>Digitized from Bowley's graph.</p>
<h3>Examples</h3>
<pre>
data(Bowley)# plot the data 
with(Bowley,plot(Year, Value, type='b', 
ylab="Value of British and Irish Exports",
main="Bowley's example of the method of smoothing curves"))# find moving averages-- use center alignment (requires width=ODD)
require(gtools, warn.conflicts=FALSE)
mav3&lt;-running(Bowley$Value, width=3, align="center")
mav5&lt;-running(Bowley$Value, width=5, align="center")
mav9&lt;-running(Bowley$Value, width=9, align="center")
lines(Bowley$Year[2:44], mav3, col='blue', lty=2)
lines(Bowley$Year[3:43], mav5, col='green3', lty=3)
lines(Bowley$Year[5:41], mav9, col='brown', lty=4)# add lowess smooth
lines(lowess(Bowley), col='red', lwd=2)require(ggplot2, warn.conflicts=FALSE)
qplot(Year,Value, data=Bowley)+geom_smooth()
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34313.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34313.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-bowley.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34313.json';</script>