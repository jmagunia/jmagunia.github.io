---
title: R Dataset / Package HistData / CushnyPeeblesN
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">CushnyPeeblesN</span> data set which pertains to Cushny-Peebles Data: Soporific Effects of Scopolamine Derivatives. The <span class="mono">CushnyPeeblesN</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">CushnyPeeblesN</span> data set in R by issuing the following command at the console <span class="mono">data("CushnyPeeblesN")</span>. This will load the data into a variable called <span class="mono">CushnyPeeblesN</span>. If R says the <span class="mono">CushnyPeeblesN</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86397.csv">CushnyPeeblesN R data set</a></span>. The size of this file is about 141 bytes.</p><h2>Cushny-Peebles Data: Soporific Effects of Scopolamine Derivatives</h2>
<h3>Description</h3>
<p>Cushny and Peebles (1905) studied the effects of hydrobromides related to scopolamine and atropine in producing sleep. The sleep of mental patients was measured without hypnotic (<code>Control</code>) and after treatment with one of three drugs: L. hyoscyamine hydrobromide (<code>L_hyoscyamine</code>), L. hyoscine hydrobromide (<code>L_hyoscyine</code>), and a mixture (racemic) form, <code>DL_hyoscine</code>, called atropine. The L (levo) and D (detro) form of a given molecule are optical isomers (mirror images).</p>
<p>The drugs were given on alternate evenings, and the hours of sleep were compared with the intervening control night. Each of the drugs was tested in this manner a varying number of times in each subject. The average number of hours of sleep for each treatment is the response.</p>
<p>Student (1908) used these data to illustrate the paired-sample t-test in small samples, testing the hypothesis that the mean difference between a given drug and the control condition was zero. This data set became well known when used by Fisher (1925). Both Student and Fisher had problems labeling the drugs correctly (see Senn &amp; Richardson (1994)), and consequently came to wrong conclusions.</p>
<p>But as well, the sample sizes (number of nights) for each mean differed widely, ranging from 3-9, and this was not taken into account in their analyses. To allow weighted analyses, the number of observations for each mean is contained in the data frame <code>CushnyPeeblesN</code>.</p>
<h3>Usage</h3>
<pre>
data(CushnyPeebles)
data(CushnyPeeblesN)
</pre>
<h3>Format</h3>
<p><code>CushnyPeebles</code>: A data frame with 11 observations on the following 4 variables.</p>
<dl>
<dt><code>Control</code></dt>
<dd>
<p>a numeric vector: mean hours of sleep</p>
</dd>
<dt><code>L_hyoscyamine</code></dt>
<dd>
<p>a numeric vector: mean hours of sleep</p>
</dd>
<dt><code>L_hyoscine</code></dt>
<dd>
<p>a numeric vector: mean hours of sleep</p>
</dd>
<dt><code>D_hyoscine</code></dt>
<dd>
<p>a numeric vector: mean hours of sleep</p>
</dd>
</dl>
<p><code>CushnyPeeblesN</code>: A data frame with 11 observations on the following 4 variables.</p>
<dl>
<dt><code>Control</code></dt>
<dd>
<p>a numeric vector: number of observations</p>
</dd>
<dt><code>L_hyoscyamine</code></dt>
<dd>
<p>a numeric vector: number of observations</p>
</dd>
<dt><code>L_hyoscine</code></dt>
<dd>
<p>a numeric vector: number of observations</p>
</dd>
<dt><code>DL_hyoscine</code></dt>
<dd>
<p>a numeric vector: number of observations</p>
</dd>
</dl>
<h3>Details</h3>
<p>The last patient (11) has no <code>Control</code> observations, and so is often excluded in analyses or other versions of this data set.</p>
<h3>Source</h3>
<p>Cushny, A. R., and Peebles, A. R. (1905), "The Action of Optical Isomers. II: Hyoscines," <em>Journal of Physiology</em>, 32, 501-510.</p>
<p>Senn, Stephen, Data from Cushny and Peebles, <a href="http://www.senns.demon.co.uk/Data/Cushny.xls">http://www.senns.demon.co.uk/Data/Cushny.xls</a></p>
<h3>References</h3>
<p>Fisher, R. A. (1925), <em>Statistical Methods for Research Workers</em>, Edinburgh and London: Oliver &amp; Boyd.</p>
<p>Student (1908), "The Probable Error of a Mean," <em>Biometrika</em>, 6, 1-25.</p>
<p>Senn, S.J. and Richardson, W. (1994), "The first t-test", <em>Statistics in Medicine</em>, 13, 785-803.</p>
<h3>See Also</h3>
<p><code>sleep</code> for an alternative form of this data set.</p>
<h3>Examples</h3>
<pre>
data(CushnyPeebles)
# quick looks at the data
plot(CushnyPeebles)
boxplot(CushnyPeebles, ylab="Hours of Sleep", xlab="Treatment")##########################
# Repeated measures MANOVA
require(car)CPmod &lt;- lm(cbind(Control, L_hyoscyamine, L_hyoscine, DL_hyoscine) ~ 1, data=CushnyPeebles)# Assign within-S factor and contrasts
Treatment &lt;- factor(colnames(CushnyPeebles), levels=colnames(CushnyPeebles))
contrasts(Treatment) &lt;- matrix(
c(-3, 1, 1, 1,
 0,-2, 1, 1,
 0, 0,-1, 1), ncol=3)
colnames(contrasts(Treatment)) &lt;- c("Control.Drug", "L.DL", "L_hy.DL_hy")Treats &lt;- data.frame(Treatment)
(CPaov &lt;- Anova(CPmod, idata=Treats, idesign= ~Treatment))
summary(CPaov, univariate=FALSE)if (require(heplots)) {
heplot(CPmod, idata=Treats, idesign= ~Treatment, iterm="Treatment", 
xlab="Control vs Drugs", ylab="L vs DL drug")
pairs(CPmod, idata=Treats, idesign= ~Treatment, iterm="Treatment")
}################################
# reshape to long format, add NsCPlong &lt;- stack(CushnyPeebles)[,2:1]
colnames(CPlong) &lt;- c("treatment", "sleep")
CPN &lt;- stack(CushnyPeeblesN)
CPlong &lt;- data.frame(patient=rep(1:11,4), CPlong, n=CPN$values)
str(CPlong)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86397.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86397.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-cushnypeeblesn.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86397.json';</script>