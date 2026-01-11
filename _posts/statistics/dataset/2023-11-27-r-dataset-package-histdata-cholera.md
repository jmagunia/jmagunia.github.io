---
title: R Dataset / Package HistData / Cholera
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Cholera</span> data set which pertains to William Farr's Data on Cholera in London, 1849. The <span class="mono">Cholera</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Cholera</span> data set in R by issuing the following command at the console <span class="mono">data("Cholera")</span>. This will load the data into a variable called <span class="mono">Cholera</span>. If R says the <span class="mono">Cholera</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66785.csv">Cholera R data set</a></span>. The size of this file is about 3,567 bytes.</p><h2>William Farr's Data on Cholera in London, 1849</h2>
<h3>Description</h3>
<p>In 1852, William Farr, published a report of the Registrar-General on mortality due to cholera in England in the years 1848-1849, during which there was a large epidemic throughout the country. Farr initially believed that cholera arose from bad air ("miasma") associated with low elevation above the River Thames. John Snow (1855) later showed that the disease was principally spread by contaminated water.</p>
<p>This data set comes from a paper by Brigham et al. (2003) that analyses some tables from Farr's report to examine the prevalence of death from cholera in the districts of London in relation to the available predictors from Farr's table.</p>
<h3>Usage</h3>
<pre>data("Cholera")</pre>
<h3>Format</h3>
<p>A data frame with 38 observations on the following 15 variables.</p>
<dl>
<dt><code>district</code></dt>
<dd>
<p>name of the district in London, a character vector</p>
</dd>
<dt><code>cholera_drate</code></dt>
<dd>
<p>deaths from cholera in 1849 per 10,000 inhabitants, a numeric vector</p>
</dd>
<dt><code>cholera_deaths</code></dt>
<dd>
<p>number of deaths registered from cohlera in 1849, a numeric vector</p>
</dd>
<dt><code>popn</code></dt>
<dd>
<p>population, in the middle of 1849, a numeric vector</p>
</dd>
<dt><code>elevation</code></dt>
<dd>
<p>elevation, in feet above the high water mark, a numeric vector</p>
</dd>
<dt><code>region</code></dt>
<dd>
<p>a grouping of the London districts, a factor with levels <code>West</code> <code>North</code> <code>Central</code> <code>South</code> <code>Kent</code></p>
</dd>
<dt><code>water</code></dt>
<dd>
<p>water supply region, a factor with levels <code>Battersea</code> <code>New River</code> <code>Kew</code>; see Details</p>
</dd>
<dt><code>annual_deaths</code></dt>
<dd>
<p>annual deaths from all causes, 1838-1844, a numeric vector</p>
</dd>
<dt><code>pop_dens</code></dt>
<dd>
<p>population density (persons per acre), a numeric vector</p>
</dd>
<dt><code>persons_house</code></dt>
<dd>
<p>persons per inhabited house, a numeric vector</p>
</dd>
<dt><code>house_valpp</code></dt>
<dd>
<p>average annual value of house, per person (pounds), a numeric vector</p>
</dd>
<dt><code>poor_rate</code></dt>
<dd>
<p>poor rate precept per pound of howse value, a numeric vector</p>
</dd>
<dt><code>area</code></dt>
<dd>
<p>district area, a numeric vector</p>
</dd>
<dt><code>houses</code></dt>
<dd>
<p>number of houses, a numeric vector</p>
</dd>
<dt><code>house_val</code></dt>
<dd>
<p>total house values, a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>The supply of <code>water</code> was classified as “Thames, between Battersea and Waterloo Bridges” (central London), “New River, Rivers Lea and Ravensbourne”, and “Thames, at Kew and Hammersmith” (western London). The factor levels use abbreviations for these.</p>
<p>The data frame is sorted by increasing elevation above the high water mark.</p>
<h3>Source</h3>
<p>Bingham P., Verlander, N. Q., Cheal M. J. (2004). John Snow, William Farr and the 1849 outbreak of cholera that affected London: a reworking of the data highlights the importance of the water supply. <em>Public Health</em>, 118(6), 387-394, Table 2. (The data was kindly supplied by Neville Verlander, including additional variables not shown in their Table 2.)</p>
<h3>References</h3>
<p>Registrar-General (1852). <em>Report on the Mortality of Cholera in England 1848-49</em>, W. Clowes and Sons, for Her Majesty's Stationary Office. Written by William Farr. <a href="https://ia800309.us.archive.org/22/items/b24751297/b24751297.pdf">https://ia800309.us.archive.org/22/items/b24751297/b24751297.pdf</a> The relevant tables are at pages clii – clvii.</p>
<h3>See Also</h3>
<p><code>Snow.deaths</code></p>
<h3>Examples</h3>
<pre>
data(Cholera)# plot cholera deaths vs. elevation
plot(cholera_drate ~ elevation, data=Cholera, 
pch=16, cex.lab=1.2, cex=1.2,
xlab="Elevation above high water mark (ft)",
ylab="Deaths from cholera in 1849 per 10,000")# Farr's mortality ~ 1/ elevation law
elev &lt;- c(0, 10, 30, 50, 70, 90, 100, 350)
mort &lt;- c(174, 99, 53, 34, 27, 22, 20, 6)
lines(mort ~ elev, lwd=2, col="blue")# better plots, using car::scatterplot
library(car)# show separate regression lines for each water supply
scatterplot(cholera_drate ~ elevation | water, data=Cholera, 
smooth=FALSE, pch=15:17, lwd=2, id.n=2, 
labels=sub(",.*", "", Cholera$district),
col=c("red", "darkgreen", "blue"),
legend.coords="topright", legend.title="Water supply",
xlab="Elevation above high water mark (ft)",
ylab="Deaths from cholera in 1849 per 10,000")scatterplot(cholera_drate ~ poor_rate | water, data=Cholera, 
smooth=FALSE, pch=15:17, lwd=2, id.n=2, 
labels=sub(",.*", "", Cholera$district),
col=c("red", "darkgreen", "blue"),
legend.coords="topleft", legend.title="Water supply",
xlab="Poor rate per pound of house value",
ylab="Deaths from cholera in 1849 per 10,000")
# fit a logistic regression model a la Bingham etal.
fit &lt;- glm( cbind(cholera_deaths, popn) ~ 
water + elevation + poor_rate + annual_deaths +
pop_dens + persons_house,
data=Cholera, family=binomial)
summary(fit)# odds ratios
cbind( OR = exp(coef(fit))[-1], exp(confint(fit))[-1,] )if (require(effects)) {
eff &lt;- allEffects(fit)
plot(eff)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66785.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66785.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-cholera.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66785.json';</script>