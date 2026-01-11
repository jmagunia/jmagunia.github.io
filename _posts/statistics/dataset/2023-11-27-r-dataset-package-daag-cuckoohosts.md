---
title: R Dataset / Package DAAG / cuckoohosts
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cuckoohosts</span> data set which pertains to Comparison of cuckoo eggs with host eggs. The <span class="mono">cuckoohosts</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cuckoohosts</span> data set in R by issuing the following command at the console <span class="mono">data("cuckoohosts")</span>. This will load the data into a variable called <span class="mono">cuckoohosts</span>. If R says the <span class="mono">cuckoohosts</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62327.csv">cuckoohosts R data set</a></span>. The size of this file is about 703 bytes.</p><h2>Comparison of cuckoo eggs with host eggs</h2>
<h3>Description</h3>
<p>These data compare mean length, mean breadth, and egg color, between cuckoos and their hosts.</p>
<h3>Usage</h3>
<pre>cuckoohosts</pre>
<h3>Format</h3>
<p>A data frame with 10 observations on the following 12 variables.</p>
<dl>
<dt>clength</dt>
<dd>
<p>mean length of cuckoo eggs in given host's nest</p>
</dd>
<dt>cl.sd</dt>
<dd>
<p>standard deviation of cuckoo egg lengths</p>
</dd>
<dt>cbreadth</dt>
<dd>
<p>mean breadth of cuckoo eggs in given host's nest</p>
</dd>
<dt>cb.sd</dt>
<dd>
<p>standard deviation of cuckoo egg breadths</p>
</dd>
<dt>cnum</dt>
<dd>
<p>number of cuckoo eggs</p>
</dd>
<dt>hlength</dt>
<dd>
<p>length of host eggs</p>
</dd>
<dt>hl.sd</dt>
<dd>
<p>standard deviation of host egg lengths</p>
</dd>
<dt>hbreadth</dt>
<dd>
<p>breadth of host eggs</p>
</dd>
<dt>hb.sd</dt>
<dd>
<p>standard deviation of host egg breadths</p>
</dd>
<dt>hnum</dt>
<dd>
<p>number of host eggs</p>
</dd>
<dt>match</dt>
<dd>
<p>number of eggs where color matched</p>
</dd>
<dt>nomatch</dt>
<dd>
<p>number where color did not match</p>
</dd>
</dl>
<h3>Details</h3>
<p>Although from the same study that generated data in the data frame <code>cuckoos</code>, the data do not match precisely. The cuckoo egg lengths and breadths are from the tables on page 168, the host egg lengths and breadths from Appendix IV on page 176, and the color match counts from the table on page 171.</p>
<h3>Source</h3>
<p>Latter, O.H., 1902. The egg of <em>cuculus canorus</em>. an inquiry into the dimensions of the cuckoo's egg and the relation of the variations to the size of the eggs of the foster-parent, with notes on coloration, &amp;c. <em>Biometrika</em>, 1:164–176.</p>
<h3>Examples</h3>
<pre>
cuckoohosts
str(cuckoohosts)
plot(cuckoohosts)
with(cuckoohosts,
 plot(c(clength,hlength),c(cbreadth,hbreadth),col=rep(1:2,c(6,6))))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62327.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62327.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cuckoohosts.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62327.json';</script>