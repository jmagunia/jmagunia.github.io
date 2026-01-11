---
title: ToothGrowth
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>The Effect of Vitamin C on Tooth Growth in Guinea Pigs</h2>
<p>The response is the length of odontoblasts (cells responsible for tooth growth) in 60 guinea pigs. Each animal received one of three dose levels of vitamin C (0.5, 1, and 2 mg/day) by one of two delivery methods, (orange juice or ascorbic acid (a form of vitamin C and coded as <code>VC</code>).</p>
<h3>Usage</h3>
<pre>ToothGrowth</pre>
<h3>Format</h3>
<p>A data frame with 60 observations on 3 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">len</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Tooth length</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">supp</td>
<td style="text-align: left;">factor</td>
<td style="text-align: left;">Supplement type (VC or OJ).</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;">dose</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Dose in milligrams/day</td>
</tr>
</table>
<h3>Source</h3>
<p>C. I. Bliss (1952) <em>The Statistics of Bioassay</em>. Academic Press.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<p>Crampton, E. W. (1947) The growth of the odontoblast of the incisor teeth as a criterion of vitamin C intake of the guinea pig. <em>The Journal of Nutrition</em> <b>33(5)</b>: 491–504. <a href="http://jn.nutrition.org/content/33/5/491.full.pdf">http://jn.nutrition.org/content/33/5/491.full.pdf</a></p>
<h3>Examples</h3>
<pre>
require(graphics)
coplot(len ~ dose | supp, data = ToothGrowth, panel = panel.smooth,
 xlab = "ToothGrowth data: length vs dose, given type of supplement")
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81319.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81319.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/toothgrowth.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81319.json';</script>