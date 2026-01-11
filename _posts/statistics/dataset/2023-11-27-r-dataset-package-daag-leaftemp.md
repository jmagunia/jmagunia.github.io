---
title: R Dataset / Package DAAG / leaftemp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">leaftemp</span> data set which pertains to Leaf and Air Temperature Data. The <span class="mono">leaftemp</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">leaftemp</span> data set in R by issuing the following command at the console <span class="mono">data("leaftemp")</span>. This will load the data into a variable called <span class="mono">leaftemp</span>. If R says the <span class="mono">leaftemp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-92527.csv">leaftemp R data set</a></span>. The size of this file is about 1,399 bytes.</p><h2>Leaf and Air Temperature Data</h2>
<h3>Description</h3>
<p>These data consist of measurements of vapour pressure and of the difference between leaf and air temperature.</p>
<h3>Usage</h3>
<pre>leaftemp</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>CO2level</dt>
<dd>
<p>Carbon Dioxide level <code>low</code>, <code>medium</code>, <code>high</code></p>
</dd>
<dt>vapPress</dt>
<dd>
<p>Vapour pressure</p>
</dd>
<dt>tempDiff</dt>
<dd>
<p>Difference between leaf and air temperature</p>
</dd>
<dt>BtempDiff</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>Katharina Siebke and Susan von Cammerer, Australian National University.</p>
<h3>Examples</h3>
<pre>
print("Fitting Multiple Lines - Example 7.3")leaf.lm1 &lt;- lm(tempDiff ~ 1 , data = leaftemp)
leaf.lm2 &lt;- lm(tempDiff ~ vapPress, data = leaftemp)
leaf.lm3 &lt;- lm(tempDiff ~ CO2level + vapPress, data = leaftemp)
leaf.lm4 &lt;- lm(tempDiff ~ CO2level + vapPress + vapPress:CO2level,
data = leaftemp)anova(leaf.lm1, leaf.lm2, leaf.lm3, leaf.lm4)summary(leaf.lm2)
plot(leaf.lm2)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-92527.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-92527.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-leaftemp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-92527.json';</script>