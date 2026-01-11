---
title: R Dataset / Package robustbase / coleman
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">coleman</span> data set which pertains to Coleman Data Set. The <span class="mono">coleman</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">coleman</span> data set in R by issuing the following command at the console <span class="mono">data("coleman")</span>. This will load the data into a variable called <span class="mono">coleman</span>. If R says the <span class="mono">coleman</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70026.csv">coleman R data set</a></span>. The size of this file is about 698 bytes.</p><h2>Coleman Data Set</h2>
<h3>Description</h3>
<p>Contains information on 20 Schools from the Mid-Atlantic and New England States, drawn from a population studied by Coleman et al. (1966). Mosteller and Tukey (1977) analyze this sample consisting of measurements on six different variables, one of which will be treated as a responce.</p>
<h3>Usage</h3>
<pre>data(coleman)</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on the following 6 variables.</p>
<dl>
<dt><code>salaryP</code></dt>
<dd>
<p>staff salaries per pupil</p>
</dd>
<dt><code>fatherWc</code></dt>
<dd>
<p>percent of white-collar fathers</p>
</dd>
<dt><code>sstatus</code></dt>
<dd>
<p>socioeconomic status composite deviation: means for family size, family intactness, father's education, mother's education, and home items</p>
</dd>
<dt><code>teacherSc</code></dt>
<dd>
<p>mean teacher's verbal test score</p>
</dd>
<dt><code>motherLev</code></dt>
<dd>
<p>mean mother's educational level, one unit is equal to two school years</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>verbal mean test score (y, all sixth graders)</p>
</dd>
</dl>
<h3>Author(s)</h3>
<p>Valentin Todorov</p>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em> Wiley, p.79, table 2.</p>
<h3>Examples</h3>
<pre>
data(coleman)
pairs(coleman)
summary( lm.coleman &lt;- lm(Y ~ . , data = coleman))
summary(lts.coleman &lt;- ltsReg(Y ~ . , data = coleman))coleman.x &lt;- data.matrix(coleman[, 1:6])
(Cc &lt;- covMcd(coleman.x))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70026.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70026.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-coleman.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70026.json';</script>