---
title: R Dataset / Package DAAG / moths
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">moths</span> data set which pertains to Moths Data. The <span class="mono">moths</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">moths</span> data set in R by issuing the following command at the console <span class="mono">data("moths")</span>. This will load the data into a variable called <span class="mono">moths</span>. If R says the <span class="mono">moths</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76376.csv">moths R data set</a></span>. The size of this file is about 746 bytes.</p><h2>Moths Data</h2>
<h3>Description</h3>
<p>The <code>moths</code> data frame has 41 rows and 4 columns. These data are from a study of the effect of habitat on the densities of two species of moth (A and P). Transects were set across the search area. Within transects, sections were identified according to habitat type.</p>
<h3>Usage</h3>
<pre>moths</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>meters</dt>
<dd>
<p>length of transect</p>
</dd>
<dt>A</dt>
<dd>
<p>number of type A moths found</p>
</dd>
<dt>P</dt>
<dd>
<p>number of type P moths found</p>
</dd>
<dt>habitat</dt>
<dd>
<p>a factor with levels <code>Bank</code>, <code>Disturbed</code>, <code>Lowerside</code>, <code>NEsoak</code>, <code>NWsoak</code>, <code>SEsoak</code>, <code>SWsoak</code>, <code>Upperside</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>Sharyn Wragg, formerly of Australian National University</p>
<h3>Examples</h3>
<pre>
print("Quasi Poisson Regression - Example 8.3")
rbind(table(moths[,4]), sapply(split(moths[,-4], moths$habitat), apply,2,
sum))
A.glm &lt;- glm(formula = A ~ log(meters) + factor(habitat), family =
quasipoisson, data = moths)
summary(A.glm)
# Note the huge standard errors
moths$habitat &lt;- relevel(moths$habitat, ref="Lowerside")
A.glm &lt;- glm(A ~ habitat + log(meters), family=quasipoisson, data=moths)
summary(A.glm)$coef
## Consider as another possibility
A2.glm &lt;- glm(formula = A ~ sqrt(meters) + factor(habitat), family =
quasipoisson(link=sqrt), data = moths)
summary(A2.glm)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76376.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76376.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-moths.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76376.json';</script>