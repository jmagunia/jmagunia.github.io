---
title: R Dataset / Package plm / Grunfeld
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Grunfeld</span> data set which pertains to Grunfeld's Investment Data. The <span class="mono">Grunfeld</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">Grunfeld</span> data set in R by issuing the following command at the console <span class="mono">data("Grunfeld")</span>. This will load the data into a variable called <span class="mono">Grunfeld</span>. If R says the <span class="mono">Grunfeld</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72278.csv">Grunfeld R data set</a></span>. The size of this file is about 4,900 bytes.</p><h2>Grunfeld's Investment Data</h2>
<h3>Description</h3>
<p>A balanced panel of 10 observational units (firms) from 1935 to 1954</p>
<p><em>total number of observations</em> : 200</p>
<p><em>observation</em> : production units</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(Grunfeld)</pre>
<h3>Format</h3>
<p>A data frame containing :</p>
<dl>
<dt>firm</dt>
<dd>
<p>observation</p>
</dd>
<dt>year</dt>
<dd>
<p>date</p>
</dd>
<dt>inv</dt>
<dd>
<p>gross Investment</p>
</dd>
<dt>value</dt>
<dd>
<p>value of the firm</p>
</dd>
<dt>capital</dt>
<dd>
<p>stock of plant and equipment</p>
</dd>
</dl>
<h3>Note</h3>
<p>The Grunfeld data as provided in package <code>plm</code> is the same data as used in Baltagi (2001), see <b>Examples</b> below.</p>
<p>NB:Various versions of the Grunfeld data circulate online. Also, various text books (and also varying among editions) and papers use different subsets of the original Grunfeld data, some of which contain errors in a few data points compared to the original data used by Grunfeld (1958) in his PhD thesis. See Kleiber/Zeileis (2010) and its accompanying website for a comparison of various Grunfeld data sets in use.</p>
<h3>Source</h3>
<p>Online complements to Baltagi (2001):</p>
<p><a href="http://www.wiley.com/legacy/wileychi/baltagi/">http://www.wiley.com/legacy/wileychi/baltagi/</a> <a href="http://www.wiley.com/legacy/wileychi/baltagi/supp/Grunfeld.fil">http://www.wiley.com/legacy/wileychi/baltagi/supp/Grunfeld.fil</a></p>
<p>Online complements to Baltagi (2013):</p>
<p><a href="http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452">http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452</a></p>
<h3>References</h3>
<p>Baltagi, Badi H. (2001) <em>Econometric Analysis of Panel Data</em>, 2nd ed., John Wiley and Sons;accompanying website <a href="http://www.wiley.com/legacy/wileychi/baltagi/">http://www.wiley.com/legacy/wileychi/baltagi/</a>.</p>
<p>Baltagi, Badi H. (2013) <em>Econometric Analysis of Panel Data</em>, 5th ed., John Wiley and Sons;accompanying website <a href="http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452">http://bcs.wiley.com/he-bcs/Books?action=resource&amp;bcsId=4338&amp;itemId=1118672321&amp;resourceId=13452</a>.</p>
<p>Grunfeld, Yehuda (1958) <em>The Determinants of Corporate Investment</em>, Ph.D. thesis, Department of Economics, University of Chicago.</p>
<p>Kleiber, C./Zeileis, A. (2010) “The Grunfeld Data at 50”, <em>German Economic Review</em>, <b>11</b>(4), pp. 404–417, <a href="http://dx.doi.org/10.1111/j.1468-0475.2010.00513.x">http://dx.doi.org/10.1111/j.1468-0475.2010.00513.x</a>;website accompanying the paper with various variants of the Grunfeld data: <a href="http://statmath.wu-wien.ac.at/~zeileis/grunfeld/">http://statmath.wu-wien.ac.at/~zeileis/grunfeld/</a>.</p>
<h3>See Also</h3>
<p>For the complete Grunfeld data (11 firms), see <code>Grunfeld</code>, in the <code>AER</code> package.</p>
<h3>Examples</h3>
<pre>
## Not run: 
# Compare plm's Grunfeld data to Baltagi's (2001) Grunfeld data:
data(Grunfeld, package="plm")
Grunfeld_baltagi2001 &lt;- read.csv("http://www.wiley.com/legacy/wileychi/
baltagi/supp/Grunfeld.fil", sep="", header = FALSE)
library(compare)
compare::compare(Grunfeld, Grunfeld_baltagi2001, allowAll = T) # same data set

## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72278.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72278.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-grunfeld.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72278.json';</script>