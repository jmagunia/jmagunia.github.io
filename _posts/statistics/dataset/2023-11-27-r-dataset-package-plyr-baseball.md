---
title: R Dataset / Package plyr / baseball
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">baseball</span> data set which pertains to Yearly batting records for all major league baseball players. The <span class="mono">baseball</span> data set is found in the <span class="mono">plyr</span> R package. You can load the <span class="mono">baseball</span> data set in R by issuing the following command at the console <span class="mono">data("baseball")</span>. This will load the data into a variable called <span class="mono">baseball</span>. If R says the <span class="mono">baseball</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plyr")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-89446.csv">baseball R data set</a></span>. The size of this file is about 1,569,282 bytes.</p><h2>Yearly batting records for all major league baseball players</h2>
<h3>Description</h3>
<p>This data frame contains batting statistics for a subset of players collected from <a href="http://www.baseball-databank.org/">http://www.baseball-databank.org/</a>. There are a total of 21,699 records, covering 1,228 players from 1871 to 2007. Only players with more 15 seasons of play are included.</p>
<h3>Usage</h3>
<pre>
baseball
</pre>
<h3>Format</h3>
<p>A 21699 x 22 data frame</p>
<h3>Variables</h3>
<p>Variables:</p>
<ul>
<li>
<p>id, unique player id</p>
</li>
<li>
<p>year, year of data</p>
</li>
<li>
<p>stint</p>
</li>
<li>
<p>team, team played for</p>
</li>
<li>
<p>lg, league</p>
</li>
<li>
<p>g, number of games</p>
</li>
<li>
<p>ab, number of times at bat</p>
</li>
<li>
<p>r, number of runs</p>
</li>
<li>
<p>h, hits, times reached base because of a batted, fair ball without error by the defense</p>
</li>
<li>
<p>X2b, hits on which the batter reached second base safely</p>
</li>
<li>
<p>X3b, hits on which the batter reached third base safely</p>
</li>
<li>
<p>hr, number of home runs</p>
</li>
<li>
<p>rbi, runs batted in</p>
</li>
<li>
<p>sb, stolen bases</p>
</li>
<li>
<p>cs, caught stealing</p>
</li>
<li>
<p>bb, base on balls (walk)</p>
</li>
<li>
<p>so, strike outs</p>
</li>
<li>
<p>ibb, intentional base on balls</p>
</li>
<li>
<p>hbp, hits by pitch</p>
</li>
<li>
<p>sh, sacrifice hits</p>
</li>
<li>
<p>sf, sacrifice flies</p>
</li>
<li>
<p>gidp, ground into double play</p>
</li>
</ul>
<h3>References</h3>
<p><a href="http://www.baseball-databank.org/">http://www.baseball-databank.org/</a></p>
<h3>Examples</h3>
<pre>
baberuth &lt;- subset(baseball, id == "ruthba01")
baberuth$cyear &lt;- baberuth$year - min(baberuth$year) + 1calculate_cyear &lt;- function(df) {
mutate(df,
cyear = year - min(year),
cpercent = cyear / (max(year) - min(year))
)
}baseball &lt;- ddply(baseball, .(id), calculate_cyear)
baseball &lt;- subset(baseball, ab &gt;= 25)model &lt;- function(df) {
lm(rbi / ab ~ cyear, data=df)
}
model(baberuth)
models &lt;- dlply(baseball, .(id), model)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-89446.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-89446.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plyr-baseball.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-89446.json';</script>