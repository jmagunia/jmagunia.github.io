---
title: R Dataset / Package HistData / Jevons
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Jevons</span> data set which pertains to W. Stanley Jevons' data on numerical discrimination. The <span class="mono">Jevons</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Jevons</span> data set in R by issuing the following command at the console <span class="mono">data("Jevons")</span>. This will load the data into a variable called <span class="mono">Jevons</span>. If R says the <span class="mono">Jevons</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16016.csv">Jevons R data set</a></span>. The size of this file is about 542 bytes.</p><h2>W. Stanley Jevons' data on numerical discrimination</h2>
<h3>Description</h3>
<p>In a remarkable brief note in <em>Nature</em>, 1871, W. Stanley Jevons described the results of an experiment he had conducted on himself to determine the limits of the number of objects an observer could comprehend immediately without counting them. This was an important philosophical question: How many objects can the mind embrace at once?</p>
<p>He carried out 1027 trials in which he tossed an "uncertain number" of uniform black beans into a box and immediately attempted to estimate the number "without the least hesitation". His questions, procedure and analysis anticipated by 75 years one of the most influential papers in modern cognitive psychology by George Miller (1956), "The magical number 7 plus or minus 2: Some limits on ..." For Jevons, the magical number was 4.5, representing an empirical law of complete accuracy.</p>
<h3>Usage</h3>
<pre>data(Jevons)</pre>
<h3>Format</h3>
<p>A frequency data frame with 50 observations on the following 4 variables.</p>
<dl>
<dt><code>actual</code></dt>
<dd>
<p>Actual number: a numeric vector</p>
</dd>
<dt><code>estimated</code></dt>
<dd>
<p>Estimated number: a numeric vector</p>
</dd>
<dt><code>frequency</code></dt>
<dd>
<p>Frequency of this combination of (actual, estimated): a numeric vector</p>
</dd>
<dt><code>error</code></dt>
<dd>
<p><code>actual</code>-<code>estimated</code>: a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>The original data were presented in a two-way, 13 x 13 frequency table, <code>estimated</code> (3:15) x <code>actual</code> (3:15).</p>
<h3>Source</h3>
<p>Jevons, W. S. (1871). The Power of Numerical Discrimination, <em>Nature</em>, 1871, III (281-282)</p>
<h3>References</h3>
<p>Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information, <em>Psychological Review</em>, 63, 81-97, <a href="http://www.musanim.com/miller1956/">http://www.musanim.com/miller1956/</a></p>
<h3>Examples</h3>
<pre>
data(Jevons)
# show as tables
xtabs(frequency ~ estimated+actual, data=Jevons)
xtabs(frequency ~ error+actual, data=Jevons)# show as sunflowerplot with regression line
with(Jevons, sunflowerplot(actual, estimated, frequency, 
main="Jevons data on numerical estimation"))
Jmod &lt;-lm(estimated ~ actual, data=Jevons, weights=frequency)
abline(Jmod)# show as balloonplots
if (require(gplots)) {with(Jevons, balloonplot(actual, estimated, frequency, xlab="actual", ylab="estimated", 
main="Jevons data on numerical estimation\nBubble area proportional to frequency",
text.size=0.8))with(Jevons, balloonplot(actual, error, frequency, xlab="actual", ylab="error", 
main="Jevons data on numerical estimation: Errors\nBubble area proportional to frequency", 
text.size=0.8))
}# plot average error
if(require(reshape)) {
unJevons &lt;- untable(Jevons, Jevons$frequency)
str(unJevons)require(plyr)
mean_error &lt;- function(df) mean(df$error, na.rm=TRUE)
Jmean &lt;- ddply(unJevons, .(actual), mean_error)
with(Jmean, plot(actual, V1, ylab='Mean error', xlab='Actual number', type='b', main='Jevons data'))
abline(h=0)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16016.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16016.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-jevons.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16016.json';</script>