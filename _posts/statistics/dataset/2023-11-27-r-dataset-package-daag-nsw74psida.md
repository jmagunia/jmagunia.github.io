---
title: R Dataset / Package DAAG / nsw74psidA
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nsw74psidA</span> data set which pertains to A Subset of the nsw74psid1 Data Set. The <span class="mono">nsw74psidA</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">nsw74psidA</span> data set in R by issuing the following command at the console <span class="mono">data("nsw74psidA")</span>. This will load the data into a variable called <span class="mono">nsw74psidA</span>. If R says the <span class="mono">nsw74psidA</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27177.csv">nsw74psidA R data set</a></span>. The size of this file is about 7,897 bytes.</p><h2>A Subset of the nsw74psid1 Data Set</h2>
<h3>Description</h3>
<p>The <code>nsw74psidA</code> data frame has 252 rows and 10 columns. See <code>nsw74psid1</code> for more information.</p>
<h3>Usage</h3>
<pre>nsw74psidA</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>trt</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>age</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>educ</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>black</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>hisp</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>marr</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>nodeg</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>re74</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>re75</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>re78</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>This data set was obtained using:</p>
<p><code>here &lt;- age &lt;= 40 &amp; re74&lt;=5000 &amp; re75 &lt;= 5000 &amp; re78 &lt; 30000</code></p>
<p><code>nsw74psidA &lt;- nsw74psid1[here, ]</code></p>
<h3>Examples</h3>
<pre>
table(nsw74psidA$trt)
A1.lm &lt;- lm(re78 ~ trt + (age + educ + re74 + re75) + (black +
hisp + marr + nodeg), data = nsw74psidA)
summary(A1.lm)$coef
discA.glm &lt;- glm(formula = trt ~ age + educ + black + hisp +
marr + nodeg + re74 + re75, family = binomial, data = nsw74psidA)
A.scores &lt;- predict(discA.glm)
options(digits=4)
overlap &lt;- A.scores &gt; -3.5 &amp; A.scores &lt; 3.8
A.lm &lt;- lm(re78 ~ trt + A.scores, data=nsw74psidA, subset = overlap)
summary(A.lm)$coef
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27177.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27177.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-nsw74psida.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27177.json';</script>