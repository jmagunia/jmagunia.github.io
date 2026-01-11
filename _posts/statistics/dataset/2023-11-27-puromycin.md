---
title: Puromycin
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Reaction Velocity of an Enzymatic Reaction</h2>
<p>The <code>Puromycin</code> data frame has 23 rows and 3 columns of the reaction velocity versus substrate concentration in an enzymatic reaction involving untreated cells or cells treated with Puromycin.</p>
<h3>Usage</h3>
<pre>Puromycin</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>conc</code></dt>
<dd>
<p>a numeric vector of substrate concentrations (ppm)</p>
</dd>
<dt><code>rate</code></dt>
<dd>
<p>a numeric vector of instantaneous reaction rates (counts/min/min)</p>
</dd>
<dt><code>state</code></dt>
<dd>
<p>a factor with levels <code>treated</code> <code>untreated</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>Data on the velocity of an enzymatic reaction were obtained by Treloar (1974). The number of counts per minute of radioactive product from the reaction was measured as a function of substrate concentration in parts per million (ppm) and from these counts the initial rate (or velocity) of the reaction was calculated (counts/min/min). The experiment was conducted once with the enzyme treated with Puromycin, and once with the enzyme untreated.</p>
<h3>Source</h3>
<p>Bates, D.M. and Watts, D.G. (1988), <em>Nonlinear Regression Analysis and Its Applications</em>, Wiley, Appendix A1.3.</p>
<p>Treloar, M. A. (1974), <em>Effects of Puromycin on Galactosyltransferase in Golgi Membranes</em>, M.Sc. Thesis, U. of Toronto.</p>
<h3>See Also</h3>
<p><code>SSmicmen</code> for other models fitted to this dataset.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
plot(rate ~ conc, data = Puromycin, las = 1,
 xlab = "Substrate concentration (ppm)",
 ylab = "Reaction velocity (counts/min/min)",
 pch = as.integer(Puromycin$state),
 col = as.integer(Puromycin$state),
 main = "Puromycin data and fitted Michaelis-Menten curves")
## simplest form of fitting the Michaelis-Menten model to these data
fm1 &lt;- nls(rate ~ Vm * conc/(K + conc), data = Puromycin,
 subset = state == "treated",
 start = c(Vm = 200, K = 0.05))
fm2 &lt;- nls(rate ~ Vm * conc/(K + conc), data = Puromycin,
 subset = state == "untreated",
 start = c(Vm = 160, K = 0.05))
summary(fm1)
summary(fm2)
## add fitted lines to the plot
conc &lt;- seq(0, 1.2, length.out = 101)
lines(conc, predict(fm1, list(conc = conc)), lty = 1, col = 1)
lines(conc, predict(fm2, list(conc = conc)), lty = 2, col = 2)
legend(0.8, 120, levels(Puromycin$state),
 col = 1:2, lty = 1:2, pch = 1:2)
## using partial linearity
fm3 &lt;- nls(rate ~ conc/(K + conc), data = Puromycin,
 subset = state == "treated", start = c(K = 0.05),
 algorithm = "plinear")
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-38368.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-38368.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/puromycin.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-38368.json';</script>