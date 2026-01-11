---
title: R Dataset / Package survival / myeloid
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">myeloid</span> data set which pertains to Acute myeloid leukemia. The <span class="mono">myeloid</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">myeloid</span> data set in R by issuing the following command at the console <span class="mono">data("myeloid")</span>. This will load the data into a variable called <span class="mono">myeloid</span>. If R says the <span class="mono">myeloid</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-93283.csv">myeloid R data set</a></span>. The size of this file is about 15,574 bytes.</p><h2>Acute myeloid leukemia</h2>
<h3>Description</h3>
<p>This simulated data set is based on a trial in acute myeloid leukemia.</p>
<h3>Format</h3>
<p>A data frame with 646 observations on the following 9 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>subject identifier, 1-646</p>
</dd>
<dt><code>trt</code></dt>
<dd>
<p>treatment arm A or B</p>
</dd>
<dt><code>futime</code></dt>
<dd>
<p>time to death or last follow-up</p>
</dd>
<dt><code>death</code></dt>
<dd>
<p>1 if <code>futime</code> is a death, 0 for censoring</p>
</dd>
<dt><code>txtime</code></dt>
<dd>
<p>time to hematropetic stem cell transplant</p>
</dd>
<dt><code>crtime</code></dt>
<dd>
<p>time to complete response</p>
</dd>
<dt><code>rltime</code></dt>
<dd>
<p>time to relapse of disease</p>
</dd>
</dl>
<h3>Details</h3>
<p>This data set is used to illustrate multi-state survival curves. The correlation between within-subject event times strongly resembles that from an actual trial, but none of the actual data values are from that source.</p>
<h3>Examples</h3>
<pre>
coxph(Surv(futime, death) ~ trt, data=myeloid)
# See the mstate vignette for a more complete analysis
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-93283.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-93283.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-myeloid.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-93283.json';</script>