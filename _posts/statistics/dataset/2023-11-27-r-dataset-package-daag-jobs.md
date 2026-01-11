---
title: R Dataset / Package DAAG / jobs
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">jobs</span> data set which pertains to Canadian Labour Force Summary Data (1995-96). The <span class="mono">jobs</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">jobs</span> data set in R by issuing the following command at the console <span class="mono">data("jobs")</span>. This will load the data into a variable called <span class="mono">jobs</span>. If R says the <span class="mono">jobs</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-54672.csv">jobs R data set</a></span>. The size of this file is about 136,796 bytes.</p><h2>Canadian Labour Force Summary Data (1995-96)</h2>
<h3>Description</h3>
<p>The number of workers in the Canadian labour force broken down by region (BC, Alberta, Prairies, Ontario, Quebec, Atlantic) for the 24-month period from January, 1995 to December, 1996 (a time when Canada was emerging from a deep economic recession).</p>
<h3>Usage</h3>
<pre>jobs</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>BC</dt>
<dd>
<p>monthly labour force counts in British Columbia</p>
</dd>
<dt>Alberta</dt>
<dd>
<p>monthly labour force counts in Alberta</p>
</dd>
<dt>Prairies</dt>
<dd>
<p>monthly labour force counts in Saskatchewan and Manitoba</p>
</dd>
<dt>Ontario</dt>
<dd>
<p>monthly labour force counts in Ontario</p>
</dd>
<dt>Quebec</dt>
<dd>
<p>monthly labour force counts in Quebec</p>
</dd>
<dt>Atlantic</dt>
<dd>
<p>monthly labour force counts in Newfoundland, Nova Scotia, Prince Edward Island and New Brunswick</p>
</dd>
<dt>Date</dt>
<dd>
<p>year (in decimal form)</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data have been seasonally adjusted.</p>
<h3>Source</h3>
<p>Statistics Canada</p>
<h3>Examples</h3>
<pre>
print("Multiple Variables and Times - Example 2.1.4")
sapply(jobs, range)
pause()matplot(jobs[,7], jobs[,-7], type="l", xlim=c(95,97.1))
 # Notice that we have been able to use a data frame as the second argument to matplot().
 # For more information on matplot(), type help(matplot)
text(rep(jobs[24,7], 6), jobs[24,1:6], names(jobs)[1:6], adj=0)
pause()sapply(log(jobs[,-7]), range)
apply(sapply(log(jobs[,-7]), range), 2, diff)
pause()oldpar &lt;- par(mfrow=c(2,3))
range.log &lt;- sapply(log(jobs[,-7], 2), range)
maxdiff &lt;- max(apply(range.log, 2, diff))
range.log[2,] &lt;- range.log[1,] + maxdiff
titles &lt;- c("BC Jobs","Alberta Jobs","Prairie Jobs",
 "Ontario Jobs", "Quebec Jobs", "Atlantic Jobs")
for (i in 1:6){
plot(jobs$Date, log(jobs[,i], 2), type = "l", ylim = range.log[,i],
xlab = "Time", ylab = "Number of jobs", main = titles[i])
}
par(oldpar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-54672.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-54672.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-jobs.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-54672.json';</script>