---
title: R Dataset / Package lme4 / cbpp
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cbpp</span> data set which pertains to Contagious bovine pleuropneumonia. The <span class="mono">cbpp</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">cbpp</span> data set in R by issuing the following command at the console <span class="mono">data("cbpp")</span>. This will load the data into a variable called <span class="mono">cbpp</span>. If R says the <span class="mono">cbpp</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86341.csv">cbpp R data set</a></span>. The size of this file is about 772 bytes.</p><h2>Contagious bovine pleuropneumonia</h2>
<h3>Description</h3>
<p>Contagious bovine pleuropneumonia (CBPP) is a major disease of cattle in Africa, caused by a mycoplasma. This dataset describes the serological incidence of CBPP in zebu cattle during a follow-up survey implemented in 15 commercial herds located in the Boji district of Ethiopia. The goal of the survey was to study the within-herd spread of CBPP in newly infected herds. Blood samples were quarterly collected from all animals of these herds to determine their CBPP status. These data were used to compute the serological incidence of CBPP (new cases occurring during a given time period). Some data are missing (lost to follow-up).</p>
<h3>Format</h3>
<p>A data frame with 56 observations on the following 4 variables.</p>
<dl>
<dt><code>herd</code></dt>
<dd>
<p>A factor identifying the herd (1 to 15).</p>
</dd>
<dt><code>incidence</code></dt>
<dd>
<p>The number of new serological cases for a given herd and time period.</p>
</dd>
<dt><code>size</code></dt>
<dd>
<p>A numeric vector describing herd size at the beginning of a given time period.</p>
</dd>
<dt><code>period</code></dt>
<dd>
<p>A factor with levels <code>1</code> to <code>4</code>.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Serological status was determined using a competitive enzyme-linked immuno-sorbent assay (cELISA).</p>
<h3>Source</h3>
<p>Lesnoff, M., Laval, G., Bonnet, P., Abdicho, S., Workalemahu, A., Kifle, D., Peyraud, A., Lancelot, R., Thiaucourt, F. (2004) Within-herd spread of contagious bovine pleuropneumonia in Ethiopian highlands. <em>Preventive Veterinary Medicine</em> <b>64</b>, 27–40.</p>
<h3>Examples</h3>
<pre>
## response as a matrix
(m1 &lt;- glmer(cbind(incidence, size - incidence) ~ period + (1 | herd),
 family = binomial, data = cbpp))
## response as a vector of probabilities and usage of argument "weights"
m1p &lt;- glmer(incidence / size ~ period + (1 | herd), weights = size,
 family = binomial, data = cbpp)
## Confirm that these are equivalent:
stopifnot(all.equal(fixef(m1), fixef(m1p), tolerance = 1e-5),
all.equal(ranef(m1), ranef(m1p), tolerance = 1e-5))
## GLMM with individual-level variability (accounting for overdispersion)
cbpp$obs &lt;- 1:nrow(cbpp)
(m2 &lt;- glmer(cbind(incidence, size - incidence) ~ period + (1 | herd) +(1|obs),
family = binomial, data = cbpp))
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86341.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86341.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-cbpp.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86341.json';</script>