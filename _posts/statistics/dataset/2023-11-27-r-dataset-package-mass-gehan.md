---
title: R Dataset / Package MASS / gehan
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">gehan</span> data set which pertains to Remission Times of Leukaemia Patients. The <span class="mono">gehan</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">gehan</span> data set in R by issuing the following command at the console <span class="mono">data("gehan")</span>. This will load the data into a variable called <span class="mono">gehan</span>. If R says the <span class="mono">gehan</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38139.csv">gehan R data set</a></span>. The size of this file is about 685 bytes.</p><h2>Remission Times of Leukaemia Patients</h2>
<h3>Description</h3>
<p>A data frame from a trial of 42 leukaemia patients. Some were treated with the drug <em>6-mercaptopurine</em> and the rest are controls. The trial was designed as matched pairs, both withdrawn from the trial when either came out of remission.</p>
<h3>Usage</h3>
<pre>
gehan
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>pair</code></dt>
<dd>
<p>label for pair.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>remission time in weeks.</p>
</dd>
<dt><code>cens</code></dt>
<dd>
<p>censoring, 0/1.</p>
</dd>
<dt><code>treat</code></dt>
<dd>
<p>treatment, control or 6-MP.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Cox, D. R. and Oakes, D. (1984) <em>Analysis of Survival Data.</em> Chapman &amp; Hall, p. 7. Taken from</p>
<p>Gehan, E.A. (1965) A generalized Wilcoxon test for comparing arbitrarily single-censored samples. <em>Biometrika</em> <b>52</b>, 203–233.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
library(survival)
gehan.surv &lt;- survfit(Surv(time, cens) ~ treat, data = gehan,
 conf.type = "log-log")
summary(gehan.surv)
survreg(Surv(time, cens) ~ factor(pair) + treat, gehan, dist = "exponential")
summary(survreg(Surv(time, cens) ~ treat, gehan, dist = "exponential"))
summary(survreg(Surv(time, cens) ~ treat, gehan))
gehan.cox &lt;- coxph(Surv(time, cens) ~ treat, gehan)
summary(gehan.cox)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38139.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38139.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-gehan.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38139.json';</script>