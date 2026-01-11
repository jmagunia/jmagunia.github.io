---
title: R Dataset / Package DAAG / ACF1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ACF1</span> data set which pertains to Aberrant Crypt Foci in Rat Colons. The <span class="mono">ACF1</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">ACF1</span> data set in R by issuing the following command at the console <span class="mono">data("ACF1")</span>. This will load the data into a variable called <span class="mono">ACF1</span>. If R says the <span class="mono">ACF1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-74650.csv">ACF1 R data set</a></span>. The size of this file is about 122 bytes.</p><h2>Aberrant Crypt Foci in Rat Colons</h2>
<h3>Description</h3>
<p>Numbers of aberrant crypt foci (ACF) in the section 1 of the colons of 22 rats subjected to a single dose of the carcinogen azoxymethane (AOM), sacrificed at 3 different times.</p>
<h3>Usage</h3>
<pre>ACF1</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>count</dt>
<dd>
<p>The number of ACF observed in section 1 of each rat colon</p>
</dd>
<dt>endtime</dt>
<dd>
<p>Time of sacrifice, in weeks following injection of AOM</p>
</dd>
</dl>
<h3>Source</h3>
<p>Ranjana P. Bird, Faculty of Human Ecology, University of Manitoba, Winnipeg, Canada.</p>
<h3>References</h3>
<p>E.A. McLellan, A. Medline and R.P. Bird. Dose response and proliferative characteristics of aberrant crypt foci: putative preneoplastic lesions in rat colon. Carcinogenesis, 12(11): 2093-2098, 1991.</p>
<h3>Examples</h3>
<pre>
sapply(split(ACF1$count,ACF1$endtime),var)
plot(count ~ endtime, data=ACF1, pch=16)
pause()
print("Poisson Regression - Example 8.3")
ACF.glm0 &lt;- glm(formula = count ~ endtime, family = poisson, data = ACF1)
summary(ACF.glm0)# Is there a quadratic effect?
pause()ACF.glm &lt;- glm(formula = count ~ endtime + I(endtime^2),
family = poisson, data = ACF1)
summary(ACF.glm)# But is the data really Poisson?If not, try quasipoisson:
pause()ACF.glm &lt;- glm(formula = count ~ endtime + I(endtime^2),
family = quasipoisson, data = ACF1)
summary(ACF.glm)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-74650.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-74650.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-acf1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-74650.json';</script>