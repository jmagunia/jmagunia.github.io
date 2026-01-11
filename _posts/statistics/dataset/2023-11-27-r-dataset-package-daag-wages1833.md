---
title: R Dataset / Package DAAG / wages1833
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">wages1833</span> data set which pertains to Wages of Lancashire Cotton Factory Workers in 1833. The <span class="mono">wages1833</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">wages1833</span> data set in R by issuing the following command at the console <span class="mono">data("wages1833")</span>. This will load the data into a variable called <span class="mono">wages1833</span>. If R says the <span class="mono">wages1833</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37624_0.csv">wages1833 R data set</a></span>. The size of this file is about 916 bytes.</p><h2>Wages of Lancashire Cotton Factory Workers in 1833</h2>
<h3>Description</h3>
<p>The <code>wages1833</code> data frame gives the wages of Lancashire cotton factory workers in 1833.</p>
<h3>Usage</h3>
<pre>wages1833</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>age</dt>
<dd>
<p>age in years</p>
</dd>
<dt>mnum</dt>
<dd>
<p>number of male workers</p>
</dd>
<dt>mwage</dt>
<dd>
<p>average wage of male workers</p>
</dd>
<dt>fnum</dt>
<dd>
<p>number of female workers</p>
</dd>
<dt>fwage</dt>
<dd>
<p>average wage of female workers</p>
</dd>
</dl>
<h3>Source</h3>
<p>Boot, H.M. 1995. How Skilled Were the Lancashire Cotton Factory Workers in 1833? Economic History Review 48: 283-303.</p>
<h3>Examples</h3>
<pre>
attach(wages1833)
plot(mwage~age,ylim=range(c(mwage,fwage[fwage&gt;0])))
points(fwage[fwage&gt;0]~age[fwage&gt;0],pch=15,col="red")
lines(lowess(age,mwage))
lines(lowess(age[fwage&gt;0],fwage[fwage&gt;0]),col="red")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37624_0.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37624_0.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-wages1833.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37624_0.json';</script>