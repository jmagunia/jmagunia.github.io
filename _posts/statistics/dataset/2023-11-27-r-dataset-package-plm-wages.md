---
title: R Dataset / Package plm / Wages
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Wages</span> data set which pertains to Panel Data of Individual Wages. The <span class="mono">Wages</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">Wages</span> data set in R by issuing the following command at the console <span class="mono">data("Wages")</span>. This will load the data into a variable called <span class="mono">Wages</span>. If R says the <span class="mono">Wages</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-31267.csv">Wages R data set</a></span>. The size of this file is about 243,838 bytes.</p><h2>Panel Data of Individual Wages</h2>
<h3>Description</h3>
<p>A panel of 595 individuals from 1976 to 1982, taken from the Panel Study of Income Dynamics (PSID).The data are organized as a stacked time series/balanced panel, see <b>Examples</b> on how to convert to a <code>pdata.frame</code>.</p>
<p><em>total number of observations</em> : 4165</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(Wages)</pre>
<h3>Format</h3>
<p>A data frame containing:</p>
<dl>
<dt>exp</dt>
<dd>
<p>years of full-time work experience.</p>
</dd>
<dt>wks</dt>
<dd>
<p>weeks worked.</p>
</dd>
<dt>bluecol</dt>
<dd>
<p>blue collar?</p>
</dd>
<dt>ind</dt>
<dd>
<p>works in a manufacturing industry?</p>
</dd>
<dt>south</dt>
<dd>
<p>resides in the south?</p>
</dd>
<dt>smsa</dt>
<dd>
<p>resides in a standard metropolitan statistical area?</p>
</dd>
<dt>married</dt>
<dd>
<p>married?</p>
</dd>
<dt>sex</dt>
<dd>
<p>a factor with levels <code>"male"</code> and <code>"female"</code></p>
</dd>
<dt>union</dt>
<dd>
<p>individual's wage set by a union contract?</p>
</dd>
<dt>ed</dt>
<dd>
<p>years of education.</p>
</dd>
<dt>black</dt>
<dd>
<p>is the individual black?</p>
</dd>
<dt>lwage</dt>
<dd>
<p>logarithm of wage.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Online complements to Baltagi (2001):</p>
<p><a href="http://www.wiley.com/legacy/wileychi/baltagi/">http://www.wiley.com/legacy/wileychi/baltagi/</a></p>
<p>Online complements to Baltagi (2013):</p>
<p><a href="http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452">http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452</a></p>
<h3>References</h3>
<p>Baltagi, Badi H. (2001) <em>Econometric Analysis of Panel Data</em>, 2nd ed., John Wiley and Sons.</p>
<p>Baltagi, Badi H. (2013) <em>Econometric Analysis of Panel Data</em>, 5th ed., John Wiley and Sons.</p>
<p>Cornwell, C. and P. Rupert (1988) “Efficient estimation with panel data: an empirical comparison of instrumental variables estimators”, <em>Journal of Applied Econometrics</em>, <b>3</b>(2), pp. 149–155.</p>
<h3>Examples</h3>
<pre>
# data set 'Wages' is organized as a stacked time series/balanced panel
data("Wages", package = "plm")
Wag &lt;- pdata.frame(Wages, index=595)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-31267.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-31267.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-wages.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-31267.json';</script>