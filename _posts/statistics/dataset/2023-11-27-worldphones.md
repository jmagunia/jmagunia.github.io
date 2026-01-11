---
title: WorldPhones
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>The World's Telephones</h2>
<p>The number of telephones in various regions of the world (in thousands).</p>
<h3>Usage</h3>
<pre>WorldPhones</pre>
<h3>Format</h3>
<p>A matrix with 7 rows and 8 columns. The columns of the matrix give the figures for a given region, and the rows the figures for a year.</p>
<p>The regions are: North America, Europe, Asia, South America, Oceania, Africa, Central America.</p>
<p>The years are: 1951, 1956, 1957, 1958, 1959, 1960, 1961.</p>
<h3>Source</h3>
<p>AT&amp;T (1961) <em>The World's Telephones</em>.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. New York: Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
matplot(rownames(WorldPhones), WorldPhones, type = "b", log = "y",
xlab = "Year", ylab = "Number of telephones (1000's)")
legend(1951.5, 80000, colnames(WorldPhones), col = 1:6, lty = 1:5,
 pch = rep(21, 7))
title(main = "World phones data: log scale for response")
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66895.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66895.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/worldphones.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66895.json';</script>