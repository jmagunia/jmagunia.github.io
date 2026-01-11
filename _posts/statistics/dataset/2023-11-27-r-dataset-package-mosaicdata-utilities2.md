---
title: R Dataset / Package mosaicData / Utilities2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Utilities2</span> data set which pertains to Utility bills. The <span class="mono">Utilities2</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Utilities2</span> data set in R by issuing the following command at the console <span class="mono">data("Utilities2")</span>. This will load the data into a variable called <span class="mono">Utilities2</span>. If R says the <span class="mono">Utilities2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81004.csv">Utilities2 R data set</a></span>. The size of this file is about 15,575 bytes.</p><h2>Utility bills</h2>
<h3>Description</h3>
<p>Data from utility bills at a private residence. This is an augmented version of <code>Utilities</code>.</p>
<h3>Usage</h3>
<pre>
data(Utilities2)
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
<li>
<p><code>ccfpday</code> average gas usage per day [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>kwhpday</code> average electric usage per day [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>gasbillpday</code> gas bill divided by billing days [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>elecbillpday</code> electric bill divided by billing days a numeric vector [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>totalbillpday</code> total bill divided by billing days a numeric vector [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>therms</code> <code>thermsPerDay * billingDays</code> [<code>Utilities2</code> only]</p>
</li>
<li>
<p><code>monthsSinceY2K</code> months since 2000 [<code>Utilities2</code> only]</p>
</li>
</ul>
<h3>Source</h3>
<p>Daniel T. Kaplan, <em>Statistical modeling: A fresh approach</em>, 2009.</p>
<h3>See Also</h3>
<p><code>Utilities</code>.</p>
<h3>Examples</h3>
<pre>
data(Utilities2)
if (require(lattice)) {
xyplot(gasbillpday ~ temp, Utilities2)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81004.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81004.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-utilities2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81004.json';</script>