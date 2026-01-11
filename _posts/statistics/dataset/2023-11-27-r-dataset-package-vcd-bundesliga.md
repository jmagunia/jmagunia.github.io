---
title: R Dataset / Package vcd / Bundesliga
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Bundesliga</span> data set which pertains to Ergebnisse der Fussball-Bundesliga. The <span class="mono">Bundesliga</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Bundesliga</span> data set in R by issuing the following command at the console <span class="mono">data("Bundesliga")</span>. This will load the data into a variable called <span class="mono">Bundesliga</span>. If R says the <span class="mono">Bundesliga</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10770.csv">Bundesliga R data set</a></span>. The size of this file is about 954,841 bytes.</p><h2>Ergebnisse der Fussball-Bundesliga</h2>
<h3>Description</h3>
<p>Results from the first German soccer league (1963-2008).</p>
<h3>Usage</h3>
<pre>
data("Bundesliga")
</pre>
<h3>Format</h3>
<p>A data frame with 14018 observations and 7 variables.</p>
<dl>
<dt>HomeTeam</dt>
<dd>
<p>factor. Name of the home team.</p>
</dd>
<dt>AwayTeam</dt>
<dd>
<p>factor. Name of the away team.</p>
</dd>
<dt>HomeGoals</dt>
<dd>
<p>number of goals scored by the home team.</p>
</dd>
<dt>AwayGoals</dt>
<dd>
<p>number of goals scored by the away team.</p>
</dd>
<dt>Round</dt>
<dd>
<p>round of the game.</p>
</dd>
<dt>Year</dt>
<dd>
<p>year in which the season started.</p>
</dd>
<dt>Date</dt>
<dd>
<p>starting time of the game (in <code>"POSIXct"</code> format).</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data comprises all games in the first German soccer league since its foundation in 1963. The data have been queried online from the official Web page of the DFB and prepared as a data frame in R by Daniel Dekic, Torsten Hothorn, and Achim Zeileis (replacing earlier versions of the data in the package containing only subsets of years).</p>
<p>Each year/season comprises 34 rounds (except 1963, 1964, 1991) so that all 18 teams play twice against each other (switching home court advantage). In 1963/64, there were only 16 teams, hence only 30 rounds. In 1991, after the German unification, there was one season with 20 teams and 38 rounds.</p>
<h3>Source</h3>
<p>Homepage of the Deutscher Fussball-Bund (DFB, German Football Association): <a href="http://www.dfb.de/">http://www.dfb.de/</a></p>
<h3>References</h3>
<p>Leonhard Knorr-Held (1999), Dynamic rating of sports teams. SFB 386 “Statistical Analysis of Discrete Structures”, Discussion paper <b>98</b>.</p>
<h3>See Also</h3>
<p><code>UKSoccer</code></p>
<h3>Examples</h3>
<pre>
data("Bundesliga")## number of goals per game poisson distributed?
ngoals1 &lt;- xtabs(~ HomeGoals, data = Bundesliga, subset = Year == 1995)
ngoals2 &lt;- xtabs(~ AwayGoals, data = Bundesliga, subset = Year == 1995)
ngoals3 &lt;- table(apply(subset(Bundesliga, Year == 1995)[,3:4], 1, sum))gf1 &lt;- goodfit(ngoals1)
gf2 &lt;- goodfit(ngoals2)
gf3 &lt;- goodfit(ngoals3)summary(gf1)
summary(gf2)
summary(gf3)
plot(gf1)
plot(gf2)
plot(gf3)Ord_plot(ngoals1)
distplot(ngoals1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10770.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10770.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-bundesliga.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10770.json';</script>