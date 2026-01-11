---
title: R Dataset / Package HistData / ChestSizes
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ChestSizes</span> data set which pertains to Chest measurements of 5738 Scottish Militiamen. The <span class="mono">ChestSizes</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">ChestSizes</span> data set in R by issuing the following command at the console <span class="mono">data("ChestSizes")</span>. This will load the data into a variable called <span class="mono">ChestSizes</span>. If R says the <span class="mono">ChestSizes</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-58041.csv">ChestSizes R data set</a></span>. The size of this file is about 119 bytes.</p><h2>Chest measurements of 5738 Scottish Militiamen</h2>
<h3>Description</h3>
<p>Quetelet's data on chest measurements of 5738 Scottish Militiamen. Quetelet (1846) used this data as a demonstration of the normal distribution of physical characteristics.</p>
<h3>Usage</h3>
<pre>data(ChestSizes)</pre>
<h3>Format</h3>
<p>A data frame with 16 observations on the following 2 variables.</p>
<dl>
<dt><code>chest</code></dt>
<dd>
<p>Chest size (in inches)</p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>Number of soldiers with this chest size</p>
</dd>
</dl>
<h3>Source</h3>
<p>Velleman, P. F. and Hoaglin, D. C. (1981). <em>Applications, Basics, and Computing of Exploratory Data Analysis</em>. Belmont. CA: Wadsworth. Retrieved from Statlib: <code>https://www.stat.cmu.edu/StatDat/Datafiles/MilitiamenChests.html</code></p>
<h3>References</h3>
<p>A. Quetelet, <em>Lettres a S.A.R. le Duc Regnant de Saxe-Cobourg et Gotha, sur la Theorie des Probabilites, Appliquee aux Sciences Morales et Politiques</em>. Brussels: M. Hayes, 1846, p. 400.</p>
<h3>Examples</h3>
<pre>
data(ChestSizes)
## maybe str(ChestSizes) ; plot(ChestSizes) ...# frequency polygon
plot(ChestSizes, type='b')
#barplot
barplot(ChestSizes[,2], ylab="Frequency", xlab="Chest size")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-58041.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-58041.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-chestsizes.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-58041.json';</script>