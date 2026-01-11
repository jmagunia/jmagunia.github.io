---
title: R Dataset / Package Ecdat / UnempDur
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">UnempDur</span> data set which pertains to Unemployment Duration . The <span class="mono">UnempDur</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">UnempDur</span> data set in R by issuing the following command at the console <span class="mono">data("UnempDur")</span>. This will load the data into a variable called <span class="mono">UnempDur</span>. If R says the <span class="mono">UnempDur</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-26842.csv">UnempDur R data set</a></span>. The size of this file is about 132,362 bytes.</p><h2>Unemployment Duration</h2>
<h3>Description</h3>
<p>Journal of Business Economics and Statistics web site : <a href="http://amstat.tandfonline.com/loi/ubes20">http://amstat.tandfonline.com/loi/ubes20</a></p>
<p><em>number of observations</em> : 3343</p>
<h3>Usage</h3>
<pre>data(UnempDur)</pre>
<h3>Format</h3>
<p>A time serie containing :</p>
<dl>
<dt>spell</dt>
<dd>
<p>length of spell in number of two-week intervals</p>
</dd>
<dt>censor1</dt>
<dd>
<p>= 1 if re-employed at full-time job</p>
</dd>
<dt>censor2</dt>
<dd>
<p>= 1 if re-employed at part-time job</p>
</dd>
<dt>censor3</dt>
<dd>
<p>1 if re-employed but left job: pt-ft status unknown</p>
</dd>
<dt>censor4</dt>
<dd>
<p>1 if still jobless</p>
</dd>
<dt>age</dt>
<dd>
<p>age</p>
</dd>
<dt>ui</dt>
<dd>
<p>= 1 if filed UI claim</p>
</dd>
<dt>reprate</dt>
<dd>
<p>eligible replacement rate</p>
</dd>
<dt>disrate</dt>
<dd>
<p>eligible disregard rate</p>
</dd>
<dt>logwage</dt>
<dd>
<p>log weekly earnings in lost job (1985\$)</p>
</dd>
<dt>tenure</dt>
<dd>
<p>years tenure in lost job</p>
</dd>
</dl>
<h3>Source</h3>
<p>McCall, B.P. (1996) “Unemployment Insurance Rules, Joblessness, and Part-time Work”, <em>Econometrica</em>, <b>64</b>, 647–682.</p>
<h3>References</h3>
<p>Cameron, A.C. and P.K. Trivedi (2005) <em>Microeconometrics : methods and applications</em>, Cambridge, pp. 603–8, 632–6, 658–62, 671–4 and 692.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code>,</p>
<p><code>Index.Time.Series</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-26842.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-26842.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-unempdur.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-26842.json';</script>