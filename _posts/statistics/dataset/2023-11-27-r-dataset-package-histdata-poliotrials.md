---
title: R Dataset / Package HistData / PolioTrials
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PolioTrials</span> data set which pertains to Polio Field Trials Data. The <span class="mono">PolioTrials</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">PolioTrials</span> data set in R by issuing the following command at the console <span class="mono">data("PolioTrials")</span>. This will load the data into a variable called <span class="mono">PolioTrials</span>. If R says the <span class="mono">PolioTrials</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66686.csv">PolioTrials R data set</a></span>. The size of this file is about 484 bytes.</p><h2>Polio Field Trials Data</h2>
<h3>Description</h3>
<p>The data frame <code>PolioTrials</code> gives the results of the 1954 field trials to test the Salk polio vaccine (named for the developer, Jonas Salk), conducted by the National Foundation for Infantile Paralysis (NFIP). It is adapted from data in the article by Francis et al. (1955). There were actually two clinical trials, corresponding to two statistical designs (<code>Experiment</code>), discussed by Brownlee (1955). The comparison of designs and results represented a milestone in the development of randomized clinical trials.</p>
<h3>Usage</h3>
<pre>data(PolioTrials)</pre>
<h3>Format</h3>
<p>A data frame with 8 observations on the following 6 variables.</p>
<dl>
<dt><code>Experiment</code></dt>
<dd>
<p>a factor with levels <code>ObservedControl</code> <code>RandomizedControl</code></p>
</dd>
<dt><code>Group</code></dt>
<dd>
<p>a factor with levels <code>Controls</code> <code>Grade2NotInoculated</code> <code>IncompleteVaccinations</code> <code>NotInoculated</code> <code>Placebo</code> <code>Vaccinated</code></p>
</dd>
<dt><code>Population</code></dt>
<dd>
<p>the size of the population in each group in each experiment</p>
</dd>
<dt><code>Paralytic</code></dt>
<dd>
<p>the number of cases of paralytic polio observed in that group</p>
</dd>
<dt><code>NonParalytic</code></dt>
<dd>
<p>the number of cases of paralytic polio observed in that group</p>
</dd>
<dt><code>FalseReports</code></dt>
<dd>
<p>the number of cases initially reported as polio, but later determined not to be polio in that group</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data frame is in the form of a single table, but actually comprises the results of two separate field trials, given by <code>Experiment</code>. Each should be analyzed separately, because the designs differ markedly.</p>
<p>The original design (<code>Experiment == "ObservedControl"</code>) called for vaccination of second-graders at selected schools in selected areas of the country (with the consent of the children's parents, of course). The <code>Vaccinated</code> second-graders formed the treatment group. The first and third-graders at the schools were not given the vaccination, and formed the <code>Controls</code> group.</p>
<p>In the second design (<code>Experiment == "RandomizedControl"</code>) children were selected (again in various schools in various areas), all of whose parents consented to vaccination. The sample was randomly divided into treatment (<code>Group == "Vaccinated"</code>), given the real polio vaccination, and control groups (<code>Group == "Placebo"</code>), a placebo dose that looked just like the real vaccine. The experiment was also double blind: neither the parents of a child in the study nor the doctors treating the child knew which group the child belonged to.</p>
<p>In both experiments, <code>NotInnoculated</code> refers to children who did not participate in the experiment. <code>IncompleteVaccinations</code> refers to children who received one or two, but not all three administrations of the vaccine.</p>
<h3>Source</h3>
<p>Kyle Siegrist, "Virtual Laboratories in Probability and Statistics", <a href="http://www.math.uah.edu/stat/data/Polio.html">http://www.math.uah.edu/stat/data/Polio.html</a></p>
<p>Thomas Francis, Robert Korn, et al. (1955). "An Evaluation of the 1954 Poliomyelitis Vaccine Trials", <em>American Journal of Public Health</em>, 45, (50 page supplement with a 63 page appendix).</p>
<h3>References</h3>
<p>K. A. Brownlee (1955). "Statistics of the 1954 Polio Vaccine Trials", <em>Journal of the American Statistical Association</em>, 50, 1005-1013.</p>
<h3>Examples</h3>
<pre>
data(PolioTrials)
## maybe str(PolioTrials) ; plot(PolioTrials) ...
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66686.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66686.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-poliotrials.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66686.json';</script>