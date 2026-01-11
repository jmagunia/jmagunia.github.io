---
title: R Dataset / Package wooldridge / cement
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cement</span> data set which pertains to cement. The <span class="mono">cement</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">cement</span> data set in R by issuing the following command at the console <span class="mono">data("cement")</span>. This will load the data into a variable called <span class="mono">cement</span>. If R says the <span class="mono">cement</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65354.csv">cement R data set</a></span>. The size of this file is about 78,861 bytes.</p><h2>cement</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(cement) into the console.</p>
<h3>Usage</h3>
<pre>
data(cement)
</pre>
<h3>Format</h3>
<p>A data.frame with 312 rows and 30 variables:</p>
<ul>
<li>
<p>year. 1964-1989</p>
</li>
<li>
<p>month. 1-12</p>
</li>
<li>
<p>prccem. BLS ppi for cement</p>
</li>
<li>
<p>ipcem. industrial prod. index, cement</p>
</li>
<li>
<p>prcpet. ppi for crude petroleum</p>
</li>
<li>
<p>rresc. real residential construction</p>
</li>
<li>
<p>rnonc. real nonres. construction</p>
</li>
<li>
<p>ip. aggregate index of indus. prod.</p>
</li>
<li>
<p>rdefs. real defense spending</p>
</li>
<li>
<p>milemp. military employment</p>
</li>
<li>
<p>gprc. log(prccem) - log(prccem[_n-1])</p>
</li>
<li>
<p>gcem. log(ipcem) - log(ipcem[_n-1])</p>
</li>
<li>
<p>gprcpet. log(prcpet) - log(prcpet[_n-1])</p>
</li>
<li>
<p>gres. log(rresc) - log(rresc[_n-1])</p>
</li>
<li>
<p>gnon. log(rnonc) - log(rnonc[_n-1])</p>
</li>
<li>
<p>gip. log(ip) - log(ip[_n-1])</p>
</li>
<li>
<p>gdefs. log(rdefs) - log(rdefs[_n-1])</p>
</li>
<li>
<p>gmilemp. log(milemp) - log(milemp[_n-1])</p>
</li>
<li>
<p>jan. =1 if month == 1</p>
</li>
<li>
<p>feb. =1 if month == 2</p>
</li>
<li>
<p>mar. =1 if month == 3</p>
</li>
<li>
<p>apr. =1 if month == 4</p>
</li>
<li>
<p>may. =1 if month == 5</p>
</li>
<li>
<p>jun. =1 if month == 6</p>
</li>
<li>
<p>jul. =1 if month == 7</p>
</li>
<li>
<p>aug. =1 if month == 8</p>
</li>
<li>
<p>sep. =1 if month == 9</p>
</li>
<li>
<p>oct. =1 if month == 10</p>
</li>
<li>
<p>nov. =1 if month == 11</p>
</li>
<li>
<p>dec. =1 if month == 12</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(cement)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65354.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65354.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-cement.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65354.json';</script>