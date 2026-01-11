---
title: R Dataset / Package gamclass / fars2008
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fars2008</span> data set which pertains to US fatal road accident data, 2007 and 2008. The <span class="mono">fars2008</span> data set is found in the <span class="mono">gamclass</span> R package. You can load the <span class="mono">fars2008</span> data set in R by issuing the following command at the console <span class="mono">data("fars2008")</span>. This will load the data into a variable called <span class="mono">fars2008</span>. If R says the <span class="mono">fars2008</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("gamclass")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-96080.csv">fars2008 R data set</a></span>. The size of this file is about 4,266,156 bytes.</p><h2>US fatal road accident data, 2007 and 2008</h2>
<h3>Description</h3>
<p>Data are included on variables that may be relevant to assessing airbag and seatbelt effectiveness in preventing fatal injury.</p>
<h3>Usage</h3>
<pre>
fars2007
fars2008
</pre>
<h3>Format</h3>
<p>A data frame with 72548 observations on the following 24 variables.</p>
<dl>
<dt><code>Obs.</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>state</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>casenum</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>vnum</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>pnum</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>lightcond</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>numfatal</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>vforms</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>airbag</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>injury</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>ptype</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>restraint</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>seatpos</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>body</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>inimpact</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>mhevent</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>vfatcount</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>numoccs</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>travspd</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>make</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>model</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>modelyr</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>Data is for automabiles where a passenger seat was occupied, with one observation for each such passenger.</p>
<h3>Source</h3>
<p><a href="http://www-fars.nhtsa.dot.gov/Main/index.aspx">http://www-fars.nhtsa.dot.gov/Main/index.aspx</a></p>
<h3>References</h3>
<p><a href="http://maths-people.anu.edu.au/~johnm/nzsr/taws.html">http://maths-people.anu.edu.au/~johnm/nzsr/taws.html</a></p>
<p>Olson CM, Cummings P, Rivara FP. 2006. Association of first- and second-generation air bags with front occupant death in car crashes: a matched cohort study. Am J Epidemiol 164:161-169</p>
<p>Cummings, P; McKnight, B, 2010. Accounting for vehicle, crash, and occupant characteristics in traffic crash studies. Injury Prevention 16: 363-366</p>
<p>Braver, ER; Shardell, M; Teoh, ER, 2010. <em>How have changes in air bag designs affected frontal crash mortality?</em> Ann Epidemiol 20:499-510.</p>
<h3>Examples</h3>
<pre>
data(fars2007)
str(fars2007)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-96080.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-96080.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-gamclass-fars2008.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-96080.json';</script>