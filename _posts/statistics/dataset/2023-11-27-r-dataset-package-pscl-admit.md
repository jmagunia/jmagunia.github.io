---
title: R Dataset / Package pscl / admit
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">admit</span> data set which pertains to Applications to a Political Science PhD Program. The <span class="mono">admit</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">admit</span> data set in R by issuing the following command at the console <span class="mono">data("admit")</span>. This will load the data into a variable called <span class="mono">admit</span>. If R says the <span class="mono">admit</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76383.csv">admit R data set</a></span>. The size of this file is about 1,960 bytes.</p><h2>Applications to a Political Science PhD Program</h2>
<h3>Description</h3>
<p>Ordinal ratings (faculty evaluations) of applicants to a Political Science PhD Program.</p>
<h3>Usage</h3>
<pre>data(admit)</pre>
<h3>Format</h3>
<p>A data frame with 106 observations on the following 6 variables.</p>
<dl>
<dt><code>score</code></dt>
<dd>
<p>an ordered factor with levels <code>1</code> &lt; <code>2</code> &lt; <code>3</code> &lt; <code>4</code> &lt; <code>5</code></p>
</dd>
<dt><code>gre.quant</code></dt>
<dd>
<p>applicant's score on the quantitative section of the GRE; the maximum score is 800</p>
</dd>
<dt><code>gre.verbal</code></dt>
<dd>
<p>applicant's score on the verbal section of the GRE; the maximum score is 800</p>
</dd>
<dt><code>ap</code></dt>
<dd>
<p>1 if the applicant indicated an interest in American politics; 0 otherwise</p>
</dd>
<dt><code>pt</code></dt>
<dd>
<p>1 if the applicant indicated an interest in Political Theory; 0 otherwise</p>
</dd>
<dt><code>female</code></dt>
<dd>
<p>1 for female applicants; 0 otherwise</p>
</dd>
</dl>
<h3>References</h3>
<p>Jackman, Simon. 2004. "What Do We Learn From Graduate Admissions Committees?: A Multiple-Rater, Latent Variable Model, with Incomplete Discrete and Continuous Indicators." <em>Political Analysis</em>. 12(4):400-424.</p>
<h3>Examples</h3>
<pre>
data(admit)
summary(admit)
## ordered probit model
op1 &lt;- MASS::polr(score ~ gre.quant + gre.verbal + ap + pt + female,
Hess=TRUE,
data=admit,
method="probit")
summary(op1)
hitmiss(op1)
logLik(op1)
pR2(op1) 
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76383.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76383.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-admit.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76383.json';</script>