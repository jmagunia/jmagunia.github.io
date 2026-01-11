---
title: R Dataset / Package COUNT / lbwgrp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">lbwgrp</span> data set which pertains to lbwgrp. The <span class="mono">lbwgrp</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">lbwgrp</span> data set in R by issuing the following command at the console <span class="mono">data("lbwgrp")</span>. This will load the data into a variable called <span class="mono">lbwgrp</span>. If R says the <span class="mono">lbwgrp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57559.csv">lbwgrp R data set</a></span>. The size of this file is about 153 bytes.</p><h2>lbwgrp</h2>
<h3>Description</h3>
<p>grouped format of the lbw data. The observation level data come to us form Hosmer and Lemeshow (2000). Grouping is such that lowbw is the numerator, and cases the denominator of a binomial model, or cases may be an offset to the count variable, lowbw. Birthweights under 2500g classifies a low birthweight baby.</p>
<h3>Usage</h3>
<pre>data(lbwgrp)</pre>
<h3>Format</h3>
<p>A data frame with 6 observations on the following 7 variables.</p>
<dl>
<dt><code>lowbw</code></dt>
<dd>
<p>Number of low weight babies per covariate pattern: 12-60</p>
</dd>
<dt><code>cases</code></dt>
<dd>
<p>Number of observations with same covariate pattern: 30-165</p>
</dd>
<dt><code>smoke</code></dt>
<dd>
<p>1=history of mother smoking; 0=mother nonsmoker</p>
</dd>
<dt><code>race1</code></dt>
<dd>
<p>(1/0): Caucasian</p>
</dd>
<dt><code>race2</code></dt>
<dd>
<p>(1/0): Black</p>
</dd>
<dt><code>race3</code></dt>
<dd>
<p>(1/0): Other</p>
</dd>
<dt><code>low</code></dt>
<dd>
<p>low birth weight (not valid variable in grouped format)</p>
</dd>
</dl>
<h3>Details</h3>
<p>lbwgrp is saved as a data frame. Count models: count response=lowbt; offset=log(cases); Binary: binomial numerator= lowbt; binomial denominator=cases</p>
<h3>Source</h3>
<p>Hosmer, D and S. Lemeshow (2000), Applied Logistic Regression, Wiley</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>
data(lbwgrp)
glmgp &lt;- glm(lowbw ~ smoke + race2 + race3 + offset(log(cases)), family=poisson, data=lbwgrp)
summary(glmgp)
exp(coef(glmgp))
library(MASS)
glmgnb &lt;- glm.nb(lowbw ~smoke + race2 + race3, data=lbwgrp)
summary(glmgnb)
exp(coef(glmgnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57559.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57559.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-lbwgrp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57559.json';</script>