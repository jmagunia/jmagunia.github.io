---
title: R Dataset / Package wooldridge / consump
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">consump</span> data set which pertains to consump. The <span class="mono">consump</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">consump</span> data set in R by issuing the following command at the console <span class="mono">data("consump")</span>. This will load the data into a variable called <span class="mono">consump</span>. If R says the <span class="mono">consump</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-21493.csv">consump R data set</a></span>. The size of this file is about 14,312 bytes.</p><h2>consump</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(consump) into the console.</p>
<h3>Usage</h3>
<pre>
data(consump)
</pre>
<h3>Format</h3>
<p>A data.frame with 37 rows and 24 variables:</p>
<ul>
<li>
<p>year. 1959-1995</p>
</li>
<li>
<p>i3. 3 mo. T-bill rate</p>
</li>
<li>
<p>inf. inflation rate; CPI</p>
</li>
<li>
<p>rdisp. disp. inc., 1992 $, bils.</p>
</li>
<li>
<p>rnondc. nondur. cons., 1992 $, bils.</p>
</li>
<li>
<p>rserv. services, 1992 $, bils.</p>
</li>
<li>
<p>pop. population, 1000s</p>
</li>
<li>
<p>y. per capita real disp. inc.</p>
</li>
<li>
<p>rcons. rnondc + rserv</p>
</li>
<li>
<p>c. per capita real cons.</p>
</li>
<li>
<p>r3. i3 - inf; real ex post int.</p>
</li>
<li>
<p>lc. log(c)</p>
</li>
<li>
<p>ly. log(y)</p>
</li>
<li>
<p>gc. lc - lc[_n-1]</p>
</li>
<li>
<p>gy. ly - ly[_n-1]</p>
</li>
<li>
<p>gc_1. gc[_n-1]</p>
</li>
<li>
<p>gy_1. gy[_n-1]</p>
</li>
<li>
<p>r3_1. r3[_n-1]</p>
</li>
<li>
<p>lc_ly. lc - ly</p>
</li>
<li>
<p>lc_ly_1. lc_ly[_n-1]</p>
</li>
<li>
<p>gc_2. gc[_n-2]</p>
</li>
<li>
<p>gy_2. gy[_n-2]</p>
</li>
<li>
<p>r3_2. r3[_n-2]</p>
</li>
<li>
<p>lc_ly_2. lc_ly[_n-2]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(consump)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-21493.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-21493.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-consump.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-21493.json';</script>