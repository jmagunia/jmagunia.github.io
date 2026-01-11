---
title: R Dataset / Package HSAUR / polyps
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">polyps</span> data set which pertains to Familial Andenomatous Polyposis . The <span class="mono">polyps</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">polyps</span> data set in R by issuing the following command at the console <span class="mono">data("polyps")</span>. This will load the data into a variable called <span class="mono">polyps</span>. If R says the <span class="mono">polyps</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-62721.csv">polyps R data set</a></span>. The size of this file is about 309 bytes.</p><h2>Familial Andenomatous Polyposis</h2>
<h3>Description</h3>
<p>Data from a placebo-controlled trial of a non-steroidal anti-inflammatory drug in the treatment of familial andenomatous polyposis (FAP).</p>
<h3>Usage</h3>
<pre>data("polyps")</pre>
<h3>Format</h3>
<p>A data frame with 20 observations on the following 3 variables.</p>
<dl>
<dt><code>number</code></dt>
<dd>
<p>number of colonic polyps at 12 months.</p>
</dd>
<dt><code>treat</code></dt>
<dd>
<p>treatment arms of the trail, a factor with levels <code>placebo</code> and <code>drug</code>.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>the age of the patient.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Giardiello et al. (1993) and Piantadosi (1997) describe the results of a placebo-controlled trial of a non-steroidal anti-inflammatory drug in the treatment of familial andenomatous polyposis (FAP). The trial was halted after a planned interim analysis had suggested compelling evidence in favour of the treatment. Here we are interested in assessing whether the number of colonic polyps at 12 months is related to treatment and age of patient.</p>
<h3>Source</h3>
<p>F. M. Giardiello, S. R. Hamilton, A. J. Krush, S. Piantadosi, L. M. Hylind, P. Celano, S. V. Booker, C. R. Robinson and G. J. A. Offerhaus (1993), Treatment of colonic and rectal adenomas with sulindac in familial adenomatous polyposis. <em>New England Journal of Medicine</em>, <b>328</b>(18), 1313–1316.</p>
<p>S. Piantadosi (1997), <em>Clinical Trials: A Methodologic Perspective</em>. John Wiley \&amp; Sons, New York.</p>
<h3>Examples</h3>
<pre>data("polyps", package = "HSAUR")
plot(number ~ age, data = polyps, pch = as.numeric(polyps$treat))
legend(40, 40, legend = levels(polyps$treat), pch = 1:2, bty = "n")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-62721.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-62721.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-polyps.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-62721.json';</script>