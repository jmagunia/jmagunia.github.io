---
title: R Dataset / Package vcd / WomenQueue
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">WomenQueue</span> data set which pertains to Women in Queues. The <span class="mono">WomenQueue</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">WomenQueue</span> data set in R by issuing the following command at the console <span class="mono">data("WomenQueue")</span>. This will load the data into a variable called <span class="mono">WomenQueue</span>. If R says the <span class="mono">WomenQueue</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-67724.csv">WomenQueue R data set</a></span>. The size of this file is about 87 bytes.</p><h2>Women in Queues</h2>
<h3>Description</h3>
<p>Data from Jinkinson \&amp; Slater (1981) and Hoaglin \&amp; Tukey (1985) reporting the frequency distribution of females in 100 queues of length 10 in a London Underground station.</p>
<h3>Usage</h3>
<pre>
data("WomenQueue")
</pre>
<h3>Format</h3>
<p>A 1-way table giving the number of women in 100 queues of length 10. The variable and its levels are</p>
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
<td style="text-align: left;">nWomen</td>
<td style="text-align: left;">0, 1, ..., 10</td>
</tr>
</table>
<h3>Source</h3>
<p>M. Friendly (2000), Visualizing Categorical Data, pages 19–20.</p>
<h3>References</h3>
<p>D. C. Hoaglin \&amp; J. W. Tukey (1985), Checking the shape of discrete distributions. In D. C. Hoaglin, F. Mosteller, J. W. Tukey (eds.), <em>Exploring Data Tables, Trends and Shapes</em>, chapter 9. John Wiley \&amp; Sons, New York.</p>
<p>R. A. Jinkinson \&amp; M. Slater (1981), Critical discussion of a graphical method for identifying discrete distributions, <em>The Statistician</em>, <b>30</b>, 239–248.</p>
<p>M. Friendly (2000), <em>Visualizing Categorical Data</em>. SAS Institute, Cary, NC.</p>
<h3>Examples</h3>
<pre>
data("WomenQueue")
gf &lt;- goodfit(WomenQueue, type = "binomial")
summary(gf)
plot(gf)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67724.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67724.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-womenqueue.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67724.json';</script>