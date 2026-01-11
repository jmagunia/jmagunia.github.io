---
title: R Dataset / Package vcd / Hitters
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Hitters</span> data set which pertains to Hitters Data. The <span class="mono">Hitters</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Hitters</span> data set in R by issuing the following command at the console <span class="mono">data("Hitters")</span>. This will load the data into a variable called <span class="mono">Hitters</span>. If R says the <span class="mono">Hitters</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27926.csv">Hitters R data set</a></span>. The size of this file is about 27,040 bytes.</p><h2>Hitters Data</h2>
<h3>Description</h3>
<p>This data set is deduced from the <code>Baseball</code> fielding data set: fielding performance basically includes the numbers of Errors, Putouts and Assists made by each player. In order to reduce the number of observations, the was compressed by calculating the mean number of errors, putouts and assists for each team and for only 6 positions (1B, 2B, 3B, C, OF, SS and UT). In addition, each of these three variables was scaled to a common range by dividing each variable by the maximum of the variable.</p>
<h3>Usage</h3>
<pre>data("Hitters")</pre>
<h3>Format</h3>
<p>A data frame with 154 observations and 4 variables.</p>
<dl>
<dt>Positions</dt>
<dd>
<p>factor indicating the field position (1B=first baseman, 2B=second baseman, 3B=third baseman, C=catcher, OF=outfielder, SS=Short Stop, UT=Utility Players).</p>
</dd>
<dt>Putouts</dt>
<dd>
<p>occur when a fielder causes an opposing player to be tagged or forced out.</p>
</dd>
<dt>Assists</dt>
<dd>
<p>are credited to other fielders involved in making that putout.</p>
</dd>
<dt>Errors</dt>
<dd>
<p>count the errors made by a player.</p>
</dd>
</dl>
<h3>Source</h3>
<p>SAS System for Statistical Graphics, First Edition, Page A2.3</p>
<h3>References</h3>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Hitters")
attach(Hitters)colors &lt;- c("black","red","green","blue","red","black","blue")
pch &lt;- substr(levels(Positions), 1, 1)
ternaryplot(Hitters[,2:4],
pch = as.character(Positions),
col = colors[as.numeric(Positions)],
main = "Baseball Hitters Data")
grid_legend(0.8, 0.9, pch, colors, levels(Positions),
title = "POSITION(S)")detach(Hitters)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27926.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27926.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-hitters.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27926.json';</script>