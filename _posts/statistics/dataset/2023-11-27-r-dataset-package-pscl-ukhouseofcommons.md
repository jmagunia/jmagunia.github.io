---
title: R Dataset / Package pscl / UKHouseOfCommons
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UKHouseOfCommons</span> data set which pertains to 1992 United Kingdom electoral returns. The <span class="mono">UKHouseOfCommons</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">UKHouseOfCommons</span> data set in R by issuing the following command at the console <span class="mono">data("UKHouseOfCommons")</span>. This will load the data into a variable called <span class="mono">UKHouseOfCommons</span>. If R says the <span class="mono">UKHouseOfCommons</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65134.csv">UKHouseOfCommons R data set</a></span>. The size of this file is about 44,388 bytes.</p><h2>1992 United Kingdom electoral returns</h2>
<h3>Description</h3>
<p>Electoral returns, selected constituencies, 1992 general election for the British House of Commons</p>
<h3>Usage</h3>
<pre>data(UKHouseOfCommons)</pre>
<h3>Format</h3>
<p>A data frame with 521 observations on the following 12 variables.</p>
<dl>
<dt><code>constituency</code></dt>
<dd>
<p>a character vector, name of the House of Commons constituency</p>
</dd>
<dt><code>county</code></dt>
<dd>
<p>a character vector, county of the House of Commons constituency</p>
</dd>
<dt><code>y1</code></dt>
<dd>
<p>a numeric vector, log-odds of Conservative to LibDem vote share</p>
</dd>
<dt><code>y2</code></dt>
<dd>
<p>a numeric vector, log-odds of Labor to LibDem vote share</p>
</dd>
<dt><code>y1lag</code></dt>
<dd>
<p>a numeric vector, <code>y1</code> from previous election</p>
</dd>
<dt><code>y2lag</code></dt>
<dd>
<p>a numeric vector, <code>y2</code> from previous election</p>
</dd>
<dt><code>coninc</code></dt>
<dd>
<p>a numeric vector, 1 if the incumbent is a Conservative, 0 otherwise</p>
</dd>
<dt><code>labinc</code></dt>
<dd>
<p>a numeric vector, 1 if the incumbent is from the Labor Party, 0 otherwise</p>
</dd>
<dt><code>libinc</code></dt>
<dd>
<p>a numeric vector, 1 if the incumbent is from the LibDems, 0 otherwise</p>
</dd>
<dt><code>v1</code></dt>
<dd>
<p>a numeric vector, Conservative vote share (proportion of 3 party vote)</p>
</dd>
<dt><code>v2</code></dt>
<dd>
<p>a numeric vector, Labor vote share (proportion of 3 party vote)</p>
</dd>
<dt><code>v3</code></dt>
<dd>
<p>a numeric vector, LibDem vote share (proportion of 3 party vote)</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data span only 521 of the 621 seats in the House of Commons at the time of 1992 election. Seats missing either a Conservative, Labor, or a LibDem candidate appear to have been dropped.</p>
<p>The original Katz and King data set does not have case labels. I used matches to an additional data source to recover a set of constituency labels for these data; labels could not recovered for two of the constituencies.</p>
<h3>Source</h3>
<p>Jonathan Katz; Gary King. 1999. "Replication data for: A Statistical Model of Multiparty Electoral Data", <a href="http://hdl.handle.net/1902.1/QIGTWZYTLZ">http://hdl.handle.net/1902.1/QIGTWZYTLZ</a></p>
<h3>References</h3>
<p>Katz, Jonathan and Gary King. 1999. “A Statistical Model for Multiparty Electoral Data”. <em>American Political Science Review</em>. 93(1): 15-32.</p>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Chichester. Example 6.9.</p>
<h3>Examples</h3>
<pre>
data(UKHouseOfCommons)
tmp &lt;- UKHouseOfCommons[,c("v1","v2","v3")] 
summary(apply(tmp,1,sum))col &lt;- rep("black",dim(tmp)[1])
col[UKHouseOfCommons$coninc==1] &lt;- "blue"
col[UKHouseOfCommons$labinc==1] &lt;- "red"
col[UKHouseOfCommons$libinc==1] &lt;- "orange"library(vcd)
vcd::ternaryplot(tmp,
 dimnames=c("Cons","Lab","Lib-Dem"),
 labels="outside",
 col=col,
 pch=1,
 main="1992 UK House of Commons Election",
 cex=.75)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65134.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65134.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-ukhouseofcommons.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65134.json';</script>