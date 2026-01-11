---
title: R Dataset / Package vcd / Trucks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Trucks</span> data set which pertains to Truck Accidents Data. The <span class="mono">Trucks</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Trucks</span> data set in R by issuing the following command at the console <span class="mono">data("Trucks")</span>. This will load the data into a variable called <span class="mono">Trucks</span>. If R says the <span class="mono">Trucks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27540.csv">Trucks R data set</a></span>. The size of this file is about 1,044 bytes.</p><h2>Truck Accidents Data</h2>
<h3>Description</h3>
<p>Data from a study in England in two periods from November 1969 to October 1971 and November 1971 to October 1973. A new compulsory safety measure for trucks was introduced in October 1971. Therefore, the question is whether the safety measure had an effect on the number of accidents and on the point of collision on the truck.</p>
<h3>Usage</h3>
<pre>
data("Trucks")
</pre>
<h3>Format</h3>
<p>A data frame with 24 observations on 5 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency of accidents involving trucks.</p>
</dd>
<dt>period</dt>
<dd>
<p>factor indicating time period (before, after) 1971-11-01.</p>
</dd>
<dt>collision</dt>
<dd>
<p>factor indicating whether the collision was in the back or forward (including the front and the sides) of the truck (back, forward).</p>
</dd>
<dt>parked</dt>
<dd>
<p>factor indicating whether the truck was parked (yes, no).</p>
</dd>
<dt>light</dt>
<dd>
<p>factor indicating light conditions: day light (daylight), night on an illuminated road (night, illuminate), night on a dark road (night, dark).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, Table 6.8.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
library(MASS)
data("Trucks")
tab &lt;- xtabs(Freq ~ period + collision + light + parked, data = Trucks)
loglm(~ (collision + period) * parked * light, data = tab)
doubledecker(collision ~ parked + light + period, data = tab)
cotabplot(tab, panel = cotab_coindep)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27540.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27540.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-trucks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27540.json';</script>