---
title: R Dataset / Package mosaicData / Mites
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Mites</span> data set which pertains to Mites and Wilt Disease. The <span class="mono">Mites</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Mites</span> data set in R by issuing the following command at the console <span class="mono">data("Mites")</span>. This will load the data into a variable called <span class="mono">Mites</span>. If R says the <span class="mono">Mites</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47884.csv">Mites R data set</a></span>. The size of this file is about 847 bytes.</p><h2>Mites and Wilt Disease</h2>
<h3>Description</h3>
<p>Data from an experiment to test whether exposure to mites protects against Wilt Disease in cotton plants.</p>
<h3>Usage</h3>
<pre>
data(Mites)
</pre>
<h3>Format</h3>
<p>A data frame with 47 observations on the following variables.</p>
<ul>
<li>
<p><code>treatment</code> a factor with levels <code>mites</code> and <code>no mites</code></p>
</li>
<li>
<p><code>outcome</code> a factor with levels <code>wilt</code> and <code>no wilt</code></p>
</li>
</ul>
<h3>Details</h3>
<p>Researchers suspected that attack of a plant by one organism induced resistance to subsequent attack by a different organism. Individually potted cotton plants were randomly allocated to two groups: infestation by spider mites or no infestation. After two weeks the mites were dutifully removed by a conscientious research assistant, and both groups were inoculated with Verticillium, a fungus that causes Wilt disease. More information can be found at <a href="https://www.causeweb.org/webinar/activity/2010-01/">https://www.causeweb.org/webinar/activity/2010-01/</a>.</p>
<h3>Source</h3>
<p>Statistics for the Life Sciences, Third Edition; Myra Samuels &amp; Jeffrey Witmer (2003), page 409.</p>
<h3>Examples</h3>
<pre>
data(Mites)
if (require(mosaic)) {
tally(~ treatment + outcome, data=Mites)
tally(~ outcome | treatment, format="percent", data=Mites)
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47884.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47884.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-mites.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47884.json';</script>