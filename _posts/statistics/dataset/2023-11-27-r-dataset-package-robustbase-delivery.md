---
title: R Dataset / Package robustbase / delivery
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">delivery</span> data set which pertains to Delivery Time Data. The <span class="mono">delivery</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">delivery</span> data set in R by issuing the following command at the console <span class="mono">data("delivery")</span>. This will load the data into a variable called <span class="mono">delivery</span>. If R says the <span class="mono">delivery</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-64222.csv">delivery R data set</a></span>. The size of this file is about 313 bytes.</p><h2>Delivery Time Data</h2>
<h3>Description</h3>
<p>Delivery Time Data, from Montgomery and Peck (1982). The aim is to explain the time required to service a vending machine (Y) by means of the number of products stocked (X1) and the distance walked by the route driver (X2).</p>
<h3>Usage</h3>
<pre>data(delivery)</pre>
<h3>Format</h3>
<p>A data frame with 25 observations on the following 3 variables.</p>
<dl>
<dt><code>n.prod</code></dt>
<dd>
<p>Number of Products</p>
</dd>
<dt><code>distance</code></dt>
<dd>
<p>Distance</p>
</dd>
<dt><code>delTime</code></dt>
<dd>
<p>Delivery time</p>
</dd>
</dl>
<h3>Source</h3>
<p>Montgomery and Peck (1982, p.116)</p>
<h3>References</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, page 155, table 23.</p>
<h3>Examples</h3>
<pre>
data(delivery)
summary(lm.deli &lt;- lm(delTime ~ ., data = delivery))delivery.x &lt;- as.matrix(delivery[, 1:2])
c_deli &lt;- covMcd(delivery.x)
c_deli
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-64222.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-64222.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-delivery.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-64222.json';</script>