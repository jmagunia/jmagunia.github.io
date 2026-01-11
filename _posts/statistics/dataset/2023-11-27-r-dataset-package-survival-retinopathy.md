---
title: R Dataset / Package survival / retinopathy
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">retinopathy</span> data set which pertains to Diabetic Retinopathy. The <span class="mono">retinopathy</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">retinopathy</span> data set in R by issuing the following command at the console <span class="mono">data("retinopathy")</span>. This will load the data into a variable called <span class="mono">retinopathy</span>. If R says the <span class="mono">retinopathy</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-35602.csv">retinopathy R data set</a></span>. The size of this file is about 17,484 bytes.</p><h2>Diabetic Retinopathy</h2>
<h3>Description</h3>
<p>A trial of laser coagulation as a treatment to delay diabetic retinopathy.</p>
<h3>Usage</h3>
<pre>data("retinopathy")</pre>
<h3>Format</h3>
<p>A data frame with 394 observations on the following 9 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>numeric subject id</p>
</dd>
<dt><code>laser</code></dt>
<dd>
<p>type of laser used: <code>xenon</code> <code>argon</code></p>
</dd>
<dt><code>eye</code></dt>
<dd>
<p>which eye was treated: <code>right</code> <code>left</code></p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age at diagnosis of diabetes</p>
</dd>
<dt><code>type</code></dt>
<dd>
<p>type of diabetes: <code>juvenile</code> <code>adult</code>, (diagnosis before age 20)</p>
</dd>
<dt><code>trt</code></dt>
<dd>
<p>0 = control eye, 1 = treated eye</p>
</dd>
<dt><code>futime</code></dt>
<dd>
<p>time to loss of vision or last follow-up</p>
</dd>
<dt><code>status</code></dt>
<dd>
<p>0 = censored, 1 = loss of vision in this eye</p>
</dd>
<dt><code>risk</code></dt>
<dd>
<p>a risk score for the eye. This high risk subset is defined as a score of 6 or greater in at least one eye.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The 197 patients in this dataset were a 50% random sample of the patients with "high-risk" diabetic retinopathy as defined by the Diabetic Retinopathy Study (DRS). Each patient had one eye randomized to laser treatment and the other eye received no treatment, and has two observations in the data set. For each eye, the event of interest was the time from initiation of treatment to the time when visual acuity dropped below 5/200 two visits in a row. Thus there is a built-in lag time of approximately 6 months (visits were every 3 months). Survival times in this dataset are the actual time to vision loss in months, minus the minimum possible time to event (6.5 months). Censoring was caused by death, dropout, or end of the study.</p>
<h3>References</h3>
<p>W. J. Huster, R. Brookmeyer and S. G. Self (1989). Modelling paired survival data with covariates, Biometrics 45:145-156.</p>
<p>A. L. Blair, D. R. Hadden, J. A. Weaver, D. B. Archer, P. B. Johnston and C. J. Maguire (1976). The 5-year prognosis for vision in diabetes, American Journal of Ophthalmology, 81:383-396.</p>
<h3>Examples</h3>
<pre>
coxph(Surv(futime, status) ~ type + trt + cluster(id), retinopathy)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-35602.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-35602.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-retinopathy.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-35602.json';</script>