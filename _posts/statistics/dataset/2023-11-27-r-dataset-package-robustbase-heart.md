---
title: R Dataset / Package robustbase / heart
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">heart</span> data set which pertains to Heart Catherization Data. The <span class="mono">heart</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">heart</span> data set in R by issuing the following command at the console <span class="mono">data("heart")</span>. This will load the data into a variable called <span class="mono">heart</span>. If R says the <span class="mono">heart</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65647.csv">heart R data set</a></span>. The size of this file is about 8,859 bytes.</p><h2>Heart Catherization Data</h2>
<h3>Description</h3>
<p>This data set was analyzed by Weisberg (1980) and Chambers et al. (1983). A catheter is passed into a major vein or artery at the femoral region and moved into the heart. The proper length of the introduced catheter has to be guessed by the physician. The aim of the data set is to describe the relation between the catheter length and the patient's height (X1) and weight (X2).</p>
<p>This data sets is used to demonstrate the effects caused by collinearity. The correlation between height and weight is so high that either variable almost completely determines the other.</p>
<h3>Usage</h3>
<pre>
data(heart)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on the following 3 variables.</p>
<dl>
<dt><code>height</code></dt>
<dd>
<p>Patient's height in inches</p>
</dd>
<dt><code>weight</code></dt>
<dd>
<p>Patient's weights in pounds</p>
</dd>
<dt><code>clength</code></dt>
<dd>
<p>Y: Catheter Length (in centimeters)</p>
</dd>
</dl>
<h3>Note</h3>
<p>There are other <code>heart</code> datasets in other <span style="font-family: Courier New, Courier; color: #666666;"><b>R</b></span> packages, notably <span class="pkg">survival</span>, hence considering using <code>package = "robustbase"</code>, see examples.</p>
<h3>Source</h3>
<p>Weisberg (1980)</p>
<p>Chambers et al. (1983)</p>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.103, table 13.</p>
<h3>Examples</h3>
<pre>
data(heart, package="robustbase")
heart.x &lt;- data.matrix(heart[, 1:2]) # the X-variables
plot(heart.x)
covMcd(heart.x)
summary( lm.heart &lt;- lm(clength ~ . , data = heart))
summary(lts.heart &lt;- ltsReg(clength ~ . , data = heart))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65647.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65647.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-heart.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65647.json';</script>