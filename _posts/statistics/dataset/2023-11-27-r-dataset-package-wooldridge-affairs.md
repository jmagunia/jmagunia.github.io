---
title: R Dataset / Package wooldridge / affairs
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">affairs</span> data set which pertains to affairs. The <span class="mono">affairs</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">affairs</span> data set in R by issuing the following command at the console <span class="mono">data("affairs")</span>. This will load the data into a variable called <span class="mono">affairs</span>. If R says the <span class="mono">affairs</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75749.csv">affairs R data set</a></span>. The size of this file is about 26,473 bytes.</p><h2>affairs</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(affairs) into the console.</p>
<h3>Usage</h3>
<pre>
data(affairs)
</pre>
<h3>Format</h3>
<p>A data.frame with 601 rows and 19 variables:</p>
<ul>
<li>
<p>id. identifier</p>
</li>
<li>
<p>male. =1 if male</p>
</li>
<li>
<p>age. in years</p>
</li>
<li>
<p>yrsmarr. years married</p>
</li>
<li>
<p>kids. =1 if have kids</p>
</li>
<li>
<p>relig. 5 = very relig., 4 = somewhat, 3 = slightly, 2 = not at all, 1 = anti</p>
</li>
<li>
<p>educ. years schooling</p>
</li>
<li>
<p>occup. occupation, reverse Hollingshead scale</p>
</li>
<li>
<p>ratemarr. 5 = vry hap marr, 4 = hap than avg, 3 = avg, 2 = smewht unhap, 1 = vry unhap</p>
</li>
<li>
<p>naffairs. number of affairs within last year</p>
</li>
<li>
<p>affair. =1 if had at least one affair</p>
</li>
<li>
<p>vryhap. ratemarr == 5</p>
</li>
<li>
<p>hapavg. ratemarr == 4</p>
</li>
<li>
<p>avgmarr. ratemarr == 3</p>
</li>
<li>
<p>unhap. ratemarr == 2</p>
</li>
<li>
<p>vryrel. relig == 5</p>
</li>
<li>
<p>smerel. relig == 4</p>
</li>
<li>
<p>slghtrel. relig == 3</p>
</li>
<li>
<p>notrel. relig == 2</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(affairs)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75749.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75749.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-affairs.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75749.json';</script>