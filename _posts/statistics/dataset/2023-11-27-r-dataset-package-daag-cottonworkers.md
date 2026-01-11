---
title: R Dataset / Package DAAG / cottonworkers
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cottonworkers</span> data set which pertains to Occupation and wage profiles of British cotton workers. The <span class="mono">cottonworkers</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cottonworkers</span> data set in R by issuing the following command at the console <span class="mono">data("cottonworkers")</span>. This will load the data into a variable called <span class="mono">cottonworkers</span>. If R says the <span class="mono">cottonworkers</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-35053.csv">cottonworkers R data set</a></span>. The size of this file is about 360 bytes.</p><h2>Occupation and wage profiles of British cotton workers</h2>
<h3>Description</h3>
<p>Numbers are given in different categories of worker, in each of two investigations. The first source of information is the Board of Trade Census that was conducted on 1886. The second is a relatively informal survey conducted by US Bureau of Labor representatives in 1889, for use in official reports.</p>
<h3>Usage</h3>
<pre>data(cottonworkers)</pre>
<h3>Format</h3>
<p>A data frame with 14 observations on the following 3 variables.</p>
<dl>
<dt>census1886</dt>
<dd>
<p>Numbers of workers in each of 14 different categories, according to the Board of Trade wage census that was conducted in 1886</p>
</dd>
<dt>survey1889</dt>
<dd>
<p>Numbers of workers in each of 14 different categories, according to data collected in 1889 by the US Bureau of Labor, for use in a report to the US Congress and House of Representatives</p>
</dd>
<dt>avwage</dt>
<dd>
<p>Average wage, in pence, as estimated in the US Bureau of Labor survey</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data in <code>survey1889</code> were collected in a relatively informal manner, by approaching individuals on the street. Biases might therefore be expected.</p>
<h3>Source</h3>
<p>United States congress, House of Representatives, Sixth Annual Report of the Commissioner of Labor, 1890, Part III, Cost of Living (Washington D.C. 1891); idem., Seventh Annual Report of the Commissioner of Labor, 1891, Part III, Cost of Living (Washington D.C. 1892)</p>
<p>Return of wages in the principal textile trades of the United Kingdom, with report therein. (P.P. 1889, LXX). United Kingdom Official Publication.</p>
<h3>References</h3>
<p>Boot, H. M. and Maindonald, J. H. 2007. New estimates of age- and sex- specific earnings and the male-female earnings gap in the British cotton industry, 1833-1906. <em>Economic History Review</em>. Published online 28-Aug-2007 doi: 10.1111/j.1468-0289.2007.00398.x</p>
<h3>Examples</h3>
<pre>
data(cottonworkers)
str(cottonworkers)
plot(survey1889 ~ census1886, data=cottonworkers)
plot(I(avwage*survey1889) ~ I(avwage*census1886), data=cottonworkers)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-35053.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-35053.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cottonworkers.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-35053.json';</script>