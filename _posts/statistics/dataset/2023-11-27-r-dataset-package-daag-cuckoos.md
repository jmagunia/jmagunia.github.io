---
title: R Dataset / Package DAAG / cuckoos
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cuckoos</span> data set which pertains to Cuckoo Eggs Data. The <span class="mono">cuckoos</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">cuckoos</span> data set in R by issuing the following command at the console <span class="mono">data("cuckoos")</span>. This will load the data into a variable called <span class="mono">cuckoos</span>. If R says the <span class="mono">cuckoos</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27869.csv">cuckoos R data set</a></span>. The size of this file is about 3,062 bytes.</p><h2>Cuckoo Eggs Data</h2>
<h3>Description</h3>
<p>Length and breadth measurements of 120 eggs lain in the nests of six different species of host bird.</p>
<h3>Usage</h3>
<pre>cuckoos</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>length</dt>
<dd>
<p>the egg lengths in millimeters</p>
</dd>
<dt>breadth</dt>
<dd>
<p>the egg breadths in millimeters</p>
</dd>
<dt>species</dt>
<dd>
<p>a factor with levels <code>hedge.sparrow</code>, <code>meadow.pipit</code>, <code>pied.wagtail</code>, <code>robin</code>, <code>tree.pipit</code>, <code>wren</code></p>
</dd>
<dt>id</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>Latter, O.H. (1902). The eggs of Cuculus canorus. An Inquiry into the dimensions of the cuckoo's egg and the relation of the variations to the size of the eggs of the foster-parent, with notes on coloration, &amp;c. Biometrika i, 164.</p>
<h3>References</h3>
<p>Tippett, L.H.C. 1931: "The Methods of Statistics". Williams &amp; Norgate, London.</p>
<h3>Examples</h3>
<pre> 
print("Strip and Boxplots - Example 2.1.2")attach(cuckoos)
oldpar &lt;- par(las = 2) # labels at right angle to axis.
stripchart(length ~ species) 
boxplot(split(cuckoos$length, cuckoos$species),
 xlab="Length of egg", horizontal=TRUE)
detach(cuckoos)
par(oldpar)
pause()print("Summaries - Example 2.2.2")
sapply(split(cuckoos$length, cuckoos$species), sd)
pause()print("Example 4.1.4")
wren &lt;- split(cuckoos$length, cuckoos$species)$wren
median(wren)
n &lt;- length(wren)
sqrt(pi/2)*sd(wren)/sqrt(n)# this s.e. computation assumes normality
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27869.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27869.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-cuckoos.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27869.json';</script>