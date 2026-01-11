---
title: R Dataset / Package HistData / ZeaMays
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ZeaMays</span> data set which pertains to Darwin's Heights of Cross- and Self-fertilized Zea May Pairs. The <span class="mono">ZeaMays</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">ZeaMays</span> data set in R by issuing the following command at the console <span class="mono">data("ZeaMays")</span>. This will load the data into a variable called <span class="mono">ZeaMays</span>. If R says the <span class="mono">ZeaMays</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75564.csv">ZeaMays R data set</a></span>. The size of this file is about 350 bytes.</p><h2>Darwin's Heights of Cross- and Self-fertilized Zea May Pairs</h2>
<h3>Description</h3>
<p>Darwin (1876) studied the growth of pairs of zea may (aka corn) seedlings, one produced by cross-fertilization and the other produced by self-fertilization, but otherwise grown under identical conditions. His goal was to demonstrate the greater vigour of the cross-fertilized plants. The data recorded are the final height (inches, to the nearest 1/8th) of the plants in each pair.</p>
<p>In the <em>Design of Experiments</em>, Fisher (1935) used these data to illustrate a paired t-test (well, a one-sample test on the mean difference, <code>cross - self</code>). Later in the book (section 21), he used this data to illustrate an early example of a non-parametric permutation test, treating each paired difference as having (randomly) either a positive or negative sign.</p>
<h3>Usage</h3>
<pre>data(ZeaMays)</pre>
<h3>Format</h3>
<p>A data frame with 15 observations on the following 4 variables.</p>
<dl>
<dt><code>pair</code></dt>
<dd>
<p>pair number, a numeric vector</p>
</dd>
<dt><code>pot</code></dt>
<dd>
<p>pot, a factor with levels <code>1</code> <code>2</code> <code>3</code> <code>4</code></p>
</dd>
<dt><code>cross</code></dt>
<dd>
<p>height of cross fertilized plant, a numeric vector</p>
</dd>
<dt><code>self</code></dt>
<dd>
<p>height of self fertilized plant, a numeric vector</p>
</dd>
<dt><code>diff</code></dt>
<dd>
<p><code>cross - self</code> for each pair</p>
</dd>
</dl>
<h3>Details</h3>
<p>In addition to the standard paired t-test, several types of non-parametric tests can be contemplated:</p>
<p>(a) Permutation test, where the values of, say <code>self</code> are permuted and <code>diff=cross - self</code> is calculated for each permutation. There are 15! permutations, but a reasonably large number of random permutations would suffice. But this doesn't take the paired samples into account.</p>
<p>(b) Permutation test based on assigning each <code>abs(diff)</code> a + or - sign, and calculating the mean(diff). There are <i>2^{15}</i> such possible values. This is essentially what Fisher proposed. The p-value for the test is the proportion of absolute mean differences under such randomization which exceed the observed mean difference.</p>
<p>(c) Wilcoxon signed rank test: tests the hypothesis that the median signed rank of the <code>diff</code> is zero, or that the distribution of <code>diff</code> is symmetric about 0, vs. a location shifted alternative.</p>
<h3>Source</h3>
<p>Darwin, C. (1876). <em>The Effect of Cross- and Self-fertilization in the Vegetable Kingdom</em>, 2nd Ed. London: John Murray.</p>
<p>Andrews, D. and Herzberg, A. (1985) <em>Data: a collection of problems from many fields for the student and research worker</em>. New York: Springer. Data retrieved from: <code>https://www.stat.cmu.edu/StatDat/</code></p>
<h3>References</h3>
<p>Fisher, R. A. (1935). <em>The Design of Experiments</em>. London: Oliver &amp; Boyd.</p>
<h3>See Also</h3>
<p><code>wilcox.test</code></p>
<p><code>independence_test</code> in the <code>coin</code> package, a general framework for conditional inference procedures (permutation tests)</p>
<h3>Examples</h3>
<pre>
data(ZeaMays)##################################
## Some preliminary exploration ##
##################################
boxplot(ZeaMays[,c("cross", "self")], ylab="Height (in)", xlab="Fertilization")# examine large individual diff/ces
largediff &lt;- subset(ZeaMays, abs(diff) &gt; 2*sd(abs(diff)))
with(largediff, segments(1, cross, 2, self, col="red"))# plot cross vs. self.NB: unusual trend and some unusual points
with(ZeaMays, plot(self, cross, pch=16, cex=1.5))
abline(lm(cross ~ self, data=ZeaMays), col="red", lwd=2)# pot effects ?
 anova(lm(diff ~ pot, data=ZeaMays))##############################
## Tests of mean difference ##
##############################
# Wilcoxon signed rank test
# signed ranks:
with(ZeaMays, sign(diff) * rank(abs(diff)))
wilcox.test(ZeaMays$cross, ZeaMays$self, conf.int=TRUE, exact=FALSE)# t-tests
with(ZeaMays, t.test(cross, self))
with(ZeaMays, t.test(diff))mean(ZeaMays$diff)
# complete permutation distribution of diff, for all 2^15 ways of assigning
# one value to cross and the other to self (thx: Bert Gunter)
N &lt;- nrow(ZeaMays)
allmeans &lt;- as.matrix(expand.grid(as.data.frame(
 matrix(rep(c(-1,1),N), nr =2))))%*% abs(ZeaMays$diff) / N# upper-tail p-value
sum(allmeans &gt; mean(ZeaMays$diff)) / 2^N
# two-tailed p-value
sum(abs(allmeans) &gt; mean(ZeaMays$diff)) / 2^Nhist(allmeans, breaks=64, xlab="Mean difference, cross-self",
main="Histogram of all mean differences")
abline(v=c(1, -1)*mean(ZeaMays$diff), col="red", lwd=2, lty=1:2)plot(density(allmeans), xlab="Mean difference, cross-self",
main="Density plot of all mean differences")
abline(v=c(1, -1)*mean(ZeaMays$diff), col="red", lwd=2, lty=1:2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75564.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75564.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-zeamays.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75564.json';</script>