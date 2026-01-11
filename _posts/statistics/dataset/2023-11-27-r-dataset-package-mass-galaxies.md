---
title: R Dataset / Package MASS / galaxies
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">galaxies</span> data set which pertains to Velocities for 82 Galaxies. The <span class="mono">galaxies</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">galaxies</span> data set in R by issuing the following command at the console <span class="mono">data("galaxies")</span>. This will load the data into a variable called <span class="mono">galaxies</span>. If R says the <span class="mono">galaxies</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-18534.csv">galaxies R data set</a></span>. The size of this file is about 491 bytes.</p><h2>Velocities for 82 Galaxies</h2>
<h3>Description</h3>
<p>A numeric vector of velocities in km/sec of 82 galaxies from 6 well-separated conic sections of an <code>unfilled</code> survey of the Corona Borealis region. Multimodality in such surveys is evidence for voids and superclusters in the far universe.</p>
<h3>Usage</h3>
<pre>
galaxies
</pre>
<h3>Note</h3>
<p>There is an 83rd measurement of 5607 km/sec in the Postman <em>et al.</em> paper which is omitted in Roeder (1990) and from the dataset here.</p>
<p>There is also a typo: this dataset has 78th observation 26690 which should be 26960.</p>
<h3>Source</h3>
<p>Roeder, K. (1990) Density estimation with confidence sets exemplified by superclusters and voids in galaxies. <em>Journal of the American Statistical Association</em> <b>85</b>, 617–624.</p>
<p>Postman, M., Huchra, J. P. and Geller, M. J. (1986) Probes of large-scale structures in the Corona Borealis region. <em>Astronomical Journal</em> <b>92</b>, 1238–1247.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
gal &lt;- galaxies/1000
c(width.SJ(gal, method = "dpi"), width.SJ(gal))
plot(x = c(0, 40), y = c(0, 0.3), type = "n", bty = "l",
 xlab = "velocity of galaxy (1000km/s)", ylab = "density")
rug(gal)
lines(density(gal, width = 3.25, n = 200), lty = 1)
lines(density(gal, width = 2.56, n = 200), lty = 3)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-18534.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-18534.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-galaxies.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-18534.json';</script>