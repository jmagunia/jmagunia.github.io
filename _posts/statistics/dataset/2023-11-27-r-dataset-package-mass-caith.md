---
title: R Dataset / Package MASS / caith
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">caith</span> data set which pertains to Colours of Eyes and Hair of People in Caithness. The <span class="mono">caith</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">caith</span> data set in R by issuing the following command at the console <span class="mono">data("caith")</span>. This will load the data into a variable called <span class="mono">caith</span>. If R says the <span class="mono">caith</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34292.csv">caith R data set</a></span>. The size of this file is about 130 bytes.</p><h2>Colours of Eyes and Hair of People in Caithness</h2>
<h3>Description</h3>
<p>Data on the cross-classification of people in Caithness, Scotland, by eye and hair colour. The region of the UK is particularly interesting as there is a mixture of people of Nordic, Celtic and Anglo-Saxon origin.</p>
<h3>Usage</h3>
<pre>
caith
</pre>
<h3>Format</h3>
<p>A 4 by 5 table with rows the eye colours (blue, light, medium, dark) and columns the hair colours (fair, red, medium, dark, black).</p>
<h3>Source</h3>
<p>Fisher, R.A. (1940) The precision of discriminant functions. <em>Annals of Eugenics (London)</em> <b>10</b>, 422–429.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
corresp(caith)
dimnames(caith)[[2]] &lt;- c("F", "R", "M", "D", "B")
par(mfcol=c(1,3))
plot(corresp(caith, nf=2)); title("symmetric")
plot(corresp(caith, nf=2), type="rows"); title("rows")
plot(corresp(caith, nf=2), type="col"); title("columns")
par(mfrow=c(1,1))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34292.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34292.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-caith.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34292.json';</script>