---
title: R Dataset / Package DAAG / fruitohms
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fruitohms</span> data set which pertains to Electrical Resistance of Kiwi Fruit. The <span class="mono">fruitohms</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">fruitohms</span> data set in R by issuing the following command at the console <span class="mono">data("fruitohms")</span>. This will load the data into a variable called <span class="mono">fruitohms</span>. If R says the <span class="mono">fruitohms</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-12140.csv">fruitohms R data set</a></span>. The size of this file is about 1,170 bytes.</p><h2>Electrical Resistance of Kiwi Fruit</h2>
<h3>Description</h3>
<p>Data are from a study that examined how the electrical resistance of a slab of kiwifruit changed with the apparent juice content.</p>
<h3>Usage</h3>
<pre>fruitohms</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>juice</dt>
<dd>
<p>apparent juice content (percent)</p>
</dd>
<dt>ohms</dt>
<dd>
<p>electrical resistance (in ohms)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Harker, F. R. and Maindonald J.H. 1994. Ripening of nectarine fruit. <em>Plant Physiology</em> 106: 165 - 171.</p>
<h3>Examples</h3>
<pre>
plot(ohms ~ juice, xlab="Apparent juice content (%)",ylab="Resistance (ohms)", data=fruitohms)
lines(lowess(fruitohms$juice, fruitohms$ohms), lwd=2)
pause()require(splines)
attach(fruitohms)
plot(ohms ~ juice, cex=0.8, xlab="Apparent juice content (%)",
 ylab="Resistance (ohms)", type="n")
fruit.lmb4 &lt;- lm(ohms ~ bs(juice,4))
ord &lt;- order(juice)
lines(juice[ord], fitted(fruit.lmb4)[ord], lwd=2)
ci &lt;- predict(fruit.lmb4, interval="confidence")
lines(juice[ord], ci[ord,"lwr"])
lines(juice[ord], ci[ord,"upr"])
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-12140.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-12140.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-fruitohms.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-12140.json';</script>