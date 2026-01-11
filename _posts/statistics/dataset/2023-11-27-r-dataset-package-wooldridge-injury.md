---
title: R Dataset / Package wooldridge / injury
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">injury</span> data set which pertains to injury. The <span class="mono">injury</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">injury</span> data set in R by issuing the following command at the console <span class="mono">data("injury")</span>. This will load the data into a variable called <span class="mono">injury</span>. If R says the <span class="mono">injury</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88173.csv">injury R data set</a></span>. The size of this file is about 1,196,594 bytes.</p><h2>injury</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(injury) into the console.</p>
<h3>Usage</h3>
<pre>
data(injury)
</pre>
<h3>Format</h3>
<p>A data.frame with 7150 rows and 30 variables:</p>
<ul>
<li>
<p>durat. duration of benefits</p>
</li>
<li>
<p>afchnge. =1 if after change in benefits</p>
</li>
<li>
<p>highearn. =1 if high earner</p>
</li>
<li>
<p>male. =1 if male</p>
</li>
<li>
<p>married. =1 if married</p>
</li>
<li>
<p>hosp. =1 if inj. required hosp. stay</p>
</li>
<li>
<p>indust. industry</p>
</li>
<li>
<p>injtype. type of injury</p>
</li>
<li>
<p>age. age at time of injury</p>
</li>
<li>
<p>prewage. previous weekly wage, 1982 $</p>
</li>
<li>
<p>totmed. total med. costs, 1982 $</p>
</li>
<li>
<p>injdes. 4 digit injury description</p>
</li>
<li>
<p>benefit. real dollar value of benefit</p>
</li>
<li>
<p>ky. =1 for kentucky</p>
</li>
<li>
<p>mi. =1 for michigan</p>
</li>
<li>
<p>ldurat. log(durat)</p>
</li>
<li>
<p>afhigh. afchnge*highearn</p>
</li>
<li>
<p>lprewage. log(wage)</p>
</li>
<li>
<p>lage. log(age)</p>
</li>
<li>
<p>ltotmed. log(totmed); = 0 if totmed &lt; 1</p>
</li>
<li>
<p>head. =1 if head injury</p>
</li>
<li>
<p>neck. =1 if neck injury</p>
</li>
<li>
<p>upextr. =1 if upper extremities injury</p>
</li>
<li>
<p>trunk. =1 if trunk injury</p>
</li>
<li>
<p>lowback. =1 if lower back injury</p>
</li>
<li>
<p>lowextr. =1 if lower extremities injury</p>
</li>
<li>
<p>occdis. =1 if occupational disease</p>
</li>
<li>
<p>manuf. =1 if manufacturing industry</p>
</li>
<li>
<p>construc. =1 if construction industry</p>
</li>
<li>
<p>highlpre. highearn*lprewage</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(injury)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88173.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88173.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-injury.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88173.json';</script>