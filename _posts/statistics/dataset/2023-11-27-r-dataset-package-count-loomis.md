---
title: R Dataset / Package COUNT / loomis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">loomis</span> data set which pertains to loomis. The <span class="mono">loomis</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">loomis</span> data set in R by issuing the following command at the console <span class="mono">data("loomis")</span>. This will load the data into a variable called <span class="mono">loomis</span>. If R says the <span class="mono">loomis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14247.csv">loomis R data set</a></span>. The size of this file is about 9,685 bytes.</p><h2>loomis</h2>
<h3>Description</h3>
<p>Data are taken from Loomis (2003). The study relates to a survey taken on reported frequency of visits to national parks during the year. The survey was taken at park sites, thus incurring possible effects of endogenous stratification.</p>
<h3>Usage</h3>
<pre>data(loomis)</pre>
<h3>Format</h3>
<p>A data frame with 410 observations on the following 11 variables.</p>
<dl>
<dt><code>anvisits</code></dt>
<dd>
<p>number of annual visits to park</p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>1=male;0=female</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>income in US dollars per year, categorical: 4 levels</p>
</dd>
<dt><code>income1</code></dt>
<dd>
<p>&lt;=$25000</p>
</dd>
<dt><code>income2</code></dt>
<dd>
<p>&gt;$25000 - $55000</p>
</dd>
<dt><code>income3</code></dt>
<dd>
<p>&gt;$55000 - $95000</p>
</dd>
<dt><code>income4</code></dt>
<dd>
<p>&gt;$95000</p>
</dd>
<dt><code>travel</code></dt>
<dd>
<p>travel time, categorical: 3 levels</p>
</dd>
<dt><code>travel1</code></dt>
<dd>
<p>&lt;.25 hrs</p>
</dd>
<dt><code>travel2</code></dt>
<dd>
<p>&gt;=.25 - &lt;4 hrs</p>
</dd>
<dt><code>travel3</code></dt>
<dd>
<p>&gt;=4 hrs</p>
</dd>
</dl>
<h3>Details</h3>
<p>loomis is saved as a data frame. Count models typically use anvisits as response variable. 0 counts are included</p>
<h3>Source</h3>
<p>from Loomis (2003)</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Loomis, J. B. (2003). Travel cost demand model based river recreation benefit estimates with on-site and household surveys: Comparative results and a correction procedure, Water Resources Research, 39(4): 1105</p>
<h3>Examples</h3>
<pre>
data(loomis)
glmlmp &lt;- glm(anvisits ~ gender + factor(income) + factor(travel), family=poisson, data=loomis)
summary(glmlmp)
exp(coef(glmlmp))
library(MASS)
glmlmnb &lt;- glm.nb(anvisits ~ gender + factor(income) + factor(travel), data=loomis)
summary(glmlmnb)
exp(coef(glmlmnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14247.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14247.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-loomis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14247.json';</script>