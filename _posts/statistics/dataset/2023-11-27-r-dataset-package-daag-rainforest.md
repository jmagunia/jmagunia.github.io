---
title: R Dataset / Package DAAG / rainforest
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rainforest</span> data set which pertains to Rainforest Data. The <span class="mono">rainforest</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">rainforest</span> data set in R by issuing the following command at the console <span class="mono">data("rainforest")</span>. This will load the data into a variable called <span class="mono">rainforest</span>. If R says the <span class="mono">rainforest</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52121.csv">rainforest R data set</a></span>. The size of this file is about 2,280 bytes.</p><h2>Rainforest Data</h2>
<h3>Description</h3>
<p>The <code>rainforest</code> data frame has 65 rows and 7 columns.</p>
<h3>Usage</h3>
<pre>rainforest</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>dbh</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>wood</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>bark</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>root</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>rootsk</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>branch</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>species</dt>
<dd>
<p>a factor with levels <code>Acacia mabellae</code>, <code>C. fraseri</code>, <code>Acmena smithii</code>, <code>B. myrtifolia</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>J. Ash, Australian National University</p>
<h3>References</h3>
<p>Ash, J. and Helman, C. (1990) Floristics and vegetation biomass of a forest catchment, Kioloa, south coastal N.S.W. Cunninghamia, 2: 167-182.</p>
<h3>Examples</h3>
<pre>
table(rainforest$species)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52121.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52121.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-rainforest.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52121.json';</script>