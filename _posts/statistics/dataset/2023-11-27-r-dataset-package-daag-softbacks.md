---
title: R Dataset / Package DAAG / softbacks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">softbacks</span> data set which pertains to Measurements on a Selection of Paperback Books. The <span class="mono">softbacks</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">softbacks</span> data set in R by issuing the following command at the console <span class="mono">data("softbacks")</span>. This will load the data into a variable called <span class="mono">softbacks</span>. If R says the <span class="mono">softbacks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50870.csv">softbacks R data set</a></span>. The size of this file is about 85 bytes.</p><h2>Measurements on a Selection of Paperback Books</h2>
<h3>Description</h3>
<p>This is a subset of the <code>allbacks</code> data frame which gives measurements on the volume and weight of 8 paperback books.</p>
<h3>Usage</h3>
<pre>softbacks</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>volume</dt>
<dd>
<p>a numeric vector giving the book volumes in cubic centimeters</p>
</dd>
<dt>weight</dt>
<dd>
<p>a numeric vector giving the weights in grams</p>
</dd>
</dl>
<h3>Source</h3>
<p>The bookshelf of J. H. Maindonald.</p>
<h3>Examples</h3>
<pre>
print("Outliers in Simple Regression - Example 5.2")
paperback.lm &lt;- lm(weight ~ volume, data=softbacks)
summary(paperback.lm)
plot(paperback.lm)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50870.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50870.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-softbacks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50870.json';</script>