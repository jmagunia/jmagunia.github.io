---
title: R Dataset / Package psych / Gorsuch
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Gorsuch</span> data set which pertains to Example data set from Gorsuch (1997) for an example factor extension.. The <span class="mono">Gorsuch</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Gorsuch</span> data set in R by issuing the following command at the console <span class="mono">data("Gorsuch")</span>. This will load the data into a variable called <span class="mono">Gorsuch</span>. If R says the <span class="mono">Gorsuch</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85438.csv">Gorsuch R data set</a></span>. The size of this file is about 638 bytes.</p><h2>Example data set from Gorsuch (1997) for an example factor extension.</h2>
<h3>Description</h3>
<p>Gorsuch (1997) suggests an alternative to the classic Dwyer (1937) factor extension technique. This data set is taken from that article. Useful for comparing <code>link{fa.extension}</code> with and without the correct=TRUE option.</p>
<h3>Usage</h3>
<pre>data(Gorsuch)</pre>
<h3>Details</h3>
<p>Gorsuc (1997) suggested an alternative model for factor extension. His method is appropriate for the case of repeated variables. This is handled in <code>link{fa.extension}</code> with correct=FALSE</p>
<h3>Source</h3>
<p>Richard L. Gorsuch (1997) New Procedure for Extension Analysis in Exploratory Factor Analysis. Educational and Psychological Measurement, 57, 725-740.</p>
<h3>References</h3>
<p>Dwyer, Paul S. (1937), The determination of the factor loadings of a given test from the known factor loadings of other tests. Psychometrika, 3, 173-178</p>
<h3>Examples</h3>
<pre>
data(Gorsuch)Ro &lt;- Gorsuch[1:6,1:6]
Roe &lt;- Gorsuch[1:6,7:10]
fo &lt;- fa(Ro,2,rotate="none")
fa.extension(Roe,fo,correct=FALSE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85438.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85438.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-gorsuch.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85438.json';</script>