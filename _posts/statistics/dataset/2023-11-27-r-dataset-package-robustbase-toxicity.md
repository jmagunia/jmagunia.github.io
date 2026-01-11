---
title: R Dataset / Package robustbase / toxicity
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">toxicity</span> data set which pertains to Toxicity of Carboxylic Acids Data. The <span class="mono">toxicity</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">toxicity</span> data set in R by issuing the following command at the console <span class="mono">data("toxicity")</span>. This will load the data into a variable called <span class="mono">toxicity</span>. If R says the <span class="mono">toxicity</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84864.csv">toxicity R data set</a></span>. The size of this file is about 2,242 bytes.</p><h2>Toxicity of Carboxylic Acids Data</h2>
<h3>Description</h3>
<p>The aim of the experiment was to predict the toxicity of carboxylic acids on the basis of several molecular descriptors.</p>
<h3>Usage</h3>
<pre>data(toxicity)</pre>
<h3>Format</h3>
<p>A data frame with 38 observations on the following 10 variables which are attributes for carboxylic acids:</p>
<dl>
<dt><code>toxicity</code></dt>
<dd>
<p>aquatic toxicity, defined as <i>log(IGC50^(-1))</i>; typically the “response”.</p>
</dd>
<dt><code>logKow</code></dt>
<dd>
<p><i>log Kow</i>, the partition coefficient</p>
</dd>
<dt><code>pKa</code></dt>
<dd>
<p>pKa: the dissociation constant</p>
</dd>
<dt><code>ELUMO</code></dt>
<dd>
<p><b>E</b>nergy of the <b>l</b>owest <b>u</b>noccupied <b>m</b>olecular <b>o</b>rbital</p>
</dd>
<dt><code>Ecarb</code></dt>
<dd>
<p>Electrotopological state of the <b>carb</b>oxylic group</p>
</dd>
<dt><code>Emet</code></dt>
<dd>
<p>Electrotopological state of the <b>met</b>hyl group</p>
</dd>
<dt><code>RM</code></dt>
<dd>
<p>Molar refractivity</p>
</dd>
<dt><code>IR</code></dt>
<dd>
<p>Refraction index</p>
</dd>
<dt><code>Ts</code></dt>
<dd>
<p>Surface tension</p>
</dd>
<dt><code>P</code></dt>
<dd>
<p>Polarizability</p>
</dd>
</dl>
<h3>Source</h3>
<p>The website accompanying the MMY-book: <a href="http://www.wiley.com/legacy/wileychi/robust_statistics">http://www.wiley.com/legacy/wileychi/robust_statistics</a></p>
<h3>References</h3>
<p>Maguna, F.P., Núñez, M.B., Okulik, N.B. and Castro, E.A. (2003) Improved QSAR analysis of the toxicity of aliphatic carboxylic acids; <em>Russian Journal of General Chemistry</em> <b>73</b>, 1792–1798.</p>
<h3>Examples</h3>
<pre>
data(toxicity)
summary(toxicity)
plot(toxicity)
plot(toxicity ~ pKa, data = toxicity)## robustly scale the data (to scale 1) using Qn
(scQ.tox &lt;- sapply(toxicity, Qn))
scTox &lt;- scale(toxicity, center = FALSE, scale = scQ.tox)
csT &lt;- covOGK(scTox, n.iter = 2,
sigmamu = s_Qn, weight.fn = hard.rejection)
as.dist(round(cov2cor(csT$cov), 2))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84864.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84864.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-toxicity.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84864.json';</script>