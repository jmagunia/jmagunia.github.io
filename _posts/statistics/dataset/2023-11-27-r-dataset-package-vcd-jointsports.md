---
title: R Dataset / Package vcd / JointSports
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">JointSports</span> data set which pertains to Opinions About Joint Sports. The <span class="mono">JointSports</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">JointSports</span> data set in R by issuing the following command at the console <span class="mono">data("JointSports")</span>. This will load the data into a variable called <span class="mono">JointSports</span>. If R says the <span class="mono">JointSports</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-77187.csv">JointSports R data set</a></span>. The size of this file is about 1,332 bytes.</p><h2>Opinions About Joint Sports</h2>
<h3>Description</h3>
<p>Data from a Danish study in 1983 and 1985 about sports activities and the opinion about joint sports with the other gender among 16–19 year old high school students.</p>
<h3>Usage</h3>
<pre>
data("JointSports")
</pre>
<h3>Format</h3>
<p>A data frame with 40 observations and 5 variables.</p>
<dl>
<dt>Freq</dt>
<dd>
<p>frequency.</p>
</dd>
<dt>opinion</dt>
<dd>
<p>factor indicating opinion about sports joint with the other gender (very good, good, indifferent, bad, very bad).</p>
</dd>
<dt>year</dt>
<dd>
<p>factor indicating year of study (1983, 1985).</p>
</dd>
<dt>grade</dt>
<dd>
<p>factor indicating school grade (1st, 3rd).</p>
</dd>
<dt>gender</dt>
<dd>
<p>factor indicating gender (Boy, Girl).</p>
</dd>
</dl>
<h3>Source</h3>
<p>E. B. Andersen (1991), The Statistical Analysis of Categorical Data, page 210.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. 2nd edition. Springer-Verlag, Berlin.</p>
<h3>Examples</h3>
<pre>
library(MASS)
data("JointSports")
tab &lt;- xtabs(Freq ~ gender + opinion + grade + year, data = JointSports)
doubledecker(opinion ~ gender + year + grade, data = tab)
loglm(~ opinion* (gender + grade+ year) + gender*year*grade, data = tab)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-77187.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-77187.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-jointsports.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-77187.json';</script>