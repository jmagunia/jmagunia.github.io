---
title: R Dataset / Package rpart / solder
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">solder</span> data set which pertains to Soldering of Components on Printed-Circuit Boards. The <span class="mono">solder</span> data set is found in the <span class="mono">rpart</span> R package. You can load the <span class="mono">solder</span> data set in R by issuing the following command at the console <span class="mono">data("solder")</span>. This will load the data into a variable called <span class="mono">solder</span>. If R says the <span class="mono">solder</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("rpart")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-82278.csv">solder R data set</a></span>. The size of this file is about 18,893 bytes.</p><h2>Soldering of Components on Printed-Circuit Boards</h2>
<h3>Description</h3>
<p>The <code>solder</code> data frame has 720 rows and 6 columns, representing a balanced subset of a designed experiment varying 5 factors on the soldering of components on printed-circuit boards.</p>
<h3>Usage</h3>
<pre>
solder
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Opening</code></dt>
<dd>
<p>a factor with levels <span class="samp">L</span>, <span class="samp">M</span> and <span class="samp">S</span> indicating the amount of clearance around the mounting pad.</p>
</dd>
<dt><code>Solder</code></dt>
<dd>
<p>a factor with levels <span class="samp">Thick</span> and <span class="samp">Thin</span> giving the thickness of the solder used.</p>
</dd>
<dt><code>Mask</code></dt>
<dd>
<p>a factor with levels <span class="samp">A1.5</span>, <span class="samp">A3</span>, <span class="samp">B3</span> and <span class="samp">B6</span> indicating the type and thickness of mask used.</p>
</dd>
<dt><code>PadType</code></dt>
<dd>
<p>a factor with levels <span class="samp">D4</span>, <span class="samp">D6</span>, <span class="samp">D7</span>, <span class="samp">L4</span>, <span class="samp">L6</span>, <span class="samp">L7</span>, <span class="samp">L8</span>, <span class="samp">L9</span>, <span class="samp">W4</span> and <span class="samp">W9</span> giving the size and geometry of the mounting pad.</p>
</dd>
<dt><code>Panel</code></dt>
<dd>
<p><code>1:3</code> indicating the panel on a board being tested.</p>
</dd>
<dt><code>skips</code></dt>
<dd>
<p>a numeric vector giving the number of visible solder skips.</p>
</dd>
</dl>
<h3>Source</h3>
<p>John M. Chambers and Trevor J. Hastie eds. (1992) <em>Statistical Models in S</em>, Wadsworth and Brooks/Cole, Pacific Grove, CA.</p>
<h3>Examples</h3>
<pre>
fit &lt;- rpart(skips ~ Opening + Solder + Mask + PadType + Panel,
 data = solder, method = "anova")
summary(residuals(fit))
plot(predict(fit), residuals(fit))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-82278.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-82278.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-rpart-solder.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-82278.json';</script>