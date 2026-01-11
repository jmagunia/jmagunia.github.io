---
title: R Dataset / Package Ecdat / terrorism
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">terrorism</span> data set which pertains to Global Terrorism Database yearly summaries. The <span class="mono">terrorism</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">terrorism</span> data set in R by issuing the following command at the console <span class="mono">data("terrorism")</span>. This will load the data into a variable called <span class="mono">terrorism</span>. If R says the <span class="mono">terrorism</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90712.csv">terrorism R data set</a></span>. The size of this file is about 10,296 bytes.</p><h2>Global Terrorism Database yearly summaries</h2>
<h3>Description</h3>
<p>The <a href="https://en.wikipedia.org/wiki/Global_Terrorism_Database">Global Terrorism Database (GTD)</a> "is a database of incidents of terrorism from 1970 onward". Through 2015, this database contains information on 141,966 incidents.</p>
<p><code>terrorism</code> provides a few summary statistics along with an <code>ordered</code> factor <code>methodology</code>, which <a href="https://www.washingtonpost.com/news/monkey-cage/wp/2014/08/11/how-to-fix-the-flaws-in-the-global-terrorism-database-and-why-it-matters/">Pape et al.</a> insisted is necessary, because an increase of over 70 percent in suicide terrorism between 2007 and 2013 is best explained by a methodology change in GTD that occurred on 2011-11-01; Pape's own <a href="https://en.wikipedia.org/wiki/Suicide_Attack_Database">Suicide Attack Database</a> showed a 19 percent <em>decrease</em> over the same period.</p>
<h3>Usage</h3>
<pre>
data(terrorism)
data(incidents.byCountryYr)
data(nkill.byCountryYr)
</pre>
<h3>Format</h3>
<p><code>incidents.byCountryYr</code> and <code>nkill.byCountryYr</code> are matrices giving the numbes of incidents and numbers of deaths by year and by country for 206 countries and for all years between 1970 and 2015 except for 1993, for which the raw data were lost.</p>
<p>NOTE: For nkill.byCountryYr and for terrorism[c('nkill', 'nkill.us')], NAs in GTD were treated as 0. Thus the actual number of deaths were likely higher, unless this was more than offset by incidents being classified as terrorism, when they should not have been.</p>
<p><code>terrorism</code> is a <code>data.frame</code> containing the following:</p>
<dl>
<dt>year</dt>
<dd>
<p>integer year, 1970:2014.</p>
</dd>
<dt>methodology</dt>
<dd>
<p>an <code>ordered</code> factor giving the methodology / organization responsible for the data collection for most of the given year. The Pinkerton Global Intelligence Service (PGIS) managed data collection from 1970-01-01 to 1997-12-31. The Center for Terrorism and Intelligence Studies (CETIS) managed the project from 1998-01-01 to 2008-03-31. The Institute for the Study of Violent Groups (ISVG) carried the project from 2008-04-01 to 2011-10-31. The National Consortium for the Study of Terrorism and Responses to Terrorism (START) has managed data collection since 2011-11-01. For this variable, partial years are ignored, so <code>methodology</code> = CEDIS for 1998:2007, ISVG for 2008:2011, and START for 2012:2014.</p>
</dd>
<dt>method</dt>
<dd>
<p>a character vector consisting of the first character of the levels of <code>methodology</code>:</p>
<p>c('p', 'c', 'i', 's')</p>
</dd>
<dt>incidents</dt>
<dd>
<p>integer number of incidents identified each year.</p>
<p>NOTE: <code>sum(terrorism[["incidents"]])</code> = 146920 = 141966 in the GTD database plus 4954 for 1993, for which the incident-level data were lost.</p>
</dd>
<dt>incidents.us</dt>
<dd>
<p>integer number of incidents identified each year with <code>country_txt</code> = "United States".</p>
</dd>
<dt>suicide</dt>
<dd>
<p>integer number of incidents classified as "suicide" by GTD variable <code>suicide</code> = 1. For 2007, this is 359, the number reported by <a href="https://www.washingtonpost.com/news/monkey-cage/wp/2014/08/11/how-to-fix-the-flaws-in-the-global-terrorism-database-and-why-it-matters/">Pape et al.</a> For 2013, it is 624, which is 5 more than the 619 mentioned by Pape et al. Without checking with the SMART project administrators, one might suspect that 5 more suicide incidents from 2013 were found after the data Pape et al. analyzed but before the data used for this analysis.</p>
</dd>
<dt>suicide.us</dt>
<dd>
<p>Number of suicide incidents by year with <code>country_txt</code> = "United States".</p>
</dd>
<dt>nkill</dt>
<dd>
<p>number of confirmed fatalities for incidents in the given year, including attackers = <code>sum(nkill, na.rm=TRUE)</code> in the GTD incident data.</p>
<p>NOTE: <code>nkill</code> in the GTD incident data includes both perpetrators and victims when both are available. It includes one when only one is available and is <code>NA</code> when neither is available. However, in most cases, we might expect that the more spectacular and lethal incidents would likely be more accurately reported. To the exent that this is true, it means that when numbers are missing, they are usually zero or small. This further suggests that the summary numbers recorded here probably represent a slight but not substantive undercount.</p>
</dd>
<dt>nkill.us</dt>
<dd>
<p>number of U.S. citizens who died as a result of incidents for that year = <code>sum(nkill.us, na.rm=TRUE)</code> in the GTD incident data. (This is subject to the same likely modest undercount discussed with <code>nkill</code>.)</p>
</dd>
<dt>nwound</dt>
<dd>
<p>number of people wounded. (This is subject to the same likely modest undercount discussed with <code>nkill</code>.)</p>
</dd>
<dt>nwound.us</dt>
<dd>
<p>Number of U.S. citizens wounded in terrorist incidents for that year = <code>sum(nwound.us, na.rm=TRUE)</code> in the GTD incident data. (This is subject to the same likely modest undercount discussed with <code>nkill</code>.)</p>
</dd>
<dt>pNA.nkill, pNA.nkill.us, pNA.nwound, pNA.nwound.us</dt>
<dd>
<p>proportion of observations by year with missing values. These numbers are higher for the early data than more recent numbers. This is particularly true for <code>nkill.us</code> and <code>nwound.us</code>, which exceed 90 percent for most of the period with <code>methodology</code> = 'PGIS', prior to 1998.</p>
</dd>
<dt>worldPopulation, USpopulation</dt>
<dd>
<p>Estimated de facto population in thousands living in the world and in the US as of 1 July of the year indicated, according to the Population Division of the Department of Economic and Social Affairs of the United Nations; see "Sources" below.</p>
</dd>
<dt>worldDeathRate, USdeathRate</dt>
<dd>
<p><a href="https://en.wikipedia.org/wiki/Mortality_rate">Crude death rate</a> (deaths per 1,000 population) worldwide and in the US, according to the World Bank; see "Sources" below. This World Bank data set includes USdeathRate for each year from 1900 to 2014.</p>
<p>The WorldDeathRate here were read manually from a plot on <a href="http://data.worldbank.org/indicator/SP.DYN.CDRT.IN?end=2014&amp;start=1960&amp;view=chart">that web page,</a> except for the the number for 2015, which was estimated as a reduction of 0.73 percent from 2014, which was the average rate of decline (ratio of two successive years) for 1990 to 2014. The same method was used to estimate the USdeathRate for 2015 as the same as for 2014.</p>
<p>NOTE: USdeathRate is to two significant digits only, unlike WorldDeathRate, which has four significant digits.</p>
</dd>
<dt>worldDeaths, USdeaths</dt>
<dd>
<p>number of deaths by year in the world and US</p>
<p>worldDeaths = worldPopulation * worldDeathRate.</p>
<p>USdeaths were computed by summing across age groups in "Deaths_5x1.txt" for the United States, downloaded from <a href="http://www.mortality.org/cgi-bin/hmd/country.php?cntr=USA&amp;level=1">http://www.mortality.org/cgi-bin/hmd/country.php?cntr=USA&amp;level=1</a> from the Human Mortality Database; see sources below.</p>
</dd>
<dt>kill.pmp, kill.pmp.us</dt>
<dd>
<p>terrorism deaths per million population worldwide and in the US =</p>
<p>0.001 * nkill / worldPopulation</p>
</dd>
<dt>pkill, pkill.us</dt>
<dd>
<p>terrorism deaths as a proportion of total deaths worldwide and in the US</p>
<p>pkill = nkill / worldDeaths</p>
<p>pkill.us = nkill.us / USdeaths</p>
</dd>
</dl>
<h3>Details</h3>
<p>As noted with the "description" above, <a href="https://www.washingtonpost.com/news/monkey-cage/wp/2014/08/11/how-to-fix-the-flaws-in-the-global-terrorism-database-and-why-it-matters/">Pape et al.</a> noted that the GTD reported an increase in suicide terrorism of over 70 percent between 2007 and 2013, while their <a href="https://en.wikipedia.org/wiki/Suicide_Attack_Database">Suicide Attack Database</a> showed a 19 percent <em>decrease</em> over the same period. Pape et al. insisted that the most likely explanation for this difference is the change in the organization responsible for managing that data collection from ISVG to START.</p>
<p>If the issue is restricted to how incidents are classified as "suicide terrorism", this concern does not affect the other variables in this summary.</p>
<p>However, if it also impacts what incidents are classified as "terrorism", it suggests larger problems.</p>
<h3>Source</h3>
<p>The <a href="https://en.wikipedia.org/wiki/Global_Terrorism_Database">Global Terrorism Database</a> maintained by the <a href="https://en.wikipedia.org/wiki/National_Consortium_for_the_Study_of_Terrorism_and_Responses_to_Terrorism">National Consortium for the Study of Terrorism and Responses to Terrorism</a> (START, 2015), <a href="http://www.start.umd.edu/gtd">downloaded 2015-11-28</a>.</p>
<p>The world and US population figures came from <a href="https://esa.un.org/unpd/wpp/Download/Standard/Population/">"Total Population - Both Sexes", World Population Prospects 2015, published by the Population Division of the Department of Economic and Social Affairs of the United Nations</a>, accessed 2016-09-05.</p>
<p>The World and US death rates came from <a href="http://data.worldbank.org/indicator/SP.DYN.CDRT.IN">the World Bank</a>, accessed 2016-09-05.</p>
<p><a href="http://www.mortality.org/">Human Mortality Database. University of California, Berkeley (USA), and Max Planck Institute for Demographic Research (Germany).</a></p>
<h3>References</h3>
<p>Robert Pape, Keven Ruby, Vincent Bauer and Gentry Jenkins, <a href="https://www.washingtonpost.com/news/monkey-cage/wp/2014/08/11/how-to-fix-the-flaws-in-the-global-terrorism-database-and-why-it-matters/">"How to fix the flaws in the Global Terrorism Database and why it matters"</a>, <em>The Washington Post</em>, August 11, 2014 (accessed 2016-01-09).</p>
<h3>Examples</h3>
<pre>
data(terrorism)
# plot deaths per million population plot(kill.pmp~year, terrorism, 
 pch=method, type='b')
