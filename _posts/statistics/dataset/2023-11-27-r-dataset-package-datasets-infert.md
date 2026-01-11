---
title: R Dataset / Package datasets / infert
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">infert</span> data set which pertains to Infertility after Spontaneous and Induced Abortion. The <span class="mono">infert</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">infert</span> data set in R by issuing the following command at the console <span class="mono">data("infert")</span>. This will load the data into a variable called <span class="mono">infert</span>. If R says the <span class="mono">infert</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65073.csv">infert R data set</a></span>. The size of this file is about 6,715 bytes.</p><h2>Infertility after Spontaneous and Induced Abortion</h2>
<h3>Description</h3>
<p>This is a matched case-control study dating from before the availability of conditional logistic regression.</p>
<h3>Usage</h3>
<pre>infert</pre>
<h3>Format</h3>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">1.</td>
<td style="text-align: left;">Education</td>
<td style="text-align: left;">0 = 0-5 years</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">1 = 6-11 years</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 = 12+ years</td>
</tr>
<tr>
<td style="text-align: right;">2.</td>
<td style="text-align: left;">age</td>
<td style="text-align: left;">age in years of case</td>
</tr>
<tr>
<td style="text-align: right;">3.</td>
<td style="text-align: left;">parity</td>
<td style="text-align: left;">count</td>
</tr>
<tr>
<td style="text-align: right;">4.</td>
<td style="text-align: left;">number of prior</td>
<td style="text-align: left;">0 = 0</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;">induced abortions</td>
<td style="text-align: left;">1 = 1</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 = 2 or more</td>
</tr>
<tr>
<td style="text-align: right;">5.</td>
<td style="text-align: left;">case status</td>
<td style="text-align: left;">1 = case</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">0 = control</td>
</tr>
<tr>
<td style="text-align: right;">6.</td>
<td style="text-align: left;">number of prior</td>
<td style="text-align: left;">0 = 0</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;">spontaneous abortions</td>
<td style="text-align: left;">1 = 1</td>
</tr>
<tr>
<td style="text-align: right;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;">2 = 2 or more</td>
</tr>
<tr>
<td style="text-align: right;">7.</td>
<td style="text-align: left;">matched set number</td>
<td style="text-align: left;">1-83</td>
</tr>
<tr>
<td style="text-align: right;">8.</td>
<td style="text-align: left;">stratum number</td>
<td style="text-align: left;">1-63</td>
</tr>
</table>
<h3>Note</h3>
<p>One case with two prior spontaneous abortions and two prior induced abortions is omitted.</p>
<h3>Source</h3>
<p>Trichopoulos <em>et al</em> (1976) <em>Br. J. of Obst. and Gynaec.</em> <b>83</b>, 645–650.</p>
<h3>Examples</h3>
<pre>
require(stats)
model1 &lt;- glm(case ~ spontaneous+induced, data = infert, family = binomial())
summary(model1)
## adjusted for other potential confounders:
summary(model2 &lt;- glm(case ~ age+parity+education+spontaneous+induced,
 data = infert, family = binomial()))
## Really should be analysed by conditional logistic regression
## which is in the survival package
if(require(survival)){
model3 &lt;- clogit(case ~ spontaneous+induced+strata(stratum), data = infert)
print(summary(model3))
detach()# survival (conflicts)
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65073.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65073.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-infert.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65073.json';</script>