---
title: R Dataset / Package robustbase / phosphor
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">phosphor</span> data set which pertains to Phosphorus Content Data. The <span class="mono">phosphor</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">phosphor</span> data set in R by issuing the following command at the console <span class="mono">data("phosphor")</span>. This will load the data into a variable called <span class="mono">phosphor</span>. If R says the <span class="mono">phosphor</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-96919.csv">phosphor R data set</a></span>. The size of this file is about 217 bytes.</p><h2>Phosphorus Content Data</h2>
<h3>Description</h3>
<p>This dataset investigates the effect from inorganic and organic Phosphorus in the soil upon the phosphorus content of the corn grown in this soil, from Prescott (1975).</p>
<h3>Usage</h3>
<pre>data(phosphor)</pre>
<h3>Format</h3>
<p>A data frame with 18 observations on the following 3 variables.</p>
<dl>
<dt><code>inorg</code></dt>
<dd>
<p>Inorganic soil Phosphorus</p>
</dd>
<dt><code>organic</code></dt>
<dd>
<p>Organic soil Phosphorus</p>
</dd>
<dt><code>plant</code></dt>
<dd>
<p>Plant Phosphorus content</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection.</em> Wiley, p.156, table 24.</p>
<h3>Examples</h3>
<pre>
data(phosphor)
plot(phosphor)
summary(lm.phosphor &lt;- lm(plant ~ ., data = phosphor))
summary(lts.phosphor &lt;- ltsReg(plant ~ ., data = phosphor))phosphor.x &lt;- data.matrix(phosphor[, 1:2])
cPh &lt;- covMcd(phosphor.x)
plot(cPh, "dd")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-96919.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-96919.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-phosphor.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-96919.json';</script>