---
title: R Dataset / Package DAAG / primates
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">primates</span> data set which pertains to Primate Body and Brain Weights. The <span class="mono">primates</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">primates</span> data set in R by issuing the following command at the console <span class="mono">data("primates")</span>. This will load the data into a variable called <span class="mono">primates</span>. If R says the <span class="mono">primates</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76006.csv">primates R data set</a></span>. The size of this file is about 106 bytes.</p><h2>Primate Body and Brain Weights</h2>
<h3>Description</h3>
<p>A subset of <code>Animals</code> data frame from the MASS library. It contains the average body and brain measurements of five primates.</p>
<h3>Usage</h3>
<pre>primates</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Bodywt</dt>
<dd>
<p>a numeric vector consisting of the body weights (in kg) of five different primates</p>
</dd>
<dt>Brainwt</dt>
<dd>
<p>a numeric vector consisting of the corresponding brain weights (in g)</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) Robust Regression and Outlier Detection. Wiley, p. 57.</p>
<h3>Examples</h3>
<pre>
attach(primates)
plot(x=Bodywt, y=Brainwt, pch=16,
 xlab="Body weight (kg)", ylab="Brain weight (g)",
 xlim=c(5,300), ylim=c(0,1500))
chw &lt;- par()$cxy[1]
chh &lt;- par()$cxy[2]
text(x=Bodywt+chw, y=Brainwt+c(-.1,0,0,.1,0)*chh,
 labels=row.names(primates), adj=0)
detach(primates)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76006.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76006.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-primates.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76006.json';</script>