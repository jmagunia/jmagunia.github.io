---
title: R Dataset / Package DAAG / nsw74psid1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nsw74psid1</span> data set which pertains to Labour Training Evaluation Data. The <span class="mono">nsw74psid1</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">nsw74psid1</span> data set in R by issuing the following command at the console <span class="mono">data("nsw74psid1")</span>. This will load the data into a variable called <span class="mono">nsw74psid1</span>. If R says the <span class="mono">nsw74psid1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-20278.csv">nsw74psid1 R data set</a></span>. The size of this file is about 113,463 bytes.</p><h2>Labour Training Evaluation Data</h2>
<h3>Description</h3>
<p>This data frame contains 2675 rows and 10 columns. These data are pertinent to an investigation of the way that earnings changed, between 1974-1975 and 1978, in the absence of training. Data for the experimental treatment group (NSW) were combined with control data results from the Panel Study of Income Dynamics (PSID) study.</p>
<h3>Usage</h3>
<pre>nsw74psid1</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>trt</dt>
<dd>
<p>a numeric vector identifying the study in which the subjects were enrolled (0 = PSID, 1 = NSW).</p>
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
<h3>Source</h3>
<p><a href="http://www.columbia.edu/~rd247/nswdata.html">http://www.columbia.edu/~rd247/nswdata.html</a></p>
<h3>References</h3>
<p>Dehejia, R.H. and Wahba, S. 1999. Causal effects in non-experimental studies: re-evaluating the evaluation of training programs. Journal of the American Statistical Association 94: 1053-1062.</p>
<p>Lalonde, R. 1986. Evaluating the economic evaluations of training programs. American Economic Review 76: 604-620.</p>
<h3>Examples</h3>
<pre>
print("Interpretation of Regression Coefficients - Example 6.6") nsw74psid1.lm &lt;- lm(re78~ trt+ (age + educ + re74 + re75) +
 (black + hisp + marr + nodeg), data = nsw74psid1)
 summary(nsw74psid1.lm)$coef
options(digits=4)
sapply(nsw74psid1[, c(2,3,8,9,10)], quantile, prob=c(.25,.5,.75,.95,1))
attach(nsw74psid1)
sapply(nsw74psid1[trt==1, c(2,3,8,9,10)], quantile, 
prob=c(.25,.5,.75,.95,1))
pause()here &lt;- age &lt;= 40 &amp; re74&lt;=5000 &amp; re75 &lt;= 5000 &amp; re78 &lt; 30000 
nsw74psidA &lt;- nsw74psid1[here, ]
detach(nsw74psid1)
table(nsw74psidA$trt)
pause()A1.lm &lt;- lm(re78 ~ trt + (age + educ + re74 + re75) + (black +
hisp + marr + nodeg), data = nsw74psidA)
summary(A1.lm)$coef
pause()A2.lm &lt;- lm(re78 ~ trt + (age + educ + re74 + re75) * (black + 
hisp + marr + nodeg), data = nsw74psidA)
anova(A1.lm, A2.lm)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-20278.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-20278.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-nsw74psid1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-20278.json';</script>