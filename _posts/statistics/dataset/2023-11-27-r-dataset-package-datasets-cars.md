---
title: R Dataset / Package datasets / cars
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cars</span> data set which pertains to Speed and Stopping Distances of Cars. The <span class="mono">cars</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">cars</span> data set in R by issuing the following command at the console <span class="mono">data("cars")</span>. This will load the data into a variable called <span class="mono">cars</span>. If R says the <span class="mono">cars</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-88008.csv">cars R data set</a></span>. The size of this file is about 308 bytes.</p><h2>Speed and Stopping Distances of Cars</h2>
<h3>Description</h3>
<p>The data give the speed of cars and the distances taken to stop. Note that the data were recorded in the 1920s.</p>
<h3>Usage</h3>
<pre>cars</pre>
<h3>Format</h3>
<p>A data frame with 50 observations on 2 variables.</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">[,1]</td>
<td style="text-align: left;">speed</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Speed (mph)</td>
</tr>
<tr>
<td style="text-align: right;">[,2]</td>
<td style="text-align: left;">dist</td>
<td style="text-align: left;">numeric</td>
<td style="text-align: left;">Stopping distance (ft)</td>
</tr>
</table>
<h3>Source</h3>
<p>Ezekiel, M. (1930) <em>Methods of Correlation Analysis</em>. Wiley.</p>
<h3>References</h3>
<p>McNeil, D. R. (1977) <em>Interactive Data Analysis</em>. Wiley.</p>
<h3>Examples</h3>
<pre>
require(stats); require(graphics)
plot(cars, xlab = "Speed (mph)", ylab = "Stopping distance (ft)",
 las = 1)
lines(lowess(cars$speed, cars$dist, f = 2/3, iter = 3), col = "red")
title(main = "cars data")
plot(cars, xlab = "Speed (mph)", ylab = "Stopping distance (ft)",
 las = 1, log = "xy")
title(main = "cars data (logarithmic scales)")
lines(lowess(cars$speed, cars$dist, f = 2/3, iter = 3), col = "red")
summary(fm1 &lt;- lm(log(dist) ~ log(speed), data = cars))
opar &lt;- par(mfrow = c(2, 2), oma = c(0, 0, 1.1, 0),
mar = c(4.1, 4.1, 2.1, 1.1))
plot(fm1)
par(opar)## An example of polynomial regression
plot(cars, xlab = "Speed (mph)", ylab = "Stopping distance (ft)",
las = 1, xlim = c(0, 25))
d &lt;- seq(0, 25, length.out = 200)
for(degree in 1:4) {
fm &lt;- lm(dist ~ poly(speed, degree), data = cars)
assign(paste("cars", degree, sep = "."), fm)
lines(d, predict(fm, data.frame(speed = d)), col = degree)
}
anova(cars.1, cars.2, cars.3, cars.4)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-88008.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-88008.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-cars.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-88008.json';</script>