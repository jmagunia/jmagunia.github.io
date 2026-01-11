---
title: R Dataset / Package survival / genfan
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">genfan</span> data set which pertains to Generator fans. The <span class="mono">genfan</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">genfan</span> data set in R by issuing the following command at the console <span class="mono">data("genfan")</span>. This will load the data into a variable called <span class="mono">genfan</span>. If R says the <span class="mono">genfan</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66053.csv">genfan R data set</a></span>. The size of this file is about 437 bytes.</p><h2>Generator fans</h2>
<h3>Description</h3>
<p>The data come from a field engineering study of the time to failure of diesel generator fans. The ultimate goal was to decide whether or not to replace the working fans with a higher quality fan to prevent future failures. Seventy generators were studied. For each one, the number of hours of running time from its first being put into service until fan failure or until the end of the study(whichever came first) was recorded.</p>
<h3>Usage</h3>
<pre>data("genfan")</pre>
<h3>Format</h3>
<p>A data frame with 70 observations on the following 2 variables.</p>
<dl>
<dt><code>hours</code></dt>
<dd>
<p>hours of service</p>
</dd>
<dt><code>status</code></dt>
<dd>
<p>1=failure, 0=censored</p>
</dd>
</dl>
<h3>References</h3>
<p>Nelson, Journal of Quality Technology, 1:27-52, 1969</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66053.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66053.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-genfan.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66053.json';</script>