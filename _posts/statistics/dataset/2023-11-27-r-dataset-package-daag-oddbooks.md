---
title: R Dataset / Package DAAG / oddbooks
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">oddbooks</span> data set which pertains to Measurements on 12 books. The <span class="mono">oddbooks</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">oddbooks</span> data set in R by issuing the following command at the console <span class="mono">data("oddbooks")</span>. This will load the data into a variable called <span class="mono">oddbooks</span>. If R says the <span class="mono">oddbooks</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60960.csv">oddbooks R data set</a></span>. The size of this file is about 234 bytes.</p><h2>Measurements on 12 books</h2>
<h3>Description</h3>
<p>Data giving thickness (mm), height (cm), width (cm) and weight (g), of 12 books. Books were selected so that thickness decreased as page area increased</p>
<h3>Usage</h3>
<pre>data(oddbooks)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on the following 4 variables.</p>
<dl>
<dt>thick</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>height</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>breadth</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>weight</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>JM took books from his library.</p>
<h3>Examples</h3>
<pre>
data(oddbooks)
str(oddbooks)
plot(oddbooks) 
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60960.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60960.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-oddbooks.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60960.json';</script>