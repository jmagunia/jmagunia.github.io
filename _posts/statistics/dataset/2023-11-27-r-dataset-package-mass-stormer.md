---
title: R Dataset / Package MASS / stormer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">stormer</span> data set which pertains to The Stormer Viscometer Data. The <span class="mono">stormer</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">stormer</span> data set in R by issuing the following command at the console <span class="mono">data("stormer")</span>. This will load the data into a variable called <span class="mono">stormer</span>. If R says the <span class="mono">stormer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68285.csv">stormer R data set</a></span>. The size of this file is about 335 bytes.</p><h2>The Stormer Viscometer Data</h2>
<h3>Description</h3>
<p>The stormer viscometer measures the viscosity of a fluid by measuring the time taken for an inner cylinder in the mechanism to perform a fixed number of revolutions in response to an actuating weight. The viscometer is calibrated by measuring the time taken with varying weights while the mechanism is suspended in fluids of accurately known viscosity. The data comes from such a calibration, and theoretical considerations suggest a nonlinear relationship between time, weight and viscosity, of the form <code>Time = (B1*Viscosity)/(Weight - B2) + E</code> where <code>B1</code> and <code>B2</code> are unknown parameters to be estimated, and <code>E</code> is error.</p>
<h3>Usage</h3>
<pre>
stormer
</pre>
<h3>Format</h3>
<p>The data frame contains the following components:</p>
<dl>
<dt><code>Viscosity</code></dt>
<dd>
<p>viscosity of fluid.</p>
</dd>
<dt><code>Wt</code></dt>
<dd>
<p>actuating weight.</p>
</dd>
<dt><code>Time</code></dt>
<dd>
<p>time taken.</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. J. Williams (1959) <em>Regression Analysis.</em> Wiley.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68285.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68285.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-stormer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68285.json';</script>