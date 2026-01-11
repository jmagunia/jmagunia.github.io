---
title: R Dataset / Package DAAG / science
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">science</span> data set which pertains to School Science Survey Data. The <span class="mono">science</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">science</span> data set in R by issuing the following command at the console <span class="mono">data("science")</span>. This will load the data into a variable called <span class="mono">science</span>. If R says the <span class="mono">science</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-42162.csv">science R data set</a></span>. The size of this file is about 51,215 bytes.</p><h2>School Science Survey Data</h2>
<h3>Description</h3>
<p>The <code>science</code> data frame has 1385 rows and 7 columns.</p>
<p>The data are on attitudes to science, from a survey where there were results from 20 classes in private schools and 46 classes in public schools.</p>
<h3>Usage</h3>
<pre>science</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>State</dt>
<dd>
<p>a factor with levels <code>ACT</code> Australian Capital Territory, <code>NSW</code> New South Wales</p>
</dd>
<dt>PrivPub</dt>
<dd>
<p>a factor with levels <code>private</code> school, <code>public</code> school</p>
</dd>
<dt>school</dt>
<dd>
<p>a factor, coded to identify the school</p>
</dd>
<dt>class</dt>
<dd>
<p>a factor, coded to identify the class</p>
</dd>
<dt>sex</dt>
<dd>
<p>a factor with levels <code>f</code>, <code>m</code></p>
</dd>
<dt>like</dt>
<dd>
<p>a summary score based on two of the questions, on a scale from 1 (dislike) to 12 (like)</p>
</dd>
<dt>Class</dt>
<dd>
<p>a factor with levels corresponding to each class</p>
</dd>
</dl>
<h3>Source</h3>
<p>Francine Adams, Rosemary Martin and Murali Nayadu, Australian National University</p>
<h3>Examples</h3>
<pre>
classmeans &lt;- with(science, aggregate(like, by=list(PrivPub, Class), mean))
names(classmeans) &lt;- c("PrivPub","Class","like")
dim(classmeans)attach(classmeans)
boxplot(split(like, PrivPub), ylab = "Class average of attitude to science score", boxwex = 0.4)
rug(like[PrivPub == "private"], side = 2)
rug(like[PrivPub == "public"], side = 4)
detach(classmeans)
if(require(lme4, quietly=TRUE)) {
science.lmer &lt;- lmer(like ~ sex + PrivPub + (1 | school) +
 (1 | school:class), data = science,
 na.action=na.exclude)
summary(science.lmer)
science1.lmer &lt;- lmer(like ~ sex + PrivPub + (1 | school:class),
data = science, na.action=na.exclude)
summary(science1.lmer)
ranf &lt;- ranef(obj = science1.lmer, drop=TRUE)[["school:class"]]
flist &lt;- science1.lmer@flist[["school:class"]]
privpub &lt;- science[match(names(ranf), flist), "PrivPub"]
num &lt;- unclass(table(flist)); numlabs &lt;- pretty(num)
## Plot effect estimates vs numbers
plot(sqrt(num), ranf, xaxt="n", pch=c(1,3)[as.numeric(privpub)],
 xlab="# in class (square root scale)",
 ylab="Estimate of class effect")
lines(lowess(sqrt(num[privpub=="private"]),
 ranf[privpub=="private"], f=1.1), lty=2)
lines(lowess(sqrt(num[privpub=="public"]),
 ranf[privpub=="public"], f=1.1), lty=3)
axis(1, at=sqrt(numlabs), labels=paste(numlabs))
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-42162.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-42162.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-science.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-42162.json';</script>