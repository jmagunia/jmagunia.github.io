---
title: R Dataset / Package Ecdat / Oil
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Oil</span> data set which pertains to Oil Investment . The <span class="mono">Oil</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">Oil</span> data set in R by issuing the following command at the console <span class="mono">data("Oil")</span>. This will load the data into a variable called <span class="mono">Oil</span>. If R says the <span class="mono">Oil</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51039.csv">Oil R data set</a></span>. The size of this file is about 3,136 bytes.</p><h2>Oil Investment</h2>
<h3>Description</h3>
<p>a cross-section from 1969 to 1992</p>
<p><em>number of observations</em> : 53</p>
<p><em>observation</em> : production units</p>
<p><em>country</em> : United Kingdown</p>
<h3>Usage</h3>
<pre>data(Oil)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>dur</dt>
<dd>
<p>duration of the appraisal lag in months (time span between discovery of an oil field and beginning of development, i.e. approval of annex B).</p>
</dd>
<dt>size</dt>
<dd>
<p>size of recoverable reserves in millions of barrels</p>
</dd>
<dt>waterd</dt>
<dd>
<p>depth of the sea in metres</p>
</dd>
<dt>gasres</dt>
<dd>
<p>size of recoverable gas reserves in billions of cubic feet</p>
</dd>
<dt>operator</dt>
<dd>
<p>equity market value (in 1991 million pounds) of the company operating the oil field</p>
</dd>
<dt>p</dt>
<dd>
<p>real after–tax oil price measured at time of annex B approval</p>
</dd>
<dt>vardp</dt>
<dd>
<p>volatility of the real oil price process measured as the squared recursive standard errors of the regression of pt-pt-1 on a constant</p>
</dd>
<dt>p97</dt>
<dd>
<p>adaptive expectations (with parameter theta=0.97) for the real after–tax oil prices formed at the time of annex B approval</p>
</dd>
<dt>varp97</dt>
<dd>
<p>volatility of the adaptive expectations (with parameter theta=0.97) for real after tax oil prices measured as the squared recursive standard errors of the regression of pt on pte(theta)</p>
</dd>
<dt>p98</dt>
<dd>
<p>adaptive expectations (with parameter theta=0.98) for the real after–tax oil prices formed at the time of annex B approval</p>
</dd>
<dt>varp98</dt>
<dd>
<p>volatility of the adaptive expectations (with parameter theta=0.98) for real after tax oil prices measured as the squared recursive standard errors of the regression of pt on pte(theta)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Favero, Carlo A., M. Hashem Pesaran and Sunil Sharma (1994) “A duration model of irreversible oil investment : theory and empirical evidence”, <em>Journal of Applied Econometrics</em>, <b>9(S)</b>, S95–S112.</p>
<h3>References</h3>
<p>Journal of Applied Econometrics data archive : <a href="http://qed.econ.queensu.ca/jae/">http://qed.econ.queensu.ca/jae/</a>.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51039.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51039.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-oil.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51039.json';</script>