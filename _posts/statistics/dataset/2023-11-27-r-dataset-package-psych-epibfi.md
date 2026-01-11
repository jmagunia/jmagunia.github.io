---
title: R Dataset / Package psych / epi.bfi
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">epi.bfi</span> data set which pertains to 13 personality scales from the Eysenck Personality Inventory and Big 5 inventory. The <span class="mono">epi.bfi</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">epi.bfi</span> data set in R by issuing the following command at the console <span class="mono">data("epi.bfi")</span>. This will load the data into a variable called <span class="mono">epi.bfi</span>. If R says the <span class="mono">epi.bfi</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28433.csv">epi.bfi R data set</a></span>. The size of this file is about 8,971 bytes.</p><h2>13 personality scales from the Eysenck Personality Inventory and Big 5 inventory</h2>
<h3>Description</h3>
<p>A small data set of 5 scales from the Eysenck Personality Inventory, 5 from a Big 5 inventory, a Beck Depression Inventory, and State and Trait Anxiety measures. Used for demonstrations of correlations, regressions, graphic displays.</p>
<h3>Usage</h3>
<pre>data(epi.bfi)</pre>
<h3>Format</h3>
<p>A data frame with 231 observations on the following 13 variables.</p>
<dl>
<dt><code>epiE</code></dt>
<dd>
<p>EPI Extraversion</p>
</dd>
<dt><code>epiS</code></dt>
<dd>
<p>EPI Sociability (a subset of Extraversion items</p>
</dd>
<dt><code>epiImp</code></dt>
<dd>
<p>EPI Impulsivity (a subset of Extraversion items</p>
</dd>
<dt><code>epilie</code></dt>
<dd>
<p>EPI Lie scale</p>
</dd>
<dt><code>epiNeur</code></dt>
<dd>
<p>EPI neuroticism</p>
</dd>
<dt><code>bfagree</code></dt>
<dd>
<p>Big 5 inventory (from the IPIP) measure of Agreeableness</p>
</dd>
<dt><code>bfcon</code></dt>
<dd>
<p>Big 5 Conscientiousness</p>
</dd>
<dt><code>bfext</code></dt>
<dd>
<p>Big 5 Extraversion</p>
</dd>
<dt><code>bfneur</code></dt>
<dd>
<p>Big 5 Neuroticism</p>
</dd>
<dt><code>bfopen</code></dt>
<dd>
<p>Big 5 Openness</p>
</dd>
<dt><code>bdi</code></dt>
<dd>
<p>Beck Depression scale</p>
</dd>
<dt><code>traitanx</code></dt>
<dd>
<p>Trait Anxiety</p>
</dd>
<dt><code>stateanx</code></dt>
<dd>
<p>State Anxiety</p>
</dd>
</dl>
<h3>Details</h3>
<p>Self report personality scales tend to measure the “Giant 2" of Extraversion and Neuroticism or the “Big 5" of Extraversion, Neuroticism, Agreeableness, Conscientiousness, and Openness. Here is a small data set from Northwestern University undergraduates with scores on the Eysenck Personality Inventory (EPI) and a Big 5 inventory taken from the International Personality Item Pool.</p>
<h3>Source</h3>
<p>Data were collected at the Personality, Motivation, and Cognition Lab (PMCLab) at Northwestern by William Revelle)</p>
<h3>References</h3>
<p><a href="http://personality-project.org/pmc.html">http://personality-project.org/pmc.html</a></p>
<h3>Examples</h3>
<pre>
data(epi.bfi)
pairs.panels(epi.bfi[,1:5])
describe(epi.bfi)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28433.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28433.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-epibfi.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28433.json';</script>