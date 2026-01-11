---
title: R Dataset / Package lme4 / Pastes
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Pastes</span> data set which pertains to Paste strength by batch and cask. The <span class="mono">Pastes</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">Pastes</span> data set in R by issuing the following command at the console <span class="mono">data("Pastes")</span>. This will load the data into a variable called <span class="mono">Pastes</span>. If R says the <span class="mono">Pastes</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-28546.csv">Pastes R data set</a></span>. The size of this file is about 1,163 bytes.</p><h2>Paste strength by batch and cask</h2>
<h3>Description</h3>
<p>Strength of a chemical paste product; its quality depending on the delivery batch, and the cask within the delivery.</p>
<h3>Format</h3>
<p>A data frame with 60 observations on the following 4 variables.</p>
<dl>
<dt><code>strength</code></dt>
<dd>
<p>paste strength.</p>
</dd>
<dt><code>batch</code></dt>
<dd>
<p>delivery batch from which the sample was sample. A factor with 10 levels: ‘A’ to ‘J’.</p>
</dd>
<dt><code>cask</code></dt>
<dd>
<p>cask within the delivery batch from which the sample was chosen. A factor with 3 levels: ‘a’ to ‘c’.</p>
</dd>
<dt><code>sample</code></dt>
<dd>
<p>the sample of paste whose strength was assayed, two assays per sample. A factor with 30 levels: ‘A:a’ to ‘J:c’.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are described in Davies and Goldsmith (1972) as coming from “ deliveries of a chemical paste product contained in casks where, in addition to sampling and testing errors, there are variations in quality between deliveries ... As a routine, three casks selected at random from each delivery were sampled and the samples were kept for reference. ... Ten of the delivery batches were sampled at random and two analytical tests carried out on each of the 30 samples”.</p>
<h3>Source</h3>
<p>O.L. Davies and P.L. Goldsmith (eds), <em>Statistical Methods in Research and Production, 4th ed.</em>, Oliver and Boyd, (1972), section 6.5</p>
<h3>Examples</h3>
<pre>
str(Pastes)
require(lattice)
dotplot(cask ~ strength | reorder(batch, strength), Pastes,
strip = FALSE, strip.left = TRUE, layout = c(1, 10),
ylab = "Cask within batch",
xlab = "Paste strength", jitter.y = TRUE)
## Modifying the factors to enhance the plot
Pastes &lt;- within(Pastes, batch &lt;- reorder(batch, strength))
Pastes &lt;- within(Pastes, sample &lt;- reorder(reorder(sample, strength),
as.numeric(batch)))
dotplot(sample ~ strength | batch, Pastes,
strip = FALSE, strip.left = TRUE, layout = c(1, 10),
scales = list(y = list(relation = "free")),
ylab = "Sample within batch",
xlab = "Paste strength", jitter.y = TRUE)
## Four equivalent models differing only in specification
(fm1 &lt;- lmer(strength ~ (1|batch) + (1|sample), Pastes))
(fm2 &lt;- lmer(strength ~ (1|batch/cask), Pastes))
(fm3 &lt;- lmer(strength ~ (1|batch) + (1|batch:cask), Pastes))
(fm4 &lt;- lmer(strength ~ (1|batch/sample), Pastes))
## fm4 results in redundant labels on the sample:batch interaction
head(ranef(fm4)[[1]])
## compare to fm1
head(ranef(fm1)[[1]])
## This model is different and NOT appropriate for these data
(fm5 &lt;- lmer(strength ~ (1|batch) + (1|cask), Pastes))L &lt;- getME(fm1, "L")
Matrix::image(L, sub = "Structure of random effects interaction in pastes model")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-28546.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-28546.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-pastes.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-28546.json';</script>