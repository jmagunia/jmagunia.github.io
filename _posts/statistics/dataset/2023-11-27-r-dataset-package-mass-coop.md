---
title: R Dataset / Package MASS / coop
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">coop</span> data set which pertains to Co-operative Trial in Analytical Chemistry. The <span class="mono">coop</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">coop</span> data set in R by issuing the following command at the console <span class="mono">data("coop")</span>. This will load the data into a variable called <span class="mono">coop</span>. If R says the <span class="mono">coop</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84618.csv">coop R data set</a></span>. The size of this file is about 4,922 bytes.</p><h2>Co-operative Trial in Analytical Chemistry</h2>
<h3>Description</h3>
<p>Seven specimens were sent to 6 laboratories in 3 separate batches and each analysed for Analyte. Each analysis was duplicated.</p>
<h3>Usage</h3>
<pre>
coop
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Lab</code></dt>
<dd>
<p>Laboratory, <code>L1</code>, <code>L2</code>, ..., <code>L6</code>.</p>
</dd>
<dt><code>Spc</code></dt>
<dd>
<p>Specimen, <code>S1</code>, <code>S2</code>, ..., <code>S7</code>.</p>
</dd>
<dt><code>Bat</code></dt>
<dd>
<p>Batch, <code>B1</code>, <code>B2</code>, <code>B3</code> (nested within <code>Spc/Lab</code>),</p>
</dd>
<dt><code>Conc</code></dt>
<dd>
<p>Concentration of Analyte in <i>g/kg</i>.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Analytical Methods Committee (1987) Recommendations for the conduct and interpretation of co-operative trials, <em>The Analyst</em> <b>112</b>, 679–686.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>See Also</h3>
<p><code>chem</code>, <code>abbey</code>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84618.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84618.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-coop.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84618.json';</script>