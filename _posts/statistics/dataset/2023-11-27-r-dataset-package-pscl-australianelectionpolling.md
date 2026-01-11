---
title: R Dataset / Package pscl / AustralianElectionPolling
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">AustralianElectionPolling</span> data set which pertains to Political opinion polls in Australia, 2004-07. The <span class="mono">AustralianElectionPolling</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">AustralianElectionPolling</span> data set in R by issuing the following command at the console <span class="mono">data("AustralianElectionPolling")</span>. This will load the data into a variable called <span class="mono">AustralianElectionPolling</span>. If R says the <span class="mono">AustralianElectionPolling</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52465.csv">AustralianElectionPolling R data set</a></span>. The size of this file is about 26,888 bytes.</p><h2>Political opinion polls in Australia, 2004-07</h2>
<h3>Description</h3>
<p>The results of 239 published opinion polls measuring vote intentions (1st preference vote intention in a House of Representatives election) between the 2004 and 2007 Australian Federal elections, from 4 survey houses.</p>
<h3>Usage</h3>
<pre>data(AustralianElectionPolling)</pre>
<h3>Format</h3>
<p>A data frame with 239 observations on the following 14 variables.</p>
<dl>
<dt><code>ALP</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the Australian Labor Party</p>
</dd>
<dt><code>Lib</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the Liberal Party</p>
</dd>
<dt><code>Nat</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the National Party</p>
</dd>
<dt><code>Green</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the Greens</p>
</dd>
<dt><code>FamilyFirst</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the Family First party</p>
</dd>
<dt><code>Dems</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for the Australian Democrats</p>
</dd>
<dt><code>OneNation</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as intending to vote for One Nation</p>
</dd>
<dt><code>DK</code></dt>
<dd>
<p>a numeric vector, percentage of respondents reported as expressing no preference or a “don't know” response</p>
</dd>
<dt><code>sampleSize</code></dt>
<dd>
<p>a numeric vector, reported sample size of the poll</p>
</dd>
<dt><code>org</code></dt>
<dd>
<p>a factor with levels <code>Galaxy</code>, <code>Morgan, F2F</code>, <code>Newspoll</code>, <code>Nielsen</code> and <code>Morgan, Phone</code>, indicating the survey house and/or mode of the poll</p>
</dd>
<dt><code>startDate</code></dt>
<dd>
<p>a Date, reported start of the field period</p>
</dd>
<dt><code>endDate</code></dt>
<dd>
<p>a Date, reported end of the field period</p>
</dd>
<dt><code>source</code></dt>
<dd>
<p>a character vector, source of the poll report</p>
</dd>
<dt><code>remark</code></dt>
<dd>
<p>a character vector, remarks noted by author and/or research assistant coders</p>
</dd>
</dl>
<h3>Details</h3>
<p>Morgan uses two modes: phone and face-to-face.</p>
<p>The 2004 Australian election was on October 9; the ALP won 37.6% of the 1st preferences cast in elections for the House of Representatives. The ALP won the 2007 election (November 24) with 43.4% of 1st preferences.</p>
<p>The ALP changed leaders twice in the 2004-07 inter-election period spanned by these data: (1) Mark Latham resigned the ALP leadership on January 18 2005 and was replaced by Kim Beazley; (2) Beazley lost the ALP leadership to Kevin Rudd on December 4, 2006.</p>
<p>The then Prime Minister, John Howard, announced the November 2007 election on October 14, 2007.</p>
<h3>Source</h3>
<p>See the <code>source</code> variable. Andrea Abel assisted with the data collection.</p>
<h3>References</h3>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey. Example 9.3.</p>
<h3>Examples</h3>
<pre>
data(AustralianElectionPolling)
lattice::xyplot(ALP ~ startDate | org, 
 data=AustralianElectionPolling,
 layout=c(1,5),
 type="b",
 xlab="Start Date",
 ylab="ALP")## test for house effects
y &lt;- AustralianElectionPolling$ALP/100
v &lt;- y*(1-y)/AustralianElectionPolling$sampleSize
w &lt;- 1/v
m1 &lt;- mgcv::gam(y ~ s(as.numeric(startDate)),
weight=w, 
data=AustralianElectionPolling)
m2 &lt;- update(m1, ~ . + org)
anova(m1,m2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52465.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52465.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-australianelectionpolling.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52465.json';</script>