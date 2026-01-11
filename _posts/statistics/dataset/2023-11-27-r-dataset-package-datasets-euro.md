---
title: R Dataset / Package datasets / euro
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">euro</span> data set which pertains to Conversion Rates of Euro Currencies. The <span class="mono">euro</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">euro</span> data set in R by issuing the following command at the console <span class="mono">data("euro")</span>. This will load the data into a variable called <span class="mono">euro</span>. If R says the <span class="mono">euro</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22612.csv">euro R data set</a></span>. The size of this file is about 137 bytes.</p><h2>Conversion Rates of Euro Currencies</h2>
<h3>Description</h3>
<p>Conversion rates between the various Euro currencies.</p>
<h3>Usage</h3>
<pre>
euro
euro.cross
</pre>
<h3>Format</h3>
<p><code>euro</code> is a named vector of length 11, <code>euro.cross</code> a matrix of size 11 by 11, with dimnames.</p>
<h3>Details</h3>
<p>The data set <code>euro</code> contains the value of 1 Euro in all currencies participating in the European monetary union (Austrian Schilling ATS, Belgian Franc BEF, German Mark DEM, Spanish Peseta ESP, Finnish Markka FIM, French Franc FRF, Irish Punt IEP, Italian Lira ITL, Luxembourg Franc LUF, Dutch Guilder NLG and Portuguese Escudo PTE). These conversion rates were fixed by the European Union on December 31, 1998. To convert old prices to Euro prices, divide by the respective rate and round to 2 digits.</p>
<p>The data set <code>euro.cross</code> contains conversion rates between the various Euro currencies, i.e., the result of <code>outer(1 / euro, euro)</code>.</p>
<h3>Examples</h3>
<pre>
cbind(euro)## These relations hold:
euro == signif(euro, 6) # [6 digit precision in Euro's definition]
all(euro.cross == outer(1/euro, euro))## Convert 20 Euro to Belgian Franc
20 * euro["BEF"]
## Convert 20 Austrian Schilling to Euro
20 / euro["ATS"]
## Convert 20 Spanish Pesetas to Italian Lira
20 * euro.cross["ESP", "ITL"]require(graphics)
dotchart(euro,
 main = "euro data: 1 Euro in currency unit")
dotchart(1/euro,
 main = "euro data: 1 currency unit in Euros")
dotchart(log(euro, 10),
 main = "euro data: log10(1 Euro in currency unit)")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22612.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22612.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-euro.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22612.json';</script>