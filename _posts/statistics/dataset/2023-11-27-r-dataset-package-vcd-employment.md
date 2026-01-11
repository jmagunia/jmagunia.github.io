---
title: R Dataset / Package vcd / Employment
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Employment</span> data set which pertains to Employment Status. The <span class="mono">Employment</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Employment</span> data set in R by issuing the following command at the console <span class="mono">data("Employment")</span>. This will load the data into a variable called <span class="mono">Employment</span>. If R says the <span class="mono">Employment</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51322.csv">Employment R data set</a></span>. The size of this file is about 836 bytes.</p><h2>Employment Status</h2>
<h3>Description</h3>
<p>Data from a 1974 Danish study given by Andersen (1991) on the employees who had been laid off. The workers are classified by their employment status on 1975-01-01, the cause of their layoff and the length of employment before they were laid off.</p>
<h3>Usage</h3>
<pre>
data("Employment")
</pre>
<h3>Format</h3>
<p>A 3-dimensional array resulting from cross-tabulating variables for 1314 employees. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">EmploymentStatus</td>
<td style="text-align: left;">NewJob, Unemployed</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">EmploymentLength</td>
<td style="text-align: left;">&lt;1Mo, 1-3Mo, 3-12Mo, 1-2Yr, 2-5Yr, &gt;5Yr</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">LayoffCause</td>
<td style="text-align: left;">Closure, Replaced</td>
</tr>
</table>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data, pages 126–129.</p>
<h3>References</h3>
<p>E. B. Andersen (1991), <em>The Statistical Analysis of Categorical Data</em>. Springer-Verlag, Berlin.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("Employment")## Employment Status
mosaic(Employment,
 expected = ~ LayoffCause * EmploymentLength + EmploymentStatus,
 main = "Layoff*EmployLength + EmployStatus")mosaic(Employment,
 expected = ~ LayoffCause * EmploymentLength + LayoffCause * EmploymentStatus,
 main = "Layoff*EmployLength + Layoff*EmployStatus")## Stratified viewgrid.newpage()
pushViewport(viewport(layout = grid.layout(ncol = 2)))
pushViewport(viewport(layout.pos.col = 1))## Closure
mosaic(Employment[,,1], main = "Layoff: Closure", newpage = FALSE)popViewport(1)
pushViewport(viewport(layout.pos.col = 2))## Replaced
mosaic(Employment[,,2], main = "Layoff: Replaced", newpage = FALSE)
popViewport(2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51322.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51322.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-employment.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51322.json';</script>