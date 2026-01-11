---
title: R Dataset / Package boot / grav
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">grav</span> data set which pertains to Acceleration Due to Gravity. The <span class="mono">grav</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">grav</span> data set in R by issuing the following command at the console <span class="mono">data("grav")</span>. This will load the data into a variable called <span class="mono">grav</span>. If R says the <span class="mono">grav</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85873.csv">grav R data set</a></span>. The size of this file is about 195 bytes.</p><h2>Acceleration Due to Gravity</h2>
<h3>Description</h3>
<p>The <code>gravity</code> data frame has 81 rows and 2 columns.</p>
<p>The <code>grav</code> data set has 26 rows and 2 columns.</p>
<p>Between May 1934 and July 1935, the National Bureau of Standards in Washington D.C. conducted a series of experiments to estimate the acceleration due to gravity, <em>g</em>, at Washington. Each experiment produced a number of replicate estimates of <em>g</em> using the same methodology. Although the basic method remained the same for all experiments, that of the reversible pendulum, there were changes in configuration.</p>
<p>The <code>gravity</code> data frame contains the data from all eight experiments. The <code>grav</code> data frame contains the data from the experiments 7 and 8. The data are expressed as deviations from 980.000 in centimetres per second squared.</p>
<h3>Usage</h3>
<pre>
gravity
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>g</code></dt>
<dd>
<p>The deviation of the estimate from 980.000 centimetres per second squared.</p>
</dd>
<dt><code>series</code></dt>
<dd>
<p>A factor describing from which experiment the estimate was derived.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Cressie, N. (1982) Playing safe with misweighted means. <em>Journal of the American Statistical Association</em>, <b>77</b>, 754–759.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85873.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85873.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-grav.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85873.json';</script>