plot(kill.pmp.us~year, terrorism, 
 pch=method, type='b', 
 log='y', las=1)
 
# terrorism as parts per 10,000 
# of all deaths plot(pkill*1e4~year, terrorism, 
 pch=method, type='b', 
 las=1)
plot(pkill.us*1e4~year, terrorism, 
 pch=method, type='b', 
 log='y', las=1)
 
# plot number of incidents, number killed, 
# and proportion NAplot(incidents~year, terrorism, type='b', 
pch=method)plot(nkill.us~year, terrorism, type='b', 
pch=method)
plot(nkill.us~year, terrorism, type='b', 
pch=method, log='y')plot(pNA.nkill.us~year, terrorism, type='b', 
pch=method)
abline(v=1997.5, lty='dotted', col='red')
# by country by year
data(incidents.byCountryYr)
data(nkill.byCountryYr)yr &lt;- as.integer(colnames(
incidents.byCountryYr))
str(maxDeaths &lt;- apply(nkill.byCountryYr, 
 1, max) )
str(omax &lt;- order(maxDeaths, decreasing=TRUE))
head(maxDeaths[omax], 8)
tolower(substring( 
names(maxDeaths[omax[1:8]]), 1, 2))
pch. &lt;- c('i', 'g', 'f', 'l', 
's', 'c', 'u', 'p')
cols &lt;- 1:4matplot(yr, sqrt(t(
nkill.byCountryYr[omax[1:8], ])),
type='b', pch=pch., axes=FALSE, 
ylab='(square root scale) ', xlab='', 
col=cols,
main='number of terrorism deaths\nby country') 
axis(1)
(max.nk &lt;- max(nkill.byCountryYr[omax[1:8], ]))
i.nk &lt;- c(1, 100, 1000, 3000, 
5000, 7000, 10000)
cbind(i.nk, sqrt(i.nk))
axis(2, sqrt(i.nk), i.nk, las=1)
ip &lt;- paste(pch., names(maxDeaths[omax[1:8]]))
legend('topleft', ip, cex=.55, 
 col=cols, text.col=cols)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90712.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90712.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-terrorism.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90712.json';</script>