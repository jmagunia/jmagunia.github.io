---
title: R Dataset / Package car / AMSsurvey
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">AMSsurvey</span> data set which pertains to American Math Society Survey Data. The <span class="mono">AMSsurvey</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">AMSsurvey</span> data set in R by issuing the following command at the console <span class="mono">data("AMSsurvey")</span>. This will load the data into a variable called <span class="mono">AMSsurvey</span>. If R says the <span class="mono">AMSsurvey</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-36231.csv">AMSsurvey R data set</a></span>. The size of this file is about 703 bytes.</p><h2>American Math Society Survey Data</h2>
<h3>Description</h3>
<p>Counts of new PhDs in the mathematical sciences for 2008-09 and 2011-12 categorized by type of institution, gender, and US citizenship status.</p>
<h3>Usage</h3>
<pre>AMSsurvey</pre>
<h3>Format</h3>
<p>A data frame with 24 observations on the following 5 variables.</p>
<dl>
<dt>type</dt>
<dd>
<p>a factor with levels <code>I(Pu)</code> for group I public universities, <code>I(Pr)</code> for group I private universities, <code>II</code> and <code>III</code> for groups II and III, <code>IV</code> for statistics and biostatistics programs, and <code>Va</code> for applied mathemeatics programs.</p>
</dd>
<dt>sex</dt>
<dd>
<p>a factor with levels <code>Female</code>, <code>Male</code> of the recipient</p>
</dd>
<dt>citizen</dt>
<dd>
<p>a factor with levels <code>Non-US</code>, <code>US</code> giving citizenship status</p>
</dd>
<dt>count</dt>
<dd>
<p>The number of individuals of each type in 2008-09</p>
</dd>
<dt>count11</dt>
<dd>
<p>The number of individuals of each type in 2011-12</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data are produced yearly by the American Math Society.</p>
<h3>Source</h3>
<p><a href="http://www.ams.org/employment/surveyreports.html">http://www.ams.org/employment/surveyreports.html</a> Supplementary Table 4 in the 2008-09 data. See <a href="http://www.ams.org/profession/data/annual-survey/docsgrtd">http://www.ams.org/profession/data/annual-survey/docsgrtd</a> for more recent data.</p>
<h3>References</h3>
<p>Fox, J. and Weisberg, S. (2011) <em>An R Companion to Applied Regression</em>, Second Edition, Sage.</p>
<p>Phipps, Polly, Maxwell, James W. and Rose, Colleen (2009), <em>2009 Annual Survey of the Mathematical Sciences</em>, 57, 250–259, Supplementary Table 4, <a href="http://www.ams.org/employment/2009Survey-First-Report-Supp-Table4.pdf">http://www.ams.org/employment/2009Survey-First-Report-Supp-Table4.pdf</a></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-36231.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-36231.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-amssurvey.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-36231.json';</script>