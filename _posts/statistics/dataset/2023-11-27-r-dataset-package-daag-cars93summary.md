---
title: R Dataset / Package DAAG / Cars93.summary
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Cars93.summary</span> data set which pertains to A Summary of the Cars93 Data set. The <span class="mono">Cars93.summary</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">Cars93.summary</span> data set in R by issuing the following command at the console <span class="mono">data("Cars93.summary")</span>. This will load the data into a variable called <span class="mono">Cars93.summary</span>. If R says the <span class="mono">Cars93.summary</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-46669.csv">Cars93.summary R data set</a></span>. The size of this file is about 162 bytes.</p><h2>A Summary of the Cars93 Data set</h2>
<h3>Description</h3>
<p>The <code>Cars93.summary</code> data frame has 6 rows and 4 columns created from information in the <code>Cars93</code> data set in the Venables and Ripley MASS package. Each row corresponds to a different class of car (e.g. Compact, Large, etc.).</p>
<h3>Usage</h3>
<pre>Cars93.summary</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Min.passengers</dt>
<dd>
<p>minimum passenger capacity for each class of car</p>
</dd>
<dt>Max.passengers</dt>
<dd>
<p>maximum passenger capacity for each class of car</p>
</dd>
<dt>No.of.cars</dt>
<dd>
<p>number of cars in each class</p>
</dd>
<dt>abbrev</dt>
<dd>
<p>a factor with levels <code>C</code> Compact, <code>L</code> Large, <code>M</code> Mid-Size, <code>Sm</code> Small, <code>Sp</code> Sporty, <code>V</code> Van</p>
</dd>
</dl>
<h3>Source</h3>
<p>Lock, R. H. (1993) 1993 New Car Data. Journal of Statistics Education 1(1)</p>
<h3>References</h3>
<p>MASS library</p>
<h3>Examples</h3>
<pre>
type &lt;- Cars93.summary$abbrev
type &lt;- Cars93.summary[,4]
type &lt;- Cars93.summary[,"abbrev"]
type &lt;- Cars93.summary[[4]] # Take the object that is stored
# in the fourth list element.
type
pause()attach(Cars93.summary)
# R can now access the columns of Cars93.summary directly
abbrev
detach("Cars93.summary")
pause()#To change the name of the \verb!abbrev! variable (the fourth column)
names(Cars93.summary)[4] &lt;- "code"
pause()#To change all of the names, try
names(Cars93.summary) &lt;- c("minpass","maxpass","number","code")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-46669.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-46669.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cars93summary.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-46669.json';</script>