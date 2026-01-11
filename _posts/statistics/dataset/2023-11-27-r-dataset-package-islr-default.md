---
title: R Dataset / Package ISLR / Default
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Default</span> data set which pertains to Credit Card Default Data. The <span class="mono">Default</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Default</span> data set in R by issuing the following command at the console <span class="mono">data("Default")</span>. This will load the data into a variable called <span class="mono">Default</span>. If R says the <span class="mono">Default</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-63314.csv">Default R data set</a></span>. The size of this file is about 433,674 bytes.</p><h2>Credit Card Default Data</h2>
<h3>Description</h3>
<p>A simulated data set containing information on ten thousand customers. The aim here is to predict which customers will default on their credit card debt.</p>
<h3>Usage</h3>
<pre>Default</pre>
<h3>Format</h3>
<p>A data frame with 10000 observations on the following 4 variables.</p>
<dl>
<dt><code>default</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> indicating whether the customer defaulted on their debt</p>
</dd>
<dt><code>student</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> indicating whether the customer is a student</p>
</dd>
<dt><code>balance</code></dt>
<dd>
<p>The average balance that the customer has remaining on their credit card after making their monthly payment</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>Income of customer</p>
</dd>
</dl>
<h3>Source</h3>
<p>Simulated data</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Default)
glm(default~student+balance+income,family="binomial",data=Default)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-63314.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-63314.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-default.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-63314.json';</script>
