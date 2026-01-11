---
title: R Dataset / Package DAAG / vlt
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">vlt</span> data set which pertains to Video Lottery Terminal Data. The <span class="mono">vlt</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">vlt</span> data set in R by issuing the following command at the console <span class="mono">data("vlt")</span>. This will load the data into a variable called <span class="mono">vlt</span>. If R says the <span class="mono">vlt</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-78927.csv">vlt R data set</a></span>. The size of this file is about 3,502 bytes.</p><h2>Video Lottery Terminal Data</h2>
<h3>Description</h3>
<p>Data on objects appearing in three windows on a video lottery terminal, together with the prize payout (usually 0). Observations were taken on two successive days in late 1994 at a hotel lounge north of Winnipeg, Manitoba. Each observation cost 25 cents (Canadian). The game played was ‘Double Diamond’.</p>
<h3>Usage</h3>
<pre>vlt</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>window1</dt>
<dd>
<p>object appearing in the first window.</p>
</dd>
<dt>window2</dt>
<dd>
<p>object appearing in the second window.</p>
</dd>
<dt>window3</dt>
<dd>
<p>object appearing in the third window.</p>
</dd>
<dt>prize</dt>
<dd>
<p>cash prize awarded (in Canadian dollars).</p>
</dd>
<dt>night</dt>
<dd>
<p>1, if observation was taken on day 1; 2, if observation was taken on day 2.</p>
</dd>
</dl>
<h3>Details</h3>
<p>At each play, each of three windows shows one of 7 possible objects. Apparently, the three windows are independent of each other, and the objects should appear with equal probability across the three windows. The objects are coded as follows: blank (0), single bar (1), double bar (2), triple bar (3), double diamond (5), cherries (6), and the numeral "7" (7).</p>
<p>Prizes (in quarters) are awarded according to the following scheme: 800 (5-5-5), 80 (7-7-7), 40 (3-3-3), 25 (2-2-2), 10 (1-1-1), 10 (6-6-6), 5 (2 "6"'s), 2 (1 "6") and 5 (any combination of "1", "2" and "3"). In addition, a "5" doubles any winning combination, e.g. (5-3-3) pays 80 and (5-3-5) pays 160.</p>
<h3>Source</h3>
<p>Braun, W. J. (1995) An illustration of bootstrapping using video lottery terminal data. Journal of Statistics Education <a href="http://www.amstat.org/publications/jse/v3n2/datasets.braun.html">http://www.amstat.org/publications/jse/v3n2/datasets.braun.html</a></p>
<h3>Examples</h3>
<pre>
 vlt.stk &lt;- stack(vlt[,1:3])
 table(vlt.stk)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-78927.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-78927.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-vlt.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-78927.json';</script>