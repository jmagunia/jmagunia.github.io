---
title: R Dataset / Package Ecdat / DoctorAUS
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">DoctorAUS</span> data set which pertains to Doctor Visits in Australia . The <span class="mono">DoctorAUS</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">DoctorAUS</span> data set in R by issuing the following command at the console <span class="mono">data("DoctorAUS")</span>. This will load the data into a variable called <span class="mono">DoctorAUS</span>. If R says the <span class="mono">DoctorAUS</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-47247.csv">DoctorAUS R data set</a></span>. The size of this file is about 247,029 bytes.</p><h2>Doctor Visits in Australia</h2>
<h3>Description</h3>
<p>a cross-section from 1977–1978</p>
<p><em>number of observations</em> : 5190</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : Australia</p>
<h3>Usage</h3>
<pre>data(DoctorAUS)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>sex</dt>
<dd>
<p>sex</p>
</dd>
<dt>age</dt>
<dd>
<p>age</p>
</dd>
<dt>income</dt>
<dd>
<p>annual income in tens of thousands of dollars</p>
</dd>
<dt>insurance</dt>
<dd>
<p>insurance contract (medlevy : medibanl levy, levyplus : private health insurance, freepoor : government insurance due to low income, freerepa : government insurance due to old age disability or veteran status</p>
</dd>
<dt>illness</dt>
<dd>
<p>number of illness in past 2 weeks</p>
</dd>
<dt>actdays</dt>
<dd>
<p>number of days of reduced activity in past 2 weeks due to illness or injury</p>
</dd>
<dt>hscore</dt>
<dd>
<p>general health score using Goldberg's method (from 0 to 12)</p>
</dd>
<dt>chcond</dt>
<dd>
<p>chronic condition (np : no problem, la : limiting activity, nla : not limiting activity)</p>
</dd>
<dt>doctorco</dt>
<dd>
<p>number of consultations with a doctor or specialist in the past 2 weeks</p>
</dd>
<dt>nondocco</dt>
<dd>
<p>number of consultations with non-doctor health professionals (chemist, optician, physiotherapist, social worker, district community nurse, chiropodist or chiropractor) in the past 2 weeks</p>
</dd>
<dt>hospadmi</dt>
<dd>
<p>number of admissions to a hospital, psychiatric hospital, nursing or convalescent home in the past 12 months (up to 5 or more admissions which is coded as 5)</p>
</dd>
<dt>hospdays</dt>
<dd>
<p>number of nights in a hospital, etc. during most recent admission: taken, where appropriate, as the mid-point of the intervals 1, 2, 3, 4, 5, 6, 7, 8-14, 15-30, 31-60, 61-79 with 80 or more admissions coded as 80. If no admission in past 12 months then equals zero.</p>
</dd>
<dt>medecine</dt>
<dd>
<p>total number of prescribed and nonprescribed medications used in past 2 days</p>
</dd>
<dt>prescrib</dt>
<dd>
<p>total number of prescribed medications used in past 2 days</p>
</dd>
<dt>nonpresc</dt>
<dd>
<p>total number of nonprescribed medications used in past 2 days</p>
</dd>
</dl>
<h3>Source</h3>
<p>Cameron, A.C. and P.K. Trivedi (1986) “Econometric Models Based on Count Data: Comparisons and Applications of Some Estimators and Tests”, <em>Journal of Applied Econometrics</em>, <b>1</b>, 29-54..</p>
<h3>References</h3>
<p>Cameron, A.C. and Trivedi P.K. (1998) <em>Regression analysis of count data</em>, Cambridge University Press, <a href="http://cameron.econ.ucdavis.edu/racd/racddata.html">http://cameron.econ.ucdavis.edu/racd/racddata.html</a>, chapter 3.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-47247.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-47247.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-doctoraus.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-47247.json';</script>