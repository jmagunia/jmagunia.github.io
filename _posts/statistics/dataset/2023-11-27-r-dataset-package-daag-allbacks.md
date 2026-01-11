---
title: R Dataset / Package DAAG / allbacks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">allbacks</span> data set which pertains to Measurements on a Selection of Books. The <span class="mono">allbacks</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">allbacks</span> data set in R by issuing the following command at the console <span class="mono">data("allbacks")</span>. This will load the data into a variable called <span class="mono">allbacks</span>. If R says the <span class="mono">allbacks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-92676.csv">allbacks R data set</a></span>. The size of this file is about 280 bytes.</p><h2>Measurements on a Selection of Books</h2>
<h3>Description</h3>
<p>The <code>allbacks</code> data frame gives measurements on the volume and weight of 15 books, some of which are softback (pb) and some of which are hardback (hb). Area of the hardback covers is also included.</p>
<h3>Usage</h3>
<pre>allbacks</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>volume</dt>
<dd>
<p>book volumes in cubic centimeters</p>
</dd>
<dt>area</dt>
<dd>
<p>hard board cover areas in square centimeters</p>
</dd>
<dt>weight</dt>
<dd>
<p>book weights in grams</p>
</dd>
<dt>cover</dt>
<dd>
<p>a factor with levels <code>hb</code> hardback, <code>pb</code> paperback</p>
</dd>
</dl>
<h3>Source</h3>
<p>The bookshelf of J. H. Maindonald.</p>
<h3>Examples</h3>
<pre>
print("Multiple Regression - Example 6.1")
attach(allbacks)
volume.split &lt;- split(volume, cover)
weight.split &lt;- split(weight, cover)
plot(weight.split$hb ~ volume.split$hb, pch=16, xlim=range(volume), ylim=range(weight),
 ylab="Weight (g)", xlab="Volume (cc)")
points(weight.split$pb ~ volume.split$pb, pch=16, col=2)
pause()allbacks.lm &lt;- lm(weight ~ volume+area)
summary(allbacks.lm)
detach(allbacks)
pause()anova(allbacks.lm)
pause()model.matrix(allbacks.lm)
pause()print("Example 6.1.1")
allbacks.lm0 &lt;- lm(weight ~ -1+volume+area, data=allbacks)
summary(allbacks.lm0)
pause()print("Example 6.1.2")
oldpar &lt;- par(mfrow=c(2,2))
plot(allbacks.lm0)
par(oldpar)
allbacks.lm13 &lt;- lm(weight ~ -1+volume+area, data=allbacks[-13,])
summary(allbacks.lm13)
pause()print("Example 6.1.3")
round(coef(allbacks.lm0),2)# Baseline for changes
round(lm.influence(allbacks.lm0)$coef,2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-92676.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-92676.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-allbacks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-92676.json';</script>