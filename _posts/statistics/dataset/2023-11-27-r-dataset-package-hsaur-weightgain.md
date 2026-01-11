---
title: R Dataset / Package HSAUR / weightgain
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">weightgain</span> data set which pertains to Gain in Weight of Rats . The <span class="mono">weightgain</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">weightgain</span> data set in R by issuing the following command at the console <span class="mono">data("weightgain")</span>. This will load the data into a variable called <span class="mono">weightgain</span>. If R says the <span class="mono">weightgain</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38517.csv">weightgain R data set</a></span>. The size of this file is about 738 bytes.</p><h2>Gain in Weight of Rats</h2>
<h3>Description</h3>
<p>The data arise from an experiment to study the gain in weight of rats fed on four different diets, distinguished by amount of protein (low and high) and by source of protein (beef and cereal).</p>
<h3>Usage</h3>
<pre>data("weightgain")</pre>
<h3>Format</h3>
<p>A data frame with 40 observations on the following 3 variables.</p>
<dl>
<dt><code>source</code></dt>
<dd>
<p>source of protein given, a factor with levels <code>Beef</code> and <code>Cereal</code>.</p>
</dd>
<dt><code>type</code></dt>
<dd>
<p>amount of protein given, a factor with levels <code>High</code> and <code>Low</code>.</p>
</dd>
<dt><code>weightgain</code></dt>
<dd>
<p>weigt gain in grams.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Ten rats are randomized to each of the four treatments. The question of interest is how diet affects weight gain.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("weightgain", package = "HSAUR")
interaction.plot(weightgain$type, weightgain$source, 
 weightgain$weightgain)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38517.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38517.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-weightgain.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38517.json';</script>