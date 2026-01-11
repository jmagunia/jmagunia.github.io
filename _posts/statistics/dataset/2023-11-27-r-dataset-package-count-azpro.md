---
title: R Dataset / Package COUNT / azpro
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">azpro</span> data set which pertains to azpro. The <span class="mono">azpro</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">azpro</span> data set in R by issuing the following command at the console <span class="mono">data("azpro")</span>. This will load the data into a variable called <span class="mono">azpro</span>. If R says the <span class="mono">azpro</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15359.csv">azpro R data set</a></span>. The size of this file is about 82,747 bytes.</p><h2>azpro</h2>
<h3>Description</h3>
<p>Data come from the 1991 Arizona cardiovascular patient files. A subset of the fields was selected to model the differential length of stay for patients entering the hospital to receive one of two standard cardiovascular procedures: CABG and PTCA. CABG is the standard acronym for Coronary Artery Bypass Graft, where the flow of blood in a diseased or blocked coronary artery or vein has been grafted to bypass the diseased sections. PTCA, or Percutaneous Transluminal Coronary Angioplasty, is a method of placing a balloon in a blocked coronary artery to open it to blood flow. It is a much less severe method of treatment for those having coronary blockage, with a corresponding reduction in risk.</p>
<h3>Usage</h3>
<pre>data(azpro)</pre>
<h3>Format</h3>
<p>A data frame with 3589 observations on the following 6 variables.</p>
<dl>
<dt><code>los</code></dt>
<dd>
<p>length of hospital stay</p>
</dd>
<dt><code>procedure</code></dt>
<dd>
<p>1=CABG;0=PTCA</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>1=Male; 0=female</p>
</dd>
<dt><code>admit</code></dt>
<dd>
<p>1=Urgent/Emerg; 0=elective (type of admission)</p>
</dd>
<dt><code>age75</code></dt>
<dd>
<p>1= Age&gt;75; 0=Age&lt;=75</p>
</dd>
<dt><code>hospital</code></dt>
<dd>
<p>encrypted facility code (string)</p>
</dd>
</dl>
<h3>Details</h3>
<p>azpro is saved as a data frame. Count models use los as response variable. 0 counts are structurally excluded</p>
<h3>Source</h3>
<p>1991 Arizona Medpar data, cardiovascular patient files, National Health Economics &amp; Research Co.</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC</p>
<h3>Examples</h3>
<pre>
data(azpro)
glmazp &lt;- glm(los ~ procedure + sex + admit, family=poisson, data=azpro)
summary(glmazp)
exp(coef(glmazp))
#glmaznb &lt; -glm.nb(los ~ procedure + sex + admit, data=azpro)
#summary(glmaznb)
#exp(coef(glmaznb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15359.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15359.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-azpro.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15359.json';</script>