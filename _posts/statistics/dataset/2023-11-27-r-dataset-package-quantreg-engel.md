---
title: R Dataset / Package quantreg / engel
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">engel</span> data set which pertains to Engel Data. The <span class="mono">engel</span> data set is found in the <span class="mono">quantreg</span> R package. You can load the <span class="mono">engel</span> data set in R by issuing the following command at the console <span class="mono">data("engel")</span>. This will load the data into a variable called <span class="mono">engel</span>. If R says the <span class="mono">engel</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("quantreg")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-53263.csv">engel R data set</a></span>. The size of this file is about 7,941 bytes.</p><h2>Engel Data</h2>
<h3>Description</h3>
<p>Engel food expenditure data used in Koenker and Bassett(1982). This is a regression data set consisting of 235 observations on income and expenditure on food for Belgian working class households.</p>
<h3>Usage</h3>
<pre>data(engel)</pre>
<h3>Format</h3>
<p>A data frame containing 235 observations on 2 variables</p>
<dl>
<dt>income</dt>
<dd>
<p>annual household income in Belgian francs</p>
</dd>
<dt>foodexp</dt>
<dd>
<p>annual household food expenditure in Belgian francs</p>
</dd>
</dl>
<h3>References</h3>
<p>Koenker, R. and Bassett, G (1982) Robust Tests of Heteroscedasticity based on Regression Quantiles; <em>Econometrica</em> <b>50</b>, 43–61.</p>
<h3>Examples</h3>
<pre>
## See alsodemo("engel1")
## --------------data(engel)
plot(engel, log = "xy",
 main = "'engel' data(log - log scale)")
plot(log10(foodexp) ~ log10(income), data = engel,
 main = "'engel' data(log10 - transformed)")
taus &lt;- c(.15, .25, .50, .75, .95, .99)
rqs &lt;- as.list(taus)
for(i in seq(along = taus)) {
rqs[[i]] &lt;- rq(log10(foodexp) ~ log10(income), tau = taus[i], data = engel)
lines(log10(engel$income), fitted(rqs[[i]]), col = i+1)
}
legend("bottomright", paste("tau = ", taus), inset = .04,
 col = 2:(length(taus)+1), lty=1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-53263.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-53263.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-quantreg-engel.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-53263.json';</script>