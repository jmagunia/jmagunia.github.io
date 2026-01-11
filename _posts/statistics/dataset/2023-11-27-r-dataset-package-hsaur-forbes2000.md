---
title: R Dataset / Package HSAUR / Forbes2000
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Forbes2000</span> data set which pertains to The Forbes 2000 Ranking of the World's Biggest Companies (Year 2004) . The <span class="mono">Forbes2000</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">Forbes2000</span> data set in R by issuing the following command at the console <span class="mono">data("Forbes2000")</span>. This will load the data into a variable called <span class="mono">Forbes2000</span>. If R says the <span class="mono">Forbes2000</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-58342.csv">Forbes2000 R data set</a></span>. The size of this file is about 145,089 bytes.</p><h2>The Forbes 2000 Ranking of the World's Biggest Companies (Year 2004)</h2>
<h3>Description</h3>
<p>The Forbes 2000 list is a ranking of the world's biggest companies, measured by sales, profits, assets and market value.</p>
<h3>Usage</h3>
<pre>data("Forbes2000")</pre>
<h3>Format</h3>
<p>A data frame with 2000 observations on the following 8 variables.</p>
<dl>
<dt>rank</dt>
<dd>
<p>the ranking of the company.</p>
</dd>
<dt>name</dt>
<dd>
<p>the name of the company.</p>
</dd>
<dt>country</dt>
<dd>
<p>a factor giving the country the company is situated in.</p>
</dd>
<dt>category</dt>
<dd>
<p>a factor describing the products the company produces.</p>
</dd>
<dt>sales</dt>
<dd>
<p>the amount of sales of the company in billion USD.</p>
</dd>
<dt>profits</dt>
<dd>
<p>the profit of the company in billion USD.</p>
</dd>
<dt>assets</dt>
<dd>
<p>the assets of the company in billion USD.</p>
</dd>
<dt>marketvalue</dt>
<dd>
<p>the market value of the company in billion USD.</p>
</dd>
</dl>
<h3>Source</h3>
<p><a href="http://www.forbes.com">http://www.forbes.com</a>, assessed on November 26th, 2004.</p>
<h3>Examples</h3>
<pre>
data("Forbes2000", package = "HSAUR")
summary(Forbes2000)
### number of countries
length(levels(Forbes2000$country))
### number of industries
length(levels(Forbes2000$category))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-58342.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-58342.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-forbes2000.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-58342.json';</script>