---
title: R Dataset / Package lme4 / VerbAgg
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">VerbAgg</span> data set which pertains to Verbal Aggression item responses. The <span class="mono">VerbAgg</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">VerbAgg</span> data set in R by issuing the following command at the console <span class="mono">data("VerbAgg")</span>. This will load the data into a variable called <span class="mono">VerbAgg</span>. If R says the <span class="mono">VerbAgg</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-97081.csv">VerbAgg R data set</a></span>. The size of this file is about 437,902 bytes.</p><h2>Verbal Aggression item responses</h2>
<h3>Description</h3>
<p>These are the item responses to a questionaire on verbal aggression. These data are used throughout De Boeck and Wilson, <em>Explanatory Item Response Models</em> (Springer, 2004) to illustrate various forms of item response models.</p>
<h3>Format</h3>
<p>A data frame with 7584 observations on the following 13 variables.</p>
<dl>
<dt><code>Anger</code></dt>
<dd>
<p>the subject's Trait Anger score as measured on the State-Trait Anger Expression Inventory (STAXI)</p>
</dd>
<dt><code>Gender</code></dt>
<dd>
<p>the subject's gender - a factor with levels <code>M</code> and <code>F</code></p>
</dd>
<dt><code>item</code></dt>
<dd>
<p>the item on the questionaire, as a factor</p>
</dd>
<dt><code>resp</code></dt>
<dd>
<p>the subject's response to the item - an ordered factor with levels <code>no</code> &lt; <code>perhaps</code> &lt; <code>yes</code></p>
</dd>
<dt><code>id</code></dt>
<dd>
<p>the subject identifier, as a factor</p>
</dd>
<dt><code>btype</code></dt>
<dd>
<p>behavior type - a factor with levels <code>curse</code>, <code>scold</code> and <code>shout</code></p>
</dd>
<dt><code>situ</code></dt>
<dd>
<p>situation type - a factor with levels <code>other</code> and <code>self</code> indicating other-to-blame and self-to-blame</p>
</dd>
<dt><code>mode</code></dt>
<dd>
<p>behavior mode - a factor with levels <code>want</code> and <code>do</code></p>
</dd>
<dt><code>r2</code></dt>
<dd>
<p>dichotomous version of the response - a factor with levels <code>N</code> and <code>Y</code></p>
</dd>
</dl>
<h3>Source</h3>
<p><a href="http://bear.soe.berkeley.edu/EIRM/">http://bear.soe.berkeley.edu/EIRM/</a></p>
<h3>References</h3>
<p>De Boeck and Wilson (2004), <em>Explanatory Item Response Models</em>, Springer.</p>
<h3>Examples</h3>
<pre>
str(VerbAgg)
## Show howr2 := h(resp) is defined:
with(VerbAgg, stopifnot( identical(r2, {
 r &lt;- factor(resp, ordered=FALSE); levels(r) &lt;- c("N","Y","Y"); r})))xtabs(~ item + resp, VerbAgg)
xtabs(~ btype + resp, VerbAgg)
round(100 * ftable(prop.table(xtabs(~ situ + mode + resp, VerbAgg), 1:2), 1))
person &lt;- unique(subset(VerbAgg, select = c(id, Gender, Anger)))
require(lattice)
densityplot(~ Anger, person, groups = Gender, auto.key = list(columns = 2),
xlab = "Trait Anger score (STAXI)")if(lme4:::testLevel() &gt;= 3) { ## takes about 15 sec
print(fmVA &lt;- glmer(r2 ~ (Anger + Gender + btype + situ)^2 +
 (1|id) + (1|item), family = binomial, data =
 VerbAgg), corr=FALSE)
}
 ## much faster but less accurate
print(fmVA0 &lt;- glmer(r2 ~ (Anger + Gender + btype + situ)^2 +
(1|id) + (1|item), family = binomial, data =
VerbAgg, nAGQ=0L), corr=FALSE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-97081.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-97081.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-verbagg.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-97081.json';</script>