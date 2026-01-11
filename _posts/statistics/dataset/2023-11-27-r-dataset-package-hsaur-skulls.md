---
title: R Dataset / Package HSAUR / skulls
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">skulls</span> data set which pertains to Egyptian Skulls . The <span class="mono">skulls</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">skulls</span> data set in R by issuing the following command at the console <span class="mono">data("skulls")</span>. This will load the data into a variable called <span class="mono">skulls</span>. If R says the <span class="mono">skulls</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-99790.csv">skulls R data set</a></span>. The size of this file is about 3,612 bytes.</p><h2>Egyptian Skulls</h2>
<h3>Description</h3>
<p>Measurements made on Egyptian skulls from five epochs.</p>
<h3>Usage</h3>
<pre>data("skulls")</pre>
<h3>Format</h3>
<p>A data frame with 150 observations on the following 5 variables.</p>
<dl>
<dt><code>epoch</code></dt>
<dd>
<p>the epoch the skull as assigned to, a factor with levels <code>c4000BC</code> <code>c3300BC</code>, <code>c1850BC</code>, <code>c200BC</code>, and <code>cAD150</code>, where the years are only given approximately, of course.</p>
</dd>
<dt><code>mb</code></dt>
<dd>
<p>maximum breaths of the skull.</p>
</dd>
<dt><code>bh</code></dt>
<dd>
<p>basibregmatic heights of the skull.</p>
</dd>
<dt><code>bl</code></dt>
<dd>
<p>basialiveolar length of the skull.</p>
</dd>
<dt><code>nh</code></dt>
<dd>
<p>nasal heights of the skull.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The question is whether the measurements change over time. Non-constant measurements of the skulls over time would indicate interbreeding with immigrant populations.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, A. D. Lunn, K. J. McConway and E. Ostrowski (1994). <em>A Handbook of Small Datasets</em>, Chapman and Hall/CRC, London.</p>
<h3>Examples</h3>
<pre>data("skulls", package = "HSAUR")
means &lt;- tapply(1:nrow(skulls), skulls$epoch, function(i)
 apply(skulls[i,colnames(skulls)[-1]], 2, mean))
means &lt;- matrix(unlist(means), nrow = length(means), byrow = TRUE)
colnames(means) &lt;- colnames(skulls)[-1]
rownames(means) &lt;- levels(skulls$epoch)
pairs(means,
panel = function(x, y) {
text(x, y, levels(skulls$epoch))
})</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-99790.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-99790.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-skulls.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-99790.json';</script>