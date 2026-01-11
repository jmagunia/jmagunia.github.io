---
title: R Dataset / Package robustbase / NOxEmissions
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">NOxEmissions</span> data set which pertains to NOx Air Pollution Data. The <span class="mono">NOxEmissions</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">NOxEmissions</span> data set in R by issuing the following command at the console <span class="mono">data("NOxEmissions")</span>. This will load the data into a variable called <span class="mono">NOxEmissions</span>. If R says the <span class="mono">NOxEmissions</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-73529.csv">NOxEmissions R data set</a></span>. The size of this file is about 458,290 bytes.</p><h2>NOx Air Pollution Data</h2>
<h3>Description</h3>
<p>A typical medium sized environmental data set with hourly measurements of <i>NOx</i> pollution content in the ambient air.</p>
<h3>Usage</h3>
<pre>data(NOxEmissions)</pre>
<h3>Format</h3>
<p>A data frame with 8088 observations on the following 4 variables.</p>
<dl>
<dt><code>julday</code></dt>
<dd>
<p>day number, a factor with levels <code>373</code> ... <code>730</code>, typically with 24 hourly measurements.</p>
</dd>
<dt><code>LNOx</code></dt>
<dd>
<p><i>\log</i> of hourly mean of NOx concentration in ambient air [ppb] next to a highly frequented motorway.</p>
</dd>
<dt><code>LNOxEm</code></dt>
<dd>
<p><i>\log</i> of hourly sum of NOx emission of cars on this motorway in arbitrary units.</p>
</dd>
<dt><code>sqrtWS</code></dt>
<dd>
<p>Square root of wind speed [m/s].</p>
</dd>
</dl>
<h3>Details</h3>
<p>The original data set had more observations, but with missing values. Here, all cases with missing values were omitted (<code>na.omit(.)</code>), and then only those were retained that belonged to days with at least 20 (fully) observed hourly measurements.</p>
<h3>Source</h3>
<p>René Locher (at ZHAW, Switzerland).</p>
<h3>See Also</h3>
<p>another NOx dataset, <code>ambientNOxCH</code>.</p>
<h3>Examples</h3>
<pre>
data(NOxEmissions)
plot(LNOx ~ LNOxEm, data = NOxEmissions, cex = 0.25, col = "gray30")## Not run: ## these take too much time --
 ## p = 340==&gt; already Least Squares is not fast
 (lmNOx &lt;- lm(LNOx ~ . ,data = NOxEmissions))
 plot(lmNOx) #-&gt;indication of 1 outlier M.NOx &lt;- MASS::rlm(LNOx ~ . , data = NOxEmissions)
 ## M-estimation works
 ## whereasMM-estimation fails:
 try(MM.NOx &lt;- MASS::rlm(LNOx ~ . , data = NOxEmissions, method = "MM"))
 ## namely because S-estimation fails:
 try(lts.NOx &lt;- ltsReg(LNOx ~ . , data = NOxEmissions))
 try(lmR.NOx &lt;- lmrob (LNOx ~ . , data = NOxEmissions))## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-73529.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-73529.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-noxemissions.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-73529.json';</script>