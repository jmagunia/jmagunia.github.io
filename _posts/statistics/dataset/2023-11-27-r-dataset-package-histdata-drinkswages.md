---
title: R Dataset / Package HistData / DrinksWages
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">DrinksWages</span> data set which pertains to Elderton and Pearson's (1910) data on drinking and wages. The <span class="mono">DrinksWages</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">DrinksWages</span> data set in R by issuing the following command at the console <span class="mono">data("DrinksWages")</span>. This will load the data into a variable called <span class="mono">DrinksWages</span>. If R says the <span class="mono">DrinksWages</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70844.csv">DrinksWages R data set</a></span>. The size of this file is about 2,098 bytes.</p><h2>Elderton and Pearson's (1910) data on drinking and wages</h2>
<h3>Description</h3>
<p>In 1910, Karl Pearson weighed in on the debate, fostered by the temperance movement, on the evils done by alcohol not only to drinkers, but to their families. The report "A first study of the influence of parental alcholism on the physique and ability of their offspring" was an ambitious attempt to the new methods of statistics to bear on an important question of social policy, to see if the hypothesis that children were damaged by parental alcoholism would stand up to statistical scrutiny.</p>
<p>Working with his assistant, Ethel M. Elderton, Pearson collected voluminous data in Edinburgh and Manchester on many aspects of health, stature, intelligence, etc. of children classified according to the drinking habits of their parents. His conclusions where almost invariably negative: the tendency of parents to drink appeared unrelated to any thing he had measured.</p>
<p>The firestorm that this report set off is well described by Stigler (1999), Chapter 1. The data set <code>DrinksWages</code> is just one of Pearsons many tables, that he published in a letter to <em>The Times</em>, August 10, 1910.</p>
<h3>Usage</h3>
<pre>data(DrinksWages)</pre>
<h3>Format</h3>
<p>A data frame with 70 observations on the following 6 variables, giving the number of non-drinkers (<code>sober</code>) and drinkers (<code>drinks</code>) in various occupational categories (<code>trade</code>).</p>
<dl>
<dt><code>class</code></dt>
<dd>
<p>wage class: a factor with levels <code>A</code> <code>B</code> <code>C</code></p>
</dd>
<dt><code>trade</code></dt>
<dd>
<p>a factor with levels <code>baker</code> <code>barman</code> <code>billposter</code> ... <code>wellsinker</code> <code>wireworker</code></p>
</dd>
<dt><code>sober</code></dt>
<dd>
<p>the number of non-drinkers, a numeric vector</p>
</dd>
<dt><code>drinks</code></dt>
<dd>
<p>the number of drinkers, a numeric vector</p>
</dd>
<dt><code>wage</code></dt>
<dd>
<p>weekly wage (in shillings), a numeric vector</p>
</dd>
<dt><code>n</code></dt>
<dd>
<p>total number, a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data give Karl Pearson's tabulation of the father's trades from an Edinburgh sample, classified by whether they dring or are sober, and giving average weekly wage.</p>
<p>The wages are averages of the individuals' nominal wages. Class A is those with wages under 2.5s.; B: those with wages 2.5s. to 30s.; C: wages over 30s.</p>
<h3>Source</h3>
<p>Pearson, K. (1910). <em>The Times</em>, August 10, 1910.</p>
<p>Stigler, S. M. (1999). <em>Statistics on the Table: The History of Statistical Concepts and Methods</em>. Harvard University Press, Table 1.1</p>
<h3>References</h3>
<p>M. E. Elderton &amp; K. Pearson (1910). A first study of the influence of parental alcholism on the physique and ability of their offspring, Eugenics Laboratory Memoirs, 10.</p>
<h3>Examples</h3>
<pre>
data(DrinksWages)
plot(DrinksWages) # plot proportion sober vs. wage | class
with(DrinksWages, plot(wage, sober/n, col=c("blue","red","green")[class]))# fit logistic regression model of sober on wage
mod.sober &lt;- glm(cbind(sober, n) ~ wage, family=binomial, data=DrinksWages)
summary(mod.sober)
op &lt;- par(mfrow=c(2,2))
plot(mod.sober)
par(op)# TODO: plot fitted model
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70844.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70844.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-drinkswages.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70844.json';</script>