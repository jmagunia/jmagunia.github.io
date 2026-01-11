---
title: R Dataset / Package DAAG / tomato
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">tomato</span> data set which pertains to Root weights of tomato plants exposed to 4 different treatments. The <span class="mono">tomato</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">tomato</span> data set in R by issuing the following command at the console <span class="mono">data("tomato")</span>. This will load the data into a variable called <span class="mono">tomato</span>. If R says the <span class="mono">tomato</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-53828.csv">tomato R data set</a></span>. The size of this file is about 542 bytes.</p><h2>Root weights of tomato plants exposed to 4 different treatments</h2>
<h3>Description</h3>
<p>The <code>tomato</code> data frame has 24 rows and 2 columns. They are from an experiment that exposed tomato plants to four different 'nutrients'.</p>
<h3>Usage</h3>
<pre>data(tomato)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>weight</dt>
<dd>
<p>weight, in g</p>
</dd>
<dt>trt</dt>
<dd>
<p>a factor with levels <code>water only</code>, <code>conc nutrient</code>, <code>2-4-D + conc nutrient</code>, <code>3x conc nutrient</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>Dr Ron Balham, Victoria University of Wellington NZ, sometime in 1971 - 1976.</p>
<h3>Examples</h3>
<pre>
tomato.aov &lt;- aov(log(weight) ~ trt, data=tomato)
fitted.values(tomato.aov)
summary.lm(tomato.aov)
tomato.aov &lt;- aov(formula = weight ~ trt, data = tomato)
summary.lm(tomato.aov)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-53828.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-53828.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-tomato.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-53828.json';</script>