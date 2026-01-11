---
title: R Dataset / Package datasets / discoveries
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">discoveries</span> data set which pertains to Yearly Numbers of Important Discoveries. The <span class="mono">discoveries</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">discoveries</span> data set in R by issuing the following command at the console <span class="mono">data("discoveries")</span>. This will load the data into a variable called <span class="mono">discoveries</span>. If R says the <span class="mono">discoveries</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-43329.csv">discoveries R data set</a></span>. The size of this file is about 723 bytes.</p><h2>Yearly Numbers of Important Discoveries</h2>
<h3>Description</h3>
<p>The numbers of “great” inventions and scientific discoveries in each year from 1860 to 1959.</p>
<h3>Usage</h3>
<pre>discoveries</pre>
<h3>Format</h3>
<p>A time series of 100 values.</p>
<h3>Source</h3>
<p>The World Almanac and Book of Facts, 1975 Edition, pages 315–318.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(discoveries, ylab = "Number of important discoveries",
 las = 1)
title(main = "discoveries data set")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-43329.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-43329.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-discoveries.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-43329.json';</script>