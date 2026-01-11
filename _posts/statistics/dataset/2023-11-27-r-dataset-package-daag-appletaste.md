---
title: R Dataset / Package DAAG / appletaste
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">appletaste</span> data set which pertains to Tasting experiment that compared four apple varieties. The <span class="mono">appletaste</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">appletaste</span> data set in R by issuing the following command at the console <span class="mono">data("appletaste")</span>. This will load the data into a variable called <span class="mono">appletaste</span>. If R says the <span class="mono">appletaste</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81587.csv">appletaste R data set</a></span>. The size of this file is about 820 bytes.</p><h2>Tasting experiment that compared four apple varieties</h2>
<h3>Description</h3>
<p>Each of 20 tasters each assessed three out of the four varieties. The experiment was conducted according to a balanced incomplete block design.</p>
<h3>Usage</h3>
<pre>data(appletaste)</pre>
<h3>Format</h3>
<p>A data frame with 60 observations on the following 3 variables.</p>
<dl>
<dt>aftertaste</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<p>Apple samples were rated for <code>aftertaste</code>, by making a mark on a continuous scale that ranged from 0 (extreme dislike) to 150 (like very much).</p>
<dl>
<dt>panelist</dt>
<dd>
<p>a factor with levels <code>a</code> <code>b</code> <code>c</code> <code>d</code> <code>e</code> <code>f</code> <code>g</code> <code>h</code> <code>i</code> <code>j</code> <code>k</code> <code>l</code> <code>m</code> <code>n</code> <code>o</code> <code>p</code> <code>q</code> <code>r</code> <code>s</code> <code>t</code></p>
</dd>
<dt>product</dt>
<dd>
<p>a factor with levels <code>298</code> <code>493</code> <code>649</code> <code>937</code></p>
</dd>
</dl>
<h3>Examples</h3>
<pre>
data(appletaste)
appletaste.aov &lt;- aov(aftertaste ~ panelist + product, data=appletaste)
termplot(appletaste.aov)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81587.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81587.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-appletaste.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81587.json';</script>