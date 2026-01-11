---
title: R Dataset / Package HistData / PearsonLee
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PearsonLee</span> data set which pertains to Pearson and Lee's data on the heights of parents and children classified by gender. The <span class="mono">PearsonLee</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">PearsonLee</span> data set in R by issuing the following command at the console <span class="mono">data("PearsonLee")</span>. This will load the data into a variable called <span class="mono">PearsonLee</span>. If R says the <span class="mono">PearsonLee</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42701.csv">PearsonLee R data set</a></span>. The size of this file is about 27,525 bytes.</p><h2>Pearson and Lee's data on the heights of parents and children classified by gender</h2>
<h3>Description</h3>
<p>Wachsmuth et. al (2003) noticed that a loess smooth through Galton's data on heights of mid-parents and their offspring exhibited a slightly non-linear trend, and asked whether this might be due to Galton having pooled the heights of fathers and mothers and sons and daughters in constructing his tables and graphs.</p>
<p>To answer this question, they used analogous data from English families at about the same time, tabulated by Karl Pearson and Alice Lee (1896, 1903), but where the heights of parents and children were each classified by gender of the parent.</p>
<h3>Usage</h3>
<pre>data(PearsonLee)</pre>
<h3>Format</h3>
<p>A frequency data frame with 746 observations on the following 6 variables.</p>
<dl>
<dt><code>child</code></dt>
<dd>
<p>child height in inches, a numeric vector</p>
</dd>
<dt><code>parent</code></dt>
<dd>
<p>parent height in inches, a numeric vector</p>
</dd>
<dt><code>frequency</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>gp</code></dt>
<dd>
<p>a factor with levels <code>fd</code> <code>fs</code> <code>md</code> <code>ms</code></p>
</dd>
<dt><code>par</code></dt>
<dd>
<p>a factor with levels <code>Father</code> <code>Mother</code></p>
</dd>
<dt><code>chl</code></dt>
<dd>
<p>a factor with levels <code>Daughter</code> <code>Son</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>The variables <code>gp</code>, <code>par</code> and <code>chl</code> are provided to allow stratifying the data according to the gender of the father/mother and son/daughter.</p>
<h3>Source</h3>
<p>Pearson, K. and Lee, A. (1896). Mathematical contributions to the theory of evolution. On telegony in man, etc. <em>Proceedings of the Royal Society of London</em>, 60 , 273-283.</p>
<p>Pearson, K. and Lee, A. (1903). On the laws of inheritance in man: I. Inheritance of physical characters. <em>Biometika</em>, 2(4), 357-462. (Tables XXII, p. 415; XXV, p. 417; XXVIII, p. 419 and XXXI, p. 421.)</p>
<h3>References</h3>
<p>Wachsmuth, A.W., Wilkinson L., Dallal G.E. (2003). Galton's bend: A previously undiscovered nonlinearity in Galton's family stature regression data. <em>The American Statistician</em>, 57, 190-192. <a href="http://www.cs.uic.edu/~wilkinson/Publications/galton.pdf">http://www.cs.uic.edu/~wilkinson/Publications/galton.pdf</a></p>
<h3>See Also</h3>
<p><code>Galton</code></p>
<h3>Examples</h3>
<pre>
data(PearsonLee)
str(PearsonLee)with(PearsonLee, 
{
lim &lt;- c(55,80)
xv &lt;- seq(55,80, .5)
sunflowerplot(parent,child, number=frequency, xlim=lim, ylim=lim, seg.col="gray", size=.1)
abline(lm(child ~ parent, weights=frequency), col="blue", lwd=2)
lines(xv, predict(loess(child ~ parent, weights=frequency), data.frame(parent=xv)), 
col="blue", lwd=2)
# NB: dataEllipse doesn't take frequency into account
if(require(car)) {
dataEllipse(parent,child, xlim=lim, ylim=lim, plot.points=FALSE)
}
})## separate plots for combinations of (chl, par)# this doesn't quite work, because xyplot can't handle weights
require(lattice)
xyplot(child ~ parent|par+chl, data=PearsonLee, type=c("p", "r", "smooth"), col.line="red")# Using ggplot [thx: Dennis Murphy]
require(ggplot2)
ggplot(PearsonLee, aes(x = parent, y = child, weight=frequency)) +
 geom_point(size = 1.5, position = position_jitter(width = 0.2)) +
 geom_smooth(method = lm, aes(weight = PearsonLee$frequency,
 colour = 'Linear'), se = FALSE, size = 1.5) +
 geom_smooth(aes(weight = PearsonLee$frequency,
 colour = 'Loess'), se = FALSE, size = 1.5) +
 facet_grid(chl ~ par) +
 scale_colour_manual(breaks = c('Linear', 'Loess'),
 values = c('green', 'red')) +
 theme(legend.position = c(0.14, 0.885),
legend.background = element_rect(fill = 'white'))# inverse regression, as in Wachmuth et al. (2003)ggplot(PearsonLee, aes(x = child, y = parent, weight=frequency)) +
 geom_point(size = 1.5, position = position_jitter(width = 0.2)) +
 geom_smooth(method = lm, aes(weight = PearsonLee$frequency,
 colour = 'Linear'), se = FALSE, size = 1.5) +
 geom_smooth(aes(weight = PearsonLee$frequency,
 colour = 'Loess'), se = FALSE, size = 1.5) +
 facet_grid(chl ~ par) +
 scale_colour_manual(breaks = c('Linear', 'Loess'),
 values = c('green', 'red')) +
 theme(legend.position = c(0.14, 0.885),
legend.background = element_rect(fill = 'white'))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42701.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42701.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-pearsonlee.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42701.json';</script>