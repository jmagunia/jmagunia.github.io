---
title: R Dataset / Package COUNT / mdvis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mdvis</span> data set which pertains to mdvis. The <span class="mono">mdvis</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">mdvis</span> data set in R by issuing the following command at the console <span class="mono">data("mdvis")</span>. This will load the data into a variable called <span class="mono">mdvis</span>. If R says the <span class="mono">mdvis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72455.csv">mdvis R data set</a></span>. The size of this file is about 93,542 bytes.</p><h2>mdvis</h2>
<h3>Description</h3>
<p>Data from a subset of the German Socio-Economic Panel (SOEP). The subset was created by Rabe-Hesketh and Skrondal (2005). Only working women are included in these data. Beginning in 1997, German health reform in part entailed a 200 co-payment as well as limits in provider reimbursement. Patients were surveyed for the one year panel (1996) prior to and the one year panel (1998) after reform to assess whether the number of physician visits by patients declined - which was the goal of reform legislation. The response, or variable to be explained by the model, is numvisit, which indicates the number of patient visits to a physician's office during a three month period.</p>
<h3>Usage</h3>
<pre>data(mdvis)</pre>
<h3>Format</h3>
<p>A data frame with 2,227 observations on the following 13 variables.</p>
<dl>
<dt><code>numvisit</code></dt>
<dd>
<p>visits to MD office 3mo prior</p>
</dd>
<dt><code>reform</code></dt>
<dd>
<p>1=interview yr post-reform: 1998;0=pre-reform:1996</p>
</dd>
<dt><code>badh</code></dt>
<dd>
<p>1=bad health; 0 = not bad health</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>Age(yrs 20-60)</p>
</dd>
<dt><code>educ</code></dt>
<dd>
<p>education(1:7-10;2=10.5-12;3=HSgrad+)</p>
</dd>
<dt><code>educ1</code></dt>
<dd>
<p>educ1= 7-10 years</p>
</dd>
<dt><code>educ2</code></dt>
<dd>
<p>educ2= 10.5-12 years</p>
</dd>
<dt><code>educ3</code></dt>
<dd>
<p>educ3= post secondary or high school</p>
</dd>
<dt><code>agegrp</code></dt>
<dd>
<p>age: 1=20-39; 2=40-49; 3=50-60</p>
</dd>
<dt><code>age1</code></dt>
<dd>
<p>age 20-39</p>
</dd>
<dt><code>age2</code></dt>
<dd>
<p>age 40-49</p>
</dd>
<dt><code>age3</code></dt>
<dd>
<p>age 50-60</p>
</dd>
<dt><code>loginc</code></dt>
<dd>
<p>log(household income in DM)</p>
</dd>
</dl>
<h3>Details</h3>
<p>mdvis is saved as a data frame. Count models typically use docvis as response variable. 0 counts are included</p>
<h3>Source</h3>
<p>German Socio-Economic Panel (SOEP), 1995 pre-reform; 1998 post reform. Created by Rabe-Hesketh and Skrondal (2005).</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2007, 2011), Negative Binomial Regression, Cambridge University Press Hilbe, Joseph M (2009), Logistic Regression Models, Chapman &amp; Hall/CRC Rabe-Hesketh, S. and A. Skrondal (2005). Multilevel and Longitudinal Modeling Using Stata, College Station: Stata Press.</p>
<h3>Examples</h3>
<pre>
data(mdvis)
glmmdp &lt;- glm(numvisit ~ reform + factor(educ) + factor(agegrp), family=poisson, data=mdvis)
summary(glmmdp)
exp(coef(glmmdp))
library(MASS)
glmmdnb &lt;- glm.nb(numvisit ~ reform + factor(educ) + factor(agegrp), data=mdvis)
summary(glmmdnb)
exp(coef(glmmdnb))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72455.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72455.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-mdvis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72455.json';</script>