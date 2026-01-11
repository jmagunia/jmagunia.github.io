---
title: R Dataset / Package vcd / Lifeboats
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Lifeboats</span> data set which pertains to Lifeboats on the Titanic. The <span class="mono">Lifeboats</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Lifeboats</span> data set in R by issuing the following command at the console <span class="mono">data("Lifeboats")</span>. This will load the data into a variable called <span class="mono">Lifeboats</span>. If R says the <span class="mono">Lifeboats</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14247_0.csv">Lifeboats R data set</a></span>. The size of this file is about 904 bytes.</p><h2>Lifeboats on the Titanic</h2>
<h3>Description</h3>
<p>Data from Mersey (1912) about the 18 (out of 20) lifeboats launched before the sinking of the S. S. Titanic.</p>
<h3>Usage</h3>
<pre>data("Lifeboats")</pre>
<h3>Format</h3>
<p>A data frame with 18 observations and 8 variables.</p>
<dl>
<dt>launch</dt>
<dd>
<p>launch time in <code>"POSIXt"</code> format.</p>
</dd>
<dt>side</dt>
<dd>
<p>factor. Side of the boat.</p>
</dd>
<dt>boat</dt>
<dd>
<p>factor indicating the boat.</p>
</dd>
<dt>crew</dt>
<dd>
<p>number of male crew members on board.</p>
</dd>
<dt>men</dt>
<dd>
<p>number of men on board.</p>
</dd>
<dt>women</dt>
<dd>
<p>number of women (including female crew) on board.</p>
</dd>
<dt>total</dt>
<dd>
<p>total number of passengers.</p>
</dd>
<dt>cap</dt>
<dd>
<p>capacity of the boat.</p>
</dd>
</dl>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/lifeboat.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/lifeboat.sas</a></p>
<h3>References</h3>
<p>L. Mersey (1912), Report on the loss of the “Titanic” (S. S.). Parliamentary command paper 6452.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Lifeboats")
attach(Lifeboats)
ternaryplot(
Lifeboats[,4:6],
pch = ifelse(side == "Port", 1, 19),
col = ifelse(side == "Port", "red", "blue"),
id= ifelse(men / total &gt; 0.1, as.character(boat), NA),
prop_size = 2,
dimnames_position = "edge",
main = "Lifeboats on the Titanic"
)
grid_legend(0.8, 0.9, c(1, 19), c("red", "blue"),
c("Port", "Starboard"), title = "SIDE")
detach(Lifeboats)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14247_0.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14247_0.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-lifeboats.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14247_0.json';</script>