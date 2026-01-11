---
title: R Dataset / Package survival / bladder
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bladder</span> data set which pertains to Bladder Cancer Recurrences. The <span class="mono">bladder</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">bladder</span> data set in R by issuing the following command at the console <span class="mono">data("bladder")</span>. This will load the data into a variable called <span class="mono">bladder</span>. If R says the <span class="mono">bladder</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42491.csv">bladder R data set</a></span>. The size of this file is about 5,385 bytes.</p><h2>Bladder Cancer Recurrences</h2>
<h3>Description</h3>
<p>Data on recurrences of bladder cancer, used by many people to demonstrate methodology for recurrent event modelling.</p>
<p>Bladder1 is the full data set from the study. It contains all three treatment arms and all recurrences for 118 subjects; the maximum observed number of recurrences is 9.</p>
<p>Bladder is the data set that appears most commonly in the literature. It uses only the 85 subjects with nonzero follow-up who were assigned to either thiotepa or placebo, and only the first four recurrences for any patient. The status variable is 1 for recurrence and 0 for everything else (including death for any reason). The data set is laid out in the competing risks format of the paper by Wei, Lin, and Weissfeld.</p>
<p>Bladder2 uses the same subset of subjects as bladder, but formatted in the (start, stop] or Anderson-Gill style. Note that in transforming from the WLW to the AG style data set there is a quite common programming mistake that leads to extra follow-up time for 12 subjects: all those with follow-up beyond their 4th recurrence). Over this extended time these subjects are by definition not at risk for another event in the WLW data set.</p>
<h3>Usage</h3>
<pre>
bladder1
bladder
bladder2
</pre>
<h3>Format</h3>
<p>bladder1</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">Patient id</td>
</tr>
<tr>
<td style="text-align: left;">treatment:</td>
<td style="text-align: left;">Placebo, pyridoxine (vitamin B6), or thiotepa</td>
</tr>
<tr>
<td style="text-align: left;">number:</td>
<td style="text-align: left;">Initial number of tumours (8=8 or more)</td>
</tr>
<tr>
<td style="text-align: left;">size:</td>
<td style="text-align: left;">Size (cm) of largest initial tumour</td>
</tr>
<tr>
<td style="text-align: left;">recur:</td>
<td style="text-align: left;">Number of recurrences</td>
</tr>
<tr>
<td style="text-align: left;">start,stop:</td>
<td style="text-align: left;">The start and end time of each time interval</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">End of interval code, 0=censored, 1=recurrence,</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">2=death from bladder disease, 3=death other/unknown cause</td>
</tr>
<tr>
<td style="text-align: left;">rtumor:</td>
<td style="text-align: left;">Number of tumors found at the time of a recurrence</td>
</tr>
<tr>
<td style="text-align: left;">rsize:</td>
<td style="text-align: left;">Size of largest tumor at a recurrence</td>
</tr>
<tr>
<td style="text-align: left;">enum:</td>
<td style="text-align: left;">Event number (observation number within patient)</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<p>bladder</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">Patient id</td>
</tr>
<tr>
<td style="text-align: left;">rx:</td>
<td style="text-align: left;">Treatment 1=placebo 2=thiotepa</td>
</tr>
<tr>
<td style="text-align: left;">number:</td>
<td style="text-align: left;">Initial number of tumours (8=8 or more)</td>
</tr>
<tr>
<td style="text-align: left;">size:</td>
<td style="text-align: left;">size (cm) of largest initial tumour</td>
</tr>
<tr>
<td style="text-align: left;">stop:</td>
<td style="text-align: left;">recurrence or censoring time</td>
</tr>
<tr>
<td style="text-align: left;">enum:</td>
<td style="text-align: left;">which recurrence (up to 4)</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<p>bladder2</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">Patient id</td>
</tr>
<tr>
<td style="text-align: left;">rx:</td>
<td style="text-align: left;">Treatment 1=placebo 2=thiotepa</td>
</tr>
<tr>
<td style="text-align: left;">number:</td>
<td style="text-align: left;">Initial number of tumours (8=8 or more)</td>
</tr>
<tr>
<td style="text-align: left;">size:</td>
<td style="text-align: left;">size (cm) of largest initial tumour</td>
</tr>
<tr>
<td style="text-align: left;">start:</td>
<td style="text-align: left;">start of interval (0 or previous recurrence time)</td>
</tr>
<tr>
<td style="text-align: left;">stop:</td>
<td style="text-align: left;">recurrence or censoring time</td>
</tr>
<tr>
<td style="text-align: left;">enum:</td>
<td style="text-align: left;">which recurrence (up to 4)</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Source</h3>
<p>Andrews DF, Hertzberg AM (1985), DATA: A Collection of Problems from Many Fields for the Student and Research Worker, New York: Springer-Verlag.</p>
<p>LJ Wei, DY Lin, L Weissfeld (1989), Regression analysis of multivariate incomplete failure time data by modeling marginal distributions. <em>Journal of the American Statistical Association</em>, <b>84</b>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42491.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42491.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-bladder.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42491.json';</script>