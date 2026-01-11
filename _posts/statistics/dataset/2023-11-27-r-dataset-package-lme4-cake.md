---
title: R Dataset / Package lme4 / cake
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cake</span> data set which pertains to Breakage Angle of Chocolate Cakes. The <span class="mono">cake</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">cake</span> data set in R by issuing the following command at the console <span class="mono">data("cake")</span>. This will load the data into a variable called <span class="mono">cake</span>. If R says the <span class="mono">cake</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-73815.csv">cake R data set</a></span>. The size of this file is about 5,828 bytes.</p><h2>Breakage Angle of Chocolate Cakes</h2>
<h3>Description</h3>
<p>Data on the breakage angle of chocolate cakes made with three different recipes and baked at six different temperatures. This is a split-plot design with the recipes being whole-units and the different temperatures being applied to sub-units (within replicates). The experimental notes suggest that the replicate numbering represents temporal ordering.</p>
<h3>Format</h3>
<p>A data frame with 270 observations on the following 5 variables.</p>
<dl>
<dt><code>replicate</code></dt>
<dd>
<p>a factor with levels <code>1</code> to <code>15</code></p>
</dd>
<dt><code>recipe</code></dt>
<dd>
<p>a factor with levels <code>A</code>, <code>B</code> and <code>C</code></p>
</dd>
<dt><code>temperature</code></dt>
<dd>
<p>an ordered factor with levels <code>175</code> &lt; <code>185</code> &lt; <code>195</code> &lt; <code>205</code> &lt; <code>215</code> &lt; <code>225</code></p>
</dd>
<dt><code>angle</code></dt>
<dd>
<p>a numeric vector giving the angle at which the cake broke.</p>
</dd>
<dt><code>temp</code></dt>
<dd>
<p>numeric value of the baking temperature (degrees F).</p>
</dd>
</dl>
<h3>Details</h3>
<p>The <code>replicate</code> factor is nested within the <code>recipe</code> factor, and <code>temperature</code> is nested within <code>replicate</code>.</p>
<h3>Source</h3>
<p>Original data were presented in Cook (1938), and reported in Cochran and Cox (1957, p. 300). Also cited in Lee, Nelder and Pawitan (2006).</p>
<h3>References</h3>
<p>Cook, F. E. (1938) <em>Chocolate cake, I. Optimum baking temperature</em>. Master's Thesis, Iowa State College.</p>
<p>Cochran, W. G., and Cox, G. M. (1957) <em>Experimental designs</em>, 2nd Ed. New York, John Wiley \&amp; Sons.</p>
<p>Lee, Y., Nelder, J. A., and Pawitan, Y. (2006) <em>Generalized linear models with random effects. Unified analysis via H-likelihood</em>. Boca Raton, Chapman and Hall/CRC.</p>
<h3>Examples</h3>
<pre>
str(cake)
## 'temp' is continuous, 'temperature' an ordered factor with 6 levels(fm1 &lt;- lmer(angle ~ recipe * temperature + (1|recipe:replicate), cake, REML= FALSE))
(fm2 &lt;- lmer(angle ~ recipe + temperature + (1|recipe:replicate), cake, REML= FALSE))
(fm3 &lt;- lmer(angle ~ recipe + temp+ (1|recipe:replicate), cake, REML= FALSE))## and now "choose" :
anova(fm3, fm2, fm1)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-73815.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-73815.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-cake.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-73815.json';</script>