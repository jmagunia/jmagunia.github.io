---
title: R Dataset / Package psych / cushny
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cushny</span> data set which pertains to A data set from Cushny and Peebles (1905) on the effect of three drugs on hours of sleep, used by Student (1908). The <span class="mono">cushny</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">cushny</span> data set in R by issuing the following command at the console <span class="mono">data("cushny")</span>. This will load the data into a variable called <span class="mono">cushny</span>. If R says the <span class="mono">cushny</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37661.csv">cushny R data set</a></span>. The size of this file is about 341 bytes.</p><h2>A data set from Cushny and Peebles (1905) on the effect of three drugs on hours of sleep, used by Student (1908)</h2>
<h3>Description</h3>
<p>The classic data set used by Gossett (publishing as Student) for the introduction of the t-test. The design was a within subjects study with hours of sleep in a control condition compared to those in 3 drug conditions. Drug1 was 06mg of L Hscyamine, Drug 2L and Drug2R were said to be .6 mg of Left and Right isomers of Hyoscine. As discussed by Zabell (2008) these were not optical isomers. The detal1, delta2L and delta2R are changes from the baseline control.</p>
<h3>Usage</h3>
<pre>data(cushny)</pre>
<h3>Format</h3>
<p>A data frame with 10 observations on the following 7 variables.</p>
<dl>
<dt><code>Control</code></dt>
<dd>
<p>Hours of sleep in a control condition</p>
</dd>
<dt><code>drug1</code></dt>
<dd>
<p>Hours of sleep in Drug condition 1</p>
</dd>
<dt><code>drug2L</code></dt>
<dd>
<p>Hours of sleep in Drug condition 2</p>
</dd>
<dt><code>drug2R</code></dt>
<dd>
<p>Hours of sleep in Drug condition 3 (an isomer of the drug in condition 2</p>
</dd>
<dt><code>delta1</code></dt>
<dd>
<p>Change from control, drug 1</p>
</dd>
<dt><code>delta2L</code></dt>
<dd>
<p>Change from control, drug 2L</p>
</dd>
<dt><code>delta2R</code></dt>
<dd>
<p>Change from control, drug 2R</p>
</dd>
</dl>
<h3>Details</h3>
<p>The original analysis by Student is used as an example for the t-test function, both as a paired t-test and a two group t-test. The data are also useful for a repeated measures analysis of variance.</p>
<h3>Source</h3>
<p>Cushny, A.R. and Peebles, A.R. (1905) The action of optical isomers: II hyoscines. The Journal of Physiology 32, 501-510.</p>
<p>Student (1908) The probable error of the mean. Biometrika, 6 (1) , 1-25.</p>
<h3>References</h3>
<p>See also the data set sleep and the examples for the t.test</p>
<p>S. L. Zabell. On Student's 1908 Article "The Probable Error of a Mean" Journal of the American Statistical Association, Vol. 103, No. 481 (Mar., 2008), pp. 1- 20</p>
<h3>Examples</h3>
<pre>
data(cushny)
with(cushny, t.test(drug1,drug2L,paired=TRUE)) #within subjects error.bars(cushny[1:4],within=TRUE,ylab="Hours of sleep",xlab="Drug condition", 
 main="95% confidence of within subject effects")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37661.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37661.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-cushny.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37661.json';</script>