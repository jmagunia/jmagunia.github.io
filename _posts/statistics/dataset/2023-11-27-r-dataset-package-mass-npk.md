---
title: R Dataset / Package MASS / npk
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">npk</span> data set which pertains to Classical N, P, K Factorial Experiment. The <span class="mono">npk</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">npk</span> data set in R by issuing the following command at the console <span class="mono">data("npk")</span>. This will load the data into a variable called <span class="mono">npk</span>. If R says the <span class="mono">npk</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94871.csv">npk R data set</a></span>. The size of this file is about 518 bytes.</p><h2>Classical N, P, K Factorial Experiment</h2>
<h3>Description</h3>
<p>A classical N, P, K (nitrogen, phosphate, potassium) factorial experiment on the growth of peas conducted on 6 blocks. Each half of a fractional factorial design confounding the NPK interaction was used on 3 of the plots.</p>
<h3>Usage</h3>
<pre>
npk
</pre>
<h3>Format</h3>
<p>The <code>npk</code> data frame has 24 rows and 5 columns:</p>
<dl>
<dt><code>block</code></dt>
<dd>
<p>which block (label 1 to 6).</p>
</dd>
<dt><code>N</code></dt>
<dd>
<p>indicator (0/1) for the application of nitrogen.</p>
</dd>
<dt><code>P</code></dt>
<dd>
<p>indicator (0/1) for the application of phosphate.</p>
</dd>
<dt><code>K</code></dt>
<dd>
<p>indicator (0/1) for the application of potassium.</p>
</dd>
<dt><code>yield</code></dt>
<dd>
<p>Yield of peas, in pounds/plot (the plots were (1/70) acre).</p>
</dd>
</dl>
<h3>Note</h3>
<p>This dataset is also contained in <span style="font-family: Courier New, Courier; color: #666666;"><b>R</b></span> 3.0.2 and later.</p>
<h3>Source</h3>
<p>Imperial College, London, M.Sc. exercise sheet.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
options(contrasts = c("contr.sum", "contr.poly"))
npk.aov &lt;- aov(yield ~ block + N*P*K, npk)
npk.aov
summary(npk.aov)
alias(npk.aov)
coef(npk.aov)
options(contrasts = c("contr.treatment", "contr.poly"))
npk.aov1 &lt;- aov(yield ~ block + N + K, data = npk)
summary.lm(npk.aov1)
se.contrast(npk.aov1, list(N=="0", N=="1"), data = npk)
model.tables(npk.aov1, type = "means", se = TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94871.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94871.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-npk.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94871.json';</script>