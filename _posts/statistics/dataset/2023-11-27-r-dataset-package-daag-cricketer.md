---
title: R Dataset / Package DAAG / cricketer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cricketer</span> data set which pertains to Lifespans of UK 1st class cricketers born 1840-1960. The <span class="mono">cricketer</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cricketer</span> data set in R by issuing the following command at the console <span class="mono">data("cricketer")</span>. This will load the data into a variable called <span class="mono">cricketer</span>. If R says the <span class="mono">cricketer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24669.csv">cricketer R data set</a></span>. The size of this file is about 189,301 bytes.</p><h2>Lifespans of UK 1st class cricketers born 1840-1960</h2>
<h3>Description</h3>
<p>Year and birth, lifespan, etc, of British first class cricketers, born 1840-1960, whose handedness could be determined from information in the Who's who of cricketers. The status (alive=0, dead =1), and lifetime or lifespan, is for 1992.</p>
<h3>Usage</h3>
<pre>data(cricketer)</pre>
<h3>Format</h3>
<p>A data frame with 5960 observations on the following 8 variables.</p>
<dl>
<dt><code>left</code></dt>
<dd>
<p>a factor with levels <code>right</code> <code>left</code></p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>numeric, year of birth</p>
</dd>
<dt><code>life</code></dt>
<dd>
<p>numeric, lifetime or lifespan to 1992</p>
</dd>
<dt><code>dead</code></dt>
<dd>
<p>numeric (0 = alive (censored), 1 = dead, in 1992)</p>
</dd>
<dt><code>acd</code></dt>
<dd>
<p>numeric (0 = not accidental or not dead, 1 = accidental death)</p>
</dd>
<dt><code>kia</code></dt>
<dd>
<p>numeric (0 = not killed in action, 1 = killed in action)</p>
</dd>
<dt><code>inbed</code></dt>
<dd>
<p>numeric (0 = did not die in bed, 1 = died in bed)</p>
</dd>
<dt><code>cause</code></dt>
<dd>
<p>a factor with levels <code>alive</code> <code>acd</code> (accidental death) <code>inbed</code> (died in bed)</p>
</dd>
</dl>
<h3>Details</h3>
<p>Note that those 'killed in action' (mostly during World Wars I and II) form a subset of those who died by accident.</p>
<h3>Source</h3>
<p>John Aggleton, Martin Bland. Data were collated as described in Aggleton et al.</p>
<h3>References</h3>
<p>Aggleton JP, Bland JM, Kentridge RW, Neave NJ 1994. Handedness and longevity: an archival study of cricketers. British Medical Journal 309, 1681-1684.</p>
<p>Bailey P, Thorne P, Wynne-Thomas P. 1993. Who's Who of Cricketers. 2nd ed, London, Hamlyn.</p>
<p>Bland M and Altman D. 2005. Do the left-handed die young? Significance 2, 166-170.</p>
<h3>See Also</h3>
<p><code>earlycrcktr</code>.</p>
<h3>Examples</h3>
<pre>
data(cricketer)
numLH &lt;- xtabs(~ left+year, data=cricketer)
propLH &lt;- prop.table(numLH, margin=2)[2,]
yr &lt;- as.numeric(colnames(numLH))
plot(propLH ~ yr)
cricketer$lh &lt;- unclass(cricketer$left)-1
left2.hat &lt;- fitted(lm(lh ~ poly(year,2), data=cricketer))
ord &lt;- order(cricketer$year)
lines(left2.hat[ord] ~ cricketer$year[ord])
library(splines)
ns3.hat &lt;- fitted(lm(lh ~ ns(year,3), data=cricketer))
lines(ns3.hat[ord] ~ cricketer$year[ord], col="red")
require(survival)
summary(coxph(Surv(life, kia) ~ bs(year,3) +left, data=cricketer))
cricketer$notacdDead &lt;- with(cricketer, {dead[acd==1]&lt;-0; dead})
summary(coxph(Surv(life, notacdDead) ~ ns(year,2) +left, data=cricketer))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24669.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24669.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cricketer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24669.json';</script>