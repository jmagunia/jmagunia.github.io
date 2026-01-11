---
title: R Dataset / Package MASS / farms
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">farms</span> data set which pertains to Ecological Factors in Farm Management. The <span class="mono">farms</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">farms</span> data set in R by issuing the following command at the console <span class="mono">data("farms")</span>. This will load the data into a variable called <span class="mono">farms</span>. If R says the <span class="mono">farms</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-19765.csv">farms R data set</a></span>. The size of this file is about 430 bytes.</p><h2>Ecological Factors in Farm Management</h2>
<h3>Description</h3>
<p>The <code>farms</code> data frame has 20 rows and 4 columns. The rows are farms on the Dutch island of Terschelling and the columns are factors describing the management of grassland.</p>
<h3>Usage</h3>
<pre>
farms
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Mois</code></dt>
<dd>
<p>Five levels of soil moisture – level 3 does not occur at these 20 farms.</p>
</dd>
<dt><code>Manag</code></dt>
<dd>
<p>Grassland management type (<code>SF</code> = standard, <code>BF</code> = biological, <code>HF</code> = hobby farming, <code>NM</code> = nature conservation).</p>
</dd>
<dt><code>Use</code></dt>
<dd>
<p>Grassland use (<code>U1</code> = hay production, <code>U2</code> = intermediate, <code>U3</code> = grazing).</p>
</dd>
<dt><code>Manure</code></dt>
<dd>
<p>Manure usage – classes <code>C0</code> to <code>C4</code>.</p>
</dd>
</dl>
<h3>Source</h3>
<p>J.C. Gower and D.J. Hand (1996) <em>Biplots</em>. Chapman &amp; Hall, Table 4.6.</p>
<p>Quoted as from:R.H.G. Jongman, C.J.F. ter Braak and O.F.R. van Tongeren (1987) <em>Data Analysis in Community and Landscape Ecology.</em> PUDOC, Wageningen.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
farms.mca &lt;- mca(farms, abbrev = TRUE)# Use levels as names
eqscplot(farms.mca$cs, type = "n")
text(farms.mca$rs, cex = 0.7)
text(farms.mca$cs, labels = dimnames(farms.mca$cs)[[1]], cex = 0.7)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-19765.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-19765.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-farms.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-19765.json';</script>