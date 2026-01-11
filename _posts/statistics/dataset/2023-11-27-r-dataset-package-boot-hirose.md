---
title: R Dataset / Package boot / hirose
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hirose</span> data set which pertains to Failure Time of PET Film. The <span class="mono">hirose</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">hirose</span> data set in R by issuing the following command at the console <span class="mono">data("hirose")</span>. This will load the data into a variable called <span class="mono">hirose</span>. If R says the <span class="mono">hirose</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-12006.csv">hirose R data set</a></span>. The size of this file is about 464 bytes.</p><h2>Failure Time of PET Film</h2>
<h3>Description</h3>
<p>The <code>hirose</code> data frame has 44 rows and 3 columns.</p>
<p>PET film is used in electrical insulation. In this accelerated life test the failure times for 44 samples in gas insulated transformers. 4 different voltage levels were used.</p>
<h3>Usage</h3>
<pre>
hirose
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>volt</code></dt>
<dd>
<p>The voltage (in kV).</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>The failure or censoring time in hours.</p>
</dd>
<dt><code>cens</code></dt>
<dd>
<p>The censoring indicator; <code>1</code> means right-censored data.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Hirose, H. (1993) Estimation of threshold stress in accelerated life-testing. <em>IEEE Transactions on Reliability</em>, <b>42</b>, 650–657.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-12006.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-12006.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-hirose.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-12006.json';</script>