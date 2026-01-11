---
title: R Dataset / Package DAAG / frogs
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">frogs</span> data set which pertains to Frogs Data. The <span class="mono">frogs</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">frogs</span> data set in R by issuing the following command at the console <span class="mono">data("frogs")</span>. This will load the data into a variable called <span class="mono">frogs</span>. If R says the <span class="mono">frogs</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-68939.csv">frogs R data set</a></span>. The size of this file is about 12,680 bytes.</p><h2>Frogs Data</h2>
<h3>Description</h3>
<p>The <code>frogs</code> data frame has 212 rows and 11 columns. The data are on the distribution of the Southern Corroboree frog, which occurs in the Snowy Mountains area of New South Wales, Australia.</p>
<h3>Usage</h3>
<pre>frogs</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>pres.abs</dt>
<dd>
<p>0 = frogs were absent, 1 = frogs were present</p>
</dd>
<dt>northing</dt>
<dd>
<p>reference point</p>
</dd>
<dt>easting</dt>
<dd>
<p>reference point</p>
</dd>
<dt>altitude</dt>
<dd>
<p>altitude , in meters</p>
</dd>
<dt>distance</dt>
<dd>
<p>distance in meters to nearest extant population</p>
</dd>
<dt>NoOfPools</dt>
<dd>
<p>number of potential breeding pools</p>
</dd>
<dt>NoOfSites</dt>
<dd>
<p>(number of potential breeding sites within a 2 km radius</p>
</dd>
<dt>avrain</dt>
<dd>
<p>mean rainfall for Spring period</p>
</dd>
<dt>meanmin</dt>
<dd>
<p>mean minimum Spring temperature</p>
</dd>
<dt>meanmax</dt>
<dd>
<p>mean maximum Spring temperature</p>
</dd>
</dl>
<h3>Source</h3>
<p>Hunter, D. (2000) The conservation and demography of the southern corroboree frog (Pseudophryne corroboree). M.Sc. thesis, University of Canberra, Canberra.</p>
<h3>Examples</h3>
<pre>
print("Multiple Logistic Regression - Example 8.2")plot(northing ~ easting, data=frogs, pch=c(1,16)[frogs$pres.abs+1],
xlab="Meters east of reference point", ylab="Meters north")
pairs(frogs[,4:10])
attach(frogs)
pairs(cbind(altitude,log(distance),log(NoOfPools),NoOfSites),
panel=panel.smooth, labels=c("altitude","log(distance)",
"log(NoOfPools)","NoOfSites"))
detach(frogs)frogs.glm0 &lt;- glm(formula = pres.abs ~ altitude + log(distance) +
log(NoOfPools) + NoOfSites + avrain + meanmin + meanmax,
family = binomial, data = frogs)
summary(frogs.glm0)frogs.glm &lt;- glm(formula = pres.abs ~ log(distance) + log(NoOfPools) + 
meanmin +
meanmax, family = binomial, data = frogs)
oldpar &lt;- par(mfrow=c(2,2))
termplot(frogs.glm, data=frogs)termplot(frogs.glm, data=frogs, partial.resid=TRUE)cv.binary(frogs.glm0) # All explanatory variables
pause()cv.binary(frogs.glm)# Reduced set of explanatory variablesfor (j in 1:4){
 rand &lt;- sample(1:10, 212, replace=TRUE)
 all.acc &lt;- cv.binary(frogs.glm0, rand=rand, print.details=FALSE)$acc.cv
 reduced.acc &lt;- cv.binary(frogs.glm, rand=rand, print.details=FALSE)$acc.cv
 cat("\nAll:", round(all.acc,3), "Reduced:", round(reduced.acc,3))
}</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-68939.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-68939.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-frogs.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-68939.json';</script>