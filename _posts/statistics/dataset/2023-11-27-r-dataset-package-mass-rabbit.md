---
title: R Dataset / Package MASS / Rabbit
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Rabbit</span> data set which pertains to Blood Pressure in Rabbits. The <span class="mono">Rabbit</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">Rabbit</span> data set in R by issuing the following command at the console <span class="mono">data("Rabbit")</span>. This will load the data into a variable called <span class="mono">Rabbit</span>. If R says the <span class="mono">Rabbit</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27461.csv">Rabbit R data set</a></span>. The size of this file is about 1,554 bytes.</p><h2>Blood Pressure in Rabbits</h2>
<h3>Description</h3>
<p>Five rabbits were studied on two occasions, after treatment with saline (control) and after treatment with the <i>5-HT_3</i> antagonist MDL 72222. After each treatment ascending doses of phenylbiguanide were injected intravenously at 10 minute intervals and the responses of mean blood pressure measured. The goal was to test whether the cardiogenic chemoreflex elicited by phenylbiguanide depends on the activation of <i>5-HT_3</i> receptors.</p>
<h3>Usage</h3>
<pre>
Rabbit
</pre>
<h3>Format</h3>
<p>This data frame contains 60 rows and the following variables:</p>
<dl>
<dt><code>BPchange</code></dt>
<dd>
<p>change in blood pressure relative to the start of the experiment.</p>
</dd>
<dt><code>Dose</code></dt>
<dd>
<p>dose of Phenylbiguanide in micrograms.</p>
</dd>
<dt><code>Run</code></dt>
<dd>
<p>label of run (<code>"C1"</code> to <code>"C5"</code>, then <code>"M1"</code> to <code>"M5"</code>).</p>
</dd>
<dt><code>Treatment</code></dt>
<dd>
<p>placebo or the <i>5-HT_3</i> antagonist MDL 72222.</p>
</dd>
<dt><code>Animal</code></dt>
<dd>
<p>label of animal used (<code>"R1"</code> to <code>"R5"</code>).</p>
</dd>
</dl>
<h3>Source</h3>
<p>J. Ludbrook (1994) Repeated measurements and multiple comparisons in cardiovascular research. <em>Cardiovascular Research</em> <b>28</b>, 303–311.[The numerical data are not in the paper but were supplied by Professor Ludbrook]</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27461.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27461.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-rabbit.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27461.json';</script>