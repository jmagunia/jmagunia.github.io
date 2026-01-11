---
title: R Dataset / Package vcd / PreSex
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PreSex</span> data set which pertains to Pre-marital Sex and Divorce. The <span class="mono">PreSex</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">PreSex</span> data set in R by issuing the following command at the console <span class="mono">data("PreSex")</span>. This will load the data into a variable called <span class="mono">PreSex</span>. If R says the <span class="mono">PreSex</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-59955.csv">PreSex R data set</a></span>. The size of this file is about 570 bytes.</p><h2>Pre-marital Sex and Divorce</h2>
<h3>Description</h3>
<p>Data from Thornes \&amp; Collard (1979), reported in Gilbert (1981), on pre- and extra-marital sex and divorce.</p>
<h3>Usage</h3>
<pre>
data("PreSex")
</pre>
<h3>Format</h3>
<p>A 4-dimensional array resulting from cross-tabulating 1036 observations on 4 variables. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">MaritalStatus</td>
<td style="text-align: left;">Divorced, Married</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">ExtramaritalSex</td>
<td style="text-align: left;">Yes, No</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">PremaritalSex</td>
<td style="text-align: left;">Yes, No</td>
</tr>
<tr>
<td style="text-align: right;">4</td>
<td style="text-align: left;">Gender</td>
<td style="text-align: left;">Women, Men</td>
</tr>
</table>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data: <a href="http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/marital.sas">http://euclid.psych.yorku.ca/ftp/sas/vcd/catdata/marital.sas</a></p>
<h3>References</h3>
<p>G. N. Gilbert (1981), <em>Modelling Society: An Introduction to Loglinear Analysis for Social Researchers</em>. Allen and Unwin, London.</p>
<p>B. Thornes \&amp; J. Collard (1979), <em>Who Divorces?</em>. Routledge \&amp; Kegan, London.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("PreSex")## Mosaic display for Gender and Premarital Sexual Experience
## (Gender Pre)
mosaic(margin.table(PreSex, c(3,4)), 
main = "Gender and Premarital Sex")## (Gender Pre)(Extra)
mosaic(margin.table(PreSex, c(2,3,4)), 
 expected = ~Gender * PremaritalSex + ExtramaritalSex ,
 main = "PreMaritalSex*Gender +Sex")## (Gender Pre Extra)(Marital)
mosaic(PreSex,
 expected = ~Gender*PremaritalSex*ExtramaritalSex + MaritalStatus,
 main = "PreMarital*ExtraMarital + MaritalStatus")## (GPE)(PEM)
mosaic(PreSex, 
 expected = ~ Gender * PremaritalSex * ExtramaritalSex
+ MaritalStatus * PremaritalSex * ExtramaritalSex,
 main = "G*P*E + P*E*M")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-59955.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-59955.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-presex.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-59955.json';</script>