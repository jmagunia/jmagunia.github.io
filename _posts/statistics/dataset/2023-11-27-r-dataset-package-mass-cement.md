---
title: R Dataset / Package MASS / cement
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cement</span> data set which pertains to Heat Evolved by Setting Cements. The <span class="mono">cement</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">cement</span> data set in R by issuing the following command at the console <span class="mono">data("cement")</span>. This will load the data into a variable called <span class="mono">cement</span>. If R says the <span class="mono">cement</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-98124.csv">cement R data set</a></span>. The size of this file is about 78,861 bytes.</p><h2>Heat Evolved by Setting Cements</h2>
<h3>Description</h3>
<p>Experiment on the heat evolved in the setting of each of 13 cements.</p>
<h3>Usage</h3>
<pre>
cement
</pre>
<h3>Format</h3>
<dl>
<dt><code>x1, x2, x3, x4</code></dt>
<dd>
<p>Proportions (%) of active ingredients.</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>heat evolved in cals/gm.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Thirteen samples of Portland cement were set. For each sample, the percentages of the four main chemical ingredients was accurately measured. While the cement was setting the amount of heat evolved was also measured.</p>
<h3>Source</h3>
<p>Woods, H., Steinour, H.H. and Starke, H.R. (1932) Effect of composition of Portland cement on heat evolved during hardening. <em>Industrial Engineering and Chemistry</em>, <b>24</b>, 1207–1214.</p>
<h3>References</h3>
<p>Hald, A. (1957) <em>Statistical Theory with Engineering Applications.</em> Wiley, New York.</p>
<h3>Examples</h3>
<pre>
lm(y ~ x1 + x2 + x3 + x4, cement)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-98124.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-98124.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-cement.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-98124.json';</script>