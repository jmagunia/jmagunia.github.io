---
title: R Dataset / Package cluster / flower
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">flower</span> data set which pertains to Flower Characteristics. The <span class="mono">flower</span> data set is found in the <span class="mono">cluster</span> R package. You can load the <span class="mono">flower</span> data set in R by issuing the following command at the console <span class="mono">data("flower")</span>. This will load the data into a variable called <span class="mono">flower</span>. If R says the <span class="mono">flower</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("cluster")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34084.csv">flower R data set</a></span>. The size of this file is about 596 bytes.</p><h2>Flower Characteristics</h2>
<h3>Description</h3>
<p>8 characteristics for 18 popular flowers.</p>
<h3>Usage</h3>
<pre>data(flower)</pre>
<h3>Format</h3>
<p>A data frame with 18 observations on 8 variables:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[ , "V1"]</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">winters</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V2"]</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">shadow</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V3"]</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">tubers</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V4"]</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">color</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V5"]</td>
<td style="text-align: left;">ordered</td>
<td style="text-align: left;">soil</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V6"]</td>
<td style="text-align: left;">ordered</td>
<td style="text-align: left;">preference</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V7"]</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">height</td>
</tr>
<tr>
<td style="text-align: right;">[ , "V8"]</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">distance</td>
</tr>
</table>
<dl>
<dt>V1</dt>
<dd>
<p>winters, is binary and indicates whether the plant may be left in the garden when it freezes.</p>
</dd>
<dt>V2</dt>
<dd>
<p>shadow, is binary and shows whether the plant needs to stand in the shadow.</p>
</dd>
<dt>V3</dt>
<dd>
<p>tubers, is asymmetric binary and distinguishes between plants with tubers and plants that grow in any other way.</p>
</dd>
<dt>V4</dt>
<dd>
<p>color, is nominal and specifies the flower's color (1 = white, 2 = yellow, 3 = pink, 4 = red, 5 = blue).</p>
</dd>
<dt>V5</dt>
<dd>
<p>soil, is ordinal and indicates whether the plant grows in dry (1), normal (2), or wet (3) soil.</p>
</dd>
<dt>V6</dt>
<dd>
<p>preference, is ordinal and gives someone's preference ranking going from 1 to 18.</p>
</dd>
<dt>V7</dt>
<dd>
<p>height, is interval scaled, the plant's height in centimeters.</p>
</dd>
<dt>V8</dt>
<dd>
<p>distance, is interval scaled, the distance in centimeters that should be left between the plants.</p>
</dd>
</dl>
<h3>References</h3>
<p>Struyf, Hubert and Rousseeuw (1996), see <code>agnes</code>.</p>
<h3>Examples</h3>
<pre>
data(flower)
## Example 2 in ref
daisy(flower, type = list(asymm = 3))
daisy(flower, type = list(asymm = c(1, 3), ordratio = 7))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34084.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34084.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-cluster-flower.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34084.json';</script>