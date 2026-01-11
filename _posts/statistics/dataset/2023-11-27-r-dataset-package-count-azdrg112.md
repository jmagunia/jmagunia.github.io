---
title: R Dataset / Package COUNT / azdrg112
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">azdrg112</span> data set which pertains to azdrg112. The <span class="mono">azdrg112</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">azdrg112</span> data set in R by issuing the following command at the console <span class="mono">data("azdrg112")</span>. This will load the data into a variable called <span class="mono">azdrg112</span>. If R says the <span class="mono">azdrg112</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-23543.csv">azdrg112 R data set</a></span>. The size of this file is about 14,593 bytes.</p><h2>azdrg112</h2>
<h3>Description</h3>
<p>The data set relates to the hospital length of stay for patients having a CABG or PTCA (typel) heart procedure. The data comes from the 1995 Arizona Medicare data for DRG (Diagnostic Related Group) 112. Other predictors include gender(1=female) and age75 (1-age 75+). Type is labeled as 1=emergency or urgent admission; 0= elective. Length of stay (los) ranges from 1 to 53 days.</p>
<h3>Usage</h3>
<pre>data(azdrg112)</pre>
<h3>Format</h3>
<p>A data frame with 1,798 observations on the following 4 variables.</p>
<dl>
<dt><code>los</code></dt>
<dd>
<p>hospital length of stay: 1-53 days</p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>1=male; 0=female</p>
</dd>
<dt><code>type1</code></dt>
<dd>
<p>1=emergency/urgent admission; 0=elective admission</p>
</dd>
<dt><code>age75</code></dt>
<dd>
<p>1=age&gt;75; 0=age&lt;=75</p>
</dd>
</dl>
<h3>Details</h3>
<p>azdrg112 is saved as a data frame. Count models typically use los as response variable. 0 counts are not included</p>
<h3>Source</h3>
<p>DRG 112 data from the 1995 Arizona Medicare (MedPar) State files</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press</p>
<h3>Examples</h3>
<pre>
data(azdrg112)
glmazp &lt;- glm(los ~ type1 + gender + age75, family=poisson, data=azdrg112)
summary(glmazp)
exp(coef(glmazp))
library(MASS)
glmaznb &lt;- glm.nb(los ~ type1 + gender + age75, data=azdrg112)
summary(glmaznb)
exp(coef(glmaznb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-23543.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-23543.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-azdrg112.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-23543.json';</script>