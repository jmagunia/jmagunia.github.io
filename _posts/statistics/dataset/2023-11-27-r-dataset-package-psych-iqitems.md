---
title: R Dataset / Package psych / iqitems
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">iqitems</span> data set which pertains to 16 multiple choice IQ items. The <span class="mono">iqitems</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">iqitems</span> data set in R by issuing the following command at the console <span class="mono">data("iqitems")</span>. This will load the data into a variable called <span class="mono">iqitems</span>. If R says the <span class="mono">iqitems</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-61777.csv">iqitems R data set</a></span>. The size of this file is about 49,011 bytes.</p><h2>16 multiple choice IQ items</h2>
<h3>Description</h3>
<p>16 multiple choice ability items taken from the Synthetic Aperture Personality Assessment (SAPA) web based personality assessment project. The data from 1525 subjects are included here as a demonstration set for scoring multiple choice inventories and doing basic item statistics. For more information on the development of an open source measure of cognitive ability, consult the readings available at the <a href="https://personality-project.org">personality-project.org</a>.</p>
<h3>Usage</h3>
<pre>data(iqitems)</pre>
<h3>Format</h3>
<p>A data frame with 1525 observations on the following 16 variables. The number following the name is the item number from SAPA.</p>
<dl>
<dt><code>reason.4</code></dt>
<dd>
<p>Basic reasoning questions</p>
</dd>
<dt><code>reason.16</code></dt>
<dd>
<p>Basic reasoning question</p>
</dd>
<dt><code>reason.17</code></dt>
<dd>
<p>Basic reasoning question</p>
</dd>
<dt><code>reason.19</code></dt>
<dd>
<p>Basic reasoning question</p>
</dd>
<dt><code>letter.7</code></dt>
<dd>
<p>In the following alphanumeric series, what letter comes next?</p>
</dd>
<dt><code>letter.33</code></dt>
<dd>
<p>In the following alphanumeric series, what letter comes next?</p>
</dd>
<dt><code>letter.34</code></dt>
<dd>
<p>In the following alphanumeric series, what letter comes next</p>
</dd>
<dt><code>letter.58</code></dt>
<dd>
<p>In the following alphanumeric series, what letter comes next?</p>
</dd>
<dt><code>matrix.45</code></dt>
<dd>
<p>A matrix reasoning task</p>
</dd>
<dt><code>matrix.46</code></dt>
<dd>
<p>A matrix reasoning task</p>
</dd>
<dt><code>matrix.47</code></dt>
<dd>
<p>A matrix reasoning task</p>
</dd>
<dt><code>matrix.55</code></dt>
<dd>
<p>A matrix reasoning task</p>
</dd>
<dt><code>rotate.3</code></dt>
<dd>
<p>Spatial Rotation of type 1.2</p>
</dd>
<dt><code>rotate.4</code></dt>
<dd>
<p>Spatial Rotation of type 1.2</p>
</dd>
<dt><code>rotate.6</code></dt>
<dd>
<p>Spatial Rotation of type 1.1</p>
</dd>
<dt><code>rotate.8</code></dt>
<dd>
<p>Spatial Rotation of type 2.3</p>
</dd>
</dl>
<h3>Details</h3>
<p>16 items were sampled from 80 items given as part of the SAPA (<a href="http://sapa-project.org">http://sapa-project.org</a>) project (Revelle, Wilt and Rosenthal, 2009; Condon and Revelle, 2014) to develop online measures of ability. These 16 items reflect four lower order factors (verbal reasoning, letter series, matrix reasoning, and spatial rotations. These lower level factors all share a higher level factor ('g').</p>
<p>This data set and the associated data set (<code>ability</code> based upon scoring these multiple choice items and converting them to correct/incorrect may be used to demonstrate item response functions, <code>tetrachoric</code> correlations, or <code>irt.fa</code> as well as <code>omega</code> estimates of of reliability and hierarchical structure.</p>
<p>In addition, the data set is a good example of doing item analysis to examine the empirical response probabilities of each item alternative as a function of the underlying latent trait. When doing this, it appears that two of the matrix reasoning problems do not have monotonically increasing trace lines for the probability correct. At moderately high ability (theta = 1) there is a decrease in the probability correct from theta = 0 and theta = 2.</p>
<h3>Source</h3>
<p>The example data set is taken from the Synthetic Aperture Personality Assessment personality and ability test at <a href="http://sapa-project.org">http://sapa-project.org</a>. The data were collected with David Condon from 8/08/12 to 8/31/12.</p>
<h3>References</h3>
<p>Revelle, William, Wilt, Joshua, and Rosenthal, Allen (2010) Personality and Cognition: The Personality-Cognition Link. In Gruszka, Alexandra and Matthews, Gerald and Szymura, Blazej (Eds.) Handbook of Individual Differences in Cognition: Attention, Memory and Executive Control, Springer.</p>
<p>Condon, David and Revelle, William, (2014) The International Cognitive Ability Resource: Development and initial validation of a public-domain measure. Intelligence, 43, 52-64.</p>
<h3>Examples</h3>
<pre>
## Not run: 
data(iqitems)
iq.keys &lt;- c(4,4,4, 6,6,3,4,4, 5,2,2,4, 3,2,6,7)
score.multiple.choice(iq.keys,iqitems) #this just gives summary statisics
#convert them to true false 
iq.scrub &lt;- scrub(iqitems,isvalue=0)#first get rid of the zero responses
iq.tf &lt;-score.multiple.choice(iq.keys,iq.scrub,score=FALSE) 
#convert to wrong (0) and correct (1) for analysis
describe(iq.tf) 
#see the ability data set for these analyses
#now, for some item analysis
#iq.irt &lt;- irt.fa(iq.tf)#do a basic irt
#iq.sc &lt;-score.irt(iq.irt,iq.tf)#find the scores
#op &lt;- par(mfrow=c(4,4))
#irt.responses(iq.sc[,1], iq.tf)
#op &lt;- par(mfrow=c(1,1))## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-61777.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-61777.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-iqitems.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-61777.json';</script>
