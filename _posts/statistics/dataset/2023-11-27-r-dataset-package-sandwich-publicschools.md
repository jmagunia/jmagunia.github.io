---
title: R Dataset / Package sandwich / PublicSchools
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PublicSchools</span> data set which pertains to US Expenditures for Public Schools. The <span class="mono">PublicSchools</span> data set is found in the <span class="mono">sandwich</span> R package. You can load the <span class="mono">PublicSchools</span> data set in R by issuing the following command at the console <span class="mono">data("PublicSchools")</span>. This will load the data into a variable called <span class="mono">PublicSchools</span>. If R says the <span class="mono">PublicSchools</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("sandwich")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-12311.csv">PublicSchools R data set</a></span>. The size of this file is about 969 bytes.</p><h2>US Expenditures for Public Schools</h2>
<h3>Description</h3>
<p>Per capita expenditure on public schools and per capita income by state in 1979.</p>
<h3>Usage</h3>
<pre>data(PublicSchools)</pre>
<h3>Format</h3>
<p>A data frame containing 51 observations of 2 variables.</p>
<dl>
<dt>Expenditure</dt>
<dd>
<p>per capita expenditure on public schools,</p>
</dd>
<dt>Income</dt>
<dd>
<p>per capita income.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Table 14.1 in Greene (1993)</p>
<h3>References</h3>
<p>Cribari-Neto F. (2004), Asymptotic Inference Under Heteroskedasticity of Unknown Form, <em>Computational Statistics \&amp; Data Analysis</em>, <b>45</b>, 215-233.</p>
<p>Greene W.H. (1993), <em>Econometric Analysis</em>, 2nd edition. Macmillan Publishing Company, New York.</p>
<p>US Department of Commerce (1979), <em>Statistical Abstract of the United States</em>. US Government Printing Office, Washington, DC.</p>
<h3>Examples</h3>
<pre>
## Willam H. Greene, Econometric Analysis, 2nd Ed.
## Chapter 14
## load data set, p. 385, Table 14.1
data(PublicSchools)## omit NA in Wisconsin and scale income
ps &lt;- na.omit(PublicSchools)
ps$Income &lt;- ps$Income * 0.0001## fit quadratic regression, p. 385, Table 14.2
fmq &lt;- lm(Expenditure ~ Income + I(Income^2), data = ps)
summary(fmq)## compare standard and HC0 standard errors
## p. 391, Table 14.3
library(sandwich)
coef(fmq)
sqrt(diag(vcovHC(fmq, type = "const")))
sqrt(diag(vcovHC(fmq, type = "HC0")))
if(require(lmtest)) {
## compare t ratio
coeftest(fmq, vcov = vcovHC(fmq, type = "HC0"))## White test, p. 393, Example 14.5
wt &lt;- lm(residuals(fmq)^2 ~ poly(Income, 4), data = ps)
wt.stat &lt;- summary(wt)$r.squared * nrow(ps)
c(wt.stat, pchisq(wt.stat, df = 3, lower = FALSE))## Bresch-Pagan test, p. 395, Example 14.7
bptest(fmq, studentize = FALSE)
bptest(fmq)## Francisco Cribari-Neto, Asymptotic Inference, CSDA 45
## quasi z-tests, p. 229, Table 8
## with Alaska
coeftest(fmq, df = Inf)[3,4]
coeftest(fmq, df = Inf, vcov = vcovHC(fmq, type = "HC0"))[3,4]
coeftest(fmq, df = Inf, vcov = vcovHC(fmq, type = "HC3"))[3,4]
coeftest(fmq, df = Inf, vcov = vcovHC(fmq, type = "HC4"))[3,4]
## without Alaska (observation 2)
fmq1 &lt;- lm(Expenditure ~ Income + I(Income^2), data = ps[-2,])
coeftest(fmq1, df = Inf)[3,4]
coeftest(fmq1, df = Inf, vcov = vcovHC(fmq1, type = "HC0"))[3,4]
coeftest(fmq1, df = Inf, vcov = vcovHC(fmq1, type = "HC3"))[3,4]
coeftest(fmq1, df = Inf, vcov = vcovHC(fmq1, type = "HC4"))[3,4]
}## visualization, p. 230, Figure 1
plot(Expenditure ~ Income, data = ps,
xlab = "per capita income",
ylab = "per capita spending on public schools")
inc &lt;- seq(0.5, 1.2, by = 0.001)
lines(inc, predict(fmq, data.frame(Income = inc)), col = 4)
fml &lt;- lm(Expenditure ~ Income, data = ps)
abline(fml)
text(ps[2,2], ps[2,1], rownames(ps)[2], pos = 2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-12311.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-12311.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-sandwich-publicschools.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-12311.json';</script>