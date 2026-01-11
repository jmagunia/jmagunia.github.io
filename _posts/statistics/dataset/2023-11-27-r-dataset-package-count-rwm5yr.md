---
title: R Dataset / Package COUNT / rwm5yr
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rwm5yr</span> data set which pertains to rwm5yr. The <span class="mono">rwm5yr</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">rwm5yr</span> data set in R by issuing the following command at the console <span class="mono">data("rwm5yr")</span>. This will load the data into a variable called <span class="mono">rwm5yr</span>. If R says the <span class="mono">rwm5yr</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57527.csv">rwm5yr R data set</a></span>. The size of this file is about 1,027,860 bytes.</p><h2>rwm5yr</h2>
<h3>Description</h3>
<p>German health registry for the years 1984-1988. Health information for years immediately prior to health reform.</p>
<h3>Usage</h3>
<pre>data(rwm5yr)</pre>
<h3>Format</h3>
<p>A data frame with 19,609 observations on the following 17 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>patient ID (1=7028)</p>
</dd>
<dt><code>docvis</code></dt>
<dd>
<p>number of visits to doctor during year (0-121)</p>
</dd>
<dt><code>hospvis</code></dt>
<dd>
<p>number of days in hospital during year (0-51)</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>year; (categorical: 1984, 1985, 1986, 1987, 1988)</p>
</dd>
<dt><code>edlevel</code></dt>
<dd>
<p>educational level (categorical: 1-4)</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age: 25-64</p>
</dd>
<dt><code>outwork</code></dt>
<dd>
<p>out of work=1; 0=working</p>
</dd>
<dt><code>female</code></dt>
<dd>
<p>female=1; 0=male</p>
</dd>
<dt><code>married</code></dt>
<dd>
<p>married=1; 0=not married</p>
</dd>
<dt><code>kids</code></dt>
<dd>
<p>have children=1; no children=0</p>
</dd>
<dt><code>hhninc</code></dt>
<dd>
<p>household yearly income in marks (in Marks)</p>
</dd>
<dt><code>educ</code></dt>
<dd>
<p>years of formal education (7-18)</p>
</dd>
<dt><code>self</code></dt>
<dd>
<p>self-employed=1; not self employed=0</p>
</dd>
<dt><code>edlevel1</code></dt>
<dd>
<p>(1/0) not high school graduate</p>
</dd>
<dt><code>edlevel2</code></dt>
<dd>
<p>(1/0) high school graduate</p>
</dd>
<dt><code>edlevel3</code></dt>
<dd>
<p>(1/0) university/college</p>
</dd>
<dt><code>edlevel4</code></dt>
<dd>
<p>(1/0) graduate school</p>
</dd>
</dl>
<h3>Details</h3>
<p>rwm5yr is saved as a data frame. Count models typically use docvis as response variable. 0 counts are included</p>
<h3>Source</h3>
<p>German Health Reform Registry, years pre-reform 1984-1988, in Hilbe and Greene (2007)</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge University Press Hilbe, J. and W. Greene (2008). Count Response Regression Models, in ed. C.R. Rao, J.P Miller, and D.C. Rao, Epidemiology and Medical Statistics, Elsevier Handbook of Statistics Series. London, UK: Elsevier.</p>
<h3>Examples</h3>
<pre>
library(MASS)
data(rwm5yr)glmrp &lt;- glm(docvis ~ outwork + female + age + factor(edlevel), family=poisson, data=rwm5yr)
summary(glmrp)
exp(coef(glmrp))## Not run: 
library(msme)
nb2 &lt;- nbinomial(docvis ~ outwork + female + age + factor(edlevel), data=rwm5yr)
summary(nb2)
exp(coef(nb2)) glmrnb &lt;- glm.nb(docvis ~ outwork + female + age + factor(edlevel), data=rwm5yr)
summary(glmrnb)
exp(coef(glmrnb))## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57527.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57527.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-rwm5yr.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57527.json';</script>