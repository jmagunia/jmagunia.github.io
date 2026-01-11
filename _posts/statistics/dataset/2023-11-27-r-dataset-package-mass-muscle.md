---
title: R Dataset / Package MASS / muscle
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">muscle</span> data set which pertains to Effect of Calcium Chloride on Muscle Contraction in Rat Hearts. The <span class="mono">muscle</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">muscle</span> data set in R by issuing the following command at the console <span class="mono">data("muscle")</span>. This will load the data into a variable called <span class="mono">muscle</span>. If R says the <span class="mono">muscle</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-29991.csv">muscle R data set</a></span>. The size of this file is about 789 bytes.</p><h2>Effect of Calcium Chloride on Muscle Contraction in Rat Hearts</h2>
<h3>Description</h3>
<p>The purpose of this experiment was to assess the influence of calcium in solution on the contraction of heart muscle in rats. The left auricle of 21 rat hearts was isolated and on several occasions a constant-length strip of tissue was electrically stimulated and dipped into various concentrations of calcium chloride solution, after which the shortening of the strip was accurately measured as the response.</p>
<h3>Usage</h3>
<pre>
muscle
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>Strip</code></dt>
<dd>
<p>which heart muscle strip was used?</p>
</dd>
<dt><code>Conc</code></dt>
<dd>
<p>concentration of calcium chloride solution, in multiples of 2.2 mM.</p>
</dd>
<dt><code>Length</code></dt>
<dd>
<p>the change in length (shortening) of the strip, (allegedly) in mm.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Linder, A., Chakravarti, I. M. and Vuagnat, P. (1964) Fitting asymptotic regression curves with different asymptotes. In <em>Contributions to Statistics. Presented to Professor P. C. Mahalanobis on the occasion of his 70th birthday</em>, ed. C. R. Rao, pp. 221–228. Oxford: Pergamon Press.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth Edition. Springer.</p>
<h3>Examples</h3>
<pre>
A &lt;- model.matrix(~ Strip - 1, data=muscle)
rats.nls1 &lt;- nls(log(Length) ~ cbind(A, rho^Conc),
 data = muscle, start = c(rho=0.1), algorithm="plinear")
(B &lt;- coef(rats.nls1))st &lt;- list(alpha = B[2:22], beta = B[23], rho = B[1])
(rats.nls2 &lt;- nls(log(Length) ~ alpha[Strip] + beta*rho^Conc,
data = muscle, start = st))Muscle &lt;- with(muscle, {
Muscle &lt;- expand.grid(Conc = sort(unique(Conc)), Strip = levels(Strip))
Muscle$Yhat &lt;- predict(rats.nls2, Muscle)
Muscle &lt;- cbind(Muscle, logLength = rep(as.numeric(NA), 126))
ind &lt;- match(paste(Strip, Conc),
paste(Muscle$Strip, Muscle$Conc))
Muscle$logLength[ind] &lt;- log(Length)
Muscle})lattice::xyplot(Yhat ~ Conc | Strip, Muscle, as.table = TRUE,
 ylim = range(c(Muscle$Yhat, Muscle$logLength), na.rm = TRUE),
 subscripts = TRUE, xlab = "Calcium Chloride concentration (mM)",
 ylab = "log(Length in mm)", panel =
 function(x, y, subscripts, ...) {
panel.xyplot(x, Muscle$logLength[subscripts], ...)
llines(spline(x, y))
 })
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-29991.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-29991.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-muscle.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-29991.json';</script>