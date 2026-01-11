---
title: R Dataset / Package wooldridge / intdef
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">intdef</span> data set which pertains to intdef. The <span class="mono">intdef</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">intdef</span> data set in R by issuing the following command at the console <span class="mono">data("intdef")</span>. This will load the data into a variable called <span class="mono">intdef</span>. If R says the <span class="mono">intdef</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-77600.csv">intdef R data set</a></span>. The size of this file is about 9,973 bytes.</p><h2>intdef</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(intdef) into the console.</p>
<h3>Usage</h3>
<pre>
data(intdef)
</pre>
<h3>Format</h3>
<p>A data.frame with 56 rows and 13 variables:</p>
<ul>
<li>
<p>year. 1948 to 2003</p>
</li>
<li>
<p>i3. 3 month T-bill rate</p>
</li>
<li>
<p>inf. CPI inflation rate</p>
</li>
<li>
<p>rec. federal receipts, percent GDP</p>
</li>
<li>
<p>out. federal outlays, percent GDP</p>
</li>
<li>
<p>def. out - rec</p>
</li>
<li>
<p>i3_1. i3[_n-1]</p>
</li>
<li>
<p>inf_1. inf[_n-1]</p>
</li>
<li>
<p>def_1. def[_n-1]</p>
</li>
<li>
<p>ci3. i3 - i3_1</p>
</li>
<li>
<p>cinf. inf - inf_1</p>
</li>
<li>
<p>cdef. def - def_1</p>
</li>
<li>
<p>y77. =1 if year &gt;= 1977; change in FY</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(intdef)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-77600.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-77600.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-intdef.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-77600.json';</script>