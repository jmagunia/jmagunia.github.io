---
title: R Dataset / Package pscl / RockTheVote
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">RockTheVote</span> data set which pertains to Voter turnout experiment, using Rock The Vote ads. The <span class="mono">RockTheVote</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">RockTheVote</span> data set in R by issuing the following command at the console <span class="mono">data("RockTheVote")</span>. This will load the data into a variable called <span class="mono">RockTheVote</span>. If R says the <span class="mono">RockTheVote</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47564.csv">RockTheVote R data set</a></span>. The size of this file is about 2,779 bytes.</p><h2>Voter turnout experiment, using Rock The Vote ads</h2>
<h3>Description</h3>
<p>Voter turnout data spanning 85 cable TV systems, randomly allocated to a voter mobilization experiment targetting 18-19 year olds with "Rock the Vote" television advertisments</p>
<h3>Usage</h3>
<pre>data(RockTheVote)</pre>
<h3>Format</h3>
<p>A data frame with 85 observations on the following 6 variables.</p>
<dl>
<dt><code>strata</code></dt>
<dd>
<p>numeric, experimental strata</p>
</dd>
<dt><code>treated</code></dt>
<dd>
<p>numeric, 1 if a treated cable system, 0 otherwise</p>
</dd>
<dt><code>r</code></dt>
<dd>
<p>numeric, number of 18 and 19 year olds turning out</p>
</dd>
<dt><code>n</code></dt>
<dd>
<p>numeric, number of 19 and 19 year olds registered</p>
</dd>
<dt><code>p</code></dt>
<dd>
<p>numeric, proportion of 18 and 19 year olds turning out</p>
</dd>
<dt><code>treatedIndex</code></dt>
<dd>
<p>numeric, a counter indexing the 42 treated units</p>
</dd>
</dl>
<h3>Details</h3>
<p>Green and Vavreck (2008) implemented a cluster-randomized experimental design in assessing the effects of a voter mobilization treatment in the 2004 U.S. Presidential election. The clusters in this design are geographic areas served by a single cable television system. So as to facilitate analysis, the researchers restricted their attention to small cable systems whose reach is limited to a single zip code. Further, since the experiment was fielded during the last week of the presidential election, the researchers restricted their search to cable systems that were not in the 16 hotly-contested “battleground” states (as designated by the <em>Los Angeles Times</em>).</p>
<p>Eighty-five cable systems were available for randomization and were assigned to treatment after stratification on previous turnout levels in presidential elections (as determined from analysis of the corresponding states' voter registration files). Each cable system was matched with one or sometimes two other cable systems in the same state, yielding 40 strata. Then within each strata, cable systems were randomly assigned to treatment and control conditions. Strata 3, 8 and 25 have two control cable systems and 1 treated system each, while strata 6 and 20 have two treated cable systems and one control system. The remaining 35 strata have 1 treated cable system and 1 control system. In this way there are 38 + 4 = 42 treated systems, spanning 40 experiment strata.</p>
<p>The treatment involved researchers purchasing prime-time advertising spots on four channels in the respective cable system in which the researchers aired voter mobilization ads. The ads were produced by <em>Rock the Vote</em>, targeted at younger voters, and aired four times per night, per channel, over the last eight days of the election campaign. After the election, public records were consulted to assemble data on turnout levels in the treated and control cable systems. In the analysis reported in Green and Vavreck (2008), the researchers focused on turnout among registered voters aged 18 and 19 years old.</p>
<h3>References</h3>
<p>Green, Donald P. and Lynn Vavreck. 2008. Analysis of Cluster-Randomized Experiments: A Comparison of Alternative Estimation Approaches. <em>Political Analysis</em> 16:138-152.</p>
<p>Jackman, Simon, 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey. Example 7.9.</p>
<h3>Examples</h3>
<pre>
data(RockTheVote)
## estimate MLEs of treatment effects
deltaFunction &lt;- function(data){
model &lt;- glm(cbind(r,n-r)~treated,
 data=data,
 family=binomial)
c(coef(model)[2],
confint(model)[2,])
}
tmp &lt;- by(RockTheVote,
as.factor(RockTheVote$strata),
deltaFunction)tmp &lt;- matrix(unlist(tmp),ncol=3,byrow=TRUE)indx &lt;- order(tmp[,1])plot(y=1:40,
 x=tmp[indx,1],
 pch=16,cex=1.25,
 xlim=range(tmp),
 ylab="",
 axes=FALSE,
 xlab="Estimated Treatment Effect (MLEs, Logit Scale)")
text(y=1:40,
 x=par()$usr[1],
 pos=4,
 as.character((1:40)[indx]),
 cex=.5)
segments(x0=tmp[indx,2],
 x1=tmp[indx,3],
 y0=1:40,
 y1=1:40)
axis(1)
axis(3)
abline(v=0)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47564.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47564.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-rockthevote.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47564.json';</script>