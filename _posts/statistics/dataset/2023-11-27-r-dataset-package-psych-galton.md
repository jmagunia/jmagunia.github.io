---
title: R Dataset / Package psych / galton
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">galton</span> data set which pertains to Galton's Mid parent child height data. The <span class="mono">galton</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">galton</span> data set in R by issuing the following command at the console <span class="mono">data("galton")</span>. This will load the data into a variable called <span class="mono">galton</span>. If R says the <span class="mono">galton</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-92967.csv">galton R data set</a></span>. The size of this file is about 9,261 bytes.</p><h2>Galton's Mid parent child height data</h2>
<h3>Description</h3>
<p>Two of the earliest examples of the correlation coefficient were Francis Galton's data sets on the relationship between mid parent and child height and the similarity of parent generation peas with child peas. This is the data set for the Galton height.</p>
<h3>Usage</h3>
<pre>data(galton)</pre>
<h3>Format</h3>
<p>A data frame with 928 observations on the following 2 variables.</p>
<dl>
<dt><code>parent</code></dt>
<dd>
<p>Mid Parent heights (in inches)</p>
</dd>
<dt><code>child</code></dt>
<dd>
<p>Child Height</p>
</dd>
</dl>
<h3>Details</h3>
<p>Female heights were adjusted by 1.08 to compensate for sex differences. (This was done in the original data set)</p>
<h3>Source</h3>
<p>This is just the galton data set from UsingR, slightly rearranged.</p>
<h3>References</h3>
<p>Stigler, S. M. (1999). Statistics on the Table: The History of Statistical Concepts and Methods. Harvard University Press. Galton, F. (1886). Regression towards mediocrity in hereditary stature. Journal of the Anthropological Institute of Great Britain and Ireland, 15:246-263. Galton, F. (1869). Hereditary Genius: An Inquiry into its Laws and Consequences. London: Macmillan.</p>
<p>Wachsmuth, A.W., Wilkinson L., Dallal G.E. (2003). Galton's bend: A previously undiscovered nonlinearity in Galton's family stature regression data. The American Statistician, 57, 190-192.</p>
<h3>See Also</h3>
<p>The other Galton data sets: <code>heights</code>, <code>peas</code>,<code>cubits</code></p>
<h3>Examples</h3>
<pre>
data(galton)
describe(galton)
 #show the scatter plot and the lowess fit 
pairs.panels(galton,main="Galton's Parent child heights")
#but this makes the regression lines look the same
pairs.panels(galton,lm=TRUE,main="Galton's Parent child heights") 
 #better is to scale them 
pairs.panels(galton,lm=TRUE,xlim=c(62,74),ylim=c(62,74),main="Galton's Parent child heights") 
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-92967.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-92967.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-galton.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-92967.json';</script>