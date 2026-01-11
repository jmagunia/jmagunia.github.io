---
title: R Dataset / Package Ecdat / PatentsRD
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PatentsRD</span> data set which pertains to Patents, R\&amp;D and Technological Spillovers for a Panel of Firms . The <span class="mono">PatentsRD</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">PatentsRD</span> data set in R by issuing the following command at the console <span class="mono">data("PatentsRD")</span>. This will load the data into a variable called <span class="mono">PatentsRD</span>. If R says the <span class="mono">PatentsRD</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34428.csv">PatentsRD R data set</a></span>. The size of this file is about 59,467 bytes.</p><h2>Patents, R\&amp;D and Technological Spillovers for a Panel of Firms</h2>
<h3>Description</h3>
<p>a panel of 181 observations from 1983 to 1991</p>
<p><em>number of observations</em> : 1629</p>
<p><em>observation</em> : production units</p>
<p><em>country</em> : world</p>
<h3>Usage</h3>
<pre>data(PatentsRD)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>year</dt>
<dd>
<p>year</p>
</dd>
<dt>fi</dt>
<dd>
<p>firm's id</p>
</dd>
<dt>sector</dt>
<dd>
<p>firm's main industry sector, one of aero (aerospace), chem (chemistry), comput (computer), drugs, elec (electricity), food, fuel (fuel and mining), glass, instr (instruments), machin (machinery), metals, other, paper, soft (software), motor (motor vehicles)</p>
</dd>
<dt>geo</dt>
<dd>
<p>geographic area, one of eu (European Union), japan, usa, rotw (rest of the world)</p>
</dd>
<dt>patent</dt>
<dd>
<p>numbers of European patent applications</p>
</dd>
<dt>rdexp</dt>
<dd>
<p>log of R\&amp;D expenditures</p>
</dd>
<dt>spil</dt>
<dd>
<p>log of spillovers</p>
</dd>
</dl>
<h3>Source</h3>
<p>Cincer, Michele (1997) “Patents, R \&amp; D and technological spillovers at the firm level : some evidence from econometric count models for panel data”, <em>Journal of Applied Econometrics</em>, <b>12(3)</b>, may–june, 265–280.</p>
<h3>References</h3>
<p>Journal of Applied Econometrics data archive : <a href="http://qed.econ.queensu.ca/jae/">http://qed.econ.queensu.ca/jae/</a>. Verbeek, Marno (2004) <em>A Guide to Modern Econometrics</em>, John Wiley and Sons, chapter 7.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code>,</p>
<p><code>Index.Time.Series</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34428.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34428.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-patentsrd.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34428.json';</script>