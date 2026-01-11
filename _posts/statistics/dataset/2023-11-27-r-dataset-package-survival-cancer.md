---
title: R Dataset / Package survival / cancer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cancer</span> data set which pertains to NCCTG Lung Cancer Data. The <span class="mono">cancer</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">cancer</span> data set in R by issuing the following command at the console <span class="mono">data("cancer")</span>. This will load the data into a variable called <span class="mono">cancer</span>. If R says the <span class="mono">cancer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42792.csv">cancer R data set</a></span>. The size of this file is about 6,593 bytes.</p><h2>NCCTG Lung Cancer Data</h2>
<h3>Description</h3>
<p>Survival in patients with advanced lung cancer from the North Central Cancer Treatment Group. Performance scores rate how well the patient can perform usual daily activities.</p>
<h3>Usage</h3>
<pre>
lung
cancer
</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">inst:</td>
<td style="text-align: left;">Institution code</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">Survival time in days</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">censoring status 1=censored, 2=dead</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">Age in years</td>
</tr>
<tr>
<td style="text-align: left;">sex:</td>
<td style="text-align: left;">Male=1 Female=2</td>
</tr>
<tr>
<td style="text-align: left;">ph.ecog:</td>
<td style="text-align: left;">ECOG performance score (0=good 5=dead)</td>
</tr>
<tr>
<td style="text-align: left;">ph.karno:</td>
<td style="text-align: left;">Karnofsky performance score (bad=0-good=100) rated by physician</td>
</tr>
<tr>
<td style="text-align: left;">pat.karno:</td>
<td style="text-align: left;">Karnofsky performance score as rated by patient</td>
</tr>
<tr>
<td style="text-align: left;">meal.cal:</td>
<td style="text-align: left;">Calories consumed at meals</td>
</tr>
<tr>
<td style="text-align: left;">wt.loss:</td>
<td style="text-align: left;">Weight loss in last six months</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Source</h3>
<p>Terry Therneau</p>
<h3>References</h3>
<p>Loprinzi CL. Laurie JA. Wieand HS. Krook JE. Novotny PJ. Kugler JW. Bartel J. Law M. Bateman M. Klatt NE. et al. Prospective evaluation of prognostic variables from patient-completed questionnaires. North Central Cancer Treatment Group. Journal of Clinical Oncology. 12(3):601-7, 1994.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42792.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42792.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-cancer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42792.json';</script>