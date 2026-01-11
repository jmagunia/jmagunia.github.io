---
title: R Dataset / Package datasets / presidents
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">presidents</span> data set which pertains to Quarterly Approval Ratings of US Presidents. The <span class="mono">presidents</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">presidents</span> data set in R by issuing the following command at the console <span class="mono">data("presidents")</span>. This will load the data into a variable called <span class="mono">presidents</span>. If R says the <span class="mono">presidents</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51418_0.csv">presidents R data set</a></span>. The size of this file is about 1,220 bytes.</p><h2>Quarterly Approval Ratings of US Presidents</h2>
<h3>Description</h3>
<p>The (approximately) quarterly approval rating for the President of the United States from the first quarter of 1945 to the last quarter of 1974.</p>
<h3>Usage</h3>
<pre>presidents</pre>
<h3>Format</h3>
<p>A time series of 120 values.</p>
<h3>Details</h3>
<p>The data are actually a fudged version of the approval ratings. See McNeil's book for details.</p>
<h3>Source</h3>
<p>The Gallup Organisation.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
plot(presidents, las = 1, ylab = "Approval rating (%)",
 main = "presidents data")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51418_0.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51418_0.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-presidents.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51418_0.json';</script>