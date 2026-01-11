---
title: R Dataset / Package HistData / Arbuthnot
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Arbuthnot</span> data set which pertains to Arbuthnot's data on male and female birth ratios in London from 1629-1710.. The <span class="mono">Arbuthnot</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Arbuthnot</span> data set in R by issuing the following command at the console <span class="mono">data("Arbuthnot")</span>. This will load the data into a variable called <span class="mono">Arbuthnot</span>. If R says the <span class="mono">Arbuthnot</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44415.csv">Arbuthnot R data set</a></span>. The size of this file is about 3,590 bytes.</p><h2>Arbuthnot's data on male and female birth ratios in London from 1629-1710.</h2>
<h3>Description</h3>
<p>John Arbuthnot (1710) used these time series data on the ratios of male to female births in London from 1629-1710 to carry out the first known significance test, comparing observed data to a null hypothesis. The data for these 81 years showed that in every year there were more male than female christenings.</p>
<p>On the assumption that male and female births were equally likely, he showed that the probability of observing 82 years with more males than females was vanishingly small (<i>~ 4.14 x 10^{-25}</i>). He used this to argue that a nearly constant birth ratio &gt; 1 could be interpreted to show the guiding hand of a devine being. The data set adds variables of deaths from the plague and total mortality obtained by Campbell and from Creighton (1965).</p>
<h3>Usage</h3>
<pre>data(Arbuthnot)</pre>
<h3>Format</h3>
<p>A data frame with 82 observations on the following 7 variables.</p>
<dl>
<dt><code>Year</code></dt>
<dd>
<p>a numeric vector, 1629-1710</p>
</dd>
<dt><code>Males</code></dt>
<dd>
<p>a numeric vector, number of male christenings</p>
</dd>
<dt><code>Females</code></dt>
<dd>
<p>a numeric vector, number of female christenings</p>
</dd>
<dt><code>Plague</code></dt>
<dd>
<p>a numeric vector, number of deaths from plague</p>
</dd>
<dt><code>Mortality</code></dt>
<dd>
<p>a numeric vector, total mortality</p>
</dd>
<dt><code>Ratio</code></dt>
<dd>
<p>a numeric vector, ratio of Males/Females</p>
</dd>
<dt><code>Total</code></dt>
<dd>
<p>a numeric vector, total christenings in London (000s)</p>
</dd>
</dl>
<h3>Details</h3>
<p>Sandy Zabell (1976) pointed out several errors and inconsistencies in the Arbuthnot data. In particular, the values for 1674 and 1704 are identical, suggesting that the latter were copied erroneously from the former.</p>
<h3>Source</h3>
<p>Arbuthnot, John (1710). "An argument for Devine Providence, taken from the constant Regularity observ'd in the Births of both Sexes," <em>Philosophical transactions</em>, 27, 186-190. Published in 1711.</p>
<h3>References</h3>
<p>Campbell, R. B., Arbuthnot and the Human Sex Ratio (2001). <em>Human Biology</em>, 73:4, 605-610.</p>
<p>Creighton, C. (1965). A History of Epidemics in Britain, 2nd edition, vol. 1 and 2. NY: Barnes and Noble.</p>
<p>S. Zabell (1976). Arbuthnot, Heberden, and the <em>Bills of Mortality</em>. Technical Report No. 40, Department of Statistics, University of Chicago.</p>
<h3>Examples</h3>
<pre>
data(Arbuthnot)
# plot the sex ratios
with(Arbuthnot, plot(Year,Ratio, type='b', ylim=c(1, 1.20), ylab="Sex Ratio (M/F)"))
abline(h=1, col="red")
#add loess smooth
Arb.smooth &lt;- with(Arbuthnot, loess.smooth(Year,Ratio))
lines(Arb.smooth$x, Arb.smooth$y, col="blue", lwd=2)# plot the total christenings to observe the anomalie in 1704
with(Arbuthnot, plot(Year,Total, type='b', ylab="Total Christenings"))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44415.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44415.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-arbuthnot.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44415.json';</script>