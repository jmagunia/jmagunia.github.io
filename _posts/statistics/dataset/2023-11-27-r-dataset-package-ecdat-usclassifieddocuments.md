---
title: R Dataset / Package Ecdat / USclassifiedDocuments
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USclassifiedDocuments</span> data set which pertains to Official Secrecy of the United States Government . The <span class="mono">USclassifiedDocuments</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">USclassifiedDocuments</span> data set in R by issuing the following command at the console <span class="mono">data("USclassifiedDocuments")</span>. This will load the data into a variable called <span class="mono">USclassifiedDocuments</span>. If R says the <span class="mono">USclassifiedDocuments</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90051.csv">USclassifiedDocuments R data set</a></span>. The size of this file is about 823 bytes.</p><h2>Official Secrecy of the United States Government</h2>
<h3>Description</h3>
<p>Data on classification activity of the United States government.</p>
<p>Fitzpatrick (2013) notes that the dramatic jump in derivative classification activity (<code>DerivClassActivity</code>) that occurred in 2009 coincided with "New guidance issued to include electronic environment". Apart from the jump in 2009, the <code>DerivClassActivity</code> tended to increase by roughly 12 percent per year (with a standard deviation of the increase in the natural logarithm of <code>DerivClassActivity</code> of 0.18).</p>
<h3>Usage</h3>
<pre>
data(USclassifiedDocuments)
</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>year</dt>
<dd>
<p>the calendar year</p>
</dd>
<dt>OCAuthority</dt>
<dd>
<p>Number of people in the government designated as Original Classification Authorities for the indicated <code>year</code>.</p>
</dd>
<dt>OCActivity</dt>
<dd>
<p>Original classification activity for the indicated year: These are the number of documents created with an original classification, i.e., so designated by an official Original Classification Authority.</p>
</dd>
<dt>TenYearDeclass</dt>
<dd>
<p>Percent of <code>OCActivity</code> covered by the 10 year declassification rules.</p>
</dd>
<dt>DerivClassActivity</dt>
<dd>
<p>Derivative classification activity for the indicated year: These are the number of documents created that claim another document as the authority for classification.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The lag 1 autocorrrelation of the first difference of the logarithms of <code>DerivClassActivity</code> through 2008 is <code>-0.52</code>. However, because there are only 13 numbers (12 differences), this negative correlation is not statistically significant.</p>
<h3>Source</h3>
<p>Fitzpatrick, John P. (2013) <em>Annual Report to the President for 2012</em>, United States Information Security Oversight Office, National Archives and Record Administration, June 20, 2013 (<a href="https://www.archives.gov/isoo/reports">https://www.archives.gov/isoo/reports</a>)</p>
<h3>Examples</h3>
<pre>
##
## 1.plot DerivClassActivity 
##
plot(DerivClassActivity~year, USclassifiedDocuments)
#Exponential growth?plot(DerivClassActivity~year, USclassifiedDocuments, 
 log='y')
# A jump in 2009 as discussed by Fitzpatrick (2013).
# Otherwise plausibly a straight line. ##
## 2.First difference? 
##
plot(diff(log(DerivClassActivity))~year[-1], 
 USclassifiedDocuments)
# Jump in 2009 but otherwise on distribution ##
## 3.autocorrelation?
##
sel &lt;- with(USclassifiedDocuments, 
(1995 &lt; year) &amp; (year &lt; 2009) )
acf(diff(log(USclassifiedDocuments$
 DerivClassActivity[sel])))
# lag 1 autocorrelation = (-0.52).
# However, with only 12 numbers, 
# this is not statistically significant.
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90051.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90051.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-usclassifieddocuments.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90051.json';</script>