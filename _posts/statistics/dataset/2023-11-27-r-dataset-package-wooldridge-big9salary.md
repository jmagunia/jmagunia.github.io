---
title: R Dataset / Package wooldridge / big9salary
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">big9salary</span> data set which pertains to big9salary. The <span class="mono">big9salary</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">big9salary</span> data set in R by issuing the following command at the console <span class="mono">data("big9salary")</span>. This will load the data into a variable called <span class="mono">big9salary</span>. If R says the <span class="mono">big9salary</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88209.csv">big9salary R data set</a></span>. The size of this file is about 102,147 bytes.</p><h2>big9salary</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(big9salary) into the console.</p>
<h3>Usage</h3>
<pre>
data(big9salary)
</pre>
<h3>Format</h3>
<p>A data.frame with 786 rows and 30 variables:</p>
<ul>
<li>
<p>id. person identifier</p>
</li>
<li>
<p>year. 92, 95, or 99</p>
</li>
<li>
<p>salary. annual salary, $</p>
</li>
<li>
<p>pubindx. publication index</p>
</li>
<li>
<p>totpge. standardized total article pages</p>
</li>
<li>
<p>assist. =1 if assistant professor</p>
</li>
<li>
<p>assoc. =1 if associate professor</p>
</li>
<li>
<p>prof. =1 if full professor</p>
</li>
<li>
<p>chair. =1 if department chair</p>
</li>
<li>
<p>top20phd. =1 if Ph.D. from top 20 dept.</p>
</li>
<li>
<p>yearphd. year Ph.D. obtained</p>
</li>
<li>
<p>female. =1 if female</p>
</li>
<li>
<p>osu. =1 if Ohio State U.</p>
</li>
<li>
<p>iowa. =1 if U. Iowa</p>
</li>
<li>
<p>indiana. =1 if Indiana U.</p>
</li>
<li>
<p>purdue. =1 if Purdue U.</p>
</li>
<li>
<p>msu. =1 if Michigan State U.</p>
</li>
<li>
<p>minn. =1 if U. Minnesota</p>
</li>
<li>
<p>mich. =1 if U. Michigan</p>
</li>
<li>
<p>wisc. =1 if U. Wisconsin</p>
</li>
<li>
<p>illinois. =1 if U. Illinois</p>
</li>
<li>
<p>y92. =1 if year == 92</p>
</li>
<li>
<p>y95. =1 if year == 95</p>
</li>
<li>
<p>y99. =1 if year == 99</p>
</li>
<li>
<p>lsalary. log(salary)</p>
</li>
<li>
<p>exper. years since first teaching job</p>
</li>
<li>
<p>expersq. exper^2</p>
</li>
<li>
<p>pubindxsq. pubindx^2</p>
</li>
<li>
<p>pubindx0. =1 if pubindx == 0</p>
</li>
<li>
<p>lpubindx. log(pubindx) if pubindx &gt; 0</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(big9salary)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88209.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88209.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-big9salary.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88209.json';</script>