---
title: R Dataset / Package robustbase / pulpfiber
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">pulpfiber</span> data set which pertains to Pulp Fiber and Paper Data. The <span class="mono">pulpfiber</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">pulpfiber</span> data set in R by issuing the following command at the console <span class="mono">data("pulpfiber")</span>. This will load the data into a variable called <span class="mono">pulpfiber</span>. If R says the <span class="mono">pulpfiber</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88367.csv">pulpfiber R data set</a></span>. The size of this file is about 3,149 bytes.</p><h2>Pulp Fiber and Paper Data</h2>
<h3>Description</h3>
<p>Measurements of aspects pulp fibers and the paper produced from them. Four properties of each are measured in sixty-two samples.</p>
<h3>Usage</h3>
<pre>data(pulpfiber)</pre>
<h3>Format</h3>
<p>A data frame with 62 observations on the following 8 variables.</p>
<dl>
<dt><code>X1</code></dt>
<dd>
<p>numeric vector of arithmetic fiber length</p>
</dd>
<dt><code>X2</code></dt>
<dd>
<p>numeric vector of long fiber fraction</p>
</dd>
<dt><code>X3</code></dt>
<dd>
<p>numeric vector of fine fiber fraction</p>
</dd>
<dt><code>X4</code></dt>
<dd>
<p>numeric vector of zero span tensile</p>
</dd>
</dl>
<dl>
<dt><code>Y1</code></dt>
<dd>
<p>numeric vector of breaking length</p>
</dd>
<dt><code>Y2</code></dt>
<dd>
<p>numeric vector of elastic modulus</p>
</dd>
<dt><code>Y3</code></dt>
<dd>
<p>numeric vector of stress at failure</p>
</dd>
<dt><code>Y4</code></dt>
<dd>
<p>numeric vector of burst strength</p>
</dd>
</dl>
<h3>Details</h3>
<p>Cited from the reference article: <em>The dataset contains measurements of properties of pulp fibers and the paper made from them. The aim is to investigate relations between pulp fiber properties and the resulting paper properties. The dataset contains <i>n = 62</i> measurements of the following four pulp fiber characteristics: arithmetic fiber length, long fiber fraction, fine fiber fraction, and zero span tensile. The four paper properties that have been measured are breaking length, elastic modulus, stress at failure, and burst strength.</em></p>
<p>The goal is to predict the <i>q = 4</i> paper properties from the <i>p = 4</i> fiber characteristics.</p>
<h3>Author(s)</h3>
<p>port to <span style="font-family: Courier New, Courier; color: #666666;"><b>R</b></span> and this help page: Martin Maechler</p>
<h3>Source</h3>
<p>Rousseeuw, P. J., Van Aelst, S., Van Driessen, K., and Agulló, J. (2004) Robust multivariate regression; <em>Technometrics</em> <b>46</b>, 293–305.</p>
<p><a href="http://users.ugent.be/~svaelst/data/pulpfiber.txt">http://users.ugent.be/~svaelst/data/pulpfiber.txt</a></p>
<h3>References</h3>
<p>Lee, J. (1992) <em>Relationships Between Properties of Pulp-Fibre and Paper</em>, unpublished doctoral thesis, U. Toronto, Faculty of Forestry.</p>
<h3>Examples</h3>
<pre>
data(pulpfiber)
str(pulpfiber)pairs(pulpfiber, gap=.1)
## 2 blocks of 4 ..
c1 &lt;- cov(pulpfiber)
cR &lt;- covMcd(pulpfiber)
## how different are they: The robust estimate has more clear high correlations:
symnum(cov2cor(c1))
symnum(cov2cor(cR$cov))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88367.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88367.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-pulpfiber.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88367.json';</script>