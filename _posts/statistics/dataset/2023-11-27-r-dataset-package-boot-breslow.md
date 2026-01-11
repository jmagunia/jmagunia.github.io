---
title: R Dataset / Package boot / breslow
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">breslow</span> data set which pertains to Smoking Deaths Among Doctors. The <span class="mono">breslow</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">breslow</span> data set in R by issuing the following command at the console <span class="mono">data("breslow")</span>. This will load the data into a variable called <span class="mono">breslow</span>. If R says the <span class="mono">breslow</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76818.csv">breslow R data set</a></span>. The size of this file is about 225 bytes.</p><h2>Smoking Deaths Among Doctors</h2>
<h3>Description</h3>
<p>The <code>breslow</code> data frame has 10 rows and 5 columns.</p>
<p>In 1961 Doll and Hill sent out a questionnaire to all men on the British Medical Register enquiring about their smoking habits. Almost 70% of such men replied. Death certificates were obtained for medical practitioners and causes of death were assigned on the basis of these certificates. The <code>breslow</code> data set contains the person-years of observations and deaths from coronary artery disease accumulated during the first ten years of the study.</p>
<h3>Usage</h3>
<pre>
breslow
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>The mid-point of the 10 year age-group for the doctors.</p>
</dd>
<dt><code>smoke</code></dt>
<dd>
<p>An indicator of whether the doctors smoked (1) or not (0).</p>
</dd>
<dt><code>n</code></dt>
<dd>
<p>The number of person-years in the category.</p>
</dd>
<dt><code>y</code></dt>
<dd>
<p>The number of deaths attributed to coronary artery disease.</p>
</dd>
<dt><code>ns</code></dt>
<dd>
<p>The number of smoker years in the category (<code>smoke*n</code>).</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Breslow, N.E. (1985) Cohort Analysis in Epidemiology. In <em>A Celebration of Statistics</em> A.C. Atkinson and S.E. Fienberg (editors), 109–143. Springer-Verlag.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Doll, R. and Hill, A.B. (1966) Mortality of British doctors in relation to smoking: Observations on coronary thrombosis. <em>National Cancer Institute Monograph</em>, <b>19</b>, 205-268.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76818.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76818.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-breslow.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76818.json';</script>