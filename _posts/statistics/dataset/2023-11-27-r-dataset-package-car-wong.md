---
title: R Dataset / Package car / Wong
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Wong</span> data set which pertains to Post-Coma Recovery of IQ. The <span class="mono">Wong</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Wong</span> data set in R by issuing the following command at the console <span class="mono">data("Wong")</span>. This will load the data into a variable called <span class="mono">Wong</span>. If R says the <span class="mono">Wong</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85577.csv">Wong R data set</a></span>. The size of this file is about 11,313 bytes.</p><h2>Post-Coma Recovery of IQ</h2>
<h3>Description</h3>
<p>The <code>Wong</code> data frame has 331 row and 7 columns. The observations are longitudinal data on recovery of IQ after comas of varying duration for 200 subjects.</p>
<h3>Usage</h3>
<pre>Wong</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>patient ID number.</p>
</dd>
<dt><code>days</code></dt>
<dd>
<p>number of days post coma at which IQs were measured.</p>
</dd>
<dt><code>duration</code></dt>
<dd>
<p>duration of the coma in days.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>Female</code> and <code>Male</code>.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>in years at the time of injury.</p>
</dd>
<dt><code>piq</code></dt>
<dd>
<p>performance (i.e., mathematical) IQ.</p>
</dd>
<dt><code>viq</code></dt>
<dd>
<p>verbal IQ.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are from Wong, Monette, and Weiner (2001) and are for 200 patients who sustained traumatic brain injuries resulting in comas of varying duration. After awakening from their comas, patients were periodically administered a standard IQ test, but the average number of measurements per patient is small (331/200 = 1.7).</p>
<h3>Source</h3>
<p>Wong, P. P., Monette, G., and Weiner, N. I. (2001) Mathematical models of cognitive recovery. <em>Brain Injury</em>, <b>15</b>, 519–530.</p>
<h3>References</h3>
<p>Fox, J. (2016) <em>Applied Regression Analysis and Generalized Linear Models</em>, Third Edition. Sage.</p>
<h3>Examples</h3>
<pre>
summary(Wong)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85577.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85577.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-wong.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85577.json';</script>