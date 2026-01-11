---
title: R Dataset / Package psych / Harman.8
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Harman.8</span> data set which pertains to Correlations of eight physical variables (from Harman, 1966). The <span class="mono">Harman.8</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Harman.8</span> data set in R by issuing the following command at the console <span class="mono">data("Harman.8")</span>. This will load the data into a variable called <span class="mono">Harman.8</span>. If R says the <span class="mono">Harman.8</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10416.csv">Harman.8 R data set</a></span>. The size of this file is about 544 bytes.</p><h2>Correlations of eight physical variables (from Harman, 1966)</h2>
<h3>Description</h3>
<p>A classic data set from Harman (1976) reporting the correlations of eight physical variables. Used by Harman for demonstrations of factor analysis (both principal axis and minimum residual).</p>
<h3>Usage</h3>
<pre>data(Harman.8)</pre>
<h3>Format</h3>
<p>The format is: num [1:8, 1:8] 1 0.846 0.805 0.859 0.473 0.398 0.301 0.382 0.846 1 ... - attr(*, "dimnames")=List of 2 ..$ : chr [1:8] "Height" "Arm span" "Length of forearm" "Length of lower leg" ... ..$ : chr [1:8] "V1" "V2" "V3" "V4" ...</p>
<h3>Details</h3>
<p>The Eight Physical Variables problem is taken from Harman (1976) and represents the correlations between eight physical variables for 305 girls. The two correlated clusters represent four measures of "lankiness" and then four measures of "stockiness". The original data were selected from 17 variables reported in an unpublished dissertation by Mullen (1939).</p>
<p>Variable 6 ("Bitrochanteric diamter") is the distance between the outer points of the hips.</p>
<p>The row names match the original Harman paper, the column names have been abbreviated.</p>
<p>The <code>fa</code> solution for principal axes (fm="pa") matches the reported minres solution, while the fm="minres" does not.</p>
<p>For those interested in teaching examples using various body measurements, see the body data set in the gclus package.</p>
<p>There are several other Harman examples in the psych package as well as in the dataseta and and GPArotation packages. The Harman 24 mental tests problem is in the basic datasets package at Harman74.cor.</p>
<h3>Source</h3>
<p>H. Harman and W.Jones. (1966) Factor analysis by minimizing residuals (minres). Psychometrika, 31(3):351-368.</p>
<h3>References</h3>
<p>Harman, Harry Horace (1976) Modern factor analysis, 3d ed., rev, University of Chicago Press. Chicago.</p>
<p>Harman, Harry Horace and Jones, W. (1966) Factor analysis by minimizing residuals (minres). Psychometrika, 31(3):351-368.</p>
<h3>See Also</h3>
<p><code>Harman</code>, <code>Harman.political</code> and <code>Harman74.cor</code></p>
<h3>Examples</h3>
<pre>
data(Harman.8)
cor.plot(Harman.8)
fa(Harman.8,2,rotate="none")#the minres solution
fa(Harman.8,2,rotate="none",fm="pa") #the principal axis solution</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10416.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10416.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-harman8.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10416.json';</script>