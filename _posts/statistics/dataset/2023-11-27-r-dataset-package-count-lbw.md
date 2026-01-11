---
title: R Dataset / Package COUNT / lbw
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">lbw</span> data set which pertains to lbw. The <span class="mono">lbw</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">lbw</span> data set in R by issuing the following command at the console <span class="mono">data("lbw")</span>. This will load the data into a variable called <span class="mono">lbw</span>. If R says the <span class="mono">lbw</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-33628.csv">lbw R data set</a></span>. The size of this file is about 4,955 bytes.</p><h2>lbw</h2>
<h3>Description</h3>
<p>The data come to us from Hosmer and Lemeshow (2000). Called the low birth weight (lbw) data, the response is a binary variable, low, which indicates whether the birth weight of a baby is under 2500g (low=1), or over (low=0).</p>
<h3>Usage</h3>
<pre>data(lbw)</pre>
<h3>Format</h3>
<p>A data frame with 189 observations on the following 10 variables.</p>
<dl>
<dt><code>low</code></dt>
<dd>
<p>1=low birthweight baby; 0=norml weight</p>
</dd>
<dt><code>smoke</code></dt>
<dd>
<p>1=history of mother smoking; 0=mother nonsmoker</p>
</dd>
<dt><code>race</code></dt>
<dd>
<p>categorical 1-3: 1=white; 2-=black; 3=other</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age of mother: 14-45</p>
</dd>
<dt><code>lwt</code></dt>
<dd>
<p>weight (lbs) at last menstrual period: 80-250 lbs</p>
</dd>
<dt><code>ptl</code></dt>
<dd>
<p>number of false of premature labors: 0-3</p>
</dd>
<dt><code>ht</code></dt>
<dd>
<p>1=history of hypertension; 0 =no hypertension</p>
</dd>
<dt><code>ui</code></dt>
<dd>
<p>1=uterine irritability; 0 no irritability</p>
</dd>
<dt><code>ftv</code></dt>
<dd>
<p>number of physician visits in 1st trimester: 0-6</p>
</dd>
<dt><code>bwt</code></dt>
<dd>
<p>birth weight in grams: 709 - 4990 gr</p>
</dd>
</dl>
<h3>Details</h3>
<p>lbw is saved as a data frame. Count models can use ftv as a response variable, or convert it to grouped format</p>
<h3>Source</h3>
<p>Hosmer, D and S. Lemeshow (2000), Applied Logistic Regression, Wiley</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>
data(lbw)
glmbwp &lt;- glm(ftv ~ low + smoke + factor(race), family=poisson, data=lbw)
summary(glmbwp)
exp(coef(glmbwp))
library(MASS)
glmbwnb &lt;- glm.nb(ftv ~ low + smoke + factor(race), data=lbw)
summary(glmbwnb)
exp(coef(glmbwnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-33628.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-33628.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-lbw.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-33628.json';</script>