---
title: R Dataset / Package wooldridge / fertil3
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fertil3</span> data set which pertains to fertil3. The <span class="mono">fertil3</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">fertil3</span> data set in R by issuing the following command at the console <span class="mono">data("fertil3")</span>. This will load the data into a variable called <span class="mono">fertil3</span>. If R says the <span class="mono">fertil3</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81401.csv">fertil3 R data set</a></span>. The size of this file is about 21,538 bytes.</p><h2>fertil3</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(fertil3) into the console.</p>
<h3>Usage</h3>
<pre>
data(fertil3)
</pre>
<h3>Format</h3>
<p>A data.frame with 72 rows and 24 variables:</p>
<ul>
<li>
<p>gfr. births per 1000 women 15-44</p>
</li>
<li>
<p>pe. real value pers. exemption, $</p>
</li>
<li>
<p>year. 1913 to 1984</p>
</li>
<li>
<p>t. time trend, t=1,...,72</p>
</li>
<li>
<p>tsq. t^2</p>
</li>
<li>
<p>pe_1. pe[_n-1]</p>
</li>
<li>
<p>pe_2. pe[_n-2]</p>
</li>
<li>
<p>pe_3. pe[_n-3]</p>
</li>
<li>
<p>pe_4. pe[_n-4]</p>
</li>
<li>
<p>pill. =1 if year &gt;= 1963</p>
</li>
<li>
<p>ww2. =1, 1941 to 1945</p>
</li>
<li>
<p>tcu. t^3</p>
</li>
<li>
<p>cgfr. change in gfr: gfr - gfr_1</p>
</li>
<li>
<p>cpe. pe - pe_1</p>
</li>
<li>
<p>cpe_1. cpe[_n-1]</p>
</li>
<li>
<p>cpe_2. cpe[_n-2]</p>
</li>
<li>
<p>cpe_3. cpe[_n-3]</p>
</li>
<li>
<p>cpe_4. cpe[_n-4]</p>
</li>
<li>
<p>gfr_1. gfr[_n-1]</p>
</li>
<li>
<p>cgfr_1. cgfr[_n-1]</p>
</li>
<li>
<p>cgfr_2. cgfr[_n-2]</p>
</li>
<li>
<p>cgfr_3. cgfr[_n-3]</p>
</li>
<li>
<p>cgfr_4. cgfr[_n-4]</p>
</li>
<li>
<p>gfr_2. gfr[_n-2]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(fertil3)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81401.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81401.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-fertil3.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81401.json';</script>