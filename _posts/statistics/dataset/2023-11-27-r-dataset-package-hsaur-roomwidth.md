---
title: R Dataset / Package HSAUR / roomwidth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">roomwidth</span> data set which pertains to Students Estimates of Lecture Room Width . The <span class="mono">roomwidth</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">roomwidth</span> data set in R by issuing the following command at the console <span class="mono">data("roomwidth")</span>. This will load the data into a variable called <span class="mono">roomwidth</span>. If R says the <span class="mono">roomwidth</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76460.csv">roomwidth R data set</a></span>. The size of this file is about 1,231 bytes.</p><h2>Students Estimates of Lecture Room Width</h2>
<h3>Description</h3>
<p>Lecture room width estimated by students in two different units.</p>
<h3>Usage</h3>
<pre>data("roomwidth")</pre>
<h3>Format</h3>
<p>A data frame with 113 observations on the following 2 variables.</p>
<dl>
<dt>unit</dt>
<dd>
<p>a factor with levels <code>feet</code> and <code>metres</code>.</p>
</dd>
<dt>width</dt>
<dd>
<p>the estimated width of the lecture room.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Shortly after metric units of length were officially introduced in Australia, each of a group of 44 students was asked to guess, to the nearest metre, the width of the lecture hall in which they were sitting. Another group of 69 students in the same room was asked to guess the width in feet, to the nearest foot. The data were collected by Professor T. Lewis and are taken from Hand et al (1994). The main question is whether estimation in feet and in metres gives different results.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("roomwidth", package = "HSAUR")
convert &lt;- ifelse(roomwidth$unit == "feet", 1, 3.28)
boxplot(I(width * convert) ~ unit, data = roomwidth)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76460.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76460.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-roomwidth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76460.json';</script>