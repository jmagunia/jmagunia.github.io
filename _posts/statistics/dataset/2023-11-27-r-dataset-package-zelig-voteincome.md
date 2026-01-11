---
title: R Dataset / Package Zelig / voteincome
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">voteincome</span> data set which pertains to Sample Turnout and Demographic Data from the 2000 Current Population Survey. The <span class="mono">voteincome</span> data set is found in the <span class="mono">Zelig</span> R package. You can load the <span class="mono">voteincome</span> data set in R by issuing the following command at the console <span class="mono">data("voteincome")</span>. This will load the data into a variable called <span class="mono">voteincome</span>. If R says the <span class="mono">voteincome</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Zelig")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-43963.csv">voteincome R data set</a></span>. The size of this file is about 32,682 bytes.</p><h2>Sample Turnout and Demographic Data from the 2000 Current Population Survey</h2>
<h3>Description</h3>
<p>This data set contains turnout and demographic data from a sample of respondents to the 2000 Current Population Survey (CPS). The states represented are South Carolina and Arkansas. The data represent only a sample and results from this example should not be used in publication.</p>
<h3>Usage</h3>
<pre>data(voteincome)</pre>
<h3>Format</h3>
<p>A data frame containing 7 variables ("state", "year", "vote", "income", "education", "age", "female") and 1500 observations.</p>
<dl>
<dt><code>state</code></dt>
<dd>
<p>a factor variable with levels equal to "AR" (Arkansas) and "SC" (South Carolina)</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>an integer vector</p>
</dd>
<dt><code>vote</code></dt>
<dd>
<p>an integer vector taking on values "1" (Voted) and "0" (Did Not Vote)</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>an integer vector ranging from "4" (Less than \$5000) to "17" (Greater than \$75000) denoting family income. See the CPS codebook for more information on variable coding</p>
</dd>
<dt><code>education</code></dt>
<dd>
<p>an integer vector ranging from "1" (Less than High School Education) to "4" (More than a College Education). See the CPS codebook for more information on variable coding</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>an integer vector ranging from "18" to "85"</p>
</dd>
<dt><code>female</code></dt>
<dd>
<p>an integer vector taking on values "1" (Female) and "0" (Male)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Census Bureau Current Population Survey</p>
<h3>References</h3>
<p><a href="http://www.census.gov/cps">http://www.census.gov/cps</a></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-43963.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-43963.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-voteincome.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-43963.json';</script>