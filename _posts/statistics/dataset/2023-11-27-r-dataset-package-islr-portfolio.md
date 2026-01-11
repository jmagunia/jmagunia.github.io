---
title: R Dataset / Package ISLR / Portfolio
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Portfolio</span> data set which pertains to Portfolio Data. The <span class="mono">Portfolio</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Portfolio</span> data set in R by issuing the following command at the console <span class="mono">data("Portfolio")</span>. This will load the data into a variable called <span class="mono">Portfolio</span>. If R says the <span class="mono">Portfolio</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-36515.csv">Portfolio R data set</a></span>. The size of this file is about 3,638 bytes.</p><h2>Portfolio Data</h2>
<h3>Description</h3>
<p>A simple simulated data set containing 100 returns for each of two assets, X and Y. The data is used to estimate the optimal fraction to invest in each asset to minimize investment risk of the combined portfolio. One can then use the Bootstrap to estimate the standard error of this estimate.</p>
<h3>Usage</h3>
<pre>Portfolio</pre>
<h3>Format</h3>
<p>A data frame with 100 observations on the following 2 variables.</p>
<dl>
<dt><code>X</code></dt>
<dd>
<p>Returns for Asset X</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Returns for Asset Y</p>
</dd>
</dl>
<h3>Source</h3>
<p>Simulated data</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Portfolio)
attach(Portfolio)
plot(X,Y)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-36515.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-36515.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-portfolio.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-36515.json';</script>
