---
title: R Dataset / Package MASS / immer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">immer</span> data set which pertains to Yields from a Barley Field Trial. The <span class="mono">immer</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">immer</span> data set in R by issuing the following command at the console <span class="mono">data("immer")</span>. This will load the data into a variable called <span class="mono">immer</span>. If R says the <span class="mono">immer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-59958.csv">immer R data set</a></span>. The size of this file is about 589 bytes.</p><h2>Yields from a Barley Field Trial</h2>
<h3>Description</h3>
<p>The <code>immer</code> data frame has 30 rows and 4 columns. Five varieties of barley were grown in six locations in each of 1931 and 1932.</p>
<h3>Usage</h3>
<pre>
immer
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Loc</code></dt>
<dd>
<p>The location.</p>
</dd>
<dt><code>Var</code></dt>
<dd>
<p>The variety of barley (<code>"manchuria"</code>, <code>"svansota"</code>, <code>"velvet"</code>, <code>"trebi"</code> and <code>"peatland"</code>).</p>
</dd>
<dt><code>Y1</code></dt>
<dd>
<p>Yield in 1931.</p>
</dd>
<dt><code>Y2</code></dt>
<dd>
<p>Yield in 1932.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Immer, F.R., Hayes, H.D. and LeRoy Powers (1934) Statistical determination of barley varietal adaptation. <em>Journal of the American Society for Agronomy</em> <b>26</b>, 403–419.</p>
<p>Fisher, R.A. (1947) <em>The Design of Experiments.</em> 4th edition. Edinburgh: Oliver and Boyd.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (1999) <em>Modern Applied Statistics with S-PLUS.</em> Third Edition. Springer.</p>
<h3>Examples</h3>
<pre>
immer.aov &lt;- aov(cbind(Y1,Y2) ~ Loc + Var, data = immer)
summary(immer.aov)immer.aov &lt;- aov((Y1+Y2)/2 ~ Var + Loc, data = immer)
summary(immer.aov)
model.tables(immer.aov, type = "means", se = TRUE, cterms = "Var")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-59958.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-59958.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-immer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-59958.json';</script>