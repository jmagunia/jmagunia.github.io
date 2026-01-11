---
title: R Dataset / Package psych / Tucker
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Tucker</span> data set which pertains to 9 Cognitive variables discussed by Tucker and Lewis (1973). The <span class="mono">Tucker</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Tucker</span> data set in R by issuing the following command at the console <span class="mono">data("Tucker")</span>. This will load the data into a variable called <span class="mono">Tucker</span>. If R says the <span class="mono">Tucker</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69120.csv">Tucker R data set</a></span>. The size of this file is about 530 bytes.</p><h2>9 Cognitive variables discussed by Tucker and Lewis (1973)</h2>
<h3>Description</h3>
<p>Tucker and Lewis (1973) introduced a reliability coefficient for ML factor analysis. Their example data set was previously reported by Tucker (1958) and taken from Thurstone and Thurstone (1941). The correlation matrix is a 9 x 9 for 710 subjects and has two correlated factors of ability: Word Fluency and Verbal.</p>
<h3>Usage</h3>
<pre>data(Tucker)</pre>
<h3>Format</h3>
<p>A data frame with 9 observations on the following 9 variables.</p>
<dl>
<dt><code>t42</code></dt>
<dd>
<p>Prefixes</p>
</dd>
<dt><code>t54</code></dt>
<dd>
<p>Suffixes</p>
</dd>
<dt><code>t45</code></dt>
<dd>
<p>Chicago Reading Test: Vocabulary</p>
</dd>
<dt><code>t46</code></dt>
<dd>
<p>Chicago Reading Test: Sentences</p>
</dd>
<dt><code>t23</code></dt>
<dd>
<p>First and last letters</p>
</dd>
<dt><code>t24</code></dt>
<dd>
<p>First letters</p>
</dd>
<dt><code>t27</code></dt>
<dd>
<p>Four letter words</p>
</dd>
<dt><code>t10</code></dt>
<dd>
<p>Completion</p>
</dd>
<dt><code>t51</code></dt>
<dd>
<p>Same or Opposite</p>
</dd>
</dl>
<h3>Details</h3>
<p>The correlation matrix from Tucker (1958) was used in Tucker and Lewis (1973) for the Tucker-Lewis Index of factoring reliability.</p>
<h3>Source</h3>
<p>Tucker, Ledyard (1958) An inter-battery method of factor analysis, Psychometrika, 23, 111-136.</p>
<h3>References</h3>
<p>L.~Tucker and C.~Lewis. (1973) A reliability coefficient for maximum likelihood factor analysis. Psychometrika, 38(1):1–10.</p>
<p>F.~J. Floyd and K.~F. Widaman. (1995) Factor analysis in the development and refinement of clinical assessment instruments., Psychological Assessment, 7(3):286 – 299.</p>
<h3>Examples</h3>
<pre>
data(Tucker)
fa(Tucker,2,n.obs=710)
omega(Tucker,2)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69120.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69120.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-tucker.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69120.json';</script>