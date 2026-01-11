---
title: R Dataset / Package mosaicData / Birthdays
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Birthdays</span> data set which pertains to US Births in 1969 - 1988. The <span class="mono">Birthdays</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Birthdays</span> data set in R by issuing the following command at the console <span class="mono">data("Birthdays")</span>. This will load the data into a variable called <span class="mono">Birthdays</span>. If R says the <span class="mono">Birthdays</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45887.csv">Birthdays R data set</a></span>. The size of this file is about 13,423,664 bytes.</p><h2>US Births in 1969 - 1988</h2>
<h3>Description</h3>
<p>A day by day record of the number of births in each US State.</p>
<h3>Usage</h3>
<pre>
data(Birthdays)
</pre>
<h3>Format</h3>
<p>A data frame with 374221 observations on the following variables.</p>
<ul>
<li>
<p><code>state</code> state where child was born</p>
</li>
<li>
<p><code>year</code> year (1969-1988)</p>
</li>
<li>
<p><code>month</code> month (1-12)</p>
</li>
<li>
<p><code>day</code> day of month</p>
</li>
<li>
<p><code>date</code> date as a date object</p>
</li>
<li>
<p><code>births</code> number of births</p>
</li>
</ul>
<h3>Examples</h3>
<pre>
data(Birthdays)
if (require(lattice)) {
xyplot(births ~ date, Birthdays, subset=state=="CA")
xyplot(births ~ date, Birthdays, subset=state=="CA", 
groups=wday, type='l')
if (require(mosaic)) {
xyplot(births ~ date, type='l',
data = Birthdays %&gt;% group_by(date) %&gt;% summarise(births=sum(births)))
}
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45887.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45887.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-birthdays.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45887.json';</script>