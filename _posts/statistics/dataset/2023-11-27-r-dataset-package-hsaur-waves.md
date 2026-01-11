---
title: R Dataset / Package HSAUR / waves
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">waves</span> data set which pertains to Electricity from Wave Power at Sea . The <span class="mono">waves</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">waves</span> data set in R by issuing the following command at the console <span class="mono">data("waves")</span>. This will load the data into a variable called <span class="mono">waves</span>. If R says the <span class="mono">waves</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97136.csv">waves R data set</a></span>. The size of this file is about 200 bytes.</p><h2>Electricity from Wave Power at Sea</h2>
<h3>Description</h3>
<p>Measurements of root mean square bending moment by two different mooring methods.</p>
<h3>Usage</h3>
<pre>data("waves")</pre>
<h3>Format</h3>
<p>A data frame with 18 observations on the following 2 variables.</p>
<dl>
<dt>method1</dt>
<dd>
<p>Root mean square bending moment in Newton metres, mooring method 1</p>
</dd>
<dt>method2</dt>
<dd>
<p>Root mean square bending moment in Newton metres, mooring method 2</p>
</dd>
</dl>
<h3>Details</h3>
<p>In a design study for a device to generate electricity from wave power at sea, experiments were carried out on scale models in a wave tank to establish how the choice of mooring method for the system affected the bending stress produced in part of the device. The wave tank could simulate a wide range of sea states and the model system was subjected to the same sample of sea states with each of two mooring methods, one of which was considerably cheaper than the other. The question of interest is whether bending stress differs for the two mooring methods.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("waves", package = "HSAUR")
plot(method1 ~ method2, data = waves)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97136.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97136.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-waves.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97136.json';</script>