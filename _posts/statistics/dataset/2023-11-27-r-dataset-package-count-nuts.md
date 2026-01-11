---
title: R Dataset / Package COUNT / nuts
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nuts</span> data set which pertains to nuts. The <span class="mono">nuts</span> data set is found in the <span class="mono">COUNT</span> R package. You can load the <span class="mono">nuts</span> data set in R by issuing the following command at the console <span class="mono">data("nuts")</span>. This will load the data into a variable called <span class="mono">nuts</span>. If R says the <span class="mono">nuts</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("COUNT")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-93028.csv">nuts R data set</a></span>. The size of this file is about 5,713 bytes.</p><h2>nuts</h2>
<h3>Description</h3>
<p>Squirrel data set (nuts) from Zuur, Hilbe, and Ieno (2013). As originally reported by Flaherty et al (2012), researchers recorded information about squirrel behavior and forest attributes across various plots in Scotland's Abernathy Forest. The study focused on the following variables. response cones number of cones stripped by red squirrels per plot predictor sntrees standardized number of trees per plot sheight standardized mean tree height per plot scover standardized percentage of canopy cover per plot The stripped cone count was only taken when the mean diameter of trees was under 0.6m (dbh).</p>
<h3>Usage</h3>
<pre>data(nuts)</pre>
<h3>Format</h3>
<p>A data frame with 52 observations on the following 8 variables.</p>
<dl>
<dt><code>cones</code></dt>
<dd>
<p>number cones stripped by squirrels</p>
</dd>
<dt><code>ntrees</code></dt>
<dd>
<p>number of trees per plot</p>
</dd>
<dt><code>dbh</code></dt>
<dd>
<p>number DBH per plot</p>
</dd>
<dt><code>height</code></dt>
<dd>
<p>mean tree height per plot</p>
</dd>
<dt><code>cover</code></dt>
<dd>
<p>canopy closure (as a percentage)</p>
</dd>
<dt><code>sntrees</code></dt>
<dd>
<p>standardized number of trees per plot</p>
</dd>
<dt><code>sheight</code></dt>
<dd>
<p>standardized mean tree height per plot</p>
</dd>
<dt><code>scover</code></dt>
<dd>
<p>standardized canopy closure (as a percentage)</p>
</dd>
</dl>
<h3>Details</h3>
<p>nuts is saved as a data frame. Count models use ntrees as response variable. Counts start at 3</p>
<h3>Source</h3>
<p>Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R, Highlands</p>
<h3>References</h3>
<p>Hilbe, Joseph M (2014), Modeling Count Data, Cambridge University Press Zuur, Hilbe, Ieno (2013), A Beginner's Guide to GLM and GLMM using R, Highlands. Flaherty, S et al (2012), "The impact of forest stand structure on red squirrels habitat use", Forestry 85:437-444.</p>
<h3>Examples</h3>
<pre>
data(nuts)
nut &lt;- subset(nuts, dbh &lt; 0.6)
# sntrees &lt;- scale(nuts$ntrees)
# sheigtht &lt;- scale(nuts$height)
# scover &lt;- scale(nuts$cover)
summary(PO &lt;- glm(cones ~ sntrees + sheight + scover, family=quasipoisson, data=nut))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-93028.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-93028.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-count-nuts.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-93028.json';</script>