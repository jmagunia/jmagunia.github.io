---
title: R Dataset / Package lme4 / sleepstudy
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">sleepstudy</span> data set which pertains to Reaction times in a sleep deprivation study. The <span class="mono">sleepstudy</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">sleepstudy</span> data set in R by issuing the following command at the console <span class="mono">data("sleepstudy")</span>. This will load the data into a variable called <span class="mono">sleepstudy</span>. If R says the <span class="mono">sleepstudy</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85663.csv">sleepstudy R data set</a></span>. The size of this file is about 3,061 bytes.</p><h2>Reaction times in a sleep deprivation study</h2>
<h3>Description</h3>
<p>The average reaction time per day for subjects in a sleep deprivation study. On day 0 the subjects had their normal amount of sleep. Starting that night they were restricted to 3 hours of sleep per night. The observations represent the average reaction time on a series of tests given each day to each subject.</p>
<h3>Format</h3>
<p>A data frame with 180 observations on the following 3 variables.</p>
<dl>
<dt><code>Reaction</code></dt>
<dd>
<p>Average reaction time (ms)</p>
</dd>
<dt><code>Days</code></dt>
<dd>
<p>Number of days of sleep deprivation</p>
</dd>
<dt><code>Subject</code></dt>
<dd>
<p>Subject number on which the observation was made.</p>
</dd>
</dl>
<h3>Details</h3>
<p>These data are from the study described in Belenky et al. (2003), for the sleep-deprived group and for the first 10 days of the study, up to the recovery period.</p>
<h3>References</h3>
<p>Gregory Belenky, Nancy J. Wesensten, David R. Thorne, Maria L. Thomas, Helen C. Sing, Daniel P. Redmond, Michael B. Russo and Thomas J. Balkin (2003) Patterns of performance degradation and restoration during sleep restriction and subsequent recovery: a sleep dose-response study. <em>Journal of Sleep Research</em> <b>12</b>, 1–12.</p>
<h3>Examples</h3>
<pre>
str(sleepstudy)
require(lattice)
xyplot(Reaction ~ Days | Subject, sleepstudy, type = c("g","p","r"),
 index = function(x,y) coef(lm(y ~ x))[1],
 xlab = "Days of sleep deprivation",
 ylab = "Average reaction time (ms)", aspect = "xy")
(fm1 &lt;- lmer(Reaction ~ Days + (Days|Subject), sleepstudy))
(fm2 &lt;- lmer(Reaction ~ Days + (1|Subject) + (0+Days|Subject), sleepstudy))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85663.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85663.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-sleepstudy.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85663.json';</script>