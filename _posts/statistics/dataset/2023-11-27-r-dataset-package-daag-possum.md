---
title: R Dataset / Package DAAG / possum
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">possum</span> data set which pertains to Possum Measurements. The <span class="mono">possum</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">possum</span> data set in R by issuing the following command at the console <span class="mono">data("possum")</span>. This will load the data into a variable called <span class="mono">possum</span>. If R says the <span class="mono">possum</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-24907.csv">possum R data set</a></span>. The size of this file is about 6,399 bytes.</p><h2>Possum Measurements</h2>
<h3>Description</h3>
<p>The <code>possum</code> data frame consists of nine morphometric measurements on each of 104 mountain brushtail possums, trapped at seven sites from Southern Victoria to central Queensland.</p>
<h3>Usage</h3>
<pre>possum</pre>
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
boxplot(earconch~sex, data=possum)
pause()sex &lt;- as.integer(possum$sex)
oldpar &lt;- par(oma=c(2,4,5,4))
pairs(possum[, c(9:11)], pch=c(0,2:7), col=c("red","blue"),
labels=c("tail\nlength","foot\nlength","ear conch\nlength"))
chh &lt;- par()$cxy[2]; xleg &lt;- 0.05; yleg &lt;- 1.04
oldpar &lt;- par(xpd=TRUE)
legend(xleg, yleg, c("Cambarville", "Bellbird", "Whian Whian",
"Byrangery", "Conondale","Allyn River", "Bulburin"), pch=c(0,2:7),
x.intersp=1, y.intersp=0.75, cex=0.8, xjust=0, bty="n", ncol=4)
text(x=0.2, y=yleg - 2.25*chh, "female", col="red", cex=0.8, bty="n")
text(x=0.75, y=yleg - 2.25*chh, "male", col="blue", cex=0.8, bty="n")
par(oldpar)
pause()sapply(possum[,6:14], function(x)max(x,na.rm=TRUE)/min(x,na.rm=TRUE))
pause()here &lt;- na.omit(possum$footlgth)
possum.prc &lt;- princomp(possum[here, 6:14])
pause()plot(possum.prc$scores[,1] ~ possum.prc$scores[,2],
col=c("red","blue")[as.numeric(possum$sex[here])],
pch=c(0,2:7)[possum$site[here]], xlab = "PC1", ylab = "PC2")
# NB: We have abbreviated the axis titles
chh &lt;- par()$cxy[2]; xleg &lt;- -15; yleg &lt;- 20.5
oldpar &lt;- par(xpd=TRUE)
legend(xleg, yleg, c("Cambarville", "Bellbird", "Whian Whian",
"Byrangery", "Conondale","Allyn River", "Bulburin"), pch=c(0,2:7),
x.intersp=1, y.intersp=0.75, cex=0.8, xjust=0, bty="n", ncol=4)
text(x=-9, y=yleg - 2.25*chh, "female", col="red", cex=0.8, bty="n")
summary(possum.prc, loadings=TRUE, digits=2)
par(oldpar)
pause()require(MASS)
here &lt;- !is.na(possum$footlgth)
possum.lda &lt;- lda(site ~ hdlngth+skullw+totlngth+ taill+footlgth+
earconch+eye+chest+belly, data=possum, subset=here)
options(digits=4)
possum.lda$svd # Examine the singular values 
plot(possum.lda, dimen=3)
# Scatterplot matrix - scores on 1st 3 canonical variates (Figure 11.4)
possum.lda
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-24907.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-24907.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-possum.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-24907.json';</script>