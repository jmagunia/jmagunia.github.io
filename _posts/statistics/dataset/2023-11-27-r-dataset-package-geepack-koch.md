---
title: R Dataset / Package geepack / koch
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">koch</span> data set which pertains to Ordinal Data from Koch. The <span class="mono">koch</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">koch</span> data set in R by issuing the following command at the console <span class="mono">data("koch")</span>. This will load the data into a variable called <span class="mono">koch</span>. If R says the <span class="mono">koch</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85908.csv">koch R data set</a></span>. The size of this file is about 2,721 bytes.</p><h2>Ordinal Data from Koch</h2>
<h3>Description</h3>
<p>The <code>koch</code> data frame has 288 rows and 4 columns.</p>
<h3>Usage</h3>
<pre>data(koch)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>trt</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>day</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>y</dt>
<dd>
<p>an ordered factor with levels: <code>1</code> &lt; <code>2</code> &lt; <code>3</code></p>
</dd>
<dt>id</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
data(koch)
fit &lt;- ordgee(ordered(y) ~ trt + as.factor(day), id=id, data=koch, corstr="exch")
summary(fit)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85908.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85908.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-koch.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85908.json';</script>