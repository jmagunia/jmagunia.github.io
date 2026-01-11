---
title: R Dataset / Package HSAUR / bladdercancer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bladdercancer</span> data set which pertains to Bladder Cancer Data . The <span class="mono">bladdercancer</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">bladdercancer</span> data set in R by issuing the following command at the console <span class="mono">data("bladdercancer")</span>. This will load the data into a variable called <span class="mono">bladdercancer</span>. If R says the <span class="mono">bladdercancer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-59378.csv">bladdercancer R data set</a></span>. The size of this file is about 413 bytes.</p><h2>Bladder Cancer Data</h2>
<h3>Description</h3>
<p>Data arise from 31 male patients who have been treated for superficial bladder cancer, and give the number of recurrent tumours during a particular time after the removal of the primary tumour, along with the size of the original tumour.</p>
<h3>Usage</h3>
<pre>data("bladdercancer")</pre>
<h3>Format</h3>
<p>A data frame with 31 observations on the following 3 variables.</p>
<dl>
<dt><code>time</code></dt>
<dd>
<p>the duration.</p>
</dd>
<dt><code>tumorsize</code></dt>
<dd>
<p>a factor with levels <code>&lt;=3cm</code> and <code>&gt;3cm</code>.</p>
</dd>
<dt><code>number</code></dt>
<dd>
<p>number of recurrent tumours.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The aim is the estimate the effect of size of tumour on the number of recurrent tumours.</p>
<h3>Source</h3>
<p>G. U. H. Seeber (1998), Poisson Regression. In: <em>Encyclopedia of Biostatistics</em> (P. Armitage and T. Colton, eds), John Wiley \&amp; Sons, Chichester.</p>
<h3>Examples</h3>
<pre>data("bladdercancer", package = "HSAUR")
mosaicplot(xtabs(~ number + tumorsize, data = bladdercancer))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-59378.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-59378.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-bladdercancer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-59378.json';</script>