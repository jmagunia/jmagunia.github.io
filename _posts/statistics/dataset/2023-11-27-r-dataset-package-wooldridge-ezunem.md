---
title: R Dataset / Package wooldridge / ezunem
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ezunem</span> data set which pertains to ezunem. The <span class="mono">ezunem</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">ezunem</span> data set in R by issuing the following command at the console <span class="mono">data("ezunem")</span>. This will load the data into a variable called <span class="mono">ezunem</span>. If R says the <span class="mono">ezunem</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42405.csv">ezunem R data set</a></span>. The size of this file is about 22,384 bytes.</p><h2>ezunem</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(ezunem) into the console.</p>
<h3>Usage</h3>
<pre>
data(ezunem)
</pre>
<h3>Format</h3>
<p>A data.frame with 198 rows and 37 variables:</p>
<ul>
<li>
<p>year. 1980 to 1988</p>
</li>
<li>
<p>uclms. unemployment claims</p>
</li>
<li>
<p>ez. =1 if have enterprise zone</p>
</li>
<li>
<p>d81. =1 if year == 1981</p>
</li>
<li>
<p>d82. =1 if year == 1982</p>
</li>
<li>
<p>d83. =1 if year == 1983</p>
</li>
<li>
<p>d84. =1 if year == 1984</p>
</li>
<li>
<p>d85. =1 if year == 1985</p>
</li>
<li>
<p>d86. =1 if year == 1986</p>
</li>
<li>
<p>d87. =1 if year == 1987</p>
</li>
<li>
<p>d88. =1 if year == 1988</p>
</li>
<li>
<p>c1. =1 if city == 1</p>
</li>
<li>
<p>c2. =1 if city == 2</p>
</li>
<li>
<p>c3. =1 if city == 3</p>
</li>
<li>
<p>c4.</p>
</li>
<li>
<p>c5.</p>
</li>
<li>
<p>c6.</p>
</li>
<li>
<p>c7.</p>
</li>
<li>
<p>c8.</p>
</li>
<li>
<p>c9.</p>
</li>
<li>
<p>c10.</p>
</li>
<li>
<p>c11.</p>
</li>
<li>
<p>c12.</p>
</li>
<li>
<p>c13.</p>
</li>
<li>
<p>c14.</p>
</li>
<li>
<p>c15.</p>
</li>
<li>
<p>c16.</p>
</li>
<li>
<p>c17.</p>
</li>
<li>
<p>c18.</p>
</li>
<li>
<p>c19.</p>
</li>
<li>
<p>c20.</p>
</li>
<li>
<p>c21.</p>
</li>
<li>
<p>c22. =1 if city == 22</p>
</li>
<li>
<p>luclms. log(uclms)</p>
</li>
<li>
<p>guclms. luclms - luclms[_n-1]</p>
</li>
<li>
<p>cez. ez - ez[_n-1]</p>
</li>
<li>
<p>city. city identifier, 1 through 22</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(ezunem)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42405.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42405.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-ezunem.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42405.json';</script>