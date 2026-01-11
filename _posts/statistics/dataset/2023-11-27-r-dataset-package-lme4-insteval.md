---
title: R Dataset / Package lme4 / InstEval
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">InstEval</span> data set which pertains to University Lecture/Instructor Evaluations by Students at ETH. The <span class="mono">InstEval</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">InstEval</span> data set in R by issuing the following command at the console <span class="mono">data("InstEval")</span>. This will load the data into a variable called <span class="mono">InstEval</span>. If R says the <span class="mono">InstEval</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29789.csv">InstEval R data set</a></span>. The size of this file is about 2,311,569 bytes.</p><h2>University Lecture/Instructor Evaluations by Students at ETH</h2>
<h3>Description</h3>
<p>University lecture evaluations by students at ETH Zurich, anonymized for privacy protection. This is an interesting “medium” sized example of a <em>partially</em> nested mixed effect model.</p>
<h3>Format</h3>
<p>A data frame with 73421 observations on the following 7 variables.</p>
<dl>
<dt><code>s</code></dt>
<dd>
<p>a factor with levels <code>1:2972</code> denoting individual students.</p>
</dd>
<dt><code>d</code></dt>
<dd>
<p>a factor with 1128 levels from <code>1:2160</code>, denoting individual professors or lecturers.</p>
</dd>
</dl>
<dl>
<dt><code>studage</code></dt>
<dd>
<p>an ordered factor with levels <code>2</code> &lt; <code>4</code> &lt; <code>6</code> &lt; <code>8</code>, denoting student's “age” measured in the <em>semester</em> number the student has been enrolled.</p>
</dd>
<dt><code>lectage</code></dt>
<dd>
<p>an ordered factor with 6 levels, <code>1</code> &lt; <code>2</code> &lt; ... &lt; <code>6</code>, measuring how many semesters back the lecture rated had taken place.</p>
</dd>
<dt><code>service</code></dt>
<dd>
<p>a binary factor with levels <code>0</code> and <code>1</code>; a lecture is a “service”, if held for a different department than the lecturer's main one.</p>
</dd>
<dt><code>dept</code></dt>
<dd>
<p>a factor with 14 levels from <code>1:15</code>, using a random code for the department of the lecture.</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>a numeric vector of <em>ratings</em> of lectures by the students, using the discrete scale <code>1:5</code>, with meanings of ‘poor’ to ‘very good’.</p>
</dd>
</dl>
<p>Each observation is one student's rating for a specific lecture (of one lecturer, during one semester in the past).</p>
<h3>Details</h3>
<p>The main goal of the survey is to find “the best liked prof”, according to the lectures given. Statistical analysis of such data has been the basis for a (student) jury selecting the final winners.</p>
<p>The present data set has been anonymized and slightly simplified on purpose.</p>
<h3>Examples</h3>
<pre>
str(InstEval)head(InstEval, 16)
xtabs(~ service + dept, InstEval)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29789.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29789.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-insteval.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29789.json';</script>