---
title: R Dataset / Package survival / veteran
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">veteran</span> data set which pertains to Veterans' Administration Lung Cancer study. The <span class="mono">veteran</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">veteran</span> data set in R by issuing the following command at the console <span class="mono">data("veteran")</span>. This will load the data into a variable called <span class="mono">veteran</span>. If R says the <span class="mono">veteran</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-25346.csv">veteran R data set</a></span>. The size of this file is about 3,914 bytes.</p><h2>Veterans' Administration Lung Cancer study</h2>
<h3>Description</h3>
<p>Randomised trial of two treatment regimens for lung cancer. This is a standard survival analysis data set.</p>
<h3>Usage</h3>
<pre>veteran</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">trt:</td>
<td style="text-align: left;">1=standard 2=test</td>
</tr>
<tr>
<td style="text-align: left;">celltype:</td>
<td style="text-align: left;">1=squamous, 2=smallcell, 3=adeno, 4=large</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">survival time</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">censoring status</td>
</tr>
<tr>
<td style="text-align: left;">karno:</td>
<td style="text-align: left;">Karnofsky performance score (100=good)</td>
</tr>
<tr>
<td style="text-align: left;">diagtime:</td>
<td style="text-align: left;">months from diagnosis to randomisation</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">in years</td>
</tr>
<tr>
<td style="text-align: left;">prior:</td>
<td style="text-align: left;">prior therapy 0=no, 1=yes</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Source</h3>
<p>D Kalbfleisch and RL Prentice (1980), <em>The Statistical Analysis of Failure Time Data</em>. Wiley, New York.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-25346.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-25346.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-veteran.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-25346.json';</script>