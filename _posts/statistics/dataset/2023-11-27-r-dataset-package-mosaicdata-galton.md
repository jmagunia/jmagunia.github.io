---
title: R Dataset / Package mosaicData / Galton
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Galton</span> data set which pertains to Galton's dataset of parent and child heights. The <span class="mono">Galton</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Galton</span> data set in R by issuing the following command at the console <span class="mono">data("Galton")</span>. This will load the data into a variable called <span class="mono">Galton</span>. If R says the <span class="mono">Galton</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42292.csv">Galton R data set</a></span>. The size of this file is about 20,032 bytes.</p><h2>Galton's dataset of parent and child heights</h2>
<h3>Description</h3>
<p>In the 1880's, Francis Galton was developing ways to quantify the heritability of traits. As part of this work, he collected data on the heights of adult children and their parents.</p>
<h3>Usage</h3>
<pre>
data(Galton)
</pre>
<h3>Format</h3>
<p>A data frame with 898 observations on the following variables.</p>
<ul>
<li>
<p><code>family</code> a factor with levels for each family</p>
</li>
<li>
<p><code>father</code> the father's height (in inches)</p>
</li>
<li>
<p><code>mother</code> the mother's height (in inches)</p>
</li>
<li>
<p><code>sex</code> the child's sex: <code>F</code> or <code>M</code></p>
</li>
<li>
<p><code>height</code> the child's height as an adult (in inches)</p>
</li>
<li>
<p><code>nkids</code> the number of adult children in the family, or, at least, the number whose heights Galton recorded.</p>
</li>
</ul>
<h3>Details</h3>
<p>Entries were deleted for those children whose heights were not recorded numerically by Galton, who sometimes used entries such as “tall”, “short”, “idiotic”, “deformed” and so on.</p>
<h3>Source</h3>
<p>The data were transcribed by J.A. Hanley who has published them at <a href="http://www.medicine.mcgill.ca/epidemiology/hanley/galton/">http://www.medicine.mcgill.ca/epidemiology/hanley/galton/</a></p>
<h3>References</h3>
<p>"Transmuting" women into men: Galton's family data on human stature. (2004) <em>The American Statistician</em>, 58(3):237-243.</p>
<h3>Examples</h3>
<pre>
data(Galton)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42292.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42292.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-galton.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42292.json';</script>