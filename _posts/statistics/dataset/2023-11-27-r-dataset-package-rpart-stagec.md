---
title: R Dataset / Package rpart / stagec
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">stagec</span> data set which pertains to Stage C Prostate Cancer. The <span class="mono">stagec</span> data set is found in the <span class="mono">rpart</span> R package. You can load the <span class="mono">stagec</span> data set in R by issuing the following command at the console <span class="mono">data("stagec")</span>. This will load the data into a variable called <span class="mono">stagec</span>. If R says the <span class="mono">stagec</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("rpart")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15408.csv">stagec R data set</a></span>. The size of this file is about 4,748 bytes.</p><h2>Stage C Prostate Cancer</h2>
<h3>Description</h3>
<p>A set of 146 patients with stage C prostate cancer, from a study exploring the prognostic value of flow cytometry.</p>
<h3>Usage</h3>
<pre>data(stagec)</pre>
<h3>Format</h3>
<p>A data frame with 146 observations on the following 8 variables.</p>
<dl>
<dt><code>pgtime</code></dt>
<dd>
<p>Time to progression or last follow-up (years)</p>
</dd>
<dt><code>pgstat</code></dt>
<dd>
<p>1 = progression observed, 0 = censored</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age in years</p>
</dd>
<dt><code>eet</code></dt>
<dd>
<p>early endocrine therapy, 1 = no, 2 = yes</p>
</dd>
<dt><code>g2</code></dt>
<dd>
<p>percent of cells in G2 phase, as found by flow cytometry</p>
</dd>
<dt><code>grade</code></dt>
<dd>
<p>grade of the tumor, Farrow system</p>
</dd>
<dt><code>gleason</code></dt>
<dd>
<p>grade of the tumor, Gleason system</p>
</dd>
<dt><code>ploidy</code></dt>
<dd>
<p>the ploidy status of the tumor, from flow cytometry. Values are <span class="samp">diploid</span>, <span class="samp">tetraploid</span>, and <span class="samp">aneuploid</span></p>
</dd>
</dl>
<h3>Details</h3>
<p>A tumor is called diploid (normal complement of dividing cells) if the fraction of cells in G2 phase was determined to be 13% or less. Aneuploid cells have a measurable fraction with a chromosome count that is neither 24 nor 48, for these the G2 percent is difficult or impossible to measure.</p>
<h3>Examples</h3>
<pre>
require(survival)
rpart(Surv(pgtime, pgstat) ~ ., stagec)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15408.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15408.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-rpart-stagec.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15408.json';</script>