---
title: R Dataset / Package wooldridge / fish
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fish</span> data set which pertains to fish. The <span class="mono">fish</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">fish</span> data set in R by issuing the following command at the console <span class="mono">data("fish")</span>. This will load the data into a variable called <span class="mono">fish</span>. If R says the <span class="mono">fish</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-56949.csv">fish R data set</a></span>. The size of this file is about 17,337 bytes.</p><h2>fish</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(fish) into the console.</p>
<h3>Usage</h3>
<pre>
data(fish)
</pre>
<h3>Format</h3>
<p>A data.frame with 97 rows and 20 variables:</p>
<ul>
<li>
<p>prca. price for Asian buyers</p>
</li>
<li>
<p>prcw. price for white buyers</p>
</li>
<li>
<p>qtya. quantity sold to Asians</p>
</li>
<li>
<p>qtyw. quantity sold to whites</p>
</li>
<li>
<p>mon. =1 if Monday</p>
</li>
<li>
<p>tues. =1 if Tuesday</p>
</li>
<li>
<p>wed. =1 if Wednesday</p>
</li>
<li>
<p>thurs. =1 if Thursday</p>
</li>
<li>
<p>speed2. min past 2 days wind speeds</p>
</li>
<li>
<p>wave2. avg max last 2 days wave height</p>
</li>
<li>
<p>speed3. 3 day lagged max windspeed</p>
</li>
<li>
<p>wave3. avg max wave hghts of 3 &amp; 4 day lagged hghts</p>
</li>
<li>
<p>avgprc. ((prca*qtya) + (prcw*qtyw))/(qtya + qtyw)</p>
</li>
<li>
<p>totqty. qtya + qtyw</p>
</li>
<li>
<p>lavgprc. log(avgprc)</p>
</li>
<li>
<p>ltotqty. log(totqty)</p>
</li>
<li>
<p>t. time trend</p>
</li>
<li>
<p>lavgp_1. lavgprc[_n-1]</p>
</li>
<li>
<p>gavgprc. lavgprc - lavgp_1</p>
</li>
<li>
<p>gavgp_1. gavgprc[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(fish)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-56949.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-56949.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-fish.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-56949.json';</script>