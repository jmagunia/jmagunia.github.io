---
title: R Dataset / Package robustbase / starsCYG
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">starsCYG</span> data set which pertains to Hertzsprung-Russell Diagram Data of Star Cluster CYG OB1. The <span class="mono">starsCYG</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">starsCYG</span> data set in R by issuing the following command at the console <span class="mono">data("starsCYG")</span>. This will load the data into a variable called <span class="mono">starsCYG</span>. If R says the <span class="mono">starsCYG</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84878.csv">starsCYG R data set</a></span>. The size of this file is about 485 bytes.</p><h2>Hertzsprung-Russell Diagram Data of Star Cluster CYG OB1</h2>
<h3>Description</h3>
<p>Data for the Hertzsprung-Russell Diagram of the Star Cluster CYG OB1, which contains 47 stars in the direction of Cygnus, from C.Doom. The first variable is the logarithm of the effective temperature at the surface of the star (Te) and the second one is the logarithm of its light intencity (<i>L/L_0</i>).</p>
<p>In the Hertzsprung-Russell diagram, which is the scatterplot of these data points, where the log temperature is plotted from left to right, two groups of points are seen:the majority which tend to follow a steep band and four stars in the upper corner. In the astronomy the 43 stars are said to lie on the main sequence and the four remaining stars are called “giants” (the points 11, 20, 30, 34).</p>
<h3>Usage</h3>
<pre>data(starsCYG)</pre>
<h3>Format</h3>
<p>A data frame with 47 observations on the following 2 variables</p>
<dl>
<dt><code>log.Te</code></dt>
<dd>
<p>Logarithm of the effective temperature at the surface of the star (Te).</p>
</dd>
<dt><code>log.light</code></dt>
<dd>
<p>Logarithm of its light intencity (<i>L/L_0</i>)</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.27, table 3.</p>
<h3>Examples</h3>
<pre>
data(starsCYG)
plot(starsCYG)
cst &lt;- covMcd(starsCYG)
lm.stars &lt;- lm(log.light ~ log.Te, data = starsCYG)
summary(lm.stars)
plot(lm.stars)
lts.stars &lt;- ltsReg(log.light ~ log.Te, data = starsCYG)
plot(lts.stars)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84878.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84878.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-starscyg.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84878.json';</script>