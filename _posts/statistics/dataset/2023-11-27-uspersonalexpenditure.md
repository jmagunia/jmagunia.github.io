---
title: USPersonalExpenditure
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Personal Expenditure Data</h2>
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
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31436.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31436.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/uspersonalexpenditure.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31436.json';</script>