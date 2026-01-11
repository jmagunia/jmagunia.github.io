---
title: R Dataset / Package HSAUR / Lanza
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Lanza</span> data set which pertains to Prevention of Gastointestinal Damages . The <span class="mono">Lanza</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">Lanza</span> data set in R by issuing the following command at the console <span class="mono">data("Lanza")</span>. This will load the data into a variable called <span class="mono">Lanza</span>. If R says the <span class="mono">Lanza</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-12469.csv">Lanza R data set</a></span>. The size of this file is about 4,195 bytes.</p><h2>Prevention of Gastointestinal Damages</h2>
<h3>Description</h3>
<p>Data from four randomised clinical trials on the prevention of gastointestinal damages by Misoprostol reported by Lanza et al. (1987, 1988a,b, 1989).</p>
<h3>Usage</h3>
<pre>data("Lanza")</pre>
<h3>Format</h3>
<p>A data frame with 198 observations on the following 3 variables.</p>
<dl>
<dt><code>study</code></dt>
<dd>
<p>a factor with levels <code>I</code>, <code>II</code>, <code>III</code>, and <code>IV</code> describing the study number.</p>
</dd>
<dt><code>treatment</code></dt>
<dd>
<p>a factor with levels <code>Misoprostol</code> <code>Placebo</code></p>
</dd>
<dt><code>classification</code></dt>
<dd>
<p>an ordered factor with levels <code>1</code> &lt; <code>2</code> &lt; <code>3</code> &lt; <code>4</code> &lt; <code>5</code> describing an ordered response variable.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The response variable is defined by the number of haemorrhages or erosions.</p>
<h3>Source</h3>
<p>F. L. Lanza (1987), A double-blind study of prophylactic effect of misoprostol on lesions of gastric and duodenal mucosa induced by oral administration of tolmetin in healthy subjects. <em>British Journal of Clinical Practice</em>, May suppl, 91–101.</p>
<p>F. L. Lanza, R. L. Aspinall, E. A. Swabb, R. E. Davis, M. F. Rack, A. Rubin (1988a), Double-blind, placebo-controlled endoscopic comparison of the mucosal protective effects of misoprostol versus cimetidine on tolmetin-induced mucosal injury to the stomach and duodenum. <em>Gastroenterology</em>, <b>95</b>(2), 289–294.</p>
<p>F. L. Lanza, K. Peace, L. Gustitus, M. F. Rack, B. Dickson (1988b), A blinded endoscopic comparative study of misoprostol versus sucralfate and placebo in the prevention of aspirin-induced gastric and duodenal ulceration. <em>American Journal of Gastroenterology</em>, <b>83</b>(2), 143–146.</p>
<p>F. L. Lanza, D. Fakouhi, A. Rubin, R. E. Davis, M. F. Rack, C. Nissen, S. Geis (1989), A double-blind placebo-controlled comparison of the efficacy and safety of 50, 100, and 200 micrograms of misoprostol QID in the prevention of ibuprofen-induced gastric and duodenal mucosal lesions and symptoms. <em>American Journal of Gastroenterology</em>, <b>84</b>(6), 633–636.</p>
<h3>Examples</h3>
<pre>data("Lanza", package = "HSAUR")
layout(matrix(1:4, nrow = 2))
pl &lt;- tapply(1:nrow(Lanza), Lanza$study, function(indx)
mosaicplot(table(Lanza[indx,"treatment"], 
 Lanza[indx,"classification"]),
 main = "", shade = TRUE))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-12469.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-12469.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-lanza.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-12469.json';</script>