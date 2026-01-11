---
title: R Dataset / Package ISLR / Wage
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Wage</span> data set which pertains to Mid-Atlantic Wage Data. The <span class="mono">Wage</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Wage</span> data set in R by issuing the following command at the console <span class="mono">data("Wage")</span>. This will load the data into a variable called <span class="mono">Wage</span>. If R says the <span class="mono">Wage</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37830.csv">Wage R data set</a></span>. The size of this file is about 465,200 bytes.</p><h2>Mid-Atlantic Wage Data</h2>
<h3>Description</h3>
<p>Wage and other data for a group of 3000 workers in the Mid-Atlantic region.</p>
<h3>Usage</h3>
<pre>Wage</pre>
<h3>Format</h3>
<p>A data frame with 3000 observations on the following 12 variables.</p>
<dl>
<dt><code>year</code></dt>
<dd>
<p>Year that wage information was recorded</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>Age of worker</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>Gender</p>
</dd>
<dt><code>maritl</code></dt>
<dd>
<p>A factor with levels <code>1. Never Married</code> <code>2. Married</code> <code>3. Widowed</code> <code>4. Divorced</code> and <code>5. Separated</code> indicating marital status</p>
</dd>
<dt><code>race</code></dt>
<dd>
<p>A factor with levels <code>1. White</code> <code>2. Black</code> <code>3. Asian</code> and <code>4. Other</code> indicating race</p>
</dd>
<dt><code>education</code></dt>
<dd>
<p>A factor with levels <code>1. &lt; HS Grad</code> <code>2. HS Grad</code> <code>3. Some College</code> <code>4. College Grad</code> and <code>5. Advanced Degree</code> indicating education level</p>
</dd>
<dt><code>region</code></dt>
<dd>
<p>Region of the country (mid-atlantic only)</p>
</dd>
<dt><code>jobclass</code></dt>
<dd>
<p>A factor with levels <code>1. Industrial</code> and <code>2. Information</code> indicating type of job</p>
</dd>
<dt><code>health</code></dt>
<dd>
<p>A factor with levels <code>1. &lt;=Good</code> and <code>2. &gt;=Very Good</code> indicating health level of worker</p>
</dd>
<dt><code>health_ins</code></dt>
<dd>
<p>A factor with levels <code>1. Yes</code> and <code>2. No</code> indicating whether worker has health insurance</p>
</dd>
<dt><code>logwage</code></dt>
<dd>
<p>Log of workers wage</p>
</dd>
<dt><code>wage</code></dt>
<dd>
<p>Workers raw wage</p>
</dd>
</dl>
<h3>Source</h3>
<p>Data was manually assembled by Steve Miller, of Open BI (<a href="http://www.openbi.com">www.openbi.com</a>), from the March 2011 Supplement to Current Population Survey data.</p>
<p><a href="http://thedataweb.rm.census.gov/TheDataWeb">http://thedataweb.rm.census.gov/TheDataWeb</a></p>
<h3>References</h3>
<p>Games, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Wage)
lm(wage~year+age,data=Wage)
## maybe str(Wage) ; plot(Wage) ...
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37830.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37830.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-wage.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37830.json';</script>
