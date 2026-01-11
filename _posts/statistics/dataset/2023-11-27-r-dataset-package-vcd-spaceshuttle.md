---
title: R Dataset / Package vcd / SpaceShuttle
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">SpaceShuttle</span> data set which pertains to Space Shuttle O-ring Failures. The <span class="mono">SpaceShuttle</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">SpaceShuttle</span> data set in R by issuing the following command at the console <span class="mono">data("SpaceShuttle")</span>. This will load the data into a variable called <span class="mono">SpaceShuttle</span>. If R says the <span class="mono">SpaceShuttle</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34608.csv">SpaceShuttle R data set</a></span>. The size of this file is about 578 bytes.</p><h2>Space Shuttle O-ring Failures</h2>
<h3>Description</h3>
<p>Data from Dalal et al. (1989) about O-ring failures in the NASA space shuttle program. The damage index comes from a discussion of the data by Tufte (1997).</p>
<h3>Usage</h3>
<pre>
data("SpaceShuttle")
</pre>
<h3>Format</h3>
<p>A data frame with 24 observations and 6 variables.</p>
<dl>
<dt>FlightNumber</dt>
<dd>
<p>Number of space shuttle flight.</p>
</dd>
<dt>Temperature</dt>
<dd>
<p>temperature during start (in degrees F).</p>
</dd>
<dt>Pressure</dt>
<dd>
<p>pressure.</p>
</dd>
<dt>Fail</dt>
<dd>
<p>did any O-ring failures occur? (no, yes).</p>
</dd>
<dt>nFailures</dt>
<dd>
<p>how many (of six) 0-rings failed?.</p>
</dd>
<dt>Damage</dt>
<dd>
<p>damage index.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/orings.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/orings.sas</a></p>
<h3>References</h3>
<p>S. Dalal, E. B. Fowlkes, B. Hoadly (1989), Risk analysis of the space shuttle: Pre-Challenger prediction of failure, <em>Journal of the American Statistical Association</em>, <b>84</b>, 945–957.</p>
<p>E. R. Tufte (1997), <em>Visual Explanations: Images and Quantities, Evidence and Narrative</em>. Graphics Press, Cheshire, CT.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("SpaceShuttle")
plot(nFailures/6 ~ Temperature, data = SpaceShuttle,
 xlim = c(30, 81), ylim = c(0,1),
 main = "NASA Space Shuttle O-Ring Failures",
 ylab = "Estimated failure probability",
 pch = 19, col = 4)
fm &lt;- glm(cbind(nFailures, 6 - nFailures) ~ Temperature,
data = SpaceShuttle,
family = binomial)
lines(30 : 81,
predict(fm, data.frame(Temperature = 30 : 81), type = "re"),
lwd = 2)
abline(v = 31, lty = 3)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34608.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34608.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-spaceshuttle.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34608.json';</script>