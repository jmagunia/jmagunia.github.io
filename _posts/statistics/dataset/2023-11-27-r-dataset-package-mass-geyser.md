---
title: R Dataset / Package MASS / geyser
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">geyser</span> data set which pertains to Old Faithful Geyser Data. The <span class="mono">geyser</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">geyser</span> data set in R by issuing the following command at the console <span class="mono">data("geyser")</span>. This will load the data into a variable called <span class="mono">geyser</span>. If R says the <span class="mono">geyser</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24781.csv">geyser R data set</a></span>. The size of this file is about 2,899 bytes.</p><h2>Old Faithful Geyser Data</h2>
<h3>Description</h3>
<p>A version of the eruptions data from the ‘Old Faithful’ geyser in Yellowstone National Park, Wyoming. This version comes from Azzalini and Bowman (1990) and is of continuous measurement from August 1 to August 15, 1985.</p>
<p>Some nocturnal duration measurements were coded as 2, 3 or 4 minutes, having originally been described as ‘short’, ‘medium’ or ‘long’.</p>
<h3>Usage</h3>
<pre>
geyser
</pre>
<h3>Format</h3>
<p>A data frame with 299 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: left;"><code>duration</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Eruption time in mins</td>
</tr>
<tr>
<td style="text-align: left;"><code>waiting</code></td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Waiting time for this eruption</td>
</tr>
<tr>
<td style="text-align: left;"></td>
</tr>
</table>
<h3>Note</h3>
<p>The <code>waiting</code> time was incorrectly described as the time to the next eruption in the original files, and corrected for <span class="pkg">MASS</span> version 7.3-30.</p>
<h3>References</h3>
<p>Azzalini, A. and Bowman, A. W. (1990) A look at some data on the Old Faithful geyser. <em>Applied Statistics</em> <b>39</b>, 357–365.</p>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>See Also</h3>
<p><code>faithful</code>.</p>
<p>CRAN package <span class="pkg">sm</span>.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24781.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24781.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-geyser.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24781.json';</script>