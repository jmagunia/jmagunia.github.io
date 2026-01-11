---
title: R Dataset / Package ISLR / OJ
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">OJ</span> data set which pertains to Orange Juice Data. The <span class="mono">OJ</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">OJ</span> data set in R by issuing the following command at the console <span class="mono">data("OJ")</span>. This will load the data into a variable called <span class="mono">OJ</span>. If R says the <span class="mono">OJ</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24819.csv">OJ R data set</a></span>. The size of this file is about 77,091 bytes.</p><h2>Orange Juice Data</h2>
<h3>Description</h3>
<p>The data contains 1070 purchases where the customer either purchased Citrus Hill or Minute Maid Orange Juice. A number of characteristics of the customer and product are recorded.</p>
<h3>Usage</h3>
<pre>OJ</pre>
<h3>Format</h3>
<p>A data frame with 1070 observations on the following 18 variables.</p>
<dl>
<dt><code>Purchase</code></dt>
<dd>
<p>A factor with levels <code>CH</code> and <code>MM</code> indicating whether the customer purchased Citrus Hill or Minute Maid Orange Juice</p>
</dd>
</dl>
<dl>
<dt><code>WeekofPurchase</code></dt>
<dd>
<p>Week of purchase</p>
</dd>
<dt><code>StoreID</code></dt>
<dd>
<p>Store ID</p>
</dd>
</dl>
<dl>
<dt><code>PriceCH</code></dt>
<dd>
<p>Price charged for CH</p>
</dd>
<dt><code>PriceMM</code></dt>
<dd>
<p>Price charged for MM</p>
</dd>
<dt><code>DiscCH</code></dt>
<dd>
<p>Discount offered for CH</p>
</dd>
<dt><code>DiscMM</code></dt>
<dd>
<p>Discount offered for MM</p>
</dd>
<dt><code>SpecialCH</code></dt>
<dd>
<p>Indicator of special on CH</p>
</dd>
<dt><code>SpecialMM</code></dt>
<dd>
<p>Indicator of special on MM</p>
</dd>
<dt><code>LoyalCH</code></dt>
<dd>
<p>Customer brand loyalty for CH</p>
</dd>
</dl>
<dl>
<dt><code>SalePriceMM</code></dt>
<dd>
<p>Sale price for MM</p>
</dd>
<dt><code>SalePriceCH</code></dt>
<dd>
<p>Sale price for CH</p>
</dd>
<dt><code>PriceDiff</code></dt>
<dd>
<p>Sale price of MM less sale price of CH</p>
</dd>
<dt><code>Store7</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> indicating whether the sale is at Store 7</p>
</dd>
<dt><code>PctDiscMM</code></dt>
<dd>
<p>Percentage discount for MM</p>
</dd>
<dt><code>PctDiscCH</code></dt>
<dd>
<p>Percentage discount for CH</p>
</dd>
<dt><code>ListPriceDiff</code></dt>
<dd>
<p>List price of MM less list price of CH</p>
</dd>
<dt><code>STORE</code></dt>
<dd>
<p>Which of 5 possible stores the sale occured at</p>
</dd>
</dl>
<h3>Source</h3>
<p>Stine, Robert A., Foster, Dean P., Waterman, Richard P. Business Analysis Using Regression (1998). Published by Springer.</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(OJ)
plot(OJ$Purchase,OJ$PriceCH)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24819.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24819.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-oj.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24819.json';</script>
