---
title: R Dataset / Package KMsurv / burn
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">burn</span> data set which pertains to data from Section 1.6. The <span class="mono">burn</span> data set is found in the <span class="mono">KMsurv</span> R package. You can load the <span class="mono">burn</span> data set in R by issuing the following command at the console <span class="mono">data("burn")</span>. This will load the data into a variable called <span class="mono">burn</span>. If R says the <span class="mono">burn</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("KMsurv")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-98917.csv">burn R data set</a></span>. The size of this file is about 6,267 bytes.</p><h2>data from Section 1.6</h2>
<h3>Description</h3>
<p>The <code>burn</code> data frame has 154 rows and 17 columns.</p>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Obs</dt>
<dd>
<p>Observation number</p>
</dd>
<dt>Z1</dt>
<dd>
<p>Treatment: 0-routine bathing 1-Body cleansing</p>
</dd>
<dt>Z2</dt>
<dd>
<p>Gender (0=male 1=female)</p>
</dd>
<dt>Z3</dt>
<dd>
<p>Race: 0=nonwhite 1=white</p>
</dd>
<dt>Z4</dt>
<dd>
<p>Percentage of total surface area burned</p>
</dd>
<dt>Z5</dt>
<dd>
<p>Burn site indicator: head 1=yes, 0=no</p>
</dd>
<dt>Z6</dt>
<dd>
<p>Burn site indicator: buttock 1=yes, 0=no</p>
</dd>
<dt>Z7</dt>
<dd>
<p>Burn site indicator: trunk 1=yes, 0=no</p>
</dd>
<dt>Z8</dt>
<dd>
<p>Burn site indicator: upper leg 1=yes, 0=no</p>
</dd>
<dt>Z9</dt>
<dd>
<p>Burn site indicator: lower leg 1=yes, 0=no</p>
</dd>
<dt>Z10</dt>
<dd>
<p>Burn site indicator: respiratory tract 1=yes, 0=no</p>
</dd>
<dt>Z11</dt>
<dd>
<p>Type of burn: 1=chemical, 2=scald, 3=electric, 4=flame</p>
</dd>
<dt>T1</dt>
<dd>
<p>Time to excision or on study time</p>
</dd>
<dt>D1</dt>
<dd>
<p>Excision indicator: 1=yes 0=no</p>
</dd>
<dt>T2</dt>
<dd>
<p>Time to prophylactic antibiotic treatment or on study time</p>
</dd>
<dt>D2</dt>
<dd>
<p>Prophylactic antibiotic treatment: 1=yes 0=no</p>
</dd>
<dt>T3</dt>
<dd>
<p>Time to straphylocous aureaus infection or on study time</p>
</dd>
<dt>D3</dt>
<dd>
<p>Straphylocous aureaus infection: 1=yes 0=no</p>
</dd>
</dl>
<h3>Source</h3>
<p>Klein and Moeschberger (1997) <em>Survival Analysis Techniques for Censored and truncated data</em>, Springer. Ichida et al. Stat. Med. 12 (1993): 301-310.</p>
<h3>Examples</h3>
<pre>
data(burn)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-98917.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-98917.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-kmsurv-burn.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-98917.json';</script>