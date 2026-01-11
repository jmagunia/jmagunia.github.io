---
title: R Dataset / Package MASS / Insurance
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Insurance</span> data set which pertains to Numbers of Car Insurance claims. The <span class="mono">Insurance</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">Insurance</span> data set in R by issuing the following command at the console <span class="mono">data("Insurance")</span>. This will load the data into a variable called <span class="mono">Insurance</span>. If R says the <span class="mono">Insurance</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60526.csv">Insurance R data set</a></span>. The size of this file is about 1,643 bytes.</p><h2>Numbers of Car Insurance claims</h2>
<h3>Description</h3>
<p>The data given in data frame <code>Insurance</code> consist of the numbers of policyholders of an insurance company who were exposed to risk, and the numbers of car insurance claims made by those policyholders in the third quarter of 1973.</p>
<h3>Usage</h3>
<pre>
Insurance
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>District</code></dt>
<dd>
<p>factor: district of residence of policyholder (1 to 4): 4 is major cities.</p>
</dd>
<dt><code>Group</code></dt>
<dd>
<p>an ordered factor: group of car with levels &lt;1 litre, 1–1.5 litre, 1.5–2 litre, &gt;2 litre.</p>
</dd>
<dt><code>Age</code></dt>
<dd>
<p>an ordered factor: the age of the insured in 4 groups labelled &lt;25, 25–29, 30–35, &gt;35.</p>
</dd>
<dt><code>Holders</code></dt>
<dd>
<p>numbers of policyholders.</p>
</dd>
<dt><code>Claims</code></dt>
<dd>
<p>numbers of claims</p>
</dd>
</dl>
<h3>Source</h3>
<p>L. A. Baxter, S. M. Coutts and G. A. F. Ross (1980) Applications of linear models in motor insurance. <em>Proceedings of the 21st International Congress of Actuaries, Zurich</em> pp. 11–29.</p>
<p>M. Aitkin, D. Anderson, B. Francis and J. Hinde (1989) <em>Statistical Modelling in GLIM.</em> Oxford University Press.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (1999) <em>Modern Applied Statistics with S-PLUS.</em> Third Edition. Springer.</p>
<h3>Examples</h3>
<pre>
## main-effects fit as Poisson GLM with offset
glm(Claims ~ District + Group + Age + offset(log(Holders)),
data = Insurance, family = poisson)# same via loglm
loglm(Claims ~ District + Group + Age + offset(log(Holders)),
data = Insurance)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60526.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60526.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-insurance.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60526.json';</script>