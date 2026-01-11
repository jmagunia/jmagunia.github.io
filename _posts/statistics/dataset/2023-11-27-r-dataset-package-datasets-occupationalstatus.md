---
title: R Dataset / Package datasets / occupationalStatus
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">occupationalStatus</span> data set which pertains to Occupational Status of Fathers and their Sons. The <span class="mono">occupationalStatus</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">occupationalStatus</span> data set in R by issuing the following command at the console <span class="mono">data("occupationalStatus")</span>. This will load the data into a variable called <span class="mono">occupationalStatus</span>. If R says the <span class="mono">occupationalStatus</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38144.csv">occupationalStatus R data set</a></span>. The size of this file is about 223 bytes.</p><h2>Occupational Status of Fathers and their Sons</h2>
<h3>Description</h3>
<p>Cross-classification of a sample of British males according to each subject's occupational status and his father's occupational status.</p>
<h3>Usage</h3>
<pre>occupationalStatus</pre>
<h3>Format</h3>
<p>A <code>table</code> of counts, with classifying factors <code>origin</code> (father's occupational status; levels <code>1:8</code>) and <code>destination</code> (son's occupational status; levels <code>1:8</code>).</p>
<h3>Source</h3>
<p>Goodman, L. A. (1979) Simple Models for the Analysis of Association in Cross-Classifications having Ordered Categories. <em>J. Am. Stat. Assoc.</em>, <b>74</b> (367), 537–552.</p>
<p>The data set has been in package <a href="https://CRAN.R-project.org/package=gnm"><span class="pkg">gnm</span></a> and been provided by the package authors.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)plot(occupationalStatus)##Fit a uniform association model separating diagonal effects
Diag &lt;- as.factor(diag(1:8))
Rscore &lt;- scale(as.numeric(row(occupationalStatus)), scale = FALSE)
Cscore &lt;- scale(as.numeric(col(occupationalStatus)), scale = FALSE)
modUnif &lt;- glm(Freq ~ origin + destination + Diag + Rscore:Cscore,
 family = poisson, data = occupationalStatus)summary(modUnif)
plot(modUnif) # 4 plots, with warning abouth_ii ~= 1
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38144.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38144.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-occupationalstatus.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38144.json';</script>