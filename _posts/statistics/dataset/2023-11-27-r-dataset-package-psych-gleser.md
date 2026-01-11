---
title: R Dataset / Package psych / Gleser
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Gleser</span> data set which pertains to Example data from Gleser, Cronbach and Rajaratnam (1965) to show basic principles of generalizability theory. . The <span class="mono">Gleser</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Gleser</span> data set in R by issuing the following command at the console <span class="mono">data("Gleser")</span>. This will load the data into a variable called <span class="mono">Gleser</span>. If R says the <span class="mono">Gleser</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-75737.csv">Gleser R data set</a></span>. The size of this file is about 360 bytes.</p><h2>Example data from Gleser, Cronbach and Rajaratnam (1965) to show basic principles of generalizability theory.</h2>
<h3>Description</h3>
<p>Gleser, Cronbach and Rajaratnam (1965) discuss the estimation of variance components and their ratios as part of their introduction to generalizability theory. This is a adaptation of their "illustrative data for a completely matched G study" (Table 3). 12 patients are rated on 6 symptoms by two judges. Components of variance are derived from the ANOVA.</p>
<h3>Usage</h3>
<pre>data(Gleser)</pre>
<h3>Format</h3>
<p>A data frame with 12 observations on the following 12 variables. J item by judge:</p>
<dl>
<dt><code>J11</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J12</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J21</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J22</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J31</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J32</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J41</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J42</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J51</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J52</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J61</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
<dt><code>J62</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<h3>Details</h3>
<p>Generalizability theory is the application of a components of variance approach to the analysis of reliability. Given a G study (generalizability) the components are estimated and then may be used in a D study (Decision). Different ratios are formed as appropriate for the particular D study.</p>
<h3>Source</h3>
<p>Gleser, G., Cronbach, L., and Rajaratnam, N. (1965). Generalizability of scores influenced by multiple sources of variance. Psychometrika, 30(4):395-418. (Table 3, rearranged to show increasing patient severity and increasing item severity.</p>
<h3>References</h3>
<p>Gleser, G., Cronbach, L., and Rajaratnam, N. (1965). Generalizability of scores influenced by multiple sources of variance. Psychometrika, 30(4):395-418.</p>
<h3>Examples</h3>
<pre>
#Find the MS for each component:
#First, stack the data
data(Gleser)
stack.g &lt;- stack(Gleser)
st.gc.df &lt;- data.frame(stack.g,Persons=rep(letters[1:12],12),
Items=rep(letters[1:6],each=24),Judges=rep(letters[1:2],each=12))
#now do the ANOVA
anov &lt;- aov(values ~ (Persons*Judges*Items),data=st.gc.df)
summary(anov)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-75737.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-75737.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-gleser.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-75737.json';</script>