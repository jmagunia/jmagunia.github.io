---
title: R Dataset / Package COUNT / medpar
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">medpar</span> data set which pertains to medpar. The <span class="mono">medpar</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">medpar</span> data set in R by issuing the following command at the console <span class="mono">data("medpar")</span>. This will load the data into a variable called <span class="mono">medpar</span>. If R says the <span class="mono">medpar</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72079.csv">medpar R data set</a></span>. The size of this file is about 41,059 bytes.</p><h2>medpar</h2>
<h3>Description</h3>
<p>The US national Medicare inpatient hospital database is referred to as the Medpar data, which is prepared yearly from hospital filing records. Medpar files for each state are also prepared. The full Medpar data consists of 115 variables. The national Medpar has some 14 million records, with one record for each hospilitiztion. The data in the medpar file comes from 1991 Medicare files for the state of Arizona. The data are limited to only one diagnostic group (DRG 112). Patient data have been randomly selected from the original data.</p>
<h3>Usage</h3>
<pre>data(medpar)</pre>
<h3>Format</h3>
<p>A data frame with 1495 observations on the following 10 variables.</p>
<dl>
<dt><code>los</code></dt>
<dd>
<p>length of hospital stay</p>
</dd>
<dt><code>hmo</code></dt>
<dd>
<p>Patient belongs to a Health Maintenance Organization, binary</p>
</dd>
<dt><code>white</code></dt>
<dd>
<p>Patient identifies themselves as Caucasian, binary</p>
</dd>
<dt><code>died</code></dt>
<dd>
<p>Patient died, binary</p>
</dd>
<dt><code>age80</code></dt>
<dd>
<p>Patient age 80 and over, binary</p>
</dd>
<dt><code>type</code></dt>
<dd>
<p>Type of admission, categorical</p>
</dd>
<dt><code>type1</code></dt>
<dd>
<p>Elective admission, binary</p>
</dd>
<dt><code>type2</code></dt>
<dd>
<p>Urgent admission,binary</p>
</dd>
<dt><code>type3</code></dt>
<dd>
<p>Elective admission, binary</p>
</dd>
<dt><code>provnum</code></dt>
<dd>
<p>Provider ID</p>
</dd>
</dl>
<h3>Details</h3>
<p>medpar is saved as a data frame. Count models use los as response variable. 0 counts are structurally excluded</p>
<h3>Source</h3>
<p>1991 National Medpar data, National Health Economics &amp; Research Co.</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC first used in Hardin, JW and JM Hilbe (2001, 2007), Generalized Linear Models and Extensions, Stata Press</p>
<h3>Examples</h3>
<pre>
library(MASS)
library(msme)
data(medpar)
glmp &lt;- glm(los ~ hmo + white + factor(type), family=poisson, data=medpar)
summary(glmp)
exp(coef(glmp))
nb2 &lt;- nbinomial(los ~ hmo + white + factor(type), data=medpar)
summary(nb2)
exp(coef(nb2))
glmnb &lt;- glm.nb(los ~ hmo + white + factor(type), data=medpar)
summary(glmnb)
exp(coef(glmnb))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72079.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72079.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-medpar.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72079.json';</script>