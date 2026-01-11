---
title: R Dataset / Package pscl / absentee
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">absentee</span> data set which pertains to Absentee and Machine Ballots in Pennsylvania State Senate Races. The <span class="mono">absentee</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">absentee</span> data set in R by issuing the following command at the console <span class="mono">data("absentee")</span>. This will load the data into a variable called <span class="mono">absentee</span>. If R says the <span class="mono">absentee</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-99508.csv">absentee R data set</a></span>. The size of this file is about 849 bytes.</p><h2>Absentee and Machine Ballots in Pennsylvania State Senate Races</h2>
<h3>Description</h3>
<p>Absentee ballot outcomes contrasted with machine ballots, cast in Pennsylvania State Senate elections, selected districts, 1982-1993.</p>
<h3>Usage</h3>
<pre>data(absentee)</pre>
<h3>Format</h3>
<p>A data frame with 22 observations on the following 8 variables.</p>
<dl>
<dt><code>year</code></dt>
<dd>
<p>a numeric vector, year of election, 19xx</p>
</dd>
<dt><code>district</code></dt>
<dd>
<p>a numeric vector, Pennsylvania State Senate district</p>
</dd>
<dt><code>absdem</code></dt>
<dd>
<p>a numeric vector, absentee ballots cast for the Democratic candidate</p>
</dd>
<dt><code>absrep</code></dt>
<dd>
<p>a numeric vector, absentee ballots cast for the Republican candidate</p>
</dd>
<dt><code>machdem</code></dt>
<dd>
<p>a numeric vector, votes cast on voting machines for the Democratic candidate</p>
</dd>
<dt><code>machrep</code></dt>
<dd>
<p>a numeric vector, votes cast on voting machines for the Republican candidate</p>
</dd>
<dt><code>dabs</code></dt>
<dd>
<p>a numeric vector, Democratic margin among absentee ballots</p>
</dd>
<dt><code>dmach</code></dt>
<dd>
<p>a numeric vector, Democratic margin among ballots case on voting machines</p>
</dd>
</dl>
<h3>Details</h3>
<p>In November 1993, the state of Pennsylvania conducted elections for its state legislature. The result in the Senate election in the 2nd district (based in Philadelphia) was challenged in court, and ultimately overturned. The Democratic candidate won 19,127 of the votes cast by voting machine, while the Republican won 19,691 votes cast by voting machine, giving the Republican a lead of 564 votes. However, the Democrat won 1,396 absentee ballots, while the Republican won just 371 absentee ballots, more than offsetting the Republican lead based on the votes recorded by machines on election day. The Republican candidate sued, claiming that many of the absentee ballots were fraudulent. The judge in the case solicited expert analysis from Orley Ashenfelter, an economist at Princeton University. Ashenfelter examined the relationship between absentee vote margins and machine vote margins in 21 previous Pennsylvania Senate elections in seven districts in the Philadelphia area over the preceding decade.</p>
<h3>Source</h3>
<p>Ashenfelter, Orley. 1994. Report on Expected Asbentee Ballots. Typescript. Department of Economics, Princeton University.</p>
<h3>References</h3>
<p>Ashenfelter, Orley, Phillip Levine and David Zimmerman. 2003. <em>Statistics and Econometrics: Methods and Applications</em>. New York: John Wiley and Sons.</p>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey. Examples 2.13, 2.14, 2.15.</p>
<h3>Examples</h3>
<pre>
data(absentee)
summary(absentee)denom &lt;- absentee$absdem + absentee$absrep
y &lt;- (absentee$absdem - absentee$absrep)/denom * 100
denom &lt;- absentee$machdem + absentee$machrep
x &lt;- (absentee$machdem - absentee$machrep)/denom *100ols &lt;- lm(y ~ x,
subset=c(rep(TRUE,21),FALSE)## drop data point 22
)## predictions for disputed absentee point
yhat22 &lt;- predict(ols,
newdata=list(x=x[22]),
se.fit=TRUE,
interval="prediction")
tstat &lt;- (y[22]-yhat22$fit[,"fit"])/yhat22$se.fit
cat("tstat on actual outcome for obs 22:",tstat,"\n")
cat(paste("Pr(t&gt;",round(tstat,2),") i.e., one-sided:\n",sep=""))
cat(1-pt(tstat,df=yhat22$df),"\n")## make a picture
xseq &lt;- seq(min(x)-.1*diff(range(x)),
max(x)+.1*diff(range(x)),
length=100)
yhat &lt;- predict(ols,interval="prediction",
newdata=list(x=xseq))
plot(y~x,
 type="n",
 axes=FALSE,
 ylim=range(yhat,y),
 xlim=range(xseq),xaxs="i",
 xlab="Democratic Margin, Machine Ballots (Percentage Points)",
 ylab="Democratic Margin, Absentee Ballots (Percentage Points)")
polygon(x=c(xseq,rev(xseq)),## overlay 95% prediction CI
y=c(yhat[,"lwr"],rev(yhat[,"upr"])),
border=FALSE,
col=gray(.85))
abline(ols,lwd=2) ## overlay ols
points(x[-22],y[-22],pch=1) ## data
points(x[22],y[22],pch=16)## disputed data pointtext(x[22],y[22],
 "Disputed\nElection",
 cex=.75,
 adj=1.25)
axis(1)
axis(2)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-99508.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-99508.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-absentee.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-99508.json';</script>