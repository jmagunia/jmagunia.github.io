---
title: R Dataset / Package pscl / unionDensity
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">unionDensity</span> data set which pertains to cross national rates of trade union density. The <span class="mono">unionDensity</span> data set is found in the <span class="mono">pscl</span> R package. You can load the <span class="mono">unionDensity</span> data set in R by issuing the following command at the console <span class="mono">data("unionDensity")</span>. This will load the data into a variable called <span class="mono">unionDensity</span>. If R says the <span class="mono">unionDensity</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("pscl")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-39173.csv">unionDensity R data set</a></span>. The size of this file is about 805 bytes.</p><h2>cross national rates of trade union density</h2>
<h3>Description</h3>
<p>Cross-national data on relative size of the trade unions and predictors, in 20 countries. Two of the predictors are highly collinear, and are the source of a debate between Stephens and Wallerstein (1991), later reviewed by Western and Jackman (1994).</p>
<h3>Usage</h3>
<pre>data(unionDensity)
</pre>
<h3>Format</h3>
<ul>
<li>
<p><code>union</code>numeric, percentage of the total number of wage and salary earners plus the unemployed who are union members, measured between 1975 and 1980, with most of the data drawn from 1979</p>
</li>
<li>
<p><code>left</code>numeric, an index tapping the extent to which parties of the left have controlled governments since 1919, due to Wilensky (1981).</p>
</li>
<li>
<p><code>size</code>numeric, log of labor force size, defined as the number of wage and salary earners, plus the unemployed</p>
</li>
<li>
<p><code>concen</code>numeric, percentage of employment, shipments, or production accounted for by the four largest enterprises in a particular industry, averaged over industries (with weights proportional to the size of the industry) and the resulting measure is normalized such that the United States scores a 1.0, and is due to Pryor (1973). Some of the scores on this variable are imputed using procedures described in Stephens and Wallerstein (1991, 945).</p>
</li>
</ul>
<h3>Source</h3>
<p>Pryor, Frederic. 1973. <em>Property and Industrial Organization in Communist and Capitalist Countries</em>. Bloomington: Indiana University Press.</p>
<p>Stephens, John and Michael Wallerstein. 1991. Industrial Concentration, Country Size and Trade Union Membership. <em>American Political Science Review</em> 85:941-953.</p>
<p>Western, Bruce and Simon Jackman. 1994. Bayesian Inference for Comparative Research. <em>American Political Science Review</em> 88:412-423.</p>
<p>Wilensky, Harold L. 1981. Leftism, Catholicism, Democratic Corporatism: The Role of Political Parties in Recemt Welfare State Development. In <em>The Development of Welfare States in Europe and America</em>, ed. Peter Flora and Arnold J. Heidenheimer. New Brunswick: Transaction Books.</p>
<h3>References</h3>
<p>Jackman, Simon. 2009. <em>Bayesian Analysis for the Social Sciences</em>. Wiley: Hoboken, New Jersey.</p>
<h3>Examples</h3>
<pre>
data(unionDensity)
summary(unionDensity)
pairs(unionDensity,
labels=c("Union\nDensity",
"Left\nGovernment",
"log Size of\nLabor Force",
"Economic\nConcentration"),
lower.panel=function(x,y,digits=2){
r &lt;- cor(x,y)
par(usr=c(0,1,0,1))
text(.5,.5,
 format(c(r,0.123456789),digits=digits)[1],
 cex=1.5)
}
)
ols &lt;- lm(union ~ left + size + concen,
data=unionDensity)
summary(ols)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-39173.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-39173.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-pscl-uniondensity.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-39173.json';</script>