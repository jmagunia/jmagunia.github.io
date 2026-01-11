---
title: R Dataset / Package datasets / UCBAdmissions
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UCBAdmissions</span> data set which pertains to Student Admissions at UC Berkeley. The <span class="mono">UCBAdmissions</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">UCBAdmissions</span> data set in R by issuing the following command at the console <span class="mono">data("UCBAdmissions")</span>. This will load the data into a variable called <span class="mono">UCBAdmissions</span>. If R says the <span class="mono">UCBAdmissions</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37099.csv">UCBAdmissions R data set</a></span>. The size of this file is about 670 bytes.</p><h2>Student Admissions at UC Berkeley</h2>
<h3>Description</h3>
<p>Aggregate data on applicants to graduate school at Berkeley for the six largest departments in 1973 classified by admission and sex.</p>
<h3>Usage</h3>
<pre>UCBAdmissions</pre>
<h3>Format</h3>
<p>A 3-dimensional array resulting from cross-tabulating 4526 observations on 3 variables. The variables and their levels are as follows:</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">No</td>
<td style="text-align: left;">Name</td>
<td style="text-align: left;">Levels</td>
</tr>
<tr>
<td style="text-align: right;">1</td>
<td style="text-align: left;">Admit</td>
<td style="text-align: left;">Admitted, Rejected</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Gender</td>
<td style="text-align: left;">Male, Female</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">Dept</td>
<td style="text-align: left;">A, B, C, D, E, F</td>
</tr>
</table>
<h3>Details</h3>
<p>This data set is frequently used for illustrating Simpson's paradox, see Bickel <em>et al</em> (1975). At issue is whether the data show evidence of sex bias in admission practices. There were 2691 male applicants, of whom 1198 (44.5%) were admitted, compared with 1835 female applicants of whom 557 (30.4%) were admitted. This gives a sample odds ratio of 1.83, indicating that males were almost twice as likely to be admitted. In fact, graphical methods (as in the example below) or log-linear modelling show that the apparent association between admission and sex stems from differences in the tendency of males and females to apply to the individual departments (females used to apply <em>more</em> to departments with higher rejection rates).</p>
<p>This data set can also be used for illustrating methods for graphical display of categorical data, such as the general-purpose mosaicplot or the fourfoldplot for 2-by-2-by-<i>k</i> tables.</p>
<h3>References</h3>
<p>Bickel, P. J., Hammel, E. A., and O'Connell, J. W. (1975) Sex bias in graduate admissions: Data from Berkeley. <em>Science</em>, <b>187</b>, 398–403.</p>
<h3>Examples</h3>
<pre>
require(graphics)
## Data aggregated over departments
apply(UCBAdmissions, c(1, 2), sum)
mosaicplot(apply(UCBAdmissions, c(1, 2), sum),
 main = "Student admissions at UC Berkeley")
## Data for individual departments
opar &lt;- par(mfrow = c(2, 3), oma = c(0, 0, 2, 0))
for(i in 1:6)
mosaicplot(UCBAdmissions[,,i],
xlab = "Admit", ylab = "Sex",
main = paste("Department", LETTERS[i]))
mtext(expression(bold("Student admissions at UC Berkeley")),
outer = TRUE, cex = 1.5)
par(opar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37099.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37099.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-ucbadmissions.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37099.json';</script>