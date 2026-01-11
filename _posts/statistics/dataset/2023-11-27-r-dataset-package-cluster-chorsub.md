---
title: R Dataset / Package cluster / chorSub
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">chorSub</span> data set which pertains to Subset of C-horizon of Kola Data. The <span class="mono">chorSub</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">chorSub</span> data set in R by issuing the following command at the console <span class="mono">data("chorSub")</span>. This will load the data into a variable called <span class="mono">chorSub</span>. If R says the <span class="mono">chorSub</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14968.csv">chorSub R data set</a></span>. The size of this file is about 2,299 bytes.</p><h2>Subset of C-horizon of Kola Data</h2>
<h3>Description</h3>
<p>This is a small rounded subset of the C-horizon data <code>chorizon</code> from package <span class="pkg">mvoutlier</span>.</p>
<h3>Usage</h3>
<pre>data(chorSub)</pre>
<h3>Format</h3>
<p>A data frame with 61 observations on 10 variables. The variables contain scaled concentrations of chemical elements.</p>
<h3>Details</h3>
<p>This data set was produced from <code>chorizon</code> via these statements:</p>
<pre>
data(chorizon, package = "mvoutlier")
chorSub &lt;- round(100*scale(chorizon[,101:110]))[190:250,]
storage.mode(chorSub) &lt;- "integer"
colnames(chorSub) &lt;- gsub("_.*", '', colnames(chorSub))
</pre>
<h3>Source</h3>
<p>Kola Project (1993-1998)</p>
<h3>See Also</h3>
<p><code>chorizon</code> in package <span class="pkg">mvoutlier</span> and other Kola data in the same package.</p>
<h3>Examples</h3>
<pre>
data(chorSub)
summary(chorSub)
pairs(chorSub, gap= .1)# some outliers
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14968.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14968.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-chorsub.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14968.json';</script>