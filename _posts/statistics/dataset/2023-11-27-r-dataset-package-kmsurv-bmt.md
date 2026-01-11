---
title: R Dataset / Package KMsurv / bmt
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bmt</span> data set which pertains to data from Section 1.3. The <span class="mono">bmt</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">bmt</span> data set in R by issuing the following command at the console <span class="mono">data("bmt")</span>. This will load the data into a variable called <span class="mono">bmt</span>. If R says the <span class="mono">bmt</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-63864.csv">bmt R data set</a></span>. The size of this file is about 7,950 bytes.</p><h2>data from Section 1.3</h2>
<h3>Description</h3>
<p>The <code>bmt</code> data frame has 137 rows and 22 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>group</dt>
<dd>
<p>Disease Group 1-ALL, 2-AML Low Risk, 3-AML High Risk</p>
</dd>
<dt>t1</dt>
<dd>
<p>Time To Death Or On Study Time</p>
</dd>
<dt>t2</dt>
<dd>
<p>Disease Free Survival Time (Time To Relapse, Death Or End Of Study)</p>
</dd>
<dt>d1</dt>
<dd>
<p>Death Indicator 1-Dead 0-Alive</p>
</dd>
<dt>d2</dt>
<dd>
<p>Relapse Indicator 1-Relapsed, 0-Disease Free</p>
</dd>
<dt>d3</dt>
<dd>
<p>Disease Free Survival Indicator 1-Dead Or Relapsed, 0-Alive Disease Free)</p>
</dd>
<dt>ta</dt>
<dd>
<p>Time To Acute Graft-Versus-Host Disease</p>
</dd>
<dt>da</dt>
<dd>
<p>Acute GVHD Indicator 1-Developed Acute GVHD 0-Never Developed Acute GVHD)</p>
</dd>
<dt>tc</dt>
<dd>
<p>Time To Chronic Graft-Versus-Host Disease</p>
</dd>
<dt>dc</dt>
<dd>
<p>Chronic GVHD Indicator 1-Developed Chronic GVHD 0-Never Developed Chronic GVHD</p>
</dd>
<dt>tp</dt>
<dd>
<p>Time To Chronic Graft-Versus-Host Disease</p>
</dd>
<dt>dp</dt>
<dd>
<p>Platelet Recovery Indicator 1-Platelets Returned To Normal, 0-Platelets Never Returned to Normal</p>
</dd>
<dt>z1</dt>
<dd>
<p>Patient Age In Years</p>
</dd>
<dt>z2</dt>
<dd>
<p>Donor Age In Years</p>
</dd>
<dt>z3</dt>
<dd>
<p>Patient Sex: 1-Male, 0-Female</p>
</dd>
<dt>z4</dt>
<dd>
<p>Donor Sex: 1-Male, 0-Female</p>
</dd>
<dt>z5</dt>
<dd>
<p>Patient CMV Status: 1-CMV Positive, 0-CMV Negative</p>
</dd>
<dt>z6</dt>
<dd>
<p>Donor CMV Status: 1-CMV Positive, 0-CMV Negative</p>
</dd>
<dt>z7</dt>
<dd>
<p>Waiting Time to Transplant In Days</p>
</dd>
<dt>z8</dt>
<dd>
<p>FAB: 1-FAB Grade 4 Or 5 and AML, 0-Otherwise</p>
</dd>
<dt>z9</dt>
<dd>
<p>Hospital: 1-The Ohio State University, 2-Alferd , 3-St. Vincent, 4-Hahnemann</p>
</dd>
<dt>z10</dt>
<dd>
<p>MTX Used as a Graft-Versus-Host- Prophylactic: 1-Yes 0-No</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer.</p>
<h3>Examples</h3>
<pre>
data(bmt)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-63864.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-63864.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-bmt.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-63864.json';</script>