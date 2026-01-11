---
title: R Dataset / Package vcd / Arthritis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Arthritis</span> data set which pertains to Arthritis Treatment Data. The <span class="mono">Arthritis</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Arthritis</span> data set in R by issuing the following command at the console <span class="mono">data("Arthritis")</span>. This will load the data into a variable called <span class="mono">Arthritis</span>. If R says the <span class="mono">Arthritis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-54845.csv">Arthritis R data set</a></span>. The size of this file is about 2,725 bytes.</p><h2>Arthritis Treatment Data</h2>
<h3>Description</h3>
<p>Data from Koch \&amp; Edwards (1988) from a double-blind clinical trial investigating a new treatment for rheumatoid arthritis.</p>
<h3>Usage</h3>
<pre>data("Arthritis")</pre>
<h3>Format</h3>
<p>A data frame with 84 observations and 5 variables.</p>
<dl>
<dt>ID</dt>
<dd>
<p>patient ID.</p>
</dd>
<dt>Treatment</dt>
<dd>
<p>factor indicating treatment (Placebo, Treated).</p>
</dd>
<dt>Sex</dt>
<dd>
<p>factor indicating sex (Female, Male).</p>
</dd>
<dt>Age</dt>
<dd>
<p>age of patient.</p>
</dd>
<dt>Improved</dt>
<dd>
<p>ordered factor indicating treatment outcome (None, Some, Marked).</p>
</dd>
</dl>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/arthrit.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/arthrit.sas</a></p>
<h3>References</h3>
<p>G. Koch \&amp; S. Edwards (1988), Clinical efficiency trials with categorical data. In K. E. Peace (ed.), <em>Biopharmaceutical Statistics for Drug Development</em>, 403–451. Marcel Dekker, New York.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Arthritis")
art &lt;- xtabs(~ Treatment + Improved, data = Arthritis, subset = Sex == "Female")
artmosaic(art, gp = shading_Friendly)
mosaic(art, gp = shading_max)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-54845.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-54845.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-arthritis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-54845.json';</script>