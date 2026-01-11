---
title: R Dataset / Package datasets / nhtemp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nhtemp</span> data set which pertains to Average Yearly Temperatures in New Haven. The <span class="mono">nhtemp</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">nhtemp</span> data set in R by issuing the following command at the console <span class="mono">data("nhtemp")</span>. This will load the data into a variable called <span class="mono">nhtemp</span>. If R says the <span class="mono">nhtemp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-89043.csv">nhtemp R data set</a></span>. The size of this file is about 604 bytes.</p><h2>Average Yearly Temperatures in New Haven</h2>
<h3>Description</h3>
<p>The mean annual temperature in degrees Fahrenheit in New Haven, Connecticut, from 1912 to 1971.</p>
<h3>Usage</h3>
<pre>nhtemp</pre>
<h3>Format</h3>
<p>A time series of 60 observations.</p>
<h3>Source</h3>
<p>Vaux, J. E. and Brinker, N. B. (1972) <em>Cycles</em>, <b>1972</b>, 117–121.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
plot(nhtemp, main = "nhtemp data",
ylab = "Mean annual temperature in New Haven, CT (deg. F)")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-89043.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-89043.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-nhtemp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-89043.json';</script>