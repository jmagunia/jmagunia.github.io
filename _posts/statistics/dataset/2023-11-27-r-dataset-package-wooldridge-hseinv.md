---
title: R Dataset / Package wooldridge / hseinv
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hseinv</span> data set which pertains to hseinv. The <span class="mono">hseinv</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">hseinv</span> data set in R by issuing the following command at the console <span class="mono">data("hseinv")</span>. This will load the data into a variable called <span class="mono">hseinv</span>. If R says the <span class="mono">hseinv</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45931.csv">hseinv R data set</a></span>. The size of this file is about 8,566 bytes.</p><h2>hseinv</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(hseinv) into the console.</p>
<h3>Usage</h3>
<pre>
data(hseinv)
</pre>
<h3>Format</h3>
<p>A data.frame with 42 rows and 14 variables:</p>
<ul>
<li>
<p>year. 1947-1988</p>
</li>
<li>
<p>inv. real housing inv, millions $</p>
</li>
<li>
<p>pop. population, 1000s</p>
</li>
<li>
<p>price. housing price index; 1982 = 1</p>
</li>
<li>
<p>linv. log(inv)</p>
</li>
<li>
<p>lpop. log(pop)</p>
</li>
<li>
<p>lprice. log(price)</p>
</li>
<li>
<p>t. time trend: t=1,...,42</p>
</li>
<li>
<p>invpc. per capita inv: inv/pop</p>
</li>
<li>
<p>linvpc. log(invpc)</p>
</li>
<li>
<p>lprice_1. lprice[_n-1]</p>
</li>
<li>
<p>linvpc_1. linvpc[_n-1]</p>
</li>
<li>
<p>gprice. lprice - lprice_1</p>
</li>
<li>
<p>ginvpc. linvpc - linvpc_1</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(hseinv)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45931.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45931.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-hseinv.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45931.json';</script>