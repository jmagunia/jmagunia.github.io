---
title: R Dataset / Package HSAUR / students
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">students</span> data set which pertains to Student Risk Taking . The <span class="mono">students</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">students</span> data set in R by issuing the following command at the console <span class="mono">data("students")</span>. This will load the data into a variable called <span class="mono">students</span>. If R says the <span class="mono">students</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90543.csv">students R data set</a></span>. The size of this file is about 389 bytes.</p><h2>Student Risk Taking</h2>
<h3>Description</h3>
<p>Students were administered two parallel forms of a test after a random assignment to three different treatments.</p>
<h3>Usage</h3>
<pre>data("students")</pre>
<h3>Format</h3>
<p>A data frame with 35 observations on the following 3 variables.</p>
<dl>
<dt><code>treatment</code></dt>
<dd>
<p>a factor with levels <code>AA</code>, <code>C</code>, and <code>NC</code>.</p>
</dd>
<dt><code>low</code></dt>
<dd>
<p>the result of the first test.</p>
</dd>
<dt><code>high</code></dt>
<dd>
<p>the result of the second test.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data arise from a large study of risk taking (Timm, 2002). Students were randomly assigned to three different treatments labelled AA, C and NC. Students were administered two parallel forms of a test called <code>low</code> and <code>high</code>. The aim is to carry out a test of the equality of the bivariate means of each treatment population.</p>
<h3>Source</h3>
<p>N. H. Timm (2002), <em>Applied Multivariate Analysis</em>. Springer, New York.</p>
<h3>Examples</h3>
<pre>data("students", package = "HSAUR")
layout(matrix(1:2, ncol = 2))
boxplot(low ~ treatment, data = students, ylab = "low")
boxplot(high ~ treatment, data = students, ylab = "high")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90543.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90543.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-students.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90543.json';</script>