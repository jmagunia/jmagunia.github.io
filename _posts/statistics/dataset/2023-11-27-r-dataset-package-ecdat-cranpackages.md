---
title: R Dataset / Package Ecdat / CRANpackages
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CRANpackages</span> data set which pertains to Growth of CRAN . The <span class="mono">CRANpackages</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">CRANpackages</span> data set in R by issuing the following command at the console <span class="mono">data("CRANpackages")</span>. This will load the data into a variable called <span class="mono">CRANpackages</span>. If R says the <span class="mono">CRANpackages</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-67433.csv">CRANpackages R data set</a></span>. The size of this file is about 1,060 bytes.</p><h2>Growth of CRAN</h2>
<h3>Description</h3>
<p>Data casually collected on the number of packages on the Comprehensive R Archive Network (CRAN) at different dates.</p>
<p>NOTE: This could change in the future. See Details below.</p>
<h3>Usage</h3>
<pre>
data(CRANpackages)
</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> containing:</p>
<dl>
<dt>Version</dt>
<dd>
<p>an ordered factor of the R version number primarily in use at the time. This was taken from archives of the major releases at <a href="https://svn.r-project.org/R/branches/R-1-3-patches/tests/internet.Rout.save">https://svn.r-project.org/R/branches/R-1-3-patches/tests/internet.Rout.save</a>, ... <a href="https://svn.r-project.org/R/branches/R-3-1-branch/tests/internet.Rout.save">https://svn.r-project.org/R/branches/R-3-1-branch/tests/internet.Rout.save</a></p>
</dd>
<dt>Date</dt>
<dd>
<p>an object of class <code>Date</code> giving the date on which the count of the number of CRAN packages was determined.</p>
</dd>
<dt>Packages</dt>
<dd>
<p>an integer number of packages on the CRAN mirror checked on the indicated <code>Date</code>.</p>
</dd>
<dt>Source</dt>
<dd>
<p>A factor giving the source (person) who collected the data.</p>
</dd>
</dl>
<h3>Details</h3>
<p>This seems to provide the most widely available source for data on the growth of CRAN, manually recorded by John Fox and Spencer Graves. For a discussion of these and related data, see Fox (2009).</p>
<p>For more detail, see the <a href="https://github.com/hadley/cran-packages">CRAN packages</a> data on Github maintained by Hadley Wickham. This contains the description file of every package uploaded to CRAN prior to the date of Hadley's most recent update. The current maintainer of the <code>Ecdat</code> and <code>Ecfun</code> packages would consider contributions along the following lines:</p>
<p>1. It might be nice to have a more complete dataset or datasets showing CRAN growth. This might include code fitting multiple models and predicting future growth with error bounds computed using Bayesian Model Averaging. These model fits might make an interesting addition to the examples in this help file. With a little more effort, it might make an interesting note for <em>R Journal</em>. Functions written to fit those models might be added to the <code>Ecfun</code> package.</p>
<p>2. It might be nice to have a function in <code>Ecfun</code> to download the <a href="https://github.com/hadley/cran-packages">CRAN packages</a> data from Github and convert it to a format suitable for updating this dataset.</p>
<p>The current maintainer for <code>Ecdat</code> and <code>Ecfun</code> (Spencer Graves) might be willing to accept code and documentation for this but is not ready to do it himself at the present time.</p>
<h3>Source</h3>
<p>John Fox, "Aspects of the Social Organization and Trajectory of the R Project", <em>R Journal</em>, 1(2), Dec. 2009, 5-13. <a href="https://journal.r-project.org/archive/2009-2/RJournal_2009-2_Fox.pdf">https://journal.r-project.org/archive/2009-2/RJournal_2009-2_Fox.pdf</a>, accessed 2014-04-13.</p>
<h3>Examples</h3>
<pre>
plot(Packages~Date, CRANpackages, log='y')
# almost exponential growth
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-67433.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-67433.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-cranpackages.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-67433.json';</script>