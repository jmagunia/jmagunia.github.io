---
title: R Dataset / Package survival / transplant
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">transplant</span> data set which pertains to Liver transplant waiting list. The <span class="mono">transplant</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">transplant</span> data set in R by issuing the following command at the console <span class="mono">data("transplant")</span>. This will load the data into a variable called <span class="mono">transplant</span>. If R says the <span class="mono">transplant</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15363_0.csv">transplant R data set</a></span>. The size of this file is about 21,599 bytes.</p><h2>Liver transplant waiting list</h2>
<h3>Description</h3>
<p>Subjects on a liver transplant waiting list from 1990-1999, and their disposition: received a transplant, died while waiting, withdrew from the list, or censored.</p>
<h3>Usage</h3>
<pre>data("transplant")</pre>
<h3>Format</h3>
<p>A data frame with 815 observations on the following 6 variables.</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>age at addition to the waiting list</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p><code>m</code> or <code>f</code></p>
</dd>
<dt><code>abo</code></dt>
<dd>
<p>blood type: <code>A</code>, <code>B</code>, <code>AB</code> or <code>O</code></p>
</dd>
<dt><code>year</code></dt>
<dd>
<p>year in which they entered the waiting list</p>
</dd>
<dt><code>futime</code></dt>
<dd>
<p>time from entry to final disposition</p>
</dd>
<dt><code>event</code></dt>
<dd>
<p>final disposition: <code>censored</code>, <code>death</code>, <code>ltx</code> or <code>withdraw</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>This represents the transplant experience in a particular region, over a time period in which liver transplant became much more widely recognized as a viable treatment modality. The number of liver transplants rises over the period, but the number of subjects added to the liver transplant waiting list grew much faster. Important questions addressed by the data are the change in waiting time, who waits, and whether there was an consequent increase in deaths while on the list.</p>
<p>Blood type is an important consideration. Donor livers from subjects with blood type O can be used by patients with A, B, AB or 0 blood types, whereas an Ab liver can only be used by an AB recipient. Thus type O subjects on the waiting list are at a disadvantage, since the pool of competitors is larger for type O donor livers.</p>
<p>This data is of historical interest and provides a useful example of competing risks, but it has little relevance to current practice. Liver allocation policies have evolved and now depend directly on each individual patient's risk and need, assessments of which are regularly updated while a patient is on the waiting list. The overall organ shortage remains acute, however.</p>
<h3>References</h3>
<p>Kim WR, Therneau TM, Benson JT, Kremers WK, Rosen CB, Gores GJ, Dickson ER. Deaths on the liver transplant waiting list: An analysis of competing risks. Hepatology 2006 Feb; 43(2):345-51.</p>
<h3>Examples</h3>
<pre>
#since event is a factor, survfit creates competing risk curves
pfit &lt;- survfit(Surv(futime, event) ~ abo, transplant)
pfit[,2]#time to liver transplant, by period
plot(pfit[,2], mark.time=FALSE, col=1:4, lwd=2, xmax=735,
 xscale=30.5, xlab="Months", ylab="Fraction transplanted",
 xaxt = 'n')
temp &lt;- c(0, 6, 12, 18, 24)
axis(1, temp, temp)
legend(450, .35, levels(transplant$abo), lty=1, col=1:4, lwd=2, bty='n')# competing risks for type O
plot(pfit[4,], xscale=30.5, xmax=735, col=1:3, lwd=2)
legend(450, .4, c("Death", "Transpant", "Withdrawal"), col=1:3, lwd=2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15363_0.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15363_0.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-transplant.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15363_0.json';</script>