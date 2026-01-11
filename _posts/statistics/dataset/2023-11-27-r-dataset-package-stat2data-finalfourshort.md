---
title: R Dataset / Package Stat2Data / FinalFourShort
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">FinalFourShort</span> data set which pertains to FinalFourShort. The <span class="mono">FinalFourShort</span> data set is found in the <span class="mono">Stat2Data</span> R package. You can load the <span class="mono">FinalFourShort</span> data set in R by issuing the following command at the console <span class="mono">data("FinalFourShort")</span>. This will load the data into a variable called <span class="mono">FinalFourShort</span>. If R says the <span class="mono">FinalFourShort</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Stat2Data")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-23879.csv">FinalFourShort R data set</a></span>. The size of this file is about 5,881 bytes.</p><h2>FinalFourShort</h2>
<h3>Description</h3>
<p>NCAA Final Four by seed - short version</p>
<h3>Format</h3>
<p>A dataset with 512 observations on the following 4 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;"><code>Year</code></td>
<td style="text-align: left;">Year: 1979 to 2010</td>
</tr>
<tr>
<td style="text-align: right;"><code>Seed</code></td>
<td style="text-align: left;">Seed: 1 to 16</td>
</tr>
<tr>
<td style="text-align: right;"><code>In</code></td>
<td style="text-align: left;">Number of teams at that seed who made the Final Four that year</td>
</tr>
<tr>
<td style="text-align: right;"><code>Out</code></td>
<td style="text-align: left;">Number of teams at that seed who did not made the Final Four that year</td>
</tr>
</table>
<h3>Details</h3>
<p>Each year 64 college teams are selected for the NCAA Division I Men's Basketball tournament, with 16 teams placed in each of four regions. Within each region the teams are seeded from 1 to 16, with the (presumed) best team as the 1 seed and the (presumed) weakest team as the 16 seed; this practice of seeding teams began in 1979 for the NCAA tournament. Only one team from each region (so four teams each year) advances to the Final Four. This dataset is similar to FinalFourLong, except that each row combines the count of the results (make/don't make the Final Four) for each seed, so that In+Out= 4 for each row.</p>
<h3>Source</h3>
<p>Final Four teams and their seed can be found at <a href="http://www.championshiphistory.com/ncaahoops.php">http://www.championshiphistory.com/ncaahoops.php</a>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-23879.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-23879.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-stat2data-finalfourshort.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-23879.json';</script>