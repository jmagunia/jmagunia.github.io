---
title: R Dataset / Package ISLR / Carseats
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Carseats</span> data set which pertains to Sales of Child Car Seats. The <span class="mono">Carseats</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Carseats</span> data set in R by issuing the following command at the console <span class="mono">data("Carseats")</span>. This will load the data into a variable called <span class="mono">Carseats</span>. If R says the <span class="mono">Carseats</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11424.csv">Carseats R data set</a></span>. The size of this file is about 19,044 bytes.</p><h2>Sales of Child Car Seats</h2>
<h3>Description</h3>
<p>A simulated data set containing sales of child car seats at 400 different stores.</p>
<h3>Usage</h3>
<pre>Carseats</pre>
<h3>Format</h3>
<p>A data frame with 400 observations on the following 11 variables.</p>
<dl>
<dt><code>Sales</code></dt>
<dd>
<p>Unit sales (in thousands) at each location</p>
</dd>
<dt><code>CompPrice</code></dt>
<dd>
<p>Price charged by competitor at each location</p>
</dd>
<dt><code>Income</code></dt>
<dd>
<p>Community income level (in thousands of dollars)</p>
</dd>
<dt><code>Advertising</code></dt>
<dd>
<p>Local advertising budget for company at each location (in thousands of dollars)</p>
</dd>
<dt><code>Population</code></dt>
<dd>
<p>Population size in region (in thousands)</p>
</dd>
<dt><code>Price</code></dt>
<dd>
<p>Price company charges for car seats at each site</p>
</dd>
<dt><code>ShelveLoc</code></dt>
<dd>
<p>A factor with levels <code>Bad</code>, <code>Good</code> and <code>Medium</code> indicating the quality of the shelving location for the car seats at each site</p>
</dd>
<dt><code>Age</code></dt>
<dd>
<p>Average age of the local population</p>
</dd>
<dt><code>Education</code></dt>
<dd>
<p>Education level at each location</p>
</dd>
<dt><code>Urban</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> to indicate whether the store is in an urban or rural location</p>
</dd>
<dt><code>US</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> to indicate whether the store is in the US or not</p>
</dd>
</dl>
<h3>Source</h3>
<p>Simulated data</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Carseats)
lm.fit=lm(Sales~Advertising+Price,data=Carseats)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11424.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11424.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-carseats.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11424.json';</script>
