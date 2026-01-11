---
title: R Dataset / Package quantreg / Bosco
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Bosco</span> data set which pertains to Boscovich Data. The <span class="mono">Bosco</span> data set is found in the <span class="mono">quantreg</span> R package. You can load the <span class="mono">Bosco</span> data set in R by issuing the following command at the console <span class="mono">data("Bosco")</span>. This will load the data into a variable called <span class="mono">Bosco</span>. If R says the <span class="mono">Bosco</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("quantreg")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-96632.csv">Bosco R data set</a></span>. The size of this file is about 91 bytes.</p><h2>Boscovich Data</h2>
<h3>Description</h3>
<p>Boscovich data used to estimate the ellipticity of the earth. There are five measurements of the arc length of one degree of latitude taken at 5 different latitudes. See Koenker (2005) for further details and references.</p>
<h3>Usage</h3>
<pre>data(Bosco)</pre>
<h3>Format</h3>
<p>A data frame containing 5 observations on 2 variables</p>
<dl>
<dt>x</dt>
<dd>
<p>sine squared of latitude measured in degrees</p>
</dd>
<dt>y</dt>
<dd>
<p>arc length of one degree of latitude measured in toise - 56,700, one toise approximately equals 1.95 meters.</p>
</dd>
</dl>
<h3>References</h3>
<p>Koenker, R. (2005), "Quantile Regression", Cambridge.</p>
<h3>Examples</h3>
<pre>
data(Bosco)
plot(0:10/10,0:10*100,xlab="sin^2(latitude)",
ylab="arc-length of 1 degree of latitude",type="n")
points(Bosco)
text(Bosco, pos = 3, rownames(Bosco))
z &lt;- rq(y ~ x, tau = -1, data = Bosco)
title("Boscovitch Ellipticity of the Earth Example")
xb &lt;- c(.85,.9,.6,.6)
yb &lt;- c(400,600,450,600)
for(i in 1:4){
abline(c(z$sol[4:5,i]))
interval &lt;- paste("t=(",format(round(z$sol[1,i],2)),",",
format(round(z$sol[1,i+1],2)),")",delim="")
text(xb[i],yb[i],interval)
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-96632.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-96632.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-quantreg-bosco.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-96632.json';</script>