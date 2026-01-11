---
title: R Dataset / Package psych / heights
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">heights</span> data set which pertains to A data.frame of the Galton (1888) height and cubit data set.. The <span class="mono">heights</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">heights</span> data set in R by issuing the following command at the console <span class="mono">data("heights")</span>. This will load the data into a variable called <span class="mono">heights</span>. If R says the <span class="mono">heights</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-40709.csv">heights R data set</a></span>. The size of this file is about 3,140 bytes.</p><h2>A data.frame of the Galton (1888) height and cubit data set.</h2>
<h3>Description</h3>
<p>Francis Galton introduced the 'co-relation' in 1888 with a paper discussing how to measure the relationship between two variables. His primary example was the relationship between height and forearm length. The data table (<code>cubits</code>) is taken from Galton (1888). Unfortunately, there seem to be some errors in the original data table in that the marginal totals do not match the table.</p>
<p>The data frame, <code>heights</code>, is converted from this table using <code>table2df</code>.</p>
<h3>Usage</h3>
<pre>data(heights)</pre>
<h3>Format</h3>
<p>A data frame with 348 observations on the following 2 variables.</p>
<dl>
<dt><code>height</code></dt>
<dd>
<p>Height in inches</p>
</dd>
<dt><code>cubit</code></dt>
<dd>
<p>Forearm length in inches</p>
</dd>
</dl>
<h3>Details</h3>
<p>Sir Francis Galton (1888) published the first demonstration of the correlation coefficient. The regression (or reversion to mediocrity) of the height to the length of the left forearm (a cubit) was found to .8. The original table <code>cubits</code> is taken from Galton (1888). There seem to be some errors in the table as published in that the row sums do not agree with the actual row sums. These data are used to create a matrix using <code>table2matrix</code> for demonstrations of analysis and displays of the data.</p>
<h3>Source</h3>
<p>Galton (1888)</p>
<h3>References</h3>
<p>Galton, Francis (1888) Co-relations and their measurement. Proceedings of the Royal Society. London Series,45,135-145,</p>
<h3>See Also</h3>
<p><code>table2matrix</code>, <code>table2df</code>, <code>cubits</code>, <code>ellipses</code>, <code>galton</code></p>
<h3>Examples</h3>
<pre>
data(heights)
ellipses(heights,n=1,main="Galton's co-relation data set")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-40709.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-40709.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-heights.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-40709.json';</script>