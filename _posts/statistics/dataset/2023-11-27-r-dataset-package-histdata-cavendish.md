---
title: R Dataset / Package HistData / Cavendish
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Cavendish</span> data set which pertains to Cavendish's Determinations of the Density of the Earth. The <span class="mono">Cavendish</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Cavendish</span> data set in R by issuing the following command at the console <span class="mono">data("Cavendish")</span>. This will load the data into a variable called <span class="mono">Cavendish</span>. If R says the <span class="mono">Cavendish</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80101.csv">Cavendish R data set</a></span>. The size of this file is about 447 bytes.</p><h2>Cavendish's Determinations of the Density of the Earth</h2>
<h3>Description</h3>
<p>Henry Cavendish carried out a series of experiments in 1798 to determine the mean density of the earth, as an indirect means to calculate the gravitational constant, G, in Newton's formula for the force (f) of gravitational attraction, <i>f = G m M / r^2</i> between two bodies of mass m and M.</p>
<p>Stigler (1977) used these data to illustrate properties of robust estimators with real, historical data. For these data sets, he found that trimmed means performed as well or better than more elaborate robust estimators.</p>
<h3>Usage</h3>
<pre>data(Cavendish)</pre>
<h3>Format</h3>
<p>A data frame with 29 observations on the following 3 variables.</p>
<dl>
<dt><code>density</code></dt>
<dd>
<p>Cavendish's 29 determinations of the mean density of the earth</p>
</dd>
<dt><code>density2</code></dt>
<dd>
<p>same as <code>density</code>, with the third value (4.88) replaced by 5.88</p>
</dd>
<dt><code>density3</code></dt>
<dd>
<p>same as <code>density</code>, omitting the the first 6 observations</p>
</dd>
</dl>
<h3>Details</h3>
<p>Density values (D) of the earth are given as relative to that of water. If the earth is regarded as a sphere of radius R, Newton's law can be expressed as <i>G D = 3 g / (4 π R)</i>, where <i>g=9.806 m/s^2</i> is the acceleration due to gravity; so G is proportional to 1/D.</p>
<p><code>density</code> contains Cavendish's measurements as analyzed, where he treated the value 4.88 as if it were 5.88. <code>density2</code> corrects this. Cavendish also changed his experimental apparatus after the sixth determination, using a stiffer wire in the torsion balance. <code>density3</code> replaces the first 6 values with <code>NA</code>.</p>
<p>The modern "true" value of D is taken as 5.517. The gravitational constant can be expressed as <i>G = 6.674 * 10^-11 m^3/kg/s^2</i>.</p>
<h3>Source</h3>
<p>Kyle Siegrist, "Virtual Laboratories in Probability and Statistics", <a href="http://www.math.uah.edu/stat/data/Cavendish.html">http://www.math.uah.edu/stat/data/Cavendish.html</a></p>
<p>Stephen M. Stigler (1977), "Do robust estimators work with <em>real</em> data?", <em>Annals of Statistics</em>, 5, 1055-1098</p>
<h3>References</h3>
<p>Cavendish, H. (1798). Experiments to determine the density of the earth. <em>Philosophical Transactions of the Royal Society of London</em>, 88 (Part II), 469-527. Reprinted in A. S. Mackenzie (ed.), <em>The Laws of Gravitation</em>, 1900, New York: American.</p>
<p>Brownlee, K. A. (1965). <em>Statistical theory and methodology in science and engineering</em>, NY: Wiley, p. 520.</p>
<h3>Examples</h3>
<pre>
data(Cavendish)
summary(Cavendish)
boxplot(Cavendish, ylab='Density', xlab='Data set')
abline(h=5.517, col="red", lwd=2)# trimmed means
sapply(Cavendish, mean, trim=.1, na.rm=TRUE)# express in terms of G
G &lt;- function(D, g=9.806, R=6371) 3*g / (4 * pi * R * D)
 
boxplot(10^5 * G(Cavendish), ylab='~ Gravitational constant (G)', xlab='Data set')
abline(h=10^5 * G(5.517), col="red", lwd=2)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80101.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80101.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-cavendish.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80101.json';</script>