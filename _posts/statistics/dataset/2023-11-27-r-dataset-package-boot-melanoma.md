---
title: R Dataset / Package boot / melanoma
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">melanoma</span> data set which pertains to Survival from Malignant Melanoma. The <span class="mono">melanoma</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">melanoma</span> data set in R by issuing the following command at the console <span class="mono">data("melanoma")</span>. This will load the data into a variable called <span class="mono">melanoma</span>. If R says the <span class="mono">melanoma</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24077.csv">melanoma R data set</a></span>. The size of this file is about 350 bytes.</p><h2>Survival from Malignant Melanoma</h2>
<h3>Description</h3>
<p>The <code>melanoma</code> data frame has 205 rows and 7 columns.</p>
<p>The data consist of measurements made on patients with malignant melanoma. Each patient had their tumour removed by surgery at the Department of Plastic Surgery, University Hospital of Odense, Denmark during the period 1962 to 1977. The surgery consisted of complete removal of the tumour together with about 2.5cm of the surrounding skin. Among the measurements taken were the thickness of the tumour and whether it was ulcerated or not. These are thought to be important prognostic variables in that patients with a thick and/or ulcerated tumour have an increased chance of death from melanoma. Patients were followed until the end of 1977.</p>
<h3>Usage</h3>
<pre>
melanoma
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>time</code></dt>
<dd>
<p>Survival time in days since the operation, possibly censored.</p>
</dd>
<dt><code>status</code></dt>
<dd>
<p>The patients status at the end of the study. 1 indicates that they had died from melanoma, 2 indicates that they were still alive and 3 indicates that they had died from causes unrelated to their melanoma.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>The patients sex; 1=male, 0=female.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>Age in years at the time of the operation.</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>Year of operation.</p>
</dd>
<dt><code>thickness</code></dt>
<dd>
<p>Tumour thickness in mm.</p>
</dd>
<dt><code>ulcer</code></dt>
<dd>
<p>Indicator of ulceration; 1=present, 0=absent.</p>
</dd>
</dl>
<h3>Note</h3>
<p>This dataset is not related to the dataset in the <span class="pkg">lattice</span> package with the same name.</p>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Andersen, P.K., Borgan, O., Gill, R.D. and Keiding, N. (1993) <em>Statistical Models Based on Counting Processes</em>. Springer-Verlag.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Venables, W.N. and Ripley, B.D. (1994) <em>Modern Applied Statistics with S-Plus</em>. Springer-Verlag.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24077.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24077.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-melanoma.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24077.json';</script>