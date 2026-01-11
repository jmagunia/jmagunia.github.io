---
title: R Dataset / Package car / OBrienKaiser
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">OBrienKaiser</span> data set which pertains to O'Brien and Kaiser's Repeated-Measures Data. The <span class="mono">OBrienKaiser</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">OBrienKaiser</span> data set in R by issuing the following command at the console <span class="mono">data("OBrienKaiser")</span>. This will load the data into a variable called <span class="mono">OBrienKaiser</span>. If R says the <span class="mono">OBrienKaiser</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30121.csv">OBrienKaiser R data set</a></span>. The size of this file is about 794 bytes.</p><h2>O'Brien and Kaiser's Repeated-Measures Data</h2>
<h3>Description</h3>
<p>These contrived repeated-measures data are taken from O'Brien and Kaiser (1985). The data are from an imaginary study in which 16 female and male subjects, who are divided into three treatments, are measured at a pretest, postest, and a follow-up session; during each session, they are measured at five occasions at intervals of one hour. The design, therefore, has two between-subject and two within-subject factors.</p>
<p>The contrasts for the <code>treatment</code> factor are set to <i>-2, 1, 1</i> and <i>0, -1, 1</i>. The contrasts for the <code>gender</code> factor are set to <code>contr.sum</code>.</p>
<h3>Usage</h3>
<pre>OBrienKaiser</pre>
<h3>Format</h3>
<p>A data frame with 16 observations on the following 17 variables.</p>
<dl>
<dt><code>treatment</code></dt>
<dd>
<p>a factor with levels <code>control</code> <code>A</code> <code>B</code></p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>a factor with levels <code>F</code> <code>M</code></p>
</dd>
<dt><code>pre.1</code></dt>
<dd>
<p>pretest, hour 1</p>
</dd>
<dt><code>pre.2</code></dt>
<dd>
<p>pretest, hour 2</p>
</dd>
<dt><code>pre.3</code></dt>
<dd>
<p>pretest, hour 3</p>
</dd>
<dt><code>pre.4</code></dt>
<dd>
<p>pretest, hour 4</p>
</dd>
<dt><code>pre.5</code></dt>
<dd>
<p>pretest, hour 5</p>
</dd>
<dt><code>post.1</code></dt>
<dd>
<p>posttest, hour 1</p>
</dd>
<dt><code>post.2</code></dt>
<dd>
<p>posttest, hour 2</p>
</dd>
<dt><code>post.3</code></dt>
<dd>
<p>posttest, hour 3</p>
</dd>
<dt><code>post.4</code></dt>
<dd>
<p>posttest, hour 4</p>
</dd>
<dt><code>post.5</code></dt>
<dd>
<p>posttest, hour 5</p>
</dd>
<dt><code>fup.1</code></dt>
<dd>
<p>follow-up, hour 1</p>
</dd>
<dt><code>fup.2</code></dt>
<dd>
<p>follow-up, hour 2</p>
</dd>
<dt><code>fup.3</code></dt>
<dd>
<p>follow-up, hour 3</p>
</dd>
<dt><code>fup.4</code></dt>
<dd>
<p>follow-up, hour 4</p>
</dd>
<dt><code>fup.5</code></dt>
<dd>
<p>follow-up, hour 5</p>
</dd>
</dl>
<h3>Source</h3>
<p>O'Brien, R. G., and Kaiser, M. K. (1985) MANOVA method for analyzing repeated measures designs: An extensive primer. <em>Psychological Bulletin</em> <b>97</b>, 316–333, Table 7.</p>
<h3>Examples</h3>
<pre>
OBrienKaiser
contrasts(OBrienKaiser$treatment)
contrasts(OBrienKaiser$gender)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30121.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30121.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-obrienkaiser.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30121.json';</script>