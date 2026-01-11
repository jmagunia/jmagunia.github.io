---
title: R Dataset / Package vcd / BrokenMarriage
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">BrokenMarriage</span> data set which pertains to Broken Marriage Data. The <span class="mono">BrokenMarriage</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">BrokenMarriage</span> data set in R by issuing the following command at the console <span class="mono">data("BrokenMarriage")</span>. This will load the data into a variable called <span class="mono">BrokenMarriage</span>. If R says the <span class="mono">BrokenMarriage</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-92430.csv">BrokenMarriage R data set</a></span>. The size of this file is about 467 bytes.</p><h2>Broken Marriage Data</h2>
<h3>Description</h3>
<p>Data from the Danish Welfare Study about broken marriages or permanent relationships depending on gender and social rank.</p>
<h3>Usage</h3>
<pre>
data("BrokenMarriage")
</pre>
<h3>Format</h3>
<p>A data frame with 20 observations and 4 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>gender</dt>
<dd>
<p>factor indicating gender (male, female).</p>
</dd>
<dt>rank</dt>
<dd>
<p>factor indicating social rank (I, II, III, IV, V).</p>
</dd>
<dt>broken</dt>
<dd>
<p>factor indicating whether the marriage or permanent relationship was broken (yes, no).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, page 177.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
data("BrokenMarriage")
structable(~ ., data = BrokenMarriage)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-92430.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-92430.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-brokenmarriage.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-92430.json';</script>