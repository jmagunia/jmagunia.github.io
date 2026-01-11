---
title: R Dataset / Package ISLR / Caravan
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Caravan</span> data set which pertains to The Insurance Company (TIC) Benchmark. The <span class="mono">Caravan</span> data set is found in the <span class="mono">ISLR</span> R package. You can load the <span class="mono">Caravan</span> data set in R by issuing the following command at the console <span class="mono">data("Caravan")</span>. This will load the data into a variable called <span class="mono">Caravan</span>. If R says the <span class="mono">Caravan</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("ISLR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66223.csv">Caravan R data set</a></span>. The size of this file is about 1,024,817 bytes.</p><h2>The Insurance Company (TIC) Benchmark</h2>
<h3>Description</h3>
<p>The data contains 5822 real customer records. Each record consists of 86 variables, containing sociodemographic data (variables 1-43) and product ownership (variables 44-86). The sociodemographic data is derived from zip codes. All customers living in areas with the same zip code have the same sociodemographic attributes. Variable 86 (<code>Purchase</code>) indicates whether the customer purchased a caravan insurance policy. Further information on the individual variables can be obtained at <a href="http://www.liacs.nl/~putten/library/cc2000/data.html">http://www.liacs.nl/~putten/library/cc2000/data.html</a></p>
<h3>Usage</h3>
<pre>Caravan</pre>
<h3>Format</h3>
<p>A data frame with 5822 observations on 86 variables.</p>
<h3>Source</h3>
<p>The data was originally supplied by Sentient Machine Research and was used in the CoIL Challenge 2000.</p>
<h3>References</h3>
<p>P. van der Putten and M. van Someren (eds) . CoIL Challenge 2000: The Insurance Company Case. Published by Sentient Machine Research, Amsterdam. Also a Leiden Institute of Advanced Computer Science Technical Report 2000-09. June 22, 2000. See <a href="http://www.liacs.nl/~putten/library/cc2000/">http://www.liacs.nl/~putten/library/cc2000/</a>P. van der Putten and M. van Someren. A Bias-Variance Analysis of a Real World Learning Problem: The CoIL Challenge 2000. Machine Learning, October 2004, vol. 57, iss. 1-2, pp. 177-195, Kluwer Academic PublishersGames, G., Witten, D., Hastie, T., and Tibshirani, R. (2013) <em>An Introduction to Statistical Learning with applications in R</em>, <a href="https://www.StatLearning.com">www.StatLearning.com</a>, Springer-Verlag, New York</p>
<h3>Examples</h3>
<pre>
summary(Caravan)
plot(Caravan$Purchase)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66223.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66223.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-islr-caravan.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66223.json';</script>
