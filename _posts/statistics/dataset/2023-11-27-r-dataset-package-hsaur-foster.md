---
title: R Dataset / Package HSAUR / foster
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">foster</span> data set which pertains to Foster Feeding Experiment . The <span class="mono">foster</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">foster</span> data set in R by issuing the following command at the console <span class="mono">data("foster")</span>. This will load the data into a variable called <span class="mono">foster</span>. If R says the <span class="mono">foster</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88496.csv">foster R data set</a></span>. The size of this file is about 770 bytes.</p><h2>Foster Feeding Experiment</h2>
<h3>Description</h3>
<p>The data are from a foster feeding experiment with rat mothers and litters of four different genotypes. The measurement is the litter weight after a trial feeding period.</p>
<h3>Usage</h3>
<pre>data("foster")</pre>
<h3>Format</h3>
<p>A data frame with 61 observations on the following 3 variables.</p>
<dl>
<dt><code>litgen</code></dt>
<dd>
<p>genotype of the litter, a factor with levels <code>A</code>, <code>B</code>, <code>I</code>, and <code>J</code>.</p>
</dd>
<dt><code>motgen</code></dt>
<dd>
<p>genotype of the mother, a factor with levels <code>A</code>, <code>B</code>, <code>I</code>, and <code>J</code>.</p>
</dd>
<dt><code>weight</code></dt>
<dd>
<p>the weight of the litter after a feeding period.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Here the interest lies in uncovering the effect of genotype of mother and litter on litter weight.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("foster", package = "HSAUR")
plot.design(foster)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88496.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88496.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-foster.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88496.json';</script>