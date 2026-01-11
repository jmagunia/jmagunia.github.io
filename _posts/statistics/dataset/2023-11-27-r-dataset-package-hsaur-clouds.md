---
title: R Dataset / Package HSAUR / clouds
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">clouds</span> data set which pertains to Cloud Seeding Data . The <span class="mono">clouds</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">clouds</span> data set in R by issuing the following command at the console <span class="mono">data("clouds")</span>. This will load the data into a variable called <span class="mono">clouds</span>. If R says the <span class="mono">clouds</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84421.csv">clouds R data set</a></span>. The size of this file is about 972 bytes.</p><h2>Cloud Seeding Data</h2>
<h3>Description</h3>
<p>Data from an experiment investigating the use of massive amounts of silver iodide (100 to 1000 grams per cloud) in cloud seeding to increase rainfall.</p>
<h3>Usage</h3>
<pre>data("clouds")</pre>
<h3>Format</h3>
<p>A data frame with 24 observations on the following 7 variables.</p>
<dl>
<dt>seeding</dt>
<dd>
<p>a factor indicating whether seeding action occured (<code>no</code> or <code>yes</code>).</p>
</dd>
<dt>time</dt>
<dd>
<p>number of days after the first day of the experiment.</p>
</dd>
<dt>sne</dt>
<dd>
<p>suitability criterion.</p>
</dd>
<dt>cloudcover</dt>
<dd>
<p>the percentage cloud cover in the experimental area, measured using radar.</p>
</dd>
<dt>prewetness</dt>
<dd>
<p>the total rainfall in the target area one hour before seeding (in cubic metres times <code>1e+8</code>).</p>
</dd>
<dt>echomotion</dt>
<dd>
<p>a factor showing whether the radar echo was <code>moving</code> or <code>stationary</code>.</p>
</dd>
<dt>rainfall</dt>
<dd>
<p>the amount of rain in cubic metres times <code>1e+8</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Weather modification, or cloud seeding, is the treatment of individual clouds or storm systems with various inorganic and organic materials in the hope of achieving an increase in rainfall. Introduction of such material into a cloud that contains supercooled water, that is, liquid water colder than zero Celsius, has the aim of inducing freezing, with the consequent ice particles growing at the expense of liquid droplets and becoming heavy enough to fall as rain from clouds that otherwise would produce none.</p>
<p>The data available in <code>cloud</code> were collected in the summer of 1975 from an experiment to investigate the use of massive amounts of silver iodide 100 to 1000 grams per cloud) in cloud seeding to increase rainfall. In the experiment, which was conducted in an area of Florida, 24 days were judged suitable for seeding on the basis that a measured suitability criterion (<code>SNE</code>).</p>
<h3>Source</h3>
<p>W. L. Woodley, J. Simpson, R. Biondini and J. Berkeley (1977), Rainfall results 1970-75: Florida area cumulus experiment. <em>Science</em> <b>195</b>, 735–742.</p>
<p>R. D. Cook and S. Weisberg (1980), Characterizations of an empirical influence function for detecting influential cases in regression. <em>Technometrics</em> <b>22</b>, 495–508.</p>
<h3>Examples</h3>
<pre>data("clouds", package = "HSAUR")
layout(matrix(1:2, nrow = 2))
boxplot(rainfall ~ seeding, data = clouds, ylab = "Rainfall")
boxplot(rainfall ~ echomotion, data = clouds, ylab = "Rainfall")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84421.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84421.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-clouds.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84421.json';</script>