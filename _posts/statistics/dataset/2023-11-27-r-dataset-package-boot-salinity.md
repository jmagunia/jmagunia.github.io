---
title: R Dataset / Package boot / salinity
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">salinity</span> data set which pertains to Water Salinity and River Discharge. The <span class="mono">salinity</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">salinity</span> data set in R by issuing the following command at the console <span class="mono">data("salinity")</span>. This will load the data into a variable called <span class="mono">salinity</span>. If R says the <span class="mono">salinity</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11962.csv">salinity R data set</a></span>. The size of this file is about 506 bytes.</p><h2>Water Salinity and River Discharge</h2>
<h3>Description</h3>
<p>The <code>salinity</code> data frame has 28 rows and 4 columns.</p>
<p>Biweekly averages of the water salinity and river discharge in Pamlico Sound, North Carolina were recorded between the years 1972 and 1977. The data in this set consists only of those measurements in March, April and May.</p>
<h3>Usage</h3>
<pre>
salinity
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>sal</code></dt>
<dd>
<p>The average salinity of the water over two weeks.</p>
</dd>
<dt><code>lag</code></dt>
<dd>
<p>The average salinity of the water lagged two weeks. Since only spring is used, the value of <code>lag</code> is not always equal to the previous value of <code>sal</code>.</p>
</dd>
<dt><code>trend</code></dt>
<dd>
<p>A factor indicating in which of the 6 biweekly periods between March and May, the observations were taken. The levels of the factor are from 0 to 5 with 0 being the first two weeks in March.</p>
</dd>
<dt><code>dis</code></dt>
<dd>
<p>The amount of river discharge during the two weeks for which <code>sal</code> is the average salinity.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Ruppert, D. and Carroll, R.J. (1980) Trimmed least squares estimation in the linear model. <em>Journal of the American Statistical Association</em>, <b>75</b>, 828–838.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11962.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11962.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-salinity.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11962.json';</script>