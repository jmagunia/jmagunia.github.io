---
title: R Dataset / Package HSAUR / schooldays
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">schooldays</span> data set which pertains to Days not Spent at School . The <span class="mono">schooldays</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">schooldays</span> data set in R by issuing the following command at the console <span class="mono">data("schooldays")</span>. This will load the data into a variable called <span class="mono">schooldays</span>. If R says the <span class="mono">schooldays</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-54440.csv">schooldays R data set</a></span>. The size of this file is about 6,105 bytes.</p><h2>Days not Spent at School</h2>
<h3>Description</h3>
<p>Data from a sociological study, the number of days absent from school is the response variable.</p>
<h3>Usage</h3>
<pre>data("schooldays")</pre>
<h3>Format</h3>
<p>A data frame with 154 observations on the following 5 variables.</p>
<dl>
<dt><code>race</code></dt>
<dd>
<p>race of the child, a factor with levels <code>aboriginal</code> and <code>non-aboriginal</code>.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>the sex of the child, a factor with levels <code>female</code> and <code>male</code>.</p>
</dd>
<dt><code>school</code></dt>
<dd>
<p>the school type, a factor with levels <code>F0</code> (primary), <code>F1</code> (first), <code>F2</code> (second) and <code>F3</code> (third form).</p>
</dd>
<dt><code>learner</code></dt>
<dd>
<p>how good is the child in learning things, a factor with levels <code>average</code> and <code>slow</code>.</p>
</dd>
<dt><code>absent</code></dt>
<dd>
<p>number of days absent from school.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data arise from a sociological study of Australian Aboriginal and white children reported by Quine (1975).</p>
<p>In this study, children of both sexes from four age groups (final grade in primary schools and first, second and third form in secondary school) and from two cultural groups were used. The children in age group were classified as slow or average learners. The response variable was the number of days absent from school during the school year. (Children who had suffered a serious illness during the years were excluded.)</p>
<h3>Source</h3>
<p>S. Quine (1975), Achievement Orientation of Aboriginal and White Adolescents. Doctoral Dissertation, Australian National University, Canberra.</p>
<h3>Examples</h3>
<pre>data("schooldays", package = "HSAUR")
plot.design(schooldays)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-54440.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-54440.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-schooldays.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-54440.json';</script>