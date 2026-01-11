---
title: R Dataset / Package HistData / Yeast
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Yeast</span> data set which pertains to Student's (1906) Yeast Cell Counts. The <span class="mono">Yeast</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Yeast</span> data set in R by issuing the following command at the console <span class="mono">data("Yeast")</span>. This will load the data into a variable called <span class="mono">Yeast</span>. If R says the <span class="mono">Yeast</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14587.csv">Yeast R data set</a></span>. The size of this file is about 344 bytes.</p><h2>Student's (1906) Yeast Cell Counts</h2>
<h3>Description</h3>
<p>Counts of the number of yeast cells were made each of 400 regions in a 20 x 20 grid on a microscope slide, comprising a 1 sq. mm. area. This experiment was repeated four times, giving samples A, B, C and D.</p>
<p>Student (1906) used these data to investigate the errors in random sampling. He says "there are two sources of error: (a) the drop taken may not be representative of the bulk of the liquid; (b) the distribution of the cells over the area which is examined is never exactly uniform, so that there is an 'error of random sampling.'"</p>
<p>The data in the paper are provided in the form of discrete frequency distributions for the four samples. Each shows the frequency distribution squares containing a <code>count</code> of 0, 1, 2, ... yeast cells. These are combined here in <code>Yeast</code>. In addition, he gives a table (Table I) showing the actual number of yeast cells counted in the 20 x 20 grid for sample D, given here as <code>YeastD.mat</code>.</p>
<h3>Usage</h3>
<pre>
data(Yeast)
data(YeastD.mat)
</pre>
<h3>Format</h3>
<p><code>Yeast</code>: A frequency data frame with 36 observations on the following 3 variables, giving the frequencies of</p>
<dl>
<dt><code>sample</code></dt>
<dd>
<p>Sample identifier, a factor with levels <code>A</code> <code>B</code> <code>C</code> <code>D</code></p>
</dd>
<dt><code>count</code></dt>
<dd>
<p>The number of yeast cells counted in a square</p>
</dd>
<dt><code>freq</code></dt>
<dd>
<p>The number of squares with the given <code>count</code></p>
</dd>
</dl>
<p><code>YeastD.mat</code>: A 20 x 20 matrix containing the count of yeast cells in each square for sample D.</p>
<h3>Details</h3>
<p>Student considers the distribution of a total of <i>Nm</i> particles distributed over <i>N</i> unit areas with an average of <i>m</i> particles per unit area. With uniform mixing, for a given particle, the probability of it falling on any one area is <i>p = 1/N</i>, and not falling on that area is <i>q = 1 - 1/N</i>. He derives the probability distribution of 0, 1, 2, 3, ... particles on a single unit area from the binomial expansion of <i>(p + q)^{mN}</i>.</p>
<h3>Source</h3>
<p>D. J. Hand, F. Daly, D. Lunn, K. McConway and E. Ostrowski (1994). <em>A Handbook of Small Data Sets</em>. London: Chapman \&amp; Hall. The data may be found at: <a href="http://www.stat.duke.edu/courses/Spring98/sta113/Data/Hand/yeast.dat">http://www.stat.duke.edu/courses/Spring98/sta113/Data/Hand/yeast.dat</a></p>
<h3>References</h3>
<p>"Student" (1906) On the error of counting with a haemocytometer. Biometrika, 5, 351-360. <a href="http://www.medicine.mcgill.ca/epidemiology/hanley/c626/Student_counting.pdf">http://www.medicine.mcgill.ca/epidemiology/hanley/c626/Student_counting.pdf</a></p>
<h3>Examples</h3>
<pre>
data(Yeast)require(lattice)
# basic bar charts 
# TODO: frequencies should start at 0, not 1.
barchart(count~freq|sample, data=Yeast, ylab="Number of Cells", xlab="Frequency")
barchart(freq~count|sample, data=Yeast, xlab="Number of Cells", ylab="Frequency",
horizontal=FALSE, origin=0)# same, using xyplot
xyplot(freq~count|sample, data=Yeast, xlab="Number of Cells", ylab="Frequency",
horizontal=FALSE, origin=0, type="h", lwd=10)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14587.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14587.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-yeast.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14587.json';</script>