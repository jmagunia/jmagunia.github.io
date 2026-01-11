---
title: R Dataset / Package psych / burt
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">burt</span> data set which pertains to 11 emotional variables from Burt (1915). The <span class="mono">burt</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">burt</span> data set in R by issuing the following command at the console <span class="mono">data("burt")</span>. This will load the data into a variable called <span class="mono">burt</span>. If R says the <span class="mono">burt</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-84980.csv">burt R data set</a></span>. The size of this file is about 746 bytes.</p><h2>11 emotional variables from Burt (1915)</h2>
<h3>Description</h3>
<p>Cyril Burt reported an early factor analysis with a circumplex structure of 11 emotional variables in 1915. 8 of these were subsequently used by Harman in his text on factor analysis. Unfortunately, it seems as if Burt made a mistake for the matrix is not positive definite. With one change from .87 to .81 the matrix is positive definite.</p>
<h3>Usage</h3>
<pre>data(burt)</pre>
<h3>Format</h3>
<p>A correlation matrix based upon 172 "normal school age children aged 9-12".</p>
<dl>
<dt>Sociality</dt>
<dd>
<p>Sociality</p>
</dd>
<dt>Sorrow</dt>
<dd>
<p>Sorrow</p>
</dd>
<dt>Tenderness</dt>
<dd>
<p>Tenderness</p>
</dd>
<dt>Joy</dt>
<dd>
<p>Joy</p>
</dd>
<dt>Wonder</dt>
<dd>
<p>Wonder</p>
</dd>
<dt>Elation</dt>
<dd>
<p>Elation</p>
</dd>
<dt>Disgust</dt>
<dd>
<p>Disgust</p>
</dd>
<dt>Anger</dt>
<dd>
<p>Anger</p>
</dd>
<dt>Sex</dt>
<dd>
<p>Sex</p>
</dd>
<dt>Fear</dt>
<dd>
<p>Fear</p>
</dd>
<dt>Subjection</dt>
<dd>
<p>Subjection</p>
</dd>
</dl>
<h3>Details</h3>
<p>The Burt data set is interesting for several reasons. It seems to be an early example of the organizaton of emotions into an affective circumplex, a subset of it has been used for factor analysis examples (see <code>Harman.Burt</code>, and it is an example of how typos affect data. The original data matrix has one negative eigenvalue. With the replacement of the correlation between Sorrow and Tenderness from .87 to .81, the matrix is positive definite.</p>
<p>Alternatively, using <code>cor.smooth</code>, the matrix can be made positive definite as well, although cor.smooth makes more (but smaller) changes.</p>
<h3>Source</h3>
<p>(retrieved from the web at <a href="http://www.biodiversitylibrary.org/item/95822#790">http://www.biodiversitylibrary.org/item/95822#790</a>) Following a suggestion by Jan DeLeeuw.</p>
<h3>References</h3>
<p>Burt, C.General and Specific Factors underlying the Primary Emotions. Reports of the British Association for the Advancement of Science, 85th meeting, held in Manchester, September 7-11, 1915. London, John Murray, 1916, p. 694-696 (retrieved from the web at <a href="http://www.biodiversitylibrary.org/item/95822#790">http://www.biodiversitylibrary.org/item/95822#790</a>)</p>
<h3>See Also</h3>
<p><code>Harman.Burt</code> in the <code>Harman</code> dataset and <code>cor.smooth</code></p>
<h3>Examples</h3>
<pre>
data(burt)
eigen(burt)$values#one is negative!
burt.new &lt;- burt
burt.new[2,3] &lt;- burt.new[3,2] &lt;- .81
eigen(burt.new)$values#all are positive
bs &lt;- cor.smooth(burt)
round(burt.new - bs,3)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-84980.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-84980.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-burt.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-84980.json';</script>