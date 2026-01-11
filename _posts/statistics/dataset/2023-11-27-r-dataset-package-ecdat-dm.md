---
title: R Dataset / Package Ecdat / DM
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">DM</span> data set which pertains to DM Dollar Exchange Rate . The <span class="mono">DM</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">DM</span> data set in R by issuing the following command at the console <span class="mono">data("DM")</span>. This will load the data into a variable called <span class="mono">DM</span>. If R says the <span class="mono">DM</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14763.csv">DM R data set</a></span>. The size of this file is about 22,441 bytes.</p><h2>DM Dollar Exchange Rate</h2>
<h3>Description</h3>
<p>weekly observations from 1975 to 1989</p>
<p><em>number of observations</em> : 778</p>
<p><em>observation</em> : country</p>
<p><em>country</em> : Germany</p>
<h3>Usage</h3>
<pre>data(DM)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>date</dt>
<dd>
<p>the date of the observation (19850104 is January, 4, 1985)</p>
</dd>
<dt>s</dt>
<dd>
<p>the ask price of the dollar in units of DM in the spot market on friday of the current week</p>
</dd>
<dt>f</dt>
<dd>
<p>the ask price of the dollar in units of DM in the 30-day forward market on friday of the current week</p>
</dd>
<dt>s30</dt>
<dd>
<p>the bid price of the dollar in units of DM in the spot market on the delivery date on a current forward contract</p>
</dd>
</dl>
<h3>Source</h3>
<p>Bekaert, G. and R. Hodrick (1993) “On biases in the measurement of foreign exchange risk premiums”, <em>Journal of International Money and Finance</em>, <b>12</b>, 115-138.</p>
<h3>References</h3>
<p>Hayashi, F. (2000) <em>Econometrics</em>, Princeton University Press, <a href="http://fhayashi.fc2web.com/hayashi_econometrics.htm">http://fhayashi.fc2web.com/hayashi_econometrics.htm</a>, chapter 6, 438-443.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code>,</p>
<p><code>Index.Time.Series</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14763.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14763.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-dm.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14763.json';</script>