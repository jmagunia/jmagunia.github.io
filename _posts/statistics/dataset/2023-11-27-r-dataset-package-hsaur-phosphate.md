---
title: R Dataset / Package HSAUR / phosphate
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">phosphate</span> data set which pertains to Phosphate Level Data . The <span class="mono">phosphate</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">phosphate</span> data set in R by issuing the following command at the console <span class="mono">data("phosphate")</span>. This will load the data into a variable called <span class="mono">phosphate</span>. If R says the <span class="mono">phosphate</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75582.csv">phosphate R data set</a></span>. The size of this file is about 1,362 bytes.</p><h2>Phosphate Level Data</h2>
<h3>Description</h3>
<p>Plasma inorganic phosphate levels from 33 subjects.</p>
<h3>Usage</h3>
<pre>data("phosphate")</pre>
<h3>Format</h3>
<p>A data frame with 33 observations on the following 9 variables.</p>
<dl>
<dt><code>group</code></dt>
<dd>
<p>a factor with levels <code>control</code> and <code>obese</code>.</p>
</dd>
<dt><code>t0</code></dt>
<dd>
<p>baseline phosphate level</p>
</dd>
</dl>
<p>,</p>
<dl>
<dt><code>t0.5</code></dt>
<dd>
<p>phosphate level after 1/2 an hour.</p>
</dd>
<dt><code>t1</code></dt>
<dd>
<p>phosphate level after one an hour.</p>
</dd>
<dt><code>t1.5</code></dt>
<dd>
<p>phosphate level after 1 1/2 hours.</p>
</dd>
<dt><code>t2</code></dt>
<dd>
<p>phosphate level after two hours.</p>
</dd>
<dt><code>t3</code></dt>
<dd>
<p>phosphate level after three hours.</p>
</dd>
<dt><code>t4</code></dt>
<dd>
<p>phosphate level after four hours.</p>
</dd>
<dt><code>t5</code></dt>
<dd>
<p>phosphate level after five hours.</p>
</dd>
</dl>
<h3>Source</h3>
<p>C. S. Davis (2002), <em>Statistical Methods for the Analysis of Repeated Measurements</em>, Springer, New York.</p>
<h3>Examples</h3>
<pre>data("phosphate", package = "HSAUR")
plot(t0 ~ group, data = phosphate)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75582.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75582.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-phosphate.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75582.json';</script>