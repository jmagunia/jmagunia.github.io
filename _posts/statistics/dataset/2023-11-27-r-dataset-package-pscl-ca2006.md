---
title: R Dataset / Package pscl / ca2006
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ca2006</span> data set which pertains to California Congressional Districts in 2006. The <span class="mono">ca2006</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">ca2006</span> data set in R by issuing the following command at the console <span class="mono">data("ca2006")</span>. This will load the data into a variable called <span class="mono">ca2006</span>. If R says the <span class="mono">ca2006</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60464.csv">ca2006 R data set</a></span>. The size of this file is about 4,078 bytes.</p><h2>California Congressional Districts in 2006</h2>
<h3>Description</h3>
<p>Election returns and identifying information, California's 53 congressional districts in the 2006 Congresisonal elections.</p>
<h3>Usage</h3>
<pre>data(ca2006)</pre>
<h3>Format</h3>
<p>A data frame with 53 observations on the following 11 variables.</p>
<dl>
<dt><code>district</code></dt>
<dd>
<p>numeric, number of Congressional district</p>
</dd>
<dt><code>D</code></dt>
<dd>
<p>numeric, number of votes for the Democratic candidate</p>
</dd>
<dt><code>R</code></dt>
<dd>
<p>numeric, votes for the Republican candidate</p>
</dd>
<dt><code>Other</code></dt>
<dd>
<p>numeric, votes for other candidates</p>
</dd>
<dt><code>IncParty</code></dt>
<dd>
<p>character, party of the incumbent (or retiring member), <code>D</code> or <code>R</code></p>
</dd>
<dt><code>IncName</code></dt>
<dd>
<p>character, last name of the incumbent, character <code>NA</code> if no incumbent running</p>
</dd>
<dt><code>open</code></dt>
<dd>
<p>logical, <code>TRUE</code> if no incumbent running</p>
</dd>
<dt><code>contested</code></dt>
<dd>
<p>logical, <code>TRUE</code> if both major parties ran candidates</p>
</dd>
<dt><code>Bush2004</code></dt>
<dd>
<p>numeric, votes for George W. Bush (R) in the district in the 2004 presidential election</p>
</dd>
<dt><code>Kerry2004</code></dt>
<dd>
<p>numeric, votes for John Kerry (D) in 2004</p>
</dd>
<dt><code>Other2004</code></dt>
<dd>
<p>numeric votes for other candidates in 2004</p>
</dd>
<dt><code>Bush2000</code></dt>
<dd>
<p>numeric, votes for George W. Bush in 2000</p>
</dd>
<dt><code>Gore2000</code></dt>
<dd>
<p>numeric, votes for Al Gore (D) in 2000</p>
</dd>
</dl>
<h3>Source</h3>
<p>2006 data from the California Secretary of State's web site, <a href="http://vote2006.sos.ca.gov/Returns/usrep/all.htm">http://vote2006.sos.ca.gov/Returns/usrep/all.htm</a>. 2004 and 2000 presidential vote in congressional districts from the 2006 <em>Almanac of American Politics</em>.</p>
<p>Thanks to Arthur Aguirre for the updated links, above.</p>
<h3>References</h3>
<p>Michael Baraon and Richard E. Cohen. 2006. <em>The Almanac of American Politics, 2006.</em> National Journal Group: Washington, D.C.</p>
<h3>Examples</h3>
<pre>
data(ca2006)## 2006 CA congressional vote against 2004 pvote
y &lt;- ca2006$D/(ca2006$D+ca2006$R)
x &lt;- ca2006$Kerry2004/(ca2006$Kerry2004+ca2006$Bush2004)pch &lt;- rep(19,length(y))
pch[ca2006$open] &lt;- 1
col &lt;- rep("black",length(y))
col[11] &lt;- "red"## Pembo (R) loses to McNerney (D)
plot(y~x,pch=pch,
 col=col,
 xlim=range(x,y,na.rm=TRUE),
 ylim=range(x,y,na.rm=TRUE),
 xlab="Kerry Two-Party Vote, 2004",
 ylab="Democratic Two-Party Vote Share, 2006")
abline(0,1)
abline(h=.5,lty=2)
abline(v=.5,lty=2)
legend(x="topleft",
 bty="n",
 col=c("red","black","black"),
 pch=c(19,19,1),
 legend=c("Seat Changing Hands",
 "Seat Retained by Incumbent Party",
 "Open Seat (no incumbent running)")
 )
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60464.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60464.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-ca2006.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60464.json';</script>