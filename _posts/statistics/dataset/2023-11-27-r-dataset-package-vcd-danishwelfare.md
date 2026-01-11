---
title: R Dataset / Package vcd / DanishWelfare
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">DanishWelfare</span> data set which pertains to Danish Welfare Study Data. The <span class="mono">DanishWelfare</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">DanishWelfare</span> data set in R by issuing the following command at the console <span class="mono">data("DanishWelfare")</span>. This will load the data into a variable called <span class="mono">DanishWelfare</span>. If R says the <span class="mono">DanishWelfare</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97168.csv">DanishWelfare R data set</a></span>. The size of this file is about 6,841 bytes.</p><h2>Danish Welfare Study Data</h2>
<h3>Description</h3>
<p>Data from the Danish Welfare Study.</p>
<h3>Usage</h3>
<pre>data("DanishWelfare")</pre>
<h3>Format</h3>
<p>A data frame with 180 observations and 5 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>Alcohol</dt>
<dd>
<p>factor indicating daily alcohol consumption: less than 1 unit (&lt;1), 1-2 units (1-2) or more than 2 units (&gt;2). 1 unit is approximately 1 bottle of beer or 4cl 40% alcohol.</p>
</dd>
<dt>Income</dt>
<dd>
<p>factor indicating income group in 1000 DKK (0-50, 50-100, 100-150, &gt;150).</p>
</dd>
<dt>Status</dt>
<dd>
<p>factor indicating marriage status (Widow, Married, Unmarried).</p>
</dd>
<dt>Urban</dt>
<dd>
<p>factor indicating urbanization: Copenhagen (Copenhagen), Suburbian Copenhagen (SubCopenhagen), three largest cities (LargeCity), other cities (City), countryside (Country).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, page 205.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
data("DanishWelfare")
ftable(xtabs(Freq ~ ., data = DanishWelfare))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97168.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97168.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-danishwelfare.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97168.json';</script>