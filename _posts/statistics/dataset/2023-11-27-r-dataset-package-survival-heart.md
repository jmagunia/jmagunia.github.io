---
title: R Dataset / Package survival / heart
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">heart</span> data set which pertains to Stanford Heart Transplant data. The <span class="mono">heart</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">heart</span> data set in R by issuing the following command at the console <span class="mono">data("heart")</span>. This will load the data into a variable called <span class="mono">heart</span>. If R says the <span class="mono">heart</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47860.csv">heart R data set</a></span>. The size of this file is about 8,859 bytes.</p><h2>Stanford Heart Transplant data</h2>
<h3>Description</h3>
<p>Survival of patients on the waiting list for the Stanford heart transplant program.</p>
<h3>Usage</h3>
<pre>
heart
jasa
jasa1
</pre>
<h3>Format</h3>
<p>jasa: original data</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">birth.dt:</td>
<td style="text-align: left;">birth date</td>
</tr>
<tr>
<td style="text-align: left;">accept.dt:</td>
<td style="text-align: left;">acceptance into program</td>
</tr>
<tr>
<td style="text-align: left;">tx.date:</td>
<td style="text-align: left;">transplant date</td>
</tr>
<tr>
<td style="text-align: left;">fu.date:</td>
<td style="text-align: left;">end of followup</td>
</tr>
<tr>
<td style="text-align: left;">fustat:</td>
<td style="text-align: left;">dead or alive</td>
</tr>
<tr>
<td style="text-align: left;">surgery:</td>
<td style="text-align: left;">prior bypass surgery</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">age (in years)</td>
</tr>
<tr>
<td style="text-align: left;">futime:</td>
<td style="text-align: left;">followup time</td>
</tr>
<tr>
<td style="text-align: left;">wait.time:</td>
<td style="text-align: left;">time before transplant</td>
</tr>
<tr>
<td style="text-align: left;">transplant:</td>
<td style="text-align: left;">transplant indicator</td>
</tr>
<tr>
<td style="text-align: left;">mismatch:</td>
<td style="text-align: left;">mismatch score</td>
</tr>
<tr>
<td style="text-align: left;">hla.a2:</td>
<td style="text-align: left;">particular type of mismatch</td>
</tr>
<tr>
<td style="text-align: left;">mscore:</td>
<td style="text-align: left;">another mismatch score</td>
</tr>
<tr>
<td style="text-align: left;">reject:</td>
<td style="text-align: left;">rejection occurred</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<p>jasa1, heart: processed data</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">start, stop, event:</td>
<td style="text-align: left;">Entry and exit time and status for this interval of time</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">age-48 years</td>
</tr>
<tr>
<td style="text-align: left;">year:</td>
<td style="text-align: left;">year of acceptance (in years after 1 Nov 1967)</td>
</tr>
<tr>
<td style="text-align: left;">surgery:</td>
<td style="text-align: left;">prior bypass surgery 1=yes</td>
</tr>
<tr>
<td style="text-align: left;">transplant:</td>
<td style="text-align: left;">received transplant 1=yes</td>
</tr>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">patient id</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Source</h3>
<p>J Crowley and M Hu (1977), Covariance analysis of heart transplant survival data. <em>Journal of the American Statistical Association</em>, <b>72</b>, 27–36.</p>
<h3>See Also</h3>
<p><code>stanford2</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47860.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47860.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-heart.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47860.json';</script>