---
title: R Dataset / Package robustbase / bushfire
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bushfire</span> data set which pertains to Campbell Bushfire Data . The <span class="mono">bushfire</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">bushfire</span> data set in R by issuing the following command at the console <span class="mono">data("bushfire")</span>. This will load the data into a variable called <span class="mono">bushfire</span>. If R says the <span class="mono">bushfire</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31777.csv">bushfire R data set</a></span>. The size of this file is about 751 bytes.</p><h2>Campbell Bushfire Data</h2>
<h3>Description</h3>
<p>This data set was used by Campbell (1984) to locate bushfire scars. The dataset contains satelite measurements on five frequency bands, corresponding to each of 38 pixels.</p>
<h3>Usage</h3>
<pre>data(bushfire)</pre>
<h3>Format</h3>
<p>A data frame with 38 observations on 5 variables.</p>
<h3>Source</h3>
<p>Maronna, R.A. and Yohai, V.J. (1995) The Behavoiur of the Stahel-Donoho Robust Multivariate Estimator. <em>Journal of the American Statistical Association</em> <b>90</b>, 330–341.</p>
<h3>Examples</h3>
<pre>
data(bushfire)
plot(bushfire)
covMcd(bushfire)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31777.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31777.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-bushfire.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31777.json';</script>