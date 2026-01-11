---
title: R Dataset / Package Ecdat / USGDPpresidents
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USGDPpresidents</span> data set which pertains to US GDP per capita with presidents and wars. The <span class="mono">USGDPpresidents</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">USGDPpresidents</span> data set in R by issuing the following command at the console <span class="mono">data("USGDPpresidents")</span>. This will load the data into a variable called <span class="mono">USGDPpresidents</span>. If R says the <span class="mono">USGDPpresidents</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-48661.csv">USGDPpresidents R data set</a></span>. The size of this file is about 17,484 bytes.</p><h2>US GDP per capita with presidents and wars</h2>
<h3>Description</h3>
<p>It is commonly claimed that Franklin Roosevelt (FDR) did not end the Great Depression: World War II (WW2) did. This is supported by the 10.6 percent growth per year in Gross Domestic Product (GDP) per capita seen in the standard GDP estimates from 1940 to 1945. It is also supported by the rapid decline in unemployment during the war.</p>
<p>However, no comparable growth spurts in GDP per capita catch the eye in a plot of log(GDP per capita) from 1790 to 2015, whether associated with a war or not, using the <a href="http://measuringworth.com/">Measuring Worth</a> data. The only other features of that plot that seem visually comparable are the economic disaster of Herbert Hoover's presidency (when GDP per capital fell by 10 percent per year, 1929-1932), the impressive growth of the US economy during the first seven years of Franklin Roosevelt's presidency (6.4 percent per year, 1933-1940), and the post-World War II recession (when GDP per capita fell by 7.9 percent per year, 1945-1947).</p>
<p>Closer inspection of this plot suggests that the US economy has generally grown faster after FDR than before. This might plausibly be attributed to <a href="https://en.wikipedia.org/wiki/John_Maynard_Keynes">"The Keynesian Ascendancy 1939-1979"</a>.</p>
<p>Unemployment dropped during the First World War as it did during WW2. Comparable data are not available for the U.S. during other major wars, most notably the <a href="https://en.wikipedia.org/wiki/American_Civil_War">American Civil War</a> and the <a href="https://en.wikipedia.org/wiki/Mexican-American_War">Mexican-American War</a>.</p>
<p>This data set provides a platform for testing the effects of presidency, war, and Keynes. It does this by combining the numbers for US population and real GDP per capital dollars from <a href="http://measuringworth.com/">Measuring Worth</a> with the presidency and a list of major wars and an estimate of the battle deaths by year per million population. <a href="https://en.wikipedia.org/wiki/Unemployment_in_the_United_States#Historical_unemployment_rate_charts">US unemployment is also considered.</a></p>
<h3>Usage</h3>
<pre>
data(USGDPpresidents)
</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> containing 259 observations on the following variables:</p>
<dl>
<dt>Year</dt>
<dd>
<p>integer: the year, c(seq(1610, 1770, 10), 1774:2015)</p>
</dd>
<dt>CPI</dt>
<dd>
<p>Numeric: U. S. Consumer Price Index per Officer and Williamson (2015). Average 1982-84 = 100.</p>
</dd>
<dt>GDPdeflator</dt>
<dd>
<p>numeric: Implicit price deflators for Gross Domestic Product with 2009 = 100 per Johnston and Williamson.</p>
</dd>
<dt>population.K</dt>
<dd>
<p>integer: US population in thousands.</p>
<p>Population figures for 1770 and 1780 were taken from "Colonial and Pre-Federal Statistics".</p>
</dd>
<dt>realGDPperCapita</dt>
<dd>
<p>numeric: real Gross Domestic Product per capita in 2009 dollars</p>
</dd>
<dt>executive</dt>
<dd>
<p><code>ordered</code>: Crown of England through 1774, followed by the "ContinentalCongress" and the "ArticlesOfConfederation" until Washington, who became President under the current base constitution in 1789. Two nineteenth century presidents are not listed here (William Henry Harrison and James A. Garfield), because they died so soon after inauguration that any contribution they made to the economic growth of the nation might seem too slight to measure accurately in annual data like this; their contributions therefore appear combined with their replacements (John Tyler and Chester A. Arthur, respectively). The service of two other presidents is officially combined here: "Taylor-Fillmore" refers to the 16 months served by Zachary Taylor with the 32 months of Millard Fillmore. These modifications make <a href="https://en.wikipedia.org/wiki/Barack_Obama">Barack Obama</a> number 41 on this list, even though he's the 44th president of the U.S.</p>
</dd>
<dt>war</dt>
<dd>
<p><code>ordered</code>: This lists the major wars in US history by years involving active hostilities. A war is "major" for present purposes if it met two criteria:</p>
<p>(1) It averaged at least 10 battle deaths per year per million US population.</p>
<p>(2) It was listed in one of two lists of wars: For wars since 1816, it must have appeared in the <a href="http://correlatesofwar.org/">Correlates of War</a>. For wars between 1790 and 1815, it must have appeared in the Wikipedia <a href="https://en.wikipedia.org/wiki/List_of_wars_involving_the_United_States">"List of wars involving the United States"</a>.</p>
<p>The resulting list includes a few adjustments to the list of wars that might come readily to mind for people moderately familiar with US history.</p>
<p>A traditional list might start with the American Revolution, the War of 1812, the Mexican-American war, the Civil War, the Spanish-American war, World Wars I and II, Korea, and Vietnam. In addition, the <a href="https://en.wikipedia.org/wiki/Northwest_Indian_War">Northwest Indian War</a> involved very roughly 30 battle deaths per year per million population 1785-1795. This compares with the roughly 100 battle deaths per year 1812-1815 for the <a href="https://en.wikipedia.org/wiki/War_of_1812">War of 1812</a>.</p>
<p>For present purposes, the Spanish-American War is combined with the lesser-known American-Philippine War: The latter involved 50 percent more battle deaths but over a longer period of time and arguably with less impact on the stature of the US as a growing world power. However, its magnitude suggest it might have impacted the US economy in a way roughly comparable to the Spanish-American war. The two are therefore listed here together as "Spanish-American-Philippine" war.</p>
<p><a href="http://correlatesofwar.org/">The Correlates of War (COW)</a> data include multiple US uses of military force during the Vietnam War era. It starts with "Vietnam Phase 1", 1961-65, with 506 battle deaths in the COW data base. It includes the "Second Laotian" war phases 1 and 2, plus engagement with a "Communist Coalition" and Kmer Rouge as well as actions in the Dominican Republic and Guatemala. The current <code>data.frame</code> includes only "Vietnam", referring primarily to COW's "Vietnam War, Phase 2", 1965-1973. The associated battle deaths include battle deaths from these other, lesser concurrent conflicts.</p>
<p>The COW data currently ends in 2007. However, the post-2000 conflicts in Afghanistan and Iraq averaged less than 1,000 battle deaths per year or roughly 3 battle deaths per year per million population. This is below the threshold of 10 battle deaths per year per million population. This in turn suggests that any impact of those conflicts on the US economy might be small and difficult to estimate.</p>
</dd>
<dt>battleDeaths</dt>
<dd>
<p>numeric: Numbers of battle deaths by year estimated by allocating to the different years the totals reported for each major war in proportion to the number of days officially in conflict each year. The totals were obtained (in August-September 2015) from <a href="http://correlatesofwar.org/">The Correlates of War</a> data for conflicts since 1816 and from Wikipedia for previous wars, as noted above.</p>
</dd>
<dt>battleDeathsPMP</dt>
<dd>
<p>numeric: battle deaths per million population = <code>1000*battleDeaths/population.K</code>.</p>
</dd>
<dt>Keynes</dt>
<dd>
<p>integer taking the value 1 between 1939 and 1979 and 0 otherwise, as suggested by the section entitled "The Keynesian Ascendancy 1939-1979" in the Wikipedia article on <a href="https://en.wikipedia.org/wiki/John_Maynard_Keynes">John Maynard Keynes</a>.</p>
</dd>
<dt>unemployment</dt>
<dd>
<p>Estimated US unemployment rate</p>
</dd>
<dt>unempSource</dt>
<dd>
<p><code>ordered</code> giving the source for US unemployment:</p>
<dl>
<dt>1800-1889</dt>
<dd>
<p>Lebergott</p>
</dd>
<dt>1890-1929</dt>
<dd>
<p>Romer</p>
</dd>
<dt>1930-1939</dt>
<dd>
<p>Coen</p>
</dd>
<dt>1940-present</dt>
<dd>
<p>BLS</p>
</dd>
</dl>
<p>Clearly, the more recent numbers should be more accurate.</p>
</dd>
</dl>
<h3>Details</h3>
<p>rownames(USGDPpresidents) = Year</p>
<h3>Author(s)</h3>
<p>Spencer Graves</p>
<h3>Source</h3>
<p><a href="http://www.measuringworth.org/usgdp/">Louis Johnston and Samuel H. Williamson, "What Was the U.S. GDP Then?", Measuring Worth</a>, accessed 2015-09-08.</p>
<p><a href="http://www.measuringworth.com/uscpi/">Lawrence H. Officer and Samuel H. Williamson (2015) 'The Annual Consumer Price Index for the United States, 1774-2014,' MeasuringWorth</a>, accessed 2015-09-19.</p>
<p>Sarkees, Meredith Reid; Wayman, Frank (2010). <a href="http://correlatesofwar.org/data-sets/COW-war">"The Correlates of War Project: COW War Data, 1816 - 2007 (v4.0)"</a>, accessed 2015-09-02.</p>
<p>Wikipedia, <a href="https://en.wikipedia.org/wiki/List_of_wars_involving_the_United_States">"List of wars involving the United States"</a>, accessed 2015-09-13.</p>
<p><a href="https://en.wikipedia.org/wiki/Unemployment_in_the_United_States#Historical_unemployment_rate_charts">Wikipedia, "Unemployment in the United States"</a>. See also <a href="https://en.wikipedia.org/wiki/User_talk:Peace01234#Unemployment_Data">https://en.wikipedia.org/wiki/User_talk:Peace01234#Unemployment_Data</a>. Accessed 2016-07-08.</p>
<p>Stanley Lebergott (1964). Manpower in Economic Growth: The American Record since 1800. Pages 164-190. New York: McGraw-Hill. Cited from <a href="https://en.wikipedia.org/wiki/Unemployment_in_the_United_States#Historical_unemployment_rate_charts">Wikipedia, "Unemployment in the United States"</a>, accessed 2016-07-08.</p>
<p>Christina Romer (1986). "Spurious Volatility in Historical Unemployment Data", The Journal of Political Economy, 94(1): 1-37.</p>
<p>Robert M. Coen (1973) Labor Force and Unemployment in the 1920's and 1930's: A Re-Examination Based on Postwar Experience", The Review of Economics and Statistics, 55(1): 46-55.</p>
<h3>Examples</h3>
<pre>
##
## GDP, Presidents and Wars 
##
data(USGDPpresidents)
(wars &lt;- levels(USGDPpresidents$war))
nWars &lt;- length(wars)
plot(realGDPperCapita/1000~Year, 
 USGDPpresidents, log='y', type='l', 
 ylab='average annual income (K$)', 
 las=1) 
