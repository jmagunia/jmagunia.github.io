---
title: R Dataset / Package rpart / kyphosis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kyphosis</span> data set which pertains to Data on Children who have had Corrective Spinal Surgery. The <span class="mono">kyphosis</span> data set is found in the <span class="mono">rpart</span> R package. You can load the <span class="mono">kyphosis</span> data set in R by issuing the following command at the console <span class="mono">data("kyphosis")</span>. This will load the data into a variable called <span class="mono">kyphosis</span>. If R says the <span class="mono">kyphosis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("rpart")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65865.csv">kyphosis R data set</a></span>. The size of this file is about 1,430 bytes.</p><h2>Data on Children who have had Corrective Spinal Surgery</h2>
<h3>Description</h3>
<p>The <code>kyphosis</code> data frame has 81 rows and 4 columns. representing data on children who have had corrective spinal surgery</p>
<h3>Usage</h3>
<pre>
kyphosis
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Kyphosis</code></dt>
<dd>
<p>a factor with levels <code>absent</code> <code>present</code> indicating if a kyphosis (a type of deformation) was present after the operation.</p>
</dd>
<dt><code>Age</code></dt>
<dd>
<p>in months</p>
</dd>
<dt><code>Number</code></dt>
<dd>
<p>the number of vertebrae involved</p>
</dd>
<dt><code>Start</code></dt>
<dd>
<p>the number of the first (topmost) vertebra operated on.</p>
</dd>
</dl>
<h3>Source</h3>
<p>John M. Chambers and Trevor J. Hastie eds. (1992) <em>Statistical Models in S</em>, Wadsworth and Brooks/Cole, Pacific Grove, CA.</p>
<h3>Examples</h3>
<pre>
fit &lt;- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis)
fit2 &lt;- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis,
parms = list(prior = c(0.65, 0.35), split = "information"))
fit3 &lt;- rpart(Kyphosis ~ Age + Number + Start, data=kyphosis,
control = rpart.control(cp = 0.05))
par(mfrow = c(1,2), xpd = TRUE)
plot(fit)
text(fit, use.n = TRUE)
plot(fit2)
text(fit2, use.n = TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65865.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65865.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-rpart-kyphosis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65865.json';</script>