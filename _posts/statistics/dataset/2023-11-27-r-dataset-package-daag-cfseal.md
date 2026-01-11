---
title: R Dataset / Package DAAG / cfseal
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cfseal</span> data set which pertains to Cape Fur Seal Data. The <span class="mono">cfseal</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cfseal</span> data set in R by issuing the following command at the console <span class="mono">data("cfseal")</span>. This will load the data into a variable called <span class="mono">cfseal</span>. If R says the <span class="mono">cfseal</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83809.csv">cfseal R data set</a></span>. The size of this file is about 1,566 bytes.</p><h2>Cape Fur Seal Data</h2>
<h3>Description</h3>
<p>The <code>cfseal</code> data frame has 30 rows and 11 columns consisting of weight measurements for various organs taken from 30 Cape Fur Seals that died as an unintended consequence of commercial fishing.</p>
<h3>Usage</h3>
<pre>cfseal</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>age</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>weight</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>heart</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>lung</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>liver</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>spleen</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>stomach</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>leftkid</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>rightkid</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>kidney</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>intestines</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>Stewardson, C.L., Hemsley, S., Meyer, M.A., Canfield, P.J. and Maindonald, J.H. 1999. Gross and microscopic visceral anatomy of the male Cape fur seal, Arctocephalus pusillus pusillus (Pinnepedia: Otariidae), with reference to organ size and growth. Journal of Anatomy (Cambridge) 195: 235-255. (WWF project ZA-348)</p>
<h3>Examples</h3>
<pre>
print("Allometric Growth - Example 5.7")cfseal.lm &lt;- lm(log(heart) ~ log(weight), data=cfseal); summary(cfseal.lm)
plot(log(heart) ~ log(weight), data = cfseal, pch=16, xlab = "Heart Weight (g, log scale)", 
ylab = "Body weight (kg, log scale)", axes=FALSE)
heartaxis &lt;- 100*(2^seq(0,3))
bodyaxis &lt;- c(20,40,60,100,180)
axis(1, at = log(bodyaxis), lab = bodyaxis)
axis(2, at = log(heartaxis), lab = heartaxis)
box()
abline(cfseal.lm)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83809.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83809.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cfseal.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83809.json';</script>