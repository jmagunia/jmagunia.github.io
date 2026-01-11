---
title: R Dataset / Package HSAUR / smoking
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">smoking</span> data set which pertains to Nicotine Gum and Smoking Cessation . The <span class="mono">smoking</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">smoking</span> data set in R by issuing the following command at the console <span class="mono">data("smoking")</span>. This will load the data into a variable called <span class="mono">smoking</span>. If R says the <span class="mono">smoking</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68401.csv">smoking R data set</a></span>. The size of this file is about 584 bytes.</p><h2>Nicotine Gum and Smoking Cessation</h2>
<h3>Description</h3>
<p>Data from a meta-analysis on nicotine gum and smoking cessation</p>
<h3>Usage</h3>
<pre>data("smoking")</pre>
<h3>Format</h3>
<p>A data frame with 26 observations (studies) on the following 4 variables.</p>
<dl>
<dt><code>qt</code></dt>
<dd>
<p>the number of treated subjetcs who stopped smoking.</p>
</dd>
<dt><code>tt</code></dt>
<dd>
<p>the totla number of treated subjects.</p>
</dd>
<dt><code>qc</code></dt>
<dd>
<p>the number of subjetcs who stopped smoking without being treated.</p>
</dd>
<dt><code>tc</code></dt>
<dd>
<p>the total number of subject not being treated.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Cigarette smoking is the leading cause of preventable death in the United States and kills more Americans than AIDS, alcohol, illegal drug use, car accidents, fires, murders and suicides combined. It has been estimated that 430,000 Americans die from smoking every year. Fighting tobacco use is, consequently, one of the major public health goals of our time and there are now many programs available designed to help smokers quit. One of the major aids used in these programs is nicotine chewing gum, which acts as a substitute oral activity and provides a source of nicotine that reduces the withdrawal symptoms experienced when smoking is stopped. But separate randomized clinical trials of nicotine gum have been largely inconclusive, leading Silagy (2003) to consider combining the results studies found from an extensive literature search. The results of these trials in terms of numbers of people in the treatment arm and the control arm who stopped smoking for at least 6 months after treatment are given here.</p>
<h3>Source</h3>
<p>C. Silagy (2003), Nicotine replacement therapy for smoking cessation (Cochrane Review). <em>The Cochrane Library</em>, <b>4</b>, John Wiley \&amp; Sons, Chichester.</p>
<h3>Examples</h3>
<pre>data("smoking", package = "HSAUR")
boxplot(smoking$qt/smoking$tt,
smoking$qc/smoking$tc,
names = c("Treated", "Control"), ylab = "Percent Quitters")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68401.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68401.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-smoking.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68401.json';</script>