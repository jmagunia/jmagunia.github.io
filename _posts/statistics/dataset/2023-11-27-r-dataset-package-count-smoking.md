---
title: R Dataset / Package COUNT / smoking
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">smoking</span> data set which pertains to smoking. The <span class="mono">smoking</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">smoking</span> data set in R by issuing the following command at the console <span class="mono">data("smoking")</span>. This will load the data into a variable called <span class="mono">smoking</span>. If R says the <span class="mono">smoking</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-87355.csv">smoking R data set</a></span>. The size of this file is about 584 bytes.</p><h2>smoking</h2>
<h3>Description</h3>
<p>A simple data set with only 6 observations.</p>
<h3>Usage</h3>
<pre>data(smoking)</pre>
<h3>Format</h3>
<p>A data frame with 6 observations on the following 4 variables.</p>
<dl>
<dt><code>sbp</code></dt>
<dd>
<p>systolic blood pressure of subject</p>
</dd>
<dt><code>male</code></dt>
<dd>
<p>1=male; 0=female</p>
</dd>
<dt><code>smoker</code></dt>
<dd>
<p>1=hist of smoking; 0= no hist of smoking</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age of subject</p>
</dd>
</dl>
<h3>Details</h3>
<p>smoking is saved as a data frame.</p>
<h3>Source</h3>
<p>none</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press</p>
<h3>Examples</h3>
<pre>
sbp&lt;- c(131,132,122,119,123,115)
male &lt;- c(1,1,1,0,0,0)
smoker &lt;- c(1,1,0,0,1,0)
age&lt;- c(34,36,30,32,26,23)
summary(reg1 &lt;- lm(sbp~ male+smoker+age))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-87355.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-87355.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-smoking.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-87355.json';</script>