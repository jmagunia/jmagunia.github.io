---
title: R Dataset / Package vcd / VisualAcuity
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">VisualAcuity</span> data set which pertains to Visual Acuity in Left and Right Eyes. The <span class="mono">VisualAcuity</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">VisualAcuity</span> data set in R by issuing the following command at the console <span class="mono">data("VisualAcuity")</span>. This will load the data into a variable called <span class="mono">VisualAcuity</span>. If R says the <span class="mono">VisualAcuity</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44739.csv">VisualAcuity R data set</a></span>. The size of this file is about 663 bytes.</p><h2>Visual Acuity in Left and Right Eyes</h2>
<h3>Description</h3>
<p>Data from Kendall &amp; Stuart (1961) on unaided vision among 3,242 men and 7,477 women, all aged 30-39 and employed in the U.K. Royal Ordnance factories 1943-1946.</p>
<h3>Usage</h3>
<pre>
data("VisualAcuity")
</pre>
<h3>Format</h3>
<p>A data frame with 32 observations and 4 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency of visual acuity measurements.</p>
</dd>
<dt>right</dt>
<dd>
<p>visual acuity on right eye.</p>
</dd>
<dt>left</dt>
<dd>
<p>visual acuity on left eye.</p>
</dd>
<dt>gender</dt>
<dd>
<p>factor indicating gender of patient.</p>
</dd>
</dl>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vision.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vision.sas</a></p>
<h3>References</h3>
<p>M. G. Kendall &amp; A. Stuart (1961), <em>The Advanced Theory of Statistics</em>, Vol. 2. Griffin, London.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("VisualAcuity")
structable(~ gender + left + right, data = VisualAcuity)
sieve(Freq ~ left + right | gender, data = VisualAcuity, shade = TRUE)
cotabplot(Freq ~ left + right | gender, data = VisualAcuity,
panel = cotab_agreementplot)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44739.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44739.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-visualacuity.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44739.json';</script>