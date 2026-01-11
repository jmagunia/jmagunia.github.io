---
title: R Dataset / Package COUNT / ships
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ships</span> data set which pertains to ships. The <span class="mono">ships</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">ships</span> data set in R by issuing the following command at the console <span class="mono">data("ships")</span>. This will load the data into a variable called <span class="mono">ships</span>. If R says the <span class="mono">ships</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-26989.csv">ships R data set</a></span>. The size of this file is about 738 bytes.</p><h2>ships</h2>
<h3>Description</h3>
<p>Data set used in McCullagh &amp; Nelder (1989), Hardin &amp; Hilbe (2003), and other sources. The data contains values on the number of reported accidents for ships belonging to a company over a given time period. When a ship was constructed is also recorded.</p>
<h3>Usage</h3>
<pre>data(ships)</pre>
<h3>Format</h3>
<p>A data frame with 40 observations on the following 7 variables.</p>
<dl>
<dt><code>accident</code></dt>
<dd>
<p>number of shipping accidents</p>
</dd>
<dt><code>op</code></dt>
<dd>
<p>1=ship operated 1975-1979;0=1965-74</p>
</dd>
<dt><code>co.65.69</code></dt>
<dd>
<p>ship was in construction 1965-1969 (1/0)</p>
</dd>
<dt><code>co.70.74</code></dt>
<dd>
<p>ship was in construction 1970-1974 (1/0)</p>
</dd>
<dt><code>co.75.79</code></dt>
<dd>
<p>ship was in construction 1975-1979 (1/0)</p>
</dd>
<dt><code>service</code></dt>
<dd>
<p>months in service</p>
</dd>
<dt><code>ship</code></dt>
<dd>
<p>ship identification : 1-5</p>
</dd>
</dl>
<h3>Details</h3>
<p>ships is saved as a data frame. Count models use accident as the response variable, with log(service) as the offset. ship can be used as a panel identifier.</p>
<h3>Source</h3>
<p>McCullagh and Nelder, 1989.</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC Hardin, JW and JM Hilbe (2001, 2007), Generalized Linear Models and Extensions, Stata Press McCullagh, P.A, and J. Nelder (1989), Generalized Linear Models, Chapman &amp; Hall</p>
<h3>Examples</h3>
<pre>
data(ships)
glmshp &lt;- glm(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
family=poisson, data=ships)
summary(glmshp)
exp(coef(glmshp))
library(MASS)
glmshnb &lt;- glm.nb(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
 data=ships)
summary(glmshnb)
exp(coef(glmshnb))
## Not run: 
library(gee)
shipgee &lt;- gee(accident ~ op + co.70.74 + co.75.79 + offset(log(service)),
data=ships, family=poisson, corstr="exchangeable", id=ship)
summary(shipgee)## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-26989.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-26989.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-ships.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-26989.json';</script>