---
title: R Dataset / Package HSAUR / respiratory
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">respiratory</span> data set which pertains to Respiratory Illness Data . The <span class="mono">respiratory</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">respiratory</span> data set in R by issuing the following command at the console <span class="mono">data("respiratory")</span>. This will load the data into a variable called <span class="mono">respiratory</span>. If R says the <span class="mono">respiratory</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-50717.csv">respiratory R data set</a></span>. The size of this file is about 9,759 bytes.</p><h2>Respiratory Illness Data</h2>
<h3>Description</h3>
<p>The respiratory status of patients recruited for a randomised clinical multicenter trial.</p>
<h3>Usage</h3>
<pre>data("respiratory")</pre>
<h3>Format</h3>
<p>A data frame with 555 observations on the following 7 variables.</p>
<dl>
<dt><code>centre</code></dt>
<dd>
<p>the study center, a factor with levels <code>1</code> and <code>2</code>.</p>
</dd>
<dt><code>treatment</code></dt>
<dd>
<p>the treatment arm, a factor with levels <code>placebo</code> and <code>treatment</code>.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>female</code> and <code>male</code>.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>the age of the patient.</p>
</dd>
<dt><code>status</code></dt>
<dd>
<p>the respiratory status (response variable), a factor with levels <code>poor</code> and <code>good</code>.</p>
</dd>
<dt><code>month</code></dt>
<dd>
<p>the month, each patient was examined at months <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code> and <code>4</code>.</p>
</dd>
<dt><code>subject</code></dt>
<dd>
<p>the patient ID, a factor with levels <code>1</code> to <code>111</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>In each of two centres, eligible patients were randomly assigned to active treatment or placebo. During the treatment, the respiratory status (categorised <code>poor</code> or <code>good</code>) was determined at each of four, monthly visits. The trial recruited 111 participants (54 in the active group, 57 in the placebo group) and there were no missing data for either the responses or the covariates. The question of interest is to assess whether the treatment is effective and to estimate its effect.</p>
<p>Note that the data are in long form, i.e, repeated measurments are stored as additional rows in the data frame.</p>
<h3>Source</h3>
<p>C. S. Davis (1991), Semi-parametric and non-parametric methods for the analysis of repeated measurements with applications to clinical trials. <em>Statistics in Medicine</em>, <b>10</b>, 1959–1980.</p>
<h3>Examples</h3>
<pre>data("respiratory", package = "HSAUR")
mosaicplot(xtabs( ~ treatment + month + status, data = respiratory))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-50717.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-50717.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-respiratory.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-50717.json';</script>