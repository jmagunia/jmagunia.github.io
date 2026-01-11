---
title: R Dataset / Package DAAG / socsupport
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">socsupport</span> data set which pertains to Social Support Data. The <span class="mono">socsupport</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">socsupport</span> data set in R by issuing the following command at the console <span class="mono">data("socsupport")</span>. This will load the data into a variable called <span class="mono">socsupport</span>. If R says the <span class="mono">socsupport</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30455.csv">socsupport R data set</a></span>. The size of this file is about 11,652 bytes.</p><h2>Social Support Data</h2>
<h3>Description</h3>
<p>Data from a survey on social and other kinds of support.</p>
<h3>Usage</h3>
<pre>socsupport</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>gender</dt>
<dd>
<p>a factor with levels <code>female</code>, <code>male</code></p>
</dd>
<dt>age</dt>
<dd>
<p>age, in years, with levels <code>18-20</code>, <code>21-24</code>, <code>25-30</code>, <code>31-40</code>,<code>40+</code></p>
</dd>
<dt>country</dt>
<dd>
<p>a factor with levels <code>australia</code>, <code>other</code></p>
</dd>
<dt>marital</dt>
<dd>
<p>a factor with levels <code>married</code>, <code>other</code>, <code>single</code></p>
</dd>
<dt>livewith</dt>
<dd>
<p>a factor with levels <code>alone</code>, <code>friends</code>, <code>other</code>, <code>parents</code>, <code>partner</code>, <code>residences</code></p>
</dd>
<dt>employment</dt>
<dd>
<p>a factor with levels <code>employed fulltime</code>, <code>employed part-time</code>, <code>govt assistance</code>, <code>other</code>, <code>parental support</code></p>
</dd>
<dt>firstyr</dt>
<dd>
<p>a factor with levels <code>first year</code>, <code>other</code></p>
</dd>
<dt>enrolment</dt>
<dd>
<p>a factor with levels <code>full-time</code>, <code>part-time</code>, <code>&lt;NA&gt;</code></p>
</dd>
<dt>emotional</dt>
<dd>
<p>summary of 5 questions on emotional support availability</p>
</dd>
<dt>emotionalsat</dt>
<dd>
<p>summary of 5 questions on emotional support satisfaction</p>
</dd>
<dt>tangible</dt>
<dd>
<p>summary of 4 questions on availability of tangible support</p>
</dd>
<dt>tangiblesat</dt>
<dd>
<p>summary of 4 questions on satisfaction with tangible support</p>
</dd>
<dt>affect</dt>
<dd>
<p>summary of 3 questions on availability of affectionate support sources</p>
</dd>
<dt>affectsat</dt>
<dd>
<p>summary of 3 questions on satisfaction with affectionate support sources</p>
</dd>
<dt>psi</dt>
<dd>
<p>summary of 3 questions on availability of positive social interaction</p>
</dd>
<dt>psisat</dt>
<dd>
<p>summary of 3 questions on satisfaction with positive social interaction</p>
</dd>
<dt>esupport</dt>
<dd>
<p>summary of 4 questions on extent of emotional support sources</p>
</dd>
<dt>psupport</dt>
<dd>
<p>summary of 4 questions on extent of practical support sources</p>
</dd>
<dt>supsources</dt>
<dd>
<p>summary of 4 questions on extent of social support sources (formerly, socsupport)</p>
</dd>
<dt>BDI</dt>
<dd>
<p>Score on the Beck depression index (summary of 21 questions)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Melissa Manning, Psychology, Australian National University</p>
<h3>Examples</h3>
<pre>
attach(socsupport)not.na &lt;- apply(socsupport[,9:19], 1, function(x)!any(is.na(x)))
ss.pr1 &lt;- princomp(as.matrix(socsupport[not.na, 9:19]), cor=TRUE)
pairs(ss.pr1$scores[,1:3])
sort(-ss.pr1$scores[,1])# Minus the largest value appears first
pause()not.na[36] &lt;- FALSE
ss.pr &lt;- princomp(as.matrix(socsupport[not.na, 9:19]), cor=TRUE)
summary(ss.pr)# Examine the contribution of the components
pause()# We now regress BDI on the first six principal components:
ss.lm &lt;- lm(BDI[not.na] ~ ss.pr$scores[, 1:6], data=socsupport)
summary(ss.lm)$coef
pause()ss.pr$loadings[,1]
plot(BDI[not.na] ~ss.pr$scores[ ,1], col=as.numeric(gender), 
pch=as.numeric(gender),xlab ="1st principal component", ylab="BDI")
topleft &lt;- par()$usr[c(1,4)]
legend(topleft[1], topleft[2], col=1:2, pch=1:2, legend=levels(gender))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30455.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30455.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-socsupport.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30455.json';</script>