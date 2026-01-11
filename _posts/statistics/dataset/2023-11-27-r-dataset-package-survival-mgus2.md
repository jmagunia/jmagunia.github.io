---
title: R Dataset / Package survival / mgus2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mgus2</span> data set which pertains to Monoclonal gammapothy data. The <span class="mono">mgus2</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">mgus2</span> data set in R by issuing the following command at the console <span class="mono">data("mgus2")</span>. This will load the data into a variable called <span class="mono">mgus2</span>. If R says the <span class="mono">mgus2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69348.csv">mgus2 R data set</a></span>. The size of this file is about 47,081 bytes.</p><h2>Monoclonal gammapothy data</h2>
<h3>Description</h3>
<p>Natural history of 1341 sequential patients with monoclonal gammapothy of undetermined significance (MGUS).</p>
<h3>Usage</h3>
<pre>data("mgus2")</pre>
<h3>Format</h3>
<p>A data frame with 1384 observations on the following 10 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>subject identifier</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age at diagnosis, in years</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>F</code> <code>M</code></p>
</dd>
<dt><code>hgb</code></dt>
<dd>
<p>hemoglobin</p>
</dd>
<dt><code>creat</code></dt>
<dd>
<p>creatinine</p>
</dd>
<dt><code>mspike</code></dt>
<dd>
<p>size of the monoclonal serum splike</p>
</dd>
<dt><code>ptime</code></dt>
<dd>
<p>time until progression to a plasma cell malignancy (PCM) or last contact, in months</p>
</dd>
<dt><code>pstat</code></dt>
<dd>
<p>occurrence of PCM: 0=no, 1=yes</p>
</dd>
<dt><code>futime</code></dt>
<dd>
<p>time until death or last contact, in months</p>
</dd>
<dt><code>death</code></dt>
<dd>
<p>occurrence of death: 0=no, 1=yes</p>
</dd>
</dl>
<h3>Details</h3>
<p>This is a larger follow-on study of the condition also found in data set <code>mgus</code>.</p>
<h3>Source</h3>
<p>Mayo Clinic data courtesy of Dr. Robert Kyle. All patient identifiers have been removed, age rounded to the nearest year, and follow-up times rounded to the nearest month.</p>
<h3>References</h3>
<p>R. Kyle, T. Therneau, V. Rajkumar, J. Offord, D. Larson, M. Plevak, and L. J. Melton III, A long-terms study of prognosis in monoclonal gammopathy of undertermined significance. New Engl J Med, 346:564-569 (2002).</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69348.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69348.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-mgus2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69348.json';</script>