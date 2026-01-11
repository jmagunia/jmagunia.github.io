---
title: R Dataset / Package wooldridge / athlet1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">athlet1</span> data set which pertains to athlet1. The <span class="mono">athlet1</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">athlet1</span> data set in R by issuing the following command at the console <span class="mono">data("athlet1")</span>. This will load the data into a variable called <span class="mono">athlet1</span>. If R says the <span class="mono">athlet1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10160.csv">athlet1 R data set</a></span>. The size of this file is about 12,521 bytes.</p><h2>athlet1</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(athlet1) into the console.</p>
<h3>Usage</h3>
<pre>
data(athlet1)
</pre>
<h3>Format</h3>
<p>A data.frame with 118 rows and 23 variables:</p>
<ul>
<li>
<p>year. 1992 or 1993</p>
</li>
<li>
<p>apps. # applics for admission</p>
</li>
<li>
<p>top25. perc frsh class in 25 hs perc</p>
</li>
<li>
<p>ver500. perc frsh &gt;= 500 on verbal SAT</p>
</li>
<li>
<p>mth500. perc frsh &gt;= 500 on math SAT</p>
</li>
<li>
<p>stufac. student-faculty ratio</p>
</li>
<li>
<p>bowl. = 1 if bowl game in prev yr</p>
</li>
<li>
<p>btitle. = 1 if men's cnf chmps prv yr</p>
</li>
<li>
<p>finfour. = 1 if men's final 4 prv yr</p>
</li>
<li>
<p>lapps. log(apps)</p>
</li>
<li>
<p>d93. =1 if year = 1993</p>
</li>
<li>
<p>avg500. (ver500+mth500)/2</p>
</li>
<li>
<p>cfinfour. change in finfour</p>
</li>
<li>
<p>clapps. change in lapps</p>
</li>
<li>
<p>cstufac. change in stufac</p>
</li>
<li>
<p>cbowl. change in bowl</p>
</li>
<li>
<p>cavg500. change in avg500</p>
</li>
<li>
<p>cbtitle. change in btitle</p>
</li>
<li>
<p>lapps_1. lapps lagged</p>
</li>
<li>
<p>school. name of university</p>
</li>
<li>
<p>ctop25. change in top25</p>
</li>
<li>
<p>bball. =1 if btitle or finfour</p>
</li>
<li>
<p>cbball. change in bball</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(athlet1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10160.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10160.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-athlet1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10160.json';</script>