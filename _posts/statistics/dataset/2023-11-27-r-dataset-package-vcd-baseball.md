---
title: R Dataset / Package vcd / Baseball
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Baseball</span> data set which pertains to Baseball Data. The <span class="mono">Baseball</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Baseball</span> data set in R by issuing the following command at the console <span class="mono">data("Baseball")</span>. This will load the data into a variable called <span class="mono">Baseball</span>. If R says the <span class="mono">Baseball</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16002.csv">Baseball R data set</a></span>. The size of this file is about 33,338 bytes.</p><h2>Baseball Data</h2>
<h3>Description</h3>
<p>Baseball data.</p>
<h3>Usage</h3>
<pre>
data("Baseball")
</pre>
<h3>Format</h3>
<p>A data frame with 322 observations and 25 variables.</p>
<dl>
<dt>name1</dt>
<dd>
<p>player's first name.</p>
</dd>
<dt>name2</dt>
<dd>
<p>player's last name.</p>
</dd>
<dt>atbat86</dt>
<dd>
<p>times at Bat: number of official plate appearances by a hitter. It counts as an official at-bat as long as the batter does not walk, sacrifice, get hit by a pitch or reach base due to catcher's interference.</p>
</dd>
<dt>hits86</dt>
<dd>
<p>hits.</p>
</dd>
<dt>homer86</dt>
<dd>
<p>home runs.</p>
</dd>
<dt>runs86</dt>
<dd>
<p>the number of runs scored by a player. A run is scored by an offensive player who advances from batter to runner and touches first, second, third and home base in that order without being put out.</p>
</dd>
<dt>rbi86</dt>
<dd>
<p>Runs Batted In: A hitter earns a run batted in when he drives in a run via a hit, walk, sacrifice (bunt or fly) fielder's choice, hit-batsman or on an error (when the official scorer rules that the run would have scored anyway).</p>
</dd>
<dt>walks86</dt>
<dd>
<p>A “walk” (or “base on balls”) is an award of first base granted to a batter who receives four pitches outside the strike zone.</p>
</dd>
<dt>years</dt>
<dd>
<p>Years in the Major Leagues. Seems to count all years a player has actually played in the Major Leagues, not necessarily consecutive.</p>
</dd>
<dt>atbat</dt>
<dd>
<p>career times at bat.</p>
</dd>
<dt>hits</dt>
<dd>
<p>career hits.</p>
</dd>
<dt>homeruns</dt>
<dd>
<p>career home runs.</p>
</dd>
<dt>runs</dt>
<dd>
<p>career runs.</p>
</dd>
<dt>rbi</dt>
<dd>
<p>career runs batted in.</p>
</dd>
<dt>walks</dt>
<dd>
<p>career walks.</p>
</dd>
<dt>league86</dt>
<dd>
<p>player's league.</p>
</dd>
<dt>div86</dt>
<dd>
<p>player's division.</p>
</dd>
<dt>team86</dt>
<dd>
<p>player's team.</p>
</dd>
<dt>posit86</dt>
<dd>
<p>player's position (see <code>Hitters</code>).</p>
</dd>
<dt>outs86</dt>
<dd>
<p>number of putouts (see <code>Hitters</code>)</p>
</dd>
<dt>assist86</dt>
<dd>
<p>number of assists (see <code>Hitters</code>)</p>
</dd>
<dt>error86</dt>
<dd>
<p>number of assists (see <code>Hitters</code>)</p>
</dd>
<dt>sal87</dt>
<dd>
<p>annual salary on opening day (in USD 1000).</p>
</dd>
<dt>league87</dt>
<dd>
<p>league in 1987.</p>
</dd>
<dt>team87</dt>
<dd>
<p>team in 1987.</p>
</dd>
</dl>
<h3>Source</h3>
<p>SAS System for Statistical Graphics, First Edition, page A2.3</p>
<h3>References</h3>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>See Also</h3>
<p><code>Hitters</code></p>
<h3>Examples</h3>
<pre>
data("Baseball")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16002.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16002.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-baseball.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16002.json';</script>