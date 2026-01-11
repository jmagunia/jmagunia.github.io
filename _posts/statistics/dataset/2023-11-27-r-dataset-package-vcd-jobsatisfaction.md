---
title: R Dataset / Package vcd / JobSatisfaction
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">JobSatisfaction</span> data set which pertains to Job Satisfaction Data. The <span class="mono">JobSatisfaction</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">JobSatisfaction</span> data set in R by issuing the following command at the console <span class="mono">data("JobSatisfaction")</span>. This will load the data into a variable called <span class="mono">JobSatisfaction</span>. If R says the <span class="mono">JobSatisfaction</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-64351.csv">JobSatisfaction R data set</a></span>. The size of this file is about 222 bytes.</p><h2>Job Satisfaction Data</h2>
<h3>Description</h3>
<p>Data from Petersen (1968) about the job satisfaction of 715 blue collar workers, selected from Danish Industry in 1968.</p>
<h3>Usage</h3>
<pre>
data("JobSatisfaction")
</pre>
<h3>Format</h3>
<p>A data frame with 8 observations and 4 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>management</dt>
<dd>
<p>factor indicating quality of management (bad, good).</p>
</dd>
<dt>supervisor</dt>
<dd>
<p>factor indicating supervisor's job satisfaction (low, high).</p>
</dd>
<dt>own</dt>
<dd>
<p>factor indicating worker's own job satisfaction (low, high).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, Table 5.4.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<p>E. Petersen (1968), <em>Job Satisfaction in Denmark</em>. (In Danish). Mentalhygiejnisk Forlag, Copenhagen.</p>
<h3>Examples</h3>
<pre>
data("JobSatisfaction")
structable(~ ., data = JobSatisfaction)mantelhaen.test(xtabs(Freq ~ own + supervisor + management,
data = JobSatisfaction))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-64351.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-64351.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-jobsatisfaction.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-64351.json';</script>