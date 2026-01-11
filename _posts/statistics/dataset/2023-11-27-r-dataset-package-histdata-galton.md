---
title: R Dataset / Package HistData / Galton
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Galton</span> data set which pertains to Galton's data on the heights of parents and their children. The <span class="mono">Galton</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Galton</span> data set in R by issuing the following command at the console <span class="mono">data("Galton")</span>. This will load the data into a variable called <span class="mono">Galton</span>. If R says the <span class="mono">Galton</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30705.csv">Galton R data set</a></span>. The size of this file is about 20,032 bytes.</p><h2>Galton's data on the heights of parents and their children</h2>
<h3>Description</h3>
<p>Galton (1886) presented these data in a table, showing a cross-tabulation of 928 adult children born to 205 fathers and mothers, by their height and their mid-parent's height. He visually smoothed the bivariate frequency distribution and showed that the contours formed concentric and similar ellipses, thus setting the stage for correlation, regression and the bivariate normal distribution.</p>
<h3>Usage</h3>
<pre>data(Galton)</pre>
<h3>Format</h3>
<p>A data frame with 928 observations on the following 2 variables.</p>
<dl>
<dt><code>parent</code></dt>
<dd>
<p>a numeric vector: height of the mid-parent (average of father and mother)</p>
</dd>
<dt><code>child</code></dt>
<dd>
<p>a numeric vector: height of the child</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are recorded in class intervals of width 1.0 in. He used non-integer values for the center of each class interval because of the strong bias toward integral inches.</p>
<p>All of the heights of female children were multiplied by 1.08 before tablulation to compensate for sex differences. See Hanley (2004) for a reanalysis of Galton's raw data questioning whether this was appropriate.</p>
<h3>Source</h3>
<p>Galton, F. (1886). Regression Towards Mediocrity in Hereditary Stature <em>Journal of the Anthropological Institute</em>, 15, 246-263</p>
<h3>References</h3>
<p>Friendly, M. &amp; Denis, D. (2005). The early origins and development of the scatterplot. <em>Journal of the History of the Behavioral Sciences</em>, 41, 103-130.</p>
<p>Galton, F. (1869). <em>Hereditary Genius: An Inquiry into its Laws and Consequences</em>. London: Macmillan.</p>
<p>Hanley, J. A. (2004). "Transmuting" Women into Men: Galton's Family Data on Human Stature. <em>The American Statistician</em>, 58, 237-243. See: <a href="http://www.medicine.mcgill.ca/epidemiology/hanley/galton/">http://www.medicine.mcgill.ca/epidemiology/hanley/galton/</a> for source materials.</p>
<p>Stigler, S. M. (1986). <em>The History of Statistics: The Measurement of Uncertainty before 1900</em>. Cambridge, MA: Harvard University Press, Table 8.1</p>
<p>Wachsmuth, A. W., Wilkinson L., Dallal G. E. (2003). Galton's bend: A previously undiscovered nonlinearity in Galton's family stature regression data. <em>The American Statistician</em>, 57, 190-192. <a href="http://www.cs.uic.edu/~wilkinson/Publications/galton.pdf">http://www.cs.uic.edu/~wilkinson/Publications/galton.pdf</a></p>
<h3>See Also</h3>
<p><code>link{GaltonFamilies}</code>, <code>PearsonLee</code>, <code>galton</code></p>
<h3>Examples</h3>
<pre>data(Galton)###########################################################################
# sunflower plot with regression line and data ellipses and lowess smooth
###########################################################################with(Galton, 
{
sunflowerplot(parent,child, xlim=c(62,74), ylim=c(62,74))
reg &lt;- lm(child ~ parent)
abline(reg)
lines(lowess(parent, child), col="blue", lwd=2)
if(require(car)) {
dataEllipse(parent,child, xlim=c(62,74), ylim=c(62,74), plot.points=FALSE)
}
})</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30705.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30705.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-galton.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30705.json';</script>