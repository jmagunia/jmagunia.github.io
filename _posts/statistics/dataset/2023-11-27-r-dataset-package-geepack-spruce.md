---
title: R Dataset / Package geepack / spruce
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">spruce</span> data set which pertains to Log-size of 79 Sitka spruce trees. The <span class="mono">spruce</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">spruce</span> data set in R by issuing the following command at the console <span class="mono">data("spruce")</span>. This will load the data into a variable called <span class="mono">spruce</span>. If R says the <span class="mono">spruce</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42604.csv">spruce R data set</a></span>. The size of this file is about 27,221 bytes.</p><h2>Log-size of 79 Sitka spruce trees</h2>
<h3>Description</h3>
<p>The <code>spruce</code> data frame has 1027 rows and 6 columns. The data consists of measurements on 79 sitka spruce trees over two growing seasons. The trees were grown in four controlled environment chambers, of which the first two, containing 27 trees each, were treated with introduced ozone at 70 ppb whilst the remaining two, containing 12 and 13 trees, were controls.</p>
<h3>Usage</h3>
<pre>data(spruce)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>chamber</dt>
<dd>
<p>a numeric vector of chamber numbers</p>
</dd>
<dt>ozone</dt>
<dd>
<p>a factor with levels <code>enriched</code> and <code>normal</code></p>
</dd>
<dt>id</dt>
<dd>
<p>a numeric vector of tree id</p>
</dd>
<dt>time</dt>
<dd>
<p>a numeric vector of the time when the measurements were taken, measured in days since Jan. 1, 1988</p>
</dd>
<dt>wave</dt>
<dd>
<p>a numeric vector of the measurement number</p>
</dd>
<dt>logsize</dt>
<dd>
<p>a numeric vector of the log-size</p>
</dd>
</dl>
<h3>Source</h3>
<p>Diggle, P.J., Liang, K.Y., and Zeger, S.L. (1994) Analysis of Longitudinal Data, Clarendon Press.</p>
<h3>Examples</h3>
<pre>
data(spruce)
spruce$contr &lt;- ifelse(spruce$ozone=="enriched", 0, 1)
sitka88 &lt;- spruce[spruce$wave &lt;= 5,]
sitka89 &lt;- spruce[spruce$wave &gt; 5,]
fit.88 &lt;- geese(logsize ~ as.factor(wave) + contr +
I(time/100*contr) - 1,
id=id, data=sitka88, corstr="ar1")
summary(fit.88)fit.89 &lt;- geese(logsize ~ as.factor(wave) + contr - 1,
id=id, data=sitka89, corstr="ar1")
summary(fit.89)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42604.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42604.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-spruce.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42604.json';</script>