---
title: R Dataset / Package HSAUR / planets
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">planets</span> data set which pertains to Exoplanets Data . The <span class="mono">planets</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">planets</span> data set in R by issuing the following command at the console <span class="mono">data("planets")</span>. This will load the data into a variable called <span class="mono">planets</span>. If R says the <span class="mono">planets</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94903.csv">planets R data set</a></span>. The size of this file is about 1,579 bytes.</p><h2>Exoplanets Data</h2>
<h3>Description</h3>
<p>Data on planets outside the Solar System.</p>
<h3>Usage</h3>
<pre>data("planets")</pre>
<h3>Format</h3>
<p>A data frame with 101 observations from 101 exoplanets on the following 3 variables.</p>
<dl>
<dt>mass</dt>
<dd>
<p>Jupiter mass of the planet.</p>
</dd>
<dt>period</dt>
<dd>
<p>period in earth days.</p>
</dd>
<dt>eccen</dt>
<dd>
<p>the radial eccentricity of the planet.</p>
</dd>
</dl>
<h3>Details</h3>
<p>From the properties of the exoplanets found up to now it appears that the theory of planetary development constructed for the planets of the Solar System may need to be reformulated. The exoplanets are not at all like the nine local planets that we know so well. A first step in the process of understanding the exoplanets might be to try to classify them with respect to their known properties.</p>
<h3>Source</h3>
<p>M. Mayor and P. Frei (2003). <em>New Worlds in the Cosmos: The Discovery of Exoplanets</em>. Cambridge University Press, Cambridge, UK.</p>
<h3>Examples</h3>
<pre>data("planets", package = "HSAUR")
require("scatterplot3d")
scatterplot3d(log(planets$mass), log(planets$period), log(planets$eccen), 
type = "h", highlight.3d = TRUE,angle = 55, 
scale.y = 0.7, pch = 16)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94903.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94903.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-planets.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94903.json';</script>