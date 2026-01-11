---
title: R Dataset / Package wooldridge / nyse
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nyse</span> data set which pertains to nyse. The <span class="mono">nyse</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">nyse</span> data set in R by issuing the following command at the console <span class="mono">data("nyse")</span>. This will load the data into a variable called <span class="mono">nyse</span>. If R says the <span class="mono">nyse</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-55411.csv">nyse R data set</a></span>. The size of this file is about 85,368 bytes.</p><h2>nyse</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(nyse) into the console.</p>
<h3>Usage</h3>
<pre>
data(nyse)
</pre>
<h3>Format</h3>
<p>A data.frame with 691 rows and 8 variables:</p>
<ul>
<li>
<p>price. NYSE stock price index</p>
</li>
<li>
<p>return. 100*(p - p(-1))/p(-1))</p>
</li>
<li>
<p>return_1. lagged return</p>
</li>
<li>
<p>t.</p>
</li>
<li>
<p>price_1.</p>
</li>
<li>
<p>price_2.</p>
</li>
<li>
<p>cprice. price - price_1</p>
</li>
<li>
<p>cprice_1. lagged cprice</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(nyse)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-55411.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-55411.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-nyse.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-55411.json';</script>