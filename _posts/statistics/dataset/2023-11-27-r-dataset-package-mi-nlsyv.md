---
title: R Dataset / Package mi / nlsyV
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nlsyV</span> data set which pertains to National Longitudinal Survey of Youth Extract. The <span class="mono">nlsyV</span> data set is found in the <span class="mono">mi</span> R package. You can load the <span class="mono">nlsyV</span> data set in R by issuing the following command at the console <span class="mono">data("nlsyV")</span>. This will load the data into a variable called <span class="mono">nlsyV</span>. If R says the <span class="mono">nlsyV</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mi")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-36707.csv">nlsyV R data set</a></span>. The size of this file is about 7,977 bytes.</p><h2>National Longitudinal Survey of Youth Extract</h2>
<h3>Description</h3>
<p>This dataset pertains to children and their families in the United States and is intended to illustrate missing data issues. Note that although the original data are longitudinal, this extract is not.</p>
<h3>Usage</h3>
<pre>data(nlsyV)</pre>
<h3>Format</h3>
<p>A data frame with 400 randomly subsampled observations on the following 7 variables.</p>
<dl>
<dt><code>ppvtr.36</code></dt>
<dd>
<p>a numeric vector with data on the Peabody Picture Vocabulary Test (Revised) administered at 36 months</p>
</dd>
<dt><code>first</code></dt>
<dd>
<p>indicator for whether child was first-born</p>
</dd>
<dt><code>b.marr</code></dt>
<dd>
<p>indicator for whether mother was married when child was born</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>a numeric vector with data on family income in year after the child was born</p>
</dd>
<dt><code>momage</code></dt>
<dd>
<p>a numeric vector with data on the age of the mother when the child was born</p>
</dd>
<dt><code>momed</code></dt>
<dd>
<p>educational status of mother when child was born (1 = less than high school, 2 = high school graduate, 3 = some college, 4 = college graduate)</p>
</dd>
<dt><code>momrace</code></dt>
<dd>
<p>race of mother (1 = black, 2 = Hispanic, 3 = white)</p>
</dd>
</dl>
<p>Note that <b>momed</b> would typically be an ordered <code>factor</code> while <b>momrace</b> would typically be an unorderd <code>factor</code> but both are <code>numeric</code> in this <code>data.frame</code> in order to illustrate the mechanism to <code>change</code> the type of a <code>missing_variable</code></p>
<h3>Source</h3>
<p>National Longitudinal Survey of Youth, 1997, <a href="http://www.bls.gov/nls/nlsy97.htm">http://www.bls.gov/nls/nlsy97.htm</a></p>
<h3>Examples</h3>
<pre>
data(nlsyV)
summary(nlsyV)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-36707.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-36707.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mi-nlsyv.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-36707.json';</script>