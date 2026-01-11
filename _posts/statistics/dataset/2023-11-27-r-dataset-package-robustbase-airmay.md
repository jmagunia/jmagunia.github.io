---
title: R Dataset / Package robustbase / airmay
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">airmay</span> data set which pertains to Air Quality Data. The <span class="mono">airmay</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">airmay</span> data set in R by issuing the following command at the console <span class="mono">data("airmay")</span>. This will load the data into a variable called <span class="mono">airmay</span>. If R says the <span class="mono">airmay</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72166.csv">airmay R data set</a></span>. The size of this file is about 442 bytes.</p><h2>Air Quality Data</h2>
<h3>Description</h3>
<p>Air Quality Data Set for May 1973, from Chambers et al. (1983). The whole data set consists of daily readings of air quality values from May 1, 1973 to September 30, 1973, but here are included only the values for May. This data set is an example of the special treatment of the missing values.</p>
<h3>Usage</h3>
<pre>data(airmay)</pre>
<h3>Format</h3>
<p>A data frame with 31 observations on the following 4 variables.</p>
<dl>
<dt><code>X1</code></dt>
<dd>
<p>Solar Radiation in Longleys in the frequency band 4000-7700 from 0800 to 1200 hours at Central Park</p>
</dd>
<dt><code>X2</code></dt>
<dd>
<p>Average windspeed (in miles per hour) between 7000 and 1000 hours at La Guardia Airport</p>
</dd>
<dt><code>X3</code></dt>
<dd>
<p>Maximum daily temperature (in degrees Fahrenheit) at La Guardia Airport</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Mean ozone concentration (in parts per billion) from 1300 to 1500 hours at Roosevelt Island</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.86, table 6.</p>
<h3>Examples</h3>
<pre>
data(airmay)
summary(lm.airmay &lt;- lm(Y ~ ., data=airmay))
airmay.x &lt;- data.matrix(airmay[,1:3])</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72166.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72166.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-airmay.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72166.json';</script>