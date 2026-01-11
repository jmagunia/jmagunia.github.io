---
title: R Dataset / Package robustbase / Animals2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Animals2</span> data set which pertains to Brain and Body Weights for 65 Species of Land Animals. The <span class="mono">Animals2</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">Animals2</span> data set in R by issuing the following command at the console <span class="mono">data("Animals2")</span>. This will load the data into a variable called <span class="mono">Animals2</span>. If R says the <span class="mono">Animals2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-33388.csv">Animals2 R data set</a></span>. The size of this file is about 1,333 bytes.</p><h2>Brain and Body Weights for 65 Species of Land Animals</h2>
<h3>Description</h3>
<p>A data frame with average brain and body weights for 62 species of land mammals and three others.</p>
<p>Note that this is simply the union of <code>Animals</code> and <code>mammals</code>.</p>
<h3>Usage</h3>
<pre>
Animals2
</pre>
<h3>Format</h3>
<dl>
<dt><code>body</code></dt>
<dd>
<p>body weight in kg</p>
</dd>
<dt><code>brain</code></dt>
<dd>
<p>brain weight in g</p>
</dd>
</dl>
<h3>Note</h3>
<p>After loading the <span class="pkg">MASS</span> package, the data set is simply constructed by <code>Animals2 &lt;- local({D &lt;- rbind(Animals, mammals); unique(D[order(D$body,D$brain),])})</code>.</p>
<p>Rousseeuw and Leroy (1987)'s ‘brain’ data is the same as <span class="pkg">MASS</span>'s <code>Animals</code> (with Rat and Brachiosaurus interchanged, see the example below).</p>
<h3>Source</h3>
<p>Weisberg, S. (1985) <em>Applied Linear Regression.</em> 2nd edition. Wiley, pp. 144–5.</p>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection.</em> Wiley, p. 57.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Forth Edition. Springer.</p>
<h3>Examples</h3>
<pre>
data(Animals2)
## Sensible Plot needs doubly logarithmic scale
plot(Animals2, log = "xy")## Regression example plot:
plotbb &lt;- function(bbdat) {
d.name &lt;- deparse(substitute(bbdat))
plot(log(brain) ~ log(body), data = bbdat, main = d.name)
abline( lm(log(brain) ~ log(body), data = bbdat))
abline(MASS::rlm(log(brain) ~ log(body), data = bbdat), col = 2)
legend("bottomright", leg = c("lm", "rlm"), col=1:2, lwd=1, inset = 1/20)
}
plotbb(bbdat = Animals2)## The `same' plot for Rousseeuw's subset:
data(Animals, package = "MASS")
brain &lt;- Animals[c(1:24, 26:25, 27:28),]
plotbb(bbdat = brain)lbrain &lt;- log(brain)
plot(mahalanobis(lbrain, colMeans(lbrain), var(lbrain)),
 main = "Classical Mahalanobis Distances")
mcd &lt;- covMcd(lbrain)
plot(mahalanobis(lbrain,mcd$center,mcd$cov),
 main = "Robust (MCD) Mahalanobis Distances")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-33388.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-33388.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-animals2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-33388.json';</script>