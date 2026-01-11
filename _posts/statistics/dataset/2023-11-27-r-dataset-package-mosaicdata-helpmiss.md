---
title: R Dataset / Package mosaicData / HELPmiss
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">HELPmiss</span> data set which pertains to Health Evaluation and Linkage to Primary Care. The <span class="mono">HELPmiss</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">HELPmiss</span> data set in R by issuing the following command at the console <span class="mono">data("HELPmiss")</span>. This will load the data into a variable called <span class="mono">HELPmiss</span>. If R says the <span class="mono">HELPmiss</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-57975.csv">HELPmiss R data set</a></span>. The size of this file is about 62,531 bytes.</p><h2>Health Evaluation and Linkage to Primary Care</h2>
<h3>Description</h3>
<p>The HELP study was a clinical trial for adult inpatients recruited from a detoxification unit. Patients with no primary care physician were randomized to receive a multidisciplinary assessment and a brief motivational intervention or usual care, with the goal of linking them to primary medical care.</p>
<h3>Usage</h3>
<pre>
data(HELPmiss)
</pre>
<h3>Format</h3>
<p>Data frame with 470 observations on the following variables.</p>
<ul>
<li>
<p><code>age</code> subject age at baseline (in years)</p>
</li>
<li>
<p><code>anysub</code> use of any substance post-detox: a factor with levels <code>no</code> <code>yes</code></p>
</li>
<li>
<p><code>cesd</code> Center for Epidemiologic Studies Depression measure of depressive symptoms at baseline (higher scores indicate more symptoms)</p>
</li>
<li>
<p><code>d1</code> lifetime number of hospitalizations for medical problems (measured at baseline)</p>
</li>
<li>
<p><code>daysanysub</code> time (in days) to first use of any substance post-detox</p>
</li>
<li>
<p><code>dayslink</code> time (in days) to linkage to primary care</p>
</li>
<li>
<p><code>drugrisk</code> Risk Assessment Battery drug risk scale at baseline</p>
</li>
<li>
<p><code>e2b</code> number of times in past 6 months entered a detox program (measured at baseline)</p>
</li>
<li>
<p><code>female</code> 0 for male, 1 for female</p>
</li>
<li>
<p><code>sex</code> a factor with levels <code>male</code> <code>female</code></p>
</li>
<li>
<p><code>g1b</code> experienced serious thoughts of suicide in last 30 days (measured at baseline): a factor with levels <code>no</code> <code>yes</code></p>
</li>
<li>
<p><code>homeless</code> housing status: a factor with levels <code>housed</code> <code>homeless</code></p>
</li>
<li>
<p><code>i1</code> average number of drinks (standard units) consumed per day, in the past 30 days (measured at baseline)</p>
</li>
<li>
<p><code>i2</code> maximum number of drinks (standard units) consumed per day, in the past 30 days (measured at baseline)</p>
</li>
<li>
<p><code>id</code> subject identifier</p>
</li>
<li>
<p><code>indtot</code> Inventory of Drug Use Consequences (InDUC) total score (measured at baseline)</p>
</li>
<li>
<p><code>linkstatus</code> post-detox linkage to primary care (0 = no, 1 = yes)</p>
</li>
<li>
<p><code>link</code> post-detox linkage to primary care: <code>no</code> <code>yes</code></p>
</li>
<li>
<p><code>mcs</code> SF-36 Mental Component Score (measured at baseline, higher scores are better)</p>
</li>
<li>
<p><code>pcs</code> SF-36 Physical Component Score (measured at baseline, higher scores are better)</p>
</li>
<li>
<p><code>pss_fr</code> perceived social support by friends (measured at baseline)</p>
</li>
<li>
<p><code>racegrp</code> race/ethnicity: levels <code>black</code> <code>hispanic</code> <code>other</code> <code>white</code></p>
</li>
<li>
<p><code>satreat</code> any BSAS substance abuse treatment at baseline: <code>no</code> <code>yes</code></p>
</li>
<li>
<p><code>sexrisk</code> Risk Assessment Battery sex risk score (measured at baseline)</p>
</li>
<li>
<p><code>substance</code> primary substance of abuse: <code>alcohol</code> <code>cocaine</code> <code>heroin</code></p>
</li>
<li>
<p><code>treat</code> randomized to HELP clinic: <code>no</code> <code>yes</code></p>
</li>
</ul>
<h3>Details</h3>
<p>Eligible subjects were adults, who spoke Spanish or English, reported alcohol, heroin or cocaine as their first or second drug of choice, resided in proximity to the primary care clinic to which they would be referred or were homeless. Patients with established primary care relationships they planned to continue, significant dementia, specific plans to leave the Boston area that would prevent research participation, failure to provide contact information for tracking purposes, or pregnancy were excluded.</p>
<p>Subjects were interviewed at baseline during their detoxification stay and follow-up interviews were undertaken every 6 months for 2 years. A variety of continuous, count, discrete, and survival time predictors and outcomes were collected at each of these five occasions.</p>
<p>This dataset is a superset of the HELPrct data with 17 subjects with partially observed data on some of the baseline variables. This is a subset of the HELPfull data which includes 5 timepoints and many additional variables.</p>
<h3>Source</h3>
<p><a href="http://www.math.smith.edu/help">http://www.math.smith.edu/help</a></p>
<h3>References</h3>
<p>Samet JH, Larson MJ, Horton NJ, Doyle K, Winter M, and Saitz R. Linking alcohol and drug-dependent adults to primary medical care: A randomized controlled trial of a multi-disciplinary health intervention in a detoxification unit. <em>Addiction</em>, 2003; 98(4):509-516.</p>
<h3>See Also</h3>
<p><code>HELPrct</code> , and <code>HELPfull</code>.</p>
<h3>Examples</h3>
<pre>
data(HELPmiss)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-57975.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-57975.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-helpmiss.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-57975.json';</script>