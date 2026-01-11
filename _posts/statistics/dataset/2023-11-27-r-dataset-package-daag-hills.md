---
title: R Dataset / Package DAAG / hills
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">hills</span> data set which pertains to Scottish Hill Races Data. The <span class="mono">hills</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">hills</span> data set in R by issuing the following command at the console <span class="mono">data("hills")</span>. This will load the data into a variable called <span class="mono">hills</span>. If R says the <span class="mono">hills</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-90278.csv">hills R data set</a></span>. The size of this file is about 883 bytes.</p><h2>Scottish Hill Races Data</h2>
<h3>Description</h3>
<p>The record times in 1984 for 35 Scottish hill races.</p>
<h3>Usage</h3>
<pre>hills</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>dist</dt>
<dd>
<p>distance, in miles (on the map)</p>
</dd>
<dt>climb</dt>
<dd>
<p>total height gained during the route, in feet</p>
</dd>
<dt>time</dt>
<dd>
<p>record time in hours</p>
</dd>
</dl>
<h3>Source</h3>
<p>A.C. Atkinson (1986) Comment: Aspects of diagnostic regression analysis. Statistical Science 1, 397-402.</p>
<p>Also, in MASS library, with time in minutes.</p>
<h3>References</h3>
<p>A.C. Atkinson (1988) Transformations unmasked. Technometrics 30, 311-318. [ "corrects" the time for Knock Hill from 78.65 to 18.65. It is unclear if this based on the original records.]</p>
<h3>Examples</h3>
<pre>
print("Transformation - Example 6.4.3")
pairs(hills, labels=c("dist\n\n(miles)", "climb\n\n(feet)", 
"time\n\n(hours)"))
pause()pairs(log(hills), labels=c("dist\n\n(log(miles))", "climb\n\n(log(feet))",
"time\n\n(log(hours))"))
pause()hills0.loglm &lt;- lm(log(time) ~ log(dist) + log(climb), data = hills)
oldpar &lt;- par(mfrow=c(2,2))
plot(hills0.loglm)
pause()
hills.loglm &lt;- lm(log(time) ~ log(dist) + log(climb), data = hills[-18,])
summary(hills.loglm) 
plot(hills.loglm)
pause()hills2.loglm &lt;- lm(log(time) ~ log(dist)+log(climb)+log(dist):log(climb), 
data=hills[-18,])
anova(hills.loglm, hills2.loglm)
pause()step(hills2.loglm)
pause()summary(hills.loglm, corr=TRUE)$coef
pause()summary(hills2.loglm, corr=TRUE)$coef
par(oldpar)
pause()print("Nonlinear - Example 6.9.4")
hills.nls0 &lt;- nls(time ~ (dist^alpha)*(climb^beta), start =
 c(alpha = .909, beta = .260), data = hills[-18,])
summary(hills.nls0)
plot(residuals(hills.nls0) ~ predict(hills.nls0)) # residual plot
pause()hills$climb.mi &lt;- hills$climb/5280
hills.nls &lt;- nls(time ~ alpha + beta*dist + gamma*(climb.mi^delta),
start=c(alpha = 1, beta = 1, gamma = 1, delta = 1), data=hills[-18,])
summary(hills.nls)
plot(residuals(hills.nls) ~ predict(hills.nls)) # residual plot
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-90278.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-90278.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-hills.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-90278.json';</script>