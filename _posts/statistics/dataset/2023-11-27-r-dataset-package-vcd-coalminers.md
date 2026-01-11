---
title: R Dataset / Package vcd / CoalMiners
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CoalMiners</span> data set which pertains to Breathlessness and Wheeze in Coal Miners. The <span class="mono">CoalMiners</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">CoalMiners</span> data set in R by issuing the following command at the console <span class="mono">data("CoalMiners")</span>. This will load the data into a variable called <span class="mono">CoalMiners</span>. If R says the <span class="mono">CoalMiners</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60731.csv">CoalMiners R data set</a></span>. The size of this file is about 825 bytes.</p><h2>Breathlessness and Wheeze in Coal Miners</h2>
<h3>Description</h3>
<p>Data from Ashford &amp; Sowden (1970) given by Agresti (1990) on the association between two pulmonary conditions, breathlessness and wheeze, in a large sample of coal miners who were smokers with no radiological evidence of pneumoconlosis, aged between 20–64 when examined. This data is frequently used as an example of fitting models for bivariate, binary responses.</p>
<h3>Usage</h3>
<pre>
data("CoalMiners")
</pre>
<h3>Format</h3>
<p>A 3-dimensional table of size 2 x 2 x 9 resulting from cross-tabulating variables for 18,282 coal miners. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">Breathlessness</td>
<td style="text-align: left;">B, NoB</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Wheeze</td>
<td style="text-align: left;">W, NoW</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">Age</td>
<td style="text-align: left;">20-24, 25-29, 30-34, ..., 60-64</td>
</tr>
</table>
<h3>Details</h3>
<p>In an earlier version of this data set, the first group, aged 20-24, was inadvertently omitted from this data table and the breathlessness variable was called wheeze and vice versa.</p>
<h3>Source</h3>
<p>Michael Friendly (2000), Visualizing Categorical Data, pages 82–83, 319–322.</p>
<h3>References</h3>
<p>A. Agresti (1990), <em>Categorical Data Analysis</em>. Wiley-Interscience, New York, Table 7.11, p. 237</p>
<p>J. R. Ashford and R. D. Sowdon (1970), Multivariate probit analysis, <em>Biometrics</em>, <b>26</b>, 535–546.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("CoalMiners")ftable(CoalMiners, row.vars = 3)## Fourfold display, both margins equated
fourfold(CoalMiners[,,2:9], mfcol = c(2,4))## Fourfold display, strata equated
fourfold(CoalMiners[,,2:9], std = "ind.max", mfcol = c(2,4))
## Log Odds Ratio Plot
lor_CM &lt;- loddsratio(CoalMiners)
summary(lor_CM)
plot(lor_CM)
lor_CM_df &lt;- as.data.frame(lor_CM)# fit linear models using WLS
age &lt;- seq(20, 60, by = 5)
lmod &lt;- lm(LOR ~ age, weights = 1 / ASE^2, data = lor_CM_df)
grid.lines(age, fitted(lmod), gp = gpar(col = "blue"))
qmod &lt;- lm(LOR ~ poly(age, 2), weights = 1 / ASE^2, data = lor_CM_df)
grid.lines(age, fitted(qmod), gp = gpar(col = "red"))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60731.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60731.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-coalminers.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60731.json';</script>