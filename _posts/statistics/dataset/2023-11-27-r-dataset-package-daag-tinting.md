---
title: R Dataset / Package DAAG / tinting
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">tinting</span> data set which pertains to Car Window Tinting Experiment Data. The <span class="mono">tinting</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">tinting</span> data set in R by issuing the following command at the console <span class="mono">data("tinting")</span>. This will load the data into a variable called <span class="mono">tinting</span>. If R says the <span class="mono">tinting</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85017.csv">tinting R data set</a></span>. The size of this file is about 9,010 bytes.</p><h2>Car Window Tinting Experiment Data</h2>
<h3>Description</h3>
<p>These data are from an experiment that aimed to model the effects of the tinting of car windows on visual performance. The authors were mainly interested in effects on side window vision, and hence in visual recognition tasks that would be performed when looking through side windows.</p>
<h3>Usage</h3>
<pre>tinting</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>case</dt>
<dd>
<p>observation number</p>
</dd>
<dt>id</dt>
<dd>
<p>subject identifier code (1-26)</p>
</dd>
<dt>age</dt>
<dd>
<p>age (in years)</p>
</dd>
<dt>sex</dt>
<dd>
<p>a factor with levels <code>f</code> female, <code>m</code> male</p>
</dd>
<dt>tint</dt>
<dd>
<p>an ordered factor with levels representing degree of tinting: <code>no</code> &lt; <code>lo</code> &lt; <code>hi</code></p>
</dd>
<dt>target</dt>
<dd>
<p>a factor with levels <code>locon</code>: low contrast, <code>hicon</code>: high contrast</p>
</dd>
<dt>it</dt>
<dd>
<p>the inspection time, the time required to perform a simple discrimination task (in milliseconds)</p>
</dd>
<dt>csoa</dt>
<dd>
<p>critical stimulus onset asynchrony, the time to recognize an alphanumeric target (in milliseconds)</p>
</dd>
<dt>agegp</dt>
<dd>
<p>a factor with levels <code>younger</code>, 21-27, <code>older</code>, 70-78</p>
</dd>
</dl>
<h3>Details</h3>
<p>Visual light transmittance (VLT) levels were 100% (tint=none), 81.3% (tint=lo), and 35.1% (tint=hi). Based on these and other data, Burns et al. argue that road safety may be compromised if the front side windows of cars are tinted to 35</p>
<h3>Source</h3>
<p>Burns, N.R., Nettlebeck, T., White, M. and Willson, J., 1999. Effects of car window tinting on visual performance: a comparison of younger and older drivers. Ergonomics 42: 428-443.</p>
<h3>Examples</h3>
<pre>
levels(tinting$agegp) &lt;- capstring(levels(tinting$agegp))
xyplot(csoa ~ it | sex * agegp, data=tinting) # Simple use of xyplot()
pause()xyplot(csoa ~ it|sex*agegp, data=tinting, panel=panel.superpose, groups=target)
pause()xyplot(csoa ~ it|sex*agegp, data=tinting, panel=panel.superpose, col=1:2,
groups=target, key=list(x=0.14, y=0.84, points=list(pch=rep(1,2),
col=1:2), text=list(levels(tinting$target), col=1:2), border=TRUE))
pause()xyplot(csoa ~ it|sex*agegp, data=tinting, panel=panel.superpose,
groups=tint, type=c("p","smooth"), span=0.8, col=1:3,
key=list(x=0.14, y=0.84, points=list(pch=rep(1,2), col=1:3),
text=list(levels(tinting$tint), col=1:3), border=TRUE))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85017.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85017.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-tinting.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85017.json';</script>