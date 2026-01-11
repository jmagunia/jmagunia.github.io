---
title: R Dataset / Package ISLR / Hitters
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Hitters</span> data set which pertains to Baseball Data. The <span class="mono">Hitters</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Hitters</span> data set in R by issuing the following command at the console <span class="mono">data("Hitters")</span>. This will load the data into a variable called <span class="mono">Hitters</span>. If R says the <span class="mono">Hitters</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-87300.csv">Hitters R data set</a></span>. The size of this file is about 27,040 bytes.</p><h2>Baseball Data</h2>
<h3>Description</h3>
<p>Major League Baseball Data from the 1986 and 1987 seasons.</p>
<h3>Usage</h3>
<pre>Hitters</pre>
<h3>Format</h3>
<p>A data frame with 322 observations of major league players on the following 20 variables.</p>
<dl>
<dt><code>AtBat</code></dt>
<dd>
<p>Number of times at bat in 1986</p>
</dd>
<dt><code>Hits</code></dt>
<dd>
<p>Number of hits in 1986</p>
</dd>
<dt><code>HmRun</code></dt>
<dd>
<p>Number of home runs in 1986</p>
</dd>
<dt><code>Runs</code></dt>
<dd>
<p>Number of runs in 1986</p>
</dd>
<dt><code>RBI</code></dt>
<dd>
<p>Number of runs batted in in 1986</p>
</dd>
<dt><code>Walks</code></dt>
<dd>
<p>Number of walks in 1986</p>
</dd>
<dt><code>Years</code></dt>
<dd>
<p>Number of years in the major leagues</p>
</dd>
<dt><code>CAtBat</code></dt>
<dd>
<p>Number of times at bat during his career</p>
</dd>
<dt><code>CHits</code></dt>
<dd>
<p>Number of hits during his career</p>
</dd>
<dt><code>CHmRun</code></dt>
<dd>
<p>Number of home runs during his career</p>
</dd>
<dt><code>CRuns</code></dt>
<dd>
<p>Number of runs during his career</p>
</dd>
<dt><code>CRBI</code></dt>
<dd>
<p>Number of runs batted in during his career</p>
</dd>
<dt><code>CWalks</code></dt>
<dd>
<p>Number of walks during his career</p>
</dd>
<dt><code>League</code></dt>
<dd>
<p>A factor with levels <code>A</code> and <code>N</code> indicating player's league at the end of 1986</p>
</dd>
<dt><code>Division</code></dt>
<dd>
<p>A factor with levels <code>E</code> and <code>W</code> indicating player's division at the end of 1986</p>
</dd>
<dt><code>PutOuts</code></dt>
<dd>
<p>Number of put outs in 1986</p>
</dd>
<dt><code>Assists</code></dt>
<dd>
<p>Number of assists in 1986</p>
</dd>
<dt><code>Errors</code></dt>
<dd>
<p>Number of errors in 1986</p>
</dd>
<dt><code>Salary</code></dt>
<dd>
<p>1987 annual salary on opening day in thousands of dollars</p>
</dd>
<dt><code>NewLeague</code></dt>
<dd>
<p>A factor with levels <code>A</code> and <code>N</code> indicating player's league at the beginning of 1987</p>
</dd>
</dl>
<h3>Source</h3>
<p>This dataset was taken from the StatLib library which is maintained at Carnegie Mellon University. This is part of the data that was used in the 1988 ASA Graphics Section Poster Session. The salary data were originally from Sports Illustrated, April 20, 1987. The 1986 and career statistics were obtained from The 1987 Baseball Encyclopedia Update published by Collier Books, Macmillan Publishing Company, New York.</p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Hitters)
lm(Salary~AtBat+Hits,data=Hitters)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-87300.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-87300.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-hitters.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-87300.json';</script>
