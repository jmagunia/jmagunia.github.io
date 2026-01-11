---
title: R Dataset / Package Zelig / friendship
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">friendship</span> data set which pertains to Simulated Example of Schoolchildren Friendship Network. The <span class="mono">friendship</span> data set is found in the <span class="mono">Zelig</span> R package. You can load the <span class="mono">friendship</span> data set in R by issuing the following command at the console <span class="mono">data("friendship")</span>. This will load the data into a variable called <span class="mono">friendship</span>. If R says the <span class="mono">friendship</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Zelig")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70760.csv">friendship R data set</a></span>. The size of this file is about 67 bytes.</p><h2>Simulated Example of Schoolchildren Friendship Network</h2>
<h3>Description</h3>
<p>This data set contains six sociomatrices of simulated data on friendship ties among schoolchildren.</p>
<h3>Usage</h3>
<pre>data(friendship)</pre>
<h3>Format</h3>
<p>Each variable in the dataset is a 15 by 15 matrix representing some form of social network tie held by the fictitious children. The matrices are labeled "friends", "advice", "prestige", "authority", "perpower" and "per".</p>
<p>The sociomatrices were combined into the friendship dataset using the format.network.data function from the netglm package by Skyler Cranmer as shown in the example.</p>
<h3>Source</h3>
<p>fictitious</p>
<h3>Examples</h3>
<pre>
## Not run: 
friendship &lt;- format.network.data(friends, advice, prestige, authority, perpower, per)## End(Not run)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70760.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70760.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-friendship.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70760.json';</script>