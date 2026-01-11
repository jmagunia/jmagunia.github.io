---
title: R Dataset / Package KMsurv / kidrecurr
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kidrecurr</span> data set which pertains to Data on 38 individuals using a kidney dialysis machine. The <span class="mono">kidrecurr</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">kidrecurr</span> data set in R by issuing the following command at the console <span class="mono">data("kidrecurr")</span>. This will load the data into a variable called <span class="mono">kidrecurr</span>. If R says the <span class="mono">kidrecurr</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-39079.csv">kidrecurr R data set</a></span>. The size of this file is about 1,016 bytes.</p><h2>Data on 38 individuals using a kidney dialysis machine</h2>
<h3>Description</h3>
<p>Data on 38 individuals using a kidney dialysis machine See Problem 13.5.2</p>
<h3>Usage</h3>
<pre>data(kidrecurr)</pre>
<h3>Format</h3>
<p>A data frame with 38 observations on the following 10 variables.</p>
<dl>
<dt>patient</dt>
<dd>
<p>Patient number</p>
</dd>
<dt>time1</dt>
<dd>
<p>Time one of recurrence of infection, days</p>
</dd>
<dt>infect1</dt>
<dd>
<p>Indicator infection one (1=yes, 0=no)</p>
</dd>
<dt>time2</dt>
<dd>
<p>Time two of recurrence of infection, days</p>
</dd>
<dt>infect2</dt>
<dd>
<p>Indicator infection two (1=yes, 0=no)</p>
</dd>
<dt>age</dt>
<dd>
<p>Patient's age</p>
</dd>
<dt>gender</dt>
<dd>
<p>Patient's gender</p>
</dd>
<dt>gn</dt>
<dd>
<p>Disease type GN (1=yes, 0=no)</p>
</dd>
<dt>an</dt>
<dd>
<p>Disease type AN (1=yes, 0=no)</p>
</dd>
<dt>pkd</dt>
<dd>
<p>Disease type PKD (1=yes, 0=no)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer. McGilchrist and Aisbett 47 (1991):461-466.</p>
<h3>Examples</h3>
<pre>
data(kidrecurr)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-39079.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-39079.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-kidrecurr.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-39079.json';</script>