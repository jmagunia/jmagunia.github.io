---
title: R Dataset / Package mi / CHAIN
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CHAIN</span> data set which pertains to Subset of variables from the CHAIN project. The <span class="mono">CHAIN</span> data set is found in the <span class="mono">mi</span> R package. You can load the <span class="mono">CHAIN</span> data set in R by issuing the following command at the console <span class="mono">data("CHAIN")</span>. This will load the data into a variable called <span class="mono">CHAIN</span>. If R says the <span class="mono">CHAIN</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mi")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38134.csv">CHAIN R data set</a></span>. The size of this file is about 15,057 bytes.</p><h2>Subset of variables from the CHAIN project</h2>
<h3>Description</h3>
<p>The CHAIN project was a longitudinal cohort study of people living with HIV in New York City, which was recruited in 1994 from a large number of medical care and social service agencies serving HIV in New York City. This subset of data pertain to the sixth round of interviews.</p>
<h3>Usage</h3>
<pre>data(CHAIN)</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> with 532 observations on the following 8 variables.</p>
<dl>
<dt><code>log_virus</code></dt>
<dd>
<p>log of self reported viral load level, where zero represents an undetectable level.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>age at time of the interview</p>
</dd>
<dt><code>income</code></dt>
<dd>
<p>annual family income in 10 intervals</p>
</dd>
<dt><code>healthy</code></dt>
<dd>
<p>a continuous scale of physical health with a theoretical range between 0 and 100 where better health is associated with higher scale values</p>
</dd>
<dt><code>mental</code></dt>
<dd>
<p>a binary measure of poor mental health ( 1=Yes, 0=No )</p>
</dd>
<dt><code>damage</code></dt>
<dd>
<p>ordered interval for the CD4 count, which is an indicator of how much damage HIV has caused to the immune system</p>
</dd>
<dt><code>treatment</code></dt>
<dd>
<p>a three-level ordered variable: 0=Not currently taking HAART (Highly Active AntiretRoviral Therapy) 1=taking HAART but nonadherent, 2=taking HAART and adherent</p>
</dd>
</dl>
<h3>Details</h3>
<p>A missing value in the log virus load level was assigned to individuals who either could not recall their viral load level, did not have a viral load test in the six month preceding the interview, or reported their viral loads as "good" or "bad".</p>
<h3>Source</h3>
<p><a href="http://cchps.columbia.edu/research.cfm">http://cchps.columbia.edu/research.cfm</a></p>
<h3>References</h3>
<p>Messeri P, Lee G, Abramson DA, Aidala A, Chiasson MA, Jones JD. (2003). “Antiretroviral therapy and declining AIDS mortality in New York City”. <em>Medical Care</em> 41:512–521.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38134.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38134.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mi-chain.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38134.json';</script>