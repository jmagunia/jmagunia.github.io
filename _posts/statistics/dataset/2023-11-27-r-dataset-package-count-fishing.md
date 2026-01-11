---
title: R Dataset / Package COUNT / fishing
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fishing</span> data set which pertains to fishing. The <span class="mono">fishing</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">fishing</span> data set in R by issuing the following command at the console <span class="mono">data("fishing")</span>. This will load the data into a variable called <span class="mono">fishing</span>. If R says the <span class="mono">fishing</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27593.csv">fishing R data set</a></span>. The size of this file is about 8,472 bytes.</p><h2>fishing</h2>
<h3>Description</h3>
<p>The fishing data is adapted from Zuur, Hilbe and Ieno (2013) to determine whether the data appears to be generated from more than one generating mechanism. The data are originally adapted from Bailey et al. (2008) who were interested in how certain deep-sea fish populations were impacted when commercial fishing began in locations with deeper water than in previous years. Given that there are 147 sites that were researched, the model is of (1) the total number of fish counted per site (totabund); ( 2) on the mean water depth per site (meandepth); (3) adjusted by the area of the site (sweptarea); (4) the log of which is the model offset.</p>
<h3>Usage</h3>
<pre>data(fishing)</pre>
<h3>Format</h3>
<p>A data frame with 147 observations on the following variables.</p>
<dl>
<dt><code>totabund</code></dt>
<dd>
<p>total fish counted per site</p>
</dd>
<dt><code>meandepth</code></dt>
<dd>
<p>mean water depth per site</p>
</dd>
<dt><code>sweptarea</code></dt>
<dd>
<p>adjusted area of site</p>
</dd>
<dt><code>density</code></dt>
<dd>
<p>folage density index</p>
</dd>
<dt><code>site</code></dt>
<dd>
<p>catch site</p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>1977-2002</p>
</dd>
<dt><code>period</code></dt>
<dd>
<p>0=1977-1989; 1=2000+</p>
</dd>
</dl>
<h3>Details</h3>
<p>fishing is saved as a data frame. Count models use totabund as response variable. Counts start at 2</p>
<h3>Source</h3>
<p>Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R,</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R, Highlands. Bailey M. et al (2008), "Longterm changes in deep-water fish populations in the North East Atlantic", Proc Roy Soc B 275:1965-1969.</p>
<h3>Examples</h3>
<pre>
## Not run: 
library(MASS)
library(flexmix)
data(fishing)
attach(fishing)
fmm_pg &lt;- flexmix(totabund~meandepth + offset(log(sweptarea)), data=rwm1984, k=2,
 model=list(FLXMRglm(totabund~., family="NB1"), 
FLXMRglm(tpdocvis~., family="NB1")))
parameters(fmm_pg, component=1, model=1)
parameters(fmm_pg, component=2, model=1)
summary(fmm_pg)## End(Not run)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27593.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27593.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-fishing.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27593.json';</script>