---
title: R Dataset / Package DAAG / leafshape17
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">leafshape17</span> data set which pertains to Subset of Leaf Shape Data Set. The <span class="mono">leafshape17</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">leafshape17</span> data set in R by issuing the following command at the console <span class="mono">data("leafshape17")</span>. This will load the data into a variable called <span class="mono">leafshape17</span>. If R says the <span class="mono">leafshape17</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-56989.csv">leafshape17 R data set</a></span>. The size of this file is about 4,883 bytes.</p><h2>Subset of Leaf Shape Data Set</h2>
<h3>Description</h3>
<p>The <code>leafshape17</code> data frame has 61 rows and 8 columns. These are leaf length, width and petiole measurements taken at several sites in Australia. This is a subset of the <code>leafshape</code> data frame.</p>
<h3>Usage</h3>
<pre>leafshape17</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>bladelen</dt>
<dd>
<p>leaf length (in mm)</p>
</dd>
<dt>petiole</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>bladewid</dt>
<dd>
<p>leaf width (in mm)</p>
</dd>
<dt>latitude</dt>
<dd>
<p>latitude</p>
</dd>
<dt>logwid</dt>
<dd>
<p>natural logarithm of width</p>
</dd>
<dt>logpet</dt>
<dd>
<p>logarithm of petiole measurement</p>
</dd>
<dt>loglen</dt>
<dd>
<p>logarithm of length</p>
</dd>
<dt>arch</dt>
<dd>
<p>leaf architecture (0 = orthotropic, 1 = plagiotropic)</p>
</dd>
</dl>
<h3>Source</h3>
<p>King, D.A. and Maindonald, J.H. 1999. Tree architecture in relation to leaf dimensions and tree stature in temperate and tropical rain forests. Journal of Ecology 87: 1012-1024.</p>
<h3>Examples</h3>
<pre>
print("Discriminant Analysis - Example 11.2")require(MASS)
leaf17.lda &lt;- lda(arch ~ logwid+loglen, data=leafshape17)
leaf17.hat &lt;- predict(leaf17.lda)
leaf17.lda
 table(leafshape17$arch, leaf17.hat$class)
pause()tab &lt;- table(leafshape17$arch, leaf17.hat$class)
 sum(tab[row(tab)==col(tab)])/sum(tab)
leaf17cv.lda &lt;- lda(arch ~ logwid+loglen, data=leafshape17, CV=TRUE)
tab &lt;- table(leafshape17$arch, leaf17cv.lda$class)
pause()leaf17.glm &lt;- glm(arch ~ logwid + loglen, family=binomial, data=leafshape17)
 options(digits=3)
summary(leaf17.glm)$coef
pause()leaf17.one &lt;- cv.binary(leaf17.glm)
table(leafshape17$arch, round(leaf17.one$internal)) # Resubstitution
pause()table(leafshape17$arch, round(leaf17.one$cv)) # Cross-validation
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-56989.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-56989.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-leafshape17.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-56989.json';</script>