---
title: R Dataset / Package plm / Crime
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Crime</span> data set which pertains to Crime in North Carolina. The <span class="mono">Crime</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">Crime</span> data set in R by issuing the following command at the console <span class="mono">data("Crime")</span>. This will load the data into a variable called <span class="mono">Crime</span>. If R says the <span class="mono">Crime</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28105.csv">Crime R data set</a></span>. The size of this file is about 119,122 bytes.</p><h2>Crime in North Carolina</h2>
<h3>Description</h3>
<p>a panel of 90 observational units (counties) from 1981 to 1987</p>
<p><em>total number of observations</em> : 630</p>
<p><em>observation</em> : regional</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(Crime)</pre>
<h3>Format</h3>
<p>A data frame containing :</p>
<dl>
<dt>county</dt>
<dd>
<p>county identifier</p>
</dd>
<dt>year</dt>
<dd>
<p>year from 1981 to 1987</p>
</dd>
<dt>crmrte</dt>
<dd>
<p>crimes committed per person</p>
</dd>
<dt>prbarr</dt>
<dd>
<p>'probability' of arrest</p>
</dd>
<dt>prbconv</dt>
<dd>
<p>'probability' of conviction</p>
</dd>
<dt>prbpris</dt>
<dd>
<p>'probability' of prison sentence</p>
</dd>
<dt>avgsen</dt>
<dd>
<p>average sentence, days</p>
</dd>
<dt>polpc</dt>
<dd>
<p>police per capita</p>
</dd>
<dt>density</dt>
<dd>
<p>people per square mile</p>
</dd>
<dt>taxpc</dt>
<dd>
<p>tax revenue per capita</p>
</dd>
<dt>region</dt>
<dd>
<p>factor. One of 'other', 'west' or 'central'.</p>
</dd>
<dt>smsa</dt>
<dd>
<p>factor. Does the individual reside in a SMSA (standard metropolitan statistical area)?</p>
</dd>
<dt>pctmin</dt>
<dd>
<p>percentage minority in 1980</p>
</dd>
<dt>wcon</dt>
<dd>
<p>weekly wage in construction</p>
</dd>
<dt>wtuc</dt>
<dd>
<p>weekly wage in trns, util, commun</p>
</dd>
<dt>wtrd</dt>
<dd>
<p>weekly wage in whole sales and retail trade</p>
</dd>
<dt>wfir</dt>
<dd>
<p>weekly wage in finance, insurance and real estate</p>
</dd>
<dt>wser</dt>
<dd>
<p>weekly wage in service industry</p>
</dd>
<dt>wmfg</dt>
<dd>
<p>weekly wage in manufacturing</p>
</dd>
<dt>wfed</dt>
<dd>
<p>weekly wage of federal employees</p>
</dd>
<dt>wsta</dt>
<dd>
<p>weekly wage of state employees</p>
</dd>
<dt>wloc</dt>
<dd>
<p>weekly wage of local governments employees</p>
</dd>
<dt>mix</dt>
<dd>
<p>offence mix: face-to-face/other</p>
</dd>
<dt>pctymle</dt>
<dd>
<p>percentage of young males</p>
</dd>
</dl>
<h3>Source</h3>
<p>Online complements to Baltagi (2001):</p>
<p><a href="http://www.wiley.com/legacy/wileychi/baltagi/">http://www.wiley.com/legacy/wileychi/baltagi/</a></p>
<p>Online complements to Baltagi (2013):</p>
<p><a href="http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452">http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452</a></p>
<p>See also Journal of Applied Econometrics data archive entry for Baltagi (2006) at <a href="http://qed.econ.queensu.ca/jae/2006-v21.4/baltagi/">http://qed.econ.queensu.ca/jae/2006-v21.4/baltagi/</a>.</p>
<h3>References</h3>
<p>Cornwell, C. and W.N. Trumbull (1994) “Estimating the economic model of crime with panel data”, <em>Review of Economics and Statistics</em>, <b>76</b>(2), pp. 360–366.</p>
<p>Baltagi, B. H. (2006) “Estimating an economic model of crime using panel data from North Carolina”, <em>Journal of Applied Econometrics</em>, <b>21</b>(4), pp. 543–547.</p>
<p>Baltagi, Badi H. (2001) <em>Econometric Analysis of Panel Data</em>, 2nd ed., John Wiley and Sons.</p>
<p>Baltagi, Badi H. (2013) <em>Econometric Analysis of Panel Data</em>, 5th ed., John Wiley and Sons.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28105.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28105.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-crime.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28105.json';</script>