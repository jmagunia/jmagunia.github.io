---
title: R Dataset / Package HistData / Prostitutes
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Prostitutes</span> data set which pertains to Parent-Duchatelet's time-series data on the number of prostitutes in Paris. The <span class="mono">Prostitutes</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Prostitutes</span> data set in R by issuing the following command at the console <span class="mono">data("Prostitutes")</span>. This will load the data into a variable called <span class="mono">Prostitutes</span>. If R says the <span class="mono">Prostitutes</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52974.csv">Prostitutes R data set</a></span>. The size of this file is about 15,129 bytes.</p><h2>Parent-Duchatelet's time-series data on the number of prostitutes in Paris</h2>
<h3>Description</h3>
<p>A table indicating month by month, for the years 1812-1854, the number of prostitutes on the registers of the administration of the city of Paris.</p>
<h3>Usage</h3>
<pre>data(Prostitutes)</pre>
<h3>Format</h3>
<p>A data frame with 516 observations on the following 5 variables.</p>
<dl>
<dt><code>Year</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>month</code></dt>
<dd>
<p>a factor with levels <code>Apr</code> <code>Aug</code> <code>Dec</code> <code>Feb</code> <code>Jan</code> <code>Jul</code> <code>Jun</code> <code>Mar</code> <code>May</code> <code>Nov</code> <code>Oct</code> <code>Sep</code></p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>a numeric vector: number of prostitutes</p>
</dd>
<dt><code>mon</code></dt>
<dd>
<p>a numeric vector: numeric month</p>
</dd>
<dt><code>date</code></dt>
<dd>
<p>a Date</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data table was digitally scanned with OCR, and errors were corrected by comparing the yearly totals recorded in the table to the row sums of the scanned data.</p>
<h3>Source</h3>
<p>Parent-Duchatelet, A. (1857), <em>De la prostitution dans la ville de Paris</em>, 3rd ed, p. 32, 36</p>
<h3>Examples</h3>
<pre>
data(Prostitutes)
## maybe str(Prostitutes) ; plot(Prostitutes) ...
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52974.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52974.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-prostitutes.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52974.json';</script>