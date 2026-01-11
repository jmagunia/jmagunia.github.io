---
title: R Dataset / Package geepack / respdis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">respdis</span> data set which pertains to Clustered Ordinal Respiratory Disorder. The <span class="mono">respdis</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">respdis</span> data set in R by issuing the following command at the console <span class="mono">data("respdis")</span>. This will load the data into a variable called <span class="mono">respdis</span>. If R says the <span class="mono">respdis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75512.csv">respdis R data set</a></span>. The size of this file is about 1,136 bytes.</p><h2>Clustered Ordinal Respiratory Disorder</h2>
<h3>Description</h3>
<p>The <code>respdis</code> data frame has 111 rows and 3 columns. The study described in Miller et. al. (1993) is a randomized clinical trial of a new treatment of respiratory disorder. The study was conducted in 111 patients who were randomly assigned to one of two treatments (active, placebo). At each of four visits during the follow-up period, the response status of each patients was classified on an ordinal scale.</p>
<h3>Usage</h3>
<pre>data(respdis)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>y1, y2, y3, y4</dt>
<dd>
<p>ordered factor measured at 4 visits for the response with levels, <code>1</code> &lt; <code>2</code> &lt; <code>3</code>, 1 = poor, 2 = good, and 3 = excellent</p>
</dd>
<dt>trt</dt>
<dd>
<p>a factor for treatment with levels, 1 = active, 0 = placebo.</p>
</dd>
</dl>
<h3>References</h3>
<p>Miller, M.E., David, C.S., and Landis, R.J. (1993) The analysis of longitudinal polytomous data: Generalized estimating equation and connections with weighted least squares, <em>Biometrics</em> <b>49</b>: 1033-1048.</p>
<h3>Examples</h3>
<pre>
data(respdis)
resp.l &lt;- reshape(respdis, varying = list(c("y1", "y2", "y3", "y4")),
v.names = "resp", direction = "long")
resp.l &lt;- resp.l[order(resp.l$id, resp.l$time),]
fit &lt;- ordgee(ordered(resp) ~ trt, id = id, data = resp.l, int.const = FALSE)
summary(fit)z &lt;- model.matrix( ~ trt - 1, data = respdis)
ind &lt;- rep(1:111, 4*3/2 * 2^2)
zmat &lt;- z[ind,,drop=FALSE]
fit &lt;- ordgee(ordered(resp) ~ trt, id = id, data = resp.l, int.const = FALSE,
z = zmat, corstr = "exchangeable")
summary(fit)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75512.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75512.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-respdis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75512.json';</script>