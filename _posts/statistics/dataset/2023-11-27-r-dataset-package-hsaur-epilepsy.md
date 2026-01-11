---
title: R Dataset / Package HSAUR / epilepsy
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">epilepsy</span> data set which pertains to Epilepsy Data . The <span class="mono">epilepsy</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">epilepsy</span> data set in R by issuing the following command at the console <span class="mono">data("epilepsy")</span>. This will load the data into a variable called <span class="mono">epilepsy</span>. If R says the <span class="mono">epilepsy</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-95524.csv">epilepsy R data set</a></span>. The size of this file is about 6,683 bytes.</p><h2>Epilepsy Data</h2>
<h3>Description</h3>
<p>A randomised clinical trial investigating the effect of an anti-epileptic drug.</p>
<h3>Usage</h3>
<pre>data("epilepsy")</pre>
<h3>Format</h3>
<p>A data frame with 236 observations on the following 6 variables.</p>
<dl>
<dt><code>treatment</code></dt>
<dd>
<p>the treatment group, a factor with levels <code>placebo</code> and <code>Progabide</code>.</p>
</dd>
<dt><code>base</code></dt>
<dd>
<p>the number of seizures before the trial.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>the age of the patient.</p>
</dd>
<dt><code>seizure.rate</code></dt>
<dd>
<p>the number of seizures (response variable).</p>
</dd>
<dt><code>period</code></dt>
<dd>
<p>treatment period, an ordered factor with levels <code>1</code> to <code>4</code>.</p>
</dd>
<dt><code>subject</code></dt>
<dd>
<p>the patient ID, a factor with levels <code>1</code> to <code>59</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>In this clinical trial, 59 patients suffering from epilepsy were randomized to groups receiving either the anti-epileptic drug Progabide or a placebo in addition to standard chemotherapy. The numbers of seizures suffered in each of four, two-week periods were recorded for each patient along with a baseline seizure count for the 8 weeks prior to being randomized to treatment and age. The main question of interest is whether taking progabide reduced the number of epileptic seizures compared with placebo.</p>
<h3>Source</h3>
<p>P. F. Thall and S. C. Vail (1990), Some covariance models for longitudinal count data with overdispersion. <em>Biometrics</em>, <b>46</b>, 657–671.</p>
<h3>Examples</h3>
<pre>data("epilepsy", package = "HSAUR")
library(lattice)
dotplot(I(seizure.rate / base) ~ period | subject, data = epilepsy, 
subset = treatment == "Progabide")
dotplot(I(seizure.rate / base) ~ period | subject, data = epilepsy, 
subset = treatment == "Progabide")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-95524.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-95524.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-epilepsy.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-95524.json';</script>