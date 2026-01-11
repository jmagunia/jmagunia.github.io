---
title: R Dataset / Package HistData / Armada
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Armada</span> data set which pertains to La Felicisima Armada. The <span class="mono">Armada</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Armada</span> data set in R by issuing the following command at the console <span class="mono">data("Armada")</span>. This will load the data into a variable called <span class="mono">Armada</span>. If R says the <span class="mono">Armada</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97086.csv">Armada R data set</a></span>. The size of this file is about 648 bytes.</p><h2>La Felicisima Armada</h2>
<h3>Description</h3>
<p>The Spanish Armada (Spanish: <em>Grande y Felicisima Armada</em>, literally "Great and Most Fortunate Navy") was a Spanish fleet of 130 ships that sailed from La Coruna in August 1588. During its preparation, several accounts of its formidable strength were circulated to reassure allied powers of Spain or to intimidate its enemies. One such account was given by Paz Salas et Alvarez (1588). The intent was bring the forces of Spain to invade England, overthrow Queen Elizabeth I, and re-establish Spanish control of the Netherlands. However the Armada was not as fortunate as hoped: it was all destroyed in one week's fighting.</p>
<p>de Falguerolles (2008) reports the table given here as <code>Armada</code> as an early example of data to which multivariate methods might be applied.</p>
<h3>Usage</h3>
<pre>data("Armada")</pre>
<h3>Format</h3>
<p>A data frame with 10 observations on the following 11 variables.</p>
<dl>
<dt><code>Armada</code></dt>
<dd>
<p>designation of the fleet, a factor with levels <code>Andalucia</code> <code>Castilla</code> <code>Galeras</code> <code>Guipuscua</code> <code>Napoles</code> <code>Pataches</code> <code>Portugal</code> <code>Uantiscas</code> <code>Vizca</code> <code>Vrcas</code></p>
</dd>
<dt><code>ships</code></dt>
<dd>
<p>number of ships, a numeric vector</p>
</dd>
<dt><code>tons</code></dt>
<dd>
<p>total tons, a numeric vector</p>
</dd>
<dt><code>soldiers</code></dt>
<dd>
<p>number of soldiers, a numeric vector</p>
</dd>
<dt><code>sailors</code></dt>
<dd>
<p>number of sailors, a numeric vector</p>
</dd>
<dt><code>men</code></dt>
<dd>
<p>total of soldiers plus sailors, a numeric vector</p>
</dd>
<dt><code>artillery</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>balls</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>gunpowder</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>lead</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>rope</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>Note that <code>men = soldiers + sailors</code></p>
<h3>Source</h3>
<p>de Falguerolles, A. (2008) L'analyse des donnees; before and around. <em>Journal Electronique d'Histoire des Probabilites et de la Statistique</em>, 4 (2), <a href="https://www.jehps.net/Decembre2008/Falguerolles.pdf">www.jehps.net/Decembre2008/Falguerolles.pdf</a></p>
<h3>References</h3>
<p>Pedro de Paz Salas and Antonio Alvares. La felicissima armada que elrey Don Felipe nuestro Senor mando juntar enel puerto de la ciudad de Lisboa enel Reyno de Portugal. Lisbon, 1588.</p>
<h3>Examples</h3>
<pre>
data(Armada)
# delete character and redundant variable
armada &lt;- Armada[,-c(1,6)]armada.pca &lt;- prcomp(armada, scale.=TRUE)
summary(armada.pca)plot(armada.pca, type="lines", pch=16, cex=2)
biplot(armada.pca)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97086.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97086.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-armada.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97086.json';</script>
