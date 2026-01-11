---
title: R Dataset / Package robustbase / aircraft
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">aircraft</span> data set which pertains to Aircraft Data. The <span class="mono">aircraft</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">aircraft</span> data set in R by issuing the following command at the console <span class="mono">data("aircraft")</span>. This will load the data into a variable called <span class="mono">aircraft</span>. If R says the <span class="mono">aircraft</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30317.csv">aircraft R data set</a></span>. The size of this file is about 584 bytes.</p><h2>Aircraft Data</h2>
<h3>Description</h3>
<p>Aircraft Data, deals with 23 single-engine aircraft built over the years 1947-1979, from Office of Naval Research. The dependent variable is cost (in units of \$100,000) and the explanatory variables are aspect ratio, lift-to-drag ratio, weight of plane (in pounds) and maximal thrust.</p>
<h3>Usage</h3>
<pre>data(aircraft)</pre>
<h3>Format</h3>
<p>A data frame with 23 observations on the following 5 variables.</p>
<dl>
<dt><code>X1</code></dt>
<dd>
<p>Aspect Ratio</p>
</dd>
<dt><code>X2</code></dt>
<dd>
<p>Lift-to-Drag Ratio</p>
</dd>
<dt><code>X3</code></dt>
<dd>
<p>Weight</p>
</dd>
<dt><code>X4</code></dt>
<dd>
<p>Thrust</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Cost</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, page 154, table 22.</p>
<h3>Examples</h3>
<pre>
data(aircraft)
summary( lm.airc &lt;-lm(Y ~ ., data = aircraft))
summary(rlm.airc &lt;- MASS::rlm(Y ~ ., data = aircraft))aircraft.x &lt;- data.matrix(aircraft[,1:4])
c_air &lt;- covMcd(aircraft.x)
c_air
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30317.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30317.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-aircraft.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30317.json';</script>