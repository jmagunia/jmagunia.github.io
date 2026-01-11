---
title: R Dataset / Package HSAUR / GHQ
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">GHQ</span> data set which pertains to General Health Questionnaire . The <span class="mono">GHQ</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">GHQ</span> data set in R by issuing the following command at the console <span class="mono">data("GHQ")</span>. This will load the data into a variable called <span class="mono">GHQ</span>. If R says the <span class="mono">GHQ</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34466.csv">GHQ R data set</a></span>. The size of this file is about 347 bytes.</p><h2>General Health Questionnaire</h2>
<h3>Description</h3>
<p>Data from an psychiatric screening questionnaire</p>
<h3>Usage</h3>
<pre>data("GHQ")</pre>
<h3>Format</h3>
<p>A data frame with 22 observations on the following 4 variables.</p>
<dl>
<dt><code>GHQ</code></dt>
<dd>
<p>the General Health Questionnaire score.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>female</code> and <code>male</code></p>
</dd>
<dt><code>cases</code></dt>
<dd>
<p>the number of diseased subjects.</p>
</dd>
<dt><code>non.cases</code></dt>
<dd>
<p>the number of healthy subjects.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data arise from a study of a psychiatric screening questionnaire called the GHQ (General Health Questionnaire, see Goldberg, 1972). Here the main question of interest is to see how caseness is related to gender and GHQ score.</p>
<h3>Source</h3>
<p>D. Goldberg (1972). <em>The Detection of Psychiatric Illness by Questionnaire</em>, Oxford University Press, Oxford, UK.</p>
<h3>Examples</h3>
<pre>data("GHQ", package = "HSAUR")
male &lt;- subset(GHQ, sex == "male")
female &lt;- subset(GHQ, sex == "female")
layout(matrix(1:2, ncol = 2))
barplot(t(as.matrix(male[,c("cases", "non.cases")])), main = "Male", xlab = "GHC score")
barplot(t(as.matrix(male[,c("cases", "non.cases")])), main = "Female", xlab = "GHC score")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34466.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34466.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-ghq.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34466.json';</script>