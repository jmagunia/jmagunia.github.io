---
title: R Dataset / Package Ecdat / PatentsHGH
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">PatentsHGH</span> data set which pertains to Dynamic Relation Between Patents and R\&amp;D . The <span class="mono">PatentsHGH</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">PatentsHGH</span> data set in R by issuing the following command at the console <span class="mono">data("PatentsHGH")</span>. This will load the data into a variable called <span class="mono">PatentsHGH</span>. If R says the <span class="mono">PatentsHGH</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-83742.csv">PatentsHGH R data set</a></span>. The size of this file is about 161,754 bytes.</p><h2>Dynamic Relation Between Patents and R\&amp;D</h2>
<h3>Description</h3>
<p>a panel of 346 observations from 1975 to 1979</p>
<p><em>number of observations</em> : 1730</p>
<p><em>observation</em> : production units</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(PatentsHGH)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>obsno</dt>
<dd>
<p>firm index</p>
</dd>
<dt>year</dt>
<dd>
<p>year</p>
</dd>
<dt>cusip</dt>
<dd>
<p>Compustat's identifying number for the firm (Committee on Uniform Security Identification Procedures number)</p>
</dd>
<dt>ardsic</dt>
<dd>
<p>a two-digit code for the applied R&amp;D industrial classification (roughly that in Bound, Cummins, Griliches, Hall, and Jaffe, in the Griliches R&amp;D, Patents, and Productivity volume)</p>
</dd>
<dt>scisect</dt>
<dd>
<p>is the firm in the scientific sector ?</p>
</dd>
<dt>logk</dt>
<dd>
<p>the logarithm of the book value of capital in 1972.</p>
</dd>
<dt>sumpat</dt>
<dd>
<p>the sum of patents applied for between 1972-1979.</p>
</dd>
<dt>logr</dt>
<dd>
<p>the logarithm of R&amp;D spending during the year (in 1972 dollars)</p>
</dd>
<dt>logr1</dt>
<dd>
<p>the logarithm of R&amp;D spending (one year lag)</p>
</dd>
<dt>logr2</dt>
<dd>
<p>the logarithm of R&amp;D spending (two years lag)</p>
</dd>
<dt>logr3</dt>
<dd>
<p>the logarithm of R&amp;D spending (three years lag)</p>
</dd>
<dt>logr4</dt>
<dd>
<p>the logarithm of R&amp;D spending (four years lag)</p>
</dd>
<dt>logr5</dt>
<dd>
<p>the logarithm of R&amp;D spending (five years lag)</p>
</dd>
<dt>pat</dt>
<dd>
<p>the number of patents applied for during the year that were eventually granted</p>
</dd>
<dt>pat1</dt>
<dd>
<p>the number of patents (one year lag)</p>
</dd>
<dt>pat2</dt>
<dd>
<p>the number of patents (two years lag)</p>
</dd>
<dt>pat3</dt>
<dd>
<p>the number of patents (three years lag)</p>
</dd>
<dt>pat4</dt>
<dd>
<p>the number of patents (four years lag)</p>
</dd>
</dl>
<h3>Source</h3>
<p>Hall, Bronwyn , Zvi Griliches and Jerry Hausman (1986) “Patents and R&amp;D: Is There a Lag?”, <em>International Economic Review</em>, <b>27</b>, 265-283.</p>
<h3>References</h3>
<p>Cameron, A.C. and Trivedi P.K. (1998) <em>Regression analysis of count data</em>, Cambridge University Press, <a href="http://cameron.econ.ucdavis.edu/racd/racddata.html">http://cameron.econ.ucdavis.edu/racd/racddata.html</a>, chapter 9.</p>
<p>Cameron, A.C. and P.K. Trivedi (2005) <em>Microeconometrics : methods and applications</em>, Cambridge, pp. 792–5.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code>,</p>
<p><code>Index.Time.Series</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-83742.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-83742.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-patentshgh.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-83742.json';</script>