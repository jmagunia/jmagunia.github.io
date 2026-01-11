---
title: R Dataset / Package Stat2Data / ICU
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">ICU</span> data set which pertains to ICU. The <span class="mono">ICU</span> data set is found in the <span class="mono">Stat2Data</span> R package. You can load the <span class="mono">ICU</span> data set in R by issuing the following command at the console <span class="mono">data("ICU")</span>. This will load the data into a variable called <span class="mono">ICU</span>. If R says the <span class="mono">ICU</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Stat2Data")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31811.csv">ICU R data set</a></span>. The size of this file is about 4,919 bytes.</p><h2>ICU</h2>
<h3>Description</h3>
<p>Patients at an Intensive Care Unit (ICU)</p>
<h3>Format</h3>
<p>A dataset with 200 observations on the following 9 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>ID</code></td>
<td style="text-align: left;">Patient ID code</td>
</tr>
<tr>
<td style="text-align: right;"><code>Survive</code></td>
<td style="text-align: left;"><code>1</code>=patient survived to discharge or <code>0</code>=patient died</td>
</tr>
<tr>
<td style="text-align: right;"><code>Age</code></td>
<td style="text-align: left;">Age (in years)</td>
</tr>
<tr>
<td style="text-align: right;"><code>AgeGroup</code></td>
<td style="text-align: left;"><code>1</code>= young (under 50), <code>2</code>= middle (50-69), <code>3</code> = old (70+)</td>
</tr>
<tr>
<td style="text-align: right;"><code>Sex</code></td>
<td style="text-align: left;"><code>1</code>=female or <code>0</code>=male</td>
</tr>
<tr>
<td style="text-align: right;"><code>Infection</code></td>
<td style="text-align: left;"><code>1</code>=infection suspected or <code>0</code>=no infection</td>
</tr>
<tr>
<td style="text-align: right;"><code>SysBP</code></td>
<td style="text-align: left;">Systolic blood pressure (in mm of Hg)</td>
</tr>
<tr>
<td style="text-align: right;"><code>Pulse</code></td>
<td style="text-align: left;">Hear rate4 (beats per minute)</td>
</tr>
<tr>
<td style="text-align: right;"><code>Emergency</code></td>
<td style="text-align: left;"><code>1</code>=emergency admission or <code>0</code>=elective admission</td>
</tr>
</table>
<h3>Details</h3>
<p>This dataset contains information for a sample of 200 patients who were part of a larger study conducted in a hospital's Intensive Care Unit (ICU). Since an ICU often deals with serious, life-threatening cases, a key variable to study is patient survival, which is coded in the Survive variable as 1 if the patient lived to be discharged and 0 if the patient died.</p>
<h3>Source</h3>
<p>Data downladed from The Data and Story Library (DASL), <a href="http://lib.stat.cmu.edu/DASL/Datafiles/ICU.html">http://lib.stat.cmu.edu/DASL/Datafiles/ICU.html</a>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31811.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31811.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-stat2data-icu.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31811.json';</script>