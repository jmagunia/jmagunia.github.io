---
title: R Dataset / Package Zelig / PErisk
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PErisk</span> data set which pertains to Political Economic Risk Data from 62 Countries in 1987. The <span class="mono">PErisk</span> data set is found in the <span class="mono">Zelig</span> R package. You can load the <span class="mono">PErisk</span> data set in R by issuing the following command at the console <span class="mono">data("PErisk")</span>. This will load the data into a variable called <span class="mono">PErisk</span>. If R says the <span class="mono">PErisk</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Zelig")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62632.csv">PErisk R data set</a></span>. The size of this file is about 2,835 bytes.</p><h2>Political Economic Risk Data from 62 Countries in 1987</h2>
<h3>Description</h3>
<p>Political Economic Risk Data from 62 Countries in 1987.</p>
<h3>Usage</h3>
<pre>data(PErisk)</pre>
<h3>Format</h3>
<p>A data frame with 62 observations on the following 6 variables. All data points are from 1987. See Quinn (2004) for more details.</p>
<p>country: a factor with levels 'Argentina' 'Australia' 'Austria' 'Bangladesh' 'Belgium' 'Bolivia' 'Botswana' 'Brazil' 'Burma' 'Cameroon' 'Canada' 'Chile' 'Colombia' 'Congo-Kinshasa' 'Costa Rica' 'Cote d'Ivoire' 'Denmark' 'Dominican Republic' 'Ecuador' 'Finland' 'Gambia, The' 'Ghana' 'Greece' 'Hungary' 'India' 'Indonesia' 'Iran' 'Ireland' 'Israel' 'Italy' 'Japan' 'Kenya' 'Korea, South' 'Malawi' 'Malaysia' 'Mexico' 'Morocco' 'New Zealand' 'Nigeria' 'Norway' 'Papua New Guinea' 'Jayuay' 'Philippines' 'Poland' 'Portugal' 'Sierra Leone' 'Singapore' 'South Africa' 'Spain' 'Sri Lanka' 'Sweden' 'Switzerland' 'Syria' 'Thailand' 'Togo' 'Tunisia' 'Turkey' 'United Kingdom' 'Uruguay' 'Venezuela' 'Zambia' 'Zimbabwe'</p>
<p>courts: an ordered factor with levels '0' &lt; '1'.'courts' is an indicator of whether the country in question is judged to have an independent judiciary. From Henisz (2002).</p>
<p>barb2: a numeric vector giving the natural log of the black market premium in each country. The black market premium is coded as the black market exchange rate (local currency per dollar) divided by the official exchange rate minus 1. From Marshall, Gurr, and Harff (2002).</p>
<p>prsexp2: an ordered factor with levels '0' &lt; '1' &lt; '2' &lt; '3' &lt; '4' &lt; '5', giving the lack of expropriation risk. From Marshall, Gurr, and Harff (2002).</p>
<p>prscorr2: an ordered factor with levels '0' &lt; '1' &lt; '2' &lt; '3' &lt; '4' &lt; '5', measuring the lack of corruption. From Marshall, Gurr, and Harff (2002).</p>
<p>gdpw2: a numeric vector giving the natural log of real GDP per worker in 1985 international prices. From Alvarez et al. (1999).</p>
<h3>Source</h3>
<p>Mike Alvarez, Jose Antonio Cheibub, Fernando Limongi, and Adam Przeworski. 1999. “ACLP Political and Economic Database.” &lt;URL: <a href="http://www.ssc.upenn.edu/~cheibub/data/&amp;gt">http://www.ssc.upenn.edu/~cheibub/data/&amp;gt</a>;.</p>
<p>Witold J. Henisz. 2002. “The Political Constraint Index (POLCON) Dataset.” \ &lt;URL: <a href="http://www-management.wharton.upenn.edu/henisz/POLCON/ContactInfo">http://www-management.wharton.upenn.edu/henisz/POLCON/ContactInfo</a>. html&gt;.</p>
<p>Monty G. Marshall, Ted Robert Gurr, and Barbara Harff. 2002. “State Failure Task Force Problem Set.” &lt;URL: <a href="http://www.cidcm.umd.edu/inscr/stfail/index.htm&amp;gt">http://www.cidcm.umd.edu/inscr/stfail/index.htm&amp;gt</a>;.</p>
<h3>References</h3>
<p>Kevin M. Quinn. 2004. “Bayesian Factor Analysis for Mixed Ordinal and Continuous Response.” <em>Political Analyis</em>. Vol. 12, pp.338–353.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62632.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62632.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-zelig-perisk.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62632.json';</script>