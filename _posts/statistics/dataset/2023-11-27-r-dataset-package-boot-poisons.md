---
title: R Dataset / Package boot / poisons
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">poisons</span> data set which pertains to Animal Survival Times. The <span class="mono">poisons</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">poisons</span> data set in R by issuing the following command at the console <span class="mono">data("poisons")</span>. This will load the data into a variable called <span class="mono">poisons</span>. If R says the <span class="mono">poisons</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94158.csv">poisons R data set</a></span>. The size of this file is about 643 bytes.</p><h2>Animal Survival Times</h2>
<h3>Description</h3>
<p>The <code>poisons</code> data frame has 48 rows and 3 columns.</p>
<p>The data form a 3x4 factorial experiment, the factors being three poisons and four treatments. Each combination of the two factors was used for four animals, the allocation to animals having been completely randomized.</p>
<h3>Usage</h3>
<pre>
poisons
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>time</code></dt>
<dd>
<p>The survival time of the animal in units of 10 hours.</p>
</dd>
<dt><code>poison</code></dt>
<dd>
<p>A factor with levels <code>1</code>, <code>2</code> and <code>3</code> giving the type of poison used.</p>
</dd>
<dt><code>treat</code></dt>
<dd>
<p>A factor with levels <code>A</code>, <code>B</code>, <code>C</code> and <code>D</code> giving the treatment.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Box, G.E.P. and Cox, D.R. (1964) An analysis of transformations (with Discussion). <em>Journal of the Royal Statistical Society, B</em>, <b>26</b>, 211–252.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94158.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94158.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-poisons.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94158.json';</script>