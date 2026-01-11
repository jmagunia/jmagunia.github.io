---
title: R Dataset / Package psych / Schutz
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Schutz</span> data set which pertains to The Schutz correlation matrix example from Shapiro and ten Berge. The <span class="mono">Schutz</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Schutz</span> data set in R by issuing the following command at the console <span class="mono">data("Schutz")</span>. This will load the data into a variable called <span class="mono">Schutz</span>. If R says the <span class="mono">Schutz</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-38357.csv">Schutz R data set</a></span>. The size of this file is about 513 bytes.</p><h2>The Schutz correlation matrix example from Shapiro and ten Berge</h2>
<h3>Description</h3>
<p>Shapiro and ten Berge use the Schutz correlation matrix as an example for Minimum Rank Factor Analysis. The Schutz data set is also a nice example of how normal minres or maximum likelihood will lead to a Heywood case, but minrank factoring will not.</p>
<h3>Usage</h3>
<pre>data("Schutz")</pre>
<h3>Format</h3>
<p>The format is: num [1:9, 1:9] 1 0.8 0.28 0.29 0.41 0.38 0.44 0.4 0.41 0.8 ... - attr(*, "dimnames")=List of 2 ..$ :1] "Word meaning" "Odd Words" "Boots" "Hatchets" ... ..$ : chr [1:9] "V1" "V2" "V3" "V4" ...</p>
<h3>Details</h3>
<p>These are 9 cognitive variables of importance mainly because they are used as an example by Shapiro and ten Berge for their paper on Minimum Rank Factor Analysis.</p>
<p>The solution from the <code>fa</code> function with the fm='minrank' option is very close (but not exactly equal) to their solution.</p>
<h3>Source</h3>
<p>Richard E. Schutz,(1958) Factorial Validity of the Holzinger-Crowdeer Uni-factor tests. Educational and Psychological Measurement, 48, 873-875.</p>
<h3>References</h3>
<p>Alexander Shapiro and Jos M.F. ten Berge (2002) Statistical inference of minimum rank factor analysis. Psychometrika, 67. 70-94</p>
<h3>Examples</h3>
<pre>
data(Schutz)
corPlot(Schutz,numbers=TRUE,upper=FALSE)
#f4min &lt;- fa(Schutz,4,fm="minrank")#for an example of minimum rank factor Analysis
#compare to
#f4 &lt;- fa(Schutz,4,fm="mle")#for the maximum likelihood solution which has a Heywood case 
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38357.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38357.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-schutz.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38357.json';</script>