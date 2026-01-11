---
title: R Dataset / Package HSAUR / schizophrenia2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">schizophrenia2</span> data set which pertains to Schizophrenia Data . The <span class="mono">schizophrenia2</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">schizophrenia2</span> data set in R by issuing the following command at the console <span class="mono">data("schizophrenia2")</span>. This will load the data into a variable called <span class="mono">schizophrenia2</span>. If R says the <span class="mono">schizophrenia2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83120.csv">schizophrenia2 R data set</a></span>. The size of this file is about 5,952 bytes.</p><h2>Schizophrenia Data</h2>
<h3>Description</h3>
<p>Though disorder and early onset of schizophrenia.</p>
<h3>Usage</h3>
<pre>data("schizophrenia2")</pre>
<h3>Format</h3>
<p>A data frame with 220 observations on the following 4 variables.</p>
<dl>
<dt><code>subject</code></dt>
<dd>
<p>the patient ID, a factor with levels <code>1</code> to <code>44</code>.</p>
</dd>
<dt><code>onset</code></dt>
<dd>
<p>the time of onset of the disease, a factor with levels <code>&lt; 20 yrs</code> and <code>&gt; 20 yrs</code>.</p>
</dd>
<dt><code>disorder</code></dt>
<dd>
<p>whether thought disorder was <code>absent</code> or <code>present</code>, the response variable.</p>
</dd>
<dt><code>month</code></dt>
<dd>
<p>month after hospitalisation.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data were collected in a follow-up study of women patients with schizophrenia. The binary response recorded at 0, 2, 6, 8 and 10 months after hospitalisation was thought disorder (absent or present). The single covariate is the factor indicating whether a patient had suffered early or late onset of her condition (age of onset less than 20 years or age of onset 20 years or above). The question of interest is whether the course of the illness differs between patients with early and late onset?</p>
<h3>Source</h3>
<p>Davis (2002), <em>Statistical Methods for the Analysis of Repeated Measurements</em>, Springer, New York.</p>
<h3>Examples</h3>
<pre>data("schizophrenia2", package = "HSAUR")
mosaicplot(xtabs( ~ onset + month + disorder, data = schizophrenia2))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83120.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83120.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-schizophrenia2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83120.json';</script>