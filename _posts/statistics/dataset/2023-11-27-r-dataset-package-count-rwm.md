---
title: R Dataset / Package COUNT / rwm
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rwm</span> data set which pertains to rwm. The <span class="mono">rwm</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">rwm</span> data set in R by issuing the following command at the console <span class="mono">data("rwm")</span>. This will load the data into a variable called <span class="mono">rwm</span>. If R says the <span class="mono">rwm</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80914.csv">rwm R data set</a></span>. The size of this file is about 557,780 bytes.</p><h2>rwm</h2>
<h3>Description</h3>
<p>German health registry for the years 1984-1988. Health information for years prior to health reform.</p>
<h3>Usage</h3>
<pre>data(rwm)</pre>
<h3>Format</h3>
<p>A data frame with 27,326 observations on the following 4 variables.</p>
<dl>
<dt><code>docvis</code></dt>
<dd>
<p>number of visits to doctor during year (0-121)</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age: 25-64</p>
</dd>
<dt><code>educ</code></dt>
<dd>
<p>years of formal education (7-18)</p>
</dd>
<dt><code>hhninc</code></dt>
<dd>
<p>household yearly income in DM/1000)</p>
</dd>
</dl>
<h3>Details</h3>
<p>rwm is saved as a data frame. Count models typically use docvis as response variable. 0 counts are included</p>
<h3>Source</h3>
<p>German Health Reform Registry, years pre-reform 1984-1988, From Hilbe and Greene (2008)</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge University Press Hilbe, J.M. and W.H. Greene (2008), "Count Response Regression Models", in Rao, CR, JP Miller and DC Rao (eds), Handbook of Statistics 27: Epidemiology and Medical Statistics, Amsterdam: Elsevier. pp. 210-252.</p>
<h3>Examples</h3>
<pre>
data(rwm)
glmrwp &lt;- glm(docvis ~ age + educ + hhninc, family=poisson, data=rwm)
summary(glmrwp)
exp(coef(glmrwp))
library(MASS)
glmrwnb &lt;- glm.nb(docvis ~ age + educ + hhninc, data=rwm)
summary(glmrwnb)
exp(coef(glmrwnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80914.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80914.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-rwm.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80914.json';</script>