---
title: R Dataset / Package datasets / warpbreaks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">warpbreaks</span> data set which pertains to The Number of Breaks in Yarn during Weaving. The <span class="mono">warpbreaks</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">warpbreaks</span> data set in R by issuing the following command at the console <span class="mono">data("warpbreaks")</span>. This will load the data into a variable called <span class="mono">warpbreaks</span>. If R says the <span class="mono">warpbreaks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-19372.csv">warpbreaks R data set</a></span>. The size of this file is about 620 bytes.</p><h2>The Number of Breaks in Yarn during Weaving</h2>
<h3>Description</h3>
<p>This data set gives the number of warp breaks per loom, where a loom corresponds to a fixed length of yarn.</p>
<h3>Usage</h3>
<pre>warpbreaks</pre>
<h3>Format</h3>
<p>A data frame with 54 observations on 3 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>[,1]</code></td>
<td style="text-align: left;"><code>breaks</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">The number of breaks</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,2]</code></td>
<td style="text-align: left;"><code>wool</code></td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">The type of wool (A or B)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,3]</code></td>
<td style="text-align: left;"><code>tension</code></td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">The level of tension (L, M, H)</td>
</tr>
</table>
<p>There are measurements on 9 looms for each of the six types of warp (<code>AL</code>, <code>AM</code>, <code>AH</code>, <code>BL</code>, <code>BM</code>, <code>BH</code>).</p>
<h3>Source</h3>
<p>Tippett, L. H. C. (1950) <em>Technological Applications of Statistics</em>. Wiley. Page 106.</p>
<h3>References</h3>
<p>Tukey, J. W. (1977) <em>Exploratory Data Analysis</em>. Addison-Wesley.</p>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>See Also</h3>
<p><code>xtabs</code> for ways to display these data as a table.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
summary(warpbreaks)
opar &lt;- par(mfrow = c(1, 2), oma = c(0, 0, 1.1, 0))
plot(breaks ~ tension, data = warpbreaks, col = "lightgray",
 varwidth = TRUE, subset = wool == "A", main = "Wool A")
plot(breaks ~ tension, data = warpbreaks, col = "lightgray",
 varwidth = TRUE, subset = wool == "B", main = "Wool B")
mtext("warpbreaks data", side = 3, outer = TRUE)
par(opar)
summary(fm1 &lt;- lm(breaks ~ wool*tension, data = warpbreaks))
anova(fm1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-19372.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-19372.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-warpbreaks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-19372.json';</script>