---
title: R Dataset / Package mediation / CEDdata
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CEDdata</span> data set which pertains to Example Data for the Crossover Encouragement Design. The <span class="mono">CEDdata</span> data set is found in the <span class="mono">mediation</span> R package. You can load the <span class="mono">CEDdata</span> data set in R by issuing the following command at the console <span class="mono">data("CEDdata")</span>. This will load the data into a variable called <span class="mono">CEDdata</span>. If R says the <span class="mono">CEDdata</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mediation")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-41212.csv">CEDdata R data set</a></span>. The size of this file is about 28,034 bytes.</p><h2>Example Data for the Crossover Encouragement Design</h2>
<h3>Description</h3>
<p>A randomly generated dataset containing 2000 rows and 7 columns with no missing values.</p>
<h3>Usage</h3>
<pre>CEDdata</pre>
<h3>Format</h3>
<p>A data frame containing the following variables, which are interpreted as results from a hypothetical randomized trial employing the crossover encouragement design.</p>
<dl>
<dt>T1:</dt>
<dd>
<p>The binary treatment indicator in the first stage.</p>
</dd>
<dt>M1:</dt>
<dd>
<p>The binary mediator variable recorded in the first stage.</p>
</dd>
<dt>Y1:</dt>
<dd>
<p>The binary outcome variable recorded in the first stage.</p>
</dd>
<dt>T2:</dt>
<dd>
<p>The binary treatment in the second stage. Equal to 1 - T1 by design.</p>
</dd>
<dt>Z:</dt>
<dd>
<p>The binary encouragement indicator for the second stage.</p>
</dd>
<dt>M2:</dt>
<dd>
<p>The binary mediator recorded in the second stage.</p>
</dd>
<dt>Y2:</dt>
<dd>
<p>The binary outcome recorded in the second stage.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Note that all the observed responses are generated from an underlying distribution of potential outcomes and mediators (not shown in this dataset) satisfying the assumptions described in Imai, Tingley and Yamamoto (2012).</p>
<h3>Source</h3>
<p>Imai, K., Tingley, D. and Yamamoto, T. (2012) Experimental Designs for Identifying Causal Mechanisms. Journal of the Royal Statistical Society, Series A (Statistics in Society)</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-41212.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-41212.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mediation-ceddata.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-41212.json';</script>