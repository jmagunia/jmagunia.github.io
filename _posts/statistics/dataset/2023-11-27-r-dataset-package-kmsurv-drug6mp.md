---
title: R Dataset / Package KMsurv / drug6mp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">drug6mp</span> data set which pertains to data from Section 1.2. The <span class="mono">drug6mp</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">drug6mp</span> data set in R by issuing the following command at the console <span class="mono">data("drug6mp")</span>. This will load the data into a variable called <span class="mono">drug6mp</span>. If R says the <span class="mono">drug6mp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-40681.csv">drug6mp R data set</a></span>. The size of this file is about 282 bytes.</p><h2>data from Section 1.2</h2>
<h3>Description</h3>
<p>The <code>drug6mp</code> data frame has 21 rows and 5 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>pair</dt>
<dd>
<p>pair number</p>
</dd>
<dt>remstat</dt>
<dd>
<p>Remission status at randomization (1=partial, 2=complete)</p>
</dd>
<dt>t1</dt>
<dd>
<p>Time to relapse for placebo patients, months</p>
</dd>
<dt>t2</dt>
<dd>
<p>Time to relapse for 6-MP patients, months</p>
</dd>
<dt>relapse</dt>
<dd>
<p>Relapse indicator (0=censored, 1=relapse) for 6-MP patients</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer. Freireich et al. (1963) <em>Blood</em> 21: 699-716.</p>
<h3>Examples</h3>
<pre>
data(drug6mp)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-40681.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-40681.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-drug6mp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-40681.json';</script>