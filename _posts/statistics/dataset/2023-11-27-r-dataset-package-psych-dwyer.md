---
title: R Dataset / Package psych / Dwyer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Dwyer</span> data set which pertains to 8 cognitive variables used by Dwyer for an example.. The <span class="mono">Dwyer</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Dwyer</span> data set in R by issuing the following command at the console <span class="mono">data("Dwyer")</span>. This will load the data into a variable called <span class="mono">Dwyer</span>. If R says the <span class="mono">Dwyer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-13712.csv">Dwyer R data set</a></span>. The size of this file is about 366 bytes.</p><h2>8 cognitive variables used by Dwyer for an example.</h2>
<h3>Description</h3>
<p>Dwyer (1937) introduced a technique for factor extension and used 8 cognitive variables from Thurstone. This is the example data set used in his paper.</p>
<h3>Usage</h3>
<pre>data(Dwyer)</pre>
<h3>Format</h3>
<p>The format is: num [1:8, 1:8] 1 0.58 -0.28 0.01 0.36 0.38 0.61 0.15 0.58 1 ... - attr(*, "dimnames")=List of 2 ..$ : chr [1:8] "V1" "V2" "V3" "V4" ... ..$ : chr [1:8] "V1" "V2" "V3" "V4" ...</p>
<h3>Source</h3>
<p>Data matrix retyped from the original publication.</p>
<h3>References</h3>
<p>Dwyer, Paul S. (1937), The determination of the factor loadings of a given test from the known factor loadings of other tests. Psychometrika, 3, 173-178</p>
<h3>Examples</h3>
<pre>
data(Dwyer)
Ro &lt;- Dwyer[1:7,1:7]
Roe &lt;- Dwyer[1:7,8]
fo &lt;- fa(Ro,2,rotate="none")
fa.extension(Roe,fo)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-13712.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-13712.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-dwyer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-13712.json';</script>