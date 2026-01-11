---
title: R Dataset / Package wooldridge / traffic2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">traffic2</span> data set which pertains to traffic2. The <span class="mono">traffic2</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">traffic2</span> data set in R by issuing the following command at the console <span class="mono">data("traffic2")</span>. This will load the data into a variable called <span class="mono">traffic2</span>. If R says the <span class="mono">traffic2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-63675.csv">traffic2 R data set</a></span>. The size of this file is about 38,811 bytes.</p><h2>traffic2</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(traffic2) into the console.</p>
<h3>Usage</h3>
<pre>
data(traffic2)
</pre>
<h3>Format</h3>
<p>A data.frame with 108 rows and 48 variables:</p>
<ul>
<li>
<p>year. 1981 to 1989</p>
</li>
<li>
<p>totacc. statewide total accidents</p>
</li>
<li>
<p>fatacc. statewide fatal accidents</p>
</li>
<li>
<p>injacc. statewide injury accidents</p>
</li>
<li>
<p>pdoacc. property damage only accidents</p>
</li>
<li>
<p>ntotacc. noninterstate total acc.</p>
</li>
<li>
<p>nfatacc. noninterstate fatal acc.</p>
</li>
<li>
<p>ninjacc. noninterstate injur acc.</p>
</li>
<li>
<p>npdoacc. noninterstate property acc.</p>
</li>
<li>
<p>rtotacc. tot. acc. on rural 65 mph roads</p>
</li>
<li>
<p>rfatacc. fat. acc. on rural 65 mph roads</p>
</li>
<li>
<p>rinjacc. inj. acc. on rural 65 mph roads</p>
</li>
<li>
<p>rpdoacc. prp. acc. on rural 65 mph roads</p>
</li>
<li>
<p>ushigh. acc. on U.S. highways</p>
</li>
<li>
<p>cntyrds. acc. on county roads</p>
</li>
<li>
<p>strtes. acc. on state routes</p>
</li>
<li>
<p>t. time trend</p>
</li>
<li>
<p>tsq. t^2</p>
</li>
<li>
<p>unem. state unemployment rate</p>
</li>
<li>
<p>spdlaw. =1 after 65 mph in effect</p>
</li>
<li>
<p>beltlaw. =1 after seatbelt law</p>
</li>
<li>
<p>wkends. # weekends in month</p>
</li>
<li>
<p>feb. =1 if month is Feb.</p>
</li>
<li>
<p>mar.</p>
</li>
<li>
<p>apr.</p>
</li>
<li>
<p>may.</p>
</li>
<li>
<p>jun.</p>
</li>
<li>
<p>jul.</p>
</li>
<li>
<p>aug.</p>
</li>
<li>
<p>sep.</p>
</li>
<li>
<p>oct.</p>
</li>
<li>
<p>nov.</p>
</li>
<li>
<p>dec.</p>
</li>
<li>
<p>ltotacc. log(totacc)</p>
</li>
<li>
<p>lfatacc. log(fatacc)</p>
</li>
<li>
<p>prcfat. 100*(fatacc/totacc)</p>
</li>
<li>
<p>prcrfat. 100*(rfatacc/rtotacc)</p>
</li>
<li>
<p>lrtotacc. log(rtotacc)</p>
</li>
<li>
<p>lrfatacc. log(rfatacc)</p>
</li>
<li>
<p>lntotacc. log(ntotacc)</p>
</li>
<li>
<p>lnfatacc. log(nfatacc)</p>
</li>
<li>
<p>prcnfat. 100*(nfatacc/ntotacc)</p>
</li>
<li>
<p>lushigh. log(ushigh)</p>
</li>
<li>
<p>lcntyrds. log(cntyrds)</p>
</li>
<li>
<p>lstrtes. log(strtes)</p>
</li>
<li>
<p>spdt. spdlaw*t</p>
</li>
<li>
<p>beltt. beltlaw*t</p>
</li>
<li>
<p>prcfat_1. prcfat[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(traffic2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-63675.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-63675.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-traffic2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-63675.json';</script>