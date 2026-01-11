---
title: R Dataset / Package COUNT / titanicgrp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">titanicgrp</span> data set which pertains to titanicgrp. The <span class="mono">titanicgrp</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">titanicgrp</span> data set in R by issuing the following command at the console <span class="mono">data("titanicgrp")</span>. This will load the data into a variable called <span class="mono">titanicgrp</span>. If R says the <span class="mono">titanicgrp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22866.csv">titanicgrp R data set</a></span>. The size of this file is about 184 bytes.</p><h2>titanicgrp</h2>
<h3>Description</h3>
<p>The data is an grouped version of the 1912 Titanic passenger survival log,</p>
<h3>Usage</h3>
<pre>data(titanicgrp)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on the following 5 variables.</p>
<dl>
<dt><code>survive</code></dt>
<dd>
<p>number of passengers who survived</p>
</dd>
<dt><code>cases</code></dt>
<dd>
<p>number of passengers with same pattern of covariates</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>1=adult; 0=child</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>1=Male; 0=female</p>
</dd>
<dt><code>class</code></dt>
<dd>
<p>ticket class 1= 1st class; 2= second class; 3= third class</p>
</dd>
</dl>
<h3>Details</h3>
<p>titanicgrp is saved as a data frame. Used to assess risk ratios</p>
<h3>Source</h3>
<p>Found in many other texts</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>
library(MASS)
library(msme)
data(titanicgrp)
glmlr &lt;- glm(survive ~ age + sex + factor(class) + offset(log(cases)),
 family=poisson, data=titanicgrp)
summary(glmlr)
exp(coef(glmlr))lcases &lt;- titanicgrp$cases
nb2o &lt;- nbinomial(survive ~ age + sex + factor(class), 
formula2 =~ age + sex,
offset = lcases,
mean.link="log",
scale.link="log_s",
data=titanicgrp)
summary(nb2o)
exp(coef(nb2o))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22866.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22866.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-titanicgrp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22866.json';</script>