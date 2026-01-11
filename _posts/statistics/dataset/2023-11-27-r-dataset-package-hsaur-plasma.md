---
title: R Dataset / Package HSAUR / plasma
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">plasma</span> data set which pertains to Blood Screening Data . The <span class="mono">plasma</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">plasma</span> data set in R by issuing the following command at the console <span class="mono">data("plasma")</span>. This will load the data into a variable called <span class="mono">plasma</span>. If R says the <span class="mono">plasma</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62330.csv">plasma R data set</a></span>. The size of this file is about 636 bytes.</p><h2>Blood Screening Data</h2>
<h3>Description</h3>
<p>The erythrocyte sedimentation rate and measurements of two plasma proteins (fibrinogen and globulin).</p>
<h3>Usage</h3>
<pre>data("plasma")</pre>
<h3>Format</h3>
<p>A data frame with 32 observations on the following 3 variables.</p>
<dl>
<dt><code>fibrinogen</code></dt>
<dd>
<p>the fibrinogen level in the blood.</p>
</dd>
<dt><code>globulin</code></dt>
<dd>
<p>the globulin level in the blood.</p>
</dd>
<dt><code>ESR</code></dt>
<dd>
<p>the erythrocyte sedimentation rate, either less or greater 20 mm / hour.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The erythrocyte sedimentation rate (ESR) is the rate at which red blood cells (erythrocytes) settle out of suspension in blood plasma, when measured under standard conditions. If the ESR increases when the level of certain proteins in the blood plasma rise in association with conditions such as rheumatic diseases, chronic infections and malignant diseases, its determination might be useful in screening blood samples taken form people suspected to being suffering from one of the conditions mentioned. The absolute value of the ESR is not of great importance rather it is whether it is less than 20mm/hr since lower values indicate a healthy individual.</p>
<p>The question of interest is whether there is any association between the probability of an ESR reading greater than 20mm/hr and the levels of the two plasma proteins. If there is not then the determination of ESR would not be useful for diagnostic purposes.</p>
<h3>Source</h3>
<p>D. Collett and A. A. Jemain (1985), Residuals, outliers and influential observations in regression analysis. <em>Sains Malaysiana</em>, <b>4</b>, 493–511.</p>
<h3>Examples</h3>
<pre>data("plasma", package = "HSAUR")
layout(matrix(1:2, ncol = 2))
boxplot(fibrinogen ~ ESR, data = plasma, varwidth = TRUE)
boxplot(globulin ~ ESR, data = plasma, varwidth = TRUE)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62330.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62330.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-plasma.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62330.json';</script>