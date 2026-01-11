---
title: R Dataset / Package quantreg / Mammals
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Mammals</span> data set which pertains to Garland(1983) Data on Running Speed of Mammals. The <span class="mono">Mammals</span> data set is found in the <span class="mono">quantreg</span> R package. You can load the <span class="mono">Mammals</span> data set in R by issuing the following command at the console <span class="mono">data("Mammals")</span>. This will load the data into a variable called <span class="mono">Mammals</span>. If R says the <span class="mono">Mammals</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("quantreg")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-63199.csv">Mammals R data set</a></span>. The size of this file is about 2,041 bytes.</p><h2>Garland(1983) Data on Running Speed of Mammals</h2>
<h3>Description</h3>
<p>Observations on the maximal running speed of mammal species and their body mass.</p>
<h3>Usage</h3>
<pre>data(Mammals)</pre>
<h3>Format</h3>
<p>A data frame with 107 observations on the following 4 variables.</p>
<dl>
<dt>weight</dt>
<dd>
<p>Body mass in Kg for "typical adult sizes"</p>
</dd>
<dt>speed</dt>
<dd>
<p>Maximal running speed (fastest sprint velocity on record)</p>
</dd>
<dt>hoppers</dt>
<dd>
<p>logical variable indicating animals that ambulate by hopping, e.g. kangaroos</p>
</dd>
<dt>specials</dt>
<dd>
<p>logical variable indicating special animals with "lifestyles in which speed does not figure as an important factor": Hippopotamus, raccoon (Procyon), badger (Meles), coati (Nasua), skunk (Mephitis), man (Homo), porcupine (Erithizon), oppossum (didelphis), and sloth (Bradypus)</p>
</dd>
</dl>
<h3>Details</h3>
<p>Used by Chappell (1989) and Koenker, Ng and Portnoy (1994) to illustrate the fitting of piecewise linear curves.</p>
<h3>Source</h3>
<p>Garland, T. (1983) The relation between maximal running speed and body mass in terrestrial mammals, <em>J. Zoology</em>, 199, 1557-1570.</p>
<h3>References</h3>
<p>Koenker, R., P. Ng and S. Portnoy, (1994) Quantile Smoothing Splines” <em>Biometrika</em>, 81, 673-680.</p>
<p>Chappell, R. (1989) Fitting Bent Lines to Data, with Applications ot Allometry, <em>J. Theo. Biology</em>, 138, 235-256.</p>
<h3>See Also</h3>
<p><code>rqss</code></p>
<h3>Examples</h3>
<pre>
data(Mammals)
attach(Mammals)
x &lt;- log(weight)
y &lt;- log(speed)
plot(x,y, xlab="Weight in log(Kg)", ylab="Speed in log(Km/hour)",type="n")
points(x[hoppers],y[hoppers],pch = "h", col="red")
points(x[specials],y[specials],pch = "s", col="blue")
others &lt;- (!hoppers &amp; !specials)
points(x[others],y[others], col="black",cex = .75)
fit &lt;- rqss(y ~ qss(x, lambda = 1),tau = .9)
plot(fit)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-63199.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-63199.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-quantreg-mammals.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-63199.json';</script>