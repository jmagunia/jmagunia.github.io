---
title: R Dataset / Package DAAG / medExpenses
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">medExpenses</span> data set which pertains to Family Medical Expenses. The <span class="mono">medExpenses</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">medExpenses</span> data set in R by issuing the following command at the console <span class="mono">data("medExpenses")</span>. This will load the data into a variable called <span class="mono">medExpenses</span>. If R says the <span class="mono">medExpenses</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50449.csv">medExpenses R data set</a></span>. The size of this file is about 250 bytes.</p><h2>Family Medical Expenses</h2>
<h3>Description</h3>
<p>The <code>medExpenses</code> data frame contains average weekly medical expenses including drugs for 33 families randomly sampled from a community of 600 families which contained 2700 individuals. These data were collected in the 1970's at an unknown location.</p>
<h3>Usage</h3>
<pre>medExpenses</pre>
<h3>Format</h3>
<dl>
<dt>familysize</dt>
<dd>
<p>number of individuals in a family</p>
</dd>
<dt>expenses</dt>
<dd>
<p>average weekly cost for medical expenses per family member</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
with(medExpenses, weighted.mean(expenses, familysize))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50449.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50449.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-medexpenses.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50449.json';</script>