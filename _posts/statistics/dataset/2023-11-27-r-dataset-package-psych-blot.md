---
title: R Dataset / Package psych / blot
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">blot</span> data set which pertains to Bond's Logical Operations Test – BLOT. The <span class="mono">blot</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">blot</span> data set in R by issuing the following command at the console <span class="mono">data("blot")</span>. This will load the data into a variable called <span class="mono">blot</span>. If R says the <span class="mono">blot</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24905.csv">blot R data set</a></span>. The size of this file is about 10,736 bytes.</p><h2>Bond's Logical Operations Test – BLOT</h2>
<h3>Description</h3>
<p>35 items for 150 subjects from Bond's Logical Operations Test. A good example of Item Response Theory analysis using the Rasch model. One parameter (Rasch) analysis and two parameter IRT analyses produce somewhat different results.</p>
<h3>Usage</h3>
<pre>data(blot)</pre>
<h3>Format</h3>
<p>A data frame with 150 observations on 35 variables. The BLOT was developed as a paper and pencil test for children to measure Logical Thinking as discussed by Piaget and Inhelder.</p>
<h3>Details</h3>
<p>Bond and Fox apply Rasch modeling to a variety of data sets. This one, Bond's Logical Operations Test, is used as an example of Rasch modeling for dichotomous items. In their text (p 56), Bond and Fox report the results using WINSTEPS. Those results are consistent (up to a scaling parameter) with those found by the rasch function in the ltm package. The WINSTEPS seem to produce difficulty estimates with a mean item difficulty of 0, whereas rasch from ltm has a mean difficulty of -1.52. In addition, rasch seems to reverse the signs of the difficulty estimates when reporting the coefficients and is effectively reporting "easiness".</p>
<p>However, when using a two parameter model, one of the items (V12) behaves very differently.</p>
<p>This data set is useful when comparing 1PL, 2PL and 2PN IRT models.</p>
<h3>Source</h3>
<p>The data are taken (with kind permission from Trevor Bond) from the webpage <a href="http://homes.jcu.edu.au/~edtgb/book/data/Bond87.txt">http://homes.jcu.edu.au/~edtgb/book/data/Bond87.txt</a> and read using read.fwf.</p>
<h3>References</h3>
<p>T.G. Bond. BLOT:Bond's Logical Operations Test. Townsville, Australia: James Cook Univer- sity. (Original work published 1976), 1995.</p>
<p>T. Bond and C. Fox. (2007) Applying the Rasch model: Fundamental measurement in the human sciences. Lawrence Erlbaum, Mahwah, NJ, US, 2 edition.</p>
<h3>See Also</h3>
<p>See also the <code>irt.fa</code> and associated plot functions.</p>
<h3>Examples</h3>
<pre>
data(blot)
#not run
#library(ltm)
#bblot.rasch &lt;- rasch(blot, constraint = cbind(ncol(blot) + 1, 1))#a 1PL model
#blot.2pl &lt;- ltm(blot~z1)#a 2PL model
#do the same thing with functions in psych
#blot.fa &lt;- irt.fa(blot)# a 2PN model
#plot(blot.fa)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24905.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24905.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-blot.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24905.json';</script>