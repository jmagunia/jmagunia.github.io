---
title: R Dataset / Package boot / amis
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">amis</span> data set which pertains to Car Speeding and Warning Signs. The <span class="mono">amis</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">amis</span> data set in R by issuing the following command at the console <span class="mono">data("amis")</span>. This will load the data into a variable called <span class="mono">amis</span>. If R says the <span class="mono">amis</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-51228.csv">amis R data set</a></span>. The size of this file is about 79,057 bytes.</p><h2>Car Speeding and Warning Signs</h2>
<h3>Description</h3>
<p>The <code>amis</code> data frame has 8437 rows and 4 columns.</p>
<p>In a study into the effect that warning signs have on speeding patterns, Cambridgeshire County Council considered 14 pairs of locations. The locations were paired to account for factors such as traffic volume and type of road. One site in each pair had a sign erected warning of the dangers of speeding and asking drivers to slow down. No action was taken at the second site. Three sets of measurements were taken at each site. Each set of measurements was nominally of the speeds of 100 cars but not all sites have exactly 100 measurements. These speed measurements were taken before the erection of the sign, shortly after the erection of the sign, and again after the sign had been in place for some time.</p>
<h3>Usage</h3>
<pre>
amis
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>speed</code></dt>
<dd>
<p>Speeds of cars (in miles per hour).</p>
</dd>
<dt><code>period</code></dt>
<dd>
<p>A numeric column indicating the time that the reading was taken. A value of 1 indicates a reading taken before the sign was erected, a 2 indicates a reading taken shortly after erection of the sign and a 3 indicates a reading taken after the sign had been in place for some time.</p>
</dd>
<dt><code>warning</code></dt>
<dd>
<p>A numeric column indicating whether the location of the reading was chosen to have a warning sign erected. A value of 1 indicates presence of a sign and a value of 2 indicates that no sign was erected.</p>
</dd>
<dt><code>pair</code></dt>
<dd>
<p>A numeric column giving the pair number at which the reading was taken. Pairs were numbered from 1 to 14.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were kindly made available by Mr. Graham Amis, Cambridgeshire County Council, U.K.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-51228.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-51228.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-amis.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-51228.json';</script>