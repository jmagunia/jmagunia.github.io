---
title: R Dataset / Package datasets / stackloss
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">stackloss</span> data set which pertains to Brownlee's Stack Loss Plant Data. The <span class="mono">stackloss</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">stackloss</span> data set in R by issuing the following command at the console <span class="mono">data("stackloss")</span>. This will load the data into a variable called <span class="mono">stackloss</span>. If R says the <span class="mono">stackloss</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-55597.csv">stackloss R data set</a></span>. The size of this file is about 297 bytes.</p><h2>Brownlee's Stack Loss Plant Data</h2>
<h3>Description</h3>
<p>Operational data of a plant for the oxidation of ammonia to nitric acid.</p>
<h3>Usage</h3>
<pre>
stacklossstack.x
stack.loss
</pre>
<h3>Format</h3>
<p><code>stackloss</code> is a data frame with 21 observations on 4 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;"><code>Air Flow</code></td>
<td style="text-align: left;">Flow of cooling air</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;"><code>Water Temp</code></td>
<td style="text-align: left;">Cooling Water Inlet Temperature</td>
</tr>
<tr>
<td style="text-align: right;">[,3]</td>
<td style="text-align: left;"><code>Acid Conc.</code></td>
<td style="text-align: left;">Concentration of acid [per 1000, minus 500]</td>
</tr>
<tr>
<td style="text-align: right;">[,4]</td>
<td style="text-align: left;"><code>stack.loss</code></td>
<td style="text-align: left;">Stack loss</td>
</tr>
</table>
<p>For compatibility with S-PLUS, the data sets <code>stack.x</code>, a matrix with the first three (independent) variables of the data frame, and <code>stack.loss</code>, the numeric vector giving the fourth (dependent) variable, are provided as well.</p>
<h3>Details</h3>
<p>“Obtained from 21 days of operation of a plant for the oxidation of ammonia (NH<i>3</i>) to nitric acid (HNO<i>3</i>). The nitric oxides produced are absorbed in a countercurrent absorption tower”. (Brownlee, cited by Dodge, slightly reformatted by MM.)</p>
<p><code>Air Flow</code> represents the rate of operation of the plant. <code>Water Temp</code> is the temperature of cooling water circulated through coils in the absorption tower. <code>Acid Conc.</code> is the concentration of the acid circulating, minus 50, times 10: that is, 89 corresponds to 58.9 per cent acid. <code>stack.loss</code> (the dependent variable) is 10 times the percentage of the ingoing ammonia to the plant that escapes from the absorption column unabsorbed; that is, an (inverse) measure of the over-all efficiency of the plant.</p>
<h3>Source</h3>
<p>Brownlee, K. A. (1960, 2nd ed. 1965) <em>Statistical Theory and Methodology in Science and Engineering</em>. New York: Wiley. pp. 491–500.</p>
<h3>References</h3>
<p>Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) <em>The New S Language</em>. Wadsworth &amp; Brooks/Cole.</p>
<p>Dodge, Y. (1996) The guinea pig of multiple regression. In: <em>Robust Statistics, Data Analysis, and Computer Intensive Methods; In Honor of Peter Huber's 60th Birthday</em>, 1996, <em>Lecture Notes in Statistics</em> <b>109</b>, Springer-Verlag, New York.</p>
<h3>Examples</h3>
<pre>
require(stats)
summary(lm.stack &lt;- lm(stack.loss ~ stack.x))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-55597.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-55597.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-stackloss.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-55597.json';</script>