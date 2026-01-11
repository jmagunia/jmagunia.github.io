---
title: R Dataset / Package vcd / VonBort
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">VonBort</span> data set which pertains to Von Bortkiewicz Horse Kicks Data. The <span class="mono">VonBort</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">VonBort</span> data set in R by issuing the following command at the console <span class="mono">data("VonBort")</span>. This will load the data into a variable called <span class="mono">VonBort</span>. If R says the <span class="mono">VonBort</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52868.csv">VonBort R data set</a></span>. The size of this file is about 5,013 bytes.</p><h2>Von Bortkiewicz Horse Kicks Data</h2>
<h3>Description</h3>
<p>Data from von Bortkiewicz (1898), given by Andrews \&amp; Herzberg (1985), on number of deaths by horse or mule kicks in 14 corps of the Prussian army.</p>
<h3>Usage</h3>
<pre>
data("VonBort")
</pre>
<h3>Format</h3>
<p>A data frame with 280 observations and 4 variables.</p>
<dl>
<dt>deaths</dt>
<dd>
<p>number of deaths.</p>
</dd>
<dt>year</dt>
<dd>
<p>year of the deaths.</p>
</dd>
<dt>corps</dt>
<dd>
<p>factor indicating the corps.</p>
</dd>
<dt>fisher</dt>
<dd>
<p>factor indicating whether the corresponding corps was considered by Fisher (1925) or not.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vonbort.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/vonbort.sas</a></p>
<h3>References</h3>
<p>D. F. Andrews \&amp; A. M. Herzberg (1985), <em>Data: A Collection of Problems from Many Fields for the Student and Research Worker</em>. Springer-Verlag, New York, NY.</p>
<p>R. A. Fisher (1925), <em>Statistical Methods for Research Workers</em>. Oliver &amp; Boyd, London.</p>
<p>L. von Bortkiewicz (1898), <em>Das Gesetz der kleinen Zahlen</em>. Teubner, Leipzig.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>See Also</h3>
<p><code>HorseKicks</code> for a popular subsample.</p>
<h3>Examples</h3>
<pre>
data("VonBort")
## HorseKicks data
xtabs(~ deaths, data = VonBort, subset = fisher == "yes")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52868.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52868.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-vonbort.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52868.json';</script>