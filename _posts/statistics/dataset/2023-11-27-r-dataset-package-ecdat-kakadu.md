---
title: R Dataset / Package Ecdat / Kakadu
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Kakadu</span> data set which pertains to Willingness to Pay for the Preservation of the Kakadu National Park . The <span class="mono">Kakadu</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">Kakadu</span> data set in R by issuing the following command at the console <span class="mono">data("Kakadu")</span>. This will load the data into a variable called <span class="mono">Kakadu</span>. If R says the <span class="mono">Kakadu</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-80914_0.csv">Kakadu R data set</a></span>. The size of this file is about 129,483 bytes.</p><h2>Willingness to Pay for the Preservation of the Kakadu National Park</h2>
<h3>Description</h3>
<p>a cross-section</p>
<p><em>number of observations</em> : 1827</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : Australia</p>
<h3>Usage</h3>
<pre>data(Kakadu)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>lower</dt>
<dd>
<p>lowerbound of willingness to pay, 0 if observation is left censored</p>
</dd>
<dt>upper</dt>
<dd>
<p>upper bound of willingness to pay, 999 if observation is right censored</p>
</dd>
<dt>answer</dt>
<dd>
<p>an ordered factor with levels nn (respondent answers no, no), ny (respondent answers no, yes or yes, no), yy (respondent answers yes, yes)</p>
</dd>
<dt>recparks</dt>
<dd>
<p>the greatest value of national parks and nature reserves is in recreation activities (from 1 to 5)</p>
</dd>
<dt>jobs</dt>
<dd>
<p>jobs are the most important thing in deciding how to use our natural resources (from 1 to 5)</p>
</dd>
<dt>lowrisk</dt>
<dd>
<p>development should be allowed to proceed where environmental damage from activities such as mining is possible but very unlikely (from 1 to 5)</p>
</dd>
<dt>wildlife</dt>
<dd>
<p>it's important to have places where wildlife is preserved (from 1 to 5)</p>
</dd>
<dt>future</dt>
<dd>
<p>it's important to consider future generations (from 1 to 5)</p>
</dd>
<dt>aboriginal</dt>
<dd>
<p>in deciding how to use areas such as Kakadu national park, their importance to the local aboriginal people should be a major factor (from 1 to 5)</p>
</dd>
<dt>finben</dt>
<dd>
<p>in deciding how to use our natural resources such as mineral deposits and forests, the most important thing is the financial benefits for Australia (from 1 to 5)</p>
</dd>
<dt>mineparks</dt>
<dd>
<p>if areas within natural parks are set aside for development projects such as mining, the value of the parks is greatly reduced (from 1 to 5)</p>
</dd>
<dt>moreparks</dt>
<dd>
<p>there should be more national parks created from state forests (from 1 to 5)</p>
</dd>
<dt>gov</dt>
<dd>
<p>the government pays little attention to the people in making decisions (from 1 to 4)</p>
</dd>
<dt>envcon</dt>
<dd>
<p>the respondent recycles things such as paper or glass and regularly buys unbleached toilet paper or environmentally friendly products ?</p>
</dd>
<dt>vparks</dt>
<dd>
<p>the respondent has visited a national park or bushland recreation area in the previous 12 months ?</p>
</dd>
<dt>tvenv</dt>
<dd>
<p>the respondent watches tv programs about the environment ? (from 1 to 9)</p>
</dd>
<dt>conservation</dt>
<dd>
<p>the respondent is member of a conservation organization ?</p>
</dd>
<dt>sex</dt>
<dd>
<p>male,female</p>
</dd>
<dt>age</dt>
<dd>
<p>age</p>
</dd>
<dt>schooling</dt>
<dd>
<p>years of schooling</p>
</dd>
<dt>income</dt>
<dd>
<p>respondent's income in thousands of dollars</p>
</dd>
<dt>major</dt>
<dd>
<p>the respondent received the major–impact scenario of the Kakadu conservation zone survey ?</p>
</dd>
</dl>
<h3>Source</h3>
<p>Werner, Megan (1999) “Allowing for zeros in dichotomous–choice contingent–valuation models”, <em>Journal of Business and Economic Statistics</em>, <b>17(4)</b>, october, 479–486.</p>
<h3>References</h3>
<p>Journal of Business Economics and Statistics web site : <a href="http://amstat.tandfonline.com/loi/ubes20">http://amstat.tandfonline.com/loi/ubes20</a>.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-80914_0.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-80914_0.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-kakadu.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-80914_0.json';</script>