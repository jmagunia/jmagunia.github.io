---
title: R Dataset / Package wooldridge / recid
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">recid</span> data set which pertains to recid. The <span class="mono">recid</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">recid</span> data set in R by issuing the following command at the console <span class="mono">data("recid")</span>. This will load the data into a variable called <span class="mono">recid</span>. If R says the <span class="mono">recid</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76409.csv">recid R data set</a></span>. The size of this file is about 80,931 bytes.</p><h2>recid</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(recid) into the console.</p>
<h3>Usage</h3>
<pre>
data(recid)
</pre>
<h3>Format</h3>
<p>A data.frame with 1445 rows and 18 variables:</p>
<ul>
<li>
<p>black. =1 if black</p>
</li>
<li>
<p>alcohol. =1 if alcohol problems</p>
</li>
<li>
<p>drugs. =1 if drug history</p>
</li>
<li>
<p>super. =1 if release supervised</p>
</li>
<li>
<p>married. =1 if married when incarc.</p>
</li>
<li>
<p>felon. =1 if felony sentence</p>
</li>
<li>
<p>workprg. =1 if in N.C. pris. work prg.</p>
</li>
<li>
<p>property. =1 if property crime</p>
</li>
<li>
<p>person. =1 if crime against person</p>
</li>
<li>
<p>priors. # prior convictions</p>
</li>
<li>
<p>educ. years of schooling</p>
</li>
<li>
<p>rules. # rules violations in prison</p>
</li>
<li>
<p>age. in months</p>
</li>
<li>
<p>tserved. time served, rounded to months</p>
</li>
<li>
<p>follow. length follow period, months</p>
</li>
<li>
<p>durat. min(time until return, follow)</p>
</li>
<li>
<p>cens. =1 if duration right censored</p>
</li>
<li>
<p>ldurat. log(durat)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(recid)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76409.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76409.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-recid.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76409.json';</script>