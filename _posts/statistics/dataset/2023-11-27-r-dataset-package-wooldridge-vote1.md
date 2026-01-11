---
title: R Dataset / Package wooldridge / vote1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">vote1</span> data set which pertains to vote1. The <span class="mono">vote1</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">vote1</span> data set in R by issuing the following command at the console <span class="mono">data("vote1")</span>. This will load the data into a variable called <span class="mono">vote1</span>. If R says the <span class="mono">vote1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44198.csv">vote1 R data set</a></span>. The size of this file is about 17,367 bytes.</p><h2>vote1</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(vote1) into the console.</p>
<h3>Usage</h3>
<pre>
data(vote1)
</pre>
<h3>Format</h3>
<p>A data.frame with 173 rows and 10 variables:</p>
<ul>
<li>
<p>state. state postal code</p>
</li>
<li>
<p>district. congressional district</p>
</li>
<li>
<p>democA. =1 if A is democrat</p>
</li>
<li>
<p>voteA. percent vote for A</p>
</li>
<li>
<p>expendA. camp. expends. by A, $1000s</p>
</li>
<li>
<p>expendB. camp. expends. by B, $1000s</p>
</li>
<li>
<p>prtystrA. percent vote for president</p>
</li>
<li>
<p>lexpendA. log(expendA)</p>
</li>
<li>
<p>lexpendB. log(expendB)</p>
</li>
<li>
<p>shareA. 100*(expendA/(expendA+expendB))</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(vote1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44198.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44198.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-vote1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44198.json';</script>