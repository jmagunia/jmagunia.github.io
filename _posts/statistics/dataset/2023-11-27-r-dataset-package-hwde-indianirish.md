---
title: R Dataset / Package hwde / IndianIrish
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">IndianIrish</span> data set which pertains to Observed genotype frequencies at MN and S loci, for 2 populations. The <span class="mono">IndianIrish</span> data set is found in the <span class="mono">hwde</span> R package. You can load the <span class="mono">IndianIrish</span> data set in R by issuing the following command at the console <span class="mono">data("IndianIrish")</span>. This will load the data into a variable called <span class="mono">IndianIrish</span>. If R says the <span class="mono">IndianIrish</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("hwde")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88437.csv">IndianIrish R data set</a></span>. The size of this file is about 433 bytes.</p><h2>Observed genotype frequencies at MN and S loci, for 2 populations</h2>
<h3>Description</h3>
<p>The <code>IndianIrish</code> data frame has 18 rows and 4 columns. The data are genotype frequencies for two locations, for Xavante Indian and Irish populations respectively</p>
<h3>Usage</h3>
<pre>data(IndianIrish)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Population</dt>
<dd>
<p>Factor with levels: <code>Indian</code> and <code>Irish</code></p>
</dd>
<dt>locus1</dt>
<dd>
<p>Factor with levels: <code>MM</code>, <code>MN</code> and <code>NN</code></p>
</dd>
<dt>locus2</dt>
<dd>
<p>Factor with levels: <code>SS</code>, <code>Ss</code> and <code>ss</code></p>
</dd>
<dt>Observed</dt>
<dd>
<p>a numeric vector giving the frequency for each category of the tale</p>
</dd>
</dl>
<h3>Source</h3>
<p>Mourant et al (1977) and Huttley and Wilson (2000).</p>
<h3>References</h3>
<p>1. Huttley, G.A. and Wilson, S.R. 2000. Testing for concordant equilibria between population samples. <em>Genetics</em> <b>156</b>, 2127-2135.2. Mourant, A.E., Kopec, A.C. and Domaniewska-Sobczak, K. 1976. <em>The Distribution of the Human Blood Groups and Other Polymorphisms.</em> Oxford University Press.3. Weir, B.S. 1996. <em>Genetic Data Analysis II.</em> Sinauer.</p>
<h3>See Also</h3>
<p><code>hwde</code></p>
<h3>Examples</h3>
<pre>
data(IndianIrish)
hwde(data=IndianIrish)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88437.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88437.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hwde-indianirish.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88437.json';</script>