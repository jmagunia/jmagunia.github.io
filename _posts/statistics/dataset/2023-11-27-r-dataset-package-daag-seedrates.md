---
title: R Dataset / Package DAAG / seedrates
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">seedrates</span> data set which pertains to Barley Seeding Rate Data. The <span class="mono">seedrates</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">seedrates</span> data set in R by issuing the following command at the console <span class="mono">data("seedrates")</span>. This will load the data into a variable called <span class="mono">seedrates</span>. If R says the <span class="mono">seedrates</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-41151.csv">seedrates R data set</a></span>. The size of this file is about 58 bytes.</p><h2>Barley Seeding Rate Data</h2>
<h3>Description</h3>
<p>The <code>seedrates</code> data frame has 5 rows and 2 columns on the effect of seeding rate of barley on yield.</p>
<h3>Usage</h3>
<pre>seedrates</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>rate</dt>
<dd>
<p>the seeding rate</p>
</dd>
<dt>grain</dt>
<dd>
<p>the number of grain per head of barley</p>
</dd>
</dl>
<h3>Source</h3>
<p>McLeod, C.C. 1982. Effect of rates of seeding on barley grown for grain. New Zealand Journal of Agriculture 10: 133-136.</p>
<h3>References</h3>
<p>Maindonald J H 1992. Statistical design, analysis and presentation issues. New Zealand Journal of Agricultural Research 35: 121-141.</p>
<h3>Examples</h3>
<pre>
plot(grain~rate,data=seedrates,xlim=c(50,180),ylim=c(15.5,22),axes=FALSE)
new.df&lt;-data.frame(rate=(2:8)*25)
seedrates.lm1&lt;-lm(grain~rate,data=seedrates)
seedrates.lm2&lt;-lm(grain~rate+I(rate^2),data=seedrates)
hat1&lt;-predict(seedrates.lm1,newdata=new.df,interval="confidence")
hat2&lt;-predict(seedrates.lm2,newdata=new.df,interval="confidence")
axis(1,at=new.df$rate); axis(2); box()
z1&lt;-spline(new.df$rate, hat1[,"fit"]); z2&lt;-spline(new.df$rate, 
hat2[,"fit"])
rate&lt;-new.df$rate; lines(z1$x,z1$y)
lines(spline(rate,hat1[,"lwr"]),lty=1,col=3)
lines(spline(rate,hat1[,"upr"]),lty=1,col=3)
lines(z2$x,z2$y,lty=4)
lines(spline(rate,hat2[,"lwr"]),lty=4,col=3)
lines(spline(rate,hat2[,"upr"]),lty=4,col=3)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-41151.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-41151.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-seedrates.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-41151.json';</script>