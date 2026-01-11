---
title: R Dataset / Package mosaicData / HeatX
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">HeatX</span> data set which pertains to Data from a heat exchanger laboratory. The <span class="mono">HeatX</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">HeatX</span> data set in R by issuing the following command at the console <span class="mono">data("HeatX")</span>. This will load the data into a variable called <span class="mono">HeatX</span>. If R says the <span class="mono">HeatX</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65754.csv">HeatX R data set</a></span>. The size of this file is about 238 bytes.</p><h2>Data from a heat exchanger laboratory</h2>
<h3>Description</h3>
<p>These data were collected by engineering students at Calvin College. The apparatus consists of concentric pipes insulated from the environment so that as nearly as can be managed the only heat exchange is between the hot and cold water.</p>
<h3>Usage</h3>
<pre>
data(HeatX)
</pre>
<h3>Format</h3>
<p>A data frame with 6 observations on the following variables.</p>
<ul>
<li>
<p><code>trial</code> trial number</p>
</li>
<li>
<p><code>T.cold.in</code> temperature (C) of the cold water as it enters the apparatus</p>
</li>
<li>
<p><code>T.cold.out</code> temperature (C) of the cold water as it leaves the apparatus</p>
</li>
<li>
<p><code>m.cold</code> flow rate (L/min) of the cold water</p>
</li>
<li>
<p><code>T.hot.in</code> temperature (C) of the hot water as it enters the apparatus</p>
</li>
<li>
<p><code>T.hot.out</code> temperature (C) of the hot water as it leaves the apparatus</p>
</li>
<li>
<p><code>m.hot</code> flow rate (L/min) of the hot water</p>
</li>
</ul>
<h3>Examples</h3>
<pre>
# We can test for heat exchange with the environment by check to see if the 
# heat gained by the cold water matches the heat lost by the hot water.
C_p &lt;- 4.182 / 60# / 60 because measureing m in L/min
HeatX2 &lt;- transform(HeatX, 
Q.cold = m.cold * C_p * (T.cold.out - T.cold.in),
Q.hot= m.hot * C_p * (T.hot.out- T.hot.in)
)
HeatX2 &lt;- transform(HeatX2, Q.env = Q.cold + Q.hot)
if (require(mosaic)) {
stripplot( ~ Q.env, data=HeatX2, alpha=.6, cex=2, jitter.data=TRUE, factor=4)
t.test( ~Q.env, data = HeatX2 )
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65754.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65754.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-heatx.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65754.json';</script>