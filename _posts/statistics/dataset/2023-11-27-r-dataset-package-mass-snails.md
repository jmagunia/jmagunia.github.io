---
title: R Dataset / Package MASS / snails
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">snails</span> data set which pertains to Snail Mortality Data. The <span class="mono">snails</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">snails</span> data set in R by issuing the following command at the console <span class="mono">data("snails")</span>. This will load the data into a variable called <span class="mono">snails</span>. If R says the <span class="mono">snails</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80728.csv">snails R data set</a></span>. The size of this file is about 1,835 bytes.</p><h2>Snail Mortality Data</h2>
<h3>Description</h3>
<p>Groups of 20 snails were held for periods of 1, 2, 3 or 4 weeks in carefully controlled conditions of temperature and relative humidity. There were two species of snail, A and B, and the experiment was designed as a 4 by 3 by 4 by 2 completely randomized design. At the end of the exposure time the snails were tested to see if they had survived; the process itself is fatal for the animals. The object of the exercise was to model the probability of survival in terms of the stimulus variables, and in particular to test for differences between species.</p>
<p>The data are unusual in that in most cases fatalities during the experiment were fairly small.</p>
<h3>Usage</h3>
<pre>
snails
</pre>
<h3>Format</h3>
<p>The data frame contains the following components:</p>
<dl>
<dt><code>Species</code></dt>
<dd>
<p>snail species A (<code>1</code>) or B (<code>2</code>).</p>
</dd>
<dt><code>Exposure</code></dt>
<dd>
<p>exposure in weeks.</p>
</dd>
<dt><code>Rel.Hum</code></dt>
<dd>
<p>relative humidity (4 levels).</p>
</dd>
<dt><code>Temp</code></dt>
<dd>
<p>temperature, in degrees Celsius (3 levels).</p>
</dd>
<dt><code>Deaths</code></dt>
<dd>
<p>number of deaths.</p>
</dd>
<dt><code>N</code></dt>
<dd>
<p>number of snails exposed.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Zoology Department, The University of Adelaide.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (1999) <em>Modern Applied Statistics with S-PLUS.</em> Third Edition. Springer.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80728.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80728.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-snails.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80728.json';</script>