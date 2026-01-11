---
title: R Dataset / Package Ecdat / bankingCrises
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">bankingCrises</span> data set which pertains to Countries in Banking Crises. The <span class="mono">bankingCrises</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">bankingCrises</span> data set in R by issuing the following command at the console <span class="mono">data("bankingCrises")</span>. This will load the data into a variable called <span class="mono">bankingCrises</span>. If R says the <span class="mono">bankingCrises</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11838.csv">bankingCrises R data set</a></span>. The size of this file is about 31,328 bytes.</p><h2>Countries in Banking Crises</h2>
<h3>Description</h3>
<p>A <code>data.frame</code> identifying which of 70 countries had a banking crisis each year 1800:2010. The first column is <code>year</code>. The remaining columns carry the names of the countries; those columns are 1 for years with banking crises and 0 otherwise.</p>
<h3>Usage</h3>
<pre>data(bankingCrises)</pre>
<h3>Format</h3>
<p>A <code>data.frame</code></p>
<h3>Details</h3>
<p>This file was created using the following command:</p>
<p>bankingCrises &lt;- readFinancialCrisisFiles(FinancialCrisisFiles)</p>
<p>This is documented further in the help file for <code>readFinancialCrisisFiles</code>.</p>
<p>This is an update of a subset of the data used to create Figure 10.1. Capital Mobility and the Incidence of Banking Crises, All Countries, 1800-2008, Reinhart and Rogoff (2009, p. 156).</p>
<p>The general upward trend visible in a plot of these data may be attributed to at least two different factors:</p>
<p>(1) The gradual increase in the proportion of human labor that is monetized.</p>
<p>(2) An increase in the general ability of cronies of those in power to gamble with other people's money in forming and bankrupting financial institutions. The marked feature of this plot is the virtual absence of banking crises during the period of the Bretton Woods agreement, 1944 to 1971. This period ended when US President Nixon in effect canceled the Bretton Woods agreement by taking the US off the silver standard.</p>
<h3>Author(s)</h3>
<p>Spencer Graves</p>
<h3>Source</h3>
<p><a href="http://www.reinhartandrogoff.com">http://www.reinhartandrogoff.com</a></p>
<h3>References</h3>
<p>Carmen M. Reinhart and Kenneth S. Rogoff (2009) This Time Is Different: Eight Centuries of Financial Folly, Princeton U. Pr.</p>
<h3>See Also</h3>
<p><code>readFinancialCrisisFiles</code></p>
<h3>Examples</h3>
<pre>
data(bankingCrises)
numberOfCrises &lt;- rowSums(bankingCrises[-1], na.rm=TRUE)
plot(bankingCrises$year, numberOfCrises, type='b')# Write to a file for Wikimedia Commons
svg('bankingCrises.svg')
plot(bankingCrises$year, numberOfCrises, type='b', cex.axis=2,
 las=1, xlab='', ylab='', bty='n', cex=0.5)
abline(v=c(1945, 1971), lty='dashed', col='blue')
text(1958, 14, 'Bretton Woods', srt=90, cex=2, col='blue')
dev.off()
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11838.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11838.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-bankingcrises.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11838.json';</script>