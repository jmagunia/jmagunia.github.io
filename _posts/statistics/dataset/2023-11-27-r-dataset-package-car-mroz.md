---
title: R Dataset / Package car / Mroz
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Mroz</span> data set which pertains to U.S. Women's Labor-Force Participation. The <span class="mono">Mroz</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Mroz</span> data set in R by issuing the following command at the console <span class="mono">data("Mroz")</span>. This will load the data into a variable called <span class="mono">Mroz</span>. If R says the <span class="mono">Mroz</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-64461.csv">Mroz R data set</a></span>. The size of this file is about 49,879 bytes.</p><h2>U.S. Women's Labor-Force Participation</h2>
<h3>Description</h3>
<p>The <code>Mroz</code> data frame has 753 rows and 8 columns. The observations, from the Panel Study of Income Dynamics (PSID), are married women.</p>
<h3>Usage</h3>
<pre>Mroz</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>lfp</dt>
<dd>
<p>labor-force participation; a factor with levels: <code>no</code>; <code>yes</code>.</p>
</dd>
<dt>k5</dt>
<dd>
<p>number of children 5 years old or younger.</p>
</dd>
<dt>k618</dt>
<dd>
<p>number of children 6 to 18 years old.</p>
</dd>
<dt>age</dt>
<dd>
<p>in years.</p>
</dd>
<dt>wc</dt>
<dd>
<p>wife's college attendance; a factor with levels: <code>no</code>; <code>yes</code>.</p>
</dd>
<dt>hc</dt>
<dd>
<p>husband's college attendance; a factor with levels: <code>no</code>; <code>yes</code>.</p>
</dd>
<dt>lwg</dt>
<dd>
<p>log expected wage rate; for women in the labor force, the actual wage rate; for women not in the labor force, an imputed value based on the regression of <code>lwg</code> on the other variables.</p>
</dd>
<dt>inc</dt>
<dd>
<p>family income exclusive of wife's income.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Mroz, T. A. (1987) The sensitivity of an empirical model of married women's hours of work to economic and statistical assumptions. <em>Econometrica</em> <b>55</b>, 765–799.</p>
<h3>References</h3>
<p>Fox, J. (2008) <em>Applied Regression Analysis and Generalized Linear Models</em>, Second Edition. Sage.</p>
<p>Fox, J. (2000) <em>Multiple and Generalized Nonparametric Regression.</em> Sage.</p>
<p>Fox, J. and Weisberg, S. (2011) <em>An R Companion to Applied Regression</em>, Second Edition, Sage.</p>
<p>Long. J. S. (1997) <em>Regression Models for Categorical and Limited Dependent Variables.</em> Sage.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-64461.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-64461.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-mroz.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-64461.json';</script>