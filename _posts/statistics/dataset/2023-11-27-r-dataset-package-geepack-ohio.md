---
title: R Dataset / Package geepack / ohio
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ohio</span> data set which pertains to Ohio Children Wheeze Status. The <span class="mono">ohio</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">ohio</span> data set in R by issuing the following command at the console <span class="mono">data("ohio")</span>. This will load the data into a variable called <span class="mono">ohio</span>. If R says the <span class="mono">ohio</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-61972.csv">ohio R data set</a></span>. The size of this file is about 22,140 bytes.</p><h2>Ohio Children Wheeze Status</h2>
<h3>Description</h3>
<p>The <code>ohio</code> data frame has 2148 rows and 4 columns. The dataset is a subset of the six-city study, a longitudinal study of the health effects of air pollution.</p>
<h3>Usage</h3>
<pre>data(ohio)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>resp</dt>
<dd>
<p>an indicator of wheeze status (1=yes, 0=no)</p>
</dd>
<dt>id</dt>
<dd>
<p>a numeric vector for subject id</p>
</dd>
<dt>age</dt>
<dd>
<p>a numeric vector of age, 0 is 9 years old</p>
</dd>
<dt>smoke</dt>
<dd>
<p>an indicator of maternal smoking at the first year of the study</p>
</dd>
</dl>
<h3>References</h3>
<p>Fitzmaurice, G.M. and Laird, N.M. (1993) A likelihood-based method for analyzing longitudinal binary responses, <em>Biometrika</em> <b>80</b>: 141–151.</p>
<h3>Examples</h3>
<pre>
data(ohio)
fit &lt;- geese(resp ~ age + smoke + age:smoke, id=id, data=ohio,
 family=binomial, corstr="exch", scale.fix=TRUE)
summary(fit)
fit.ar1 &lt;- geese(resp ~ age + smoke + age:smoke, id=id, data=ohio,
 family=binomial, corstr="ar1", scale.fix=TRUE)
summary(fit.ar1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-61972.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-61972.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-ohio.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-61972.json';</script>