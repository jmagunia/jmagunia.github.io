---
title: R Dataset / Package DAAG / austpop
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">austpop</span> data set which pertains to Population figures for Australian States and Territories. The <span class="mono">austpop</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">austpop</span> data set in R by issuing the following command at the console <span class="mono">data("austpop")</span>. This will load the data into a variable called <span class="mono">austpop</span>. If R says the <span class="mono">austpop</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70542.csv">austpop R data set</a></span>. The size of this file is about 456 bytes.</p><h2>Population figures for Australian States and Territories</h2>
<h3>Description</h3>
<p>Population figures for Australian states and territories for 1917, 1927, ..., 1997.</p>
<h3>Usage</h3>
<pre>austpop</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>year</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>NSW</dt>
<dd>
<p>New South Wales population counts</p>
</dd>
<dt>Vic</dt>
<dd>
<p>Victoria population counts</p>
</dd>
<dt>Qld</dt>
<dd>
<p>Queensland population counts</p>
</dd>
<dt>SA</dt>
<dd>
<p>South Australia population counts</p>
</dd>
<dt>WA</dt>
<dd>
<p>Western Australia population counts</p>
</dd>
<dt>Tas</dt>
<dd>
<p>Tasmania population counts</p>
</dd>
<dt>NT</dt>
<dd>
<p>Northern Territory population counts</p>
</dd>
<dt>ACT</dt>
<dd>
<p>Australian Capital Territory population counts</p>
</dd>
<dt>Aust</dt>
<dd>
<p>Population counts for the whole country</p>
</dd>
</dl>
<h3>Source</h3>
<p>Australian Bureau of Statistics</p>
<h3>Examples</h3>
<pre>
print("Looping - Example 1.7")growth.rates &lt;- numeric(8)
for (j in seq(2,9)) {
growth.rates[j-1] &lt;- (austpop[9, j]-austpop[1, j])/austpop[1, j] }
growth.rates &lt;- data.frame(growth.rates)
row.names(growth.rates) &lt;- names(austpop[c(-1,-10)])
# Note the use of row.names() to name the rows of the data frame
growth.ratespause()
print("Avoiding Loops - Example 1.7b")sapply(austpop[,-c(1,10)], function(x){(x[9]-x[1])/x[1]})pause()
print("Plot - Example 1.8a")
attach(austpop)
plot(year, ACT, type="l") # Join the points ("l" = "line")
detach(austpop)pause()
print("Exerice 1.12.9")
attach(austpop)
oldpar &lt;- par(mfrow=c(2,4))
for (i in 2:9){
plot(austpop[,1], log(austpop[, i]), xlab="Year",
ylab=names(austpop)[i], pch=16, ylim=c(0,10))}
par(oldpar) 
detach(austpop)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70542.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70542.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-austpop.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70542.json';</script>