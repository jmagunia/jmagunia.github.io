---
title: R Dataset / Package lattice / ethanol
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ethanol</span> data set which pertains to Engine exhaust fumes from burning ethanol . The <span class="mono">ethanol</span> data set is found in the <span class="mono">lattice</span> R package. You can load the <span class="mono">ethanol</span> data set in R by issuing the following command at the console <span class="mono">data("ethanol")</span>. This will load the data into a variable called <span class="mono">ethanol</span>. If R says the <span class="mono">ethanol</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lattice")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-39476.csv">ethanol R data set</a></span>. The size of this file is about 1,315 bytes.</p><h2>Engine exhaust fumes from burning ethanol</h2>
<h3>Description</h3>
<p>Ethanol fuel was burned in a single-cylinder engine. For various settings of the engine compression and equivalence ratio, the emissions of nitrogen oxides were recorded.</p>
<h3>Usage</h3>
<pre>ethanol</pre>
<h3>Format</h3>
<p>A data frame with 88 observations on the following 3 variables.</p>
<dl>
<dt>NOx</dt>
<dd>
<p>Concentration of nitrogen oxides (NO and NO2) in micrograms/J.</p>
</dd>
<dt>C</dt>
<dd>
<p>Compression ratio of the engine.</p>
</dd>
<dt>E</dt>
<dd>
<p>Equivalence ratio–a measure of the richness of the air and ethanol fuel mixture.</p>
</dd>
</dl>
<h3>Author(s)</h3>
<p>Documentation contributed by Kevin Wright.</p>
<h3>Source</h3>
<p>Brinkman, N.D. (1981) Ethanol Fuel—A Single-Cylinder Engine Study of Efficiency and Exhaust Emissions. <em>SAE transactions</em>, <b>90</b>, 1410–1424.</p>
<h3>References</h3>
<p>Cleveland, William S. (1993) <em>Visualizing Data</em>. Hobart Press, Summit, New Jersey.</p>
<h3>Examples</h3>
<pre>
## Constructing panel functions on the fly
EE &lt;- equal.count(ethanol$E, number=9, overlap=1/4)
xyplot(NOx ~ C | EE, data = ethanol,
 prepanel = function(x, y) prepanel.loess(x, y, span = 1),
 xlab = "Compression ratio", ylab = "NOx (micrograms/J)",
 panel = function(x, y) {
 panel.grid(h=-1, v= 2)
 panel.xyplot(x, y)
 panel.loess(x,y, span=1)
 },
 aspect = "xy")# Wireframe loess surface fit.See Figure 4.61 from Cleveland.
require(stats)
with(ethanol, {
eth.lo &lt;- loess(NOx ~ C * E, span = 1/3, parametric = "C", 
drop.square = "C", family="symmetric")
eth.marginal &lt;- list(C = seq(min(C), max(C), length.out = 25), 
 E = seq(min(E), max(E), length.out = 25))
eth.grid &lt;- expand.grid(eth.marginal)
eth.fit &lt;- predict(eth.lo, eth.grid)
wireframe(eth.fit ~ eth.grid$C * eth.grid$E,
shade=TRUE,
screen = list(z = 40, x = -60, y=0),
distance = .1,
xlab = "C", ylab = "E", zlab = "NOx")
})
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-39476.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-39476.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lattice-ethanol.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-39476.json';</script>