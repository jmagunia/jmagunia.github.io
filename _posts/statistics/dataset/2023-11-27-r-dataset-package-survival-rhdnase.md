---
title: R Dataset / Package survival / rhDNase
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">rhDNase</span> data set which pertains to rhDNASE data set. The <span class="mono">rhDNase</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">rhDNase</span> data set in R by issuing the following command at the console <span class="mono">data("rhDNase")</span>. This will load the data into a variable called <span class="mono">rhDNase</span>. If R says the <span class="mono">rhDNase</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-36248.csv">rhDNase R data set</a></span>. The size of this file is about 32,165 bytes.</p><h2>rhDNASE data set</h2>
<h3>Description</h3>
<p>Results of a randomized trial of rhDNase for the treatment of cystic fibrosis.</p>
<h3>Format</h3>
<p>A data frame with 767 observations on the following 8 variables.</p>
<dl>
<dt><code>id</code></dt>
<dd>
<p>subject id</p>
</dd>
<dt><code>inst</code></dt>
<dd>
<p>enrolling institution</p>
</dd>
<dt><code>trt</code></dt>
<dd>
<p>treatment arm: 0=placebo, 1= rhDNase</p>
</dd>
<dt><code>entry.dt</code></dt>
<dd>
<p>date of entry into the study</p>
</dd>
<dt><code>end.dt</code></dt>
<dd>
<p>date of last follow-up</p>
</dd>
<dt><code>fev</code></dt>
<dd>
<p>forced expriatory volume at enrollment, a measure of lung capacity</p>
</dd>
<dt><code>ivstart</code></dt>
<dd>
<p>days from enrollment to the start of IV antibiotics</p>
</dd>
<dt><code>ivstop</code></dt>
<dd>
<p>days from enrollment to the cessation of IV antibiotics</p>
</dd>
</dl>
<h3>Details</h3>
<p>In patients with cystic fibrosis, extracellular DNA is released by leukocytes that accumulate in the airways in response to chronic bacterial infection. This excess DNA thickens the mucus, which then cannot be cleared from the lung by the cilia. The accumulation leads to exacerbations of respiratory symptoms and progressive deterioration of lung function. At the time of this study more than 90% of cystic fibrosis patients eventually died of lung disease.</p>
<p>Deoxyribonuclease I (DNase I) is a human enzyme normally present in the mucus of human lungs that digests extracellular DNA. Genentech, Inc. cloned a highly purified recombinant DNase I (rhDNase or Pulmozyme) which when delivered to the lungs in an aerosolized form cuts extracellular DNA, reducing the viscoelasticity of airway secretions and improving clearance. In 1992 the company conducted a randomized double-blind trial comparing rhDNase to placebo. Patients were then monitored for pulmonary exacerbations, along with measures of lung volume and flow. The primary endpoint was the time until first pulmonary exacerbation; however, data on all exacerbations were collected for 169 days.</p>
<p>The definition of an exacerbation was an infection that required the use of intravenous (IV) antibiotics. Subjects had 0–5 such episodes during the trial, those with more than one have multiple rows in the data set, those with none have NA for the IV start and end times. A few subjects were infected at the time of enrollment, subject 173 for instance has a first infection interval of -21 to 7. We do not count this first infection as an "event", and the subject first enters the risk set at day 7. Subjects who have an event are not considered to be at risk for another event during the course of antibiotics, nor for an additional 6 days after they end. (If the symptoms reappear immediately after cessation then from a medical standpoint this would not be a new infection.)</p>
<p>This data set reproduces the data in Therneau and Grambsch, is does not exactly reproduce those in Therneau and Hamilton due to data set updates.</p>
<h3>References</h3>
<p>T. M. Therneau and P. M. Grambsch, Modeling Survival Data: Extending the Cox Model, Springer, 2000.</p>
<p>T. M. Therneau and S.A. Mamilton, rhDNase as an example of recurrent event analysis, Statistics in Medicine, 16:2029-2047, 1997.</p>
<h3>Examples</h3>
<pre>
# Build the start-stop data set for analysis, and
#replicate line 2 of table 8.13
first &lt;- subset(rhDNase, !duplicated(id)) #first row for each subject
dnase &lt;- tmerge(first, first, id=id, tstop=as.numeric(end.dt -entry.dt))# Subjects whose fu ended during the 6 day window are the reason for
#this next line
temp.end &lt;- with(rhDNase, pmin(ivstop+6, end.dt-entry.dt))
dnase &lt;- tmerge(dnase, rhDNase, id=id,
 infect=event(ivstart),
 end=event(temp.end))
# toss out the non-at-risk intervals, and extra variables
#3 subjects had an event on their last day of fu, infect=1 and end=1
dnase &lt;- subset(dnase, (infect==1 | end==0), c(id:trt, fev:infect))
agfit &lt;- coxph(Surv(tstart, tstop, infect) ~ trt + fev + cluster(id),
 data=dnase)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-36248.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-36248.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-rhdnase.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-36248.json';</script>