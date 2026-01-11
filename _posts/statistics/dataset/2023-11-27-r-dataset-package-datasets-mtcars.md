---
title: R Dataset / Package datasets / mtcars
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mtcars</span> data set which pertains to Motor Trend Car Road Tests. The <span class="mono">mtcars</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">mtcars</span> data set in R by issuing the following command at the console <span class="mono">data("mtcars")</span>. This will load the data into a variable called <span class="mono">mtcars</span>. If R says the <span class="mono">mtcars</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10551.csv">mtcars R data set</a></span>. The size of this file is about 1,716 bytes.</p><h2>Motor Trend Car Road Tests</h2>
<h3>Description</h3>
<p>The data was extracted from the 1974 <em>Motor Trend</em> US magazine, and comprises fuel consumption and 10 aspects of automobile design and performance for 32 automobiles (1973–74 models).</p>
<h3>Usage</h3>
<pre>mtcars</pre>
<h3>Format</h3>
<p>A data frame with 32 observations on 11 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[, 1]</td>
<td style="text-align: left;">mpg</td>
<td style="text-align: left;">Miles/(US) gallon</td>
</tr>
<tr>
<td style="text-align: right;">[, 2]</td>
<td style="text-align: left;">cyl</td>
<td style="text-align: left;">Number of cylinders</td>
</tr>
<tr>
<td style="text-align: right;">[, 3]</td>
<td style="text-align: left;">disp</td>
<td style="text-align: left;">Displacement (cu.in.)</td>
</tr>
<tr>
<td style="text-align: right;">[, 4]</td>
<td style="text-align: left;">hp</td>
<td style="text-align: left;">Gross horsepower</td>
</tr>
<tr>
<td style="text-align: right;">[, 5]</td>
<td style="text-align: left;">drat</td>
<td style="text-align: left;">Rear axle ratio</td>
</tr>
<tr>
<td style="text-align: right;">[, 6]</td>
<td style="text-align: left;">wt</td>
<td style="text-align: left;">Weight (1000 lbs)</td>
</tr>
<tr>
<td style="text-align: right;">[, 7]</td>
<td style="text-align: left;">qsec</td>
<td style="text-align: left;">1/4 mile time</td>
</tr>
<tr>
<td style="text-align: right;">[, 8]</td>
<td style="text-align: left;">vs</td>
<td style="text-align: left;">V/S</td>
</tr>
<tr>
<td style="text-align: right;">[, 9]</td>
<td style="text-align: left;">am</td>
<td style="text-align: left;">Transmission (0 = automatic, 1 = manual)</td>
</tr>
<tr>
<td style="text-align: right;">[,10]</td>
<td style="text-align: left;">gear</td>
<td style="text-align: left;">Number of forward gears</td>
</tr>
<tr>
<td style="text-align: right;">[,11]</td>
<td style="text-align: left;">carb</td>
<td style="text-align: left;">Number of carburetors</td>
</tr>
</table>
<h3>Source</h3>
<p>Henderson and Velleman (1981), Building multiple regression models interactively. <em>Biometrics</em>, <b>37</b>, 391–411.</p>
<h3>Examples</h3>
<pre>
require(graphics)
pairs(mtcars, main = "mtcars data")
coplot(mpg ~ disp | as.factor(cyl), data = mtcars,
 panel = panel.smooth, rows = 1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10551.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10551.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-mtcars.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10551.json';</script>