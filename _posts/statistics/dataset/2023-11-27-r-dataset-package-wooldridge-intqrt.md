---
title: R Dataset / Package wooldridge / intqrt
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">intqrt</span> data set which pertains to intqrt. The <span class="mono">intqrt</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">intqrt</span> data set in R by issuing the following command at the console <span class="mono">data("intqrt")</span>. This will load the data into a variable called <span class="mono">intqrt</span>. If R says the <span class="mono">intqrt</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62602.csv">intqrt R data set</a></span>. The size of this file is about 49,306 bytes.</p><h2>intqrt</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(intqrt) into the console.</p>
<h3>Usage</h3>
<pre>
data(intqrt)
</pre>
<h3>Format</h3>
<p>A data.frame with 124 rows and 23 variables:</p>
<ul>
<li>
<p>r3. bond equiv. yield, 3 mo T-bill</p>
</li>
<li>
<p>r6. bond equiv. yield, 6 mo T-bill</p>
</li>
<li>
<p>r12. yield on 1 yr. bond</p>
</li>
<li>
<p>p3. price of 3 mo. T-bill</p>
</li>
<li>
<p>p6. price of 6 mo. T-bill</p>
</li>
<li>
<p>hy6. 100*(p3 - p6[_n-1])/p6[_n-1])</p>
</li>
<li>
<p>hy3. r3*(91/365)</p>
</li>
<li>
<p>spr63. r6 - r3</p>
</li>
<li>
<p>hy3_1. hy3[_n-1]</p>
</li>
<li>
<p>hy6_1. hy6[_n-1]</p>
</li>
<li>
<p>spr63_1. spr63[_n-1]</p>
</li>
<li>
<p>hy6hy3_1. hy6 - hy3_1</p>
</li>
<li>
<p>cr3. r3 - r3_1</p>
</li>
<li>
<p>r3_1. r3[_n-1]</p>
</li>
<li>
<p>chy6. hy6 - hy6_1</p>
</li>
<li>
<p>chy3. hy3 - hy3_1</p>
</li>
<li>
<p>chy6_1. chy6[_n-1]</p>
</li>
<li>
<p>chy3_1. chy3[_n-1]</p>
</li>
<li>
<p>cr6. r6 - r6_1</p>
</li>
<li>
<p>cr6_1. cr6[_n-1]</p>
</li>
<li>
<p>cr3_1. cr3[_n-1]</p>
</li>
<li>
<p>r6_1. r6[_n-1]</p>
</li>
<li>
<p>cspr63. spr63 - spr63_1</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(intqrt)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62602.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62602.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-intqrt.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62602.json';</script>