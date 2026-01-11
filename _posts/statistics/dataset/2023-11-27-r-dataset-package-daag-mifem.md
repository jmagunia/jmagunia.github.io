---
title: R Dataset / Package DAAG / mifem
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mifem</span> data set which pertains to Mortality Outcomes for Females Suffering Myocardial Infarction. The <span class="mono">mifem</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">mifem</span> data set in R by issuing the following command at the console <span class="mono">data("mifem")</span>. This will load the data into a variable called <span class="mono">mifem</span>. If R says the <span class="mono">mifem</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66652.csv">mifem R data set</a></span>. The size of this file is about 53,855 bytes.</p><h2>Mortality Outcomes for Females Suffering Myocardial Infarction</h2>
<h3>Description</h3>
<p>The <code>mifem</code> data frame has 1295 rows and 10 columns. This is the female subset of the 'monica' data frame</p>
<h3>Usage</h3>
<pre>mifem</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>outcome</dt>
<dd>
<p>mortality outcome, a factor with levels <code>live</code>, <code>dead</code></p>
</dd>
<dt>age</dt>
<dd>
<p>age at onset</p>
</dd>
<dt>yronset</dt>
<dd>
<p>year of onset</p>
</dd>
<dt>premi</dt>
<dd>
<p>previous myocardial infarction event, a factor with levels <code>y</code>, <code>n</code>, <code>nk</code> not known</p>
</dd>
<dt>smstat</dt>
<dd>
<p>smoking status, a factor with levels <code>c</code> current, <code>x</code> ex-smoker, <code>n</code> non-smoker, <code>nk</code> not known</p>
</dd>
<dt>diabetes</dt>
<dd>
<p>a factor with levels <code>y</code>, <code>n</code>, <code>nk</code> not known</p>
</dd>
<dt>highbp</dt>
<dd>
<p>high blood pressure, a factor with levels <code>y</code>, <code>n</code>, <code>nk</code> not known</p>
</dd>
<dt>hichol</dt>
<dd>
<p>high cholesterol, a factor with levels <code>y</code>, <code>n</code> <code>nk</code> not known</p>
</dd>
<dt>angina</dt>
<dd>
<p>a factor with levels <code>y</code>, <code>n</code>, <code>nk</code> not known</p>
</dd>
<dt>stroke</dt>
<dd>
<p>a factor with levels <code>y</code>, <code>n</code>, <code>nk</code> not known</p>
</dd>
</dl>
<h3>Source</h3>
<p>Newcastle (Australia) centre of the Monica project; see the web site <a href="http://www.ktl.fi/monica">http://www.ktl.fi/monica</a></p>
<h3>Examples</h3>
<pre>
print("CART - Example 10.7")
summary(mifem)
pause()require(rpart)
mifem.rpart &lt;- rpart(outcome ~ ., data = mifem, cp = 0.0025)
plotcp(mifem.rpart)
printcp(mifem.rpart)
pause()mifemb.rpart &lt;- prune(mifem.rpart, cp=0.006)
print(mifemb.rpart)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66652.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66652.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-mifem.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66652.json';</script>