---
title: R Dataset / Package wooldridge / mathpnl
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">mathpnl</span> data set which pertains to mathpnl. The <span class="mono">mathpnl</span> data set is found in the <span class="mono">wooldridge</span> R package. You can load the <span class="mono">mathpnl</span> data set in R by issuing the following command at the console <span class="mono">data("mathpnl")</span>. This will load the data into a variable called <span class="mono">mathpnl</span>. If R says the <span class="mono">mathpnl</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("wooldridge")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-76230.csv">mathpnl R data set</a></span>. The size of this file is about 1,974,592 bytes.</p><h2>mathpnl</h2>
<h3>Description</h3>
<p>Data loads lazily. Type data(mathpnl) into the console.</p>
<h3>Usage</h3>
<pre>
data(mathpnl)
</pre>
<h3>Format</h3>
<p>A data.frame with 3850 rows and 52 variables:</p>
<ul>
<li>
<p>distid. district identifier</p>
</li>
<li>
<p>intid. intermediate school district</p>
</li>
<li>
<p>lunch. percent eligible for free lunch</p>
</li>
<li>
<p>enrol. school enrollment</p>
</li>
<li>
<p>ptr. pupil/teacher: 1995-98</p>
</li>
<li>
<p>found. foundation grant, $: 1995-98</p>
</li>
<li>
<p>expp. expenditure per pupil</p>
</li>
<li>
<p>revpp. revenue per pupil</p>
</li>
<li>
<p>avgsal. average teacher salary</p>
</li>
<li>
<p>drop. high school dropout rate, percent</p>
</li>
<li>
<p>grad. high school grad. rate, percent</p>
</li>
<li>
<p>math4. percent satisfactory, 4th grade math</p>
</li>
<li>
<p>math7. percent satisfactory, 7th grade math</p>
</li>
<li>
<p>choice. number choice students</p>
</li>
<li>
<p>psa. # public school academy studs.</p>
</li>
<li>
<p>year. 1992-1998</p>
</li>
<li>
<p>staff. staff per 1000 students</p>
</li>
<li>
<p>avgben. avg teacher fringe benefits</p>
</li>
<li>
<p>y92. =1 if year == 1992</p>
</li>
<li>
<p>y93. =1 if year == 1993</p>
</li>
<li>
<p>y94. =1 if year == 1994</p>
</li>
<li>
<p>y95. =1 if year == 1995</p>
</li>
<li>
<p>y96. =1 if year == 1996</p>
</li>
<li>
<p>y97. =1 if year == 1997</p>
</li>
<li>
<p>y98. =1 if year == 1998</p>
</li>
<li>
<p>lexpp. log(expp)</p>
</li>
<li>
<p>lfound. log(found)</p>
</li>
<li>
<p>lexpp_1. lexpp[_n-1]</p>
</li>
<li>
<p>lfnd_1. lfnd[_n-1]</p>
</li>
<li>
<p>lenrol. log(enrol)</p>
</li>
<li>
<p>lenrolsq. lenrol^2</p>
</li>
<li>
<p>lunchsq. lunch^2</p>
</li>
<li>
<p>lfndsq. lfnd^2</p>
</li>
<li>
<p>math4_1. math4[_n-1]</p>
</li>
<li>
<p>cmath4. math4 - math4_1</p>
</li>
<li>
<p>gexpp. lexpp - lexpp_1</p>
</li>
<li>
<p>gexpp_1. gexpp[_n-1</p>
</li>
<li>
<p>gfound. lfound - lfnd_1</p>
</li>
<li>
<p>gfnd_1. gfound[_n-1]</p>
</li>
<li>
<p>clunch. lunch - lunch[_n-1]</p>
</li>
<li>
<p>clnchsq. lunchsq - lunchsq[_n-1]</p>
</li>
<li>
<p>genrol. lenrol - lenrol[_n-1]</p>
</li>
<li>
<p>genrolsq. genrol^2</p>
</li>
<li>
<p>expp92. expp in 1992</p>
</li>
<li>
<p>lexpp92. log(expp92)</p>
</li>
<li>
<p>math4_92. math4 in 1992</p>
</li>
<li>
<p>cpi. consumer price index</p>
</li>
<li>
<p>rexpp. real spending per pupil, 1997$</p>
</li>
<li>
<p>lrexpp. log(rexpp)</p>
</li>
<li>
<p>lrexpp_1. lrexpp[_n-1]</p>
</li>
<li>
<p>grexpp. lrexpp - lrexpp_1</p>
</li>
<li>
<p>grexpp_1. grexpp[_n-1]</p>
</li>
</ul>
<h3>Source</h3>
<p><a href="https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041">https://www.cengage.com/cgi-wadsworth/course_products_wp.pl?fid=M20b&amp;product_isbn_issn=9781111531041</a></p>
<h3>Examples</h3>
<pre>
 str(mathpnl)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-76230.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-76230.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-wooldridge-mathpnl.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-76230.json';</script>