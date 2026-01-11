---
title: R Dataset / Package boot / nodal
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nodal</span> data set which pertains to Nodal Involvement in Prostate Cancer. The <span class="mono">nodal</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">nodal</span> data set in R by issuing the following command at the console <span class="mono">data("nodal")</span>. This will load the data into a variable called <span class="mono">nodal</span>. If R says the <span class="mono">nodal</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47067.csv">nodal R data set</a></span>. The size of this file is about 787 bytes.</p><h2>Nodal Involvement in Prostate Cancer</h2>
<h3>Description</h3>
<p>The <code>nodal</code> data frame has 53 rows and 7 columns.</p>
<p>The treatment strategy for a patient diagnosed with cancer of the prostate depend highly on whether the cancer has spread to the surrounding lymph nodes. It is common to operate on the patient to get samples from the nodes which can then be analysed under a microscope but clearly it would be preferable if an accurate assessment of nodal involvement could be made without surgery.</p>
<p>For a sample of 53 prostate cancer patients, a number of possible predictor variables were measured before surgery. The patients then had surgery to determine nodal involvement. It was required to see if nodal involvement could be accurately predicted from the predictor variables and which ones were most important.</p>
<h3>Usage</h3>
<pre>
nodal
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>m</code></dt>
<dd>
<p>A column of ones.</p>
</dd>
<dt><code>r</code></dt>
<dd>
<p>An indicator of nodal involvement.</p>
</dd>
<dt><code>aged</code></dt>
<dd>
<p>The patients age dichotomized into less than 60 (<code>0</code>) and 60 or over <code>1</code>.</p>
</dd>
<dt><code>stage</code></dt>
<dd>
<p>A measurement of the size and position of the tumour observed by palpitation with the fingers via the rectum. A value of <code>1</code> indicates a more serious case of the cancer.</p>
</dd>
<dt><code>grade</code></dt>
<dd>
<p>Another indicator of the seriousness of the cancer, this one is determined by a pathology reading of a biopsy taken by needle before surgery. A value of <code>1</code> indicates a more serious case of the cancer.</p>
</dd>
<dt><code>xray</code></dt>
<dd>
<p>A third measure of the seriousness of the cancer taken from an X-ray reading. A value of <code>1</code> indicates a more serious case of the cancer.</p>
</dd>
<dt><code>acid</code></dt>
<dd>
<p>The level of acid phosphatase in the blood serum.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Brown, B.W. (1980) Prediction analysis for binary data. In <em>Biostatistics Casebook</em>. R.G. Miller, B. Efron, B.W. Brown and L.E. Moses (editors), 3–18. John Wiley.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47067.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47067.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-nodal.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47067.json';</script>