---
title: R Dataset / Package datasets / USPersonalExpenditure
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USPersonalExpenditure</span> data set which pertains to Personal Expenditure Data. The <span class="mono">USPersonalExpenditure</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">USPersonalExpenditure</span> data set in R by issuing the following command at the console <span class="mono">data("USPersonalExpenditure")</span>. This will load the data into a variable called <span class="mono">USPersonalExpenditure</span>. If R says the <span class="mono">USPersonalExpenditure</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38111.csv">USPersonalExpenditure R data set</a></span>. The size of this file is about 242 bytes.</p><h2>Personal Expenditure Data</h2>
<h3>Description</h3>
<p>This data set consists of United States personal expenditures (in billions of dollars) in the categories; food and tobacco, household operation, medical and health, personal care, and private education for the years 1940, 1945, 1950, 1955 and 1960.</p>
<h3>Usage</h3>
<pre>USPersonalExpenditure</pre>
<h3>Format</h3>
<p>A matrix with 5 rows and 5 columns.</p>
<h3>Source</h3>
<p>The World Almanac and Book of Facts, 1962, page 756.</p>
<h3>References</h3>
<p>Tukey, J. W. (1977) <em>Exploratory Data Analysis</em>. Addison-Wesley.</p>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats) # for medpolish
USPersonalExpenditure
medpolish(log10(USPersonalExpenditure))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38111.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38111.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-uspersonalexpenditure.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38111.json';</script>