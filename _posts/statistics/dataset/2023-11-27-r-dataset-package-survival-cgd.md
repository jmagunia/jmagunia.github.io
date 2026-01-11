---
title: R Dataset / Package survival / cgd
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cgd</span> data set which pertains to Chronic Granulotomous Disease data. The <span class="mono">cgd</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">cgd</span> data set in R by issuing the following command at the console <span class="mono">data("cgd")</span>. This will load the data into a variable called <span class="mono">cgd</span>. If R says the <span class="mono">cgd</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34906.csv">cgd R data set</a></span>. The size of this file is about 19,908 bytes.</p><h2>Chronic Granulotomous Disease data</h2>
<h3>Description</h3>
<p>Data are from a placebo controlled trial of gamma interferon in chronic granulotomous disease (CGD). Contains the data on time to serious infections observed through end of study for each patient.</p>
<h3>Usage</h3>
<pre>cgd</pre>
<h3>Format</h3>
<dl>
<dt>id</dt>
<dd>
<p>subject identification number</p>
</dd>
<dt>center</dt>
<dd>
<p>enrolling center</p>
</dd>
<dt>random</dt>
<dd>
<p>date of randomization</p>
</dd>
<dt>treatment</dt>
<dd>
<p>placebo or gamma interferon</p>
</dd>
<dt>sex</dt>
<dd>
<p>sex</p>
</dd>
<dt>age</dt>
<dd>
<p>age in years, at study entry</p>
</dd>
<dt>height</dt>
<dd>
<p>height in cm at study entry</p>
</dd>
<dt>weight</dt>
<dd>
<p>weight in kg at study entry</p>
</dd>
<dt>inherit</dt>
<dd>
<p>pattern of inheritance</p>
</dd>
<dt>steroids</dt>
<dd>
<p>use of steroids at study entry,1=yes</p>
</dd>
<dt>propylac</dt>
<dd>
<p>use of prophylactic antibiotics at study entry</p>
</dd>
<dt>hos.cat</dt>
<dd>
<p>a categorization of the centers into 4 groups</p>
</dd>
<dt>tstart, tstop</dt>
<dd>
<p>start and end of each time interval</p>
</dd>
<dt>status</dt>
<dd>
<p>1=the interval ends with an infection</p>
</dd>
<dt>enum</dt>
<dd>
<p>observation number within subject</p>
</dd>
</dl>
<h3>Details</h3>
<p>The <code>cgd0</code> data set is in the form found in the references, with one line per patient and no recoding of the variables. The <code>cgd</code> data set (this one) has been cast into (start, stop] format with one line per event, and covariates such as center recoded as factors to include meaningful labels.</p>
<h3>Source</h3>
<p>Fleming and Harrington, Counting Processes and Survival Analysis, appendix D.2.</p>
<h3>See Also</h3>
<p><code>link{cgd0}</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34906.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34906.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-cgd.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34906.json';</script>