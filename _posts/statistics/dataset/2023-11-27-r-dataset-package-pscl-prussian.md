---
title: R Dataset / Package pscl / prussian
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">prussian</span> data set which pertains to Prussian army horse kick data. The <span class="mono">prussian</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">prussian</span> data set in R by issuing the following command at the console <span class="mono">data("prussian")</span>. This will load the data into a variable called <span class="mono">prussian</span>. If R says the <span class="mono">prussian</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51077.csv">prussian R data set</a></span>. The size of this file is about 2,838 bytes.</p><h2>Prussian army horse kick data</h2>
<h3>Description</h3>
<p>Deaths by year, by corp, from horse kicks.</p>
<h3>Usage</h3>
<pre>data(prussian)</pre>
<h3>Format</h3>
<p>A data frame with 280 observations on the following 3 variables.</p>
<dl>
<dt><code>y</code></dt>
<dd>
<p>a numeric vector, count of deaths</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>a numeric vector, 18XX, year of observation</p>
</dd>
<dt><code>corp</code></dt>
<dd>
<p>a <code>factor</code>, corp of Prussian Army generating observation</p>
</dd>
</dl>
<h3>Source</h3>
<p>von Bortkiewicz, L. 1898. <em>Das Gesetz der Kleinen Zahlen.</em> Leipzig: Teubner.</p>
<h3>Examples</h3>
<pre>
data(prussian)
corpP &lt;- glm(y ~ corp, family=poisson,data=prussian)
summary(corpP)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51077.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51077.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-prussian.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51077.json';</script>