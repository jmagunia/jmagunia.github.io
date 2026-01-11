---
title: R Dataset / Package datasets / Titanic
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Titanic</span> data set which pertains to Survival of passengers on the Titanic. The <span class="mono">Titanic</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">Titanic</span> data set in R by issuing the following command at the console <span class="mono">data("Titanic")</span>. This will load the data into a variable called <span class="mono">Titanic</span>. If R says the <span class="mono">Titanic</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-10228.csv">Titanic R data set</a></span>. The size of this file is about 62,279 bytes.</p><h2>Survival of passengers on the Titanic</h2>
<h3>Description</h3>
<p>This data set provides information on the fate of passengers on the fatal maiden voyage of the ocean liner ‘Titanic’, summarized according to economic status (class), sex, age and survival.</p>
<h3>Usage</h3>
<pre>Titanic</pre>
<h3>Format</h3>
<p>A 4-dimensional array resulting from cross-tabulating 2201 observations on 4 variables. The variables and their levels are as follows:</p>
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
<td style="text-align: left;">Class</td>
<td style="text-align: left;">1st, 2nd, 3rd, Crew</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Sex</td>
<td style="text-align: left;">Male, Female</td>
</tr>
<tr>
<td style="text-align: right;">3</td>
<td style="text-align: left;">Age</td>
<td style="text-align: left;">Child, Adult</td>
</tr>
<tr>
<td style="text-align: right;">4</td>
<td style="text-align: left;">Survived</td>
<td style="text-align: left;">No, Yes</td>
</tr>
</table>
<h3>Details</h3>
<p>The sinking of the Titanic is a famous event, and new books are still being published about it. Many well-known facts—from the proportions of first-class passengers to the ‘women and children first’ policy, and the fact that that policy was not entirely successful in saving the women and children in the third class—are reflected in the survival rates for various classes of passenger.</p>
<p>These data were originally collected by the British Board of Trade in their investigation of the sinking. Note that there is not complete agreement among primary sources as to the exact numbers on board, rescued, or lost.</p>
<p>Due in particular to the very successful film ‘Titanic’, the last years saw a rise in public interest in the Titanic. Very detailed data about the passengers is now available on the Internet, at sites such as <em>Encyclopedia Titanica</em> (<a href="http://www.rmplc.co.uk/eduweb/sites/phind">http://www.rmplc.co.uk/eduweb/sites/phind</a>).</p>
<h3>Source</h3>
<p>Dawson, Robert J. MacG. (1995), The ‘Unusual Episode’ Data Revisited. <em>Journal of Statistics Education</em>, <b>3</b>. <a href="https://www.amstat.org/publications/jse/v3n3/datasets.dawson.html">https://www.amstat.org/publications/jse/v3n3/datasets.dawson.html</a></p>
<p>The source provides a data set recording class, sex, age, and survival status for each person on board of the Titanic, and is based on data originally collected by the British Board of Trade and reprinted in:</p>
<p>British Board of Trade (1990), <em>Report on the Loss of the ‘Titanic’ (S.S.)</em>. British Board of Trade Inquiry Report (reprint). Gloucester, UK: Allan Sutton Publishing.</p>
<h3>Examples</h3>
<pre>
require(graphics)
mosaicplot(Titanic, main = "Survival on the Titanic")
## Higher survival rates in children?
apply(Titanic, c(3, 4), sum)
## Higher survival rates in females?
apply(Titanic, c(2, 4), sum)
## Use loglm() in package 'MASS' for further analysis ...
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-10228.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-10228.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-titanic.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-10228.json';</script>