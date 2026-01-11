---
title: R Dataset / Package MASS / oats
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">oats</span> data set which pertains to Data from an Oats Field Trial. The <span class="mono">oats</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">oats</span> data set in R by issuing the following command at the console <span class="mono">data("oats")</span>. This will load the data into a variable called <span class="mono">oats</span>. If R says the <span class="mono">oats</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83799.csv">oats R data set</a></span>. The size of this file is about 2,155 bytes.</p><h2>Data from an Oats Field Trial</h2>
<h3>Description</h3>
<p>The yield of oats from a split-plot field trial using three varieties and four levels of manurial treatment. The experiment was laid out in 6 blocks of 3 main plots, each split into 4 sub-plots. The varieties were applied to the main plots and the manurial treatments to the sub-plots.</p>
<h3>Usage</h3>
<pre>
oats
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>B</code></dt>
<dd>
<p>Blocks, levels I, II, III, IV, V and VI.</p>
</dd>
<dt><code>V</code></dt>
<dd>
<p>Varieties, 3 levels.</p>
</dd>
<dt><code>N</code></dt>
<dd>
<p>Nitrogen (manurial) treatment, levels 0.0cwt, 0.2cwt, 0.4cwt and 0.6cwt, showing the application in cwt/acre.</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Yields in 1/4lbs per sub-plot, each of area 1/80 acre.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Yates, F. (1935) Complex experiments, <em>Journal of the Royal Statistical Society Suppl.</em> <b>2</b>, 181–247.</p>
<p>Also given in Yates, F. (1970) <em>Experimental design: Selected papers of Frank Yates, C.B.E, F.R.S.</em> London: Griffin.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
oats$Nf &lt;- ordered(oats$N, levels = sort(levels(oats$N)))
oats.aov &lt;- aov(Y ~ Nf*V + Error(B/V), data = oats, qr = TRUE)
summary(oats.aov)
summary(oats.aov, split = list(Nf=list(L=1, Dev=2:3)))
par(mfrow = c(1,2), pty = "s")
plot(fitted(oats.aov[[4]]), studres(oats.aov[[4]]))
abline(h = 0, lty = 2)
oats.pr &lt;- proj(oats.aov)
qqnorm(oats.pr[[4]][,"Residuals"], ylab = "Stratum 4 residuals")
qqline(oats.pr[[4]][,"Residuals"])par(mfrow = c(1,1), pty = "m")
oats.aov2 &lt;- aov(Y ~ N + V + Error(B/V), data = oats, qr = TRUE)
model.tables(oats.aov2, type = "means", se = TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83799.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83799.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-oats.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83799.json';</script>