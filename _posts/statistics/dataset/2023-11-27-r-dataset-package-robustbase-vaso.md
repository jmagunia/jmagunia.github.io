---
title: R Dataset / Package robustbase / vaso
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">vaso</span> data set which pertains to Vaso Constriction Skin Data Set. The <span class="mono">vaso</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">vaso</span> data set in R by issuing the following command at the console <span class="mono">data("vaso")</span>. This will load the data into a variable called <span class="mono">vaso</span>. If R says the <span class="mono">vaso</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90448.csv">vaso R data set</a></span>. The size of this file is about 440 bytes.</p><h2>Vaso Constriction Skin Data Set</h2>
<h3>Description</h3>
<p>Finney's data on vaso constriction in the skin of the digits.</p>
<h3>Usage</h3>
<pre>data(vaso)</pre>
<h3>Format</h3>
<p>A data frame with 39 observations on the following 3 variables.</p>
<dl>
<dt><code>Volume</code></dt>
<dd>
<p>Inhaled volume of air</p>
</dd>
<dt><code>Rate</code></dt>
<dd>
<p>Rate of inhalation</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>vector of 0 or 1 values.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data taken from Finney (1947) were obtained in a carefully controlled study in human physiology where a reflex “vaso constriction” may occur in the skin of the digits after taking a single deep breath. The response y is the occurence (y = 1) or non-occurence (y = 0) of vaso constriction in the skin of the digits of a subject after he or she inhaled a certain volume of air at a certain rate. The responses of three subjects are available. The first contributed 9 responses, the second contributed 8 responses, and the third contributed 22 responses.</p>
<p>Although the data represent repeated measurements, an analysis that assumes independent observations may be applied, as claimed by Pregibon (1981).</p>
<h3>Source</h3>
<p>Finney, D.J. (1947) The estimation from individual records of the relationship between dose and quantal response. <em>Biometrika</em> <b>34</b>, 320–334</p>
<h3>References</h3>
<p>Atkinson, A.C. and Riani, M. (2000) <em>Robust Diagnostic Regression Analysis</em>, First Edition. New York: Springer, Table A.23.</p>
<p>Fahrmeir, L. and Tutz, G. (2001) <em>Multivariate Statistical Modelling Based on Generalized Linear Models</em>, Springer, Table 4.2.</p>
<p>Kuensch, H.R., Stefanski, A. and Carrol, R.J. (1989) Conditionally unbiased bounded influence estimation in general regression models, with applications to generalized linear models, <em>JASA</em> <b>84</b>, 460–466.</p>
<p>Pregibon, D. (1981) Logistic regression diagnostics, <em>Annals of Statistics</em> <b>9</b>, 705–724.</p>
<h3>Examples</h3>
<pre>
data(vaso)
str(vaso)
pairs(vaso)glmV &lt;- glm(Y ~ log(Volume) + log(Rate), family=binomial, data=vaso)
summary(glmV)
## --&gt;example(glmrob)showing classical &amp; robust GLM
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90448.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90448.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-vaso.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90448.json';</script>