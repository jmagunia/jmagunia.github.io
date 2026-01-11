---
title: R Dataset / Package psych / sat.act
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sat.act</span> data set which pertains to 3 Measures of ability: SATV, SATQ, ACT. The <span class="mono">sat.act</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">sat.act</span> data set in R by issuing the following command at the console <span class="mono">data("sat.act")</span>. This will load the data into a variable called <span class="mono">sat.act</span>. If R says the <span class="mono">sat.act</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-44943.csv">sat.act R data set</a></span>. The size of this file is about 12,633 bytes.</p><h2>3 Measures of ability: SATV, SATQ, ACT</h2>
<h3>Description</h3>
<p>Self reported scores on the SAT Verbal, SAT Quantitative and ACT were collected as part of the Synthetic Aperture Personality Assessment (SAPA) web based personality assessment project. Age, gender, and education are also reported. The data from 700 subjects are included here as a demonstration set for correlation and analysis.</p>
<h3>Usage</h3>
<pre>data(sat.act)</pre>
<h3>Format</h3>
<p>A data frame with 700 observations on the following 6 variables.</p>
<dl>
<dt><code>gender</code></dt>
<dd>
<p>males = 1, females = 2</p>
</dd>
<dt><code>education</code></dt>
<dd>
<p>self reported education 1 = high school ... 5 = graduate work</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age</p>
</dd>
<dt><code>ACT</code></dt>
<dd>
<p>ACT composite scores may range from 1 - 36. National norms have a mean of 20.</p>
</dd>
<dt><code>SATV</code></dt>
<dd>
<p>SAT Verbal scores may range from 200 - 800.</p>
</dd>
<dt><code>SATQ</code></dt>
<dd>
<p>SAT Quantitative scores may range from 200 - 800</p>
</dd>
</dl>
<h3>Details</h3>
<p>hese items were collected as part of the SAPA project (<a href="http://sapa-project.org">http://sapa-project.org</a>)to develop online measures of ability (Revelle, Wilt and Rosenthal, 2009). The score means are higher than national norms suggesting both self selection for people taking on line personality and ability tests and a self reporting bias in scores.</p>
<p>See also the iq.items data set.</p>
<h3>Source</h3>
<p><a href="http://personality-project.org">http://personality-project.org</a></p>
<h3>References</h3>
<p>Revelle, William, Wilt, Joshua, and Rosenthal, Allen (2009) Personality and Cognition: The Personality-Cognition Link. In Gruszka, Alexandra and Matthews, Gerald and Szymura, Blazej (Eds.) Handbook of Individual Differences in Cognition: Attention, Memory and Executive Control, Springer.</p>
<h3>Examples</h3>
<pre>
data(sat.act)
describe(sat.act)
pairs.panels(sat.act)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-44943.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-44943.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-satact.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-44943.json';</script>