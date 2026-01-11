---
title: R Dataset / Package DAAG / cps2
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cps2</span> data set which pertains to Labour Training Evaluation Data. The <span class="mono">cps2</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cps2</span> data set in R by issuing the following command at the console <span class="mono">data("cps2")</span>. This will load the data into a variable called <span class="mono">cps2</span>. If R says the <span class="mono">cps2</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-20279.csv">cps2 R data set</a></span>. The size of this file is about 91,486 bytes.</p><h2>Labour Training Evaluation Data</h2>
<h3>Description</h3>
<p>A non-experimental "control" group, used in various studies of the effect of a labor training program, alternative to the experimental control group in <code>nswdemo</code>.</p>
<h3>Usage</h3>
<pre>cps1
cps2
cps3
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>trt</dt>
<dd>
<p>a numeric vector identifying the study in which the subjects were enrolled (0 = Control, 1 = treated).</p>
</dd>
<dt>age</dt>
<dd>
<p>age (in years).</p>
</dd>
<dt>educ</dt>
<dd>
<p>years of education.</p>
</dd>
<dt>black</dt>
<dd>
<p>(0 = not black, 1 = black).</p>
</dd>
<dt>hisp</dt>
<dd>
<p>(0 = not hispanic, 1 = hispanic).</p>
</dd>
<dt>marr</dt>
<dd>
<p>(0 = not married, 1 = married).</p>
</dd>
<dt>nodeg</dt>
<dd>
<p>(0 = completed high school, 1 = dropout).</p>
</dd>
<dt>re74</dt>
<dd>
<p>real earnings in 1974.</p>
</dd>
<dt>re75</dt>
<dd>
<p>real earnings in 1975.</p>
</dd>
<dt>re78</dt>
<dd>
<p>real earnings in 1978.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The <code>cps1</code> and <code>psid1</code> data sets are two non-experimental "control" groups, alternative to that in <code>nswdemo</code>, used in investigating whether use of such a non-experimental control group can be satisfactory. <code>cps2</code> and <code>cps3</code> are subsets of <code>cps1</code>, designed to be better matched to the experimental data than <code>cps1</code>. Similary <code>psid2</code> and <code>psid3</code> are subsets of <code>psid1</code>, designed to be better matched to the experimental data than <code>psid1</code>.</p>
<h3>Source</h3>
<p><a href="http://www.nber.org/~rdehejia/nswdata.html">http://www.nber.org/~rdehejia/nswdata.html</a></p>
<h3>References</h3>
<p>Dehejia, R.H. and Wahba, S. 1999. Causal effects in non-experimental studies: re-evaluating the evaluation of training programs. Journal of the American Statistical Association 94: 1053-1062.</p>
<p>Lalonde, R. 1986. Evaluating the economic evaluations of training programs. American Economic Review 76: 604-620.</p>
<p>Smith, J. A. and Todd, P.E. 2005,"Does Matching overcome LaLonde's critique of nonexperimental estimators", <em>Journal of Econometrics</em> 125: 305-353.</p>
<p>Dehejia, R.H. 2005. Practical propensity score matching: a reply to Smith and Todd. <em>Journal of Econometrics</em> 125: 355-364.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-20279.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-20279.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cps2.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-20279.json';</script>