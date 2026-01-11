---
title: R Dataset / Package COUNT / badhealth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">badhealth</span> data set which pertains to badhealth. The <span class="mono">badhealth</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">badhealth</span> data set in R by issuing the following command at the console <span class="mono">data("badhealth")</span>. This will load the data into a variable called <span class="mono">badhealth</span>. If R says the <span class="mono">badhealth</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90943.csv">badhealth R data set</a></span>. The size of this file is about 7,967 bytes.</p><h2>badhealth</h2>
<h3>Description</h3>
<p>From German health survey data for the year 1998 only.</p>
<h3>Usage</h3>
<pre>data(badhealth)</pre>
<h3>Format</h3>
<p>A data frame with 1,127 observations on the following 3 variables.</p>
<dl>
<dt><code>numvisit</code></dt>
<dd>
<p>number of visits to doctor during 1998</p>
</dd>
<dt><code>badh</code></dt>
<dd>
<p>1=patient claims to be in bad health; 0=not in bad health</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age of patient: 20-60</p>
</dd>
</dl>
<h3>Details</h3>
<p>badhealth is saved as a data frame. Count models use numvisit as the response variable, 0 counts are included.</p>
<h3>Source</h3>
<p>German Health Survey, amended in Hilbe and Greene (2008).</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge University Press Hilbe, J. and W. Greene (2008). Count Response Regression Models, in ed. C.R. Rao, J.P Miller, and D.C. Rao, Epidemiology and Medical Statistics, Elsevier Handbook of Statistics Series. London, UK: Elsevier.</p>
<h3>Examples</h3>
<pre>
data(badhealth)
glmbadp &lt;- glm(numvisit ~ badh + age, family=poisson, data=badhealth)
summary(glmbadp)
exp(coef(glmbadp))
library(MASS)
glmbadnb &lt;- glm.nb(numvisit ~ badh + age, data=badhealth)
summary(glmbadnb)
exp(coef(glmbadnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90943.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90943.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-badhealth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90943.json';</script>