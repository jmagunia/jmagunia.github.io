---
title: R Dataset / Package wooldridge / kielmc
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kielmc</span> data set which pertains to kielmc. The <span class="mono">kielmc</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">kielmc</span> data set in R by issuing the following command at the console <span class="mono">data("kielmc")</span>. This will load the data into a variable called <span class="mono">kielmc</span>. If R says the <span class="mono">kielmc</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50255.csv">kielmc R data set</a></span>. The size of this file is about 62,996 bytes.</p><h2>kielmc</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(kielmc) into the console.</p>
<h3>Usage</h3>
<pre>
data(kielmc)
</pre>
<h3>Format</h3>
<p>A data.frame with 321 rows and 25 variables:</p>
<ul>
<li>
<p>year. 1978 or 1981</p>
</li>
<li>
<p>age. age of house</p>
</li>
<li>
<p>agesq. age^2</p>
</li>
<li>
<p>nbh. neighborhood, 1-6</p>
</li>
<li>
<p>cbd. dist. to cent. bus. dstrct, ft.</p>
</li>
<li>
<p>intst. dist. to interstate, ft.</p>
</li>
<li>
<p>lintst. log(intst)</p>
</li>
<li>
<p>price. selling price</p>
</li>
<li>
<p>rooms. # rooms in house</p>
</li>
<li>
<p>area. square footage of house</p>
</li>
<li>
<p>land. square footage lot</p>
</li>
<li>
<p>baths. # bathrooms</p>
</li>
<li>
<p>dist. dist. from house to incin., ft.</p>
</li>
<li>
<p>ldist. log(dist)</p>
</li>
<li>
<p>wind. prc. time wind incin. to house</p>
</li>
<li>
<p>lprice. log(price)</p>
</li>
<li>
<p>y81. =1 if year == 1981</p>
</li>
<li>
<p>larea. log(area)</p>
</li>
<li>
<p>lland. log(land)</p>
</li>
<li>
<p>y81ldist. y81*ldist</p>
</li>
<li>
<p>lintstsq. lintst^2</p>
</li>
<li>
<p>nearinc. =1 if dist &lt;= 15840</p>
</li>
<li>
<p>y81nrinc. y81*nearinc</p>
</li>
<li>
<p>rprice. price, 1978 dollars</p>
</li>
<li>
<p>lrprice. log(rprice)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(kielmc)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50255.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50255.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-kielmc.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50255.json';</script>