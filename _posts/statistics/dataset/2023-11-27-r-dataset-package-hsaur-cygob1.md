---
title: R Dataset / Package HSAUR / CYGOB1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CYGOB1</span> data set which pertains to CYG OB1 Star Cluster Data . The <span class="mono">CYGOB1</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">CYGOB1</span> data set in R by issuing the following command at the console <span class="mono">data("CYGOB1")</span>. This will load the data into a variable called <span class="mono">CYGOB1</span>. If R says the <span class="mono">CYGOB1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-92511.csv">CYGOB1 R data set</a></span>. The size of this file is about 800 bytes.</p><h2>CYG OB1 Star Cluster Data</h2>
<h3>Description</h3>
<p>Energy output and surface termperature for Star Cluster CYG OB1.</p>
<h3>Usage</h3>
<pre>data("CYGOB1")</pre>
<h3>Format</h3>
<p>A data frame with 47 observations on the following 2 variables.</p>
<dl>
<dt><code>logst</code></dt>
<dd>
<p>log survface termperature of the star.</p>
</dd>
<dt><code>logli</code></dt>
<dd>
<p>log light intensity of the star.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The Hertzsprung-Russell (H-R) diagram forms the basis of the theory of stellar evolution. The diagram is essentially a plot of the energy output of stars plotted against their surface temperature. Data from the H-R diagram of Star Cluster CYG OB1, calibrated according to VanismaGreve1972 are given here.</p>
<h3>Source</h3>
<p>F. Vanisma and J. P. De Greve (1972), Close binary systems before and after mass transfer. <em>Astrophysics and Space Science</em>, <b>87</b>, 377–401.</p>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("CYGOB1", package = "HSAUR")
plot(logst ~ logli, data = CYGOB1)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-92511.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-92511.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-cygob1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-92511.json';</script>