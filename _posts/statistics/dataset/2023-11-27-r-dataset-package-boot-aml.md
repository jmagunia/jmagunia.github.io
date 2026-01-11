---
title: R Dataset / Package boot / aml
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">aml</span> data set which pertains to Remission Times for Acute Myelogenous Leukaemia. The <span class="mono">aml</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">aml</span> data set in R by issuing the following command at the console <span class="mono">data("aml")</span>. This will load the data into a variable called <span class="mono">aml</span>. If R says the <span class="mono">aml</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42201.csv">aml R data set</a></span>. The size of this file is about 179 bytes.</p><h2>Remission Times for Acute Myelogenous Leukaemia</h2>
<h3>Description</h3>
<p>The <code>aml</code> data frame has 23 rows and 3 columns.</p>
<p>A clinical trial to evaluate the efficacy of maintenance chemotherapy for acute myelogenous leukaemia was conducted by Embury et al. (1977) at Stanford University. After reaching a stage of remission through treatment by chemotherapy, patients were randomized into two groups. The first group received maintenance chemotherapy and the second group did not. The aim of the study was to see if maintenance chemotherapy increased the length of the remission. The data here formed a preliminary analysis which was conducted in October 1974.</p>
<h3>Usage</h3>
<pre>
aml
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>time</code></dt>
<dd>
<p>The length of the complete remission (in weeks).</p>
</dd>
<dt><code>cens</code></dt>
<dd>
<p>An indicator of right censoring. 1 indicates that the patient had a relapse and so <code>time</code> is the length of the remission. 0 indicates that the patient had left the study or was still in remission in October 1974, that is the length of remission is right-censored.</p>
</dd>
<dt><code>group</code></dt>
<dd>
<p>The group into which the patient was randomized. Group 1 received maintenance chemotherapy, group 2 did not.</p>
</dd>
</dl>
<h3>Note</h3>
<p>Package <span class="pkg">survival</span> also has a dataset <code>aml</code>. It is the same data with different names and with <code>group</code> replaced by a factor <code>x</code>.</p>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Miller, R.G. (1981) <em>Survival Analysis</em>. John Wiley.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Embury, S.H, Elias, L., Heller, P.H., Hood, C.E., Greenberg, P.L. and Schrier, S.L. (1977) Remission maintenance therapy in acute myelogenous leukaemia. <em>Western Journal of Medicine</em>, <b>126</b>, 267-272.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42201.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42201.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-aml.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42201.json';</script>