---
title: R Dataset / Package Ecdat / USFinanceIndustry
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USFinanceIndustry</span> data set which pertains to US Finance Industry Profits. The <span class="mono">USFinanceIndustry</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">USFinanceIndustry</span> data set in R by issuing the following command at the console <span class="mono">data("USFinanceIndustry")</span>. This will load the data into a variable called <span class="mono">USFinanceIndustry</span>. If R says the <span class="mono">USFinanceIndustry</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-64755.csv">USFinanceIndustry R data set</a></span>. The size of this file is about 4,073 bytes.</p><h2>US Finance Industry Profits</h2>
<h3>Description</h3>
<p>A <code>data.frame</code> giving the profits of the finance industry in the United States as a proportion of total corporate domestic profits.</p>
<h3>Usage</h3>
<pre>data(USFinanceIndustry)</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> with the following columns:</p>
<dl>
<dt>year</dt>
<dd>
<p>integer year starting with 1929</p>
</dd>
<dt>CorporateProfitsAdj</dt>
<dd>
<p>Corporate profits with inventory valuation and capital consumption adjustments in billions of current (not adjusted for inflation) US dollars</p>
</dd>
<dt>Domestic</dt>
<dd>
<p>Domestic industries profits in billions</p>
</dd>
<dt>Financial</dt>
<dd>
<p>Financial industries profits in billions</p>
</dd>
<dt>Nonfinancial</dt>
<dd>
<p>Nonfinancial industries profits in billions</p>
</dd>
<dt>restOfWorld</dt>
<dd>
<p>Profits of the "Rest of the world" in their contribution to US Gross Domestic Product in billions</p>
</dd>
<dt>FinanceProportion</dt>
<dd>
<p>= Financial/Domestic</p>
</dd>
</dl>
<h3>Details</h3>
<p>This is extracted from Table 6.16 of the National Income and Product Accounts (NIPA) compiled by the Bureau of Economic Analysis of the United States federal government. This table comes in four parts, A (1929-1947), B (1948-1987), C (1987-2000), and D (1998-present). Parts A, B, C and D contain different numbers of data elements, but the first five have the same names and are the only ones used here. The overlap between parts C and D (1998-2000) have a root mean square relative difference of 0.7 percent; there were no differences between the numbers in the overlap period between parts B and C (1987).</p>
<p>This was created using the following command:</p>
<p>demoDir &lt;- system.file('demoFiles', package='Ecdat') demoCsv &lt;- dir(demoDir, pattern='csv$', full.names=TRUE)</p>
<p>nipa6.16 &lt;- readNIPA(demoCsv) USFinanceIndustry &lt;- as.data.frame(nipa6.16) names(USFinanceIndustry) &lt;- c('year', 'CorporateProfitsAdj', 'Domestic', 'Financial', 'Nonfinancial', 'restOfWorld') USFinanceIndustry$FinanceProportion &lt;- with(USFinanceIndustry, Financial/Domestic)</p>
<h3>Source</h3>
<p><a href="http://www.bea.gov">http://www.bea.gov</a>: Under "U.S. Economic Accounts", first select "Corporate Profits" under "National". Then next to "Interactive Tables", select, "National Income and Product Accounts Tables". From there, select "Begin using the data...". Under "Section 6 - income and employment by industry", select each of the tables starting "Table 6.16". As of February 2013, there were 4 such tables available: Table 6.16A, 6.16B, 6.16C and 6.16D. Each of the last three are available in annual and quarterly summaries. The <code>USFinanceIndustry</code> data combined the first 4 rows of the 4 annual summary tables.</p>
<h3>See Also</h3>
<p><code>readNIPA</code></p>
<h3>Examples</h3>
<pre>
data(USFinanceIndustry)
plot(FinanceProportion~year, USFinanceIndustry, type='b',
 ylim=c(0, max(FinanceProportion, na.rm=TRUE)),
 xlab='', ylab='', las=1, cex.axis=2, bty='n', lwd=2,
 col='blue')# Write to a file for Wikimedia Commons
svg('USFinanceIndustry.svg')
plot(FinanceProportion~year, USFinanceIndustry, type='b',
 ylim=c(0, max(FinanceProportion, na.rm=TRUE)),
 xlab='', ylab='', las=1, cex.axis=2, bty='n', lwd=2,
 col='blue')
dev.off()
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-64755.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-64755.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-usfinanceindustry.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-64755.json';</script>