---
title: R Dataset / Package mosaicData / SAT
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">SAT</span> data set which pertains to State by State SAT data. The <span class="mono">SAT</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">SAT</span> data set in R by issuing the following command at the console <span class="mono">data("SAT")</span>. This will load the data into a variable called <span class="mono">SAT</span>. If R says the <span class="mono">SAT</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-25959.csv">SAT R data set</a></span>. The size of this file is about 2,272 bytes.</p><h2>State by State SAT data</h2>
<h3>Description</h3>
<p>SAT data assembled for a statistics education journal article on the link between SAT scores and measures of educational expenditures</p>
<h3>Usage</h3>
<pre>
data(SAT)
</pre>
<h3>Format</h3>
<p>A data frame with 50 observations on the following variables.</p>
<ul>
<li>
<p><code>state</code> a factor with names of each state</p>
</li>
<li>
<p><code>expend</code> expenditure per pupil in average daily attendance in public elementary and secondary schools, 1994-95 (in thousands of US dollars)</p>
</li>
<li>
<p><code>ratio</code> average pupil/teacher ratio in public elementary and secondary schools, Fall 1994</p>
</li>
<li>
<p><code>salary</code> estimated average annual salary of teachers in public elementary and secondary schools, 1994-95 (in thousands of US dollars)</p>
</li>
<li>
<p><code>frac</code> percentage of all eligible students taking the SAT, 1994-95</p>
</li>
<li>
<p><code>verbal</code> average verbal SAT score, 1994-95</p>
</li>
<li>
<p><code>math</code> average math SAT score, 1994-95</p>
</li>
<li>
<p><code>sat</code> average total SAT score, 1994-95</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="http://www.amstat.org/publications/jse/secure/v7n2/datasets.guber.cfm">http://www.amstat.org/publications/jse/secure/v7n2/datasets.guber.cfm</a></p>
<h3>References</h3>
<p>Deborah Lynn Guber, "Getting what you pay for: the debate over equity in public school expenditures" (1999), <em>Journal of Statistics Education</em> 7(2).</p>
<h3>Examples</h3>
<pre>
data(SAT)
if (require(lattice)) {
xyplot(sat ~ expend, SAT)
xyplot(sat ~ expend, SAT, 
 panel=function(x,y){grid.text(abbreviate(SAT$state, 3), x, y, default.units='native')})
} 
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-25959.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-25959.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-sat.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-25959.json';</script>