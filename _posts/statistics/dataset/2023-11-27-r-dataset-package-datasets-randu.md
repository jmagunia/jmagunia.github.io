---
title: R Dataset / Package datasets / randu
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">randu</span> data set which pertains to Random Numbers from Congruential Generator RANDU. The <span class="mono">randu</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">randu</span> data set in R by issuing the following command at the console <span class="mono">data("randu")</span>. This will load the data into a variable called <span class="mono">randu</span>. If R says the <span class="mono">randu</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62905.csv">randu R data set</a></span>. The size of this file is about 10,670 bytes.</p><h2>Random Numbers from Congruential Generator RANDU</h2>
<h3>Description</h3>
<p>400 triples of successive random numbers were taken from the VAX FORTRAN function RANDU running under VMS 1.5.</p>
<h3>Usage</h3>
<pre>randu</pre>
<h3>Format</h3>
<p>A data frame with 400 observations on 3 variables named <code>x</code>, <code>y</code> and <code>z</code> which give the first, second and third random number in the triple.</p>
<h3>Details</h3>
<p>In three dimensional displays it is evident that the triples fall on 15 parallel planes in 3-space. This can be shown theoretically to be true for all triples from the RANDU generator.</p>
<p>These particular 400 triples start 5 apart in the sequence, that is they are ((U[5i+1], U[5i+2], U[5i+3]), i= 0, ..., 399), and they are rounded to 6 decimal places.</p>
<p>Under VMS versions 2.0 and higher, this problem has been fixed.</p>
<h3>Source</h3>
<p>David Donoho</p>
<h3>Examples</h3>
<pre>
## We could re-generate the dataset by the following R code
seed &lt;- as.double(1)
RANDU &lt;- function() {
seed &lt;&lt;- ((2^16 + 3) * seed) %% (2^31)
seed/(2^31)
}
for(i in 1:400) {
U &lt;- c(RANDU(), RANDU(), RANDU(), RANDU(), RANDU())
print(round(U[1:3], 6))
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62905.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62905.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-randu.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62905.json';</script>