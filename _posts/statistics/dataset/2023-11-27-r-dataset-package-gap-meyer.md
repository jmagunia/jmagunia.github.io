---
title: R Dataset / Package gap / meyer
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">meyer</span> data set which pertains to A pedigree data on 282 animals deriving from two generations. The <span class="mono">meyer</span> data set is found in the <span class="mono">gap</span> R package. You can load the <span class="mono">meyer</span> data set in R by issuing the following command at the console <span class="mono">data("meyer")</span>. This will load the data into a variable called <span class="mono">meyer</span>. If R says the <span class="mono">meyer</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("gap")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-86471.csv">meyer R data set</a></span>. The size of this file is about 4,884 bytes.</p><h2>A pedigree data on 282 animals deriving from two generations</h2>
<h3>Description</h3>
<p>A data frame attributed to Meyer (1989).</p>
<p>“The pedigrees for each of these 282 animals derive from an additional 24 base population (Generation 0) animals that do not have records of their own but, nevertheless, are of interest with respect to the inference on their own additive genetic values. Furthermore, it is presumed that these original 24 base animals are not related to each other. Therefore, the row dimension of u is 306 (282+24).” (Templeman \&amp; Rosa 2004)</p>
<h3>Usage</h3>
<pre>data(meyer)</pre>
<h3>Format</h3>
<p>A data frame containing 306 records</p>
<h3>Source</h3>
<p>Meyer K (1989). Restricted maximum likelihood to estimate variance components for animal models with several random effects using a derivative-free algorithm. Genetics, Selection, Evolution 21:317-340.</p>
<p>Tempelman RJ, Rosa GJM. Empirical Bayes Approaches to Mixed Model Inference in Quantitative Genetics. in Saxton AM (Ed). Genetic Analysis of Complex Traits Using SAS, chapter 7. SAS Institute Inc., Cary, NC, USA, 2004</p>
<h3>Examples</h3>
<pre>
## Not run: 
library(gap)
meyer &lt;- within(meyer,{
 g1 &lt;- ifelse(generation==1,1,0)
 g2 &lt;- ifelse(generation==2,1,0)
})
lm(y~-1+g1+g2,data=meyer)
library(MCMCglmm)
m &lt;-MCMCglmm(y~-1+g1+g2,random=animal~1,pedigree=meyer[,1:3],data=meyer,verbose=FALSE)
summary(m)
plot(m) meyer &lt;- within(meyer,{
 id &lt;- animal
 animal &lt;- ifelse(!is.na(animal),animal,0)
 dam &lt;- ifelse(!is.na(dam),dam,0)
 sire &lt;- ifelse(!is.na(sire),sire,0)
})
# library(kinship)
# A &lt;- with(meyer,kinship(animal,sire,dam))*2A &lt;- kin.morgan(meyer)$kin.matrix*2library(regress)
regress(y~-1+g1+g2,~A,data=meyer)
prior &lt;- list(R=list(V=1, nu=0.002), G=list(G1=list(V=1, nu=0.002)))
m2 &lt;- MCMCgrm(y~-1+g1+g2,prior,meyer,A,singular.ok=TRUE,verbose=FALSE)
summary(m2)
plot(m2) ## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-86471.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-86471.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-gap-meyer.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-86471.json';</script>