---
title: R Dataset / Package hwde / mendelABC
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mendelABC</span> data set which pertains to Mendel's F2 trifactorial data for seed shape (A: round or wrinkled), cotyledon color (B: albumen yellow or green), and seed coat color (C: grey-brown or white). The <span class="mono">mendelABC</span> data set is found in the <span class="mono">hwde</span> R package. You can load the <span class="mono">mendelABC</span> data set in R by issuing the following command at the console <span class="mono">data("mendelABC")</span>. This will load the data into a variable called <span class="mono">mendelABC</span>. If R says the <span class="mono">mendelABC</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("hwde")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-32859.csv">mendelABC R data set</a></span>. The size of this file is about 530 bytes.</p><h2>Mendel's F2 trifactorial data for seed shape (A: round or wrinkled), cotyledon color (B: albumen yellow or green), and seed coat color (C: grey-brown or white)</h2>
<h3>Description</h3>
<p>The <code>mendel3</code> data frame has 27 rows and 4 columns. Data are from Mendel (1886), and are reproduced in Fisher (1936) and Weir (1996).</p>
<h3>Usage</h3>
<pre>data(mendelABC)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>seedshape</dt>
<dd>
<p>Factor with levels: <code>AA</code>, <code>Aa</code> and <code>aa</code></p>
</dd>
<dt>cotylcolor</dt>
<dd>
<p>Factor with levels: <code>BB</code>, <code>Bb</code> and <code>bb</code></p>
</dd>
<dt>coatcolor</dt>
<dd>
<p>Factor with levels: <code>CC</code>, <code>Cc</code> and <code>cc</code></p>
</dd>
<dt>Observed</dt>
<dd>
<p>a numeric vector that holds the frequencies.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are reviewed in detail in Fisher (1936). For a brief discussion, and references to work that revisits Fisher's conclusions, see Weir (1996).</p>
<h3>Source</h3>
<p>Data are from Mendel (1886), and are reproduced in Fisher (1936) and Weir (1996).</p>
<h3>References</h3>
<p>1. Fisher, R.A. 1936. Has Mendel's work been rediscovered? <em>Annals of Science</em> <b>1</b>:115-137.</p>
<p>2. Mendel, G. 1886. Versuche uber Pflanzen-Hybriden. Verhandlugen des Naturforschenden Vereines in Brunn <b>4</b>:3-47. (An English translation. with annotations, is available from <a href="http://www.esp.org/foundations/genetics/classical/gm-65.pdf">http://www.esp.org/foundations/genetics/classical/gm-65.pdf</a> NB also the English translation by Royal Horticultural Society of London, reprinted in Peters, J.A. 1959. <em>Classic Papers in Genetics.</em> Prentice-Hall.)</p>
<p>3. Weir, B.S. 1996. <em>Genetic Data Analysis II.</em> Sinauer.</p>
<h3>Examples</h3>
<pre>
## Lay table out as a 3D array, as in Fisher (1936)
abc &lt;- aperm(array(mendelABC[,4], dim=c(3,3,3)), c(1,3,2))
dimnames(abc) &lt;- list(B=c('BB','Bb','bb'), 
A=c('AA','Aa','aa'),
C=c('CC','Cc','cc'))
abc
## Fit Hardy-Weinberg disequilibium model
hwde(mendelABC, loci=c("seedshape","cotylcolor","coatcolor"))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-32859.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-32859.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hwde-mendelabc.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-32859.json';</script>