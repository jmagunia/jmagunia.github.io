---
title: R Dataset / Package mosaicData / TenMileRace
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">TenMileRace</span> data set which pertains to Cherry Blossom Race. The <span class="mono">TenMileRace</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">TenMileRace</span> data set in R by issuing the following command at the console <span class="mono">data("TenMileRace")</span>. This will load the data into a variable called <span class="mono">TenMileRace</span>. If R says the <span class="mono">TenMileRace</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-33549.csv">TenMileRace R data set</a></span>. The size of this file is about 190,171 bytes.</p><h2>Cherry Blossom Race</h2>
<h3>Description</h3>
<p>The Cherry Blossom 10 Mile Run is a road race held in Washington, D.C. in April each year. (The name comes from the famous cherry trees that are in bloom in April in Washington.) The results of this race are published. This data frame contains the results from the 2005 race.</p>
<h3>Usage</h3>
<pre>
data(TenMileRace)
</pre>
<h3>Format</h3>
<p>A data frame with 8636 observations on the following variables.</p>
<ul>
<li>
<p><code>state</code> State of residence of runner.</p>
</li>
<li>
<p><code>time</code> Official time from starting gun to finish line.</p>
</li>
<li>
<p><code>net</code> The recorded time (in seconds) from when the runner crossed the starting line to when the runner crossed the finish line. This is generally less than the official time because of the large number of runners in the race: it takes time to reach the starting line after the gun has gone off.</p>
</li>
<li>
<p><code>age</code> Age of runner in years.</p>
</li>
<li>
<p><code>sex</code> A factor with levels <code>F</code> <code>M</code>.</p>
</li>
</ul>
<h3>Examples</h3>
<pre>
data(TenMileRace)
if (require(lattice)) {
xyplot(net ~ age, data=TenMileRace, groups=sex)
lm(net ~ age + sex, data=TenMileRace)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-33549.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-33549.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-tenmilerace.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-33549.json';</script>