---
title: R Dataset / Package mosaicData / CPS85
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CPS85</span> data set which pertains to Data from the 1985 Current Population Survey (CPS85). The <span class="mono">CPS85</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">CPS85</span> data set in R by issuing the following command at the console <span class="mono">data("CPS85")</span>. This will load the data into a variable called <span class="mono">CPS85</span>. If R says the <span class="mono">CPS85</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47090.csv">CPS85 R data set</a></span>. The size of this file is about 29,770 bytes.</p><h2>Data from the 1985 Current Population Survey (CPS85)</h2>
<h3>Description</h3>
<p>The Current Population Survey (CPS) is used to supplement census information between census years. These data consist of a random sample of persons from the CPS85, with information on wages and other characteristics of the workers, including sex, number of years of education, years of work experience, occupational status, region of residence and union membership.</p>
<h3>Usage</h3>
<pre>
data(CPS85)
</pre>
<h3>Format</h3>
<p>A data frame with 534 observations on the following variables.</p>
<ul>
<li>
<p><code>wage</code> wage (US dollars per hour)</p>
</li>
<li>
<p><code>educ</code> number of years of education</p>
</li>
<li>
<p><code>race</code> a factor with levels <code>NW</code> (nonwhite) or <code>W</code> (white)</p>
</li>
<li>
<p><code>sex</code> a factor with levels <code>F</code> <code>M</code></p>
</li>
<li>
<p><code>hispanic</code> a factor with levels <code>Hisp</code> <code>NH</code></p>
</li>
<li>
<p><code>south</code> a factor with levels <code>NS</code> <code>S</code></p>
</li>
<li>
<p><code>married</code> a factor with levels <code>Married</code> <code>Single</code></p>
</li>
<li>
<p><code>exper</code> number of years of work experience (inferred from <code>age</code> and <code>educ</code>)</p>
</li>
<li>
<p><code>union</code> a factor with levels <code>Not</code> <code>Union</code></p>
</li>
<li>
<p><code>age</code> age in years</p>
</li>
<li>
<p><code>sector</code> a factor with levels <code>clerical</code> <code>const</code> <code>manag</code> <code>manuf</code> <code>other</code> <code>prof</code> <code>sales</code> <code>service</code></p>
</li>
</ul>
<h3>Details</h3>
<p>Data are from 1985. The data file is recoded from the original, which had entirely numerical codes.</p>
<h3>Source</h3>
<p>Data are from <a href="http://lib.stat.cmu.edu/DASL">http://lib.stat.cmu.edu/DASL</a>.</p>
<h3>References</h3>
<p>Berndt, ER. <em>The Practice of Econometrics</em> 1991. Addison-Wesley.</p>
<h3>Examples</h3>
<pre>
data(CPS85)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47090.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47090.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-cps85.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47090.json';</script>