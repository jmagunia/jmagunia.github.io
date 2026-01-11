---
title: R Dataset / Package boot / motor
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">motor</span> data set which pertains to Data from a Simulated Motorcycle Accident. The <span class="mono">motor</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">motor</span> data set in R by issuing the following command at the console <span class="mono">data("motor")</span>. This will load the data into a variable called <span class="mono">motor</span>. If R says the <span class="mono">motor</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69656.csv">motor R data set</a></span>. The size of this file is about 1,494 bytes.</p><h2>Data from a Simulated Motorcycle Accident</h2>
<h3>Description</h3>
<p>The <code>motor</code> data frame has 94 rows and 4 columns. The rows are obtained by removing replicate values of <code>time</code> from the dataset <code>mcycle</code>. Two extra columns are added to allow for strata with a different residual variance in each stratum.</p>
<h3>Usage</h3>
<pre>
motor
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>times</code></dt>
<dd>
<p>The time in milliseconds since impact.</p>
</dd>
<dt><code>accel</code></dt>
<dd>
<p>The recorded head acceleration (in g).</p>
</dd>
<dt><code>strata</code></dt>
<dd>
<p>A numeric column indicating to which of the three strata (numbered 1, 2 and 3) the observations belong.</p>
</dd>
<dt><code>v</code></dt>
<dd>
<p>An estimate of the residual variance for the observation. <code>v</code> is constant within the strata but a different estimate is used for each of the three strata.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Silverman, B.W. (1985) Some aspects of the spline smoothing approach to non-parametric curve fitting. <em>Journal of the Royal Statistical Society, B</em>, <b>47</b>, 1–52.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Venables, W.N. and Ripley, B.D. (1994) <em>Modern Applied Statistics with S-Plus</em>. Springer-Verlag.</p>
<h3>See Also</h3>
<p><code>mcycle</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69656.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69656.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-motor.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69656.json';</script>