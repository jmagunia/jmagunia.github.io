---
title: R Dataset / Package lme4 / Dyestuff
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Dyestuff</span> data set which pertains to Yield of dyestuff by batch. The <span class="mono">Dyestuff</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">Dyestuff</span> data set in R by issuing the following command at the console <span class="mono">data("Dyestuff")</span>. This will load the data into a variable called <span class="mono">Dyestuff</span>. If R says the <span class="mono">Dyestuff</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97514.csv">Dyestuff R data set</a></span>. The size of this file is about 286 bytes.</p><h2>Yield of dyestuff by batch</h2>
<h3>Description</h3>
<p>The <code>Dyestuff</code> data frame provides the yield of dyestuff (Naphthalene Black 12B) from 5 different preparations from each of 6 different batchs of an intermediate product (H-acid). The <code>Dyestuff2</code> data were generated data in the same structure but with a large residual variance relative to the batch variance.</p>
<h3>Format</h3>
<p>Data frames, each with 30 observations on the following 2 variables.</p>
<dl>
<dt><code>Batch</code></dt>
<dd>
<p>a factor indicating the batch of the intermediate product from which the preparation was created.</p>
</dd>
<dt><code>Yield</code></dt>
<dd>
<p>the yield of dyestuff from the preparation (grams of standard color).</p>
</dd>
</dl>
<h3>Details</h3>
<p>The <code>Dyestuff</code> data are described in Davies and Goldsmith (1972) as coming from “an investigation to find out how much the variation from batch to batch in the quality of an intermediate product (H-acid) contributes to the variation in the yield of the dyestuff (Naphthalene Black 12B) made from it. In the experiment six samples of the intermediate, representing different batches of works manufacture, were obtained, and five preparations of the dyestuff were made in the laboratory from each sample. The equivalent yield of each preparation as grams of standard colour was determined by dye-trial.”</p>
<p>The <code>Dyestuff2</code> data are described in Box and Tiao (1973) as illustrating “ the case where between-batches mean square is less than the within-batches mean square. These data had to be constructed for although examples of this sort undoubtably occur in practice, they seem to be rarely published.”</p>
<h3>Source</h3>
<p>O.L. Davies and P.L. Goldsmith (eds), <em>Statistical Methods in Research and Production, 4th ed.</em>, Oliver and Boyd, (1972), section 6.4</p>
<p>G.E.P. Box and G.C. Tiao, <em>Bayesian Inference in Statistical Analysis</em>, Addison-Wesley, (1973), section 5.1.2</p>
<h3>Examples</h3>
<pre>require(lattice)
str(Dyestuff)
dotplot(reorder(Batch, Yield) ~ Yield, Dyestuff,
ylab = "Batch", jitter.y = TRUE, aspect = 0.3,
type = c("p", "a"))
dotplot(reorder(Batch, Yield) ~ Yield, Dyestuff2,
ylab = "Batch", jitter.y = TRUE, aspect = 0.3,
type = c("p", "a"))
(fm1 &lt;- lmer(Yield ~ 1|Batch, Dyestuff))
(fm2 &lt;- lmer(Yield ~ 1|Batch, Dyestuff2))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97514.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97514.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-dyestuff.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97514.json';</script>