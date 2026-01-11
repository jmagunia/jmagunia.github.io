---
title: R Dataset / Package survival / pbc
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">pbc</span> data set which pertains to Mayo Clinic Primary Biliary Cirrhosis Data. The <span class="mono">pbc</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">pbc</span> data set in R by issuing the following command at the console <span class="mono">data("pbc")</span>. This will load the data into a variable called <span class="mono">pbc</span>. If R says the <span class="mono">pbc</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10259.csv">pbc R data set</a></span>. The size of this file is about 33,764 bytes.</p><h2>Mayo Clinic Primary Biliary Cirrhosis Data</h2>
<h3>Description</h3>
<p>D This data is from the Mayo Clinic trial in primary biliary cirrhosis (PBC) of the liver conducted between 1974 and 1984. A total of 424 PBC patients, referred to Mayo Clinic during that ten-year interval, met eligibility criteria for the randomized placebo controlled trial of the drug D-penicillamine. The first 312 cases in the data set participated in the randomized trial and contain largely complete data. The additional 112 cases did not participate in the clinical trial, but consented to have basic measurements recorded and to be followed for survival. Six of those cases were lost to follow-up shortly after diagnosis, so the data here are on an additional 106 cases as well as the 312 randomized participants.</p>
<p>A nearly identical data set found in appendix D of Fleming and Harrington; this version has fewer missing values.</p>
<h3>Usage</h3>
<pre>pbc</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">in years</td>
</tr>
<tr>
<td style="text-align: left;">albumin:</td>
<td style="text-align: left;">serum albumin (g/dl)</td>
</tr>
<tr>
<td style="text-align: left;">alk.phos:</td>
<td style="text-align: left;">alkaline phosphotase (U/liter)</td>
</tr>
<tr>
<td style="text-align: left;">ascites:</td>
<td style="text-align: left;">presence of ascites</td>
</tr>
<tr>
<td style="text-align: left;">ast:</td>
<td style="text-align: left;">aspartate aminotransferase, once called SGOT (U/ml)</td>
</tr>
<tr>
<td style="text-align: left;">bili:</td>
<td style="text-align: left;">serum bilirunbin (mg/dl)</td>
</tr>
<tr>
<td style="text-align: left;">chol:</td>
<td style="text-align: left;">serum cholesterol (mg/dl)</td>
</tr>
<tr>
<td style="text-align: left;">copper:</td>
<td style="text-align: left;">urine copper (ug/day)</td>
</tr>
<tr>
<td style="text-align: left;">edema:</td>
<td style="text-align: left;">0 no edema, 0.5 untreated or successfully treated</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">1 edema despite diuretic therapy</td>
</tr>
<tr>
<td style="text-align: left;">hepato:</td>
<td style="text-align: left;">presence of hepatomegaly or enlarged liver</td>
</tr>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">case number</td>
</tr>
<tr>
<td style="text-align: left;">platelet:</td>
<td style="text-align: left;">platelet count</td>
</tr>
<tr>
<td style="text-align: left;">protime:</td>
<td style="text-align: left;">standardised blood clotting time</td>
</tr>
<tr>
<td style="text-align: left;">sex:</td>
<td style="text-align: left;">m/f</td>
</tr>
<tr>
<td style="text-align: left;">spiders:</td>
<td style="text-align: left;">blood vessel malformations in the skin</td>
</tr>
<tr>
<td style="text-align: left;">stage:</td>
<td style="text-align: left;">histologic stage of disease (needs biopsy)</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">status at endpoint, 0/1/2 for censored, transplant, dead</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">number of days between registration and the earlier of death,</td>
</tr>
<tr>
<td style="text-align: left;"></td>
<td style="text-align: left;">transplantion, or study analysis in July, 1986</td>
</tr>
<tr>
<td style="text-align: left;">trt:</td>
<td style="text-align: left;">1/2/NA for D-penicillmain, placebo, not randomised</td>
</tr>
<tr>
<td style="text-align: left;">trig:</td>
<td style="text-align: left;">triglycerides (mg/dl)</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Source</h3>
<p>T Therneau and P Grambsch (2000), <em>Modeling Survival Data: Extending the Cox Model</em>, Springer-Verlag, New York. ISBN: 0-387-98784-3.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10259.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10259.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-pbc.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10259.json';</script>