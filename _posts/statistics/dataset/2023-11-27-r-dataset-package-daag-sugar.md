---
title: R Dataset / Package DAAG / sugar
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sugar</span> data set which pertains to Sugar Data. The <span class="mono">sugar</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">sugar</span> data set in R by issuing the following command at the console <span class="mono">data("sugar")</span>. This will load the data into a variable called <span class="mono">sugar</span>. If R says the <span class="mono">sugar</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57011.csv">sugar R data set</a></span>. The size of this file is about 139 bytes.</p><h2>Sugar Data</h2>
<h3>Description</h3>
<p>The <code>sugar</code> data frame has 12 rows and 2 columns. They are from an experiment that compared an unmodified wild type plant with three different genetically modified forms. The measurements are weights of sugar that were obtained by breaking down the cellulose.</p>
<h3>Usage</h3>
<pre>sugar</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>weight</dt>
<dd>
<p>weight, in mg</p>
</dd>
<dt>trt</dt>
<dd>
<p>a factor with levels <code>Control</code> i.e. unmodified Wild form, <code>A</code> Modified 1, <code>B</code> Modified 2, <code>C</code> Modified 3</p>
</dd>
</dl>
<h3>Source</h3>
<p>Anonymous</p>
<h3>Examples</h3>
<pre>
sugar.aov &lt;- aov(weight ~ trt, data=sugar)
fitted.values(sugar.aov)
summary.lm(sugar.aov)
sugar.aov &lt;- aov(formula = weight ~ trt, data = sugar)
summary.lm(sugar.aov)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57011.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57011.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-sugar.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57011.json';</script>