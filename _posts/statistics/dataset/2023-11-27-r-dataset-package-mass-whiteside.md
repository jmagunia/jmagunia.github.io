---
title: R Dataset / Package MASS / whiteside
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">whiteside</span> data set which pertains to House Insulation: Whiteside's Data. The <span class="mono">whiteside</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">whiteside</span> data set in R by issuing the following command at the console <span class="mono">data("whiteside")</span>. This will load the data into a variable called <span class="mono">whiteside</span>. If R says the <span class="mono">whiteside</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31961.csv">whiteside R data set</a></span>. The size of this file is about 913 bytes.</p><h2>House Insulation: Whiteside's Data</h2>
<h3>Description</h3>
<p>Mr Derek Whiteside of the UK Building Research Station recorded the weekly gas consumption and average external temperature at his own house in south-east England for two heating seasons, one of 26 weeks before, and one of 30 weeks after cavity-wall insulation was installed. The object of the exercise was to assess the effect of the insulation on gas consumption.</p>
<h3>Usage</h3>
<pre>
whiteside
</pre>
<h3>Format</h3>
<p>The <code>whiteside</code> data frame has 56 rows and 3 columns.:</p>
<dl>
<dt><code>Insul</code></dt>
<dd>
<p>A factor, before or after insulation.</p>
</dd>
<dt><code>Temp</code></dt>
<dd>
<p>Purportedly the average outside temperature in degrees Celsius. (These values is far too low for any 56-week period in the 1960s in South-East England. It might be the weekly average of daily minima.)</p>
</dd>
<dt><code>Gas</code></dt>
<dd>
<p>The weekly gas consumption in 1000s of cubic feet.</p>
</dd>
</dl>
<h3>Source</h3>
<p>A data set collected in the 1960s by Mr Derek Whiteside of the UK Building Research Station. Reported by</p>
<p>Hand, D. J., Daly, F., McConway, K., Lunn, D. and Ostrowski, E. eds (1993) <em>A Handbook of Small Data Sets.</em> Chapman &amp; Hall, p. 69.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
require(lattice)
xyplot(Gas ~ Temp | Insul, whiteside, panel =
function(x, y, ...) {
panel.xyplot(x, y, ...)
panel.lmline(x, y, ...)
}, xlab = "Average external temperature (deg. C)",
ylab = "Gas consumption(1000 cubic feet)", aspect = "xy",
strip = function(...) strip.default(..., style = 1))gasB &lt;- lm(Gas ~ Temp, whiteside, subset = Insul=="Before")
gasA &lt;- update(gasB, subset = Insul=="After")
summary(gasB)
summary(gasA)
gasBA &lt;- lm(Gas ~ Insul/Temp - 1, whiteside)
summary(gasBA)gasQ &lt;- lm(Gas ~ Insul/(Temp + I(Temp^2)) - 1, whiteside)
coef(summary(gasQ))gasPR &lt;- lm(Gas ~ Insul + Temp, whiteside)
anova(gasPR, gasBA)
options(contrasts = c("contr.treatment", "contr.poly"))
gasBA1 &lt;- lm(Gas ~ Insul*Temp, whiteside)
coef(summary(gasBA1))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31961.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31961.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-whiteside.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31961.json';</script>