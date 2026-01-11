---
title: R Dataset / Package geepack / seizure
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">seizure</span> data set which pertains to Epiliptic Seizures. The <span class="mono">seizure</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">seizure</span> data set in R by issuing the following command at the console <span class="mono">data("seizure")</span>. This will load the data into a variable called <span class="mono">seizure</span>. If R says the <span class="mono">seizure</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66108.csv">seizure R data set</a></span>. The size of this file is about 1,035 bytes.</p><h2>Epiliptic Seizures</h2>
<h3>Description</h3>
<p>The <code>seizure</code> data frame has 59 rows and 7 columns. The dataset has the number of epiliptic seizures in each of four two-week intervals, and in a baseline eight-week inverval, for treatment and control groups with a total of 59 individuals.</p>
<h3>Usage</h3>
<pre>data(seizure)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>y1</dt>
<dd>
<p>the number of epiliptic seizures in the 1st 2-week interval</p>
</dd>
<dt>y2</dt>
<dd>
<p>the number of epiliptic seizures in the 2nd 2-week interval</p>
</dd>
<dt>y3</dt>
<dd>
<p>the number of epiliptic seizures in the 3rd 2-week interval</p>
</dd>
<dt>y4</dt>
<dd>
<p>the number of epiliptic seizures in the 4th 2-week interval</p>
</dd>
<dt>trt</dt>
<dd>
<p>an indicator of treatment</p>
</dd>
<dt>base</dt>
<dd>
<p>the number of epilitic seizures in a baseline 8-week interval</p>
</dd>
<dt>age</dt>
<dd>
<p>a numeric vector of subject age</p>
</dd>
</dl>
<h3>Source</h3>
<p>Thall, P.F. and Vail S.C. (1990) Some covariance models for longitudinal count data with overdispersion. <em>Biometrics</em> <b>46</b>: 657–671.</p>
<h3>References</h3>
<p>Diggle, P.J., Liang, K.Y., and Zeger, S.L. (1994) Analysis of Longitudinal Data. Clarendon Press.</p>
<h3>Examples</h3>
<pre>
data(seizure)
## Diggle, Liang, and Zeger (1994) pp166-168, compare Table 8.10
seiz.l &lt;- reshape(seizure,
varying=list(c("base","y1", "y2", "y3", "y4")),
v.names="y", times=0:4, direction="long")
seiz.l &lt;- seiz.l[order(seiz.l$id, seiz.l$time),]
seiz.l$t &lt;- ifelse(seiz.l$time == 0, 8, 2)
seiz.l$x &lt;- ifelse(seiz.l$time == 0, 0, 1)
m1 &lt;- geese(y ~ offset(log(t)) + x + trt + x:trt, id = id,
data=seiz.l, corstr="exch", family=poisson)
summary(m1)
m2 &lt;- geese(y ~ offset(log(t)) + x + trt + x:trt, id = id,
data = seiz.l, subset = id!=49,
corstr = "exch", family=poisson)
summary(m2)## Thall and Vail (1990)
seiz.l &lt;- reshape(seizure, varying=list(c("y1","y2","y3","y4")),
v.names="y", direction="long")
seiz.l &lt;- seiz.l[order(seiz.l$id, seiz.l$time),]
seiz.l$lbase &lt;- log(seiz.l$base / 4)
seiz.l$lage &lt;- log(seiz.l$age)
seiz.l$v4 &lt;- ifelse(seiz.l$time == 4, 1, 0)
m3 &lt;- geese(y ~ lbase + trt + lbase:trt + lage + v4, 
sformula = ~ as.factor(time) - 1, id = id,
data = seiz.l, corstr = "exchangeable", family=poisson)
## compare to Model 13 in Table 4, noticeable difference
summary(m3)## set up a design matrix for the correlation
z &lt;- model.matrix(~ age, data = seizure)# data is not seiz.l
## just to illustrate the scale link and correlation link
m4 &lt;- geese(y ~ lbase + trt + lbase:trt + lage + v4,
sformula = ~ as.factor(time)-1, id = id,
data = seiz.l, corstr = "ar1", family = poisson,
zcor = z, cor.link = "fisherz", sca.link = "log")
summary(m4)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66108.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66108.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-seizure.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66108.json';</script>