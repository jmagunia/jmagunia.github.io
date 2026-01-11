---
title: R Dataset / Package MASS / menarche
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">menarche</span> data set which pertains to Age of Menarche in Warsaw. The <span class="mono">menarche</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">menarche</span> data set in R by issuing the following command at the console <span class="mono">data("menarche")</span>. This will load the data into a variable called <span class="mono">menarche</span>. If R says the <span class="mono">menarche</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-17104.csv">menarche R data set</a></span>. The size of this file is about 342 bytes.</p><h2>Age of Menarche in Warsaw</h2>
<h3>Description</h3>
<p>Proportions of female children at various ages during adolescence who have reached menarche.</p>
<h3>Usage</h3>
<pre>
menarche
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Age</code></dt>
<dd>
<p>Average age of the group. (The groups are reasonably age homogeneous.)</p>
</dd>
<dt><code>Total</code></dt>
<dd>
<p>Total number of children in the group.</p>
</dd>
<dt><code>Menarche</code></dt>
<dd>
<p>Number who have reached menarche.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Milicer, H. and Szczotka, F. (1966) Age at Menarche in Warsaw girls in 1965. <em>Human Biology</em> <b>38</b>, 199–203.</p>
<p>The data are also given inAranda-Ordaz, F.J. (1981) On two families of transformations to additivity for binary response data. <em>Biometrika</em> <b>68</b>, 357–363.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
mprob &lt;- glm(cbind(Menarche, Total - Menarche) ~ Age,
 binomial(link = probit), data = menarche)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-17104.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-17104.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-menarche.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-17104.json';</script>