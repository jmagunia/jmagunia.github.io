---
title: R Dataset / Package DAAG / orings
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">orings</span> data set which pertains to Challenger O-rings Data. The <span class="mono">orings</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">orings</span> data set in R by issuing the following command at the console <span class="mono">data("orings")</span>. This will load the data into a variable called <span class="mono">orings</span>. If R says the <span class="mono">orings</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-87463.csv">orings R data set</a></span>. The size of this file is about 248 bytes.</p><h2>Challenger O-rings Data</h2>
<h3>Description</h3>
<p>Record of the number and type of O-ring failures prior to the tragic Challenger mission in January, 1986.</p>
<h3>Usage</h3>
<pre>orings</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Temperature</dt>
<dd>
<p>O-ring temperature for each test firing or actual launch of the shuttle rocket engine</p>
</dd>
<dt>Erosion</dt>
<dd>
<p>Number of erosion incidents</p>
</dd>
<dt>Blowby</dt>
<dd>
<p>Number of blowby incidents</p>
</dd>
<dt>Total</dt>
<dd>
<p>Total number of incidents</p>
</dd>
</dl>
<h3>Source</h3>
<p>Presidential Commission on the Space Shuttle Challenger Accident, Vol. 1, 1986: 129-131.</p>
<h3>References</h3>
<p>Tufte, E. R. 1997. Visual Explanations. Graphics Press, Cheshire, Connecticut, U.S.A.</p>
<h3>Examples</h3>
<pre>
oldpar &lt;- par(mfrow=c(1,2))
plot(Total~Temperature, data = orings[c(1,2,4,11,13,18),]) # the 
 # observations included in the pre-launch charts
plot(Total~Temperature, data = orings)
par(oldpar)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-87463.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-87463.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-orings.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-87463.json';</script>