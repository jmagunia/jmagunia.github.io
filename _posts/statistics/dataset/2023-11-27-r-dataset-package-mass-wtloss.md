---
title: R Dataset / Package MASS / wtloss
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">wtloss</span> data set which pertains to Weight Loss Data from an Obese Patient. The <span class="mono">wtloss</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">wtloss</span> data set in R by issuing the following command at the console <span class="mono">data("wtloss")</span>. This will load the data into a variable called <span class="mono">wtloss</span>. If R says the <span class="mono">wtloss</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-99210.csv">wtloss R data set</a></span>. The size of this file is about 515 bytes.</p><h2>Weight Loss Data from an Obese Patient</h2>
<h3>Description</h3>
<p>The data frame gives the weight, in kilograms, of an obese patient at 52 time points over an 8 month period of a weight rehabilitation programme.</p>
<h3>Usage</h3>
<pre>
wtloss
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Days</code></dt>
<dd>
<p>time in days since the start of the programme.</p>
</dd>
<dt><code>Weight</code></dt>
<dd>
<p>weight in kilograms of the patient.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Dr T. Davies, Adelaide.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
wtloss.fm &lt;- nls(Weight ~ b0 + b1*2^(-Days/th),
data = wtloss, start = list(b0=90, b1=95, th=120))
wtloss.fm
plot(wtloss)
with(wtloss, lines(Days, fitted(wtloss.fm)))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-99210.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-99210.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-wtloss.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-99210.json';</script>