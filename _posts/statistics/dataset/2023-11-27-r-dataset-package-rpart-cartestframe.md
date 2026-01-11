---
title: R Dataset / Package rpart / car.test.frame
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">car.test.frame</span> data set which pertains to Automobile Data from 'Consumer Reports' 1990. The <span class="mono">car.test.frame</span> data set is found in the <span class="mono">rpart</span> R package. You can load the <span class="mono">car.test.frame</span> data set in R by issuing the following command at the console <span class="mono">data("car.test.frame")</span>. This will load the data into a variable called <span class="mono">car.test.frame</span>. If R says the <span class="mono">car.test.frame</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("rpart")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-40548.csv">car.test.frame R data set</a></span>. The size of this file is about 3,502 bytes.</p><h2>Automobile Data from 'Consumer Reports' 1990</h2>
<h3>Description</h3>
<p>The <code>car.test.frame</code> data frame has 60 rows and 8 columns, giving data on makes of cars taken from the April, 1990 issue of <em>Consumer Reports</em>. This is part of a larger dataset, some columns of which are given in <code>cu.summary</code>.</p>
<h3>Usage</h3>
<pre>
car.test.frame
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Price</code></dt>
<dd>
<p>a numeric vector giving the list price in US dollars of a standard model</p>
</dd>
<dt><code>Country</code></dt>
<dd>
<p>of origin, a factor with levels <span class="samp">France</span>, <span class="samp">Germany</span>, <span class="samp">Japan</span> , <span class="samp">Japan/USA</span>, <span class="samp">Korea</span>, <span class="samp">Mexico</span>, <span class="samp">Sweden</span> and <span class="samp">USA</span></p>
</dd>
<dt><code>Reliability</code></dt>
<dd>
<p>a numeric vector coded <code>1</code> to <code>5</code>.</p>
</dd>
<dt><code>Mileage</code></dt>
<dd>
<p>fuel consumption miles per US gallon, as tested.</p>
</dd>
<dt><code>Type</code></dt>
<dd>
<p>a factor with levels <code>Compact</code> <code>Large</code> <code>Medium</code> <code>Small</code> <code>Sporty</code> <code>Van</code></p>
</dd>
<dt><code>Weight</code></dt>
<dd>
<p>kerb weight in pounds.</p>
</dd>
<dt><code>Disp.</code></dt>
<dd>
<p>the engine capacity (displacement) in litres.</p>
</dd>
<dt><code>HP</code></dt>
<dd>
<p>the net horsepower of the vehicle.</p>
</dd>
</dl>
<h3>Source</h3>
<p><em>Consumer Reports</em>, April, 1990, pp. 235–288 quoted in</p>
<p>John M. Chambers and Trevor J. Hastie eds. (1992) <em>Statistical Models in S</em>, Wadsworth and Brooks/Cole, Pacific Grove, CA, pp. 46–47.</p>
<h3>See Also</h3>
<p><code>car90</code>, <code>cu.summary</code></p>
<h3>Examples</h3>
<pre>
z.auto &lt;- rpart(Mileage ~ Weight, car.test.frame)
summary(z.auto)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-40548.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-40548.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-rpart-cartestframe.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-40548.json';</script>