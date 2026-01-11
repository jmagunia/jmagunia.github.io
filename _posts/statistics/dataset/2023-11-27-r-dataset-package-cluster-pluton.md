---
title: R Dataset / Package cluster / pluton
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">pluton</span> data set which pertains to Isotopic Composition Plutonium Batches. The <span class="mono">pluton</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">pluton</span> data set in R by issuing the following command at the console <span class="mono">data("pluton")</span>. This will load the data into a variable called <span class="mono">pluton</span>. If R says the <span class="mono">pluton</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-26544.csv">pluton R data set</a></span>. The size of this file is about 1,184 bytes.</p><h2>Isotopic Composition Plutonium Batches</h2>
<h3>Description</h3>
<p>The <code>pluton</code> data frame has 45 rows and 4 columns, containing percentages of isotopic composition of 45 Plutonium batches.</p>
<h3>Usage</h3>
<pre>data(pluton)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Pu238</dt>
<dd>
<p>the percentages of <i>(238)Pu</i>, always less than 2 percent.</p>
</dd>
<dt>Pu239</dt>
<dd>
<p>the percentages of <i>(239)Pu</i>, typically between 60 and 80 percent (from neutron capture of Uranium, <i>(238)U</i>).</p>
</dd>
<dt>Pu240</dt>
<dd>
<p>percentage of the plutonium 240 isotope.</p>
</dd>
<dt>Pu241</dt>
<dd>
<p>percentage of the plutonium 241 isotope.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Note that the percentage of plutonium~242 can be computed from the other four percentages, see the examples.</p>
<p>In the reference below it is explained why it is very desirable to combine these plutonium patches in three groups of similar size.</p>
<h3>Source</h3>
<p>Available as ‘<span class="file">pluton.dat</span>’ from the archive of the University of Antwerpen, ‘<span class="file">..../datasets/clusplot-examples.tar.gz</span>’, no longer available.</p>
<h3>References</h3>
<p>Rousseeuw, P.J. and Kaufman, L and Trauwaert, E. (1996) Fuzzy clustering using scatter matrices, <em>Computational Statistics and Data Analysis</em> <b>23</b>(1), 135–151.</p>
<h3>Examples</h3>
<pre>
data(pluton)hist(apply(pluton,1,sum), col = "gray") # between 94% and 100%
pu5 &lt;- pluton
pu5$Pu242 &lt;- 100 - apply(pluton,1,sum) # the remaining isotope.
pairs(pu5)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-26544.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-26544.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-pluton.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-26544.json';</script>