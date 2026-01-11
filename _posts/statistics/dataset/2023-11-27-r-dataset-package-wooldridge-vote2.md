---
title: R Dataset / Package wooldridge / vote2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">vote2</span> data set which pertains to vote2. The <span class="mono">vote2</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">vote2</span> data set in R by issuing the following command at the console <span class="mono">data("vote2")</span>. This will load the data into a variable called <span class="mono">vote2</span>. If R says the <span class="mono">vote2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30120.csv">vote2 R data set</a></span>. The size of this file is about 38,540 bytes.</p><h2>vote2</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(vote2) into the console.</p>
<h3>Usage</h3>
<pre>
data(vote2)
</pre>
<h3>Format</h3>
<p>A data.frame with 186 rows and 26 variables:</p>
<ul>
<li>
<p>state. state postal code</p>
</li>
<li>
<p>district. U.S. Congressional district</p>
</li>
<li>
<p>democ. =1 if incumbent democrat</p>
</li>
<li>
<p>vote90. inc. share two-party vote, 1990</p>
</li>
<li>
<p>vote88. inc. share two-party vote, 1988</p>
</li>
<li>
<p>inexp90. inc. camp. expends., 1990</p>
</li>
<li>
<p>chexp90. chl. camp. expends., 1990</p>
</li>
<li>
<p>inexp88. inc. camp. expends., 1988</p>
</li>
<li>
<p>chexp88. chl. camp. expends., 1988</p>
</li>
<li>
<p>prtystr. percent vote pres., same party, 1988</p>
</li>
<li>
<p>rptchall. =1 if a repeat challenger</p>
</li>
<li>
<p>tenure. years in H.R.</p>
</li>
<li>
<p>lawyer. =1 if law degree</p>
</li>
<li>
<p>linexp90. log(inexp90)</p>
</li>
<li>
<p>lchexp90. log(chexp90)</p>
</li>
<li>
<p>linexp88. log(inexp88)</p>
</li>
<li>
<p>lchexp88. log(chexp88)</p>
</li>
<li>
<p>incshr90. 100*(inexp90/(inexp90+chexp90))</p>
</li>
<li>
<p>incshr88. 100*(inexp88/(inexp88+chexp88))</p>
</li>
<li>
<p>cvote. vote90 - vote88</p>
</li>
<li>
<p>clinexp. linexp90 - linexp88</p>
</li>
<li>
<p>clchexp. lchexp90 - lchexp88</p>
</li>
<li>
<p>cincshr. incshr90 - incshr88</p>
</li>
<li>
<p>win88. =1 by definition</p>
</li>
<li>
<p>win90. =1 if inc. wins, 1990</p>
</li>
<li>
<p>cwin. win90 - win88</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(vote2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30120.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30120.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-vote2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30120.json';</script>