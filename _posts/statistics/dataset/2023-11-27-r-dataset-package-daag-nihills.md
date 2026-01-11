---
title: R Dataset / Package DAAG / nihills
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nihills</span> data set which pertains to Record times for Northern Ireland mountain running events. The <span class="mono">nihills</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">nihills</span> data set in R by issuing the following command at the console <span class="mono">data("nihills")</span>. This will load the data into a variable called <span class="mono">nihills</span>. If R says the <span class="mono">nihills</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-55880.csv">nihills R data set</a></span>. The size of this file is about 1,366 bytes.</p><h2>Record times for Northern Ireland mountain running events</h2>
<h3>Description</h3>
<p>Data were from the 2007 calendar for the Northern Ireland Mountain Running Association.</p>
<h3>Usage</h3>
<pre>data(nihills)</pre>
<h3>Format</h3>
<p>A data frame with 23 observations on the following 4 variables.</p>
<dl>
<dt><code>dist</code></dt>
<dd>
<p>distances in miles</p>
</dd>
<dt><code>climb</code></dt>
<dd>
<p>amount of climb in feet</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>record time in hours for males</p>
</dd>
<dt><code>timef</code></dt>
<dd>
<p>record time in hours for females</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data make an interesting comparison with the dataset <code>hills2000</code> in the DAAG package.</p>
<h3>Source</h3>
<p>For more recent information, see <a href="http://www.nimra.org.uk/index.php/fixtures/">http://www.nimra.org.uk/index.php/fixtures/</a></p>
<h3>Examples</h3>
<pre>
data(nihills)
lm(formula = log(time) ~ log(dist) + log(climb), data = nihills)
lm(formula = log(time) ~ log(dist) + log(climb/dist), data = nihills)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-55880.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-55880.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-nihills.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-55880.json';</script>