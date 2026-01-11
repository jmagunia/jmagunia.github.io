---
title: R Dataset / Package DAAG / hurricNamed
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hurricNamed</span> data set which pertains to Named US Atlantic Hurricanes. The <span class="mono">hurricNamed</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">hurricNamed</span> data set in R by issuing the following command at the console <span class="mono">data("hurricNamed")</span>. This will load the data into a variable called <span class="mono">hurricNamed</span>. If R says the <span class="mono">hurricNamed</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29652.csv">hurricNamed R data set</a></span>. The size of this file is about 7,982 bytes.</p><h2>Named US Atlantic Hurricanes</h2>
<h3>Description</h3>
<p>Details are given of atmospheric pressure at landfall, estimated damage in millions of dollars, and deaths, for named hurricanes that made landfall in the US mainland from 1950 through to 2012.</p>
<h3>Usage</h3>
<pre>data("hurricNamed")</pre>
<h3>Format</h3>
<p>A data frame with 94 observations on the following 11 variables.</p>
<dl>
<dt><code>Name</code></dt>
<dd>
<p>Hurricane name</p>
</dd>
<dt><code>Year</code></dt>
<dd>
<p>Numeric</p>
</dd>
<dt><code>LF.WindsMPH</code></dt>
<dd>
<p>Maximum sustained windspeed (&gt;= 1 minute) to occur along the US coast. Prior to 1980, this is estimated from the maximum windspeed associated with the Saffir-Simpson index at landfall. If 2 or more landfalls, the maximum is taken</p>
</dd>
<dt><code>LF.PressureMB</code></dt>
<dd>
<p>Atmospheric pressure at landfall in millibars. If 2 or more landfalls, the minimum is taken</p>
</dd>
<dt><code>LF.times</code></dt>
<dd>
<p>Date of first landfall</p>
</dd>
<dt><code>BaseDam2014</code></dt>
<dd>
<p>Property damage (millions of 2014 US dollars)</p>
</dd>
<dt><code>BaseDamage</code></dt>
<dd>
<p>Property damage (in millions of dollars for that year)</p>
</dd>
<dt><code>NDAM2014</code></dt>
<dd>
<p>Damage, had hurricane appeared in 2014</p>
</dd>
<dt><code>AffectedStates</code></dt>
<dd>
<p>Affected states (2-digit abbreviations), pasted together</p>
</dd>
<dt><code>firstLF</code></dt>
<dd>
<p>Date of first landfall</p>
</dd>
<dt><code>deaths</code></dt>
<dd>
<p>Number of continental US direct and indirect deaths</p>
</dd>
<dt><code>mf</code></dt>
<dd>
<p>Gender of name; a factor with levels <code>f</code> <code>m</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>An earlier version of these data was the subject of a controversial paper that claimed to have found that hurricanes with female names, presumably because taken less seriously, did more human damage after adjusting for the severity of the storm than those with male names.</p>
<h3>Source</h3>
<p><a href="http://www.icatdamageestimator.com/">http://www.icatdamageestimator.com/</a> Deaths except for Audrey and Katrina, are in the Excel file that is available from <a href="http://www.pnas.org/content/suppl/2014/05/30/1402786111.DCSupplemental">http://www.pnas.org/content/suppl/2014/05/30/1402786111.DCSupplemental</a> NOAA Monthly Weather Reports (MWRs) supplied the numbers of deaths for all except Donna, Celia, Audrey and Katrina. The figure for Celia is from <a href="http://www.nhc.noaa.gov/pdf/NWS-TPC-5.pdf">http://www.nhc.noaa.gov/pdf/NWS-TPC-5.pdf</a>. For the other three hurricanes it is from the Atlantic hurricane list in Wikipedia (see the references.)</p>
<h3>References</h3>
<p><a href="http://www.icatdamageestimator.com/">http://www.icatdamageestimator.com/</a> <a href="https://www.aoml.noaa.gov/hrd/hurdat/mwr_pdf/">www.aoml.noaa.gov/hrd/hurdat/mwr_pdf/</a> <a href="http://en.wikipedia.org/wiki/List_of_Atlantic_hurricanes">http://en.wikipedia.org/wiki/List_of_Atlantic_hurricanes</a> <a href="http://www.pnas.org/cgi/doi/10.1073/pnas.1402786111">http://www.pnas.org/cgi/doi/10.1073/pnas.1402786111</a></p>
<h3>Examples</h3>
<pre>
data(hurricNamed)
str(hurricNamed)
plot(log(deaths+0.5) ~ log(NDAM2014), data=hurricNamed)
with(hurricNamed, lines(lowess(log(deaths+0.5) ~ log(NDAM2014))))
plot(log(deaths+0.5) ~ I(NDAM2014^0.14), data=hurricNamed)
with(hurricNamed, lines(lowess(log(deaths+0.1) ~ I(NDAM2014^0.14))))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29652.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29652.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-hurricnamed.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29652.json';</script>
