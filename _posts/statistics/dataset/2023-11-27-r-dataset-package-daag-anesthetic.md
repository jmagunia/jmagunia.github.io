---
title: R Dataset / Package DAAG / anesthetic
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">anesthetic</span> data set which pertains to Anesthetic Effectiveness. The <span class="mono">anesthetic</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">anesthetic</span> data set in R by issuing the following command at the console <span class="mono">data("anesthetic")</span>. This will load the data into a variable called <span class="mono">anesthetic</span>. If R says the <span class="mono">anesthetic</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-32494.csv">anesthetic R data set</a></span>. The size of this file is about 723 bytes.</p><h2>Anesthetic Effectiveness</h2>
<h3>Description</h3>
<p>Thirty patients were given an anesthetic agent maintained at a predetermined level (conc) for 15 minutes before making an incision. It was then noted whether the patient moved, i.e. jerked or twisted.</p>
<h3>Usage</h3>
<pre>anesthetic</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>move</dt>
<dd>
<p>a binary numeric vector coded for patient movement (0 = no movement, 1 = movement)</p>
</dd>
<dt>conc</dt>
<dd>
<p>anesthetic concentration</p>
</dd>
<dt>logconc</dt>
<dd>
<p>logarithm of concentration</p>
</dd>
<dt>nomove</dt>
<dd>
<p>the complement of move</p>
</dd>
</dl>
<h3>Details</h3>
<p>The interest is in estimating how the probability of jerking or twisting varies with increasing concentration of the anesthetic agent.</p>
<h3>Source</h3>
<p>unknown</p>
<h3>Examples</h3>
<pre>
print("Logistic Regression - Example 8.1.4")z &lt;- table(anesthetic$nomove, anesthetic$conc)
tot &lt;- apply(z, 2, sum) # totals at each concentration
prop &lt;- z[2,]/(tot) # proportions at each concentration
oprop &lt;- sum(z[2,])/sum(tot)# expected proportion moving if concentration had no effect
conc &lt;- as.numeric(dimnames(z)[[2]])
plot(conc, prop, xlab = "Concentration", ylab = "Proportion", xlim = c(.5,2.5),
ylim = c(0, 1), pch = 16)
chw &lt;- par()$cxy[1]
text(conc - 0.75 * chw, prop, paste(tot), adj = 1)
abline(h = oprop, lty = 2)pause()anes.logit &lt;- glm(nomove ~ conc, family = binomial(link = logit),
data = anesthetic)
anova(anes.logit)
summary(anes.logit)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-32494.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-32494.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-anesthetic.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-32494.json';</script>