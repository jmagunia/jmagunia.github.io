---
title: discoveries
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Yearly Numbers of Important Discoveries</h2>
<p>The numbers of “great” inventions and scientific discoveries in each year from 1860 to 1959.</p>
<h3>Usage</h3>
<pre>discoveries</pre>
<h3>Format</h3>
<p>A time series of 100 values.</p>
<h3>Source</h3>
<p>The World Almanac and Book of Facts, 1975 Edition, pages 315–318.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(graphics)
plot(discoveries, ylab = "Number of important discoveries",
 las = 1)
title(main = "discoveries data set")
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76536.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76536.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/discoveries.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76536.json';</script>