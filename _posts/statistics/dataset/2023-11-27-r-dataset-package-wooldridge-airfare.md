---
title: R Dataset / Package wooldridge / airfare
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">airfare</span> data set which pertains to airfare. The <span class="mono">airfare</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">airfare</span> data set in R by issuing the following command at the console <span class="mono">data("airfare")</span>. This will load the data into a variable called <span class="mono">airfare</span>. If R says the <span class="mono">airfare</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-49850.csv">airfare R data set</a></span>. The size of this file is about 600,246 bytes.</p><h2>airfare</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(airfare) into the console.</p>
<h3>Usage</h3>
<pre>
data(airfare)
</pre>
<h3>Format</h3>
<p>A data.frame with 4596 rows and 14 variables:</p>
<ul>
<li>
<p>year. 1997, 1998, 1999, 2000</p>
</li>
<li>
<p>id. route identifier</p>
</li>
<li>
<p>dist. distance, in miles</p>
</li>
<li>
<p>passen. avg. passengers per day</p>
</li>
<li>
<p>fare. avg. one-way fare, $</p>
</li>
<li>
<p>bmktshr. fraction market, biggest carrier</p>
</li>
<li>
<p>ldist. log(distance)</p>
</li>
<li>
<p>y98. =1 if year == 1998</p>
</li>
<li>
<p>y99. =1 if year == 1999</p>
</li>
<li>
<p>y00. =1 if year == 2000</p>
</li>
<li>
<p>lfare. log(fare)</p>
</li>
<li>
<p>ldistsq. ldist^2</p>
</li>
<li>
<p>concen. = bmktshr</p>
</li>
<li>
<p>lpassen. log(passen)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(airfare)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-49850.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-49850.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-airfare.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-49850.json';</script>