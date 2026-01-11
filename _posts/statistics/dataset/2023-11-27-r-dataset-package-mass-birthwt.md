---
title: R Dataset / Package MASS / birthwt
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">birthwt</span> data set which pertains to Risk Factors Associated with Low Infant Birth Weight. The <span class="mono">birthwt</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">birthwt</span> data set in R by issuing the following command at the console <span class="mono">data("birthwt")</span>. This will load the data into a variable called <span class="mono">birthwt</span>. If R says the <span class="mono">birthwt</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-34016.csv">birthwt R data set</a></span>. The size of this file is about 4,955 bytes.</p><h2>Risk Factors Associated with Low Infant Birth Weight</h2>
<h3>Description</h3>
<p>The <code>birthwt</code> data frame has 189 rows and 10 columns. The data were collected at Baystate Medical Center, Springfield, Mass during 1986.</p>
<h3>Usage</h3>
<pre>
birthwt
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>low</code></dt>
<dd>
<p>indicator of birth weight less than 2.5 kg.</p>
</dd>
<dt><code>age</code></dt>
<dd>
<p>mother's age in years.</p>
</dd>
<dt><code>lwt</code></dt>
<dd>
<p>mother's weight in pounds at last menstrual period.</p>
</dd>
<dt><code>race</code></dt>
<dd>
<p>mother's race (<code>1</code> = white, <code>2</code> = black, <code>3</code> = other).</p>
</dd>
<dt><code>smoke</code></dt>
<dd>
<p>smoking status during pregnancy.</p>
</dd>
<dt><code>ptl</code></dt>
<dd>
<p>number of previous premature labours.</p>
</dd>
<dt><code>ht</code></dt>
<dd>
<p>history of hypertension.</p>
</dd>
<dt><code>ui</code></dt>
<dd>
<p>presence of uterine irritability.</p>
</dd>
<dt><code>ftv</code></dt>
<dd>
<p>number of physician visits during the first trimester.</p>
</dd>
<dt><code>bwt</code></dt>
<dd>
<p>birth weight in grams.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Hosmer, D.W. and Lemeshow, S. (1989) <em>Applied Logistic Regression.</em> New York: Wiley</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
bwt &lt;- with(birthwt, {
race &lt;- factor(race, labels = c("white", "black", "other"))
ptd &lt;- factor(ptl &gt; 0)
ftv &lt;- factor(ftv)
levels(ftv)[-(1:2)] &lt;- "2+"
data.frame(low = factor(low), age, lwt, race, smoke = (smoke &gt; 0),
 ptd, ht = (ht &gt; 0), ui = (ui &gt; 0), ftv)
})
options(contrasts = c("contr.treatment", "contr.poly"))
glm(low ~ ., binomial, bwt)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-34016.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-34016.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-birthwt.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-34016.json';</script>