---
title: R Dataset / Package plm / RiceFarms
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">RiceFarms</span> data set which pertains to Production of Rice in India . The <span class="mono">RiceFarms</span> data set is found in the <span class="mono">plm</span> R package. You can load the <span class="mono">RiceFarms</span> data set in R by issuing the following command at the console <span class="mono">data("RiceFarms")</span>. This will load the data into a variable called <span class="mono">RiceFarms</span>. If R says the <span class="mono">RiceFarms</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("plm")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-81830.csv">RiceFarms R data set</a></span>. The size of this file is about 97,762 bytes.</p><h2>Production of Rice in India</h2>
<h3>Description</h3>
<p>a panel of 171 observations</p>
<p><em>number of observations</em> : 1026</p>
<p><em>observation</em> : farms</p>
<p><em>country</em> : Indonesia</p>
<h3>Usage</h3>
<pre>data(RiceFarms)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>id</dt>
<dd>
<p>the farm identifier</p>
</dd>
<dt>size</dt>
<dd>
<p>the total area cultivated with rice, measured in hectares</p>
</dd>
<dt>status</dt>
<dd>
<p>land status, on of <code>'owner'</code> (non sharecroppers, owner operators or leaseholders or both), <code>'share'</code> (sharecroppers), <code>'mixed'</code> (mixed of the two previous status)</p>
</dd>
<dt>varieties</dt>
<dd>
<p>one of <code>'trad'</code> (traditional varieties), <code>'high'</code> (high yielding varieties) and <code>'mixed'</code> (mixed varieties)</p>
</dd>
<dt>bimas</dt>
<dd>
<p>bIMAS is an intensification program; one of <code>'no'</code> (non-bimas farmer), <code>'yes'</code> (bimas farmer) or <code>'mixed'</code> (part but not all of farmer's land was registered to be in the bimas program)</p>
</dd>
<dt>seed</dt>
<dd>
<p>seed in kilogram</p>
</dd>
<dt>urea</dt>
<dd>
<p>urea in kilogram</p>
</dd>
<dt>phosphate</dt>
<dd>
<p>phosphate in kilogram</p>
</dd>
<dt>pesticide</dt>
<dd>
<p>pesticide cost in Rupiah</p>
</dd>
<dt>pseed</dt>
<dd>
<p>price of seed in Rupiah per kg</p>
</dd>
<dt>purea</dt>
<dd>
<p>price of urea in Rupiah per kg</p>
</dd>
<dt>pphosph</dt>
<dd>
<p>price of phosphate in Rupiah per kg</p>
</dd>
<dt>hiredlabor</dt>
<dd>
<p>hired labor in hours</p>
</dd>
<dt>famlabor</dt>
<dd>
<p>family labor in hours</p>
</dd>
<dt>totlabor</dt>
<dd>
<p>total labor (excluding harvest labor)</p>
</dd>
<dt>wage</dt>
<dd>
<p>labor wage in Rupiah per hour</p>
</dd>
<dt>goutput</dt>
<dd>
<p>gross output of rice in kg</p>
</dd>
<dt>noutput</dt>
<dd>
<p>net output, gross output minus harvesting cost (paid in terms of rice)</p>
</dd>
<dt>price</dt>
<dd>
<p>price of rough rice in Rupiah per kg</p>
</dd>
<dt>region</dt>
<dd>
<p>one of <code>'wargabinangun'</code>, <code>'langan'</code>, <code>'gunungwangi'</code>, <code>'malausma'</code>, <code>'sukaambit'</code>, <code>'ciwangi'</code></p>
</dd>
</dl>
<h3>Source</h3>
<p>Qu Feng and William C. Horrace, (2012) “Alternative Measures of Technical Efficiency: Skew, Bias and Scale”, <em>Journal of Applied Econometrics</em>, <b>27(2)</b>, pp. 253–268.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-81830.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-81830.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-plm-ricefarms.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-81830.json';</script>