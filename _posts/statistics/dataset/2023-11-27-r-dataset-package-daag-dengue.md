---
title: R Dataset / Package DAAG / dengue
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">dengue</span> data set which pertains to Dengue prevalence, by administrative region. The <span class="mono">dengue</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">dengue</span> data set in R by issuing the following command at the console <span class="mono">data("dengue")</span>. This will load the data into a variable called <span class="mono">dengue</span>. If R says the <span class="mono">dengue</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85465.csv">dengue R data set</a></span>. The size of this file is about 250,766 bytes.</p><h2>Dengue prevalence, by administrative region</h2>
<h3>Description</h3>
<p>Data record, for each of 2000 administrative regions, whether or not dengue was recorded at any time between 1961 and 1990.</p>
<h3>Usage</h3>
<pre>data(dengue)</pre>
<h3>Format</h3>
<p>A data frame with 2000 observations on the following 13 variables.</p>
<dl>
<dt>humid</dt>
<dd>
<p>Average vapour density: 1961-1990</p>
</dd>
<dt>humid90</dt>
<dd>
<p>90th percentile of <code>humid</code></p>
</dd>
<dt>temp</dt>
<dd>
<p>Average temperature: 1961-1990</p>
</dd>
<dt>temp90</dt>
<dd>
<p>90th percentile of <code>temp</code></p>
</dd>
<dt>h10pix</dt>
<dd>
<p>maximum of <code>humid</code>, within a 10 pixel radius</p>
</dd>
<dt>h10pix90</dt>
<dd>
<p>maximum of <code>humid90</code>, within a 10 pixel radius</p>
</dd>
<dt>trees</dt>
<dd>
<p>Percent tree cover, from satellite data</p>
</dd>
<dt>trees90</dt>
<dd>
<p>90th percentile of <code>trees</code></p>
</dd>
<dt>NoYes</dt>
<dd>
<p>Was dengue observed? (1=yes)</p>
</dd>
<dt>Xmin</dt>
<dd>
<p>minimum longitude</p>
</dd>
<dt>Xmax</dt>
<dd>
<p>maximum longitude</p>
</dd>
<dt>Ymin</dt>
<dd>
<p>minimum latitude</p>
</dd>
<dt>Ymax</dt>
<dd>
<p>maximum latitude</p>
</dd>
</dl>
<h3>Details</h3>
<p>This is derived from a data set in which the climate and tree cover information were given for each half degree of latitude by half degreee of longitude pixel. The variable <code>NoYes</code> was given by administrative region. The climate data and tree cover data given here are 50th or 90th percentiles, where percetiles were calculates across pixels for an administrative region.</p>
<h3>Source</h3>
<p>Simon Hales, Environmental Research New Zealand Ltd.</p>
<h3>References</h3>
<p>Hales, S., de Wet, N., Maindonald, J. and Woodward, A. 2002. Potential effect of population and climate change global distribution of dengue fever: an empirical model. The Lancet 2002; 360: 830-34.</p>
<h3>Examples</h3>
<pre>
str(dengue)
glm(NoYes ~ humid, data=dengue, family=binomial)
glm(NoYes ~ humid90, data=dengue, family=binomial)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85465.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85465.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-dengue.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85465.json';</script>