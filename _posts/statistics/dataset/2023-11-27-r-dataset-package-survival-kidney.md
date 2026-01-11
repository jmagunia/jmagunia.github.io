---
title: R Dataset / Package survival / kidney
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kidney</span> data set which pertains to Kidney catheter data. The <span class="mono">kidney</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">kidney</span> data set in R by issuing the following command at the console <span class="mono">data("kidney")</span>. This will load the data into a variable called <span class="mono">kidney</span>. If R says the <span class="mono">kidney</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-73127.csv">kidney R data set</a></span>. The size of this file is about 1,798 bytes.</p><h2>Kidney catheter data</h2>
<h3>Description</h3>
<p>Data on the recurrence times to infection, at the point of insertion of the catheter, for kidney patients using portable dialysis equipment. Catheters may be removed for reasons other than infection, in which case the observation is censored. Each patient has exactly 2 observations.</p>
<p>This data has often been used to illustrate the use of random effects (frailty) in a survival model. However, one of the males (id 21) is a large outlier, with much longer survival than his peers. If this observation is removed no evidence remains for a random subject effect.</p>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">patient:</td>
<td style="text-align: left;">id</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">time</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">event status</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">in years</td>
</tr>
<tr>
<td style="text-align: left;">sex:</td>
<td style="text-align: left;">1=male, 2=female</td>
</tr>
<tr>
<td style="text-align: left;">disease:</td>
<td style="text-align: left;">disease type (0=GN, 1=AN, 2=PKD, 3=Other)</td>
</tr>
<tr>
<td style="text-align: left;">frail:</td>
<td style="text-align: left;">frailty estimate from original paper</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Note</h3>
<p>The original paper ignored the issue of tied times and so is not exactly reproduced by the survival package.</p>
<h3>Source</h3>
<p>CA McGilchrist, CW Aisbett (1991), Regression with frailty in survival analysis. <em>Biometrics</em> <b>47</b>, 461–66.</p>
<h3>Examples</h3>
<pre>
kfit &lt;- coxph(Surv(time, status)~ age + sex + disease + frailty(id), kidney)
kfit0 &lt;- coxph(Surv(time, status)~ age + sex + disease, kidney)
kfitm1 &lt;- coxph(Surv(time,status) ~ age + sex + disease + 
frailty(id, dist='gauss'), kidney)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-73127.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-73127.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-kidney.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-73127.json';</script>