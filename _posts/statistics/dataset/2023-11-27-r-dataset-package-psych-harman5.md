---
title: R Dataset / Package psych / Harman.5
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Harman.5</span> data set which pertains to 5 socio-economic variables from Harman (1967). The <span class="mono">Harman.5</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Harman.5</span> data set in R by issuing the following command at the console <span class="mono">data("Harman.5")</span>. This will load the data into a variable called <span class="mono">Harman.5</span>. If R says the <span class="mono">Harman.5</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86456.csv">Harman.5 R data set</a></span>. The size of this file is about 441 bytes.</p><h2>5 socio-economic variables from Harman (1967)</h2>
<h3>Description</h3>
<p>Harman (1967) uses 5 socio-economic variables for demonstrations of principal components and factor analysis. This example is used in the SAS manual for Proc Factor as well.</p>
<h3>Usage</h3>
<pre>data(Harman.5)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on the following 5 variables.</p>
<dl>
<dt><code>population</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>schooling</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>employment</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>professional</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>housevalue</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>Harman reports that the data "were taken (not entirely arbitrarily) from a study of the Los Angeles Standard Metropolitan Statistical Area. The twelve individuals are used in the examples are census tracts." (p 13).</p>
<h3>Source</h3>
<p>Harman, Harry Horace (1967), Modern factor analysis. Chicago, University of Chicago Press.</p>
<h3>References</h3>
<p>SAS users manual, chapter 26: pages 1123-1192</p>
<h3>Examples</h3>
<pre>
data(Harman.5)
if(require('GPArotation')){
pc2 &lt;- principal(Harman.5,2,scores=TRUE)
pc2$residual
biplot(pc2,main="Biplot of the Harman 5 socio-demographic variables") }
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86456.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86456.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-harman5.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86456.json';</script>