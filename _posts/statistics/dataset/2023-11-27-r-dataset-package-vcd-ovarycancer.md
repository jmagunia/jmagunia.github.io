---
title: R Dataset / Package vcd / OvaryCancer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">OvaryCancer</span> data set which pertains to Ovary Cancer Data. The <span class="mono">OvaryCancer</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">OvaryCancer</span> data set in R by issuing the following command at the console <span class="mono">data("OvaryCancer")</span>. This will load the data into a variable called <span class="mono">OvaryCancer</span>. If R says the <span class="mono">OvaryCancer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76824.csv">OvaryCancer R data set</a></span>. The size of this file is about 574 bytes.</p><h2>Ovary Cancer Data</h2>
<h3>Description</h3>
<p>Data from Obel (1975) about a retrospective study of ovary cancer carried out in 1973. Information was obtained from 299 women, who were operated for ovary cancer 10 years before.</p>
<h3>Usage</h3>
<pre>
data("OvaryCancer")
</pre>
<h3>Format</h3>
<p>A data frame with 16 observations and 5 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>stage</dt>
<dd>
<p>factor indicating the stage of the cancer at the time of operation (early, advanced).</p>
</dd>
<dt>operation</dt>
<dd>
<p>factor indicating type of operation (radical, limited).</p>
</dd>
<dt>survival</dt>
<dd>
<p>factor indicating survival status after 10 years (yes, no).</p>
</dd>
<dt>xray</dt>
<dd>
<p>factor indicating whether X-ray treatment was received (yes, no).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, Table 6.4.</p>
<h3>References</h3>
<p>E. B. Obel (1975), A Comparative Study of Patients with Cancer of the Ovary Who Have Survived More or Less Than 10 Years. <em>Acta Obstetricia et Gynecologica Scandinavica</em>, <b>55</b>, 429-439.</p>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
data("OvaryCancer")
tab &lt;- xtabs(Freq ~ xray + survival + stage + operation, data = OvaryCancer)
ftable(tab, col.vars = "survival", row.vars = c("stage", "operation", "xray"))## model: ~ xray * operation * stage + survival * stage
## interpretation: treat xray, operation, stage as fixed margins,
## the survival depends on stage, but not xray and operation.
doubledecker(survival ~ stage + operation + xray, data = tab)
mosaic(~ stage + operation + xray + survival,
split = c(FALSE, TRUE, TRUE, FALSE), data = tab, keep = FALSE,
gp = gpar(fill = rev(grey.colors(2))))
mosaic(~ stage + operation + xray + survival,
split = c(FALSE, TRUE, TRUE, FALSE), data = tab, keep = FALSE,
expected = ~ xray * operation * stage + survival*stage)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76824.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76824.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-ovarycancer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76824.json';</script>