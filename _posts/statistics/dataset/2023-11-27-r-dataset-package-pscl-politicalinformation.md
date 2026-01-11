---
title: R Dataset / Package pscl / politicalInformation
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">politicalInformation</span> data set which pertains to Interviewer ratings of respondent levels of political information. The <span class="mono">politicalInformation</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">politicalInformation</span> data set in R by issuing the following command at the console <span class="mono">data("politicalInformation")</span>. This will load the data into a variable called <span class="mono">politicalInformation</span>. If R says the <span class="mono">politicalInformation</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31480.csv">politicalInformation R data set</a></span>. The size of this file is about 104,140 bytes.</p><h2>Interviewer ratings of respondent levels of political information</h2>
<h3>Description</h3>
<p>Interviewers administering the 2000 American National Election Studies assigned an ordinal rating to each respondent's "general level of information" about politics and public affairs.</p>
<h3>Usage</h3>
<pre>data(politicalInformation)</pre>
<h3>Format</h3>
<p>A data frame with 1807 observations on the following 8 variables.</p>
<dl>
<dt><code>y</code></dt>
<dd>
<p>interviewer rating, a factor with levels <code>Very Low</code> <code>Fairly Low</code> <code>Average</code> <code>Fairly High</code> <code>Very High</code></p>
</dd>
<dt><code>collegeDegree</code></dt>
<dd>
<p>a factor with levels <code>No</code> <code>Yes</code></p>
</dd>
<dt><code>female</code></dt>
<dd>
<p>a factor with levels <code>No</code> <code>Yes</code></p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>a numeric vector, respondent age in years</p>
</dd>
<dt><code>homeOwn</code></dt>
<dd>
<p>a factor with levels <code>No</code> <code>Yes</code></p>
</dd>
<dt><code>govt</code></dt>
<dd>
<p>a factor with levels <code>No</code> <code>Yes</code></p>
</dd>
<dt><code>length</code></dt>
<dd>
<p>a numeric vector, length of ANES pre-election interview in minutes</p>
</dd>
<dt><code>id</code></dt>
<dd>
<p>a factor, unique identifier for each interviewer</p>
</dd>
</dl>
<h3>Details</h3>
<p>Seven respondents have missing data on the ordinal interviewer rating. The covariates <code>age</code> and <code>length</code> also have some missing data.</p>
<h3>Source</h3>
<p>The National Election Studies (<a href="http://www.electionstudies.org">www.electionstudies.org</a>). THE 2000 NATIONAL ELECTION STUDY [dataset]. Ann Arbor, MI: University of Michigan, Center for Political Studies [producer and distributor].</p>
<h3>References</h3>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey.</p>
<h3>Examples</h3>
<pre>
data(politicalInformation)table(politicalInformation$y,exclude=NULL)op &lt;- MASS::polr(y ~ collegeDegree + female + log(age) + homeOwn + govt + log(length),
 data=politicalInformation,
 Hess=TRUE,
 method="probit")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31480.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31480.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-politicalinformation.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31480.json';</script>