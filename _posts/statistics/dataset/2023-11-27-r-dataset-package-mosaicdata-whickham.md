---
title: R Dataset / Package mosaicData / Whickham
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Whickham</span> data set which pertains to Data from the Whickham survey. The <span class="mono">Whickham</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Whickham</span> data set in R by issuing the following command at the console <span class="mono">data("Whickham")</span>. This will load the data into a variable called <span class="mono">Whickham</span>. If R says the <span class="mono">Whickham</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-32411.csv">Whickham R data set</a></span>. The size of this file is about 21,262 bytes.</p><h2>Data from the Whickham survey</h2>
<h3>Description</h3>
<p>Data on age, smoking, and mortality from a one-in-six survey of the electoral roll in Whickham, a mixed urban and rural district near Newcastle upon Tyne, in the UK. The survey was conducted in 1972-1974 to study heart disease and thyroid disease. A follow-up on those in the survey was conducted twenty years later.</p>
<h3>Usage</h3>
<pre>
data(Whickham)
</pre>
<h3>Format</h3>
<p>A data frame with 1314 observations on women for the following variables.</p>
<ul>
<li>
<p><code>outcome</code> survival status after 20 years: a factor with levels <code>Alive</code> <code>Dead</code></p>
</li>
<li>
<p><code>smoker</code> smoking status at baseline: a factor with levels <code>No</code> <code>Yes</code></p>
</li>
<li>
<p><code>age</code> age (in years) at the time of the first survey</p>
</li>
</ul>
<h3>Details</h3>
<p>This dataset contains a subset of the survey sample: women who were classified as current smokers or as never having smoked. The data were synthesized from the summary description tables given in the Appleton et al al paper.</p>
<h3>References</h3>
<p>DR Appleton, JM French, MPJ Vanderpump. "Ignoring a covariate: an example of Simpson's paradox". (1996) <em>American Statistician</em>, 50(4):340-341.</p>
<h3>Examples</h3>
<pre>
data(Whickham)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-32411.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-32411.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-whickham.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-32411.json';</script>