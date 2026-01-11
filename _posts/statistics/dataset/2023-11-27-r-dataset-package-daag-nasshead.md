---
title: R Dataset / Package DAAG / nasshead
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">nasshead</span> data set which pertains to Documentation of names of columns in nass9702cor. The <span class="mono">nasshead</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">nasshead</span> data set in R by issuing the following command at the console <span class="mono">data("nasshead")</span>. This will load the data into a variable called <span class="mono">nasshead</span>. If R says the <span class="mono">nasshead</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-45298.csv">nasshead R data set</a></span>. The size of this file is about 2,096 bytes.</p><h2>Documentation of names of columns in nass9702cor</h2>
<h3>Description</h3>
<p><code>SASname</code> and <code>longname</code> are from the SAS XPT file nass9702cor.XPT that is available from the webite noted below. The name <code>shortname</code> is the name used in the data frame <code>nass9702cor</code>, not included in this package, but available from my website that is noted below. It is also used in <code>nassCDS</code>, for columns that <code>nassCDS</code> includes.</p>
<h3>Usage</h3>
<pre>data(nasshead)</pre>
<h3>Format</h3>
<p>A data frame with 56 observations on the following 3 variables.</p>
<dl>
<dt><code>shortname</code></dt>
<dd>
<p>a character vector</p>
</dd>
<dt><code>SASname</code></dt>
<dd>
<p>a character vector</p>
</dd>
<dt><code>longname</code></dt>
<dd>
<p>a character vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>For full details of the coding of values in columns of <code>nass9702cor</code>, consult one of the SAS format files that can be obtained by following the instructions on Dr Meyer's web site that is noted below.</p>
<h3>Source</h3>
<p><a href="http://www.stat.colostate.edu/~meyer/airbags.htm">http://www.stat.colostate.edu/~meyer/airbags.htm</a>\ <a href="ftp://ftp.nhtsa.dot.gov/nass/">ftp://ftp.nhtsa.dot.gov/nass/</a>\ Click, e.g., on 1997 and then on SASformats. See also <a href="http://www.maths.anu.edu.au/~johnm/datasets/airbags">http://www.maths.anu.edu.au/~johnm/datasets/airbags</a></p>
<h3>References</h3>
<p>Meyer, M.C. and Finney, T. (2005): <em>Who wants airbags?</em>. Chance 18:3-16.</p>
<p>Farmer, C.H. 2006. <em>Another look at Meyer and Finney's 'Who wants airbags?'</em>. Chance 19:15-22.</p>
<p>Meyer, M.C. 2006. <em>Commentary on "Another look at Meyer and Finney's ‘Who wants airbags?’"</em>. Chance 19:23-24.</p>
<h3>Examples</h3>
<pre>
data(nasshead)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45298.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45298.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-nasshead.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45298.json';</script>