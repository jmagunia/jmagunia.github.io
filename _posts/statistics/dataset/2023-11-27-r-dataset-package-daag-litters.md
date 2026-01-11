---
title: R Dataset / Package DAAG / litters
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">litters</span> data set which pertains to Mouse Litters. The <span class="mono">litters</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">litters</span> data set in R by issuing the following command at the console <span class="mono">data("litters")</span>. This will load the data into a variable called <span class="mono">litters</span>. If R says the <span class="mono">litters</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30790.csv">litters R data set</a></span>. The size of this file is about 301 bytes.</p><h2>Mouse Litters</h2>
<h3>Description</h3>
<p>Data on the body and brain weights of 20 mice, together with the size of the litter. Two mice were taken from each litter size.</p>
<h3>Usage</h3>
<pre>litters</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>lsize</dt>
<dd>
<p>litter size</p>
</dd>
<dt>bodywt</dt>
<dd>
<p>body weight</p>
</dd>
<dt>brainwt</dt>
<dd>
<p>brain weight</p>
</dd>
</dl>
<h3>Source</h3>
<p>Wainright P, Pelkman C and Wahlsten D 1989. The quantitative relationship between nutritional effects on preweaning growth and behavioral development in mice. Developmental Psychobiology 22: 183-193.</p>
<h3>Examples</h3>
<pre>
print("Multiple Regression - Example 6.2")pairs(litters, labels=c("lsize\n\n(litter size)", "bodywt\n\n(Body Weight)",
"brainwt\n\n(Brain Weight)"))
# pairs(litters) gives a scatterplot matrix with less adequate labelingmice1.lm &lt;- lm(brainwt ~ lsize, data = litters) # Regress on lsize
mice2.lm &lt;- lm(brainwt ~ bodywt, data = litters) #Regress on bodywt
mice12.lm &lt;- lm(brainwt ~ lsize + bodywt, data = litters) # Regress on lsize &amp; bodywtsummary(mice1.lm)$coef # Similarly for other coefficients.
# results are consistent with the biological concept of brain sparingpause()hat(model.matrix(mice12.lm))# hat diagonal
pause()plot(lm.influence(mice12.lm)$hat, residuals(mice12.lm))print("Diagnostics - Example 6.3")mice12.lm &lt;- lm(brainwt ~ bodywt+lsize, data=litters)
oldpar &lt;-par(mfrow = c(1,2))
bx &lt;- mice12.lm$coef[2]; bz &lt;- mice12.lm$coef[3]
res &lt;- residuals(mice12.lm)
plot(litters$bodywt, bx*litters$bodywt+res, xlab="Body weight",
ylab="Component + Residual")
panel.smooth(litters$bodywt, bx*litters$bodywt+res) # Overlay
plot(litters$lsize, bz*litters$lsize+res, xlab="Litter size", 
ylab="Component + Residual")
panel.smooth(litters$lsize, bz*litters$lsize+res)
par(oldpar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30790.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30790.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-litters.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30790.json';</script>