---
title: R Dataset / Package datasets / co2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">co2</span> data set which pertains to Mauna Loa Atmospheric CO2 Concentration. The <span class="mono">co2</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">co2</span> data set in R by issuing the following command at the console <span class="mono">data("co2")</span>. This will load the data into a variable called <span class="mono">co2</span>. If R says the <span class="mono">co2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-71147.csv">co2 R data set</a></span>. The size of this file is about 11,113 bytes.</p><h2>Mauna Loa Atmospheric CO2 Concentration</h2>
<h3>Description</h3>
<p>Atmospheric concentrations of CO<i>2</i> are expressed in parts per million (ppm) and reported in the preliminary 1997 SIO manometric mole fraction scale.</p>
<h3>Usage</h3>
<pre>co2</pre>
<h3>Format</h3>
<p>A time series of 468 observations; monthly from 1959 to 1997.</p>
<h3>Details</h3>
<p>The values for February, March and April of 1964 were missing and have been obtained by interpolating linearly between the values for January and May of 1964.</p>
<h3>Source</h3>
<p>Keeling, C. D. and Whorf, T. P., Scripps Institution of Oceanography (SIO), University of California, La Jolla, California USA 92093-0220.</p>
<p><a href="ftp://cdiac.esd.ornl.gov/pub/maunaloa-co2/maunaloa.co2">ftp://cdiac.esd.ornl.gov/pub/maunaloa-co2/maunaloa.co2</a>.</p>
<h3>References</h3>
<p>Cleveland, W. S. (1993) <em>Visualizing Data</em>. New Jersey: Summit Press.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(co2, ylab = expression("Atmospheric concentration of CO"[2]),
 las = 1)
title(main = "co2 data set")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-71147.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-71147.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-co2-0.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-71147.json';</script>