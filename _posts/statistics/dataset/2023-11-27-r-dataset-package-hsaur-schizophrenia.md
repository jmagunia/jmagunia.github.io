---
title: R Dataset / Package HSAUR / schizophrenia
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">schizophrenia</span> data set which pertains to Age of Onset of Schizophrenia Data . The <span class="mono">schizophrenia</span> data set is found in the <span class="mono">HSAUR</span> R package. You can load the <span class="mono">schizophrenia</span> data set in R by issuing the following command at the console <span class="mono">data("schizophrenia")</span>. This will load the data into a variable called <span class="mono">schizophrenia</span>. If R says the <span class="mono">schizophrenia</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HSAUR")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-48235.csv">schizophrenia R data set</a></span>. The size of this file is about 2,719 bytes.</p><h2>Age of Onset of Schizophrenia Data</h2>
<h3>Description</h3>
<p>Data on sex differences in the age of onset of schizophrenia.</p>
<h3>Usage</h3>
<pre>data("schizophrenia")</pre>
<h3>Format</h3>
<p>A data frame with 251 observations on the following 2 variables.</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>age at the time of diagnosis.</p>
</dd>
<dt><code>gender</code></dt>
<dd>
<p>a factor with levels <code>female</code> and <code>male</code></p>
</dd>
</dl>
<h3>Details</h3>
<p>A sex difference in the age of onset of schizophrenia was noted by Kraepelin (1919). Subsequently epidemiological studies of the disorder have consistently shown an earlier onset in men than in women. One model that has been suggested to explain this observed difference is know as the subtype model which postulates two type of schizophrenia, one characterised by early onset, typical symptoms and poor premorbid competence, and the other by late onset, atypical symptoms, and good premorbid competence. The early onset type is assumed to be largely a disorder of men and the late onset largely a disorder of women.</p>
<h3>Source</h3>
<p>E. Kraepelin (1919), <em>Dementia Praecox and Paraphrenia</em>. Livingstone, Edinburgh.</p>
<h3>Examples</h3>
<pre>data("schizophrenia", package = "HSAUR")
boxplot(age ~ gender, data = schizophrenia)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-48235.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-48235.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-hsaur-schizophrenia.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-48235.json';</script>