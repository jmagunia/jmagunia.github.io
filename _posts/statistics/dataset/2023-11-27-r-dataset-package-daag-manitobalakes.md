---
title: R Dataset / Package DAAG / Manitoba.lakes
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Manitoba.lakes</span> data set which pertains to The Nine Largest Lakes in Manitoba. The <span class="mono">Manitoba.lakes</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">Manitoba.lakes</span> data set in R by issuing the following command at the console <span class="mono">data("Manitoba.lakes")</span>. This will load the data into a variable called <span class="mono">Manitoba.lakes</span>. If R says the <span class="mono">Manitoba.lakes</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-96796.csv">Manitoba.lakes R data set</a></span>. The size of this file is about 179 bytes.</p><h2>The Nine Largest Lakes in Manitoba</h2>
<h3>Description</h3>
<p>The <code>Manitoba.lakes</code> data frame has 9 rows and 2 columns. The areas and elevations of the nine largest lakes in Manitoba, Canada. The geography of Manitoba (a relatively flat province) can be divided crudely into three main areas: a very flat prairie in the south which is at a relatively high elevation, a middle region consisting of mainly of forest and Precambrian rock, and a northern region which drains more rapidly into Hudson Bay. All water in Manitoba, which does not evaporate, eventually drains into Hudson Bay.</p>
<h3>Usage</h3>
<pre>Manitoba.lakes</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>elevation</dt>
<dd>
<p>a numeric vector consisting of the elevations of the lakes (in meters)</p>
</dd>
<dt>area</dt>
<dd>
<p>a numeric vector consisting of the areas of the lakes (in square kilometers)</p>
</dd>
</dl>
<h3>Source</h3>
<p>The CANSIM data base at Statistics Canada.</p>
<h3>Examples</h3>
<pre>
plot(Manitoba.lakes)
plot(Manitoba.lakes[-1,])
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-96796.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-96796.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-manitobalakes.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-96796.json';</script>