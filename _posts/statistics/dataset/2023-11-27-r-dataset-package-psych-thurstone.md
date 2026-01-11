---
title: R Dataset / Package psych / Thurstone
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Thurstone</span> data set which pertains to Seven data sets showing a bifactor solution.. The <span class="mono">Thurstone</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">Thurstone</span> data set in R by issuing the following command at the console <span class="mono">data("Thurstone")</span>. This will load the data into a variable called <span class="mono">Thurstone</span>. If R says the <span class="mono">Thurstone</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-65173.csv">Thurstone R data set</a></span>. The size of this file is about 688 bytes.</p><h2>Seven data sets showing a bifactor solution.</h2>
<h3>Description</h3>
<p>Holzinger-Swineford (1937) introduced the bifactor model of a general factor and uncorrelated group factors. The Holzinger data sets are original 14 * 14 matrix from their paper as well as a 9 *9 matrix used as an example by Joreskog. The Thurstone correlation matrix is a 9 * 9 matrix of correlations of ability items. The Reise data set is 16 * 16 correlation matrix of mental health items. The Bechtholdt data sets are both 17 x 17 correlation matrices of ability tests.</p>
<h3>Usage</h3>
<pre>
data(Thurstone)
data(Thurstone.33)
data(Holzinger)
data(Holzinger.9)
data(Bechtoldt)
data(Bechtoldt.1)
data(Bechtoldt.2)
data(Reise)
</pre>
<h3>Details</h3>
<p>Holzinger and Swineford (1937) introduced the bifactor model (one general factor and several group factors) for mental abilities. This is a nice demonstration data set of a hierarchical factor structure that can be analyzed using the <code>omega</code> function or using sem. The bifactor model is typically used in measures of cognitive ability.</p>
<p>There are several ways to analyze such data. One is to use the <code>omega</code> function to do a hierarchical factoring using the Schmid-Leiman transformation. This can then be done as an exploratory and then as a confirmatory model using <code>omegaSem</code>. Another way is to do a regular factor analysis and use either a <code>bifactor</code> or <code>biquartimin</code> rotation. These latter two functions implement the Jennrich and Bentler (2011) bifactor and biquartimin transformations. The <code>bifactor</code> rotation suffers from the problem of local minima (Mansolf and Reise, 2016) and thus a mixture of exploratory and confirmatory analysis might be preferred.</p>
<p>The 14 variables are ordered to reflect 3 spatial tests, 3 mental speed tests, 4 motor speed tests, and 4 verbal tests. The sample size is 355.</p>
<p>Another data set from Holzinger (Holzinger.9) represents 9 cognitive abilities (Holzinger, 1939) and is used as an example by Karl Joreskog (2003) for factor analysis by the MINRES algorithm and also appears in the LISREL manual as example NPV.KM.</p>
<p>Another classic data set is the 9 variable Thurstone problem which is discussed in detail by R. P. McDonald (1985, 1999) and and is used as example in the sem package as well as in the PROC CALIS manual for SAS. These nine tests were grouped by Thurstone and Thurstone, 1941 (based on other data) into three factors: Verbal Comprehension, Word Fluency, and Reasoning. The original data came from Thurstone and Thurstone (1941) but were reanalyzed by Bechthold (1961) who broke the data set into two. McDonald, in turn, selected these nine variables from the larger set of 17 found in Bechtoldt.2. The sample size is 213.</p>
<p>Another set of 9 cognitive variables attributed to Thurstone (1933) is the data set of 4,175 students reported by Professor Brigham of Princeton to the College Entrance Examination Board. This set does not show a clear bifactor solution but is included as a demonstration of the differences between a maximimum likelihood factor analysis solution versus a principal axis factor solution.</p>
<p>More recent applications of the bifactor model are to the measurement of psychological status. The Reise data set is a correlation matrix based upon &gt;35,000 observations to the Consumer Assessment of Health Care Provideers and Systems survey instrument. Reise, Morizot, and Hays (2007) describe a bifactor solution based upon 1,000 cases.</p>
<p>The five factors from Reise et al. reflect Getting care quickly (1-3), Doctor communicates well (4-7), Courteous and helpful staff (8,9), Getting needed care (10-13), and Health plan customer service (14-16).</p>
<p>The two Bechtoldt data sets are two samples from Thurstone and Thurstone (1941). They include 17 variables, 9 of which were used by McDonald to form the Thurstone data set. The sample sizes are 212 and 213 respectively. The six proposed factors reflect memory, verbal, words, space, number and reasoning with three markers for all expect the rote memory factor. 9 variables from this set appear in the Thurstone data set.</p>
<p>Two more data sets with similar structures are found in the <code>Harman</code> data set.</p>
<ul>
<li>
<p>Bechtoldt.1: 17 x 17 correlation matrix of ability tests, N = 212.</p>
</li>
<li>
<p>Bechtoldt.2: 17 x 17 correlation matrix of ability tests, N = 213.</p>
</li>
<li>
<p>Holzinger: 14 x 14 correlation matrix of ability tests, N = 355</p>
</li>
<li>
<p>Holzinger.9: 9 x 9 correlation matrix of ability tests, N = 145</p>
</li>
<li>
<p>Reise: 16 x 16 correlation matrix of health satisfaction items. N = 35,000</p>
</li>
<li>
<p>Thurstone: 9 x 9 correlation matrix of ability tests, N = 213</p>
</li>
<li>
<p>Thurstone.33: Another 9 x 9 correlation matrix of ability items, N=4175</p>
</li>
</ul>
<h3>Source</h3>
<p>Holzinger: Holzinger and Swineford (1937)Reise: Steve Reise (personal communication)sem help page (for Thurstone)</p>
<h3>References</h3>
<p>Bechtoldt, Harold, (1961). An empirical study of the factor analysis stability hypothesis. Psychometrika, 26, 405-432.</p>
<p>Holzinger, Karl and Swineford, Frances (1937) The Bi-factor method. Psychometrika, 2, 41-54</p>
<p>Holzinger, K., &amp; Swineford, F. (1939). A study in factor analysis: The stability of a bifactor solution. Supplementary Educational Monograph, no. 48. Chicago: University of Chicago Press.</p>
<p>McDonald, Roderick P. (1999) Test theory: A unified treatment. L. Erlbaum Associates. Mahwah, N.J.</p>
<p>Mansolf, Maxwell and Reise, Steven P. (2016) Exploratory Bifactor Analysis: The Schmid-Leiman Orthogonalization and Jennrich-Bentler Analytic Rotations, Multivariate Behavioral Research, 51:5, 698-717, DOI: 10.1080/00273171.2016.1215898</p>
<p>Reise, Steven and Morizot, Julien and Hays, Ron (2007) The role of the bifactor model in resolving dimensionality issues in health outcomes measures. Quality of Life Research. 16, 19-31.</p>
<p>Thurstone, Louis Leon (1933) The theory of multiple factors. Edwards Brothers, Inc. Ann Arbor</p>
<p>Thurstone, Louis Leon and Thurstone, Thelma (Gwinn). (1941) Factorial studies of intelligence. The University of Chicago Press. Chicago, Il.</p>
<h3>Examples</h3>
<pre>if(!require(GPArotation)) {message("I am sorry, to run omega requires GPArotation") 
} else {
#holz &lt;- omega(Holzinger,4, title = "14 ability tests from Holzinger-Swineford")
#bf &lt;- omega(Reise,5,title="16 health items from Reise") 
#omega(Reise,5,labels=colnames(Reise),title="16 health items from Reise")
thur.om &lt;- omega(Thurstone,title="9 variables from Thurstone") #compare with
thur.bf &lt;- fa(Thurstone,3,rotate="biquartimin")
factor.congruence(thur.om,thur.bf)
}
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-65173.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-65173.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-thurstone.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-65173.json';</script>