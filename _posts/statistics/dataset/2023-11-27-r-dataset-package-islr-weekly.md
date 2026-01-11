---
title: R Dataset / Package ISLR / Weekly
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Weekly</span> data set which pertains to Weekly S&amp;P Stock Market Data. The <span class="mono">Weekly</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Weekly</span> data set in R by issuing the following command at the console <span class="mono">data("Weekly")</span>. This will load the data into a variable called <span class="mono">Weekly</span>. If R says the <span class="mono">Weekly</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-95529.csv">Weekly R data set</a></span>. The size of this file is about 62,683 bytes.</p><h2>Weekly S&amp;P Stock Market Data</h2>
<h3>Description</h3>
<p>Weekly percentage returns for the S&amp;P 500 stock index between 1990 and 2010.</p>
<h3>Usage</h3>
<pre>Weekly</pre>
<h3>Format</h3>
<p>A data frame with 1089 observations on the following 9 variables.</p>
<dl>
<dt><code>Year</code></dt>
<dd>
<p>The year that the observation was recorded</p>
</dd>
<dt><code>Lag1</code></dt>
<dd>
<p>Percentage return for previous week</p>
</dd>
<dt><code>Lag2</code></dt>
<dd>
<p>Percentage return for 2 weeks previous</p>
</dd>
<dt><code>Lag3</code></dt>
<dd>
<p>Percentage return for 3 weeks previous</p>
</dd>
<dt><code>Lag4</code></dt>
<dd>
<p>Percentage return for 4 weeks previous</p>
</dd>
<dt><code>Lag5</code></dt>
<dd>
<p>Percentage return for 5 weeks previous</p>
</dd>
<dt><code>Volume</code></dt>
<dd>
<p>Volume of shares traded (average number of daily shares traded in billions)</p>
</dd>
<dt><code>Today</code></dt>
<dd>
<p>Percentage return for this week</p>
</dd>
<dt><code>Direction</code></dt>
<dd>
<p>A factor with levels <code>Down</code> and <code>Up</code> indicating whether the market had a positive or negative return on a given week</p>
</dd>
</dl>
<h3>Source</h3>
<p>Raw values of the S&amp;P 500 were obtained from Yahoo Finance and then converted to percentages and lagged.</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Weekly)
lm(Today~Lag1+Lag2,data=Weekly)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-95529.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-95529.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-weekly.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-95529.json';</script>
