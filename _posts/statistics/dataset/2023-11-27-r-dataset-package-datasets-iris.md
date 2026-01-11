---
title: R Dataset / Package datasets / iris
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">iris</span> data set which pertains to Edgar Anderson's Iris Data. The <span class="mono">iris</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">iris</span> data set in R by issuing the following command at the console <span class="mono">data("iris")</span>. This will load the data into a variable called <span class="mono">iris</span>. If R says the <span class="mono">iris</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-27524.csv">iris R data set</a></span>. The size of this file is about 4,026 bytes.</p><h2>Edgar Anderson's Iris Data</h2>
<h3>Description</h3>
<p>This famous (Fisher's or Anderson's) iris data set gives the measurements in centimeters of the variables sepal length and width and petal length and width, respectively, for 50 flowers from each of 3 species of iris. The species are <em>Iris setosa</em>, <em>versicolor</em>, and <em>virginica</em>.</p>
<h3>Usage</h3>
<pre>
iris
iris3
</pre>
<h3>Format</h3>
<p><code>iris</code> is a data frame with 150 cases (rows) and 5 variables (columns) named <code>Sepal.Length</code>, <code>Sepal.Width</code>, <code>Petal.Length</code>, <code>Petal.Width</code>, and <code>Species</code>.</p>
<p><code>iris3</code> gives the same data arranged as a 3-dimensional array of size 50 by 4 by 3, as represented by S-PLUS. The first dimension gives the case number within the species subsample, the second the measurements with names <code>Sepal L.</code>, <code>Sepal W.</code>, <code>Petal L.</code>, and <code>Petal W.</code>, and the third the species.</p>
<h3>Source</h3>
<p>Fisher, R. A. (1936) The use of multiple measurements in taxonomic problems. <em>Annals of Eugenics</em>, <b>7</b>, Part II, 179–188.</p>
<p>The data were collected by Anderson, Edgar (1935). The irises of the Gaspe Peninsula, <em>Bulletin of the American Iris Society</em>, <b>59</b>, 2–5.</p>
<h3>References</h3>
<p>Becker, R. A., Chambers, J. M. and Wilks, A. R. (1988) <em>The New S Language</em>. Wadsworth &amp; Brooks/Cole. (has <code>iris3</code> as <code>iris</code>.)</p>
<h3>See Also</h3>
<p><code>matplot</code> some examples of which use <code>iris</code>.</p>
<h3>Examples</h3>
<pre>
dni3 &lt;- dimnames(iris3)
ii &lt;- data.frame(matrix(aperm(iris3, c(1,3,2)), ncol = 4,
dimnames = list(NULL, sub(" L.",".Length",
sub(" W.",".Width", dni3[[2]])))),
Species = gl(3, 50, labels = sub("S", "s", sub("V", "v", dni3[[3]]))))
all.equal(ii, iris) # TRUE
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-27524.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-27524.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-iris.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-27524.json';</script>