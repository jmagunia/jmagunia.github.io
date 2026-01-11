---
title: R Dataset / Package psych / peas
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">peas</span> data set which pertains to Galton's Peas. The <span class="mono">peas</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">peas</span> data set in R by issuing the following command at the console <span class="mono">data("peas")</span>. This will load the data into a variable called <span class="mono">peas</span>. If R says the <span class="mono">peas</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45631.csv">peas R data set</a></span>. The size of this file is about 6,317 bytes.</p><h2>Galton's Peas</h2>
<h3>Description</h3>
<p>Francis Galton introduced the correlation coefficient with an analysis of the similarities of the parent and child generation of 700 sweet peas.</p>
<h3>Usage</h3>
<pre>data(peas)</pre>
<h3>Format</h3>
<p>A data frame with 700 observations on the following 2 variables.</p>
<dl>
<dt><code>parent</code></dt>
<dd>
<p>The mean diameter of the mother pea for 700 peas</p>
</dd>
<dt><code>child</code></dt>
<dd>
<p>The mean diameter of the daughter pea for 700 sweet peas</p>
</dd>
</dl>
<h3>Details</h3>
<p>Galton's introduction of the correlation coefficient was perhaps the most important contribution to the study of individual differences. This data set allows a graphical analysis of the data set. There are two different graphic examples. One shows the regression lines for both relationships, the other finds the correlation as well.</p>
<h3>Source</h3>
<p>Stanton, Jeffrey M. (2001) Galton, Pearson, and the Peas: A brief history of linear regression for statistics intstructors, Journal of Statistics Education, 9. (retrieved from the web from <a href="http://www.amstat.org/publications/jse/v9n3/stanton.html">http://www.amstat.org/publications/jse/v9n3/stanton.html</a>) reproduces the table from Galton, 1894, Table 2.</p>
<p>The data were generated from this table.</p>
<h3>References</h3>
<p>Galton, Francis (1877) Typical laws of heredity. paper presented to the weekly evening meeting of the Royal Institution, London. Volume VIII (66) is the first reference to this data set. The data appear in</p>
<p>Galton, Francis (1894) Natural Inheritance (5th Edition), New York: MacMillan).</p>
<h3>See Also</h3>
<p>The other Galton data sets: <code>heights</code>, <code>galton</code>,<code>cubits</code></p>
<h3>Examples</h3>
<pre>
data(peas)
pairs.panels(peas,lm=TRUE,xlim=c(14,22),ylim=c(14,22),main="Galton's Peas")
describe(peas)
pairs.panels(peas,main="Galton's Peas")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45631.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45631.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-peas.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45631.json';</script>