---
title: R Dataset / Package Ecdat / UStaxWords
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UStaxWords</span> data set which pertains to Number of Words in US Tax Law. The <span class="mono">UStaxWords</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">UStaxWords</span> data set in R by issuing the following command at the console <span class="mono">data("UStaxWords")</span>. This will load the data into a variable called <span class="mono">UStaxWords</span>. If R says the <span class="mono">UStaxWords</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29387.csv">UStaxWords R data set</a></span>. The size of this file is about 503 bytes.</p><h2>Number of Words in US Tax Law</h2>
<h3>Description</h3>
<p>Thousands of words in US tax law for 1995 to 2015 in 10 year intervals. This includes income taxes and all taxes in the code itself (written by congress) and regulations (written by government administrators). For 2015 only "EntireTaxCodeAndRegs" is given; for other years, this number is broken down by income tax vs. other taxes and code vs. regulations.</p>
<h3>Usage</h3>
<pre>data(UStaxWords)</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> containing:</p>
<dl>
<dt>year</dt>
<dd>
<p>tax year</p>
</dd>
<dt>IncomeTaxCode</dt>
<dd>
<p>number of words in thousands in the US income tax code</p>
</dd>
<dt>otherTaxCode</dt>
<dd>
<p>number of words in thousands in US tax code other than income tax</p>
</dd>
<dt>EntireTaxCode</dt>
<dd>
<p>number of words in thousands in the US tax code</p>
</dd>
<dt>IncomeTaxRegulations</dt>
<dd>
<p>number of words in thousands in US income tax regulations</p>
</dd>
<dt>otherTaxRegulations</dt>
<dd>
<p>number of words in thousands in US tax regulations other than income tax</p>
</dd>
<dt>IncomeTaxCodeAndRegs</dt>
<dd>
<p>number of words in thousands in both the code and regulations for the US income tax</p>
</dd>
<dt>otherTaxCodeAndRegs</dt>
<dd>
<p>number of wrds in thousands in both code and regulations for US taxes apart from income taxes.</p>
</dd>
<dt>EntireTaxCodeAndRegs</dt>
<dd>
<p>number of words in thousands in US tax code and regulations</p>
</dd>
</dl>
<h3>Details</h3>
<p>Thousands of words in the US tax code and federal tax regulations, 1955-2015. This is based on data from the Tax Foundation (taxfoundation.org), adjusted to eliminate an obvious questionable observation in <code>otherTaxRegulations</code> for 1965. The numbers of words in <code>otherTaxRegulations</code> was not reported directly by the Tax Foundation but is easily computed as the difference between their Income and Entire tax numbers. This series shows the numbers falling by 48 percent between 1965 and 1975 and by 1.5 percent between 1995 and 2005. These are the only declines seen in these numbers and seem inconsistent with the common concern (expressed e.g., in Moody, Warcholik and Hodge, 2005) about the difficulties of simplifying any governmental program, because vested interest appear to defend almost anything. Lessig (2011) notes that virtually all provisions of US law that favor certain segments of society are set to expire after a modest number of years. These sunset provisions provide recurring opportunities for incumbent politicians to extort campaign contributions from those same segments to ensure the continuation of the favorable treatment.</p>
<p>The decline of 48 percent in <code>otherTaxRegulations</code> seems more curious for two additional reasons: First, it was preceded by a tripling of <code>otherTaxRegulations</code> between 1955 and 1965. Second, it was NOT accompanied by any comparable behavior of <code>otherTaxCode</code>. Instead, the latter grew each decade by between 17 and 53 percent, similar to but slower than the growth in <code>IncomeTaxCode</code> and <code>IncomeTaxRegulations</code>.</p>
<p>Accordingly, <code>otherTaxRegulations</code> for 1965 is replaced by the average of the numbers for 1955 and 1975, and <code>EntireTaxRegulations</code> for 1965 is comparably adjusted. This replaces (1322, 2960) for those two variables for 1965 with (565, 2203). In addition, <code>otherTaxCodeAndRegs</code> and <code>EntireTaxCodeAndRegulations</code> are also changed from (1626, 3507) to (870, 2751).</p>
<p>Independent of whether this adjustment is correct or not, it's clear that there have been roughly 3 words of regulations for each word in the tax code. Most of these are income tax regulations, which have recently contained 4.5 words for every word in code. The income tax code currently includes roughly 50 percent more words than other tax code.</p>
<h3>Author(s)</h3>
<p>Spencer Graves</p>
<h3>Source</h3>
<p><a href="http://taxfoundation.org/article/number-words-internal-revenue-code-and-federal-tax-regulations-1955-2005">Tax Foundation: Number of Words in Internal Revenue Code and Federal Tax Regulations, 1955-2005</a> Scott Greenberg, <a href="http://taxfoundation.org/blog/federal-tax-laws-and-regulations-are-now-over-10-million-words-long">"Federal Tax Laws and Regulations are Now Over 10 Million Words Long", October 08, 2015</a></p>
<h3>References</h3>
<p>J. Scott Moody, Wendy P. Warcholik, and Scott A. Hodge (2005) "The Rising Cost of Complying with the Federal Income Tax", The Tax Foundation Special Report No. 138.</p>
<h3>Examples</h3>
<pre>
data(UStaxWords)
plot(EntireTaxCodeAndRegs/1000 ~ year, UStaxWords, 
type='b',
ylab='Millions of words in US tax code &amp; regs')# Write to a file for Wikimedia Commons
## Not run: 
svg('UStaxWords.svg')## End(Not run)
matplot(UStaxWords$year, UStaxWords[c(2:3, 5:6)]/1000,
type='b', bty='n', ylab='',
ylim=c(0, max(UStaxWords$EntireTaxCodeAndRegs)/1000),
las=1, xlab="", cex.axis=2)
lines(EntireTaxCodeAndRegs/1000~year, UStaxWords, lwd=2)
## Not run: 
dev.off()## End(Not run)
# lines 1:4 = IncomeTaxCode, otherTaxCode, 
# IncomeTaxRegulations,
# and otherTaxRegulations, respectively##
## Plotting the original numbers without the adjustment
##
UStax. &lt;- UStaxWords
UStax.[2,c(6:7, 9:10)] &lt;- c(1322, 2960, 1626, 3507)
matplot(UStax.$year, UStax.[c(2:3, 5:6)]/1000,
type='b', bty='n', ylab='',
ylim=c(0, max(UStax.$EntireTaxCodeAndRegs)/1000),
las=1, xlab="", cex.axis=2)
lines(EntireTaxCodeAndRegs/1000~year, UStax., lwd=2)
# Note especially the anomalous behaviour of line 4 =
# otherTaxRegulations.As noted with "details" above,
# otherTaxRegulations could have tripled between 1955 
# and 1965, then fallen by 48 percent between 1965 and
# 1975.However, that does not seem credible, 
# especially since there was no corresponding behavior 
# in otherTaxCode.##
## linear trend 
##
(newWdsPerYr &lt;- lm(EntireTaxCodeAndRegs~year, 
UStaxWords))
plot(UStaxWords$year, resid(newWdsPerYr))
# Roughly 150,000 additional words added each year
# since 1955.
# No indication of nonlinearity.</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29387.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29387.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-ustaxwords.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29387.json';</script>