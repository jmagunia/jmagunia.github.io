---
title: R Dataset / Package vcd / Suicide
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Suicide</span> data set which pertains to Suicide Rates in Germany. The <span class="mono">Suicide</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Suicide</span> data set in R by issuing the following command at the console <span class="mono">data("Suicide")</span>. This will load the data into a variable called <span class="mono">Suicide</span>. If R says the <span class="mono">Suicide</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28865.csv">Suicide R data set</a></span>. The size of this file is about 11,551 bytes.</p><h2>Suicide Rates in Germany</h2>
<h3>Description</h3>
<p>Data from Heuer (1979) on suicide rates in West Germany classified by age, sex, and method of suicide.</p>
<h3>Usage</h3>
<pre>
data("Suicide")
</pre>
<h3>Format</h3>
<p>A data frame with 306 observations and 6 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency of suicides.</p>
</dd>
<dt>sex</dt>
<dd>
<p>factor indicating sex (male, female).</p>
</dd>
<dt>method</dt>
<dd>
<p>factor indicating method used.</p>
</dd>
<dt>age</dt>
<dd>
<p>age (rounded).</p>
</dd>
<dt>age.group</dt>
<dd>
<p>factor. Age classified into 5 groups.</p>
</dd>
<dt>method2</dt>
<dd>
<p>factor indicating method used (same as <code>method</code> but some levels are merged).</p>
</dd>
</dl>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/suicide.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/suicide.sas</a></p>
<h3>References</h3>
<p>J. Heuer (1979), <em>Selbstmord bei Kindern und Jugendlichen</em>. Ernst Klett Verlag, Stuttgart.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Suicide")
structable(~ sex + method2 + age.group, data = Suicide)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28865.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28865.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-suicide.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28865.json';</script>