---
title: R Dataset / Package psych / Schmid
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Schmid</span> data set which pertains to 12 variables created by Schmid and Leiman to show the Schmid-Leiman Transformation. The <span class="mono">Schmid</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Schmid</span> data set in R by issuing the following command at the console <span class="mono">data("Schmid")</span>. This will load the data into a variable called <span class="mono">Schmid</span>. If R says the <span class="mono">Schmid</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-11795.csv">Schmid R data set</a></span>. The size of this file is about 1,020 bytes.</p><h2>12 variables created by Schmid and Leiman to show the Schmid-Leiman Transformation</h2>
<h3>Description</h3>
<p>John Schmid and John M. Leiman (1957) discuss how to transform a hierarchical factor structure to a bifactor structure. Schmid contains the example 12 x 12 correlation matrix. schmid.leiman is a 12 x 12 correlation matrix with communalities on the diagonal. This can be used to show the effect of correcting for attenuation. Two additional data sets are taken from Chen et al. (2006).</p>
<h3>Usage</h3>
<pre>data(Schmid)</pre>
<h3>Details</h3>
<p>Two artificial correlation matrices from Schmid and Leiman (1957). One real and one artificial covariance matrices from Chen et al. (2006).</p>
<ul>
<li>
<p>Schmid: a 12 x 12 artificial correlation matrix created to show the Schmid-Leiman transformation.</p>
</li>
<li>
<p>schmid.leiman: A 12 x 12 matrix with communalities on the diagonal. Treating this as a covariance matrix shows the 6 x 6 factor solution</p>
</li>
<li>
<p>Chen: An 18 x 18 covariance matrix of health related quality of life items from Chen et al. (2006). Number of observations = 403. The first item is a measure of the quality of life. The remaining 17 items form four subfactors: The items are (a) Cognition subscale: “Have difficulty reasoning and solving problems?" “React slowly to things that were said or done?"; “Become confused and start several actions at a time?" “Forget where you put things or appointments?"; “Have difficulty concentrating?" (b) Vitality subscale: “Feel tired?" “Have enough energy to do the things you want?" (R) “Feel worn out?" ; “Feel full of pep?" (R). (c) Mental health subscale: “Feel calm and peaceful?"(R) “Feel downhearted and blue?"; “Feel very happy"(R) ; “Feel very nervous?" ; “Feel so down in the dumps nothing could cheer you up? (d) Disease worry subscale: “Were you afraid because of your health?"; “Were you frustrated about your health?"; “Was your health a worry in your life?" .</p>
</li>
<li>
<p>West: A 16 x 16 artificial covariance matrix from Chen et al. (2006).</p>
</li>
</ul>
<h3>Source</h3>
<p>John Schmid Jr. and John. M. Leiman (1957), The development of hierarchical factor solutions.Psychometrika, 22, 83-90.</p>
<p>F.F. Chen, S.G. West, and K.H. Sousa.(2006) A comparison of bifactor and second-order models of quality of life. Multivariate Behavioral Research, 41(2):189-225, 2006.</p>
<h3>References</h3>
<p>Y.-F. Yung, D.Thissen, and L.D. McLeod. (1999) On the relationship between the higher-order factor model and the hierarchical factor model. Psychometrika, 64(2):113-128, 1999.</p>
<h3>Examples</h3>
<pre>
data(Schmid)
cor.plot(Schmid,TRUE)
print(fa(Schmid,6,rotate="oblimin"),cut=0)#shows an oblique solution
round(cov2cor(schmid.leiman),2)
cor.plot(cov2cor(West),TRUE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-11795.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-11795.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-schmid.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-11795.json';</script>