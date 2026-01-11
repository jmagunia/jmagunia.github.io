---
title: R Dataset / Package psych / Harman.political
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Harman.political</span> data set which pertains to Eight political variables used by Harman (1967) as example 8.17 . The <span class="mono">Harman.political</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Harman.political</span> data set in R by issuing the following command at the console <span class="mono">data("Harman.political")</span>. This will load the data into a variable called <span class="mono">Harman.political</span>. If R says the <span class="mono">Harman.political</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-89667.csv">Harman.political R data set</a></span>. The size of this file is about 520 bytes.</p><h2>Eight political variables used by Harman (1967) as example 8.17</h2>
<h3>Description</h3>
<p>Another one of the many Harman (1967) data sets. This contains 8 political variables taken over 147 election areas. The principal factor method with SMCs as communalities match those of table 8.18. The data are used by Dziubian and Shirkey as an example of the Kaiser-Meyer-Olkin test of factor adequacy.</p>
<h3>Usage</h3>
<pre>data(Harman.political)</pre>
<h3>Format</h3>
<p>The format is: num [1:8, 1:8] 1 0.84 0.62 -0.53 0.03 0.57 -0.33 -0.63 0.84 1 ... - attr(*, "dimnames")=List of 2 ..$ : chr [1:8] "Lewis" "Roosevelt" "Party Voting" "Median Rental" ... ..$ : chr [1:8] "Lewis" "Roosevelt" "Party Voting" "Median Rental" ...</p>
<h3>Details</h3>
<p>The communalities from the original table are not included. They are .52, 1.00, .78, .82, .36, .80, .63, and .97</p>
<h3>Source</h3>
<p>Harman, Harry Horace (1976) Modern factor analysis, 3d ed., rev, University of Chicago Press. Chicago. p 166.</p>
<h3>References</h3>
<p>Dziuban, Charles D. and Shirkey, Edwin C. (1974) When is a correlation matrix appropriate for factor analysis? Some decision rules. Psychological Bulletin, 81 (6) 358 - 361.</p>
<h3>Examples</h3>
<pre>
data(Harman.political)
KMO(Harman.political)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-89667.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-89667.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-harmanpolitical.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-89667.json';</script>