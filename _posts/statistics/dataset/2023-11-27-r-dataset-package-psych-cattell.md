---
title: R Dataset / Package psych / cattell
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cattell</span> data set which pertains to 12 cognitive variables from Cattell (1963) . The <span class="mono">cattell</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">cattell</span> data set in R by issuing the following command at the console <span class="mono">data("cattell")</span>. This will load the data into a variable called <span class="mono">cattell</span>. If R says the <span class="mono">cattell</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51993.csv">cattell R data set</a></span>. The size of this file is about 888 bytes.</p><h2>12 cognitive variables from Cattell (1963)</h2>
<h3>Description</h3>
<p>Rindskopf and Rose (1988) use this data set to demonstrate confirmatory second order factor models. It is a nice example data set to explore hierarchical structure and alternative factor solutions. It contains measures of fluid and crystallized intelligence.</p>
<h3>Usage</h3>
<pre>data("cattell")</pre>
<h3>Format</h3>
<p>The format is: num [1:12, 1:12] 1 0.86 0.3 0.32 0.41 0.42 0.34 0.32 0.29 0.21 ... - attr(*, "dimnames")=List of 2 ..$ : chr [1:12] "Verbal" "Verbal2" "Space1" "Space2" ... ..$ : chr [1:12] "Verbal" "Verbal2" "Space1" "Space2" ...</p>
<h3>Details</h3>
<p>Cattell (1963) reported on 8 cognitive variables from Thurstone and four from the Institute for Personality Assessment Test (IPAT). Rindskopf and Rose (1988) use this data set as an example of second order factor analysis. It is thus a nice set for examining alternative solutions such as bifactor rotation, <code>omega</code> hierarchical, as well as <code>esem</code> and <code>interbattery</code> factor analysis.</p>
<h3>Source</h3>
<p>David Rindskopf and Tedd Rose, (1988) Some Theory and Applications of Confirmatory Second- Order Factor Analysis, Multivariate Behavioral Research, 23, 51-67.</p>
<h3>References</h3>
<p>Cattell, R. B. (1963).Theory of fluid and crystallized intelligence: A critical experiment. Journal of Educational Psychology, 54, 1-22.</p>
<p>David Rindskopf and Tedd Rose, (1988) Some Theory and Applications of Confirmatory Second- Order Factor Analysis, Multivariate Behavioral Research, 23, 51-67.</p>
<h3>Examples</h3>
<pre>
data(cattell)
corPlot(cattell,numbers=TRUE,upper=FALSE,diag=FALSE,
 main="12 cognitive variables from Cattell (1963)")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51993.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51993.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-cattell.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51993.json';</script>