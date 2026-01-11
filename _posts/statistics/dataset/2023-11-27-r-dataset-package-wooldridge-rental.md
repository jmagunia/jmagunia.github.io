---
title: R Dataset / Package wooldridge / rental
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rental</span> data set which pertains to rental. The <span class="mono">rental</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">rental</span> data set in R by issuing the following command at the console <span class="mono">data("rental")</span>. This will load the data into a variable called <span class="mono">rental</span>. If R says the <span class="mono">rental</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81264.csv">rental R data set</a></span>. The size of this file is about 29,973 bytes.</p><h2>rental</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(rental) into the console.</p>
<h3>Usage</h3>
<pre>
data(rental)
</pre>
<h3>Format</h3>
<p>A data.frame with 128 rows and 23 variables:</p>
<ul>
<li>
<p>city. city label, 1 to 64</p>
</li>
<li>
<p>year. 80 or 90</p>
</li>
<li>
<p>pop. city population</p>
</li>
<li>
<p>enroll. # college students enrolled</p>
</li>
<li>
<p>rent. average rent</p>
</li>
<li>
<p>rnthsg. renter occupied units</p>
</li>
<li>
<p>tothsg. occupied housing units</p>
</li>
<li>
<p>avginc. per capita income</p>
</li>
<li>
<p>lenroll. log(enroll)</p>
</li>
<li>
<p>lpop. log(pop)</p>
</li>
<li>
<p>lrent. log(rent)</p>
</li>
<li>
<p>ltothsg. log(tothsg)</p>
</li>
<li>
<p>lrnthsg. log(rnthsg)</p>
</li>
<li>
<p>lavginc. log(avginc)</p>
</li>
<li>
<p>clenroll. change in lrent from 80 to 90</p>
</li>
<li>
<p>clpop. change in lpop</p>
</li>
<li>
<p>clrent. change in lrent</p>
</li>
<li>
<p>cltothsg. change in ltothsg</p>
</li>
<li>
<p>clrnthsg. change in lrnthsg</p>
</li>
<li>
<p>clavginc. change in lavginc</p>
</li>
<li>
<p>pctstu. percent of population students</p>
</li>
<li>
<p>cpctstu. change in pctstu</p>
</li>
<li>
<p>y90. =1 if year == 90</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(rental)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81264.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81264.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-rental.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81264.json';</script>