---
title: R Dataset / Package robustbase / carrots
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">carrots</span> data set which pertains to Insect Damages on Carrots. The <span class="mono">carrots</span> data set is found in the <span class="mono">robustbase</span> R package. You can load the <span class="mono">carrots</span> data set in R by issuing the following command at the console <span class="mono">data("carrots")</span>. This will load the data into a variable called <span class="mono">carrots</span>. If R says the <span class="mono">carrots</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("robustbase")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24368.csv">carrots R data set</a></span>. The size of this file is about 394 bytes.</p><h2>Insect Damages on Carrots</h2>
<h3>Description</h3>
<p>The damage carrots data set from Phelps (1982) was used by McCullagh and Nelder (1989) in order to illustrate diagnostic techniques because of the presence of an outlier. In a soil experiment trial with three blocks, eight levels of insecticide were applied and the carrots were tested for insect damage.</p>
<h3>Usage</h3>
<pre>data(carrots)</pre>
<h3>Format</h3>
<p>A data frame with 24 observations on the following 4 variables.</p>
<dl>
<dt>success</dt>
<dd>
<p>integer giving the number of carrots with insect damage.</p>
</dd>
<dt>total</dt>
<dd>
<p>integer giving the total number of carrots per experimental unit.</p>
</dd>
<dt>logdose</dt>
<dd>
<p>a numeric vector giving log(dose) values (eight different levels only).</p>
</dd>
<dt>block</dt>
<dd>
<p>factor with levels <code>B1</code> to <code>B3</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>Phelps, K. (1982). Use of the complementary log-log function to describe doseresponse relationships in insecticide evaluation field trials.In R. Gilchrist (Ed.), <em>Lecture Notes in Statistics, No. 14. GLIM.82: Proceedings of the International Conference on Generalized Linear Models</em>; Springer-Verlag.</p>
<h3>References</h3>
<p>McCullagh P. and Nelder, J. A. (1989) <em>Generalized Linear Models.</em> London: Chapman and Hall.</p>
<p>Eva Cantoni and Elvezio Ronchetti (2001); JASA, andEva Cantoni (2004); JSS, see <code>glmrob</code></p>
<h3>Examples</h3>
<pre>
data(carrots)
str(carrots)
plot(success/total ~ logdose, data = carrots, col = as.integer(block))
coplot(success/total ~ logdose | block, data = carrots)## Classical glm
Cfit0 &lt;- glm(cbind(success, total-success) ~ logdose + block,
 data=carrots, family=binomial)
summary(Cfit0)## Robust Fit (see help(glmrob)) ....
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24368.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24368.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-robustbase-carrots.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24368.json';</script>