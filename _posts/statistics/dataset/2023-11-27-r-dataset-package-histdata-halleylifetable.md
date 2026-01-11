---
title: R Dataset / Package HistData / HalleyLifeTable
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">HalleyLifeTable</span> data set which pertains to Halley's Life Table. The <span class="mono">HalleyLifeTable</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">HalleyLifeTable</span> data set in R by issuing the following command at the console <span class="mono">data("HalleyLifeTable")</span>. This will load the data into a variable called <span class="mono">HalleyLifeTable</span>. If R says the <span class="mono">HalleyLifeTable</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-85212.csv">HalleyLifeTable R data set</a></span>. The size of this file is about 2,262 bytes.</p><h2>Halley's Life Table</h2>
<h3>Description</h3>
<p>In 1693 the famous English astronomer Edmond Halley studied the birth and death records of the city of Breslau, which had been transmitted to the Royal Society by Caspar Neumann. He produced a life table showing the number of people surviving to any age from a cohort born the same year. He also used his table to compute the price of life annuities.</p>
<h3>Usage</h3>
<pre>data("HalleyLifeTable")</pre>
<h3>Format</h3>
<p>A data frame with 84 observations on the following 4 variables.</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>deaths</code></dt>
<dd>
<p>number of deaths, <i>D_k</i>, among people of age k, a numeric vector</p>
</dd>
<dt><code>number</code></dt>
<dd>
<p>size of the population, <i>P_k</i> surviving until this age, a numeric vector</p>
</dd>
<dt><code>ratio</code></dt>
<dd>
<p>the ratio <i>P_{k+1}/P_k</i>, the conditional probability of surviving until age k + 1 given that one had already reached age k, a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>Halley's table contained only <code>age</code> and <code>number</code>. For people aged over 84 years, Halley just noted that their total number was 107. This value is not included in the data set.</p>
<p>The data from Breslau had a mean of 1,238 births per year: this is the value that Halley took for the size, <i>P_0</i> of the population cohort at age 0. From the data, he could compute the annual mean <i>D_k</i> of the number of deaths among people aged <i>k</i> for all <i>k &gt;= 0</i>. From this, he calculated the number <i>P_{k+1}</i> surviving one more year,</p>
<p style="text-align: center;"><i>P_{k+1} = P_k - D_k</i></p>
<p>This method had the great advantage of not requiring a general census but only knowledge of the number of births and deaths and of the age at which people died during a few years.</p>
<h3>Source</h3>
<p>N. Bacaer (2011), "Halley's life table (1693)", Ch 2, pp 5-10. In <em>A Short History of Mathematical Population Dynamics</em>, Springer-Verlag London, DOI 10.1007/978-0-85729-115-8_2. Data taken from Table 1.</p>
<h3>References</h3>
<p>Halley, E. (1693). An estimate of the degrees of the mortality of mankind, drawn from curious tables of the births and funerals at the city of Breslaw; with an attempt to ascertain the price of annuities upon lives. <em>Philosophical Transactions of the Royal Society, London</em>, 17, 596-610.</p>
<p>The text of Halley's paper was found at <a href="http://www.pierre-marteau.com/editions/1693-mortality.html">http://www.pierre-marteau.com/editions/1693-mortality.html</a></p>
<h3>See Also</h3>
<p><code>Arbuthnot</code></p>
<h3>Examples</h3>
<pre>
data(HalleyLifeTable)
# what was the estimated population of Breslau?
sum(HalleyLifeTable$number)# plot survival vs. age
plot(number ~ age, data=HalleyLifeTable, type="h", ylab="Number surviving")# population pyramid is transpose of this
plot(age ~ number, data=HalleyLifeTable, type="l", xlab="Number surviving")
with(HalleyLifeTable, segments(0, age, number, age, lwd=2))# conditional probability of survival, one more year
plot(ratio ~ age, data=HalleyLifeTable, ylab="Probability survive one more year")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-85212.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-85212.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-halleylifetable.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-85212.json';</script>