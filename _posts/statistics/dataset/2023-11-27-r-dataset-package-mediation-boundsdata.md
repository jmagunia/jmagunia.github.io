---
title: R Dataset / Package mediation / boundsdata
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">boundsdata</span> data set which pertains to Example Data for the Design Functions. The <span class="mono">boundsdata</span> data set is found in the <span class="mono">mediation</span> R package. You can load the <span class="mono">boundsdata</span> data set in R by issuing the following command at the console <span class="mono">data("boundsdata")</span>. This will load the data into a variable called <span class="mono">boundsdata</span>. If R says the <span class="mono">boundsdata</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mediation")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85440.csv">boundsdata R data set</a></span>. The size of this file is about 14,412 bytes.</p><h2>Example Data for the Design Functions</h2>
<h3>Description</h3>
<p>A random subsample of the simulated data used in Imai, Tingley, Yamamoto (2012). The data contains 1000 rows and 7 columns with no missing values.</p>
<h3>Usage</h3>
<pre>boundsdata</pre>
<h3>Format</h3>
<p>A data frame containing the following variables, which are interpreted as results from a hypothetical randomized trial. See the source for a full description.</p>
<dl>
<dt>out:</dt>
<dd>
<p>The binary outcome variable under the parallel design.</p>
</dd>
<dt>out.enc:</dt>
<dd>
<p>The binary outcome variable under the parallel encouragement design.</p>
</dd>
<dt>med:</dt>
<dd>
<p>The binary mediator under the parallel design.</p>
</dd>
<dt>med.enc:</dt>
<dd>
<p>The binary mediator under the parallel encouragement design.</p>
</dd>
<dt>ttt:</dt>
<dd>
<p>The binary treatment variable.</p>
</dd>
<dt>manip:</dt>
<dd>
<p>The design indicator, or the variable indicating whether the mediator is manipulated under the parallel design.</p>
</dd>
<dt>enc:</dt>
<dd>
<p>The trichotomous encouragement variable under the parallel encouragement design. Equals 0 if subject received no encouragement; 1 if encouraged for the mediator value of 1; and -1 if encouraged for the mediator value of 0.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Conditioning on 'manip' = 0 will simulate a randomized trial under the single experiment design, where 'out' and 'med' equal observed outcome and mediator values, respectively.</p>
<p>Unconditionally, using 'out', 'med', 'ttt' and 'manip' will simulate an experiment under the parallel design.</p>
<p>The 'out.enc' and 'med.enc' variables represent the outcome and mediator values observed when subjects received the encouragement indicated in 'enc'. Therefore, using 'out.enc', 'med.enc', 'ttt' and 'enc' will simulate an experiment under the parallel encouragement design.</p>
<p>Note that all the observed responses are generated from an underlying distribution of potential outcomes and mediators (not shown in this dataset) satisfying the assumptions described in Imai, Tingley and Yamamoto (2012). The full simulation code is available as a companion replication archive for the article.</p>
<h3>Source</h3>
<p>Imai, K., Tingley, D. and Yamamoto, T. (2012) Experimental Designs for Identifying Causal Mechanisms. Journal of the Royal Statistical Society, Series A (Statistics in Society)</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85440.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85440.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mediation-boundsdata.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85440.json';</script>