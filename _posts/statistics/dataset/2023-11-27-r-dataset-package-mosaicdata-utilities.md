---
title: R Dataset / Package mosaicData / Utilities
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Utilities</span> data set which pertains to Utility bills. The <span class="mono">Utilities</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Utilities</span> data set in R by issuing the following command at the console <span class="mono">data("Utilities")</span>. This will load the data into a variable called <span class="mono">Utilities</span>. If R says the <span class="mono">Utilities</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47101.csv">Utilities R data set</a></span>. The size of this file is about 6,185 bytes.</p><h2>Utility bills</h2>
<h3>Description</h3>
<p>Data from utility bills at a residence. <code>Utilities2</code> is a similar data set with some additional variables.</p>
<h3>Usage</h3>
<pre>
data(Utilities)
</pre>
<h3>Format</h3>
<p>A data frame containing 117 observations for the following variables.</p>
<ul>
<li>
<p><code>month</code> month (coded as a number)</p>
</li>
<li>
<p><code>day</code> day of month on which bill was calculated</p>
</li>
<li>
<p><code>year</code> year of bill</p>
</li>
<li>
<p><code>temp</code> average temperature (F) for billing period</p>
</li>
<li>
<p><code>kwh</code> electricity usage (kwh)</p>
</li>
<li>
<p><code>ccf</code> gas usage (ccf)</p>
</li>
<li>
<p><code>thermsPerDay</code> a numeric vector</p>
</li>
<li>
<p><code>billingDays</code> number of billing days in billing period</p>
</li>
<li>
<p><code>totalbill</code> total bill (in dollars)</p>
</li>
<li>
<p><code>gasbill</code> gas bill (in dollars)</p>
</li>
<li>
<p><code>elecbill</code> exectric bill (in dollars)</p>
</li>
<li>
<p><code>notes</code> notes about the billing period</p>
</li>
</ul>
<h3>Source</h3>
<p>Daniel T. Kaplan, <em>Statistical modeling: A fresh approach</em>, 2009.</p>
<h3>See Also</h3>
<p><code>Utilities2</code>.</p>
<h3>Examples</h3>
<pre>
data(Utilities)
if (require(lattice)) {
xyplot(gasbill ~ temp, Utilities)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47101.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47101.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-utilities.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47101.json';</script>