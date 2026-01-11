---
title: R Dataset / Package DAAG / spam7
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">spam7</span> data set which pertains to Spam E-mail Data. The <span class="mono">spam7</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">spam7</span> data set in R by issuing the following command at the console <span class="mono">data("spam7")</span>. This will load the data into a variable called <span class="mono">spam7</span>. If R says the <span class="mono">spam7</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83873.csv">spam7 R data set</a></span>. The size of this file is about 101,669 bytes.</p><h2>Spam E-mail Data</h2>
<h3>Description</h3>
<p>The data consist of 4601 email items, of which 1813 items were identified as spam.</p>
<h3>Usage</h3>
<pre>spam7</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>crl.tot</dt>
<dd>
<p>total length of words in capitals</p>
</dd>
<dt>dollar</dt>
<dd>
<p>number of occurrences of the \$ symbol</p>
</dd>
<dt>bang</dt>
<dd>
<p>number of occurrences of the ! symbol</p>
</dd>
<dt>money</dt>
<dd>
<p>number of occurrences of the word ‘money’</p>
</dd>
<dt>n000</dt>
<dd>
<p>number of occurrences of the string ‘000’</p>
</dd>
<dt>make</dt>
<dd>
<p>number of occurrences of the word ‘make’</p>
</dd>
<dt>yesno</dt>
<dd>
<p>outcome variable, a factor with levels <code>n</code> not spam, <code>y</code> spam</p>
</dd>
</dl>
<h3>Source</h3>
<p>George Forman, Hewlett-Packard Laboratories</p>
<p>These data are available from the University of California at Irvine Repository of Machine Learning Databases and Domain Theories. The address is: <a href="http://www.ics.uci.edu/~Here">http://www.ics.uci.edu/~Here</a></p>
<h3>Examples</h3>
<pre>
require(rpart)
spam.rpart &lt;- rpart(formula = yesno ~ crl.tot + dollar + bang +
 money + n000 + make, data=spam7)
plot(spam.rpart)
text(spam.rpart)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83873.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83873.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-spam7.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83873.json';</script>