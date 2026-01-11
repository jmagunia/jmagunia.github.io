---
title: R Dataset / Package robustbase / epilepsy
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">epilepsy</span> data set which pertains to Epilepsy Attacks Data Set. The <span class="mono">epilepsy</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">epilepsy</span> data set in R by issuing the following command at the console <span class="mono">data("epilepsy")</span>. This will load the data into a variable called <span class="mono">epilepsy</span>. If R says the <span class="mono">epilepsy</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29158.csv">epilepsy R data set</a></span>. The size of this file is about 6,683 bytes.</p><h2>Epilepsy Attacks Data Set</h2>
<h3>Description</h3>
<p>Data from a clinical trial of 59 patients with epilepsy (Breslow, 1996) in order to illustrate diagnostic techniques in Poisson regression.</p>
<h3>Usage</h3>
<pre>data(epilepsy)</pre>
<h3>Format</h3>
<p>A data frame with 59 observations on the following 11 variables.</p>
<dl>
<dt><code>ID</code></dt>
<dd>
<p>Patient identification number</p>
</dd>
<dt><code>Y1</code></dt>
<dd>
<p>Number of epilepsy attacks patients have during the first follow-up period</p>
</dd>
<dt><code>Y2</code></dt>
<dd>
<p>Number of epilepsy attacks patients have during the second follow-up period</p>
</dd>
<dt><code>Y3</code></dt>
<dd>
<p>Number of epilepsy attacks patients have during the third follow-up period</p>
</dd>
<dt><code>Y4</code></dt>
<dd>
<p>Number of epilepsy attacks patients have during the forth follow-up period</p>
</dd>
<dt><code>Base</code></dt>
<dd>
<p>Number of epileptic attacks recorded during 8 week period prior to randomization</p>
</dd>
<dt><code>Age</code></dt>
<dd>
<p>Age of the patients</p>
</dd>
<dt><code>Trt</code></dt>
<dd>
<p>a factor with levels <code>placebo</code> <code>progabide</code> indicating whether the anti-epilepsy drug Progabide has been applied or not</p>
</dd>
<dt><code>Ysum</code></dt>
<dd>
<p>Total number of epilepsy attacks patients have during the four follow-up periods</p>
</dd>
<dt><code>Age10</code></dt>
<dd>
<p>Age of the patients devided by 10</p>
</dd>
<dt><code>Base4</code></dt>
<dd>
<p>Variable <code>Base</code> devided by 4</p>
</dd>
</dl>
<h3>Details</h3>
<p>Thall and Vail reported data from a clinical trial of 59 patients with epilepsy, 31 of whom were randomized to receive the anti-epilepsy drug Progabide and 28 of whom received a placebo. Baseline data consisted of the patient's age and the number of epileptic seizures recorded during 8 week period prior to randomization. The response consisted of counts of seizures occuring during the four consecutive follow-up periods of two weeks each.</p>
<h3>Source</h3>
<p>Thall, P.F. and Vail S.C. (1990) Some covariance models for longitudinal count data with overdispersion. <em>Biometrics</em> <b>46</b>, 657–671.</p>
<h3>References</h3>
<p>Diggle, P.J., Liang, K.Y., and Zeger, S.L. (1994) <em>Analysis of Longitudinal Data</em>; Clarendon Press.</p>
<p>Breslow N. E. (1996) Generalized linear models: Checking assumptions and strengthening conclusions. <em>Statistica Applicata</em> <b>8</b>, 23–41.</p>
<h3>Examples</h3>
<pre>
data(epilepsy)
str(epilepsy)
pairs(epilepsy[,c("Ysum","Base4","Trt","Age10")])Efit1 &lt;- glm(Ysum ~ Age10 + Base4*Trt, family=poisson, data=epilepsy)
summary(Efit1)## Robust Fit :
Efit2 &lt;- glmrob(Ysum ~ Age10 + Base4*Trt, family=poisson, data=epilepsy,
method = "Mqle",
tcc=1.2, maxit=100)
summary(Efit2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29158.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29158.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-epilepsy.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29158.json';</script>