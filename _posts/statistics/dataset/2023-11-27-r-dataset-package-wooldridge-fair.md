---
title: R Dataset / Package wooldridge / fair
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fair</span> data set which pertains to fair. The <span class="mono">fair</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">fair</span> data set in R by issuing the following command at the console <span class="mono">data("fair")</span>. This will load the data into a variable called <span class="mono">fair</span>. If R says the <span class="mono">fair</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-48449.csv">fair R data set</a></span>. The size of this file is about 5,912 bytes.</p><h2>fair</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(fair) into the console.</p>
<h3>Usage</h3>
<pre>
data(fair)
</pre>
<h3>Format</h3>
<p>A data.frame with 21 rows and 28 variables:</p>
<ul>
<li>
<p>year. 1916 to 1992, by 4</p>
</li>
<li>
<p>V. prop. dem. vote</p>
</li>
<li>
<p>I. =1 if demwh, -1 if repwh</p>
</li>
<li>
<p>DPER. incumbent running</p>
</li>
<li>
<p>DUR. duration</p>
</li>
<li>
<p>g3. avg ann grwth rte, prev 3 qrts</p>
</li>
<li>
<p>p15. avg ann inf rate, prev 15 qtrs</p>
</li>
<li>
<p>n. quarters of good news</p>
</li>
<li>
<p>g2. avg ann grwth rte, prev 2 qrts</p>
</li>
<li>
<p>gYR. ann grwth rte, prev year</p>
</li>
<li>
<p>p8. avg ann inf rate, prev 8 qtrs</p>
</li>
<li>
<p>p2YR. inf rte over 2 yr period</p>
</li>
<li>
<p>Ig2. I*g2</p>
</li>
<li>
<p>Ip8. I*p8</p>
</li>
<li>
<p>demwins. =1 if V &gt; .5</p>
</li>
<li>
<p>In. I*n</p>
</li>
<li>
<p>d. =1 in 1920, 1944,1948</p>
</li>
<li>
<p>Id. I*d</p>
</li>
<li>
<p>Ig3. I*g3</p>
</li>
<li>
<p>Ip151md. I*p15*(1-d)</p>
</li>
<li>
<p>In1md. I*n*(1-d)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(fair)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-48449.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-48449.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-fair.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-48449.json';</script>