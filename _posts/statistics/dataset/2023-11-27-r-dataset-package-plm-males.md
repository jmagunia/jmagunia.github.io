---
title: R Dataset / Package plm / Males
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Males</span> data set which pertains to Wages and Education of Young Males. The <span class="mono">Males</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">Males</span> data set in R by issuing the following command at the console <span class="mono">data("Males")</span>. This will load the data into a variable called <span class="mono">Males</span>. If R says the <span class="mono">Males</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-52319.csv">Males R data set</a></span>. The size of this file is about 458,617 bytes.</p><h2>Wages and Education of Young Males</h2>
<h3>Description</h3>
<p>A panel of 545 observations from 1980 to 1987</p>
<p><em>total number of observations</em> : 4360</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(Males)</pre>
<h3>Format</h3>
<p>A data frame containing :</p>
<dl>
<dt>nr</dt>
<dd>
<p>identifier</p>
</dd>
<dt>year</dt>
<dd>
<p>year</p>
</dd>
<dt>school</dt>
<dd>
<p>years of schooling</p>
</dd>
<dt>exper</dt>
<dd>
<p>years of experience (computed as <code>age-6-school</code>)</p>
</dd>
<dt>union</dt>
<dd>
<p>wage set by collective bargaining ?</p>
</dd>
<dt>ethn</dt>
<dd>
<p>a factor with levels <code>black, hisp, other</code></p>
</dd>
<dt>married</dt>
<dd>
<p>married?</p>
</dd>
<dt>health</dt>
<dd>
<p>health problem ?</p>
</dd>
<dt>wage</dt>
<dd>
<p>log of hourly wage</p>
</dd>
<dt>industry</dt>
<dd>
<p>a factor with 12 levels</p>
</dd>
<dt>occupation</dt>
<dd>
<p>a factor with 9 levels</p>
</dd>
<dt>residence</dt>
<dd>
<p>a factor with levels <code>rural area, north east, northern central, south</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>Journal of Applied Econometrics data archive <a href="http://qed.econ.queensu.ca/jae/1998-v13.2/vella-verbeek/">http://qed.econ.queensu.ca/jae/1998-v13.2/vella-verbeek/</a>.</p>
<h3>References</h3>
<p>Vella, F. and M. Verbeek (1998) “Whose Wages Do Unions Raise? A Dynamic Model of Unionism and Wage Rate Determination for Young Men”, <em>Journal of Applied Econometrics</em>, <b>13</b>(2), pp. 163–183.</p>
<p>Verbeek, M. (2004) <em>A Guide to Modern Econometrics</em>, John Wiley and Sons, chapter 10.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-52319.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-52319.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-males.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-52319.json';</script>