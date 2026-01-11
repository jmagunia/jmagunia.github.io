---
title: R Dataset / Package wooldridge / prminwge
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">prminwge</span> data set which pertains to prminwge. The <span class="mono">prminwge</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">prminwge</span> data set in R by issuing the following command at the console <span class="mono">data("prminwge")</span>. This will load the data into a variable called <span class="mono">prminwge</span>. If R says the <span class="mono">prminwge</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94173.csv">prminwge R data set</a></span>. The size of this file is about 15,012 bytes.</p><h2>prminwge</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(prminwge) into the console.</p>
<h3>Usage</h3>
<pre>
data(prminwge)
</pre>
<h3>Format</h3>
<p>A data.frame with 38 rows and 25 variables:</p>
<ul>
<li>
<p>year. 1950-1987</p>
</li>
<li>
<p>avgmin. weighted avg min wge, 44 indust</p>
</li>
<li>
<p>avgwage. wghted avg hrly wge, 44 indust</p>
</li>
<li>
<p>kaitz. Kaitz min wage index</p>
</li>
<li>
<p>avgcov. wghted avg coverage, 8 indust</p>
</li>
<li>
<p>covt. economy-wide coverage of min wg</p>
</li>
<li>
<p>mfgwage. avg manuf. wage</p>
</li>
<li>
<p>prdef. Puerto Rican price deflator</p>
</li>
<li>
<p>prepop. PR employ/popul ratio</p>
</li>
<li>
<p>prepopf. PR employ/popul ratio, alter.</p>
</li>
<li>
<p>prgnp. PR GNP</p>
</li>
<li>
<p>prunemp. PR unemployment rate</p>
</li>
<li>
<p>usgnp. US GNP</p>
</li>
<li>
<p>t. time trend: 1 to 38</p>
</li>
<li>
<p>post74. time trend: starts in 1974</p>
</li>
<li>
<p>lprunemp. log(prunemp)</p>
</li>
<li>
<p>lprgnp. log(prgnp)</p>
</li>
<li>
<p>lusgnp. log(usgnp)</p>
</li>
<li>
<p>lkaitz. log(kaitz)</p>
</li>
<li>
<p>lprun_1. lprunemp[_n-1]</p>
</li>
<li>
<p>lprepop. log(prepop)</p>
</li>
<li>
<p>lprep_1. lprepop[_n-1]</p>
</li>
<li>
<p>mincov. (avgmin/avgwage)*avgcov</p>
</li>
<li>
<p>lmincov. log(mincov)</p>
</li>
<li>
<p>lavgmin. log(avgmin)</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(prminwge)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94173.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94173.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-prminwge.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94173.json';</script>