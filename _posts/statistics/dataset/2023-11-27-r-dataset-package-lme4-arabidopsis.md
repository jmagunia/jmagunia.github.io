---
title: R Dataset / Package lme4 / Arabidopsis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Arabidopsis</span> data set which pertains to Arabidopsis clipping/fertilization data. The <span class="mono">Arabidopsis</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">Arabidopsis</span> data set in R by issuing the following command at the console <span class="mono">data("Arabidopsis")</span>. This will load the data into a variable called <span class="mono">Arabidopsis</span>. If R says the <span class="mono">Arabidopsis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-71941.csv">Arabidopsis R data set</a></span>. The size of this file is about 27,123 bytes.</p><h2>Arabidopsis clipping/fertilization data</h2>
<h3>Description</h3>
<p>Data on genetic variation in responses to fertilization and simulated herbivory in <em>Arabidopsis</em></p>
<h3>Usage</h3>
<pre>data("Arabidopsis")</pre>
<h3>Format</h3>
<p>A data frame with 625 observations on the following 8 variables.</p>
<dl>
<dt><code>reg</code></dt>
<dd>
<p>region: a factor with 3 levels <code>NL</code> (Netherlands), <code>SP</code> (Spain), <code>SW</code> (Sweden)</p>
</dd>
<dt><code>popu</code></dt>
<dd>
<p>population: a factor with the form <code>n.R</code> representing a population in region <code>R</code></p>
</dd>
<dt><code>gen</code></dt>
<dd>
<p>genotype: a factor with 24 (numeric-valued) levels</p>
</dd>
<dt><code>rack</code></dt>
<dd>
<p>a nuisance factor with 2 levels, one for each of two greenhouse racks</p>
</dd>
<dt><code>nutrient</code></dt>
<dd>
<p>fertilization treatment/nutrient level (1, minimal nutrients or 8, added nutrients)</p>
</dd>
<dt><code>amd</code></dt>
<dd>
<p>simulated herbivory or "clipping" (apical meristem damage): <code>unclipped</code> (baseline) or <code>clipped</code></p>
</dd>
<dt><code>status</code></dt>
<dd>
<p>a nuisance factor for germination method (<code>Normal</code>, <code>Petri.Plate</code>, or <code>Transplant</code>)</p>
</dd>
<dt><code>total.fruits</code></dt>
<dd>
<p>total fruit set per plant (integer)</p>
</dd>
</dl>
<h3>Source</h3>
<p>From Josh Banta</p>
<h3>References</h3>
<p>Joshua A. Banta, Martin H. H Stevens, and Massimo Pigliucci (2010) A comprehensive test of the 'limiting resources' framework applied to plant tolerance to apical meristem damage. <em>Oikos</em> <b>119</b>(2), 359–369; <a href="http://dx.doi.org/10.1111/j.1600-0706.2009.17726.x">http://dx.doi.org/10.1111/j.1600-0706.2009.17726.x</a></p>
<h3>Examples</h3>
<pre>
data(Arabidopsis)
summary(Arabidopsis[,"total.fruits"])
table(gsub("[0-9].","",levels(Arabidopsis[,"popu"])))
library(lattice)
stripplot(log(total.fruits+1) ~ amd|nutrient, data = Arabidopsis,
groups = gen,
strip=strip.custom(strip.names=c(TRUE,TRUE)),
type=c('p','a'), ## points and panel-average value --
## see ?panel.xyplot
scales=list(x=list(rot=90)),
main="Panel: nutrient, Color: genotype")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-71941.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-71941.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-arabidopsis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-71941.json';</script>