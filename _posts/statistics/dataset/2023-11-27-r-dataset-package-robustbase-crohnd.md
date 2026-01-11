---
title: R Dataset / Package robustbase / CrohnD
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CrohnD</span> data set which pertains to Crohn's Disease Adverse Events Data. The <span class="mono">CrohnD</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">CrohnD</span> data set in R by issuing the following command at the console <span class="mono">data("CrohnD")</span>. This will load the data into a variable called <span class="mono">CrohnD</span>. If R says the <span class="mono">CrohnD</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-21590.csv">CrohnD R data set</a></span>. The size of this file is about 4,700 bytes.</p><h2>Crohn's Disease Adverse Events Data</h2>
<h3>Description</h3>
<p>Data set issued from a study of the adverse events of a drug on 117 patients affected by Crohn's disease (a chronic inflammatory disease of the intestines).</p>
<h3>Usage</h3>
<pre>data(CrohnD)</pre>
<h3>Format</h3>
<p>A data frame with 117 observations on the following 9 variables.</p>
<dl>
<dt><code>ID</code></dt>
<dd>
<p>the numeric patient IDs</p>
</dd>
<dt><code>nrAdvE</code></dt>
<dd>
<p>the number of adverse events</p>
</dd>
<dt><code>BMI</code></dt>
<dd>
<p>Body MASS Index, i.e., <i>weight[kg] / (height[m])^2</i>.</p>
</dd>
<dt><code>height</code></dt>
<dd>
<p>in cm</p>
</dd>
<dt><code>country</code></dt>
<dd>
<p>a factor with levels <code>0</code> and <code>1</code></p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>the person's gender, a binary factor with levels <code>M</code> <code>F</code></p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>in years, a numeric vector</p>
</dd>
<dt><code>weight</code></dt>
<dd>
<p>in kilograms, a numeric vector</p>
</dd>
<dt><code>treat</code></dt>
<dd>
<p>how CD was treated: a factor with levels <code>0</code>, <code>1</code> and <code>2</code>, meaning placebo, drug 1 and drug 2.</p>
</dd>
</dl>
<h3>Source</h3>
<p>form the authors of the reference, with permission by the original data collecting agency.</p>
<h3>References</h3>
<p>Serigne N. Lô and Elvezio Ronchetti (2006). Robust Second Order Accurate Inference for Generalized Linear Models. Technical report, University of Geneva, Switzerland.</p>
<h3>Examples</h3>
<pre>
data(CrohnD)
str(CrohnD)
with(CrohnD, ftable(table(sex,country, treat)))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-21590.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-21590.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-crohnd.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-21590.json';</script>