---
title: R Dataset / Package wooldridge / crime4
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">crime4</span> data set which pertains to crime4. The <span class="mono">crime4</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">crime4</span> data set in R by issuing the following command at the console <span class="mono">data("crime4")</span>. This will load the data into a variable called <span class="mono">crime4</span>. If R says the <span class="mono">crime4</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57324.csv">crime4 R data set</a></span>. The size of this file is about 536,646 bytes.</p><h2>crime4</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(crime4) into the console.</p>
<h3>Usage</h3>
<pre>
data(crime4)
</pre>
<h3>Format</h3>
<p>A data.frame with 630 rows and 59 variables:</p>
<ul>
<li>
<p>county. county identifier</p>
</li>
<li>
<p>year. 81 to 87</p>
</li>
<li>
<p>crmrte. crimes committed per person</p>
</li>
<li>
<p>prbarr. 'probability' of arrest</p>
</li>
<li>
<p>prbconv. 'probability' of conviction</p>
</li>
<li>
<p>prbpris. 'probability' of prison sentenc</p>
</li>
<li>
<p>avgsen. avg. sentence, days</p>
</li>
<li>
<p>polpc. police per capita</p>
</li>
<li>
<p>density. people per sq. mile</p>
</li>
<li>
<p>taxpc. tax revenue per capita</p>
</li>
<li>
<p>west. =1 if in western N.C.</p>
</li>
<li>
<p>central. =1 if in central N.C.</p>
</li>
<li>
<p>urban. =1 if in SMSA</p>
</li>
<li>
<p>pctmin80. perc. minority, 1980</p>
</li>
<li>
<p>wcon. weekly wage, construction</p>
</li>
<li>
<p>wtuc. wkly wge, trns, util, commun</p>
</li>
<li>
<p>wtrd. wkly wge, whlesle, retail trade</p>
</li>
<li>
<p>wfir. wkly wge, fin, ins, real est</p>
</li>
<li>
<p>wser. wkly wge, service industry</p>
</li>
<li>
<p>wmfg. wkly wge, manufacturing</p>
</li>
<li>
<p>wfed. wkly wge, fed employees</p>
</li>
<li>
<p>wsta. wkly wge, state employees</p>
</li>
<li>
<p>wloc. wkly wge, local gov emps</p>
</li>
<li>
<p>mix. offense mix: face-to-face/other</p>
</li>
<li>
<p>pctymle. percent young male</p>
</li>
<li>
<p>d82. =1 if year == 82</p>
</li>
<li>
<p>d83. =1 if year == 83</p>
</li>
<li>
<p>d84. =1 if year == 84</p>
</li>
<li>
<p>d85. =1 if year == 85</p>
</li>
<li>
<p>d86. =1 if year == 86</p>
</li>
<li>
<p>d87. =1 if year == 87</p>
</li>
<li>
<p>lcrmrte. log(crmrte)</p>
</li>
<li>
<p>lprbarr. log(prbarr)</p>
</li>
<li>
<p>lprbconv. log(prbconv)</p>
</li>
<li>
<p>lprbpris. log(prbpris)</p>
</li>
<li>
<p>lavgsen. log(avgsen)</p>
</li>
<li>
<p>lpolpc. log(polpc)</p>
</li>
<li>
<p>ldensity. log(density)</p>
</li>
<li>
<p>ltaxpc. log(taxpc)</p>
</li>
<li>
<p>lwcon. log(wcon)</p>
</li>
<li>
<p>lwtuc. log(wtuc)</p>
</li>
<li>
<p>lwtrd. log(wtrd)</p>
</li>
<li>
<p>lwfir. log(wfir)</p>
</li>
<li>
<p>lwser. log(wser)</p>
</li>
<li>
<p>lwmfg. log(wmfg)</p>
</li>
<li>
<p>lwfed. log(wfed)</p>
</li>
<li>
<p>lwsta. log(wsta)</p>
</li>
<li>
<p>lwloc. log(wloc)</p>
</li>
<li>
<p>lmix. log(mix)</p>
</li>
<li>
<p>lpctymle. log(pctymle)</p>
</li>
<li>
<p>lpctmin. log(pctmin)</p>
</li>
<li>
<p>clcrmrte. lcrmrte - lcrmrte[_n-1]</p>
</li>
<li>
<p>clprbarr. lprbarr - lprbarr[_n-1]</p>
</li>
<li>
<p>clprbcon. lprbconv - lprbconv[_n-1]</p>
</li>
<li>
<p>clprbpri. lprbpri - lprbpri[t-1]</p>
</li>
<li>
<p>clavgsen. lavgsen - lavgsen[t-1]</p>
</li>
<li>
<p>clpolpc. lpolpc - lpolpc[t-1]</p>
</li>
<li>
<p>cltaxpc. ltaxpc - ltaxpc[t-1]</p>
</li>
<li>
<p>clmix. lmix - lmix[t-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(crime4)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57324.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57324.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-crime4.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57324.json';</script>