---
title: R Dataset / Package datasets / BOD
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">BOD</span> data set which pertains to Biochemical Oxygen Demand . The <span class="mono">BOD</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">BOD</span> data set in R by issuing the following command at the console <span class="mono">data("BOD")</span>. This will load the data into a variable called <span class="mono">BOD</span>. If R says the <span class="mono">BOD</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83423.csv">BOD R data set</a></span>. The size of this file is about 53 bytes.</p><h2>Biochemical Oxygen Demand</h2>
<h3>Description</h3>
<p>The <code>BOD</code> data frame has 6 rows and 2 columns giving the biochemical oxygen demand versus time in an evaluation of water quality.</p>
<h3>Usage</h3>
<pre>BOD</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Time</code></dt>
<dd>
<p>A numeric vector giving the time of the measurement (days).</p>
</dd>
<dt><code>demand</code></dt>
<dd>
<p>A numeric vector giving the biochemical oxygen demand (mg/l).</p>
</dd>
</dl>
<h3>Source</h3>
<p>Bates, D.M. and Watts, D.G. (1988), <em>Nonlinear Regression Analysis and Its Applications</em>, Wiley, Appendix A1.4.</p>
<p>Originally from Marske (1967), <em>Biochemical Oxygen Demand Data Interpretation Using Sum of Squares Surface</em> M.Sc. Thesis, University of Wisconsin – Madison.</p>
<h3>Examples</h3>
<pre>require(stats)
# simplest form of fitting a first-order model to these data
fm1 &lt;- nls(demand ~ A*(1-exp(-exp(lrc)*Time)), data = BOD,
 start = c(A = 20, lrc = log(.35)))
coef(fm1)
fm1
# using the plinear algorithm
fm2 &lt;- nls(demand ~ (1-exp(-exp(lrc)*Time)), data = BOD,
 start = c(lrc = log(.35)), algorithm = "plinear", trace = TRUE)
# using a self-starting model
fm3 &lt;- nls(demand ~ SSasympOrig(Time, A, lrc), data = BOD)
summary(fm3)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83423.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83423.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-bod.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83423.json';</script>