---
title: R Dataset / Package geepack / dietox
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">dietox</span> data set which pertains to Growth curves of pigs in a 3x3 factorial experiment. The <span class="mono">dietox</span> data set is found in the <span class="mono">geepack</span> R package. You can load the <span class="mono">dietox</span> data set in R by issuing the following command at the console <span class="mono">data("dietox")</span>. This will load the data into a variable called <span class="mono">dietox</span>. If R says the <span class="mono">dietox</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("geepack")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-30685.csv">dietox R data set</a></span>. The size of this file is about 24,798 bytes.</p><h2>Growth curves of pigs in a 3x3 factorial experiment</h2>
<h3>Description</h3>
<p>The <code>dietox</code> data frame has 861 rows and 7 columns.</p>
<h3>Usage</h3>
<pre>data(dietox)</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Weight</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Feed</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Time</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Pig</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Evit</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Cu</dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt>Litter</dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Source</h3>
<p>Lauridsen, C., Højsgaard, S.,Sørensen, M.T. C. (1999) Influence of Dietary Rapeseed Oli, Vitamin E, and Copper on Performance and Antioxidant and Oxidative Status of Pigs. J. Anim. Sci.77:906-916</p>
<h3>Examples</h3>
<pre>
data(dietox)
dietox$Cu &lt;- as.factor(dietox$Cu)
gee01 &lt;- geeglm (Weight ~ Time + Cu + Cu * Time, id =Pig, data = dietox,
 family=gaussian,corstr="ex")mf &lt;- formula(Weight~Cu*(Time+I(Time^2)+I(Time^3)))
gee1 &lt;- geeglm(mf, data=dietox, id=Pig, family=poisson("identity"),corstr="ar1")
summary(gee1)
anova(gee1)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-30685.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-30685.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-geepack-dietox.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-30685.json';</script>