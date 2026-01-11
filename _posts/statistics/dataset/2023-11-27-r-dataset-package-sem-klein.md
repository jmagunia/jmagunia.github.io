---
title: R Dataset / Package sem / Klein
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Klein</span> data set which pertains to Klein's Data on the U. S. Economy. The <span class="mono">Klein</span> data set is found in the <span class="mono">sem</span> R package. You can load the <span class="mono">Klein</span> data set in R by issuing the following command at the console <span class="mono">data("Klein")</span>. This will load the data into a variable called <span class="mono">Klein</span>. If R says the <span class="mono">Klein</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("sem")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47489.csv">Klein R data set</a></span>. The size of this file is about 1,037 bytes.</p><h2>Klein's Data on the U. S. Economy</h2>
<h3>Description</h3>
<p>Data for Klein's (1950) simple econometric model of the U. S. economy.</p>
<p>The <code>Klein</code> data frame has 22 rows and 10 columns.</p>
<h3>Usage</h3>
<pre>Klein</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Year</dt>
<dd>
<p>1921–1941</p>
</dd>
<dt>C</dt>
<dd>
<p>consumption.</p>
</dd>
<dt>P</dt>
<dd>
<p>private profits.</p>
</dd>
<dt>Wp</dt>
<dd>
<p>private wages.</p>
</dd>
<dt>I</dt>
<dd>
<p>investment.</p>
</dd>
<dt>K.lag</dt>
<dd>
<p>capital stock, lagged one year.</p>
</dd>
<dt>X</dt>
<dd>
<p>equilibrium demand.</p>
</dd>
<dt>Wg</dt>
<dd>
<p>government wages.</p>
</dd>
<dt>G</dt>
<dd>
<p>government non-wage spending.</p>
</dd>
<dt>T</dt>
<dd>
<p>indirect business taxes and net exports.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Greene, W. H. (1993) <em>Econometric Analysis, Second Edition.</em> Macmillan.</p>
<h3>References</h3>
<p>Klein, L. (1950) <em>Economic Fluctuations in the United States 1921–1941.</em> Wiley.</p>
<h3>Examples</h3>
<pre>
Klein$P.lag &lt;- c(NA, Klein$P[-22])
Klein$X.lag &lt;- c(NA, Klein$X[-22])summary(tsls(C ~ P + P.lag + I(Wp + Wg), 
instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
data=Klein))

summary(tsls(I ~ P + P.lag + K.lag,
instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
data=Klein))

summary(tsls(Wp ~ X + X.lag + I(Year - 1931),
instruments=~1 + G + T + Wg + I(Year - 1931) + K.lag + P.lag + X.lag,
data=Klein))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47489.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47489.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-sem-klein.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47489.json';</script>