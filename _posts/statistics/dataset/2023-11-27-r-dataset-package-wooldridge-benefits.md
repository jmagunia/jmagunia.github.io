---
title: R Dataset / Package wooldridge / benefits
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">benefits</span> data set which pertains to benefits. The <span class="mono">benefits</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">benefits</span> data set in R by issuing the following command at the console <span class="mono">data("benefits")</span>. This will load the data into a variable called <span class="mono">benefits</span>. If R says the <span class="mono">benefits</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83722.csv">benefits R data set</a></span>. The size of this file is about 413,523 bytes.</p><h2>benefits</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(benefits) into the console.</p>
<h3>Usage</h3>
<pre>
data(benefits)
</pre>
<h3>Format</h3>
<p>A data.frame with 1848 rows and 18 variables:</p>
<ul>
<li>
<p>distid. district identifier</p>
</li>
<li>
<p>schid. school identifier</p>
</li>
<li>
<p>lunch. percent eligible, free lunch</p>
</li>
<li>
<p>enroll. school enrollment</p>
</li>
<li>
<p>staff. staff per 1000 students</p>
</li>
<li>
<p>exppp. expenditures per pupil</p>
</li>
<li>
<p>avgsal. average teacher salary, $</p>
</li>
<li>
<p>avgben. average teacher non-salary benefits, $</p>
</li>
<li>
<p>math4. percent passing 4th grade math test</p>
</li>
<li>
<p>story4. percent passing 4th grade reading test</p>
</li>
<li>
<p>bs. avgben/avgsal</p>
</li>
<li>
<p>lavgsal. log(avgsal)</p>
</li>
<li>
<p>lenroll. log(enroll)</p>
</li>
<li>
<p>lstaff. log(staff)</p>
</li>
<li>
<p>bsbar. within-district avg of bs</p>
</li>
<li>
<p>lunchbar. within-district avg of lunch</p>
</li>
<li>
<p>lenrollbar. within-district avg of lenroll</p>
</li>
<li>
<p>lstaffbar. within-district avg of lstaff</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(benefits)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83722.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83722.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-benefits.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83722.json';</script>