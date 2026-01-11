---
title: R Dataset / Package gap / l51
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">l51</span> data set which pertains to An example pedigree data. The <span class="mono">l51</span> data set is found in the <span class="mono">gap</span> R package. You can load the <span class="mono">l51</span> data set in R by issuing the following command at the console <span class="mono">data("l51")</span>. This will load the data into a variable called <span class="mono">l51</span>. If R says the <span class="mono">l51</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("gap")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-55916.csv">l51 R data set</a></span>. The size of this file is about 966 bytes.</p><h2>An example pedigree data</h2>
<h3>Description</h3>
<p>The data contains data on 51 individuals in a pedigree. Below it is used for comparing results from various packages.</p>
<h3>Usage</h3>
<pre>data(l51)</pre>
<h3>Format</h3>
<p>A data frame</p>
<h3>Source</h3>
<p>Morgan v3.</p>
<h3>References</h3>
<p>Morgan v3. <a href="http://www.stat.washington.edu/thompson/Genepi/MORGAN/Morgan.shtml">http://www.stat.washington.edu/thompson/Genepi/MORGAN/Morgan.shtml</a></p>
<h3>Examples</h3>
<pre>## Not run: 
km &lt;- kin.morgan(l51)
k2 &lt;- km$kin.matrix*2# quantitative trait
library(regress)
r &lt;- regress(qt ~ 1, ~k2, data=l51)
names(r)
r
# qualitative trait
N &lt;- dim(l51)[1]
w &lt;- with(l51,quantile(qt,probs=0.75,na.rm=TRUE))
ped51 &lt;- within(l51, bt &lt;- ifelse(qt&lt;=w,0,1))
d &lt;- regress(bt ~ 1, ~k2, data=ped51)
d
# for other tests not shown here
set.seed(12345)
ped51 &lt;- within(ped51,{r &lt;- rnorm(N); bt[is.na(bt)] &lt;- 0})
library(foreign)
write.dta(ped51,"ped51.dta")## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-55916.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-55916.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-gap-l51.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-55916.json';</script>