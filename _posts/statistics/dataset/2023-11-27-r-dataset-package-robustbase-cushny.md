---
title: R Dataset / Package robustbase / cushny
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cushny</span> data set which pertains to Cushny and Peebles Prolongation of Sleep Data. The <span class="mono">cushny</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">cushny</span> data set in R by issuing the following command at the console <span class="mono">data("cushny")</span>. This will load the data into a variable called <span class="mono">cushny</span>. If R says the <span class="mono">cushny</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-67916.csv">cushny R data set</a></span>. The size of this file is about 341 bytes.</p><h2>Cushny and Peebles Prolongation of Sleep Data</h2>
<h3>Description</h3>
<p>The original data set was bivariate and recorded for ten subjects the prolongation of sleep caused by two different drugs. These data were used by Student as the first illustration of the paired t-test which only needs the <em>differences</em> of the two measurements. These differences are the values of <code>cushny</code>.</p>
<h3>Usage</h3>
<pre>data(cushny)</pre>
<h3>Format</h3>
<p>numeric vector, sorted increasingly:0 0.8 1 1.2 1.3 1.3 1.4 1.8 2.4 4.6</p>
<h3>Source</h3>
<p>Cushny, A.R. and Peebles, A.R. (1905) The action of optical isomers. II. Hyoscines. <em>J. Physiol.</em> <b>32</b>, 501–510.</p>
<p>These data were used by Student(1908) as the first illustration of the paired t-test, see also <code>sleep</code>; then cited by Fisher (1925) and thereforth copied in numerous books as an example of a normally distributed sample, see, e.g., Anderson (1958).</p>
<h3>References</h3>
<p>Student (1908) The probable error of a mean. <em>Biometrika</em> <b>6</b>, 1–25.</p>
<p>Fisher, R.A. (1925) <em>Statistical Methods for Research Workers</em>; Oliver &amp; Boyd, Edinburgh.</p>
<p>Anderson, T.W. (1958) <em>An Introduction to Multivariate Statistical Analysis</em>; Wiley, N.Y.</p>
<p>Hampel, F., Ronchetti, E., Rousseeuw, P. and Stahel, W. (1986) <em>Robust Statistics: The Approach Based on Influence Functions</em>; Wiley, N.Y.</p>
<h3>Examples</h3>
<pre>
data(cushny)plot(cushny,rep(0, 10), pch = 3, cex = 3,
 ylab = "", yaxt = "n")
plot(jitter(cushny),rep(0, 10), pch = 3, cex = 2,
 main = "'cushny' data (n= 10)", ylab = "", yaxt = "n")
abline(h=0, col="gray", lty=3)
myPt &lt;- function(m, lwd = 2, ..., e = 1.5*par("cxy")[2])
segments(m, +e, m, -e, lwd = lwd, ...)
myPt(mean(cushny), col = "pink3")
myPt(median(cushny), col = "light blue")
legend("topright", c("mean", "median"), lwd = 2,
 col = c("pink3", "light blue"), inset = .01)## The 'sleep' data from the standard 'datasets' package:
d.sleep &lt;- local({ gr &lt;- with(datasets::sleep, split(extra, group))
 gr[[2]] - gr[[1]] })
stopifnot(all.equal(cushny,
sort(d.sleep), tolerance=1e-15))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67916.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67916.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-cushny.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67916.json';</script>