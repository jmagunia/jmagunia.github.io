---
title: R Dataset / Package wooldridge / murder
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">murder</span> data set which pertains to murder. The <span class="mono">murder</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">murder</span> data set in R by issuing the following command at the console <span class="mono">data("murder")</span>. This will load the data into a variable called <span class="mono">murder</span>. If R says the <span class="mono">murder</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72352.csv">murder R data set</a></span>. The size of this file is about 12,559 bytes.</p><h2>murder</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(murder) into the console.</p>
<h3>Usage</h3>
<pre>
data(murder)
</pre>
<h3>Format</h3>
<p>A data.frame with 153 rows and 13 variables:</p>
<ul>
<li>
<p>id. state identifier</p>
</li>
<li>
<p>state. postal code</p>
</li>
<li>
<p>year. 87, 90, or 93</p>
</li>
<li>
<p>mrdrte. murders per 100,000 people</p>
</li>
<li>
<p>exec. total executions, past 3 years</p>
</li>
<li>
<p>unem. annual unem. rate</p>
</li>
<li>
<p>d90. =1 if year == 90</p>
</li>
<li>
<p>d93. =1 if year == 93</p>
</li>
<li>
<p>cmrdrte. mrdrte - mrdrte[_n-1]</p>
</li>
<li>
<p>cexec. exec - exec[_n-1]</p>
</li>
<li>
<p>cunem. unem - unem[_n-1]</p>
</li>
<li>
<p>cexec_1. cexec[_n-1]</p>
</li>
<li>
<p>cunem_1. cunem[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(murder)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72352.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72352.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-murder.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72352.json';</script>