---
title: R Dataset / Package survival / flchain
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">flchain</span> data set which pertains to Assay of serum free light chain for 7874 subjects.. The <span class="mono">flchain</span> data set is found in the <span class="mono">survival</span> R package. You can load the <span class="mono">flchain</span> data set in R by issuing the following command at the console <span class="mono">data("flchain")</span>. This will load the data into a variable called <span class="mono">flchain</span>. If R says the <span class="mono">flchain</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("survival")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-22069.csv">flchain R data set</a></span>. The size of this file is about 332,439 bytes.</p><h2>Assay of serum free light chain for 7874 subjects.</h2>
<h3>Description</h3>
<p>This is a stratified random sample containing 1/2 of the subjects from a study of the relationship between serum free light chain (FLC) and mortality. The original sample contains samples on approximately 2/3 of the residents of Olmsted County aged 50 or greater.</p>
<h3>Usage</h3>
<pre>data(flchain)</pre>
<h3>Format</h3>
<p>A data frame with 7874 persons containing the following variables.</p>
<dl>
<dt><code>age</code></dt>
<dd>
<p>age in years</p>
</dd>
<dt><code>sex</code></dt>
<dd>
<p>F=female, M=male</p>
</dd>
<dt><code>sample.yr</code></dt>
<dd>
<p>the calendar year in which a blood sample was obtained</p>
</dd>
<dt><code>kappa</code></dt>
<dd>
<p>serum free light chain, kappa portion</p>
</dd>
<dt><code>lambda</code></dt>
<dd>
<p>serum free light chain, lambda portion</p>
</dd>
<dt><code>flc.grp</code></dt>
<dd>
<p>the FLC group for the subject, as used in the original analysis</p>
</dd>
<dt><code>creatinine</code></dt>
<dd>
<p>serum creatinine</p>
</dd>
<dt><code>mgus</code></dt>
<dd>
<p>1 if the subject had been diagnosed with monoclonal gammapothy (MGUS)</p>
</dd>
<dt><code>futime</code></dt>
<dd>
<p>days from enrollment until death. Note that there are 3 subjects whose sample was obtained on their death date.</p>
</dd>
<dt><code>death</code></dt>
<dd>
<p>0=alive at last contact date, 1=dead</p>
</dd>
<dt><code>chapter</code></dt>
<dd>
<p>for those who died, a grouping of their primary cause of death by chapter headings of the International Code of Diseases ICD-9</p>
</dd>
</dl>
<h3>Details</h3>
<p>In 1995 Dr. Robert Kyle embarked on a study to determine the prevalence of monoclonal gammopathy of undetermined significance (MGUS) in Olmsted County, Minnesota, a condition which is normally only found by chance from a test (serum electrophoresis) which is ordered for other causes. Later work suggested that one component of immunoglobulin production, the serum free light chain, might be a possible marker for immune disregulation. In 2010 Dr. Angela Dispenzieri and colleagues assayed FLC levels on those samples from the original study for which they had patient permission and from which sufficient material remained for further testing. They found that elevated FLC levels were indeed associated with higher death rates.</p>
<p>Patients were recruited when they came to the clinic for other appointments, with a final random sample of those who had not yet had a visit since the study began. An interesting side question is whether there are differences between early, mid, and late recruits.</p>
<p>This data set contains an age and sex stratified random sample that includes 7874 of the original 15759 subjects. The original subject identifiers and dates have been removed to protect patient identity. Subsampling was done to further protect this information.</p>
<h3>Source</h3>
<p>The primary investigator (A Dispenzieri) and statistician (T Therneau) for the study.</p>
<h3>References</h3>
<p>A Dispenzieri, J Katzmann, R Kyle, D Larson, T Therneau, C Colby, R Clark, G Mead, S Kumar, LJ Melton III and SV Rajkumar (2012). Use of monclonal serum immunoglobulin free light chains to predict overall survival in the general population, Mayo Clinic Proceedings 87:512-523.</p>
<p>R Kyle, T Therneau, SV Rajkumar, D Larson, M Plevak, J Offord, A Dispenzieri, J Katzmann, and LJ Melton, III, 2006, Prevalence of monoclonal gammopathy of undetermined significance, New England J Medicine 354:1362-1369.</p>
<h3>Examples</h3>
<pre>
data(flchain)
age.grp &lt;-cut(flchain$age, c(49,54, 59,64, 69,74,79, 89, 110),
 labels= paste(c(50,55,60,65,70,75,80,90),
 c(54,59,64,69,74,79,89,109), sep='-'))
table(flchain$sex, age.grp)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-22069.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-22069.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-survival-flchain.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-22069.json';</script>