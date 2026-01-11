---
title: R Dataset / Package datasets / crimtab
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">crimtab</span> data set which pertains to Student's 3000 Criminals Data. The <span class="mono">crimtab</span> data set is found in the <span class="mono">datasets</span> R package. You can load the <span class="mono">crimtab</span> data set in R by issuing the following command at the console <span class="mono">data("crimtab")</span>. This will load the data into a variable called <span class="mono">crimtab</span>. If R says the <span class="mono">crimtab</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("datasets")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-78939.csv">crimtab R data set</a></span>. The size of this file is about 2,143 bytes.</p><h2>Student's 3000 Criminals Data</h2>
<h3>Description</h3>
<p>Data of 3000 male criminals over 20 years old undergoing their sentences in the chief prisons of England and Wales.</p>
<h3>Usage</h3>
<pre>crimtab</pre>
<h3>Format</h3>
<p>A <code>table</code> object of <code>integer</code> counts, of dimension <i>42 * 22</i> with a total count, <code>sum(crimtab)</code> of 3000.</p>
<p>The 42 <code>rownames</code> (<code>"9.4"</code>, <code>"9.5"</code>, ...) correspond to midpoints of intervals of finger lengths whereas the 22 column names (<code>colnames</code>) (<code>"142.24"</code>, <code>"144.78"</code>, ...) correspond to (body) heights of 3000 criminals, see also below.</p>
<h3>Details</h3>
<p>Student is the pseudonym of William Sealy Gosset. In his 1908 paper he wrote (on page 13) at the beginning of section VI entitled <em>Practical Test of the forgoing Equations</em>:</p>
<p>“Before I had succeeded in solving my problem analytically, I had endeavoured to do so empirically. The material used was a correlation table containing the height and left middle finger measurements of 3000 criminals, from a paper by W. R. MacDonell (<em>Biometrika</em>, Vol. I., p. 219). The measurements were written out on 3000 pieces of cardboard, which were then very thoroughly shuffled and drawn at random. As each card was drawn its numbers were written down in a book, which thus contains the measurements of 3000 criminals in a random order. Finally, each consecutive set of 4 was taken as a sample—750 in all—and the mean, standard deviation, and correlation of each sample determined. The difference between the mean of each sample and the mean of the population was then divided by the standard deviation of the sample, giving us the <em>z</em> of Section III.”</p>
<p>The table is in fact page 216 and not page 219 in MacDonell(1902). In the MacDonell table, the middle finger lengths were given in mm and the heights in feet/inches intervals, they are both converted into cm here. The midpoints of intervals were used, e.g., where MacDonell has <i>4' 7''9/16 -- 8''9/16</i>, we have 142.24 which is 2.54*56 = 2.54*(<i>4' 8''</i>).</p>
<p>MacDonell credited the source of data (page 178) as follows: <em>The data on which the memoir is based were obtained, through the kindness of Dr Garson, from the Central Metric Office, New Scotland Yard...</em> He pointed out on page 179 that : <em>The forms were drawn at random from the mass on the office shelves; we are therefore dealing with a random sampling.</em></p>
<h3>Source</h3>
<p><a href="http://pbil.univ-lyon1.fr/R/donnees/criminals1902.txt">http://pbil.univ-lyon1.fr/R/donnees/criminals1902.txt</a> thanks to Jean R. Lobry and Anne-Béatrice Dufour.</p>
<h3>References</h3>
<p>Garson, J.G. (1900) The metric system of identification of criminals, as used in in Great Britain and Ireland. <em>The Journal of the Anthropological Institute of Great Britain and Ireland</em> <b>30</b>, 161–198.</p>
<p>MacDonell, W.R. (1902) On criminal anthropometry and the identification of criminals. <em>Biometrika</em> <b>1</b>, 2, 177–227.</p>
<p>Student (1908) The probable error of a mean. <em>Biometrika</em> <b>6</b>, 1–25.</p>
<h3>Examples</h3>
<pre>
require(stats)
dim(crimtab)
utils::str(crimtab)
## for nicer printing:
local({cT &lt;- crimtab
 colnames(cT) &lt;- substring(colnames(cT), 2, 3)
 print(cT, zero.print = " ")
})## Repeat Student's experiment:# 1) Reconstitute 3000 raw data for heights in inches and rounded to
#nearest integer as in Student's paper:(heIn &lt;- round(as.numeric(colnames(crimtab)) / 2.54))
d.hei &lt;- data.frame(height = rep(heIn, colSums(crimtab)))# 2) shuffle the data:set.seed(1)
d.hei &lt;- d.hei[sample(1:3000), , drop = FALSE]# 3) Make 750 samples each of size 4:d.hei$sample &lt;- as.factor(rep(1:750, each = 4))# 4) Compute the means and standard deviations (n) for the 750 samples:h.mean &lt;- with(d.hei, tapply(height, sample, FUN = mean))
h.sd &lt;- with(d.hei, tapply(height, sample, FUN = sd)) * sqrt(3/4)# 5) Compute the difference between the mean of each sample and
#the mean of the population and then divide by the
#standard deviation of the sample:zobs &lt;- (h.mean - mean(d.hei[,"height"]))/h.sd# 6) Replace infinite values by +/- 6 as in Student's paper:zobs[infZ &lt;- is.infinite(zobs)] # 3 of them
zobs[infZ] &lt;- 6 * sign(zobs[infZ])# 7) Plot the distribution:require(grDevices); require(graphics)
hist(x = zobs, probability = TRUE, xlab = "Student's z",
 col = grey(0.8), border = grey(0.5),
 main = "Distribution of Student's z scorefor 'crimtab' data")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-78939.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-78939.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-datasets-crimtab.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-78939.json';</script>