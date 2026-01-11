---
title: R Dataset / Package DAAG / fossum
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">fossum</span> data set which pertains to Female Possum Measurements. The <span class="mono">fossum</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">fossum</span> data set in R by issuing the following command at the console <span class="mono">data("fossum")</span>. This will load the data into a variable called <span class="mono">fossum</span>. If R says the <span class="mono">fossum</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-66213.csv">fossum R data set</a></span>. The size of this file is about 2,678 bytes.</p><h2>Female Possum Measurements</h2>
<h3>Description</h3>
<p>The <code>fossum</code> data frame consists of nine morphometric measurements on each of 43 female mountain brushtail possums, trapped at seven sites from Southern Victoria to central Queensland. This is a subset of the <code>possum</code> data frame.</p>
<h3>Usage</h3>
<pre>fossum</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>case</dt>
<dd>
<p>observation number</p>
</dd>
<dt>site</dt>
<dd>
<p>one of seven locations where possums were trapped</p>
</dd>
<dt>Pop</dt>
<dd>
<p>a factor which classifies the sites as <code>Vic</code> Victoria, <code>other</code> New South Wales or Queensland</p>
</dd>
<dt>sex</dt>
<dd>
<p>a factor with levels <code>f</code> female, <code>m</code> male</p>
</dd>
<dt>age</dt>
<dd>
<p>age</p>
</dd>
<dt>hdlngth</dt>
<dd>
<p>head length</p>
</dd>
<dt>skullw</dt>
<dd>
<p>skull width</p>
</dd>
<dt>totlngth</dt>
<dd>
<p>total length</p>
</dd>
<dt>taill</dt>
<dd>
<p>tail length</p>
</dd>
<dt>footlgth</dt>
<dd>
<p>foot length</p>
</dd>
<dt>earconch</dt>
<dd>
<p>ear conch length</p>
</dd>
<dt>eye</dt>
<dd>
<p>distance from medial canthus to lateral canthus of right eye</p>
</dd>
<dt>chest</dt>
<dd>
<p>chest girth (in cm)</p>
</dd>
<dt>belly</dt>
<dd>
<p>belly girth (in cm)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Lindenmayer, D. B., Viggers, K. L., Cunningham, R. B., and Donnelly, C. F. 1995. Morphological variation among columns of the mountain brushtail possum, Trichosurus caninus Ogilby (Phalangeridae: Marsupiala). Australian Journal of Zoology 43: 449-458.</p>
<h3>Examples</h3>
<pre>
boxplot(fossum$totlngth)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-66213.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-66213.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-fossum.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-66213.json';</script>