abline(v=c(1929, 1933, 1945), lty='dashed')
text(1930, 2.5, "Hoover", srt=90, cex=0.9)
text(1939.5, 30, 'FDR', srt=90, cex=1.1, col='blue')# label wars
(logGDPrange &lt;- log(range(USGDPpresidents$realGDPperCapita, 
na.rm=TRUE)/1000))
(yrRange &lt;- range(USGDPpresidents$Year))
(yrMid &lt;- mean(yrRange))
for(i in 2:nWars){
w &lt;- wars[i]
sel &lt;- (USGDPpresidents$war==w)
yrs &lt;- range(USGDPpresidents$Year[sel])
abline(v=yrs, lty='dotted', col='grey')
yr. &lt;- mean(yrs)
w.adj &lt;- (0.5 - 0.6*(yr.-yrMid)/diff(yrRange))
logy &lt;- (logGDPrange[1]+w.adj*diff(logGDPrange))
y. &lt;- exp(logy)
text(yr., y., w, srt=90, col='red', cex=0.5)
}##
## CPI v. GDPdeflator
## 
plot(GDPdeflator~CPI, USGDPpresidents, type='l', 
 log='xy')
 
##
## Unemployment 
##
plot(unemployment~Year, USGDPpresidents, type='l')</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-48661.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-48661.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-usgdppresidents.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-48661.json';</script>