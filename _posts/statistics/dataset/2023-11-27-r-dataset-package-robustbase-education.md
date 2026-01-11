---
title: R Dataset / Package robustbase / education
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">education</span> data set which pertains to Education Expenditure Data. The <span class="mono">education</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">education</span> data set in R by issuing the following command at the console <span class="mono">data("education")</span>. This will load the data into a variable called <span class="mono">education</span>. If R says the <span class="mono">education</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-59020.csv">education R data set</a></span>. The size of this file is about 1,236 bytes.</p><h2>Education Expenditure Data</h2>
<h3>Description</h3>
<p>Education Expenditure Data, from Chatterjee and Price (1977, p.108). This data set, representing the education expenditure variables in the 50 US states, providing an interesting example of heteroscedacity.</p>
<h3>Usage</h3>
<pre>data(education)</pre>
<h3>Format</h3>
<p>A data frame with 50 observations on the following 6 variables.</p>
<dl>
<dt><code>State</code></dt>
<dd>
<p>State</p>
</dd>
<dt><code>Region</code></dt>
<dd>
<p>Region (1=Northeastern, 2=North central, 3=Southern, 4=Western)</p>
</dd>
<dt><code>X1</code></dt>
<dd>
<p>Number of residents per thousand residing in urban areas in 1970</p>
</dd>
<dt><code>X2</code></dt>
<dd>
<p>Per capita personal income in 1973</p>
</dd>
<dt><code>X3</code></dt>
<dd>
<p>Number of residents per thousand under 18 years of age in 1974</p>
</dd>
<dt><code>Y</code></dt>
<dd>
<p>Per capita expenditure on public education in a state, projected for 1975</p>
</dd>
</dl>
<h3>Source</h3>
<p>P. J. Rousseeuw and A. M. Leroy (1987) <em>Robust Regression and Outlier Detection</em>; Wiley, p.110, table 16.</p>
<h3>Examples</h3>
<pre>
data(education)
education.x &lt;- data.matrix(education[, 3:5])
summary(lm.education &lt;- lm(Y ~ Region + X1+X2+X3, data=education))
## Seeexample(lmrob.M.S) # for how robust regression is used
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-59020.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-59020.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-education.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-59020.json';</script>