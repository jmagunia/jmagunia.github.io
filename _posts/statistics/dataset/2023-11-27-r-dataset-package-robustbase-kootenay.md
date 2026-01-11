---
title: R Dataset / Package robustbase / kootenay
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">kootenay</span> data set which pertains to Waterflow Measurements of Kootenay River in Libby and Newgate. The <span class="mono">kootenay</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">kootenay</span> data set in R by issuing the following command at the console <span class="mono">data("kootenay")</span>. This will load the data into a variable called <span class="mono">kootenay</span>. If R says the <span class="mono">kootenay</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84799.csv">kootenay R data set</a></span>. The size of this file is about 142 bytes.</p><h2>Waterflow Measurements of Kootenay River in Libby and Newgate</h2>
<h3>Description</h3>
<p>The original data set is the waterflow in January of the Kootenay river, measured at two locations, namely, Libby (Montana) and Newgate (British Columbia) for 13 consecutive years, 1931–1943.</p>
<p>The data set is of mostly interest because it has been used as example in innumerous didactical situations about robust regression. To this end, one number (in observation 4) has been modified from the original data from originally 44.9 to 15.7 (here).</p>
<h3>Usage</h3>
<pre>data(kootenay)</pre>
<h3>Format</h3>
<p>A data frame with 13 observations on the following 2 variables.</p>
<dl>
<dt><code>Libby</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Newgate</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>The original (unmodified) version of the data is easily obtainable as <code>kootenay0</code> from the examples; other modified versions of the data sets are also used in different places, see the examples below.</p>
<h3>Source</h3>
<p>Original Data, p.58f of Ezekiel and Fox (1959), <em>Methods of Correlation and Regression Analysis</em>. Wiley, N.Y.</p>
<h3>References</h3>
<p>Hampel, F., Ronchetti, E., Rousseeuw, P. and Stahel, W. (1986) <em>Robust Statistics: The Approach Based on Influence Functions</em>; Wiley, N.Y.</p>
<p>Rousseeuw, P. J. and Leroy, A. M. (1987) <em>Robust Regression &amp; Outlier Detection</em>, Wiley, N. Y.</p>
<h3>Examples</h3>
<pre>
data(kootenay)
plot(kootenay, main = "'kootenay' data")
points(kootenay[4,], col = 2, cex =2, pch = 3)abline(lm (Newgate ~ Libby, data = kootenay), col = "pink")
abline(lmrob(Newgate ~ Libby, data = kootenay), col = "blue")## The original version of Ezekiel &amp; Fox:
kootenay0 &lt;- kootenay
kootenay0[4, "Newgate"] &lt;- 44.9
plot(kootenay0, main = "'kootenay0': the original data")
abline(lm (Newgate ~ Libby, data = kootenay0), col = "pink")
abline(lmrob(Newgate ~ Libby, data = kootenay0), col = "blue")## The version with "milder" outlier -- Hampel et al., p.310
kootenay2 &lt;- kootenay0
kootenay2[4, "Libby"] &lt;- 20.0 # instead of 77.6
plot(kootenay2, main = "The 'kootenay2' data",
 xlim = range(kootenay[,"Libby"]))
points(kootenay2[4,], col = 2, cex =2, pch = 3)
abline(lm (Newgate ~ Libby, data = kootenay2), col = "pink")
abline(lmrob(Newgate ~ Libby, data = kootenay2), col = "blue")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84799.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84799.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-kootenay.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84799.json';</script>