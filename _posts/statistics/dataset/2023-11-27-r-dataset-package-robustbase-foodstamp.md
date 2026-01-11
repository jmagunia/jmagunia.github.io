---
title: R Dataset / Package robustbase / foodstamp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">foodstamp</span> data set which pertains to Food Stamp Program Participation. The <span class="mono">foodstamp</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">foodstamp</span> data set in R by issuing the following command at the console <span class="mono">data("foodstamp")</span>. This will load the data into a variable called <span class="mono">foodstamp</span>. If R says the <span class="mono">foodstamp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16308.csv">foodstamp R data set</a></span>. The size of this file is about 1,578 bytes.</p><h2>Food Stamp Program Participation</h2>
<h3>Description</h3>
<p>This data consists of 150 randomly selected persons from a survey with information on over 2000 elderly US citizens, where the response, indicates participation in the U.S. Food Stamp Program.</p>
<h3>Usage</h3>
<pre>data(foodstamp)</pre>
<h3>Format</h3>
<p>A data frame with 150 observations on the following 4 variables.</p>
<dl>
<dt><code>participation</code></dt>
<dd>
<p>participation in U.S. Food Stamp Program; yes = 1, no = 0</p>
</dd>
<dt><code>tenancy</code></dt>
<dd>
<p>tenancy, indicating home ownership; yes = 1, no = 0</p>
</dd>
<dt><code>suppl.income</code></dt>
<dd>
<p>supplemental income, indicating whether some form of supplemental security income is received; yes = 1, no = 0</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>monthly income (in US dollars)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Data description and first analysis: Stefanski et al.(1986) who indicate Rizek(1978) as original source of the larger study.</p>
<p>Electronic version from CRAN package <span class="pkg">catdata</span>.</p>
<h3>References</h3>
<p>Rizek, R. L. (1978) The 1977-78 Nationwide Food Consumption Survey. <em>Family Econ. Rev.</em>, Fall, 3–7.</p>
<p>Stefanski, L. A., Carroll, R. J. and Ruppert, D. (1986) Optimally bounded score functions for generalized linear models with applications to logistic regression. <em>Biometrika</em> <b>73</b>, 413–424.</p>
<p>Künsch, H. R., Stefanski, L. A., Carroll, R. J. (1989) Conditionally unbiased bounded-influence estimation in general regression models, with applications to generalized linear models. <em>J. American Statistical Association</em> <b>84</b>, 460–466.</p>
<h3>Examples</h3>
<pre>
data(foodstamp)(T123 &lt;- xtabs(~ participation+ tenancy+ suppl.income, data=foodstamp))
summary(T123) ## ==&gt; the binary var's are clearly not independentfoodSt &lt;- within(foodstamp, {
 logInc &lt;- log(1 + income)
 rm(income)
})m1 &lt;- glm(participation ~ ., family=binomial, data=foodSt)
summary(m1)
rm1 &lt;- glmrob(participation ~ ., family=binomial, data=foodSt)
summary(rm1)
## Now use robust weights.on.x :
rm2 &lt;- glmrob(participation ~ ., family=binomial, data=foodSt,
weights.on.x = "robCov")
summary(rm2)## aha, now the weights are different:
which( weights(rm2, type="robust") &lt; 0.5)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16308.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16308.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-foodstamp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16308.json';</script>