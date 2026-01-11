---
title: R Dataset / Package ISLR / Auto
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Auto</span> data set which pertains to Auto Data Set. The <span class="mono">Auto</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Auto</span> data set in R by issuing the following command at the console <span class="mono">data("Auto")</span>. This will load the data into a variable called <span class="mono">Auto</span>. If R says the <span class="mono">Auto</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38913.csv">Auto R data set</a></span>. The size of this file is about 18,276 bytes.</p><h2>Auto Data Set</h2>
<h3>Description</h3>
<p>Gas mileage, horsepower, and other information for 392 vehicles.</p>
<h3>Usage</h3>
<pre>Auto</pre>
<h3>Format</h3>
<p>A data frame with 392 observations on the following 9 variables.</p>
<dl>
<dt><code>mpg</code></dt>
<dd>
<p>miles per gallon</p>
</dd>
<dt><code>cylinders</code></dt>
<dd>
<p>Number of cylinders between 4 and 8</p>
</dd>
<dt><code>displacement</code></dt>
<dd>
<p>Engine displacement (cu. inches)</p>
</dd>
<dt><code>horsepower</code></dt>
<dd>
<p>Engine horsepower</p>
</dd>
<dt><code>weight</code></dt>
<dd>
<p>Vehicle weight (lbs.)</p>
</dd>
<dt><code>acceleration</code></dt>
<dd>
<p>Time to accelerate from 0 to 60 mph (sec.)</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>Model year (modulo 100)</p>
</dd>
<dt><code>origin</code></dt>
<dd>
<p>Origin of car (1. American, 2. European, 3. Japanese)</p>
</dd>
<dt><code>name</code></dt>
<dd>
<p>Vehicle name</p>
</dd>
</dl>
<p>The orginal data contained 408 observations but 16 observations with missing values were removed.</p>
<h3>Source</h3>
<p>This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University. The dataset was used in the 1983 American Statistical Association Exposition.</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
pairs(Auto)
attach(Auto)
hist(mpg)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38913.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38913.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-auto.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38913.json';</script>
