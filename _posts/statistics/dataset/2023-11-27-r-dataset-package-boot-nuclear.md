---
title: R Dataset / Package boot / nuclear
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nuclear</span> data set which pertains to Nuclear Power Station Construction Data. The <span class="mono">nuclear</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">nuclear</span> data set in R by issuing the following command at the console <span class="mono">data("nuclear")</span>. This will load the data into a variable called <span class="mono">nuclear</span>. If R says the <span class="mono">nuclear</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-67303.csv">nuclear R data set</a></span>. The size of this file is about 1,194 bytes.</p><h2>Nuclear Power Station Construction Data</h2>
<h3>Description</h3>
<p>The <code>nuclear</code> data frame has 32 rows and 11 columns.</p>
<p>The data relate to the construction of 32 light water reactor (LWR) plants constructed in the U.S.A in the late 1960's and early 1970's. The data was collected with the aim of predicting the cost of construction of further LWR plants. 6 of the power plants had partial turnkey guarantees and it is possible that, for these plants, some manufacturers' subsidies may be hidden in the quoted capital costs.</p>
<h3>Usage</h3>
<pre>
nuclear
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>cost</code></dt>
<dd>
<p>The capital cost of construction in millions of dollars adjusted to 1976 base.</p>
</dd>
<dt><code>date</code></dt>
<dd>
<p>The date on which the construction permit was issued. The data are measured in years since January 1 1990 to the nearest month.</p>
</dd>
<dt><code>t1</code></dt>
<dd>
<p>The time between application for and issue of the construction permit.</p>
</dd>
<dt><code>t2</code></dt>
<dd>
<p>The time between issue of operating license and construction permit.</p>
</dd>
<dt><code>cap</code></dt>
<dd>
<p>The net capacity of the power plant (MWe).</p>
</dd>
<dt><code>pr</code></dt>
<dd>
<p>A binary variable where <code>1</code> indicates the prior existence of a LWR plant at the same site.</p>
</dd>
<dt><code>ne</code></dt>
<dd>
<p>A binary variable where <code>1</code> indicates that the plant was constructed in the north-east region of the U.S.A.</p>
</dd>
<dt><code>ct</code></dt>
<dd>
<p>A binary variable where <code>1</code> indicates the use of a cooling tower in the plant.</p>
</dd>
<dt><code>bw</code></dt>
<dd>
<p>A binary variable where <code>1</code> indicates that the nuclear steam supply system was manufactured by Babcock-Wilcox.</p>
</dd>
<dt><code>cum.n</code></dt>
<dd>
<p>The cumulative number of power plants constructed by each architect-engineer.</p>
</dd>
<dt><code>pt</code></dt>
<dd>
<p>A binary variable where <code>1</code> indicates those plants with partial turnkey guarantees.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Cox, D.R. and Snell, E.J. (1981) <em>Applied Statistics: Principles and Examples</em>. Chapman and Hall.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67303.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67303.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-nuclear.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67303.json';</script>