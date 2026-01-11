---
title: R Dataset / Package Zelig / homerun
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">homerun</span> data set which pertains to Sample Data on Home Runs Hit By Mark McGwire and Sammy Sosa in 1998.. The <span class="mono">homerun</span> data set is found in the <span class="mono">Zelig</span> R package. You can load the <span class="mono">homerun</span> data set in R by issuing the following command at the console <span class="mono">data("homerun")</span>. This will load the data into a variable called <span class="mono">homerun</span>. If R says the <span class="mono">homerun</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Zelig")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31749.csv">homerun R data set</a></span>. The size of this file is about 7,582 bytes.</p><h2>Sample Data on Home Runs Hit By Mark McGwire and Sammy Sosa in 1998.</h2>
<h3>Description</h3>
<p>Game-by-game information for the 1998 season for Mark McGwire and Sammy Sosa. Data are a subset of the dataset provided in Simonoff (1998).</p>
<h3>Usage</h3>
<pre>data(homerun)</pre>
<h3>Format</h3>
<p>A data frame containing 5 variables ("gameno", "month", "homeruns", "playerstatus", "player") and 326 observations.</p>
<dl>
<dt><code>gameno</code></dt>
<dd>
<p>an integer variable denoting the game number</p>
</dd>
<dt><code>month</code></dt>
<dd>
<p>a factor variable taking with levels "March" through "September" denoting the month of the game</p>
</dd>
<dt><code>homeruns</code></dt>
<dd>
<p>an integer vector denoting the number of homeruns hit in that game for that player</p>
</dd>
<dt><code>playerstatus</code></dt>
<dd>
<p>an integer vector equal to "0" if the player played in the game, and "1" if they did not.</p>
</dd>
<dt><code>player</code></dt>
<dd>
<p>an integer vector equal to "0" (McGwire) or "1" (Sosa)</p>
</dd>
</dl>
<h3>Source</h3>
<p><a href="https://ww2.amstat.org/publications/jse/v6n3/datasets.simonoff.html">https://ww2.amstat.org/publications/jse/v6n3/datasets.simonoff.html</a></p>
<h3>References</h3>
<p>Simonoff, Jeffrey S. 1998. “Move Over, Roger Maris: Breaking Baseball's Most Famous Record.” <em>Journal of Statistics Education</em> 6(3). Data used are a subset of the data in the article.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31749.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31749.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-homerun.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31749.json';</script>