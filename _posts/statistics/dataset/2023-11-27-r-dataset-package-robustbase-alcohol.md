---
title: R Dataset / Package robustbase / alcohol
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">alcohol</span> data set which pertains to Alcohol Solubility in Water Data. The <span class="mono">alcohol</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">alcohol</span> data set in R by issuing the following command at the console <span class="mono">data("alcohol")</span>. This will load the data into a variable called <span class="mono">alcohol</span>. If R says the <span class="mono">alcohol</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-77431.csv">alcohol R data set</a></span>. The size of this file is about 1,482,997 bytes.</p><h2>Alcohol Solubility in Water Data</h2>
<h3>Description</h3>
<p>The solubility of alcohols in water is important in understanding alcohol transport in living organisms. This dataset from (Romanelli et al., 2001) contains physicochemical characteristics of 44 aliphatic alcohols. The aim of the experiment was the prediction of the solubility on the basis of molecular descriptors.</p>
<h3>Usage</h3>
<pre>data(alcohol)</pre>
<h3>Format</h3>
<p>A data frame with 44 observations on the following 7 numeric variables.</p>
<dl>
<dt><code>SAG</code></dt>
<dd>
<p>solvent accessible surface-bounded molecular volume.</p>
</dd>
<dt><code>V</code></dt>
<dd>
<p>volume</p>
</dd>
<dt><code>logPC</code></dt>
<dd>
<p>Log(PC); PC = octanol-water partitions coefficient</p>
</dd>
<dt><code>P</code></dt>
<dd>
<p>polarizability</p>
</dd>
<dt><code>RM</code></dt>
<dd>
<p>molar refractivity</p>
</dd>
<dt><code>Mass</code></dt>
<dd>
<p>the mass</p>
</dd>
<dt><code>logSolubility</code></dt>
<dd>
<p>ln(Solubility), the response.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The website accompanying the MMY-book: <a href="http://www.wiley.com/legacy/wileychi/robust_statistics">http://www.wiley.com/legacy/wileychi/robust_statistics</a></p>
<h3>References</h3>
<p>Maronna, R.A., Martin, R.D. and Yohai, V.J. (2006) <em>Robust Statistics, Theory and Methods</em>, Wiley.</p>
<h3>Examples</h3>
<pre>
data(alcohol)
## version of data set with trivial names, as
s.alcohol &lt;- alcohol
names(s.alcohol) &lt;- paste("Col", 1:7, sep='')
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-77431.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-77431.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-alcohol.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-77431.json';</script>