---
title: R Dataset / Package survival / tobin
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">tobin</span> data set which pertains to Tobin's Tobit data. The <span class="mono">tobin</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">tobin</span> data set in R by issuing the following command at the console <span class="mono">data("tobin")</span>. This will load the data into a variable called <span class="mono">tobin</span>. If R says the <span class="mono">tobin</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37928.csv">tobin R data set</a></span>. The size of this file is about 251 bytes.</p><h2>Tobin's Tobit data</h2>
<h3>Description</h3>
<p>Economists fit a parametric censored data model called the ‘tobit’. These data are from Tobin's original paper.</p>
<h3>Usage</h3>
<pre>tobin</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on the following 3 variables.</p>
<dl>
<dt>durable</dt>
<dd>
<p>Durable goods purchase</p>
</dd>
<dt>age</dt>
<dd>
<p>Age in years</p>
</dd>
<dt>quant</dt>
<dd>
<p>Liquidity ratio (x 1000)</p>
</dd>
</dl>
<h3>Source</h3>
<p>J Tobin (1958), Estimation of relationships for limited dependent variables. <em>Econometrica</em> <b>26</b>, 24–36.</p>
<h3>Examples</h3>
<pre>
tfit &lt;- survreg(Surv(durable, durable&gt;0, type='left') ~age + quant,
data=tobin, dist='gaussian')predict(tfit,type="response")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37928.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37928.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-tobin.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37928.json';</script>