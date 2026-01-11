---
title: R Dataset / Package HistData / Fingerprints
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Fingerprints</span> data set which pertains to Waite's data on Patterns in Fingerprints. The <span class="mono">Fingerprints</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Fingerprints</span> data set in R by issuing the following command at the console <span class="mono">data("Fingerprints")</span>. This will load the data into a variable called <span class="mono">Fingerprints</span>. If R says the <span class="mono">Fingerprints</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38304.csv">Fingerprints R data set</a></span>. The size of this file is about 430 bytes.</p><h2>Waite's data on Patterns in Fingerprints</h2>
<h3>Description</h3>
<p>Waite (1915) was interested in analyzing the association of patterns in fingerprints, and produced a table of counts for 2000 right hands, classified by the number of fingers describable as a "whorl", a "small loop" (or neither). Because each hand contributes five fingers, the number of <code>Whorls + Loops</code> cannot exceed 5, so the contingency table is necessarily triangular.</p>
<p>Karl Pearson (1904) introduced the test for independence in contingency tables, and by 1913 had developed methods for "restricted contingency tables," such as the triangular table analyzed by Waite. The general formulation of such tests for association in restricted tables is now referred to as models for quasi-independence.</p>
<h3>Usage</h3>
<pre>data(Fingerprints)</pre>
<h3>Format</h3>
<p>A frequency data frame with 36 observations on the following 3 variables, representing a 6 x 6 table giving the cross-classification of the fingers on 2000 right hands as a whorl, small loop or neither.</p>
<dl>
<dt><code>Whorls</code></dt>
<dd>
<p>Number of whorls, an ordered factor with levels <code>0</code> &lt; <code>1</code> &lt; <code>2</code> &lt; <code>3</code> &lt; <code>4</code> &lt; <code>5</code></p>
</dd>
<dt><code>Loops</code></dt>
<dd>
<p>Number of small loops, an ordered factor with levels <code>0</code> &lt; <code>1</code> &lt; <code>2</code> &lt; <code>3</code> &lt; <code>4</code> &lt; <code>5</code></p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>Number of hands</p>
</dd>
</dl>
<h3>Details</h3>
<p>Cells for which <code>Whorls + Loops&gt;5</code> have <code>NA</code> for <code>count</code></p>
<h3>Source</h3>
<p>Stigler, S. M. (1999). <em>Statistics on the Table</em>. Cambridge, MA: Harvard University Press, table 19.4.</p>
<h3>References</h3>
<p>Pearson, K. (1904). Mathematical contributions to the theory of evolution. XIII. On the theory of contingency and its relation to association and normal correlation. Reprinted in <em>Karl Pearson's Early Statistical Papers</em>, Cambridge: Cambridge University Press, 1948, 443-475.</p>
<p>Waite, H. (1915). The analysis of fingerprints, <em>Biometrika</em>, 10, 421-478.</p>
<h3>Examples</h3>
<pre>
data(Fingerprints)
xtabs(count ~ Whorls + Loops, data=Fingerprints)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38304.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38304.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-fingerprints.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38304.json';</script>