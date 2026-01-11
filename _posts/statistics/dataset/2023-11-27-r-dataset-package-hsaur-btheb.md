---
title: R Dataset / Package HSAUR / BtheB
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">BtheB</span> data set which pertains to Beat the Blues Data . The <span class="mono">BtheB</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">BtheB</span> data set in R by issuing the following command at the console <span class="mono">data("BtheB")</span>. This will load the data into a variable called <span class="mono">BtheB</span>. If R says the <span class="mono">BtheB</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-72268.csv">BtheB R data set</a></span>. The size of this file is about 3,301 bytes.</p><h2>Beat the Blues Data</h2>
<h3>Description</h3>
<p>Data from a clinical trial of an interactive multimedia program called ‘Beat the Blues’.</p>
<h3>Usage</h3>
<pre>data("BtheB")</pre>
<h3>Format</h3>
<p>A data frame with 100 observations of 100 patients on the following 8 variables.</p>
<dl>
<dt>drug</dt>
<dd>
<p>did the patient take anti-depressant drugs (<code>No</code> or <code>Yes</code>).</p>
</dd>
<dt>length</dt>
<dd>
<p>the length of the current episode of depression, a factor with levels <code>&lt;6m</code> (less than six months) and <code>&gt;6m</code> (more than six months).</p>
</dd>
<dt>treatment</dt>
<dd>
<p>treatment group, a factor with levels <code>TAU</code> (treatment as usual) and <code>BtheB</code> (Beat the Blues)</p>
</dd>
<dt>bdi.pre</dt>
<dd>
<p>Beck Depression Inventory II before treatment.</p>
</dd>
<dt>bdi.2m</dt>
<dd>
<p>Beck Depression Inventory II after two months.</p>
</dd>
<dt>bdi.4m</dt>
<dd>
<p>Beck Depression Inventory II after four months.</p>
</dd>
<dt>bdi.6m</dt>
<dd>
<p>Beck Depression Inventory II after six months.</p>
</dd>
<dt>bdi.8m</dt>
<dd>
<p>Beck Depression Inventory II after eight months.</p>
</dd>
</dl>
<h3>Details</h3>
<p>Longitudinal data from a clinical trial of an interactive, multimedia program known as "Beat the Blues" designed to deliver cognitive behavioural therapy to depressed patients via a computer terminal. Patients with depression recruited in primary care were randomised to either the Beating the Blues program, or to "Treatment as Usual (TAU)".</p>
<p>Note that the data are stored in the wide form, i.e., repeated measurments are represented by additional columns in the data frame.</p>
<h3>Source</h3>
<p>J. Proudfoot, D. Goldberg and A. Mann (2003). Computerised, interactive, multimedia CBT reduced anxiety and depression in general practice: A RCT. <em>Psychological Medicine</em>, <b>33</b>, 217–227.</p>
<h3>Examples</h3>
<pre>data("BtheB", package = "HSAUR")
layout(matrix(1:2, nrow = 1)) 
ylim &lt;- range(BtheB[,grep("bdi", names(BtheB))], na.rm = TRUE)
boxplot(subset(BtheB, treatment == "TAU")[,grep("bdi", names(BtheB))],
main = "Treated as usual", ylab = "BDI", 
xlab = "Time (in months)", names = c(0, 2, 4, 6, 8), ylim = ylim)
boxplot(subset(BtheB, treatment == "BtheB")[,grep("bdi", names(BtheB))], 
main = "Beat the Blues", ylab = "BDI", xlab = "Time (in months)",
names = c(0, 2, 4, 6, 8), ylim = ylim)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-72268.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-72268.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-btheb.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-72268.json';</script>