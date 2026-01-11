---
title: R Dataset / Package MASS / leuk
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">leuk</span> data set which pertains to Survival Times and White Blood Counts for Leukaemia Patients. The <span class="mono">leuk</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">leuk</span> data set in R by issuing the following command at the console <span class="mono">data("leuk")</span>. This will load the data into a variable called <span class="mono">leuk</span>. If R says the <span class="mono">leuk</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-59866.csv">leuk R data set</a></span>. The size of this file is about 612 bytes.</p><h2>Survival Times and White Blood Counts for Leukaemia Patients</h2>
<h3>Description</h3>
<p>A data frame of data from 33 leukaemia patients.</p>
<h3>Usage</h3>
<pre>
leuk
</pre>
<h3>Format</h3>
<p>A data frame with columns:</p>
<dl>
<dt><code>wbc</code></dt>
<dd>
<p>white blood count.</p>
</dd>
<dt><code>ag</code></dt>
<dd>
<p>a test result, <code>"present"</code> or <code>"absent"</code>.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>survival time in weeks.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Survival times are given for 33 patients who died from acute myelogenous leukaemia. Also measured was the patient's white blood cell count at the time of diagnosis. The patients were also factored into 2 groups according to the presence or absence of a morphologic characteristic of white blood cells. Patients termed AG positive were identified by the presence of Auer rods and/or significant granulation of the leukaemic cells in the bone marrow at the time of diagnosis.</p>
<h3>Source</h3>
<p>Cox, D. R. and Oakes, D. (1984) <em>Analysis of Survival Data</em>. Chapman &amp; Hall, p. 9.</p>
<p>Taken from</p>
<p>Feigl, P. &amp; Zelen, M. (1965) Estimation of exponential survival probabilities with concomitant information. <em>Biometrics</em> <b>21</b>, 826–838.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
library(survival)
plot(survfit(Surv(time) ~ ag, data = leuk), lty = 2:3, col = 2:3)# now Cox models
leuk.cox &lt;- coxph(Surv(time) ~ ag + log(wbc), leuk)
summary(leuk.cox)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-59866.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-59866.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-leuk.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-59866.json';</script>