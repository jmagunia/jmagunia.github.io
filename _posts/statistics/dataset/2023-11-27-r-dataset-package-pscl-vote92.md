---
title: R Dataset / Package pscl / vote92
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">vote92</span> data set which pertains to Reports of voting in the 1992 U.S. Presidential election.. The <span class="mono">vote92</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">vote92</span> data set in R by issuing the following command at the console <span class="mono">data("vote92")</span>. This will load the data into a variable called <span class="mono">vote92</span>. If R says the <span class="mono">vote92</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-40127.csv">vote92 R data set</a></span>. The size of this file is about 36,852 bytes.</p><h2>Reports of voting in the 1992 U.S. Presidential election.</h2>
<h3>Description</h3>
<p>Survey data containing self-reports of vote choice in the 1992 U.S. Presidential election, with numerous covariates, from the 1992 American National Election Studies.</p>
<h3>Usage</h3>
<pre>data(vote92)</pre>
<h3>Format</h3>
<p>A data frame with 909 observations on the following 10 variables.</p>
<dl>
<dt><code>vote</code></dt>
<dd>
<p>a factor with levels <code>Perot</code> <code>Clinton</code> <code>Bush</code></p>
</dd>
<dt><code>dem</code></dt>
<dd>
<p>a numeric vector, 1 if the respondent reports identifying with the Democratic party, 0 otherwise.</p>
</dd>
<dt><code>rep</code></dt>
<dd>
<p>a numeric vector, 1 if the respondent reports identifying with the Republican party, 0 otherwise</p>
</dd>
<dt><code>female</code></dt>
<dd>
<p>a numeric vector, 1 if the respondent is female, 0 otherwise</p>
</dd>
<dt><code>persfinance</code></dt>
<dd>
<p>a numeric vector, -1 if the respondent reports that their personal financial situation has gotten worse over the last 12 months, 0 for no change, 1 if better</p>
</dd>
<dt><code>natlecon</code></dt>
<dd>
<p>a numeric vector, -1 if the respondent reports that national economic conditions have gotten worse over the last 12 months, 0 for no change, 1 if better</p>
</dd>
<dt><code>clintondis</code></dt>
<dd>
<p>a numeric vector, squared difference between respondent's self-placement on a scale measure of political ideology and the respondent's placement of the Democratic candidate, Bill Clinton</p>
</dd>
<dt><code>bushdis</code></dt>
<dd>
<p>a numeric vector, squared ideological distance of the respondent from the Republican candidate, President George H.W. Bush</p>
</dd>
<dt><code>perotdis</code></dt>
<dd>
<p>a numeric vector, squared ideological distance of the respondent from the Reform Party candidate, Ross Perot</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data are unweighted. Refer to the original data source for weights that purport to correct for non-representativeness and non-response.</p>
<h3>Source</h3>
<p>Alvarez, R. Michael and Jonathan Nagler. 1995. Economics, issues and the Perot candidacy: Voter choice in the 1992 Presidential election. <em>American Journal of Political Science</em>. 39:714-44.</p>
<p>Miller, Warren E., Donald R. Kinder, Steven J. Rosenstone and the National Election Studies. 1999. <em>National Election Studies, 1992: Pre-/Post-Election Study</em>. Center for Political Studies, University of Michigan: Ann Arbor, Michigan.</p>
<p>Inter-University Consortium for Political and Social Research. Study Number 1112. <a href="http://dx.doi.org/10.3886/ICPSR01112">http://dx.doi.org/10.3886/ICPSR01112</a>.</p>
<h3>References</h3>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey. Examples 8.7 and 8.8.</p>
<h3>Examples</h3>
<pre>
data(vote92)
summary(vote92)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-40127.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-40127.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-vote92.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-40127.json';</script>