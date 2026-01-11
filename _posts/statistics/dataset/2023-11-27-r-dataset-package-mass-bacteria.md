---
title: R Dataset / Package MASS / bacteria
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bacteria</span> data set which pertains to Presence of Bacteria after Drug Treatments. The <span class="mono">bacteria</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">bacteria</span> data set in R by issuing the following command at the console <span class="mono">data("bacteria")</span>. This will load the data into a variable called <span class="mono">bacteria</span>. If R says the <span class="mono">bacteria</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80516.csv">bacteria R data set</a></span>. The size of this file is about 6,588 bytes.</p><h2>Presence of Bacteria after Drug Treatments</h2>
<h3>Description</h3>
<p>Tests of the presence of the bacteria <em>H. influenzae</em> in children with otitis media in the Northern Territory of Australia.</p>
<h3>Usage</h3>
<pre>
bacteria
</pre>
<h3>Format</h3>
<p>This data frame has 220 rows and the following columns:</p>
<dl>
<dt>y</dt>
<dd>
<p>presence or absence: a factor with levels <code>n</code> and <code>y</code>.</p>
</dd>
<dt>ap</dt>
<dd>
<p>active/placebo: a factor with levels <code>a</code> and <code>p</code>.</p>
</dd>
<dt>hilo</dt>
<dd>
<p>hi/low compliance: a factor with levels <code>hi</code> amd <code>lo</code>.</p>
</dd>
<dt>week</dt>
<dd>
<p>numeric: week of test.</p>
</dd>
<dt>ID</dt>
<dd>
<p>subject ID: a factor.</p>
</dd>
<dt>trt</dt>
<dd>
<p>a factor with levels <code>placebo</code>, <code>drug</code> and <code>drug+</code>, a re-coding of <code>ap</code> and <code>hilo</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Dr A. Leach tested the effects of a drug on 50 children with a history of otitis media in the Northern Territory of Australia. The children were randomized to the drug or the a placebo, and also to receive active encouragement to comply with taking the drug.</p>
<p>The presence of <em>H. influenzae</em> was checked at weeks 0, 2, 4, 6 and 11: 30 of the checks were missing and are not included in this data frame.</p>
<h3>Source</h3>
<p>Dr Amanda Leach <em>via</em> Mr James McBroom.</p>
<h3>References</h3>
<p>Menzies School of Health Research 1999–2000 Annual Report. p.20. <a href="http://www.menzies.edu.au/icms_docs/172302_2000_Annual_report.pdf">http://www.menzies.edu.au/icms_docs/172302_2000_Annual_report.pdf</a>.</p>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
contrasts(bacteria$trt) &lt;- structure(contr.sdif(3),
 dimnames = list(NULL, c("drug", "encourage")))
## fixed effects analyses
summary(glm(y ~ trt * week, binomial, data = bacteria))
summary(glm(y ~ trt + week, binomial, data = bacteria))
summary(glm(y ~ trt + I(week &gt; 2), binomial, data = bacteria))# conditional random-effects analysis
library(survival)
bacteria$Time &lt;- rep(1, nrow(bacteria))
coxph(Surv(Time, unclass(y)) ~ week + strata(ID),
data = bacteria, method = "exact")
coxph(Surv(Time, unclass(y)) ~ factor(week) + strata(ID),
data = bacteria, method = "exact")
coxph(Surv(Time, unclass(y)) ~ I(week &gt; 2) + strata(ID),
data = bacteria, method = "exact")# PQL glmm analysis
library(nlme)
summary(glmmPQL(y ~ trt + I(week &gt; 2), random = ~ 1 | ID,
family = binomial, data = bacteria))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80516.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80516.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-bacteria.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80516.json';</script>