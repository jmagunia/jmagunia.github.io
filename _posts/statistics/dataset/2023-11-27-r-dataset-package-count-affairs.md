---
title: R Dataset / Package COUNT / affairs
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">affairs</span> data set which pertains to affairs. The <span class="mono">affairs</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">affairs</span> data set in R by issuing the following command at the console <span class="mono">data("affairs")</span>. This will load the data into a variable called <span class="mono">affairs</span>. If R says the <span class="mono">affairs</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86798.csv">affairs R data set</a></span>. The size of this file is about 26,473 bytes.</p><h2>affairs</h2>
<h3>Description</h3>
<p>Data from Fair (1978). Although Fair used a tobit model with the data, the outcome measure can be modeled as a count. In fact, Greene (2003) modeled it as Poisson, but given the amount of overdispersion in the data, employing a negative binomial model is an appropriate strategy. The data is stored in the affairs data set. Naffairs is the response variable, indicating the number of affairs reported by the participant in the past year.</p>
<h3>Usage</h3>
<pre>data(affairs)</pre>
<h3>Format</h3>
<p>A data frame with 601 observations on the following 18 variables.</p>
<dl>
<dt><code>naffairs</code></dt>
<dd>
<p>number of affairs within last year</p>
</dd>
<dt><code>kids</code></dt>
<dd>
<p>1=have children;0= no children</p>
</dd>
<dt><code>vryunhap</code></dt>
<dd>
<p>(1/0) very unhappily married</p>
</dd>
<dt><code>unhap</code></dt>
<dd>
<p>(1/0) unhappily married</p>
</dd>
<dt><code>avgmarr</code></dt>
<dd>
<p>(1/0) average married</p>
</dd>
<dt><code>hapavg</code></dt>
<dd>
<p>(1/0) happily married</p>
</dd>
<dt><code>vryhap</code></dt>
<dd>
<p>(1/0) very happily married</p>
</dd>
<dt><code>antirel</code></dt>
<dd>
<p>(1/0) anti religious</p>
</dd>
<dt><code>notrel</code></dt>
<dd>
<p>(1/0) not religious</p>
</dd>
<dt><code>slghtrel</code></dt>
<dd>
<p>(1/0) slightly religious</p>
</dd>
<dt><code>smerel</code></dt>
<dd>
<p>(1/0) somewhat religious</p>
</dd>
<dt><code>vryrel</code></dt>
<dd>
<p>(1/0) very religious</p>
</dd>
<dt><code>yrsmarr1</code></dt>
<dd>
<p>(1/0) &gt;0.75 yrs</p>
</dd>
<dt><code>yrsmarr2</code></dt>
<dd>
<p>(1/0) &gt;1.5 yrs</p>
</dd>
<dt><code>yrsmarr3</code></dt>
<dd>
<p>(1/0) &gt;4.0 yrs</p>
</dd>
<dt><code>yrsmarr4</code></dt>
<dd>
<p>(1/0) &gt;7.0 yrs</p>
</dd>
<dt><code>yrsmarr5</code></dt>
<dd>
<p>(1/0) &gt;10.0 yrs</p>
</dd>
<dt><code>yrsmarr6</code></dt>
<dd>
<p>(1/0) &gt;15.0 yrs</p>
</dd>
</dl>
<h3>Details</h3>
<p>rwm5yr is saved as a data frame. Count models use naffairs as response variable. 0 counts are included.</p>
<h3>Source</h3>
<p>Fair, R. (1978). A Theory of Extramarital Affairs, Journal of Political Economy, 86: 45-61. Greene, W.H. (2003). Econometric Analysis, Fifth Edition, New York: Macmillan.</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>
data(affairs)
glmaffp &lt;- glm(naffairs ~ kids + yrsmarr2 + yrsmarr3 + yrsmarr4 + yrsmarr5,
 family = poisson, data = affairs)
summary(glmaffp)
exp(coef(glmaffp))require(MASS)
glmaffnb &lt;- glm.nb(naffairs ~ kids + yrsmarr2 + yrsmarr3 + yrsmarr4 + yrsmarr5,
 data=affairs)
summary(glmaffnb)
exp(coef(glmaffnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86798.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86798.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-affairs.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86798.json';</script>