---
title: R Dataset / Package wooldridge / crime3
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">crime3</span> data set which pertains to crime3. The <span class="mono">crime3</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">crime3</span> data set in R by issuing the following command at the console <span class="mono">data("crime3")</span>. This will load the data into a variable called <span class="mono">crime3</span>. If R says the <span class="mono">crime3</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-56964.csv">crime3 R data set</a></span>. The size of this file is about 7,711 bytes.</p><h2>crime3</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(crime3) into the console.</p>
<h3>Usage</h3>
<pre>
data(crime3)
</pre>
<h3>Format</h3>
<p>A data.frame with 106 rows and 12 variables:</p>
<ul>
<li>
<p>district. district number</p>
</li>
<li>
<p>year. 72 or 78</p>
</li>
<li>
<p>crime. crimes per 1000 people</p>
</li>
<li>
<p>clrprc1. clear-up perc, prior year</p>
</li>
<li>
<p>clrprc2. clear-up perc, two-years prior</p>
</li>
<li>
<p>d78. =1 if year = 78</p>
</li>
<li>
<p>avgclr. (clrprc1 + clrprc2)/2</p>
</li>
<li>
<p>lcrime. log(crime)</p>
</li>
<li>
<p>clcrime. change in lcrime</p>
</li>
<li>
<p>cavgclr. change in avgclr</p>
</li>
<li>
<p>cclrprc1. change in clrprc1</p>
</li>
<li>
<p>cclrprc2. change in clrprc2</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(crime3)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-56964.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-56964.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-crime3.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-56964.json';</script>