---
title: R Dataset / Package datasets / women
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">women</span> data set which pertains to Average Heights and Weights for American Women. The <span class="mono">women</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">women</span> data set in R by issuing the following command at the console <span class="mono">data("women")</span>. This will load the data into a variable called <span class="mono">women</span>. If R says the <span class="mono">women</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70861.csv">women R data set</a></span>. The size of this file is about 123 bytes.</p><h2>Average Heights and Weights for American Women</h2>
<h3>Description</h3>
<p>This data set gives the average heights and weights for American women aged 30–39.</p>
<h3>Usage</h3>
<pre>women</pre>
<h3>Format</h3>
<p>A data frame with 15 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>[,1]</code></td>
<td style="text-align: left;"><code>height</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Height (in)</td>
</tr>
<tr>
<td style="text-align: right;"><code>[,2]</code></td>
<td style="text-align: left;"><code>weight</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Weight (lbs)</td>
</tr>
</table>
<h3>Details</h3>
<p>The data set appears to have been taken from the American Society of Actuaries <em>Build and Blood Pressure Study</em> for some (unknown to us) earlier year.</p>
<p>The World Almanac notes: “The figures represent weights in ordinary indoor clothing and shoes, and heights with shoes”.</p>
<h3>Source</h3>
<p>The World Almanac and Book of Facts, 1975.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(women, xlab = "Height (in)", ylab = "Weight (lb)",
 main = "women data: American women aged 30-39")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70861.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70861.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-women.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70861.json';</script>