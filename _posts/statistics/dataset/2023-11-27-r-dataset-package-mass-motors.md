---
title: R Dataset / Package MASS / motors
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">motors</span> data set which pertains to Accelerated Life Testing of Motorettes. The <span class="mono">motors</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">motors</span> data set in R by issuing the following command at the console <span class="mono">data("motors")</span>. This will load the data into a variable called <span class="mono">motors</span>. If R says the <span class="mono">motors</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69620.csv">motors R data set</a></span>. The size of this file is about 449 bytes.</p><h2>Accelerated Life Testing of Motorettes</h2>
<h3>Description</h3>
<p>The <code>motors</code> data frame has 40 rows and 3 columns. It describes an accelerated life test at each of four temperatures of 10 motorettes, and has rather discrete times.</p>
<h3>Usage</h3>
<pre>
motors
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>temp</code></dt>
<dd>
<p>the temperature (degrees C) of the test.</p>
</dd>
<dt><code>time</code></dt>
<dd>
<p>the time in hours to failure or censoring at 8064 hours (= 336 days).</p>
</dd>
<dt><code>cens</code></dt>
<dd>
<p>an indicator variable for death.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Kalbfleisch, J. D. and Prentice, R. L. (1980) <em>The Statistical Analysis of Failure Time Data.</em> New York: Wiley.</p>
<p>taken from</p>
<p>Nelson, W. D. and Hahn, G. J. (1972) Linear regression of a regression relationship from censored data. Part 1 – simple methods and their application. <em>Technometrics</em>, <b>14</b>, 247–276.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
library(survival)
plot(survfit(Surv(time, cens) ~ factor(temp), motors), conf.int = FALSE)
# fit Weibull model
motor.wei &lt;- survreg(Surv(time, cens) ~ temp, motors)
summary(motor.wei)
# and predict at 130C
unlist(predict(motor.wei, data.frame(temp=130), se.fit = TRUE))motor.cox &lt;- coxph(Surv(time, cens) ~ temp, motors)
summary(motor.cox)
# predict at temperature 200
plot(survfit(motor.cox, newdata = data.frame(temp=200),
 conf.type = "log-log"))
summary( survfit(motor.cox, newdata = data.frame(temp=130)) )
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69620.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69620.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-motors.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69620.json';</script>