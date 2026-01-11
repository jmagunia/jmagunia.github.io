---
title: R Dataset / Package wooldridge / jtrain
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">jtrain</span> data set which pertains to jtrain. The <span class="mono">jtrain</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">jtrain</span> data set in R by issuing the following command at the console <span class="mono">data("jtrain")</span>. This will load the data into a variable called <span class="mono">jtrain</span>. If R says the <span class="mono">jtrain</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28166.csv">jtrain R data set</a></span>. The size of this file is about 91,544 bytes.</p><h2>jtrain</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(jtrain) into the console.</p>
<h3>Usage</h3>
<pre>
data(jtrain)
</pre>
<h3>Format</h3>
<p>A data.frame with 471 rows and 30 variables:</p>
<ul>
<li>
<p>year. 1987, 1988, or 1989</p>
</li>
<li>
<p>fcode. firm code number</p>
</li>
<li>
<p>employ. # employees at plant</p>
</li>
<li>
<p>sales. annual sales, $</p>
</li>
<li>
<p>avgsal. average employee salary</p>
</li>
<li>
<p>scrap. scrap rate (per 100 items)</p>
</li>
<li>
<p>rework. rework rate (per 100 items)</p>
</li>
<li>
<p>tothrs. total hours training</p>
</li>
<li>
<p>union. =1 if unionized</p>
</li>
<li>
<p>grant. = 1 if received grant</p>
</li>
<li>
<p>d89. = 1 if year = 1989</p>
</li>
<li>
<p>d88. = 1 if year = 1988</p>
</li>
<li>
<p>totrain. total employees trained</p>
</li>
<li>
<p>hrsemp. tothrs/totrain</p>
</li>
<li>
<p>lscrap. log(scrap)</p>
</li>
<li>
<p>lemploy. log(employ)</p>
</li>
<li>
<p>lsales. log(sales)</p>
</li>
<li>
<p>lrework. log(rework)</p>
</li>
<li>
<p>lhrsemp. log(1 + hrsemp)</p>
</li>
<li>
<p>lscrap_1. lagged lscrap; missing 1987</p>
</li>
<li>
<p>grant_1. lagged grant; assumed 0 in 1987</p>
</li>
<li>
<p>clscrap. lscrap - lscrap_1; year &gt; 1987</p>
</li>
<li>
<p>cgrant. grant - grant_1</p>
</li>
<li>
<p>clemploy. lemploy - lemploy[_n-1]</p>
</li>
<li>
<p>clsales. lavgsal - lavgsal[_n-1]</p>
</li>
<li>
<p>lavgsal. log(avgsal)</p>
</li>
<li>
<p>clavgsal. lavgsal - lavgsal[_n-1]</p>
</li>
<li>
<p>cgrant_1. cgrant[_n-1]</p>
</li>
<li>
<p>chrsemp. hrsemp - hrsemp[_n-1]</p>
</li>
<li>
<p>clhrsemp. lhrsemp - lhrsemp[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(jtrain)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28166.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28166.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-jtrain.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28166.json';</script>