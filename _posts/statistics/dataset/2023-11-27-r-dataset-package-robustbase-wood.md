---
title: R Dataset / Package robustbase / wood
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">wood</span> data set which pertains to Modified Data on Wood Specific Gravity. The <span class="mono">wood</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">wood</span> data set in R by issuing the following command at the console <span class="mono">data("wood")</span>. This will load the data into a variable called <span class="mono">wood</span>. If R says the <span class="mono">wood</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-48793.csv">wood R data set</a></span>. The size of this file is about 761 bytes.</p><h2>Modified Data on Wood Specific Gravity</h2>
<h3>Description</h3>
<p>The original data are from Draper and Smith (1966) and were used to determine the influence of anatomical factors on wood specific gravity, with five explanatory variables and an intercept. These data were contaminated by replacing a few observations with outliers.</p>
<h3>Usage</h3>
<pre>data(wood)</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on the following 6 variables.</p>
<dl>
<dt>x1, x2, x3, x4, x5</dt>
<dd>
<p>explanatory “anatomical” wood variables.</p>
</dd>
<dt>y</dt>
<dd>
<p>wood specific gravity, the target variable.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Draper and Smith (1966, p.227)</p>
<p>Peter J. Rousseeuw and Annick M. Leroy (1987) <em>Robust Regression and Outlier Detection</em> Wiley, p.243, table 8.</p>
<h3>Examples</h3>
<pre>
data(wood)
plot(wood)
summary( lm.wood &lt;-lm(y ~ ., data = wood))
summary(rlm.wood &lt;- MASS::rlm(y ~ ., data = wood))
summary(lts.wood &lt;-ltsReg(y ~ ., data = wood))wood.x &lt;- as.matrix(wood)[,1:5]
c_wood &lt;- covMcd(wood.x)
c_wood
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-48793.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-48793.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-wood.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-48793.json';</script>