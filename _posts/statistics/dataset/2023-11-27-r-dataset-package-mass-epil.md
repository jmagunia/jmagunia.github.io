---
title: R Dataset / Package MASS / epil
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">epil</span> data set which pertains to Seizure Counts for Epileptics. The <span class="mono">epil</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">epil</span> data set in R by issuing the following command at the console <span class="mono">data("epil")</span>. This will load the data into a variable called <span class="mono">epil</span>. If R says the <span class="mono">epil</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-19894.csv">epil R data set</a></span>. The size of this file is about 14,894 bytes.</p><h2>Seizure Counts for Epileptics</h2>
<h3>Description</h3>
<p>Thall and Vail (1990) give a data set on two-week seizure counts for 59 epileptics. The number of seizures was recorded for a baseline period of 8 weeks, and then patients were randomly assigned to a treatment group or a control group. Counts were then recorded for four successive two-week periods. The subject's age is the only covariate.</p>
<h3>Usage</h3>
<pre>
epil
</pre>
<h3>Format</h3>
<p>This data frame has 236 rows and the following 9 columns:</p>
<dl>
<dt><code>y</code></dt>
<dd>
<p>the count for the 2-week period.</p>
</dd>
<dt><code>trt</code></dt>
<dd>
<p>treatment, <code>"placebo"</code> or <code>"progabide"</code>.</p>
</dd>
<dt><code>base</code></dt>
<dd>
<p>the counts in the baseline 8-week period.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>subject's age, in years.</p>
</dd>
<dt><code>V4</code></dt>
<dd>
<p><code>0/1</code> indicator variable of period 4.</p>
</dd>
<dt><code>subject</code></dt>
<dd>
<p>subject number, 1 to 59.</p>
</dd>
<dt><code>period</code></dt>
<dd>
<p>period, 1 to 4.</p>
</dd>
<dt><code>lbase</code></dt>
<dd>
<p>log-counts for the baseline period, centred to have zero mean.</p>
</dd>
<dt><code>lage</code></dt>
<dd>
<p>log-ages, centred to have zero mean.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Thall, P. F. and Vail, S. C. (1990) Some covariance models for longitudinal count data with over-dispersion. <em>Biometrics</em> <b>46</b>, 657–671.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth Edition. Springer.</p>
<h3>Examples</h3>
<pre>
summary(glm(y ~ lbase*trt + lage + V4, family = poisson,
data = epil), cor = FALSE)
epil2 &lt;- epil[epil$period == 1, ]
epil2["period"] &lt;- rep(0, 59); epil2["y"] &lt;- epil2["base"]
epil["time"] &lt;- 1; epil2["time"] &lt;- 4
epil2 &lt;- rbind(epil, epil2)
epil2$pred &lt;- unclass(epil2$trt) * (epil2$period &gt; 0)
epil2$subject &lt;- factor(epil2$subject)
epil3 &lt;- aggregate(epil2, list(epil2$subject, epil2$period &gt; 0),
 function(x) if(is.numeric(x)) sum(x) else x[1])
epil3$pred &lt;- factor(epil3$pred,
 labels = c("base", "placebo", "drug"))contrasts(epil3$pred) &lt;- structure(contr.sdif(3),
dimnames = list(NULL, c("placebo-base", "drug-placebo")))
summary(glm(y ~ pred + factor(subject) + offset(log(time)),
family = poisson, data = epil3), cor = FALSE)summary(glmmPQL(y ~ lbase*trt + lage + V4,
random = ~ 1 | subject,
family = poisson, data = epil))
summary(glmmPQL(y ~ pred, random = ~1 | subject,
family = poisson, data = epil3))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-19894.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-19894.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-epil.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-19894.json';</script>