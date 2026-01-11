---
title: R Dataset / Package COUNT / azcabgptca
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">azcabgptca</span> data set which pertains to azcabgptca. The <span class="mono">azcabgptca</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">azcabgptca</span> data set in R by issuing the following command at the console <span class="mono">data("azcabgptca")</span>. This will load the data into a variable called <span class="mono">azcabgptca</span>. If R says the <span class="mono">azcabgptca</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86370.csv">azcabgptca R data set</a></span>. The size of this file is about 26,093 bytes.</p><h2>azcabgptca</h2>
<h3>Description</h3>
<p>Random subset of the 1991 Arizona Medicare data for patients hospitalized subsequent to undergoing a CABG (DRGs 106, 107) or PTCA (DRG 112) cardiovascular procedure.</p>
<h3>Usage</h3>
<pre>data(azcabgptca)</pre>
<h3>Format</h3>
<p>A data frame with 1959 observations on the following 6 variables.</p>
<dl>
<dt><code>died</code></dt>
<dd>
<p>systolic blood pressure of subject</p>
</dd>
<dt><code>procedure</code></dt>
<dd>
<p>1=CABG; 0=PTCA</p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>1=male; 0=female</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age of subject</p>
</dd>
<dt><code>los</code></dt>
<dd>
<p>hospital length of stay</p>
</dd>
<dt><code>type</code></dt>
<dd>
<p>1=emerg/urgent; 0=elective</p>
</dd>
</dl>
<h3>Details</h3>
<p>azcabgptca is saved as a data frame.</p>
<h3>Source</h3>
<p>Hilbe, Negative Binomial Regression, 2nd ed, Cambridge Univ Press</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press</p>
<h3>Examples</h3>
<pre>data(azcabgptca); attach(azcabgptca)
table(los); table(procedure, type); table(los, procedure)
summary(los)
summary(c91a &lt;- glm(los ~ procedure+ type, family=poisson, data=azcabgptca))
modelfit(c91a)
summary(c91b &lt;- glm(los ~ procedure+ type, family=quasipoisson, data=azcabgptca))
modelfit(c91b)
library(sandwich)
sqrt(diag(vcovHC(c91a, type="HC0")))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86370.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86370.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-azcabgptca.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86370.json';</script>