---
title: R Dataset / Package ISLR / College
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">College</span> data set which pertains to U.S. News and World Report's College Data. The <span class="mono">College</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">College</span> data set in R by issuing the following command at the console <span class="mono">data("College")</span>. This will load the data into a variable called <span class="mono">College</span>. If R says the <span class="mono">College</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29177.csv">College R data set</a></span>. The size of this file is about 76,513 bytes.</p><h2>U.S. News and World Report's College Data</h2>
<h3>Description</h3>
<p>Statistics for a large number of US Colleges from the 1995 issue of US News and World Report.</p>
<h3>Usage</h3>
<pre>College</pre>
<h3>Format</h3>
<p>A data frame with 777 observations on the following 18 variables.</p>
<dl>
<dt><code>Private</code></dt>
<dd>
<p>A factor with levels <code>No</code> and <code>Yes</code> indicating private or public university</p>
</dd>
<dt><code>Apps</code></dt>
<dd>
<p>Number of applications received</p>
</dd>
<dt><code>Accept</code></dt>
<dd>
<p>Number of applications accepted</p>
</dd>
<dt><code>Enroll</code></dt>
<dd>
<p>Number of new students enrolled</p>
</dd>
<dt><code>Top10perc</code></dt>
<dd>
<p>Pct. new students from top 10% of H.S. class</p>
</dd>
<dt><code>Top25perc</code></dt>
<dd>
<p>Pct. new students from top 25% of H.S. class</p>
</dd>
<dt><code>F.Undergrad</code></dt>
<dd>
<p>Number of fulltime undergraduates</p>
</dd>
<dt><code>P.Undergrad</code></dt>
<dd>
<p>Number of parttime undergraduates</p>
</dd>
<dt><code>Outstate</code></dt>
<dd>
<p>Out-of-state tuition</p>
</dd>
<dt><code>Room.Board</code></dt>
<dd>
<p>Room and board costs</p>
</dd>
<dt><code>Books</code></dt>
<dd>
<p>Estimated book costs</p>
</dd>
<dt><code>Personal</code></dt>
<dd>
<p>Estimated personal spending</p>
</dd>
<dt><code>PhD</code></dt>
<dd>
<p>Pct. of faculty with Ph.D.'s</p>
</dd>
<dt><code>Terminal</code></dt>
<dd>
<p>Pct. of faculty with terminal degree</p>
</dd>
<dt><code>S.F.Ratio</code></dt>
<dd>
<p>Student/faculty ratio</p>
</dd>
<dt><code>perc.alumni</code></dt>
<dd>
<p>Pct. alumni who donate</p>
</dd>
<dt><code>Expend</code></dt>
<dd>
<p>Instructional expenditure per student</p>
</dd>
<dt><code>Grad.Rate</code></dt>
<dd>
<p>Graduation rate</p>
</dd>
</dl>
<h3>Source</h3>
<p>This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University. The dataset was used in the ASA Statistical Graphics Section's 1995 Data Analysis Exposition.</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(College)
lm(Apps~Private+Accept,data=College)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29177.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29177.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-college.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29177.json';</script>
