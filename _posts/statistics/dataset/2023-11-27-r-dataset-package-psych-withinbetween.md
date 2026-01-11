---
title: R Dataset / Package psych / withinBetween
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">withinBetween</span> data set which pertains to An example of the distinction between within group and between group correlations. The <span class="mono">withinBetween</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">withinBetween</span> data set in R by issuing the following command at the console <span class="mono">data("withinBetween")</span>. This will load the data into a variable called <span class="mono">withinBetween</span>. If R says the <span class="mono">withinBetween</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94359.csv">withinBetween R data set</a></span>. The size of this file is about 441 bytes.</p><h2>An example of the distinction between within group and between group correlations</h2>
<h3>Description</h3>
<p>A demonstration that a correlation may be decomposed to a within group correlation and a between group correlations and these two correlations are independent. Between group correlations are sometimes called ecological correlations, the decomposition into within and between group correlations is a basic concept in multilevel modeling. This data set shows the composite correlations between 9 variables, representing 16 cases with four groups.</p>
<h3>Usage</h3>
<pre>data(withinBetween)</pre>
<h3>Format</h3>
<p>A data frame with 16 observations on the following 10 variables.</p>
<dl>
<dt><code>Group</code></dt>
<dd>
<p>An example grouping factor.</p>
</dd>
<dt><code>V1</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V2</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V3</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V4</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V5</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V6</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V7</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V8</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
<dt><code>V9</code></dt>
<dd>
<p>A column of 16 observations</p>
</dd>
</dl>
<h3>Details</h3>
<p>Correlations between individuals who belong to different natural groups (based upon e.g., ethnicity, age, gender, college major,or country) reflect an unknown mixture of the pooled correlation within each group as well as the correlation of the means of these groups. These two correlations are independent and do not allow inferences from one level (the group) to the other level (the individual). This data set shows this independence. The within group correlations between 9 variables are set to be 1, 0, and -1 while those between groups are also set to be 1, 0, -1. These two sets of correlations are crossed such that V1, V4, and V7 have within group correlations of 1, as do V2, V5 and V8, and V3, V6 and V9. V1 has a within group correlation of 0 with V2, V5, and V8, and a -1 within group correlation with V3, V6 and V9. V1, V2, and V3 share a between group correlation of 1, as do V4, V5 and V6, and V7, V8 and V9. The first group has a 0 between group correlation with the second and a -1 with the third group.</p>
<p><code>statsBy</code> can decompose the observed correlation in the between and within correlations. <code>sim.multilevel</code> can produce similar data.</p>
<h3>Source</h3>
<p>The data were created for this example</p>
<h3>References</h3>
<p>P. D. Bliese. Multilevel modeling in R (2.3) a brief introduction to R, the multilevel package and the nlme package, 2009.</p>
<p>Pedhazur, E.J. (1997) Multiple regression in behavioral research: explanation and prediction. Harcourt Brace.</p>
<p>Revelle, W. An introduction to psychometric theory with applications in R (in prep) Springer. Draft chapters available at <a href="http://personality-project.org/r/book/">http://personality-project.org/r/book/</a></p>
<h3>See Also</h3>
<p><code>statsBy</code>, <code>describeBy</code>, and <code>sim.multilevel</code></p>
<h3>Examples</h3>
<pre>
data(withinBetween)
pairs.panels(withinBetween,bg=c("red","blue","white","black")[withinBetween[,1]],
 pch=21,ellipses=FALSE)
stats &lt;- statsBy(withinBetween,'Group')
print(stats,short=FALSE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94359.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94359.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-withinbetween.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94359.json';</script>