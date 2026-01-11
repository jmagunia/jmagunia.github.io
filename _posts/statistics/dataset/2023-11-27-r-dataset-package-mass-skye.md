---
title: R Dataset / Package MASS / Skye
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Skye</span> data set which pertains to AFM Compositions of Aphyric Skye Lavas. The <span class="mono">Skye</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">Skye</span> data set in R by issuing the following command at the console <span class="mono">data("Skye")</span>. This will load the data into a variable called <span class="mono">Skye</span>. If R says the <span class="mono">Skye</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-20551.csv">Skye R data set</a></span>. The size of this file is about 214 bytes.</p><h2>AFM Compositions of Aphyric Skye Lavas</h2>
<h3>Description</h3>
<p>The <code>Skye</code> data frame has 23 rows and 3 columns.</p>
<h3>Usage</h3>
<pre>
Skye
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>A</code></dt>
<dd>
<p>Percentage of sodium and potassium oxides.</p>
</dd>
<dt><code>F</code></dt>
<dd>
<p>Percentage of iron oxide.</p>
</dd>
<dt><code>M</code></dt>
<dd>
<p>Percentage of magnesium oxide.</p>
</dd>
</dl>
<h3>Source</h3>
<p>R. N. Thompson, J. Esson and A. C. Duncan (1972) Major element chemical variation in the Eocene lavas of the Isle of Skye. <em>J. Petrology</em>, <b>13</b>, 219–253.</p>
<h3>References</h3>
<p>J. Aitchison (1986) <em>The Statistical Analysis of Compositional Data.</em> Chapman and Hall, p.360.</p>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
# ternary() is from the on-line answers.
ternary &lt;- function(X, pch = par("pch"), lcex = 1,
add = FALSE, ord = 1:3, ...)
{
X &lt;- as.matrix(X)
if(any(X &lt; 0)) stop("X must be non-negative")
s &lt;- drop(X %*% rep(1, ncol(X)))
if(any(s&lt;=0)) stop("each row of X must have a positive sum")
if(max(abs(s-1)) &gt; 1e-6) {
warning("row(s) of X will be rescaled")
X &lt;- X / s
}
X &lt;- X[, ord]
s3 &lt;- sqrt(1/3)
if(!add)
{
oldpty &lt;- par("pty")
on.exit(par(pty=oldpty))
par(pty="s")
plot(c(-s3, s3), c(0.5-s3, 0.5+s3), type="n", axes=FALSE,
 xlab="", ylab="")
polygon(c(0, -s3, s3), c(1, 0, 0), density=0)
lab &lt;- NULL
if(!is.null(dn &lt;- dimnames(X))) lab &lt;- dn[[2]]
if(length(lab) &lt; 3) lab &lt;- as.character(1:3)
eps &lt;- 0.05 * lcex
text(c(0, s3+eps*0.7, -s3-eps*0.7),
 c(1+eps, -0.1*eps, -0.1*eps), lab, cex=lcex)
}
points((X[,2] - X[,3])*s3, X[,1], ...)
}ternary(Skye/100, ord=c(1,3,2))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-20551.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-20551.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-skye.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-20551.json';</script>