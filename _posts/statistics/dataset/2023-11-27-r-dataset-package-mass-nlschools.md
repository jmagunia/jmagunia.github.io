---
title: R Dataset / Package MASS / nlschools
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nlschools</span> data set which pertains to Eighth-Grade Pupils in the Netherlands. The <span class="mono">nlschools</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">nlschools</span> data set in R by issuing the following command at the console <span class="mono">data("nlschools")</span>. This will load the data into a variable called <span class="mono">nlschools</span>. If R says the <span class="mono">nlschools</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-53083.csv">nlschools R data set</a></span>. The size of this file is about 56,037 bytes.</p><h2>Eighth-Grade Pupils in the Netherlands</h2>
<h3>Description</h3>
<p>Snijders and Bosker (1999) use as a running example a study of 2287 eighth-grade pupils (aged about 11) in 132 classes in 131 schools in the Netherlands. Only the variables used in our examples are supplied.</p>
<h3>Usage</h3>
<pre>
nlschools
</pre>
<h3>Format</h3>
<p>This data frame contains 2287 rows and the following columns:</p>
<dl>
<dt><code>lang</code></dt>
<dd>
<p>language test score.</p>
</dd>
<dt><code>IQ</code></dt>
<dd>
<p>verbal IQ.</p>
</dd>
<dt><code>class</code></dt>
<dd>
<p>class ID.</p>
</dd>
<dt><code>GS</code></dt>
<dd>
<p>class size: number of eighth-grade pupils recorded in the class (there may be others: see <code>COMB</code>, and some may have been omitted with missing values).</p>
</dd>
<dt><code>SES</code></dt>
<dd>
<p>social-economic status of pupil's family.</p>
</dd>
<dt><code>COMB</code></dt>
<dd>
<p>were the pupils taught in a multi-grade class (<code>0/1</code>)? Classes which contained pupils from grades 7 and 8 are coded <code>1</code>, but only eighth-graders were tested.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Snijders, T. A. B. and Bosker, R. J. (1999) <em>Multilevel Analysis. An Introduction to Basic and Advanced Multilevel Modelling.</em> London: Sage.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>nl1 &lt;- within(nlschools, {
IQave &lt;- tapply(IQ, class, mean)[as.character(class)]
IQ &lt;- IQ - IQave
})
cen &lt;- c("IQ", "IQave", "SES")
nl1[cen] &lt;- scale(nl1[cen], center = TRUE, scale = FALSE)nl.lme &lt;- nlme::lme(lang ~ IQ*COMB + IQave + SES,
random = ~ IQ | class, data = nl1)
summary(nl.lme)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-53083.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-53083.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-nlschools.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-53083.json';</script>