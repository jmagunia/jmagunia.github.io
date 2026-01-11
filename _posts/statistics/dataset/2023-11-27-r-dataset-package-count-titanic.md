---
title: R Dataset / Package COUNT / titanic
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">titanic</span> data set which pertains to titanic. The <span class="mono">titanic</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">titanic</span> data set in R by issuing the following command at the console <span class="mono">data("titanic")</span>. This will load the data into a variable called <span class="mono">titanic</span>. If R says the <span class="mono">titanic</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-54019.csv">titanic R data set</a></span>. The size of this file is about 43,427 bytes.</p><h2>titanic</h2>
<h3>Description</h3>
<p>The data is an observation-based version of the 1912 Titanic passenger survival log,</p>
<h3>Usage</h3>
<pre>data(titanic)</pre>
<h3>Format</h3>
<p>A data frame with 1316 observations on the following 4 variables.</p>
<dl>
<dt><code>class</code></dt>
<dd>
<p>a factor with levels <code>1st class</code> <code>2nd class</code> <code>3rd class</code> <code>crew</code></p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>a factor with levels <code>child</code> <code>adults</code></p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>women</code> <code>man</code></p>
</dd>
<dt><code>survived</code></dt>
<dd>
<p>a factor with levels <code>no</code> <code>yes</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>titanic is saved as a data frame. Used to assess risk ratios</p>
<h3>Source</h3>
<p>Found in many other texts</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>data(titanic)
titanic$survival &lt;- titanic$survived == "yes"
glmlr &lt;- glm(survival ~ age + sex + factor(class), family=binomial, data=titanic)
summary(glmlr)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-54019.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-54019.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-titanic.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-54019.json';</script>