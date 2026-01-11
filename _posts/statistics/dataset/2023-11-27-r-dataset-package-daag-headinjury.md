---
title: R Dataset / Package DAAG / head.injury
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">head.injury</span> data set which pertains to Minor Head Injury (Simulated) Data. The <span class="mono">head.injury</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">head.injury</span> data set in R by issuing the following command at the console <span class="mono">data("head.injury")</span>. This will load the data into a variable called <span class="mono">head.injury</span>. If R says the <span class="mono">head.injury</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90045.csv">head.injury R data set</a></span>. The size of this file is about 68,856 bytes.</p><h2>Minor Head Injury (Simulated) Data</h2>
<h3>Description</h3>
<p>The <code>head.injury</code> data frame has 3121 rows and 11 columns. The data were simulated according to a simple logistic regression model to match roughly the clinical characteristics of a sample of individuals who suffered minor head injuries.</p>
<h3>Usage</h3>
<pre>head.injury</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>age.65</dt>
<dd>
<p>age factor (0 = under 65, 1 = over 65).</p>
</dd>
<dt>amnesia.before</dt>
<dd>
<p>amnesia before impact (less than 30 minutes = 0, more than 30 minutes =1).</p>
</dd>
<dt>basal.skull.fracture</dt>
<dd>
<p>(0 = no fracture, 1 = fracture).</p>
</dd>
<dt>GCS.decrease</dt>
<dd>
<p>Glasgow Coma Scale decrease (0 = no deterioration, 1 = deterioration).</p>
</dd>
<dt>GCS.13</dt>
<dd>
<p>initial Glasgow Coma Scale (0 = not ‘13’, 1 = ‘13’).</p>
</dd>
<dt>GCS.15.2hours</dt>
<dd>
<p>Glasgow Coma Scale after 2 hours (0 = not ‘15’, 1 = '15').</p>
</dd>
<dt>high.risk</dt>
<dd>
<p>assessed by clinician as high risk for neurological intervention (0 = not high risk, 1 = high risk).</p>
</dd>
<dt>loss.of.consciousness</dt>
<dd>
<p>(0 = conscious, 1 = loss of consciousness).</p>
</dd>
<dt>open.skull.fracture</dt>
<dd>
<p>(0 = no fracture, 1 = fracture)</p>
</dd>
<dt>vomiting</dt>
<dd>
<p>(0 = no vomiting, 1 = vomiting)</p>
</dd>
<dt>clinically.important.brain.injury</dt>
<dd>
<p>any acute brain finding revealed on CT (0 = not present, 1 = present).</p>
</dd>
</dl>
<h3>References</h3>
<p>Stiell, I.G., Wells, G.A., Vandemheen, K., Clement, C., Lesiuk, H., Laupacis, A., McKnight, R.D., Verbee, R., Brison, R., Cass, D., Eisenhauer, M., Greenberg, G.H., and Worthington, J. (2001) The Canadian CT Head Rule for Patients with Minor Head Injury, The Lancet. 357: 1391-1396.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90045.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90045.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-headinjury.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90045.json';</script>