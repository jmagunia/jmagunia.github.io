---
title: R Dataset / Package lattice / melanoma
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">melanoma</span> data set which pertains to Melanoma skin cancer incidence . The <span class="mono">melanoma</span> data set is found in the <span class="mono">lattice</span> R package. You can load the <span class="mono">melanoma</span> data set in R by issuing the following command at the console <span class="mono">data("melanoma")</span>. This will load the data into a variable called <span class="mono">melanoma</span>. If R says the <span class="mono">melanoma</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lattice")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68016.csv">melanoma R data set</a></span>. The size of this file is about 350 bytes.</p><h2>Melanoma skin cancer incidence</h2>
<h3>Description</h3>
<p>These data from the Connecticut Tumor Registry present age-adjusted numbers of melanoma skin-cancer incidences per 100,000 people in Connectict for the years from 1936 to 1972.</p>
<h3>Usage</h3>
<pre>melanoma</pre>
<h3>Format</h3>
<p>A data frame with 37 observations on the following 2 variables.</p>
<dl>
<dt>year</dt>
<dd>
<p>Years 1936 to 1972.</p>
</dd>
<dt>incidence</dt>
<dd>
<p>Rate of melanoma cancer per 100,000 population.</p>
</dd>
</dl>
<h3>Note</h3>
<p>This dataset is not related to the <code>melanoma</code> dataset in the <b>boot</b> package with the same name.</p>
<p>The S-PLUS 6.2 help for the melanoma data says that the incidence rate is per <em>million</em>, but this is not consistent with data found at the National Cancer Institute (<a href="http://www.nci.nih.gov">http://www.nci.nih.gov</a>).</p>
<h3>Author(s)</h3>
<p>Documentation contributed by Kevin Wright.</p>
<h3>Source</h3>
<p>Houghton, A., E. W. Munster, and M. V. Viola. (1978). Increased Incidence of Malignant Melanoma After Peaks of Sunspot Activity. <em>The Lancet</em>, <b>8</b>, 759–760.</p>
<h3>References</h3>
<p>Cleveland, William S. (1993) <em>Visualizing Data</em>. Hobart Press, Summit, New Jersey.</p>
<h3>Examples</h3>
<pre>
# Time-series plot.Figure 3.64 from Cleveland.
xyplot(incidence ~ year,
data = melanoma,
aspect = "xy",
panel = function(x, y)
panel.xyplot(x, y, type="o", pch = 16),
ylim = c(0, 6),
xlab = "Year",
ylab = "Incidence")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68016.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68016.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lattice-melanoma.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68016.json';</script>