---
title: R Dataset / Package car / KosteckiDillon
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">KosteckiDillon</span> data set which pertains to Treatment of Migraine Headaches. The <span class="mono">KosteckiDillon</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">KosteckiDillon</span> data set in R by issuing the following command at the console <span class="mono">data("KosteckiDillon")</span>. This will load the data into a variable called <span class="mono">KosteckiDillon</span>. If R says the <span class="mono">KosteckiDillon</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-41007.csv">KosteckiDillon R data set</a></span>. The size of this file is about 209,294 bytes.</p><h2>Treatment of Migraine Headaches</h2>
<h3>Description</h3>
<p>Subset of data on migraine treatments collected by Tammy Kostecki-Dillon.</p>
<h3>Usage</h3>
<pre>KosteckiDillon</pre>
<h3>Format</h3>
<p>A data frame with 4152 observations on 133 subjects for the following 9 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>Patient id.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>time in days relative to the onset of treatment, which occurs at time 0.</p>
</dd>
<dt><code>dos</code></dt>
<dd>
<p>time in days from the start of the study, January 1 of the first year of the study.</p>
</dd>
<dt><code>hatype</code></dt>
<dd>
<p>a factor with levels <code>Aura</code> <code>Mixed</code> <code>No Aura</code>, the type of migraine experienced by a subject.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>at onset of treatment, in years.</p>
</dd>
<dt><code>airq</code></dt>
<dd>
<p>a measure of air quality.</p>
</dd>
<dt><code>medication</code></dt>
<dd>
<p>a factor with levels <code>none</code> <code>reduced</code> <code>continuing</code>, representing subjects who discontinued their medication, who continued but at a reduced dose, or who continued at the previous dose.</p>
</dd>
<dt><code>headache</code></dt>
<dd>
<p>a factor with levels <code>no</code> <code>yes</code>.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>female</code> <code>male</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data consist of headache logs kept by 133 patients in a treatment program in which bio-feedback was used to attempt to reduce migraine frequency and severity. Patients entered the program at different times over a period of about 3 years. Patients were encouraged to begin their logs four weeks before the onset of treatment and to continue for one month afterwards, but only 55 patients have data preceding the onset of treatment.</p>
<h3>Source</h3>
<p>Personal communication from Georges Monette (and adapted from his description of the data).</p>
<h3>References</h3>
<p>Kostecki-Dillon, T., Monette, G., and Wong, P. (1999). Pine trees, comas, and migraines. <em>York University Institute for Social Research Newsletter</em>, 14:2.</p>
<h3>Examples</h3>
<pre>
summary(KosteckiDillon)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-41007.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-41007.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-kosteckidillon.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-41007.json';</script>