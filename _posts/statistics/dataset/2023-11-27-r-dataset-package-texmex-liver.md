---
title: R Dataset / Package texmex / liver
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">liver</span> data set which pertains to Liver related laboratory data. The <span class="mono">liver</span> data set is found in the <span class="mono">texmex</span> R package. You can load the <span class="mono">liver</span> data set in R by issuing the following command at the console <span class="mono">data("liver")</span>. This will load the data into a variable called <span class="mono">liver</span>. If R says the <span class="mono">liver</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("texmex")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-46103.csv">liver R data set</a></span>. The size of this file is about 20,943 bytes.</p><h2>Liver related laboratory data</h2>
<h3>Description</h3>
<p>Liver related laboratory data from a randomized, blind, parallel group clinical trial with 4 doses of a drug.</p>
<h3>Usage</h3>
<pre>
data(liver)
</pre>
<h3>Format</h3>
<p>A data frame with 606 observations on the following 9 variables.</p>
<dl>
<dt>ALP.B</dt>
<dd>
<p>Alkaline phosphatase at baseline. A numeric vector.</p>
</dd>
<dt>ALT.B</dt>
<dd>
<p>Alanine aminotransferase at baseline. A numeric vector.</p>
</dd>
<dt>AST.B</dt>
<dd>
<p>Aspartate aminotransferase at baseline. A numeric vector.</p>
</dd>
<dt>TBL.B</dt>
<dd>
<p>Total bilirubin at baseline. A numeric vector.</p>
</dd>
<dt>ALP.M</dt>
<dd>
<p>Alkaline phosphatase after treatment. A numeric vector.</p>
</dd>
<dt>ALT.M</dt>
<dd>
<p>Alanine aminotransferase after treatment. A numeric vector.</p>
</dd>
<dt>AST.M</dt>
<dd>
<p>Aspartate aminotransferase after treatment. A numeric vector.</p>
</dd>
<dt>TBL.M</dt>
<dd>
<p>Total bilirubin after treatment. A numeric vector.</p>
</dd>
<dt>dose</dt>
<dd>
<p>The treatment group (i.e. dose group). A factor with levels <code>A</code> <code>B</code> <code>C</code> <code>D</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>Dose A is the lowest dose, dose, B the next, C the next, and D the highest dose. The baseline values were taken prior to any treatment being received, and the clinical trial had a single post-baseline visit.</p>
<h3>Source</h3>
<p>AstraZeneca data on file.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-46103.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-46103.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-texmex-liver.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-46103.json';</script>