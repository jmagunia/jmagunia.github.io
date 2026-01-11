---
title: R Dataset / Package car / Migration
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Migration</span> data set which pertains to Canadian Interprovincial Migration Data. The <span class="mono">Migration</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Migration</span> data set in R by issuing the following command at the console <span class="mono">data("Migration")</span>. This will load the data into a variable called <span class="mono">Migration</span>. If R says the <span class="mono">Migration</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16175.csv">Migration R data set</a></span>. The size of this file is about 4,696 bytes.</p><h2>Canadian Interprovincial Migration Data</h2>
<h3>Description</h3>
<p>The <code>Migration</code> data frame has 90 rows and 8 columns.</p>
<h3>Usage</h3>
<pre>
Migration
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>source</dt>
<dd>
<p>Province of origin (source). A factor with levels: <code>ALTA</code>, Alberta; <code>BC</code>, British Columbia; <code>MAN</code>, Manitoba; <code>NB</code>, New Brunswick; <code>NFLD</code>, New Foundland; <code>NS</code>, Nova Scotia; <code>ONT</code>, Ontario; <code>PEI</code>, Prince Edward Island; <code>QUE</code>, Quebec; <code>SASK</code>, Saskatchewan.</p>
</dd>
<dt>destination</dt>
<dd>
<p>Province of destination (1971 residence). A factor with levels: <code>ALTA</code>, Alberta; <code>BC</code>, British Columbia; <code>MAN</code>, Manitoba; <code>NB</code>, New Brunswick; <code>NFLD</code>, New Foundland; <code>NS</code>, Nova Scotia; <code>ONT</code>, Ontario; <code>PEI</code>, Prince Edward Island; <code>QUE</code>, Quebec; <code>SASK</code>, Saskatchewan.</p>
</dd>
<dt>migrants</dt>
<dd>
<p>Number of migrants (from source to destination) in the period 1966–1971.</p>
</dd>
<dt>distance</dt>
<dd>
<p>Distance (between principal cities of provinces): NFLD, St. John; PEI, Charlottetown; NS, Halifax; NB, Fredricton; QUE, Montreal; ONT, Toronto; MAN, Winnipeg; SASK, Regina; ALTA, Edmonton; BC, Vancouver.</p>
</dd>
<dt>pops66</dt>
<dd>
<p>1966 population of source province.</p>
</dd>
<dt>pops71</dt>
<dd>
<p>1971 population of source province.</p>
</dd>
<dt>popd66</dt>
<dd>
<p>1966 population of destination province.</p>
</dd>
<dt>popd71</dt>
<dd>
<p>1971 population of destination province.</p>
</dd>
</dl>
<h3>Details</h3>
<p>There is one record in the data file for each migration stream. You can average the 1966 and 1971 population figures for each of the source and destination provinces.</p>
<h3>Source</h3>
<p>Canada (1962) <em>Map</em>. Department of Mines and Technical Surveys.</p>
<p>Canada (1971) <em>Census of Canada</em>. Statistics Canada, Vol. 1, Part 2 [Table 32].</p>
<p>Canada (1972) <em>Canada Year Book</em>. Statistics Canada [p. 1369].</p>
<h3>References</h3>
<p>Fox, J. (2008) <em>Applied Regression Analysis and Generalized Linear Models</em>, Second Edition. Sage.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16175.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16175.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-migration.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16175.json';</script>