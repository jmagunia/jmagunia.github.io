---
title: R Dataset / Package MASS / Aids2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Aids2</span> data set which pertains to Australian AIDS Survival Data. The <span class="mono">Aids2</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">Aids2</span> data set in R by issuing the following command at the console <span class="mono">data("Aids2")</span>. This will load the data into a variable called <span class="mono">Aids2</span>. If R says the <span class="mono">Aids2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15766.csv">Aids2 R data set</a></span>. The size of this file is about 97,151 bytes.</p><h2>Australian AIDS Survival Data</h2>
<h3>Description</h3>
<p>Data on patients diagnosed with AIDS in Australia before 1 July 1991.</p>
<h3>Usage</h3>
<pre>
Aids2
</pre>
<h3>Format</h3>
<p>This data frame contains 2843 rows and the following columns:</p>
<dl>
<dt><code>state</code></dt>
<dd>
<p>Grouped state of origin: <code>"NSW "</code>includes ACT and <code>"other"</code> is WA, SA, NT and TAS.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>Sex of patient.</p>
</dd>
<dt><code>diag</code></dt>
<dd>
<p>(Julian) date of diagnosis.</p>
</dd>
<dt><code>death</code></dt>
<dd>
<p>(Julian) date of death or end of observation.</p>
</dd>
<dt><code>status</code></dt>
<dd>
<p><code>"A"</code> (alive) or <code>"D"</code> (dead) at end of observation.</p>
</dd>
<dt><code>T.categ</code></dt>
<dd>
<p>Reported transmission category.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>Age (years) at diagnosis.</p>
</dd>
</dl>
<h3>Note</h3>
<p>This data set has been slightly jittered as a condition of its release, to ensure patient confidentiality.</p>
<h3>Source</h3>
<p>Dr P. J. Solomon and the Australian National Centre in HIV Epidemiology and Clinical Research.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15766.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15766.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-aids2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15766.json';</script>