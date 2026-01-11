---
title: R Dataset / Package wooldridge / volat
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">volat</span> data set which pertains to volat. The <span class="mono">volat</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">volat</span> data set in R by issuing the following command at the console <span class="mono">data("volat")</span>. This will load the data into a variable called <span class="mono">volat</span>. If R says the <span class="mono">volat</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-79759.csv">volat R data set</a></span>. The size of this file is about 158,477 bytes.</p><h2>volat</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(volat) into the console.</p>
<h3>Usage</h3>
<pre>
data(volat)
</pre>
<h3>Format</h3>
<p>A data.frame with 558 rows and 17 variables:</p>
<ul>
<li>
<p>date. 1947.01 to 1993.06</p>
</li>
<li>
<p>sp500. S&amp;P 500 index</p>
</li>
<li>
<p>divyld. div. yield annualized rate</p>
</li>
<li>
<p>i3. 3 mo. T-bill annualized rate</p>
</li>
<li>
<p>ip. index of industrial production</p>
</li>
<li>
<p>pcsp. pct chg, sp500, ann rate</p>
</li>
<li>
<p>rsp500. return on sp500: pcsp + divyld</p>
</li>
<li>
<p>pcip. pct chg, IP, ann rate</p>
</li>
<li>
<p>ci3. i3 - i3[_n-1]</p>
</li>
<li>
<p>ci3_1. ci3[_n-1]</p>
</li>
<li>
<p>ci3_2. ci3[_n-2]</p>
</li>
<li>
<p>pcip_1. pcip[_n-1]</p>
</li>
<li>
<p>pcip_2. pcip[_n-2]</p>
</li>
<li>
<p>pcip_3. pcip[_n-3]</p>
</li>
<li>
<p>pcsp_1. pcip[_n-1]</p>
</li>
<li>
<p>pcsp_2. pcip[_n-2]</p>
</li>
<li>
<p>pcsp_3. pcip[_n-3]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(volat)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-79759.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-79759.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-volat.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-79759.json';</script>