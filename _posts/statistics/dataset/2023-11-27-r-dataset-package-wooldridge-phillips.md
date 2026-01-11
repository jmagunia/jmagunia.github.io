---
title: R Dataset / Package wooldridge / phillips
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">phillips</span> data set which pertains to phillips. The <span class="mono">phillips</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">phillips</span> data set in R by issuing the following command at the console <span class="mono">data("phillips")</span>. This will load the data into a variable called <span class="mono">phillips</span>. If R says the <span class="mono">phillips</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-43460.csv">phillips R data set</a></span>. The size of this file is about 5,186 bytes.</p><h2>phillips</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(phillips) into the console.</p>
<h3>Usage</h3>
<pre>
data(phillips)
</pre>
<h3>Format</h3>
<p>A data.frame with 56 rows and 7 variables:</p>
<ul>
<li>
<p>year. 1948 through 2003</p>
</li>
<li>
<p>unem. civilian unemployment rate, percent</p>
</li>
<li>
<p>inf. percentage change in CPI</p>
</li>
<li>
<p>inf_1. inf[_n-1]</p>
</li>
<li>
<p>unem_1. unem[_n-1]</p>
</li>
<li>
<p>cinf. inf - inf_1</p>
</li>
<li>
<p>cunem. unem - unem_1</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(phillips)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-43460.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-43460.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-phillips.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-43460.json';</script>