---
title: R Dataset / Package DAAG / gaba
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">gaba</span> data set which pertains to Effect of pentazocine on post-operative pain (average VAS scores). The <span class="mono">gaba</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">gaba</span> data set in R by issuing the following command at the console <span class="mono">data("gaba")</span>. This will load the data into a variable called <span class="mono">gaba</span>. If R says the <span class="mono">gaba</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80933.csv">gaba R data set</a></span>. The size of this file is about 1,028 bytes.</p><h2>Effect of pentazocine on post-operative pain (average VAS scores)</h2>
<h3>Description</h3>
<p>The table shows, separately for males and females, the effect of pentazocine on post-operative pain profiles (average VAS scores), with (mbac and fbac) and without (mpl and fpl) preoperatively administered baclofen. Pain scores are recorded every 20 minutes, from 10 minutes to 170 minutes.</p>
<h3>Usage</h3>
<pre>gaba</pre>
<h3>Format</h3>
<p>A data frame with 9 observations on the following 7 variables.</p>
<dl>
<dt><code>min</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>mbac</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>mpl</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>fbac</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>fpl</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>avbac</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>avplac</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>15 females were given baclofen, as against 3 males. 7 females received the placebo, as against 16 males. Averages for the two treatments (baclofen/placebo), taken over all trial participants and ignoring sex, are misleading.</p>
<h3>Source</h3>
<p>Gordon, N. C. et al.(1995): 'Enhancement of Morphine Analgesia by the GABA<i>_B</i> against Baclofen'. <em>Neuroscience</em> 69: 345-349.</p>
<h3>Examples</h3>
<pre>
data(gaba)
mr &lt;- range(gaba$min)
tran &lt;- range(gaba[, c("mbac","mpl","fbac","fpl")])
## Means by treatment and sex
par(mfrow=c(1,2))
plot(mr, tran, xlab = "Time post pentazocine (min)",
 ylab = "Reduction in VAS pain rating", 
 type = "n", xlim = c(0, 170), ylim = tran)
points(gaba$min, gaba$fbac, pch = 1, col = 8, lwd = 2, lty = 2, 
 type = "b")
points(gaba$min, gaba$fpl, pch = 0, col = 8, lwd = 2, lty = 2, 
 type = "b")
points(gaba$min, gaba$mbac, pch = 16, col = 8, lty = 2, type = "b")
points(gaba$min, gaba$mpl, pch = 15, col = 8, lty = 2, type = "b")
box()
## Now plot means, by treatment, averaged over all participants
plot(mr, tran, xlab = "Time post pentazocine (min)",
 ylab = "Reduction in VAS pain rating", 
 type = "n", xlim = c(0, 170), ylim = tran)
bac &lt;- (15 * gaba$fbac + 3 * gaba$mbac)/18
plac &lt;- (7 * gaba$fpl + 9 * gaba$mpl)/16
points(gaba$min, plac, pch = 15, lty = 1, col=1, type = "b")
points(gaba$min, bac, pch = 16, lty = 1, col=1, type = "b")
box()
par(mfrow=c(1,1))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80933.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80933.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-gaba.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80933.json';</script>