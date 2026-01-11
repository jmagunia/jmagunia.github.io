---
title: R Dataset / Package MASS / housing
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">housing</span> data set which pertains to Frequency Table from a Copenhagen Housing Conditions Survey. The <span class="mono">housing</span> data set is found in the <span class="mono">MASS</span> R package. You can load the <span class="mono">housing</span> data set in R by issuing the following command at the console <span class="mono">data("housing")</span>. This will load the data into a variable called <span class="mono">housing</span>. If R says the <span class="mono">housing</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("MASS")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-16913.csv">housing R data set</a></span>. The size of this file is about 14,953 bytes.</p><h2>Frequency Table from a Copenhagen Housing Conditions Survey</h2>
<h3>Description</h3>
<p>The <code>housing</code> data frame has 72 rows and 5 variables.</p>
<h3>Usage</h3>
<pre>
housing
</pre>
<h3>Format</h3>
<dl>
<dt><code>Sat</code></dt>
<dd>
<p>Satisfaction of householders with their present housing circumstances, (High, Medium or Low, ordered factor).</p>
</dd>
<dt><code>Infl</code></dt>
<dd>
<p>Perceived degree of influence householders have on the management of the property (High, Medium, Low).</p>
</dd>
<dt><code>Type</code></dt>
<dd>
<p>Type of rental accommodation, (Tower, Atrium, Apartment, Terrace).</p>
</dd>
<dt><code>Cont</code></dt>
<dd>
<p>Contact residents are afforded with other residents, (Low, High).</p>
</dd>
<dt><code>Freq</code></dt>
<dd>
<p>Frequencies: the numbers of residents in each class.</p>
</dd>
</dl>
<h3>Source</h3>
<p>Madsen, M. (1976) Statistical analysis of multiple contingency tables. Two examples. <em>Scand. J. Statist.</em> <b>3</b>, 97–106.</p>
<p>Cox, D. R. and Snell, E. J. (1984) <em>Applied Statistics, Principles and Examples</em>. Chapman &amp; Hall.</p>
<h3>References</h3>
<p>Venables, W. N. and Ripley, B. D. (2002) <em>Modern Applied Statistics with S.</em> Fourth edition. Springer.</p>
<h3>Examples</h3>
<pre>
options(contrasts = c("contr.treatment", "contr.poly"))# Surrogate Poisson models
house.glm0 &lt;- glm(Freq ~ Infl*Type*Cont + Sat, family = poisson,
data = housing)
summary(house.glm0, cor = FALSE)addterm(house.glm0, ~. + Sat:(Infl+Type+Cont), test = "Chisq")house.glm1 &lt;- update(house.glm0, . ~ . + Sat*(Infl+Type+Cont))
summary(house.glm1, cor = FALSE)1 - pchisq(deviance(house.glm1), house.glm1$df.residual)dropterm(house.glm1, test = "Chisq")addterm(house.glm1, ~. + Sat:(Infl+Type+Cont)^2, test="Chisq")hnames &lt;- lapply(housing[, -5], levels) # omit Freq
newData &lt;- expand.grid(hnames)
newData$Sat &lt;- ordered(newData$Sat)
house.pm &lt;- predict(house.glm1, newData,
type = "response")# poisson means
house.pm &lt;- matrix(house.pm, ncol = 3, byrow = TRUE,
 dimnames = list(NULL, hnames[[1]]))
house.pr &lt;- house.pm/drop(house.pm %*% rep(1, 3))
cbind(expand.grid(hnames[-1]), round(house.pr, 2))# Iterative proportional scaling
loglm(Freq ~ Infl*Type*Cont + Sat*(Infl+Type+Cont), data = housing)
# multinomial model
library(nnet)
(house.mult&lt;- multinom(Sat ~ Infl + Type + Cont, weights = Freq,
 data = housing))
house.mult2 &lt;- multinom(Sat ~ Infl*Type*Cont, weights = Freq,
data = housing)
anova(house.mult, house.mult2)house.pm &lt;- predict(house.mult, expand.grid(hnames[-1]), type = "probs")
cbind(expand.grid(hnames[-1]), round(house.pm, 2))# proportional odds model
house.cpr &lt;- apply(house.pr, 1, cumsum)
logit &lt;- function(x) log(x/(1-x))
house.ld &lt;- logit(house.cpr[2, ]) - logit(house.cpr[1, ])
(ratio &lt;- sort(drop(house.ld)))
mean(ratio)(house.plr &lt;- polr(Sat ~ Infl + Type + Cont,
 data = housing, weights = Freq))house.pr1 &lt;- predict(house.plr, expand.grid(hnames[-1]), type = "probs")
cbind(expand.grid(hnames[-1]), round(house.pr1, 2))Fr &lt;- matrix(housing$Freq, ncol=3, byrow = TRUE)
2*sum(Fr*log(house.pr/house.pr1))house.plr2 &lt;- stepAIC(house.plr, ~.^2)
house.plr2$anova
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-16913.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-16913.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mass-housing.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-16913.json';</script>