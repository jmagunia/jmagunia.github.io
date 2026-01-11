---
title: R Dataset / Package HSAUR / mastectomy
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mastectomy</span> data set which pertains to Survival Times after Mastectomy of Breast Cancer Patients . The <span class="mono">mastectomy</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">mastectomy</span> data set in R by issuing the following command at the console <span class="mono">data("mastectomy")</span>. This will load the data into a variable called <span class="mono">mastectomy</span>. If R says the <span class="mono">mastectomy</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-91668.csv">mastectomy R data set</a></span>. The size of this file is about 669 bytes.</p><h2>Survival Times after Mastectomy of Breast Cancer Patients</h2>
<h3>Description</h3>
<p>Survival times in months after mastectomy of women with breast cancer. The cancers are classified as having metastized or not based on a histochemical marker.</p>
<h3>Usage</h3>
<pre>data("mastectomy")</pre>
<h3>Format</h3>
<p>A data frame with 42 observations on the following 3 variables.</p>
<dl>
<dt>time</dt>
<dd>
<p>survival times in months.</p>
</dd>
<dt>event</dt>
<dd>
<p>a logical indicating if the event was observed (<code>TRUE</code>) or if the survival time was censored (<code>FALSE</code>).</p>
</dd>
<dt>metastized</dt>
<dd>
<p>a factor at levels <code>yes</code> and <code>no</code>.</p>
</dd>
</dl>
<h3>Source</h3>
<p>B. S. Everitt and S. Rabe-Hesketh (2001), <em>Analysing Medical Data using S-PLUS</em>, Springer, New York, USA.</p>
<h3>Examples</h3>
<pre>data("mastectomy", package = "HSAUR")
table(mastectomy$metastized)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-91668.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-91668.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-mastectomy.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-91668.json';</script>