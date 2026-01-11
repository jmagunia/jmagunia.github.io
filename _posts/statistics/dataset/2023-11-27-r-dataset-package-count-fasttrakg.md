---
title: R Dataset / Package COUNT / fasttrakg
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fasttrakg</span> data set which pertains to fasttrakg. The <span class="mono">fasttrakg</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">fasttrakg</span> data set in R by issuing the following command at the console <span class="mono">data("fasttrakg")</span>. This will load the data into a variable called <span class="mono">fasttrakg</span>. If R says the <span class="mono">fasttrakg</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76979.csv">fasttrakg R data set</a></span>. The size of this file is about 361 bytes.</p><h2>fasttrakg</h2>
<h3>Description</h3>
<p>Data are from the Canadian National Cardiovascular Disease registry called, FASTRAK. years covered at 1996-1998. They have been grouped by covariate patterns from individual observations.</p>
<h3>Usage</h3>
<pre>data(fasttrakg)</pre>
<h3>Format</h3>
<p>A data frame with 15 observations on the following 9 variables.</p>
<dl>
<dt><code>die</code></dt>
<dd>
<p>number died from MI</p>
</dd>
<dt><code>cases</code></dt>
<dd>
<p>number of cases with same covariate pattern</p>
</dd>
<dt><code>anterior</code></dt>
<dd>
<p>1=anterior site MI; 0=inferior site MI</p>
</dd>
<dt><code>hcabg</code></dt>
<dd>
<p>1=history of CABG; 0=no history of CABG</p>
</dd>
<dt><code>killip</code></dt>
<dd>
<p>Killip level of cardiac event severity (1-4)age75</p>
</dd>
</dl>
<p>1= Age&gt;75; 0=Age&lt;=75</p>
<dl>
<dt><code>kk1</code></dt>
<dd>
<p>(1/0) angina; not MI</p>
</dd>
<dt><code>kk2</code></dt>
<dd>
<p>(1/0) moderate severity cardiac event</p>
</dd>
<dt><code>kk3</code></dt>
<dd>
<p>(1/0) Severe cardiac event</p>
</dd>
<dt><code>kk4</code></dt>
<dd>
<p>(1/0) Severe cardiac event; death</p>
</dd>
</dl>
<h3>Details</h3>
<p>fasttrakg is saved as a data frame. Count models use died as response numerator and cases as the demoninator</p>
<h3>Source</h3>
<p>1996-1998 FASTRAK data, Hoffman-LaRoche Canada, National Health Economics &amp; Research Co.</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press</p>
<h3>Examples</h3>
<pre>
library(MASS)
data(fasttrakg)
glmfp &lt;- glm(die ~ anterior + factor(killip) + offset(log(cases)), family=poisson, data=fasttrakg)
summary(glmfp)
exp(coef(glmfp))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76979.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76979.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-fasttrakg.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76979.json';</script>