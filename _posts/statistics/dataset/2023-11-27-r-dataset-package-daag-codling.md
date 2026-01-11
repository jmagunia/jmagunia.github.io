---
title: R Dataset / Package DAAG / codling
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">codling</span> data set which pertains to Dose-mortality data, for fumigation of codling moth with methyl bromide. The <span class="mono">codling</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">codling</span> data set in R by issuing the following command at the console <span class="mono">data("codling")</span>. This will load the data into a variable called <span class="mono">codling</span>. If R says the <span class="mono">codling</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-13799.csv">codling R data set</a></span>. The size of this file is about 6,509 bytes.</p><h2>Dose-mortality data, for fumigation of codling moth with methyl bromide</h2>
<h3>Description</h3>
<p>Data are from trials that studied the mortality response of codling moth to fumigation with methyl bromide.</p>
<h3>Usage</h3>
<pre>data(codling)</pre>
<h3>Format</h3>
<p>A data frame with 99 observations on the following 10 variables.</p>
<dl>
<dt>dose</dt>
<dd>
<p>Injected dose of methyl bromide, in gm per cubic meter</p>
</dd>
<dt>tot</dt>
<dd>
<p>Number of insects in chamber</p>
</dd>
<dt>dead</dt>
<dd>
<p>Number of insects dying</p>
</dd>
<dt>pobs</dt>
<dd>
<p>Proportion dying</p>
</dd>
<dt>cm</dt>
<dd>
<p>Control mortality, i.e., at dose 0</p>
</dd>
<dt>ct</dt>
<dd>
<p>Concentration-time sum</p>
</dd>
<dt>Cultivar</dt>
<dd>
<p>a factor with levels <code>BRAEBURN</code> <code>FUJI</code> <code>GRANNY</code> <code>Gala</code> <code>ROYAL</code> <code>Red Delicious</code> <code>Splendour</code></p>
</dd>
<dt>gp</dt>
<dd>
<p>a factor which has a different level for each different combination of <code>Cultivar</code>, <code>year</code> and <code>rep</code> (replicate).</p>
</dd>
<dt>year</dt>
<dd>
<p>a factor with levels <code>1988</code> <code>1989</code></p>
</dd>
<dt>numcm</dt>
<dd>
<p>a numeric vector: total number of control insects</p>
</dd>
</dl>
<h3>Details</h3>
<p>The research that generated these data was in part funded by New Zealand pipfruit growers. The published analysis was funded by New Zealand pipfruit growers. See also <code>sorption</code>.</p>
<h3>Source</h3>
<p>Maindonald, J.H.; Waddell, B.C.; Petry, R.J. 2001. Apple cultivar effects on codling moth (Lepidoptera: Tortricidae) egg mortality following fumigation with methyl bromide. Postharvest Biology and Technology 22: 99-110.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-13799.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-13799.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-codling.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-13799.json';</script>