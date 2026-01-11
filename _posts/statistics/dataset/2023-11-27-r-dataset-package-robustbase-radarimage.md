---
title: R Dataset / Package robustbase / radarImage
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">radarImage</span> data set which pertains to Satellite Radar Image Data from near Munich. The <span class="mono">radarImage</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">radarImage</span> data set in R by issuing the following command at the console <span class="mono">data("radarImage")</span>. This will load the data into a variable called <span class="mono">radarImage</span>. If R says the <span class="mono">radarImage</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69063.csv">radarImage R data set</a></span>. The size of this file is about 39,162 bytes.</p><h2>Satellite Radar Image Data from near Munich</h2>
<h3>Description</h3>
<p>The data were supplied by A. Frery. They are a part of a synthetic aperture satellite radar image corresponding to a suburb of Munich. Provided are coordinates and values corresponding to three frequency bands for each of 1573 pixels.</p>
<h3>Usage</h3>
<pre>data(radarImage)</pre>
<h3>Format</h3>
<p>A data frame with 1573 observations on the following 5 variables.</p>
<dl>
<dt><code>X.coord</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Y.coord</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Band.1</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Band.2</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>Band.3</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>The website accompanying the MMY-book: <a href="http://www.wiley.com/legacy/wileychi/robust_statistics">http://www.wiley.com/legacy/wileychi/robust_statistics</a></p>
<h3>Examples</h3>
<pre>
data(radarImage)
plot(Y.coord ~ X.coord, data = radarImage)## The 8 "clear" outliers (see also below)
ii8 &lt;- c(1548:1549, 1553:1554, 1565:1566, 1570:1571)
outF &lt;- 1+(seq_len(nrow(radarImage)) %in% ii8)
pairs(radarImage[, 3:5], main = "radarImage (n = 1573)",
col = outF, pch=outF)## Finding outliers -----------------------------------------set.seed(1)
system.time(cc.ri &lt;- covMcd(radarImage))# ~ 0.1 sec
## check for covMcd() consistency:
iiO &lt;- as.integer(
 c(262, 450:451, 480:481, 509, 535, 542, 597, 643, 669, 697, 803:804, 832:834,
 862:864, 892, 989, 1123, 1145, 1223:1224, 1232:1233, 1249:1250, 1267, 1303,
 1347, 1357, 1375, 1411, 1419:1420, 1443, 1453, 1504, 1510:1512,
 1518:1521, 1525:1526, 1543:1544, 1546:1555, 1557:1558, 1561:1562, 1564:1566,
 1569:1571, 1573))
length(iiO) # 73 -- other seeds sometimes give 72, rarely 71 "outliers"
isO &lt;- cc.ri$mcd.wt == 0
stopifnot(identical(iiO, which(isO)),
identical(ii8, which(cc.ri$mah &gt; 100)),
length(intersect(cc.ri$best, iiO)) == 0)cc &lt;- c(adjustcolor("black", 0.4), adjustcolor("tomato", 0.8))
pairs(radarImage, main = "radarImage (n = 1573) + Outliers", gap=0,
col = cc[1+isO], pch = c(1,8)[1+isO], cex = 0.8)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69063.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69063.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-radarimage.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69063.json';</script>