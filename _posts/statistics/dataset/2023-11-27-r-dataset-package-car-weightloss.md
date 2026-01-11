---
title: R Dataset / Package car / WeightLoss
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">WeightLoss</span> data set which pertains to Weight Loss Data. The <span class="mono">WeightLoss</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">WeightLoss</span> data set in R by issuing the following command at the console <span class="mono">data("WeightLoss")</span>. This will load the data into a variable called <span class="mono">WeightLoss</span>. If R says the <span class="mono">WeightLoss</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-67285.csv">WeightLoss R data set</a></span>. The size of this file is about 848 bytes.</p><h2>Weight Loss Data</h2>
<h3>Description</h3>
<p>Contrived data on weight loss and self esteem over three months, for three groups of individuals: Control, Diet and Diet + Exercise. The data constitute a double-multivariate design.</p>
<h3>Usage</h3>
<pre>WeightLoss</pre>
<h3>Format</h3>
<p>A data frame with 34 observations on the following 7 variables.</p>
<dl>
<dt><code>group</code></dt>
<dd>
<p>a factor with levels <code>Control</code> <code>Diet</code> <code>DietEx</code>.</p>
</dd>
<dt><code>wl1</code></dt>
<dd>
<p>Weight loss at 1 month</p>
</dd>
<dt><code>wl2</code></dt>
<dd>
<p>Weight loss at 2 months</p>
</dd>
<dt><code>wl3</code></dt>
<dd>
<p>Weight loss at 3 months</p>
</dd>
<dt><code>se1</code></dt>
<dd>
<p>Self esteem at 1 month</p>
</dd>
<dt><code>se2</code></dt>
<dd>
<p>Self esteem at 2 months</p>
</dd>
<dt><code>se3</code></dt>
<dd>
<p>Self esteem at 3 months</p>
</dd>
</dl>
<h3>Details</h3>
<p>Helmert contrasts are assigned to <code>group</code>, comparing <code>Control</code> vs. (<code>Diet</code> <code>DietEx</code>) and <code>Diet</code> vs. <code>DietEx</code>.</p>
<h3>Source</h3>
<p>Originally taken from <a href="http://www.csun.edu/~ata20315/psy524/main.htm">http://www.csun.edu/~ata20315/psy524/main.htm</a>, but modified slightly. Courtesy of Michael Friendly.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67285.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67285.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-weightloss.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67285.json';</script>