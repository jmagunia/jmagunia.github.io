---
title: R Dataset / Package survival / nwtco
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nwtco</span> data set which pertains to Data from the National Wilm's Tumor Study. The <span class="mono">nwtco</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">nwtco</span> data set in R by issuing the following command at the console <span class="mono">data("nwtco")</span>. This will load the data into a variable called <span class="mono">nwtco</span>. If R says the <span class="mono">nwtco</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-71644.csv">nwtco R data set</a></span>. The size of this file is about 113,680 bytes.</p><h2>Data from the National Wilm's Tumor Study</h2>
<h3>Description</h3>
<p>Measurement error example. Tumor histology predicts survival, but prediction is stronger with central lab histology than with the local institution determination.</p>
<h3>Usage</h3>
<pre>nwtco</pre>
<h3>Format</h3>
<p>A data frame with 4028 observations on the following 9 variables.</p>
<dl>
<dt><code>seqno</code></dt>
<dd>
<p>id number</p>
</dd>
<dt><code>instit</code></dt>
<dd>
<p>Histology from local institution</p>
</dd>
<dt><code>histol</code></dt>
<dd>
<p>Histology from central lab</p>
</dd>
<dt><code>stage</code></dt>
<dd>
<p>Disease stage</p>
</dd>
<dt><code>study</code></dt>
<dd>
<p>study</p>
</dd>
<dt><code>rel</code></dt>
<dd>
<p>indicator for relapse</p>
</dd>
<dt><code>edrel</code></dt>
<dd>
<p>time to relapse</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age in months</p>
</dd>
<dt><code>in.subcohort</code></dt>
<dd>
<p>Included in the subcohort for the example in the paper</p>
</dd>
</dl>
<h3>References</h3>
<p>NE Breslow and N Chatterjee (1999), Design and analysis of two-phase studies with binary outcome applied to Wilms tumour prognosis. <em>Applied Statistics</em> <b>48</b>, 457–68.</p>
<h3>Examples</h3>
<pre>
with(nwtco, table(instit,histol))
anova(coxph(Surv(edrel,rel)~histol+instit,data=nwtco))
anova(coxph(Surv(edrel,rel)~instit+histol,data=nwtco))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-71644.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-71644.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-nwtco.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-71644.json';</script>