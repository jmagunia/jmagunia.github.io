---
title: R Dataset / Package DAAG / toycars
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">toycars</span> data set which pertains to Toy Cars Data. The <span class="mono">toycars</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">toycars</span> data set in R by issuing the following command at the console <span class="mono">data("toycars")</span>. This will load the data into a variable called <span class="mono">toycars</span>. If R says the <span class="mono">toycars</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-74785.csv">toycars R data set</a></span>. The size of this file is about 309 bytes.</p><h2>Toy Cars Data</h2>
<h3>Description</h3>
<p>The <code>toycars</code> data frame has 27 rows and 3 columns. Observations are on the distance traveled by one of three different toy cars on a smooth surface, starting from rest at the top of a 16 inch long ramp tilted at varying angles.</p>
<h3>Usage</h3>
<pre>toycars</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>angle</dt>
<dd>
<p>tilt of ramp, in degrees</p>
</dd>
<dt>distance</dt>
<dd>
<p>distance traveled, in meters</p>
</dd>
<dt>car</dt>
<dd>
<p>a numeric code (1 = first car, 2 = second car, 3 = third car)</p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
toycars.lm &lt;- lm(distance ~ angle + factor(car), data=toycars)
summary(toycars.lm)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-74785.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-74785.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-toycars.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-74785.json';</script>