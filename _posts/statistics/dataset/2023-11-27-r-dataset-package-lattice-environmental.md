---
title: R Dataset / Package lattice / environmental
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">environmental</span> data set which pertains to Atmospheric environmental conditions in New York City . The <span class="mono">environmental</span> data set is found in the <span class="mono">lattice</span> R package. You can load the <span class="mono">environmental</span> data set in R by issuing the following command at the console <span class="mono">data("environmental")</span>. This will load the data into a variable called <span class="mono">environmental</span>. If R says the <span class="mono">environmental</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lattice")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-37302.csv">environmental R data set</a></span>. The size of this file is about 1,591 bytes.</p><h2>Atmospheric environmental conditions in New York City</h2>
<h3>Description</h3>
<p>Daily measurements of ozone concentration, wind speed, temperature and solar radiation in New York City from May to September of 1973.</p>
<h3>Usage</h3>
<pre>environmental</pre>
<h3>Format</h3>
<p>A data frame with 111 observations on the following 4 variables.</p>
<dl>
<dt>ozone</dt>
<dd>
<p>Average ozone concentration (of hourly measurements) of in parts per billion.</p>
</dd>
<dt>radiation</dt>
<dd>
<p>Solar radiation (from 08:00 to 12:00) in langleys.</p>
</dd>
<dt>temperature</dt>
<dd>
<p>Maximum daily emperature in degrees Fahrenheit.</p>
</dd>
<dt>wind</dt>
<dd>
<p>Average wind speed (at 07:00 and 10:00) in miles per hour.</p>
</dd>
</dl>
<h3>Author(s)</h3>
<p>Documentation contributed by Kevin Wright.</p>
<h3>Source</h3>
<p>Bruntz, S. M., W. S. Cleveland, B. Kleiner, and J. L. Warner. (1974). The Dependence of Ambient Ozone on Solar Radiation, Wind, Temperature, and Mixing Height. In <em>Symposium on Atmospheric Diffusion and Air Pollution</em>, pages 125–128. American Meterological Society, Boston.</p>
<h3>References</h3>
<p>Cleveland, William S. (1993) <em>Visualizing Data</em>. Hobart Press, Summit, New Jersey.</p>
<h3>Examples</h3>
<pre>
# Scatter plot matrix with loess lines
splom(~environmental,
panel=function(x,y){
panel.xyplot(x,y)
panel.loess(x,y)
}
)
# Conditioned plot similar to figure 5.3 from Cleveland
attach(environmental)
Temperature &lt;- equal.count(temperature, 4, 1/2)
Wind &lt;- equal.count(wind, 4, 1/2)
xyplot((ozone^(1/3)) ~ radiation | Temperature * Wind,
aspect=1,
prepanel = function(x, y) 
prepanel.loess(x, y, span = 1),
panel = function(x, y){
panel.grid(h = 2, v = 2)
panel.xyplot(x, y, cex = .5)
panel.loess(x, y, span = 1)
},
xlab = "Solar radiation (langleys)",
ylab = "Ozone (cube root ppb)")
detach()# Similar display using the coplot function
with(environmental,{
coplot((ozone^.33) ~ radiation | temperature * wind,
number=c(4,4),
panel = function(x, y, ...) panel.smooth(x, y, span = .8, ...),
xlab="Solar radiation (langleys)",
ylab="Ozone (cube root ppb)")
})
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-37302.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-37302.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lattice-environmental.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-37302.json';</script>