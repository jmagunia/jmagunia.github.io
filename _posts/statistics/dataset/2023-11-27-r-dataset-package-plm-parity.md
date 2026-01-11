---
title: R Dataset / Package plm / Parity
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Parity</span> data set which pertains to Purchasing Power Parity and other parity relationships. The <span class="mono">Parity</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">Parity</span> data set in R by issuing the following command at the console <span class="mono">data("Parity")</span>. This will load the data into a variable called <span class="mono">Parity</span>. If R says the <span class="mono">Parity</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86319.csv">Parity R data set</a></span>. The size of this file is about 128,898 bytes.</p><h2>Purchasing Power Parity and other parity relationships</h2>
<h3>Description</h3>
<p>A panel of 104 quarterly observations from 1973Q1 to 1998Q4</p>
<p><em>total number of observations</em> : 1768</p>
<p><em>observation</em> : country</p>
<p><em>country</em> : OECD</p>
<h3>Usage</h3>
<pre>data(Parity)</pre>
<h3>Format</h3>
<p>A data frame containing :</p>
<dl>
<dt>country</dt>
<dd>
<p>country codes: a factor with 17 levels</p>
</dd>
<dt>time</dt>
<dd>
<p>the quarter index, 1973Q1-1998Q4</p>
</dd>
<dt>ls</dt>
<dd>
<p>log spot exchange rate vs. USD</p>
</dd>
<dt>lp</dt>
<dd>
<p>log price level</p>
</dd>
<dt>is</dt>
<dd>
<p>short term interest rate</p>
</dd>
<dt>il</dt>
<dd>
<p>long term interest rate</p>
</dd>
<dt>ld</dt>
<dd>
<p>log price differential vs. USA</p>
</dd>
<dt>uis</dt>
<dd>
<p>U.S. short term interest rate</p>
</dd>
<dt>uil</dt>
<dd>
<p>U.S. long term interest rate</p>
</dd>
</dl>
<h3>Source</h3>
<p>Coakley, J., Fuertes, A. M., and Smith, R. (2006) “Unobserved heterogeneity in panel time series models”, <em>Computational Statistics &amp; Data Analysis</em>, <b>50</b>(9), 2361–2380.</p>
<h3>References</h3>
<p>Coakley, J., Fuertes, A. M., and Smith, R. (2006) “Unobserved heterogeneity in panel time series models”, <em>Computational Statistics &amp; Data Analysis</em>, <b>50</b>(9), 2361–2380.</p>
<p>Driscoll, J. C., and Kraay, A. C. (1998). “Consistent covariance matrix estimation with spatially dependent panel data”, <em>Review of Economics and Statistics</em>, <b>80</b>(4), 549–560.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86319.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86319.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-parity.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86319.json';</script>