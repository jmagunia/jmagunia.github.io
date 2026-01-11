---
title: R Dataset / Package DAAG / mignonette
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mignonette</span> data set which pertains to Darwin's Wild Mignonette Data. The <span class="mono">mignonette</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">mignonette</span> data set in R by issuing the following command at the console <span class="mono">data("mignonette")</span>. This will load the data into a variable called <span class="mono">mignonette</span>. If R says the <span class="mono">mignonette</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85120.csv">mignonette R data set</a></span>. The size of this file is about 277 bytes.</p><h2>Darwin's Wild Mignonette Data</h2>
<h3>Description</h3>
<p>Data which compare the heights of crossed plants with self-fertilized plants. Plants were paired within the pots in which they were grown, with one on one side and one on the other.</p>
<h3>Usage</h3>
<pre>mignonette</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>cross</dt>
<dd>
<p>heights of the crossed plants</p>
</dd>
<dt>self</dt>
<dd>
<p>heights of the self-fertilized plants</p>
</dd>
</dl>
<h3>Source</h3>
<p>Darwin, Charles. 1877. The Effects of Cross and Self Fertilisation in the Vegetable Kingdom. Appleton and Company, New York.</p>
<h3>Examples</h3>
<pre>
print("Is Pairing Helpful? - Example 4.3.1")attach(mignonette)
plot(cross ~ self, pch=rep(c(4,1), c(3,12))); abline(0,1) 
abline(mean(cross-self), 1, lty=2)
detach(mignonette)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85120.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85120.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-mignonette.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85120.json';</script>