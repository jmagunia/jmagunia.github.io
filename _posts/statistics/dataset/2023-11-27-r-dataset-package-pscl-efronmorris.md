---
title: R Dataset / Package pscl / EfronMorris
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">EfronMorris</span> data set which pertains to Batting Averages for 18 major league baseball players, 1970. The <span class="mono">EfronMorris</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">EfronMorris</span> data set in R by issuing the following command at the console <span class="mono">data("EfronMorris")</span>. This will load the data into a variable called <span class="mono">EfronMorris</span>. If R says the <span class="mono">EfronMorris</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44101.csv">EfronMorris R data set</a></span>. The size of this file is about 846 bytes.</p><h2>Batting Averages for 18 major league baseball players, 1970</h2>
<h3>Description</h3>
<p>Batting averages for 18 major league baseball players, first 45 at bats of the 1970 season.</p>
<h3>Usage</h3>
<pre>data(EfronMorris)</pre>
<h3>Format</h3>
<dl>
<dt><code>name</code></dt>
<dd>
<p>character, name of player</p>
</dd>
<dt><code>team</code></dt>
<dd>
<p>character, team of player, abbreviated</p>
</dd>
<dt><code>league</code></dt>
<dd>
<p>character, National League or American League</p>
</dd>
<dt><code>r</code></dt>
<dd>
<p>numeric, hits in 1st 45 at bats</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>numeric, <code>r</code>/45, batting average over 1st 45 at bats</p>
</dd>
<dt><code>n</code></dt>
<dd>
<p>numeric, number of at bats, remainder of 1970 season</p>
</dd>
<dt><code>p</code></dt>
<dd>
<p>numeric, batting average over remainder of 1970 season</p>
</dd>
</dl>
<h3>Source</h3>
<p>Efron, Bradley and Carl Morris. 1975. Data Analysis Using Stein's Estimator and Its Generalizations. <em>Journal of the American Statistical Association</em>. 70:311-319.</p>
<h3>Examples</h3>
<pre>
data(EfronMorris)
attach(EfronMorris)
plot(p~y,
 xlim=range(p,y),
 ylim=range(p,y),
 xlab="Batting Average, 1st 45 at bats",
 ylab="Batting Average, Remainder of Season")
abline(0,1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44101.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44101.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-efronmorris.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44101.json';</script>