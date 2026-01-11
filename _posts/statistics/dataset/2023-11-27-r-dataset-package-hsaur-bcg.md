---
title: R Dataset / Package HSAUR / BCG
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">BCG</span> data set which pertains to BCG Vaccine Data . The <span class="mono">BCG</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">BCG</span> data set in R by issuing the following command at the console <span class="mono">data("BCG")</span>. This will load the data into a variable called <span class="mono">BCG</span>. If R says the <span class="mono">BCG</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70686.csv">BCG R data set</a></span>. The size of this file is about 408 bytes.</p><h2>BCG Vaccine Data</h2>
<h3>Description</h3>
<p>A meta-analysis on the efficacy of BCG vaccination against tuberculosis (TB).</p>
<h3>Usage</h3>
<pre>data("BCG")</pre>
<h3>Format</h3>
<p>A data frame with 13 observations on the following 7 variables.</p>
<dl>
<dt><code>Study</code></dt>
<dd>
<p>an identifier of the study.</p>
</dd>
<dt><code>BCGTB</code></dt>
<dd>
<p>the number of subjects suffering from TB after a BCG vaccination.</p>
</dd>
<dt><code>BCGVacc</code></dt>
<dd>
<p>the number of subjects with BCG vaccination.</p>
</dd>
<dt><code>NoVaccTB</code></dt>
<dd>
<p>the number of subjects suffering from TB without BCG vaccination.</p>
</dd>
<dt><code>NoVacc</code></dt>
<dd>
<p>the total number of subjects without BCG vaccination.</p>
</dd>
<dt><code>Latitude</code></dt>
<dd>
<p>geographic position of the place the study was undertaken.</p>
</dd>
<dt><code>Year</code></dt>
<dd>
<p>the year the study was undertaken.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Bacille Calmette Guerin (BCG) is the most widely used vaccination in the world. Developed in the 1930s and made of a live, weakened strain of Mycobacterium bovis, the BCG is the only vaccination available against tuberculosis today. Colditz et al. (1994) report data from 13 clinical trials of BCG vaccine each investigating its efficacy in the treatment of tuberculosis. The number of subjects suffering from TB with or without BCG vaccination are given here. In addition, the data contains the values of two other variables for each study, namely, the geographic latitude of the place where the study was undertaken and the year of publication. These two variables will be used to investigate and perhaps explain any heterogeneity among the studies.</p>
<h3>Source</h3>
<p>G. A. Colditz, T. F. Brewer, C. S. Berkey, M. E. Wilson, E. Burdick, H. V. Fineberg and F. Mosteller (1994), Efficacy of BCG vaccine in the prevention of tuberculosis. Meta-analysis of the published literature. <em>Journal of the American Medical Association</em>, <b>271</b>(2), 698–702.</p>
<h3>Examples</h3>
<pre>data("BCG", package = "HSAUR")
boxplot(BCG$BCGTB/BCG$BCGVacc, BCG$NoVaccTB/BCG$NoVacc,
names = c("BCG Vaccination", "No Vaccination"), 
ylab = "Percent BCG cases")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70686.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70686.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-bcg.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70686.json';</script>