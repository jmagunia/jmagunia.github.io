---
title: R Dataset / Package vcd / Hospital
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Hospital</span> data set which pertains to Hospital data. The <span class="mono">Hospital</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Hospital</span> data set in R by issuing the following command at the console <span class="mono">data("Hospital")</span>. This will load the data into a variable called <span class="mono">Hospital</span>. If R says the <span class="mono">Hospital</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15300.csv">Hospital R data set</a></span>. The size of this file is about 76 bytes.</p><h2>Hospital data</h2>
<h3>Description</h3>
<p>The table relates the length of stay (in years) of 132 long-term schizophrenic patients in two London mental hospitals with the frequency of visits.</p>
<h3>Usage</h3>
<pre>
data("Hospital")
</pre>
<h3>Format</h3>
<p>A 2-dimensional array resulting from cross-tabulating 132 patients. The variables and their levels are as follows:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">No</td>
<td style="text-align: left;">Name</td>
<td style="text-align: left;">Levels</td>
</tr>
<tr>
<td style="text-align: right;">1</td>
<td style="text-align: left;">Visit Frequency</td>
<td style="text-align: left;">Regular, Less than monthly, Never</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Length of Stay</td>
<td style="text-align: left;">2--9 years, 10--19 years, 20+ years</td>
</tr>
</table>
<h3>Details</h3>
<p>Wing (1962) who collected this data concludes that the longer the length of stay in hospital, the less frequent the visits.</p>
<p>Haberman (1974) notes that this pattern does not increase from the "Less than monthly" to the "Never" group, which are homogeneous.</p>
<h3>Source</h3>
<p>S.J Haberman (1974): Log-linear models for frequency tables with ordered classifications. Biometrics, 30:689–700.</p>
<h3>References</h3>
<p>J.K. Wing (1962): Institutionalism in mental hospitals. British Journal of Social Clinical Psychology, 1:38–51.</p>
<h3>Examples</h3>
<pre>
data("Hospital")mosaic(t(Hospital), shade = TRUE)
mosaic(Hospital, shade = TRUE)
sieve(Hospital, shade = TRUE)
assoc(Hospital, shade = TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15300.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15300.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-hospital.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15300.json';</script>