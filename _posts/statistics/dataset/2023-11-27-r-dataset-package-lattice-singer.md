---
title: R Dataset / Package lattice / singer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">singer</span> data set which pertains to Heights of New York Choral Society singers . The <span class="mono">singer</span> data set is found in the <span class="mono">lattice</span> R package. You can load the <span class="mono">singer</span> data set in R by issuing the following command at the console <span class="mono">data("singer")</span>. This will load the data into a variable called <span class="mono">singer</span>. If R says the <span class="mono">singer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lattice")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-93464.csv">singer R data set</a></span>. The size of this file is about 3,082 bytes.</p><h2>Heights of New York Choral Society singers</h2>
<h3>Description</h3>
<p>Heights in inches of the singers in the New York Choral Society in 1979. The data are grouped according to voice part. The vocal range for each voice part increases in pitch according to the following order: Bass 2, Bass 1, Tenor 2, Tenor 1, Alto 2, Alto 1, Soprano 2, Soprano 1.</p>
<h3>Usage</h3>
<pre>singer</pre>
<h3>Format</h3>
<p>A data frame with 235 observations on the following 2 variables.</p>
<dl>
<dt>height</dt>
<dd>
<p>Height in inches of the singers.</p>
</dd>
<dt>voice.part</dt>
<dd>
<p>(Unordered) factor with levels "<code>Bass 2</code>", "<code>Bass 1</code>", "<code>Tenor 2</code>", "<code>Tenor 1</code>", "<code>Alto 2</code>", "<code>Alto 1</code>", "<code>Soprano 2</code>", "<code>Soprano 1</code>".</p>
</dd>
</dl>
<h3>Author(s)</h3>
<p>Documentation contributed by Kevin Wright.</p>
<h3>Source</h3>
<p>Chambers, J.M., W. S. Cleveland, B. Kleiner, and P. A. Tukey. (1983). <em>Graphical Methods for Data Analysis</em>. Chapman and Hall, New York.</p>
<h3>References</h3>
<p>Cleveland, William S. (1993) <em>Visualizing Data</em>. Hobart Press, Summit, New Jersey.</p>
<h3>Examples</h3>
<pre>
# Separate histogram for each voice part (Figure 1.2 from Cleveland)
histogram(~ height | voice.part,
data = singer,
aspect=1,
layout = c(2, 4), 
nint=15,
xlab = "Height (inches)")# Quantile-Quantile plot (Figure 2.11 from Cleveland)
qqmath(~ height | voice.part,
 data=singer,
 aspect=1, 
 layout=c(2,4),
 prepanel = prepanel.qqmathline,
 panel = function(x, ...) {
 panel.grid()
 panel.qqmathline(x, ...)
 panel.qqmath(x, ...)
 },
 xlab = "Unit Normal Quantile",
 ylab="Height (inches)")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-93464.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-93464.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lattice-singer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-93464.json';</script>