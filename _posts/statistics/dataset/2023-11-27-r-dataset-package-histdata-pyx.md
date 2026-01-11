---
title: R Dataset / Package HistData / Pyx
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Pyx</span> data set which pertains to Trial of the Pyx. The <span class="mono">Pyx</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Pyx</span> data set in R by issuing the following command at the console <span class="mono">data("Pyx")</span>. This will load the data into a variable called <span class="mono">Pyx</span>. If R says the <span class="mono">Pyx</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-17100.csv">Pyx R data set</a></span>. The size of this file is about 2,373 bytes.</p><h2>Trial of the Pyx</h2>
<h3>Description</h3>
<p>Stigler (1997, 1999) recounts the history of one of the oldest continuous schemes of sampling inspection carried out by the Royal Mint in London for about eight centuries. The Trial of the Pyx was the final, ceremonial stage in a process designed to ensure that the weight and quality of gold and silver coins from the mint met the standards for coinage.</p>
<p>At regular intervals, coins would be taken from production and deposited into a box called the Pyx. When a Trial of the Pyx was called, the contents of the Pyx would be counted, weighed and assayed for content, and the results would be compared with the standard set for the Royal Mint.</p>
<p>The data frame <code>Pyx</code> gives the results for the year 1848 (Great Britain, 1848) in which 10,000 gold sovereigns were assayed. The coins in each bag were classified according to the deviation from the standard content of gold for each coin, called the Remedy, R = 123 * (12/5760) = .25625, in grains, for a single sovereign.</p>
<h3>Usage</h3>
<pre>data(Pyx)</pre>
<h3>Format</h3>
<p>A frequency data frame with 72 observations on the following 4 variables giving the distribution of 10,000 soverigns, classified according to the <code>Bags</code> in which they were collected and the <code>Deviation</code> from the standard weight.</p>
<dl>
<dt><code>Bags</code></dt>
<dd>
<p>an ordered factor with levels <code>1 and 2</code> &lt; <code>3</code> &lt; <code>4</code> &lt; <code>5</code> &lt; <code>6</code> &lt; <code>7</code> &lt; <code>8</code> &lt; <code>9</code> &lt; <code>10</code></p>
</dd>
<dt><code>Group</code></dt>
<dd>
<p>an ordered factor with levels <code>below std</code> &lt; <code>near std</code> &lt; <code>above std</code></p>
</dd>
<dt><code>Deviation</code></dt>
<dd>
<p>an ordered factor with levels <code>Below -R</code> &lt; <code>(-R to -.2)</code> &lt; <code>(-.2 to -.l)</code> &lt; <code>(-.1 to 0)</code> &lt; <code>(0 to .l)</code> &lt; <code>(.1 to .2)</code> &lt; <code>(.2 to R)</code> &lt; <code>Above R</code></p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>number of soverigns</p>
</dd>
</dl>
<h3>Details</h3>
<p><code>Bags</code> 1-4 were selected as "near to standard", bags 5-7 as below standard, bags 8-10 as above standard. This classification is reflected in <code>Group</code>.</p>
<h3>Source</h3>
<p>Stigler, S. M. (1999). <em>Statistics on the Table</em>. Cambridge, MA: Harvard University Press, table 21.1.</p>
<h3>References</h3>
<p>Great Britain (1848). "Report of the Commissioners Appointed to Inquire into the Constitution, Management and Expense of the Royal Mint." In Vol 28 of <em>House Documents for 1849</em>.</p>
<p>Stigler, S. M. (1997). Eight Centuries of Sampling Inspection: The Trial of the Pyx <em>Journal of the American Statistical Association</em>, 72(359), 493-500</p>
<h3>Examples</h3>
<pre>
data(Pyx)
# display as table
xtabs(count ~ Bags+Deviation, data=Pyx)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-17100.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-17100.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-pyx.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-17100.json';</script>