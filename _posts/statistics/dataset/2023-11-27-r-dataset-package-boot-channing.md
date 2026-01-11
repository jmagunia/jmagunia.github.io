---
title: R Dataset / Package boot / channing
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">channing</span> data set which pertains to Channing House Data. The <span class="mono">channing</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">channing</span> data set in R by issuing the following command at the console <span class="mono">data("channing")</span>. This will load the data into a variable called <span class="mono">channing</span>. If R says the <span class="mono">channing</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-19713.csv">channing R data set</a></span>. The size of this file is about 9,126 bytes.</p><h2>Channing House Data</h2>
<h3>Description</h3>
<p>The <code>channing</code> data frame has 462 rows and 5 columns.</p>
<p>Channing House is a retirement centre in Palo Alto, California. These data were collected between the opening of the house in 1964 until July 1, 1975. In that time 97 men and 365 women passed through the centre. For each of these, their age on entry and also on leaving or death was recorded. A large number of the observations were censored mainly due to the resident being alive on July 1, 1975 when the data was collected. Over the time of the study 130 women and 46 men died at Channing House. Differences between the survival of the sexes, taking age into account, was one of the primary concerns of this study.</p>
<h3>Usage</h3>
<pre>
channing
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>sex</code></dt>
<dd>
<p>A factor for the sex of each resident (<code>"Male"</code> or <code>"Female"</code>).</p>
</dd>
<dt><code>entry</code></dt>
<dd>
<p>The residents age (in months) on entry to the centre</p>
</dd>
<dt><code>exit</code></dt>
<dd>
<p>The age (in months) of the resident on death, leaving the centre or July 1, 1975 whichever event occurred first.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>The length of time (in months) that the resident spent at Channing House. (<code>time=exit-entry</code>)</p>
</dd>
<dt><code>cens</code></dt>
<dd>
<p>The indicator of right censoring. 1 indicates that the resident died at Channing House, 0 indicates that they left the house prior to July 1, 1975 or that they were still alive and living in the centre at that date.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Hyde, J. (1980) Testing survival with incomplete observations. <em>Biostatistics Casebook</em>. R.G. Miller, B. Efron, B.W. Brown and L.E. Moses (editors), 31–46. John Wiley.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-19713.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-19713.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-channing.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-19713.json';</script>