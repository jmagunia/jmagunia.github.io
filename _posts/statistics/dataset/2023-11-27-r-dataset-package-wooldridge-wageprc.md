---
title: R Dataset / Package wooldridge / wageprc
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">wageprc</span> data set which pertains to wageprc. The <span class="mono">wageprc</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">wageprc</span> data set in R by issuing the following command at the console <span class="mono">data("wageprc")</span>. This will load the data into a variable called <span class="mono">wageprc</span>. If R says the <span class="mono">wageprc</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22247.csv">wageprc R data set</a></span>. The size of this file is about 94,992 bytes.</p><h2>wageprc</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(wageprc) into the console.</p>
<h3>Usage</h3>
<pre>
data(wageprc)
</pre>
<h3>Format</h3>
<p>A data.frame with 286 rows and 20 variables:</p>
<ul>
<li>
<p>price. consumer price index</p>
</li>
<li>
<p>wage. nominal hourly wage</p>
</li>
<li>
<p>t. time trend = 1, 2 , 3, ...</p>
</li>
<li>
<p>lprice. log(price)</p>
</li>
<li>
<p>lwage. log(wage)</p>
</li>
<li>
<p>gprice. lprice - lprice[_n-1]</p>
</li>
<li>
<p>gwage. lwage - lwage[_n-1]</p>
</li>
<li>
<p>gwage_1. gwage[_n-1]</p>
</li>
<li>
<p>gwage_2. gwage[_n-2]</p>
</li>
<li>
<p>gwage_3.</p>
</li>
<li>
<p>gwage_4.</p>
</li>
<li>
<p>gwage_5.</p>
</li>
<li>
<p>gwage_6.</p>
</li>
<li>
<p>gwage_7.</p>
</li>
<li>
<p>gwage_8.</p>
</li>
<li>
<p>gwage_9.</p>
</li>
<li>
<p>gwage_10.</p>
</li>
<li>
<p>gwage_11.</p>
</li>
<li>
<p>gwage_12.</p>
</li>
<li>
<p>gprice_1. gprice[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(wageprc)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22247.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22247.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-wageprc.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22247.json';</script>