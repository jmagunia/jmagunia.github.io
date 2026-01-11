---
title: R Dataset / Package DAAG / humanpower2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">humanpower2</span> data set which pertains to Oxygen uptake versus mechanical power, for humans. The <span class="mono">humanpower2</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">humanpower2</span> data set in R by issuing the following command at the console <span class="mono">data("humanpower2")</span>. This will load the data into a variable called <span class="mono">humanpower2</span>. If R says the <span class="mono">humanpower2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-39914.csv">humanpower2 R data set</a></span>. The size of this file is about 409 bytes.</p><h2>Oxygen uptake versus mechanical power, for humans</h2>
<h3>Description</h3>
<p>The data set from Daedalus project.</p>
<h3>Usage</h3>
<pre>data(humanpower1)</pre>
<h3>Format</h3>
<p>A data frame with 28 observations on the following 3 variables.</p>
<dl>
<dt>wattsPerKg</dt>
<dd>
<p>a numeric vector: watts per kilogram of body weight</p>
</dd>
<dt>o2</dt>
<dd>
<p>a numeric vector: ml/min/kg</p>
</dd>
<dt>id</dt>
<dd>
<p>a factor with levels 1 - 5 (<code>humanpower1</code>) or 1 - 4 (<code>humanpower2</code>), identifying the different athletes</p>
</dd>
</dl>
<h3>Details</h3>
<p>Data in <code>humanpower1</code> are from investigations (Bussolari 1987) designed to assess the feasibility of a proposed 119 kilometer human powered flight from the island of Crete – in the initial phase of the Daedalus project. Data are for five athletes – a female hockey player, a male amateur tri-athlete, a female amateur triathlete, a male wrestler and a male cyclist – who were selected from volunteers who were recruited through the news media, Data in <code>humanpower2) are for four out of the 25 applicants who were selected for further testing, in the lead-up to the eventual selection of a pilot for the Daedalus project (Nadel and Bussolari 1988).</code></p>
<h3>Source</h3>
<p>Bussolari, S.R.(1987). Human factors of long-distance human-powered aircraft flights. Human Power 5: 8-12.</p>
<p>Nadel and Bussolari, S.R.(1988). The Daedalus project: physiological problems and solutions. American Scientist 76: 351-360.</p>
<h3>References</h3>
<p>Nadel and Bussolari, S.R.(1989). The physiological limits of long-duration human-power production – lessons learned from the Daedalus project. Human Power 7: 7-10.</p>
<h3>Examples</h3>
<pre>
str(humanpower1)
plot(humanpower1)
lm(o2 ~ id + wattsPerKg:id, data=humanpower1)
lm(o2 ~ id + wattsPerKg:id, data=humanpower2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-39914.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-39914.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-humanpower2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-39914.json';</script>