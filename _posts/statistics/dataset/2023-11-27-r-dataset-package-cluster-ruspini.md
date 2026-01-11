---
title: R Dataset / Package cluster / ruspini
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ruspini</span> data set which pertains to Ruspini Data. The <span class="mono">ruspini</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">ruspini</span> data set in R by issuing the following command at the console <span class="mono">data("ruspini")</span>. This will load the data into a variable called <span class="mono">ruspini</span>. If R says the <span class="mono">ruspini</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11814.csv">ruspini R data set</a></span>. The size of this file is about 498 bytes.</p><h2>Ruspini Data</h2>
<h3>Description</h3>
<p>The Ruspini data set, consisting of 75 points in four groups that is popular for illustrating clustering techniques.</p>
<h3>Usage</h3>
<pre>data(ruspini)</pre>
<h3>Format</h3>
<p>A data frame with 75 observations on 2 variables giving the x and y coordinates of the points, respectively.</p>
<h3>Source</h3>
<p>E. H. Ruspini (1970) Numerical methods for fuzzy clustering. <em>Inform. Sci.</em> <b>2</b>, 319–350.</p>
<h3>References</h3>
<p>see those in <code>agnes</code>.</p>
<h3>Examples</h3>
<pre>
data(ruspini)## Plot similar to Figure 4 in Stryuf et al (1996)
## Not run: plot(pam(ruspini, 4), ask = TRUE)
## Plot similar to Figure 6 in Stryuf et al (1996)
plot(fanny(ruspini, 5))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11814.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11814.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-ruspini.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11814.json';</script>