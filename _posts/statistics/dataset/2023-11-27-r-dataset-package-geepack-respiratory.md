---
title: R Dataset / Package geepack / respiratory
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">respiratory</span> data set which pertains to Data from a clinical trial comparing two treatments for a respiratory illness. The <span class="mono">respiratory</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">respiratory</span> data set in R by issuing the following command at the console <span class="mono">data("respiratory")</span>. This will load the data into a variable called <span class="mono">respiratory</span>. If R says the <span class="mono">respiratory</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75547.csv">respiratory R data set</a></span>. The size of this file is about 9,759 bytes.</p><h2>Data from a clinical trial comparing two treatments for a respiratory illness</h2>
<h3>Description</h3>
<p>The data are from a clinical trial of patients with respiratory illness, where 111 patients from two different clinics were randomized to receive either placebo or an active treatment. Patients were examined at baseline and at four visits during treatment. At each examination, respiratory status (categorized as 1 = good, 0 = poor) was determined.</p>
<h3>Usage</h3>
<pre>data(respiratory)</pre>
<h3>Format</h3>
<p>A data frame with 111 observations on the following 7 variables.</p>
<dl>
<dt>center</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>id</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>age</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>baseline</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>active</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>center2</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>female</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
data(respiratory)
## maybe str(respiratory) ; plot(respiratory) ...
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75547.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75547.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-respiratory.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75547.json';</script>