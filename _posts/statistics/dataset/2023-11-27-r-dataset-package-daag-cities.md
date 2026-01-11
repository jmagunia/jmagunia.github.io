---
title: R Dataset / Package DAAG / cities
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cities</span> data set which pertains to Populations of Major Canadian Cities (1992-96). The <span class="mono">cities</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cities</span> data set in R by issuing the following command at the console <span class="mono">data("cities")</span>. This will load the data into a variable called <span class="mono">cities</span>. If R says the <span class="mono">cities</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-95374.csv">cities R data set</a></span>. The size of this file is about 638 bytes.</p><h2>Populations of Major Canadian Cities (1992-96)</h2>
<h3>Description</h3>
<p>Population estimates for several Canadian cities.</p>
<h3>Usage</h3>
<pre>cities</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>CITY</dt>
<dd>
<p>a factor, consisting of the city names</p>
</dd>
<dt>REGION</dt>
<dd>
<p>a factor with 5 levels (ATL=Atlantic, ON=Ontario, QC=Quebec, PR=Prairies, WEST=Alberta and British Columbia) representing the location of the cities</p>
</dd>
<dt>POP1992</dt>
<dd>
<p>a numeric vector giving population in 1000's for 1992</p>
</dd>
<dt>POP1993</dt>
<dd>
<p>a numeric vector giving population in 1000's for 1993</p>
</dd>
<dt>POP1994</dt>
<dd>
<p>a numeric vector giving population in 1000's for 1994</p>
</dd>
<dt>POP1995</dt>
<dd>
<p>a numeric vector giving population in 1000's for 1995</p>
</dd>
<dt>POP1996</dt>
<dd>
<p>a numeric vector giving population in 1000's for 1996</p>
</dd>
</dl>
<h3>Source</h3>
<p>Statistics Canada</p>
<h3>Examples</h3>
<pre>
cities$have &lt;- factor((cities$REGION=="ON")|(cities$REGION=="WEST"))
plot(POP1996~POP1992, data=cities, col=as.integer(cities$have))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-95374.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-95374.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cities.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-95374.json';</script>