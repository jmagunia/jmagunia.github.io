---
title: R Dataset / Package car / Greene
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Greene</span> data set which pertains to Refugee Appeals. The <span class="mono">Greene</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Greene</span> data set in R by issuing the following command at the console <span class="mono">data("Greene")</span>. This will load the data into a variable called <span class="mono">Greene</span>. If R says the <span class="mono">Greene</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81026.csv">Greene R data set</a></span>. The size of this file is about 23,274 bytes.</p><h2>Refugee Appeals</h2>
<h3>Description</h3>
<p>The <code>Greene</code> data frame has 384 rows and 7 columns. These are cases filed in 1990, in which refugee claimants rejected by the Canadian Immigration and Refugee Board asked the Federal Court of Appeal for leave to appeal the negative ruling of the Board.</p>
<h3>Usage</h3>
<pre>
Greene
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>judge</dt>
<dd>
<p>Name of judge hearing case. A factor with levels: <code>Desjardins</code>, <code>Heald</code>, <code>Hugessen</code>, <code>Iacobucci</code>, <code>MacGuigan</code>, <code>Mahoney</code>, <code>Marceau</code>, <code>Pratte</code>, <code>Stone</code>, <code>Urie</code>.</p>
</dd>
<dt>nation</dt>
<dd>
<p>Nation of origin of claimant. A factor with levels: <code>Argentina</code>, <code>Bulgaria</code>, <code>China</code>, <code>Czechoslovakia</code>, <code>El.Salvador</code>, <code>Fiji</code>, <code>Ghana</code>, <code>Guatemala</code>, <code>India</code>, <code>Iran</code>, <code>Lebanon</code>, <code>Nicaragua</code>, <code>Nigeria</code>, <code>Pakistan</code>, <code>Poland</code>, <code>Somalia</code>, <code>Sri.Lanka</code>.</p>
</dd>
<dt>rater</dt>
<dd>
<p>Judgment of independent rater. A factor with levels: <code>no</code>, case has no merit; <code>yes</code>, case has some merit (leave to appeal should be granted).</p>
</dd>
<dt>decision</dt>
<dd>
<p>Judge's decision. A factor with levels: <code>no</code>, leave to appeal not granted; <code>yes</code>, leave to appeal granted.</p>
</dd>
<dt>language</dt>
<dd>
<p>Language of case. A factor with levels: <code>English</code>, <code>French</code>.</p>
</dd>
<dt>location</dt>
<dd>
<p>Location of original refugee claim. A factor with levels: <code>Montreal</code>, <code>other</code>, <code>Toronto</code>.</p>
</dd>
<dt>success</dt>
<dd>
<p>Logit of success rate, for all cases from the applicant's nation.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Personal communication from Ian Greene, Department of Political Science, York University.</p>
<h3>References</h3>
<p>Fox, J. (2008) <em>Applied Regression Analysis and Generalized Linear Models</em>, Second Edition. Sage.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81026.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81026.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-greene.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81026.json';</script>