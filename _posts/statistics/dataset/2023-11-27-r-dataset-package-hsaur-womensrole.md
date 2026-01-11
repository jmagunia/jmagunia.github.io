---
title: R Dataset / Package HSAUR / womensrole
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">womensrole</span> data set which pertains to Womens Role in Society . The <span class="mono">womensrole</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">womensrole</span> data set in R by issuing the following command at the console <span class="mono">data("womensrole")</span>. This will load the data into a variable called <span class="mono">womensrole</span>. If R says the <span class="mono">womensrole</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-94964.csv">womensrole R data set</a></span>. The size of this file is about 702 bytes.</p><h2>Womens Role in Society</h2>
<h3>Description</h3>
<p>Data from a survey from 1974 / 1975 asking both female and male responders about their opinion on the statement: Women should take care of running their homes and leave running the country up to men.</p>
<h3>Usage</h3>
<pre>data("womensrole")</pre>
<h3>Format</h3>
<p>A data frame with 42 observations on the following 4 variables.</p>
<dl>
<dt><code>education</code></dt>
<dd>
<p>years of education.</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>a factor with levels <code>Male</code> and <code>Female</code>.</p>
</dd>
<dt><code>agree</code></dt>
<dd>
<p>number of subjects in agreement with the statement.</p>
</dd>
<dt><code>disagree</code></dt>
<dd>
<p>number of subjects in disagreement with the statement.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are from Haberman (1973) and also given in Collett (2003). The questions here are whether the response of men and women differ.</p>
<h3>Source</h3>
<p>S. J. Haberman (1973), The analysis of residuals in cross-classificed tables. <em>Biometrics</em>, <b>29</b>, 205–220.</p>
<p>D. Collett (2003), <em>Modelling Binary Data</em>. Chapman and Hall / CRC, London. 2nd edition.</p>
<h3>Examples</h3>
<pre>data("womensrole", package = "HSAUR")
summary(subset(womensrole, sex == "Female"))
summary(subset(womensrole, sex == "Male"))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-94964.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-94964.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-womensrole.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-94964.json';</script>