---
title: R Dataset / Package wooldridge / cps91
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cps91</span> data set which pertains to cps91. The <span class="mono">cps91</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">cps91</span> data set in R by issuing the following command at the console <span class="mono">data("cps91")</span>. This will load the data into a variable called <span class="mono">cps91</span>. If R says the <span class="mono">cps91</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-17635.csv">cps91 R data set</a></span>. The size of this file is about 487,300 bytes.</p><h2>cps91</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(cps91) into the console.</p>
<h3>Usage</h3>
<pre>
data(cps91)
</pre>
<h3>Format</h3>
<p>A data.frame with 5634 rows and 24 variables:</p>
<ul>
<li>
<p>husage. husband's age</p>
</li>
<li>
<p>husunion. =1 if hus. in union</p>
</li>
<li>
<p>husearns. hus. weekly earns</p>
</li>
<li>
<p>huseduc. husband's yrs schooling</p>
</li>
<li>
<p>husblck. =1 if hus. black</p>
</li>
<li>
<p>hushisp. =1 if hus. hispanic</p>
</li>
<li>
<p>hushrs. hus. weekly hours</p>
</li>
<li>
<p>kidge6. =1 if have child &gt;= 6</p>
</li>
<li>
<p>earns. wife's weekly earnings</p>
</li>
<li>
<p>age. wife's age</p>
</li>
<li>
<p>black. =1 if wife black</p>
</li>
<li>
<p>educ. wife's yrs schooling</p>
</li>
<li>
<p>hispanic. =1 if wife hispanic</p>
</li>
<li>
<p>union. =1 if wife in union</p>
</li>
<li>
<p>faminc. annual family income</p>
</li>
<li>
<p>husexp. huseduc - husage - 6</p>
</li>
<li>
<p>exper. age - educ - 6</p>
</li>
<li>
<p>kidlt6. =1 if have child &lt; 6</p>
</li>
<li>
<p>hours. wife's weekly hours</p>
</li>
<li>
<p>expersq. exper^2</p>
</li>
<li>
<p>nwifeinc. non-wife inc, $1000s</p>
</li>
<li>
<p>inlf. =1 if wife in labor force</p>
</li>
<li>
<p>hrwage. earns/hours</p>
</li>
<li>
<p>lwage. log(hrwage)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(cps91)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-17635.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-17635.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-cps91.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-17635.json';</script>