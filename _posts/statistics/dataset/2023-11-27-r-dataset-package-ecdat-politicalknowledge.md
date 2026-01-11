---
title: R Dataset / Package Ecdat / politicalKnowledge
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">politicalKnowledge</span> data set which pertains to Political knowledge in the US and Europe . The <span class="mono">politicalKnowledge</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">politicalKnowledge</span> data set in R by issuing the following command at the console <span class="mono">data("politicalKnowledge")</span>. This will load the data into a variable called <span class="mono">politicalKnowledge</span>. If R says the <span class="mono">politicalKnowledge</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88394.csv">politicalKnowledge R data set</a></span>. The size of this file is about 521 bytes.</p><h2>Political knowledge in the US and Europe</h2>
<h3>Description</h3>
<p>Data from McChesney and Nichols (2010) on domestic and international knowledge in Denmark, Finland, the UK and the US among college graduates, people with some college, and roughly 12th grade only.</p>
<h3>Usage</h3>
<pre>
data(politicalKnowledge)
</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> containing 12 columns and 4 rows.</p>
<dl>
<dt>country</dt>
<dd>
<p>a character vector of Denmark, Finland, UK, and US, being the four countries comparied in this data set.</p>
</dd>
<dt>DomesticKnowledge.hs, DomesticKnowledge.sc, DomesticKnowledge.c</dt>
<dd>
<p>percent correct answers to calibrated questions regarding knowledge of prominent items in domestic news in a survey of residents of the four countries among college graduates (ending ".c"), some college (".sc") and high school ("hs"). Source: McChesney and Nichols (2010, chapter 1, chart 8).</p>
</dd>
<dt>InternationalKnowledge.hs, InternationalKnowledge.sc, InternationalKnowledge.c</dt>
<dd>
<p>percent correct answers to calibrated questions regarding knowledge of prominent items in international news in a survey of residents of the four countries by education level as for DomesticKnowledge. Source: McChesney and Nichols (2010, chapter 1, chart 7).</p>
</dd>
<dt>PoliticalKnowledge.hs, PoliticalKnowledge.sc, PoliticalKnowledge.c</dt>
<dd>
<p>average of domestic and international knowledge</p>
</dd>
<dt>PublicMediaPerCapita</dt>
<dd>
<p>Per capital spending on public media in 2007 in US dollars from McChesney and Nichols (2010, chapter 4, chart 1)</p>
</dd>
<dt>PublicMediaRel2US</dt>
<dd>
<p>Spending on public media relative to the US, being <code>PublicMediaPerCapita / PublicMediaPerCapita[4]</code>.</p>
</dd>
</dl>
<h3>Author(s)</h3>
<p>Spencer Graves</p>
<h3>Source</h3>
<p>Robert W. McChesney and John Nichols (2010) <em>The Death and Life of American Journalism</em> (Nation Books)</p>
<h3>Examples</h3>
<pre>
##
## 1. Combine first 2 rows 
##
data(politicalKnowledge)
pk &lt;- politicalKnowledge[-1,]
pk[1, -1] &lt;- ((politicalKnowledge[1, -1] + 
 politicalKnowledge[2, -1])/2)
pk[1, 'country'] &lt;- 'DK-FI'##
## 2.plot
##
xlim &lt;- range(pk[, 'PublicMediaPerCapita'])
ylim &lt;- 100*range(pk[2:7])
text.cex &lt;- 2# to label the lines 
(US.UK &lt;- (pk[2, -1]+pk[3, -1])/2)#png('Knowledge v. public media.png')
op &lt;- par(mar=c(5, 7, 4, 2)+.1)
plot(c(0, 110), 100*ylim, type='n', axes=FALSE,
 xlab='public media $ per capita',
 ylab='Political Knowledge\n(% of standard questions)',
 cex.lab=2)
axis(1, cex.axis=2)
axis(2, las=2, cex.axis=2)
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
 type='b', pch=' '))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
 type='b', pch=' '))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
 type='b', pch=' '))
with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
 'High School\nor less', srt=37, cex=1.5))
with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
 'some\ncollege', srt=10.5, cex=1.5))
with(US.UK, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
 "Bachelor's\nor more", srt=-1, cex=1.5))par(op)
#dev.off()##
## redo for Wikimedia commons
## without English axis labels 
## to facilitate multilingual use 
##
#svg('Knowledge v. public media.svg')
op &lt;- par(mar=c(3,3,2,2)+.1)
plot(c(0, 110), 100*ylim, type='n', axes=FALSE,
 xlab='', ylab='', cex.lab=2)
axis(1, cex.axis=2)
axis(2, las=2, cex.axis=2)
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, text(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
country, cex=text.cex, xpd=NA, 
col=c('forestgreen', 'orange', 'red')))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.hs,
 type='b', pch=' '))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.sc,
 type='b', pch=' '))
with(pk, lines(PublicMediaPerCapita, 100*PoliticalKnowledge.c,
 type='b', pch=' '))
par(op)
#dev.off()</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88394.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88394.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-politicalknowledge.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88394.json';</script>