---
title: R Dataset / Package HistData / GaltonFamilies
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">GaltonFamilies</span> data set which pertains to Galton's data on the heights of parents and their children, by child. The <span class="mono">GaltonFamilies</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">GaltonFamilies</span> data set in R by issuing the following command at the console <span class="mono">data("GaltonFamilies")</span>. This will load the data into a variable called <span class="mono">GaltonFamilies</span>. If R says the <span class="mono">GaltonFamilies</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-71755.csv">GaltonFamilies R data set</a></span>. The size of this file is about 32,469 bytes.</p><h2>Galton's data on the heights of parents and their children, by child</h2>
<h3>Description</h3>
<p>This data set lists the individual observations for 934 children in 205 families on which Galton (1886) based his cross-tabulation.</p>
<p>In addition to the question of the relation between heights of parents and their offspring, for which this data is mainly famous, Galton had another purpose which the data in this form allows to address: Does marriage selection indicate a relationship between the heights of husbands and wives, a topic he called <em>assortative mating</em>? Keen [p. 297-298](2010) provides a brief discussion of this topic.</p>
<h3>Usage</h3>
<pre>data(GaltonFamilies)</pre>
<h3>Format</h3>
<p>A data frame with 934 observations on the following 8 variables.</p>
<dl>
<dt><code>family</code></dt>
<dd>
<p>family ID, a factor with levels <code>001</code>-<code>204</code></p>
</dd>
<dt><code>father</code></dt>
<dd>
<p>height of father</p>
</dd>
<dt><code>mother</code></dt>
<dd>
<p>height of mother</p>
</dd>
<dt><code>midparentHeight</code></dt>
<dd>
<p>mid-parent height, calculated as <code>(father + 1.08*mother)/2</code></p>
</dd>
<dt><code>children</code></dt>
<dd>
<p>number of children in this family</p>
</dd>
<dt><code>childNum</code></dt>
<dd>
<p>number of this child within family. Children are listed in decreasing order of height for boys followed by girls</p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>child gender, a factor with levels <code>female</code> <code>male</code></p>
</dd>
<dt><code>childHeight</code></dt>
<dd>
<p>height of child</p>
</dd>
</dl>
<h3>Details</h3>
<p>Galton's notebook lists 963 children in 205 families ranging from 1-15 adult children children. Of these, 29 had non-numeric heights recorded and are not included here.</p>
<p>Families are largely listed in decending order of fathers and mothers height.</p>
<h3>Source</h3>
<p>Galton's notebook, <a href="http://www.medicine.mcgill.ca/epidemiology/hanley/galton/notebook/">http://www.medicine.mcgill.ca/epidemiology/hanley/galton/notebook/</a>, transcribed by Beverley Shipley in 2001.</p>
<h3>References</h3>
<p>Galton, F. (1886). Regression Towards Mediocrity in Hereditary Stature <em>Journal of the Anthropological Institute</em>, 15, 246-263</p>
<p>Hanley, J. A. (2004). "Transmuting" Women into Men: Galton's Family Data on Human Stature. <em>The American Statistician</em>, 58, 237-243. See: <a href="http://www.medicine.mcgill.ca/epidemiology/hanley/galton/">http://www.medicine.mcgill.ca/epidemiology/hanley/galton/</a> for source materials.</p>
<p>Keen, K. J. (2010). <em>Graphics for Statistics and Data Analysis with R</em>, Boca Raton: CRC Press, <a href="http://www.unbc.ca/keen/graphics-for-statistics-and-data-analysis-with-r">http://www.unbc.ca/keen/graphics-for-statistics-and-data-analysis-with-r</a>.</p>
<h3>See Also</h3>
<p><code>Galton</code>, <code>PearsonLee</code></p>
<h3>Examples</h3>
<pre>
data(GaltonFamilies)
str(GaltonFamilies)## reproduce Fig 2 in Hanley (2004)
library(car)
scatterplot(childHeight ~ midparentHeight | gender, data=GaltonFamilies, 
ellipse=TRUE, levels=0.68, legend.coords=list(x=64, y=78))# multiply daughters' heights by 1.08
GF1 &lt;- within(GaltonFamilies, 
{childHeight &lt;- ifelse (gender=="female", 1.08*childHeight, childHeight)} )
scatterplot(childHeight ~ midparentHeight | gender, data=GF1, 
ellipse=TRUE, levels=0.68, legend.coords=list(x=64, y=78))# add 5.2 to daughters' heights 
GF2 &lt;- within(GaltonFamilies, 
{childHeight &lt;- ifelse (gender=="female", childHeight+5.2, childHeight)} )
scatterplot(childHeight ~ midparentHeight | gender, data=GF2, 
ellipse=TRUE, levels=0.68, legend.coords=list(x=64, y=78))#########################################
# relationship between heights of parents
#########################################Parents &lt;- subset(GaltonFamilies, !duplicated(GaltonFamilies$family))with(Parents, {
sunflowerplot(mother, father, rotate=TRUE, pch=16, 
 xlab="Mother height", ylab="Father height")
dataEllipse(mother, father, add=TRUE, plot.points=FALSE, 
 center.pch=NULL, levels=0.68)
abline(lm(father ~ mother), col="red", lwd=2)
}
)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-71755.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-71755.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-galtonfamilies.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-71755.json';</script>