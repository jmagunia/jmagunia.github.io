---
title: R Dataset / Package mosaicData / GoosePermits
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">GoosePermits</span> data set which pertains to Goose Permit Study. The <span class="mono">GoosePermits</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">GoosePermits</span> data set in R by issuing the following command at the console <span class="mono">data("GoosePermits")</span>. This will load the data into a variable called <span class="mono">GoosePermits</span>. If R says the <span class="mono">GoosePermits</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-61759.csv">GoosePermits R data set</a></span>. The size of this file is about 115 bytes.</p><h2>Goose Permit Study</h2>
<h3>Description</h3>
<p>237 hunters were each offered one of 11 cash amounts (bids) ranging from $1 to $200 in return for their goose permits. Hunters returned either their permit or the cash.</p>
<h3>Usage</h3>
<pre>
data(GoosePermits)
</pre>
<h3>Format</h3>
<p>A data.frame with 11 observations on the following 3 variables.</p>
<p>itemcodebid amount offered for permit (US $) [numeric] itemcodekeep number of hunters who kept the permit and returned the cash [numeric] itemcodesell number of hunters who kept the cash and returned the permit [numeric]</p>
<h3>Source</h3>
<p>Bishop and Heberlein. "Measuring values of extramarket goods: are indirect measures biased?". Amer. J. Agr. Econ. 61, 1979. Available at <a href="http://www1.udel.edu/johnmack/frec343/bishop_and_heberlein.pdf">http://www1.udel.edu/johnmack/frec343/bishop_and_heberlein.pdf</a>. See also <a href="http://www.math.umt.edu/patterson/ProfileLikelihoodCI.pdf">http://www.math.umt.edu/patterson/ProfileLikelihoodCI.pdf</a>.</p>
<h3>Examples</h3>
<pre>
data(GoosePermits)goose.model &lt;- 
glm( cbind(keep, sell) ~ log(bid), data = GoosePermits, family = binomial())
if (require(mosaic)) {
f &lt;- makeFun(goose.model)
xyplot( (keep/(keep+sell)) ~ bid, data = GoosePermits, ylim = c(0,1.05))
plotFun( f(b) ~ b, add = TRUE) 
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-61759.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-61759.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-goosepermits.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-61759.json';</script>