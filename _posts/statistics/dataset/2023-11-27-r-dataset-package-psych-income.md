---
title: R Dataset / Package psych / income
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">income</span> data set which pertains to US family income from US census 2008. The <span class="mono">income</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">income</span> data set in R by issuing the following command at the console <span class="mono">data("income")</span>. This will load the data into a variable called <span class="mono">income</span>. If R says the <span class="mono">income</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57763.csv">income R data set</a></span>. The size of this file is about 1,610 bytes.</p><h2>US family income from US census 2008</h2>
<h3>Description</h3>
<p>US census data on family income from 2008</p>
<h3>Usage</h3>
<pre>data(income)</pre>
<h3>Format</h3>
<p>A data frame with 44 observations on the following 4 variables.</p>
<dl>
<dt><code>value</code></dt>
<dd>
<p>lower boundary of the income group</p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>Number of families within that income group</p>
</dd>
<dt><code>mean</code></dt>
<dd>
<p>Mean of the category</p>
</dd>
<dt><code>prop</code></dt>
<dd>
<p>proportion of families</p>
</dd>
</dl>
<h3>Details</h3>
<p>The distribution of income is a nice example of a log normal distribution. It is also an interesting example of the power of graphics. It is quite clear when graphing the data that income statistics are bunched to the nearest 5K. That is, there is a clear sawtooth pattern in the data.</p>
<p>The all.income set is interpolates intervening values for 100-150K, 150-200K and 200-250K</p>
<h3>Source</h3>
<p>US Census: Table HINC-06. Income Distribution to $250,000 or More for Households: 2008</p>
<p><a href="http://www.census.gov/hhes/www/cpstables/032009/hhinc/new06_000.htm">http://www.census.gov/hhes/www/cpstables/032009/hhinc/new06_000.htm</a></p>
<h3>Examples</h3>
<pre>
data(income)
with(income[1:40,], plot(mean,prop, main="US family income for 2008",xlab="income", 
ylab="Proportion of families",xlim=c(0,100000)))
with (income[1:40,], points(lowess(mean,prop,f=.3),typ="l"))
describe(income)
with(all.income, plot(mean,prop, main="US family income for 2008",xlab="income", 
ylab="Proportion of families",xlim=c(0,250000)))
with (all.income[1:50,], points(lowess(mean,prop,f=.25),typ="l"))
#curve(100000* dlnorm(x, 10.8, .8), x = c(0,250000),ylab="Proportion")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57763.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57763.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-income.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57763.json';</script>