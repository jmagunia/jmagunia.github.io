---
title: R Dataset / Package robustbase / exAM
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">exAM</span> data set which pertains to Example Data of Antille and May - for Simple Regression. The <span class="mono">exAM</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">exAM</span> data set in R by issuing the following command at the console <span class="mono">data("exAM")</span>. This will load the data into a variable called <span class="mono">exAM</span>. If R says the <span class="mono">exAM</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-12778.csv">exAM R data set</a></span>. The size of this file is about 60 bytes.</p><h2>Example Data of Antille and May - for Simple Regression</h2>
<h3>Description</h3>
<p>This is an artificial data set, cleverly construced and used by Antille and May to demonstrate ‘problems’ with LMS and LTS.</p>
<h3>Usage</h3>
<pre>data(exAM)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on 2 variables, <code>x</code> and <code>y</code>.</p>
<h3>Details</h3>
<p>Because the points are not in general position, both LMS and LTS typically <em>fail</em>; however, e.g., <code>rlm(*, method="MM")</code> “works”.</p>
<h3>Source</h3>
<p>Antille, G. and El May, H. (1992) The use of slices in the LMS and the method of density slices: Foundation and comparison.In Yadolah Dodge and Joe Whittaker, editors, <em>COMPSTAT: Proc. 10th Symp. Computat. Statist., Neuchatel</em>, <b>1</b>, 441–445; Physica-Verlag.</p>
<h3>Examples</h3>
<pre>
data(exAM)
plot(exAM)
summary(ls &lt;- lm(y ~ x, data=exAM))
abline(ls)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-12778.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-12778.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-exam.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-12778.json';</script>