---
title: R Dataset / Package Ecdat / Unemployment
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Unemployment</span> data set which pertains to Unemployment Duration . The <span class="mono">Unemployment</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">Unemployment</span> data set in R by issuing the following command at the console <span class="mono">data("Unemployment")</span>. This will load the data into a variable called <span class="mono">Unemployment</span>. If R says the <span class="mono">Unemployment</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-82618.csv">Unemployment R data set</a></span>. The size of this file is about 22,480 bytes.</p><h2>Unemployment Duration</h2>
<h3>Description</h3>
<p>a cross-section from 1993</p>
<p><em>number of observations</em> : 452</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(Unemployment)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>duration</dt>
<dd>
<p>duration of first spell of unemployment, t, in weeks</p>
</dd>
<dt>spell</dt>
<dd>
<p>1 if spell is complete</p>
</dd>
<dt>race</dt>
<dd>
<p>one of nonwhite, white</p>
</dd>
<dt>sex</dt>
<dd>
<p>one of male, female</p>
</dd>
<dt>reason</dt>
<dd>
<p>reason for unemployment, one of new (new entrant), lose (job loser), leave (job leaver), reentr (labor force reentrant)</p>
</dd>
<dt>search</dt>
<dd>
<p>'yes' if (1) the unemployment spell is completed between the first and second surveys and number of methods used to search &gt; average number of methods used across all records in the sample, or, (2) for individuals who remain unemployed for consecutive surveys, if the number of methods used is strictly nondecreasing at all survey points, and is strictly increasing at least at one survey point</p>
</dd>
<dt>pubemp</dt>
<dd>
<p>'yes' if an individual used a public employment agency to search for work at any survey points relating to the individuals first unemployment spell</p>
</dd>
<dt>ftp1</dt>
<dd>
<p>1 if an individual is searching for full time work at survey 1</p>
</dd>
<dt>ftp2</dt>
<dd>
<p>1 if an individual is searching for full time work at survey 2</p>
</dd>
<dt>ftp3</dt>
<dd>
<p>1 if an individual is searching for full time work at survey 3</p>
</dd>
<dt>ftp4</dt>
<dd>
<p>1 if an individual is searching for full time work at survey 4</p>
</dd>
<dt>nobs</dt>
<dd>
<p>number of observations on the first spell of unemployment for the record</p>
</dd>
</dl>
<h3>Source</h3>
<p>Romeo, Charles J. (1999) “Conducting inference in semiparametric duration models under inequality restrictions on the shape of the hazard implied by the job search theory”, <em>Journal of Applied Econometrics</em>, <b>14(6)</b>, 587–605.</p>
<h3>References</h3>
<p>Journal of Applied Econometrics data archive : <a href="http://qed.econ.queensu.ca/jae/">http://qed.econ.queensu.ca/jae/</a>.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-82618.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-82618.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-unemployment.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-82618.json';</script>