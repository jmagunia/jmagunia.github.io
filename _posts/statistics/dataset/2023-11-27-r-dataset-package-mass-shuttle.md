---
title: R Dataset / Package MASS / shuttle
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">shuttle</span> data set which pertains to Space Shuttle Autolander Problem. The <span class="mono">shuttle</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">shuttle</span> data set in R by issuing the following command at the console <span class="mono">data("shuttle")</span>. This will load the data into a variable called <span class="mono">shuttle</span>. If R says the <span class="mono">shuttle</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-74448.csv">shuttle R data set</a></span>. The size of this file is about 11,795 bytes.</p><h2>Space Shuttle Autolander Problem</h2>
<h3>Description</h3>
<p>The <code>shuttle</code> data frame has 256 rows and 7 columns. The first six columns are categorical variables giving example conditions; the seventh is the decision. The first 253 rows are the training set, the last 3 the test conditions.</p>
<h3>Usage</h3>
<pre>
shuttle
</pre>
<h3>Format</h3>
<p>This data frame contains the following factor columns:</p>
<dl>
<dt><code>stability</code></dt>
<dd>
<p>stable positioning or not (<code>stab</code> / <code>xstab</code>).</p>
</dd>
<dt><code>error</code></dt>
<dd>
<p>size of error (<code>MM</code> / <code>SS</code> / <code>LX</code> / <code>XL</code>).</p>
</dd>
<dt><code>sign</code></dt>
<dd>
<p>sign of error, positive or negative (<code>pp</code> / <code>nn</code>).</p>
</dd>
<dt><code>wind</code></dt>
<dd>
<p>wind sign (<code>head</code> / <code>tail</code>).</p>
</dd>
<dt><code>magn</code></dt>
<dd>
<p>wind strength (<code>Light</code> / <code>Medium</code> / <code>Strong</code> / <code>Out of Range</code>).</p>
</dd>
<dt><code>vis</code></dt>
<dd>
<p>visibility (<code>yes</code> / <code>no</code>).</p>
</dd>
<dt><code>use</code></dt>
<dd>
<p>use the autolander or not. (<code>auto</code> / <code>noauto</code>.)</p>
</dd>
</dl>
<h3>Source</h3>
<p>D. Michie (1989) Problems of computer-aided concept formation. In <em>Applications of Expert Systems 2</em>, ed. J. R. Quinlan, Turing Institute Press / Addison-Wesley, pp. 310–333.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-74448.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-74448.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-shuttle.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-74448.json';</script>