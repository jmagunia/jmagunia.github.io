---
title: R Dataset / Package lme4 / grouseticks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">grouseticks</span> data set which pertains to Data on red grouse ticks from Elston et al. 2001. The <span class="mono">grouseticks</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">grouseticks</span> data set in R by issuing the following command at the console <span class="mono">data("grouseticks")</span>. This will load the data into a variable called <span class="mono">grouseticks</span>. If R says the <span class="mono">grouseticks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86658.csv">grouseticks R data set</a></span>. The size of this file is about 18,311 bytes.</p><h2>Data on red grouse ticks from Elston et al. 2001</h2>
<h3>Description</h3>
<p>Number of ticks on the heads of red grouse chicks sampled in the field (<code>grouseticks</code>) and an aggregated version (<code>grouseticks_agg</code>); see original source for more details</p>
<h3>Usage</h3>
<pre>data(grouseticks)</pre>
<h3>Format</h3>
<dl>
<dt><code>INDEX</code></dt>
<dd>
<p>(factor) chick number (observation level)</p>
</dd>
<dt><code>TICKS</code></dt>
<dd>
<p>number of ticks sampled</p>
</dd>
<dt><code>BROOD</code></dt>
<dd>
<p>(factor) brood number</p>
</dd>
<dt><code>HEIGHT</code></dt>
<dd>
<p>height above sea level (meters)</p>
</dd>
<dt><code>YEAR</code></dt>
<dd>
<p>year (-1900)</p>
</dd>
<dt><code>LOCATION</code></dt>
<dd>
<p>(factor) geographic location code</p>
</dd>
<dt><code>cHEIGHT</code></dt>
<dd>
<p>centered height, derived from <code>HEIGHT</code></p>
</dd>
<dt><code>meanTICKS</code></dt>
<dd>
<p>mean number of ticks by brood</p>
</dd>
<dt><code>varTICKS</code></dt>
<dd>
<p>variance of number of ticks by brood</p>
</dd>
</dl>
<h3>Details</h3>
<p><code>grouseticks_agg</code> is just a brood-level aggregation of the data</p>
<h3>Source</h3>
<p>Robert Moss, via David Elston</p>
<h3>References</h3>
<p>Elston, D. A., R. Moss, T. Boulinier, C. Arrowsmith, and X. Lambin. 2001. "Analysis of Aggregation, a Worked Example: Numbers of Ticks on Red Grouse Chicks." Parasitology 122 (05): 563-569. doi:10.1017/S0031182001007740. <a href="http://journals.cambridge.org/action/displayAbstract?fromPage=online&amp;aid=82701">http://journals.cambridge.org/action/displayAbstract?fromPage=online&amp;aid=82701</a>.</p>
<h3>Examples</h3>
<pre>
data(grouseticks)
## Figure 1a from Elston et al
par(las=1,bty="l")
tvec &lt;- c(0,1,2,5,20,40,80)
pvec &lt;- c(4,1,3)
with(grouseticks_agg,plot(1+meanTICKS~HEIGHT,
pch=pvec[factor(YEAR)],
log="y",axes=FALSE,
xlab="Altitude (m)",
ylab="Brood mean ticks"))
axis(side=1)
axis(side=2,at=tvec+1,label=tvec)
box()
abline(v=405,lty=2)
## Figure 1b
with(grouseticks_agg,plot(varTICKS~meanTICKS,
pch=4,
xlab="Brood mean ticks",
ylab="Within-brood variance"))
curve(1*x,from=0,to=70,add=TRUE)
## Model fitting
form &lt;- TICKS~YEAR+HEIGHT+(1|BROOD)+(1|INDEX)+(1|LOCATION)
(full_mod1&lt;- glmer(form, family="poisson",data=grouseticks))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86658.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86658.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-grouseticks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86658.json';</script>