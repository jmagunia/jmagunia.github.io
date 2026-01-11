---
title: R Dataset / Package lattice / barley
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">barley</span> data set which pertains to Yield data from a Minnesota barley trial . The <span class="mono">barley</span> data set is found in the <span class="mono">lattice</span> R package. You can load the <span class="mono">barley</span> data set in R by issuing the following command at the console <span class="mono">data("barley")</span>. This will load the data into a variable called <span class="mono">barley</span>. If R says the <span class="mono">barley</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lattice")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-60148.csv">barley R data set</a></span>. The size of this file is about 1,211 bytes.</p><h2>Yield data from a Minnesota barley trial</h2>
<h3>Description</h3>
<p>Total yield in bushels per acre for 10 varieties at 6 sites in each of two years.</p>
<h3>Usage</h3>
<pre>barley</pre>
<h3>Format</h3>
<p>A data frame with 120 observations on the following 4 variables.</p>
<dl>
<dt>yield</dt>
<dd>
<p>Yield (averaged across three blocks) in bushels/acre.</p>
</dd>
<dt>variety</dt>
<dd>
<p>Factor with levels <code>"Svansota"</code>, <code>"No. 462"</code>, <code>"Manchuria"</code>, <code>"No. 475"</code>, <code>"Velvet"</code>, <code>"Peatland"</code>, <code>"Glabron"</code>, <code>"No. 457"</code>, <code>"Wisconsin No. 38"</code>, <code>"Trebi"</code>.</p>
</dd>
<dt>year</dt>
<dd>
<p>Factor with levels <code>1932</code>, <code>1931</code></p>
</dd>
<dt>site</dt>
<dd>
<p>Factor with 6 levels: <code>"Grand Rapids"</code>, <code>"Duluth"</code>, <code>"University Farm"</code>, <code>"Morris"</code>, <code>"Crookston"</code>, <code>"Waseca"</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>These data are yields in bushels per acre, of 10 varieties of barley grown in 1/40 acre plots at University Farm, St. Paul, and at the five branch experiment stations located at Waseca, Morris, Crookston, Grand Rapids, and Duluth (all in Minnesota). The varieties were grown in three randomized blocks at each of the six stations during 1931 and 1932, different land being used each year of the test.</p>
<p>Immer et al. (1934) present the data for each Year*Site*Variety*Block. The data here is the average yield across the three blocks.</p>
<p>Immer et al. (1934) refer (once) to the experiment as being conducted in 1930 and 1931, then later refer to it (repeatedly) as being conducted in 1931 and 1932. Later authors have continued the confusion.</p>
<p>Cleveland (1993) suggests that the data for the Morris site may have had the years switched.</p>
<h3>Author(s)</h3>
<p>Documentation contributed by Kevin Wright.</p>
<h3>Source</h3>
<p>Immer, R. F., H. K. Hayes, and LeRoy Powers. (1934). Statistical Determination of Barley Varietal Adaptation. <em>Journal of the American Society of Agronomy</em>, <b>26</b>, 403–419.</p>
<p>Wright, Kevin (2013). Revisiting Immer's Barley Data. <em>The American Statistician</em>, <b>67(3)</b>, 129–133.</p>
<h3>References</h3>
<p>Cleveland, William S. (1993) <em>Visualizing Data</em>. Hobart Press, Summit, New Jersey.</p>
<p>Fisher, R. A. (1971) <em>The Design of Experiments</em>. Hafner, New York, 9th edition.</p>
<h3>See Also</h3>
<p><code>immer</code> in the MASS package for data from the same experiment (expressed as total yield for 3 blocks) for a subset of varieties.</p>
<h3>Examples</h3>
<pre>
# Graphic suggesting the Morris data switched the years 1931 and 1932
# Figure 1.1 from Cleveland
dotplot(variety ~ yield | site, data = barley, groups = year,
key = simpleKey(levels(barley$year), space = "right"),
xlab = "Barley Yield (bushels/acre) ",
aspect=0.5, layout = c(1,6), ylab=NULL)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-60148.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-60148.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lattice-barley.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-60148.json';</script>