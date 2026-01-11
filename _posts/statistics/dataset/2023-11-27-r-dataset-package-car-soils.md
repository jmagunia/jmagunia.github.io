---
title: R Dataset / Package car / Soils
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Soils</span> data set which pertains to Soil Compositions of Physical and Chemical Characteristics. The <span class="mono">Soils</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Soils</span> data set in R by issuing the following command at the console <span class="mono">data("Soils")</span>. This will load the data into a variable called <span class="mono">Soils</span>. If R says the <span class="mono">Soils</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-53964.csv">Soils R data set</a></span>. The size of this file is about 3,654 bytes.</p><h2>Soil Compositions of Physical and Chemical Characteristics</h2>
<h3>Description</h3>
<p>Soil characteristics were measured on samples from three types of contours (Top, Slope, and Depression) and at four depths (0-10cm, 10-30cm, 30-60cm, and 60-90cm). The area was divided into 4 blocks, in a randomized block design. (Suggested by Michael Friendly.)</p>
<h3>Usage</h3>
<pre>Soils</pre>
<h3>Format</h3>
<p>A data frame with 48 observations on the following 14 variables. There are 3 factors and 9 response variables.</p>
<dl>
<dt><code>Group</code></dt>
<dd>
<p>a factor with 12 levels, corresponding to the combinations of <code>Contour</code> and <code>Depth</code></p>
</dd>
<dt><code>Contour</code></dt>
<dd>
<p>a factor with 3 levels: <code>Depression</code> <code>Slope</code> <code>Top</code></p>
</dd>
<dt><code>Depth</code></dt>
<dd>
<p>a factor with 4 levels: <code>0-10</code> <code>10-30</code> <code>30-60</code> <code>60-90</code></p>
</dd>
<dt><code>Gp</code></dt>
<dd>
<p>a factor with 12 levels, giving abbreviations for the groups: <code>D0</code> <code>D1</code> <code>D3</code> <code>D6</code> <code>S0</code> <code>S1</code> <code>S3</code> <code>S6</code> <code>T0</code> <code>T1</code> <code>T3</code> <code>T6</code></p>
</dd>
<dt><code>Block</code></dt>
<dd>
<p>a factor with levels <code>1</code> <code>2</code> <code>3</code> <code>4</code></p>
</dd>
<dt><code>pH</code></dt>
<dd>
<p>soil pH</p>
</dd>
<dt><code>N</code></dt>
<dd>
<p>total nitrogen in %</p>
</dd>
<dt><code>Dens</code></dt>
<dd>
<p>bulk density in gm/cm$^3$</p>
</dd>
<dt><code>P</code></dt>
<dd>
<p>total phosphorous in ppm</p>
</dd>
<dt><code>Ca</code></dt>
<dd>
<p>calcium in me/100 gm.</p>
</dd>
<dt><code>Mg</code></dt>
<dd>
<p>magnesium in me/100 gm.</p>
</dd>
<dt><code>K</code></dt>
<dd>
<p>phosphorous in me/100 gm.</p>
</dd>
<dt><code>Na</code></dt>
<dd>
<p>sodium in me/100 gm.</p>
</dd>
<dt><code>Conduc</code></dt>
<dd>
<p>conductivity</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data provide good examples of MANOVA and canonical discriminant analysis in a somewhat complex multivariate setting. They may be treated as a one-way design (ignoring <code>Block</code>), by using either <code>Group</code> or <code>Gp</code> as the factor, or a two-way randomized block design using <code>Block</code>, <code>Contour</code> and <code>Depth</code> (quantitative, so orthogonal polynomial contrasts are useful).</p>
<h3>Source</h3>
<p>Horton, I. F.,Russell, J. S., and Moore, A. W. (1968) Multivariate-covariance and canonical analysis: A method for selecting the most effective discriminators in a multivariate situation. <em>Biometrics</em> <b>24</b>, 845–858. Originally from <span class="samp"><a href="http://www.stat.lsu.edu/faculty/moser/exst7037/soils.sas">http://www.stat.lsu.edu/faculty/moser/exst7037/soils.sas</a></span> but no longer available there.</p>
<h3>References</h3>
<p>Khattree, R., and Naik, D. N. (2000) <em>Multivariate Data Reduction and Discrimination with SAS Software.</em> SAS Institute.</p>
<p>Friendly, M. (2006) Data ellipses, HE plots and reduced-rank displays for multivariate linear models: SAS software and examples. <em>Journal of Statistical Software</em>, 17(6), <a href="http://www.jstatsoft.org/v17/i06">http://www.jstatsoft.org/v17/i06</a>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-53964.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-53964.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-soils.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-53964.json';</script>