---
title: R Dataset / Package MASS / eagles
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">eagles</span> data set which pertains to Foraging Ecology of Bald Eagles. The <span class="mono">eagles</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">eagles</span> data set in R by issuing the following command at the console <span class="mono">data("eagles")</span>. This will load the data into a variable called <span class="mono">eagles</span>. If R says the <span class="mono">eagles</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97586.csv">eagles R data set</a></span>. The size of this file is about 160 bytes.</p><h2>Foraging Ecology of Bald Eagles</h2>
<h3>Description</h3>
<p>Knight and Skagen collected during a field study on the foraging behaviour of wintering Bald Eagles in Washington State, USA data concerning 160 attempts by one (pirating) Bald Eagle to steal a chum salmon from another (feeding) Bald Eagle.</p>
<h3>Usage</h3>
<pre>
eagles
</pre>
<h3>Format</h3>
<p>The <code>eagles</code> data frame has 8 rows and 5 columns.</p>
<dl>
<dt><code>y</code></dt>
<dd>
<p>Number of successful attempts.</p>
</dd>
<dt><code>n</code></dt>
<dd>
<p>Total number of attempts.</p>
</dd>
<dt><code>P</code></dt>
<dd>
<p>Size of pirating eagle (<code>L</code> = large, <code>S</code> = small).</p>
</dd>
<dt><code>A</code></dt>
<dd>
<p>Age of pirating eagle (<code>I</code> = immature, <code>A</code> = adult).</p>
</dd>
<dt><code>V</code></dt>
<dd>
<p>Size of victim eagle (<code>L</code> = large, <code>S</code> = small).</p>
</dd>
</dl>
<h3>Source</h3>
<p>Knight, R. L. and Skagen, S. K. (1988) Agonistic asymmetries and the foraging ecology of Bald Eagles. <em>Ecology</em> <b>69</b>, 1188–1194.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (1999) <em>Modern Applied Statistics with S-PLUS.</em> Third Edition. Springer.</p>
<h3>Examples</h3>
<pre>
eagles.glm &lt;- glm(cbind(y, n - y) ~ P*A + V, data = eagles,
family = binomial)
dropterm(eagles.glm)
prof &lt;- profile(eagles.glm)
plot(prof)
pairs(prof)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97586.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97586.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-eagles.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97586.json';</script>