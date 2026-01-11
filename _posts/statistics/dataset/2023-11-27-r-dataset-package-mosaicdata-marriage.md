---
title: R Dataset / Package mosaicData / Marriage
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Marriage</span> data set which pertains to Marriage records. The <span class="mono">Marriage</span> data set is found in the <span class="mono">mosaicData</span> R package. You can load the <span class="mono">Marriage</span> data set in R by issuing the following command at the console <span class="mono">data("Marriage")</span>. This will load the data into a variable called <span class="mono">Marriage</span>. If R says the <span class="mono">Marriage</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("mosaicData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-46306.csv">Marriage R data set</a></span>. The size of this file is about 11,393 bytes.</p><h2>Marriage records</h2>
<h3>Description</h3>
<p>Marriage records from the Mobile County, Alabama, probate court.</p>
<h3>Usage</h3>
<pre>
data(Marriage)
</pre>
<h3>Format</h3>
<p>A data frame with 98 observations on the following variables.</p>
<ul>
<li>
<p><code>bookpageID</code> a factor with levels for each book and page (unique identifier)</p>
</li>
<li>
<p><code>appdate</code> a factor with levels corresponding to each of the dates on which the application was filed (in the form MO/DY/YY, e.g. 1/22/99 represents January 22, 1999)</p>
</li>
<li>
<p><code>ceremonydate</code> a factor with levels corresponding to the date of the ceremony</p>
</li>
<li>
<p><code>delay</code> number of days between the application and the ceremony</p>
</li>
<li>
<p><code>officialTitle</code> a factor with levels <code>BISHOP</code> <code>CATHOLIC PRIEST</code> <code>CHIEF CLERK</code> <code>CIRCUIT JUDGE</code> <code>ELDER</code> <code>MARRIAGE OFFICIAL</code> <code>MINISTER</code> <code>PASTOR</code> <code>REVEREND</code></p>
</li>
<li>
<p><code>person</code> a factor with levels <code>Bride</code> <code>Groom</code></p>
</li>
<li>
<p><code>dob</code> a factor with levels corresponding to the date of birth of the person</p>
</li>
<li>
<p><code>age</code> age of the person (in years)</p>
</li>
<li>
<p><code>race</code> a factor with levels <code>American Indian</code> <code>Black</code> <code>Hispanic</code> <code>White</code></p>
</li>
<li>
<p><code>prevcount</code> the number of previous marriages of the person, as listed on the application</p>
</li>
<li>
<p><code>prevconc</code> the way the last marriage ended, as listed on the application</p>
</li>
<li>
<p><code>hs</code> the number of years of high school education, as listed on the application</p>
</li>
<li>
<p><code>college</code> the number of years College education, as listed on the application. Where no number was listed, this field was left blank, unless less than 12 years High School was reported, in which case it was entered as 0.</p>
</li>
<li>
<p><code>dayOfBirth</code> the day of birth, as a number from 1 to 365 counting from January 1</p>
</li>
<li>
<p><code>sign</code> the astrological sign, with levels <code>Aquarius</code> <code>Aries</code> <code>Cancer</code> <code>Capricorn</code> <code>Gemini</code> <code>Leo</code> <code>Libra</code> <code>Pisces</code> <code>Saggitarius</code> <code>Scorpio</code> <code>Taurus</code> <code>Virgo</code></p>
</li>
</ul>
<h3>Details</h3>
<p>The calculation of the astrological sign may not correctly sort people directly on the borders between signs. This variable is not part of the original record.</p>
<h3>Source</h3>
<p>The records were collected through <a href="http://www.mobilecounty.org/probatecourt/recordssearch.htm">http://www.mobilecounty.org/probatecourt/recordssearch.htm</a></p>
<h3>Examples</h3>
<pre>
data(Marriage)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-46306.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-46306.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-mosaicdata-marriage.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-46306.json';</script>