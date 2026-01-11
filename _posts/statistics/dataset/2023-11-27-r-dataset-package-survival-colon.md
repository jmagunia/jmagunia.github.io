---
title: R Dataset / Package survival / colon
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">colon</span> data set which pertains to Chemotherapy for Stage B/C colon cancer. The <span class="mono">colon</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">colon</span> data set in R by issuing the following command at the console <span class="mono">data("colon")</span>. This will load the data into a variable called <span class="mono">colon</span>. If R says the <span class="mono">colon</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42025.csv">colon R data set</a></span>. The size of this file is about 79,828 bytes.</p><h2>Chemotherapy for Stage B/C colon cancer</h2>
<h3>Description</h3>
<p>These are data from one of the first successful trials of adjuvant chemotherapy for colon cancer. Levamisole is a low-toxicity compound previously used to treat worm infestations in animals; 5-FU is a moderately toxic (as these things go) chemotherapy agent. There are two records per person, one for recurrence and one for death</p>
<h3>Usage</h3>
<pre>colon</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;">id:</td>
<td style="text-align: left;">id</td>
</tr>
<tr>
<td style="text-align: left;">study:</td>
<td style="text-align: left;">1 for all patients</td>
</tr>
<tr>
<td style="text-align: left;">rx:</td>
<td style="text-align: left;">Treatment - Obs(ervation), Lev(amisole), Lev(amisole)+5-FU</td>
</tr>
<tr>
<td style="text-align: left;">sex:</td>
<td style="text-align: left;">1=male</td>
</tr>
<tr>
<td style="text-align: left;">age:</td>
<td style="text-align: left;">in years</td>
</tr>
<tr>
<td style="text-align: left;">obstruct:</td>
<td style="text-align: left;">obstruction of colon by tumour</td>
</tr>
<tr>
<td style="text-align: left;">perfor:</td>
<td style="text-align: left;">perforation of colon</td>
</tr>
<tr>
<td style="text-align: left;">adhere:</td>
<td style="text-align: left;">adherence to nearby organs</td>
</tr>
<tr>
<td style="text-align: left;">nodes:</td>
<td style="text-align: left;">number of lymph nodes with detectable cancer</td>
</tr>
<tr>
<td style="text-align: left;">time:</td>
<td style="text-align: left;">days until event or censoring</td>
</tr>
<tr>
<td style="text-align: left;">status:</td>
<td style="text-align: left;">censoring status</td>
</tr>
<tr>
<td style="text-align: left;">differ:</td>
<td style="text-align: left;">differentiation of tumour (1=well, 2=moderate, 3=poor)</td>
</tr>
<tr>
<td style="text-align: left;">extent:</td>
<td style="text-align: left;">Extent of local spread (1=submucosa, 2=muscle, 3=serosa, 4=contiguous structures)</td>
</tr>
<tr>
<td style="text-align: left;">surg:</td>
<td style="text-align: left;">time from surgery to registration (0=short, 1=long)</td>
</tr>
<tr>
<td style="text-align: left;">node4:</td>
<td style="text-align: left;">more than 4 positive lymph nodes</td>
</tr>
<tr>
<td style="text-align: left;">etype:</td>
<td style="text-align: left;">event type: 1=recurrence,2=death</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Note</h3>
<p>The study is originally described in Laurie (1989). The main report is found in Moertel (1990). This data set is closest to that of the final report in Moertel (1991). A version of the data with less follow-up time was used in the paper by Lin (1994).</p>
<h3>References</h3>
<p>JA Laurie, CG Moertel, TR Fleming, HS Wieand, JE Leigh, J Rubin, GW McCormack, JB Gerstner, JE Krook and J Malliard. Surgical adjuvant therapy of large-bowel carcinoma: An evaluation of levamisole and the combination of levamisole and fluorouracil: The North Central Cancer Treatment Group and the Mayo Clinic. J Clinical Oncology, 7:1447-1456, 1989.</p>
<p>DY Lin. Cox regression analysis of multivariate failure time data: the marginal approach. Statistics in Medicine, 13:2233-2247, 1994.</p>
<p>CG Moertel, TR Fleming, JS MacDonald, DG Haller, JA Laurie, PJ Goodman, JS Ungerleider, WA Emerson, DC Tormey, JH Glick, MH Veeder and JA Maillard. Levamisole and fluorouracil for adjuvant therapy of resected colon carcinoma. New England J of Medicine, 332:352-358, 1990.</p>
<p>CG Moertel, TR Fleming, JS MacDonald, DG Haller, JA Laurie, CM Tangen, JS Ungerleider, WA Emerson, DC Tormey, JH Glick, MH Veeder and JA Maillard, Fluorouracil plus Levamisole as an effective adjuvant therapy after resection of stage II colon carcinoma: a final report. Annals of Internal Med, 122:321-326, 1991.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42025.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42025.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-colon.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42025.json';</script>